import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { debounceTime, map, Subject } from 'rxjs';
import { BrowserService } from './browser-service';
import { FoundryPF2GithubService } from './foundry-pf2-github.service';
import { FoundryToRoll20Service } from './foundry-to-roll20.service';
import { CreatureIndexData, PacksTree } from './types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  allNodes!: TreeNode[];
  nodes!: TreeNode[];
  loading!: boolean;
  selectedNode!: TreeNode;
  previousSelectedNode!: TreeNode;
  filter!: string;

  searchSubject = new Subject();

  constructor(
    private foundryPF2GithubService: FoundryPF2GithubService,
    private foundryToRoll20Service: FoundryToRoll20Service,
    private browserService: BrowserService
  ) {

  }

  ngOnInit(): void {
    this.loading = true;
    const packsTree = this.foundryPF2GithubService.getCreatureTree();
    this.allNodes = this.convertPacksTree(packsTree);
    this.nodes = this.allNodes;
    this.loading = false;
    this.searchSubject.pipe(debounceTime(1000)).subscribe(search => this.updateFilter(search as string));
  }

  private convertPacksTree(packsTree: PacksTree): TreeNode[] {
    return Object.values(packsTree).map(packIndexData => ({
      label: packIndexData.label,
      data: packIndexData,
      expandedIcon: "pi pi-folder-open",
      collapsedIcon: "pi pi-folder",
      leaf: false,
      selectable: false,
      
      children: this.convertCreatureIndexData(packIndexData.itens),
    })).sort((n1, n2) => n1.label.toLowerCase().localeCompare(n2.label.toLowerCase()));
  }

  private convertCreatureIndexData(creatureIndexData: CreatureIndexData[]): TreeNode[] {
    return creatureIndexData.map(c => ({
      label: c.label,
      data: c,
      leaf: true,
      selectable: true,
      type: 'selectableNode'
    })).sort((n1, n2) => n1.label.toLowerCase().localeCompare(n2.label.toLowerCase()));
  }

  nodeSelect(event: any) {
    console.log('select', event, this.selectedNode);
    if (this.previousSelectedNode) {
      this.previousSelectedNode.data.selected = false;
    }
    event.node.data.selected = true;
    this.previousSelectedNode = event.node;
  }

  nodeUnselect(event: any) {
    event.node.data.selected = false;
  }

  import(node: TreeNode) {
    this.foundryPF2GithubService.getCreatureJson(node.data.path).subscribe((creature: any) => {
      const roll20Sheet = this.foundryToRoll20Service.convertFoundrySheetToRoll20(creature);
      this.browserService.sendMessage('importCreature', roll20Sheet);
    });
  }

  filterChanged(event: any) {
    this.searchSubject.next(event);
  }

  updateFilter(filter: string) {
    if (!filter || filter.trim() == '') {
      this.nodes = this.allNodes;
      return;
    }
    this.nodes = [];
    this.allNodes.forEach(node => {
      if (!node.children) {
        return;
      }
      const newChildren = [];
      for (let child of node.children) {
        if (!child.label) {
          continue;
        } else if (child.label.toLowerCase().indexOf(filter.toLowerCase()) >=0 ) {
          newChildren.push(child);
        }
      }

      if (newChildren.length) {
        this.nodes.push({
          ...node,
          children: newChildren,
          expanded: true
        });
      }
    });
  }
}
