import { Injectable } from '@angular/core';
import { ActionActivity, FreeActionReaction, InteractionAbility, ItemWorn, Lore, MeleeStrike, RangedStrike, RepeatingSection, Roll20NpcSheet, Spell, SpellsInfo } from './types';

@Injectable({
  providedIn: 'root'
})
export class FoundryToRoll20Service {

  constructor() { }

  convertFoundrySheetToRoll20(from: any): Roll20NpcSheet {
    const roll20Sheet = {
      attr_character_name: from.name,
      attr_npc_type: from.system.details.creatureType,
      attr_level: from.system.details.level.value,
      attr_alignment: from.system.details.alignment.value,
      attr_size: from.system.traits.size.value,
      attr_traits: this.join(from.system.traits.value),
      attr_perception: from.system.attributes.perception.value,
      attr_senses: this.join(from.system.traits.senses, (s: any) => s.value),
      attr_languages: this.join(from.system.traits.languages.value),
      attr_npc_short_description: this.parseDescription(from.system.details.publicNotes),
      attr_acrobatics: this.extractSkill(from, 'acrobatics'),
      attr_arcana: this.extractSkill(from, 'arcana'),
      attr_athletics: this.extractSkill(from, 'athletics'),
      attr_crafting: this.extractSkill(from, 'crafting'),
      attr_deception: this.extractSkill(from, 'deception'),
      attr_diplomacy: this.extractSkill(from, 'diplomacy'),
      attr_intimidation: this.extractSkill(from, 'intimidation'),
      attr_medicine: this.extractSkill(from, 'medicine'),
      attr_nature: this.extractSkill(from, 'nature'),
      attr_occultism: this.extractSkill(from, 'occultism'),
      attr_performance: this.extractSkill(from, 'performance'),
      attr_religion: this.extractSkill(from, 'religion'),
      attr_society: this.extractSkill(from, 'society'),
      attr_stealth: this.extractSkill(from, 'stealth'),
      attr_survival: this.extractSkill(from, 'survival'),
      attr_thievery: this.extractSkill(from, 'thievery'),
      attr_acrobatics_notes: null,
      attr_arcana_notes: null,
      attr_athletics_notes: null,
      attr_crafting_notes: null,
      attr_deception_notes: null,
      attr_diplomacy_notes: null,
      attr_intimidation_notes: null,
      attr_medicine_notes: null,
      attr_nature_notes: null,
      attr_occultism_notes: null,
      attr_performance_notes: null,
      attr_religion_notes: null,
      attr_society_notes: null,
      attr_stealth_notes: null,
      attr_survival_notes: null,
      attr_thievery_notes: null,
      repeating_lore: this.extractLores(from),
      attr_strength_modifier: this.modifierText(from.system.abilities.str.mod),
      attr_dexterity_modifier: this.modifierText(from.system.abilities.dex.mod),
      attr_constitution_modifier: this.modifierText(from.system.abilities.con.mod),
      attr_intelligence_modifier: this.modifierText(from.system.abilities.int.mod),
      attr_wisdom_modifier: this.modifierText(from.system.abilities.wis.mod),
      attr_charisma_modifier: this.modifierText(from.system.abilities.cha.mod),
      attr_armor_class: from.system.attributes.ac.value,
      textarea_attr_armor_class_notes: null,
      attr_saving_throws_fortitude: from.system.saves.fortitude.value,
      attr_saving_throws_reflex: from.system.saves.reflex.value,
      attr_saving_throws_will: from.system.saves.will.value,
      textarea_attr_saving_throws_notes: from.system.attributes.allSaves.value,
      attr_hit_points_max: from.system.attributes.hp.max,
      textarea_attr_hit_points_notes: null,
      attr_hit_points: from.system.attributes.hp.max,
      attr_immunities: this.join(from.system.attributes.immunities, (val: any) => val.type),
      attr_weaknesses: this.join(from.system.attributes.weaknesses, (val: any) => this.weaknessResistanceText(val)),
      attr_resistances: this.join(from.system.attributes.resistances, (val: any) => this.weaknessResistanceText(val)),
      attr_speed: from.system.attributes.speed.value,
      attr_speed_notes: this.join(from.system.attributes.speed.otherSpeeds, (os: any) => `${os.type} ${os.value}`),
      repeating_items_worn: this.extractItemsWorn(from),
      repeating_interaction_abilities: this.extractInteractionAbilities(from),
      repeating_free_actions_reactions: this.extractFreeActionsReactions(from),
      repeating_melee_strikes: this.extractMeleeStrikes(from),
      repeating_ranged_strikes: this.extractRangedStrikes(from),
      repeating_actions_activities: this.extractActionsActivities(from),
      spells: this.extractSpells(from)
    }

    console.log('Roll20 Sheet data', roll20Sheet);
    return roll20Sheet;
  }

  private extractSkill(from: any, skillName: string): string | null {
    const loreItem = from.items.filter((item: any) => item.name.toLowerCase() == skillName.toLowerCase() && item.type == 'lore');

    if (!loreItem || !loreItem.length) {
      return null;
    } else {
      if (loreItem.length > 1) {
        console.warn('Found more than one lore item for skill ' + skillName);
      }
      return this.modifierText(loreItem[0].system.mod.value);
    }
  }

  private extractLores(from: any): RepeatingSection<Lore> | null {
    return null;
  }

  private extractItemsWorn(from: any): RepeatingSection<ItemWorn> | null {
    const items = from.items.filter((it: any) => it.type == 'weapon' || it.type == 'consumable');

    if (!items || !items.length) {
      return null;
    }

    return {
      containerSelector: 'div.npc-items',
      items: items.map((it: any) => ({
        attr_worn_item: it.name,
        textarea_attr_worn_misc: this.parseDescription(it.system.description.value),
        textarea_attr_description: null
      }))
    };
  }

  private extractInteractionAbilities(from: any): RepeatingSection<InteractionAbility> | null {
    const items = from.items.filter((it: any) => it.type == 'action' && it.system.actionCategory.value == 'interaction');

    if (!items || !items.length) {
      return null;
    }

    return {
      containerSelector: 'div.npc-interaction-abilities',
      items: items.map((it: any) => ({
        attr_name: it.name,
        attr_rep_traits: this.join(it.system.traits.value),
        textarea_attr_description: this.parseDescription(it.system.description.value)
      }))
    };
  }

  private extractFreeActionsReactions(from: any): RepeatingSection<FreeActionReaction> | null {
    const items = from.items.filter((it: any) => it.type == 'action' && it.system.actionCategory.value == 'defensive');

    if (!items || !items.length) {
      return null;
    }

    return {
      containerSelector: 'div.npc-free-actions-reactions',
      items: items.map((it: any) => ({
        attr_name: it.name,
        checkbox_free_action_attr_free_action: it.system.actionType == 'free' ? 'free action' : null,
        checkbox_reaction_attr_reaction: it.system.actionType == 'reaction' ? 'reaction' : null,
        attr_rep_traits: this.join(it.system.rules.length ? it.system.rules[0].traits : []),
        attr_source: null,
        attr_trigger: null, //TODO: it's in the middle of the description of the text
        textarea_attr_description: this.parseDescription(it.system.description.value),
      }))
    };
  }

  private extractMeleeStrikes(from: any): RepeatingSection<MeleeStrike> | null {
    const items = from.items.filter((it: any) => it.type == 'melee' && it.system.weaponType.value == 'melee');

    if (!items || !items.length) {
      return null;
    }

    return {
      containerSelector: 'div.npc-melee-strikes',
      items: items.map((it: any) => ({
        attr_weapon: it.name,
        attr_weapon_strike: this.modifierText(it.system.bonus.value),
        attr_weapon_traits: this.join(it.system.traits.value),
        checkbox_1_attr_weapon_agile: ((it.system.traits.value || []).indexOf('agile') >= 0) ? '1' : null,
        attr_weapon_strike_damage: this.getDamageRoll(it).damage,
        attr_weapon_strike_damage_type: this.getDamageRoll(it).damageType,
        attr_weapon_strike_damage_additional: null, //TODO
        attr_weapon_notes: null, //TODO
      }))
    };
  }

  private extractRangedStrikes(from: any): RepeatingSection<RangedStrike> | null {
    const items = from.items.filter((it: any) => it.type == 'melee' && it.system.weaponType.value == 'ranged');

    if (!items || !items.length) {
      return null;
    }

    return {
      containerSelector: 'div.npc-ranged-strikes',
      items: items.map((it: any) => ({
        attr_weapon: it.name,
        attr_weapon_strike: this.modifierText(it.system.bonus.value),
        attr_weapon_traits: this.join(it.system.traits.value),
        checkbox_1_attr_weapon_agile: ((it.system.traits.value || []).indexOf('agile') >= 0) ? '1' : null,
        attr_weapon_strike_damage: this.getDamageRoll(it).damage,
        attr_weapon_strike_damage_type: this.getDamageRoll(it).damageType,
        attr_weapon_strike_damage_additional: null, //TODO
        attr_weapon_range: null, //TODO
        attr_weapon_notes: null, //TODO
      }))
    };
  }

  private extractActionsActivities(from: any): RepeatingSection<ActionActivity> | null {
    const items = from.items.filter((it: any) => it.type == 'action' && it.system.actionCategory.value == 'offensive');

    if (!items || !items.length) {
      return null;
    }

    return {
      containerSelector: 'div.npc-actions-and-activies',
      items: items.map((it: any) => ({
        attr_name: it.name,
        attr_actions: this.getActions(it),
        attr_rep_traits: this.join(it.system.traits.value),
        attr_source: null,
        textarea_attr_description: this.parseDescription(it.system.description.value),
      }))
    };
  }

  private join<T, E extends (inp: T) => string>(arr: T[] | T, extractor?: E): string | null {
    if (!arr) {
      return null;
    }

    if (!Array.isArray(arr)) {
      arr = [arr];
    }

    if (!arr.length) {
      return null;
    }

    let arrStr: string[];
    if (extractor) {
      arrStr = arr.map(it => extractor(it));
    } else {
      arrStr = arr as string[];
    }

    return arrStr.map((str: string) => str.replaceAll('-', ' ')).join(', ');
  }

  private weaknessResistanceText(val: { type: string, value: number, exceptions?: string[] }): string {
    const except = val.exceptions ? '(except ' + val.exceptions.join(', ') + ')' : '';
    return `${val.type} ${val.value} ${except}`;
  }

  private getDamageRoll(item: any): { damage: string, damageType: string } {
    const keys = Object.keys(item.system.damageRolls);
    return item.system.damageRolls[keys[0]];
  }

  private getActions(item: any): string | null {
    if (item.system.actionCategory.value == 'reaction') {
      return 'Reaction';
    } else if (item.system.actionCategory.value == 'free') {
      return 'Free Action';
    } else if (item.system.actions.value) {
      return `${item.system.actions.value} Actions`;
    } else {
      return null;
    }
  }

  private modifierText(mod: any) {
    if (mod !== 0 && !mod) {
      return mod;
    }
    if (typeof mod != 'number') {
      mod = Number(mod);
    }

    if (mod <= 0) {
      return mod.toString();
    } else {
      return '+' + mod;
    }
  }

  private parseDescription(description: string): string {
    if (!description || !description.replaceAll) {
      return description;
    }

    return description
      .replaceAll(/<p>|<\/p>|<hr \/>|<strong>|<ul>|<\/ul>|<\/li>|<em>|<\/em>/g, '')
      .replaceAll('</strong>', ':')
      .replaceAll('<li>', '- ')
      .replaceAll(/@Check\[type:(.*)\|(dc:\d+).*\]/g, '$1 saving throw, $2')
      .replaceAll(/@\w*\[[^\}]*\]\{([^\}]*)\}/g, '$1')
      .replaceAll(/\[\[\/\w+\s*[^\[\]]*(?:\[[^\]]*\])?\]\]\{([^\}]*)\}/g, "$1")
      .replaceAll(/\[\[\/r\s*([^\[\]]*)(?:\[([^\]]*)\])?\]\]/g, "$1 $2")
      .replaceAll(/@\w*\[.*\]/g, '')
  }

  private extractSpells(from: any): SpellsInfo | null {
    const spellcastingEntries: any[] = from.items.filter((item: any) => item.type == 'spellcastingEntry');
    if (!spellcastingEntries.length) {
      return null;
    }
    const spells: SpellsInfo = {};

    spellcastingEntries.forEach(sce => this.processSpellcastingEntry(sce, spells));

    from.items
      .filter((item: any) => item.type == 'spell')
      .forEach((item: any) => {
        const spell: Spell = {
          attr_name: item.name,
          attr_spelllevel: item.system.level.value,
          attr_traits: this.join(item.system.traits.value),
          attr_domain: null,
          select_attr_school: item.system.school.value,
          attr_cast: this.parseSpellComponents(item.system.components),
          select_attr_cast_detail_label: null,
          attr_cast_detail_information: null,
          attr_range: item.system.range.value,
          attr_target: item.system.target.value,
          attr_area: item.system.area ? (`${item.system.area.type} ${item.system.area.value}`) : null,
          attr_duration: item.system.duration.value,
          select_attr_frequency: null,
          attr_spellattack_custom: null,
          attr_spellattack_misc: null,
          attr_spellattack_other: null,
          attr_damage_dice: item.system.damage && item.system.damage.value && item.system.damage.value['0'] ? item.system.damage.value['0'].value : '',
          select_attr_damage_ability: null,
          attr_damage_misc: null,
          attr_damage_other: null,
          attr_damage_type: item.system.damage && item.system.damage.value && item.system.damage.value['0'] ? item.system.damage.value['0'].type.value : '',
          attr_damage_additional: null,
          select_attr_npc_saving_throw_select: !item.system.save.value ? '' : (item.system.basic ? '@{npc_save_roll_basic}' : '@{npc_save_roll}'),
          select_attr_save_type: item.system.save.value,
          attr_spelldc: null,
          attr_spelldc_misc: null,
          textarea_attr_save_critical_success: null,
          textarea_attr_save_success: null,
          textarea_attr_save_failure: null,
          textarea_attr_save_critical_failure: null,
          textarea_attr_description: this.parseDescription(item.system.description.value),
          textarea_attr_heightened: null
        };

        let repeating_section;
        if (item.system.traits.value.indexOf('cantrip') >= 0) {
          if (!spells.repeating_cantrips) {
            spells.repeating_cantrips = {
              containerSelector: 'div.spells div.cantrips',
              items: []
            }
          }
          repeating_section = spells.repeating_cantrips;
        } else if (item.system.category == 'focus') {
          if (!spells.repeating_focus) {
            spells.repeating_focus = {
              containerSelector: 'div.spells div.focus',
              items: []
            }
          }
          repeating_section = spells.repeating_focus;
        } else if (item.system.location && item.system.location.value && item.system.location.value == spells.spellcastingEntryInnateId) {
          repeating_section = spells.repeating_innate;
        } else {
          repeating_section = spells.repeating_normalspells || spells.repeating_innate;
        }

        if (!repeating_section) {
          console.error('Error processing spells');
        } else {
          repeating_section.items.push(spell);
        }
      });
    return spells;
  }

  private processSpellcastingEntry(spellcastingEntry: any, spells: SpellsInfo): void {
    spells.attr_spell_attack = spellcastingEntry.system.spelldc.value;
    spells.attr_spell_dc = spellcastingEntry.system.spelldc.dc;

    const prepared = spellcastingEntry.system.prepared.value;
    if (prepared == 'prepared') {
      spells.checkbox_prepared_attr_spellcaster_prepared = 'prepared';
      spells.spellcastingEntryPreparedId = spellcastingEntry._id;
      spells.repeating_normalspells = {
        containerSelector: 'div.spells div.normalspells',
        items: []
      }
    }

    if (prepared == 'innate') {
      spells.checkbox_spontaneous_attr_spellcaster_spontaneous = 'spontaneous';
      spells.spellcastingEntryInnateId = spellcastingEntry._id;
      spells.repeating_innate = {
        containerSelector: 'div.spells div.innate',
        items: []
      }
    }

    if (spellcastingEntry.system.autoHeightenLevel && spellcastingEntry.system.autoHeightenLevel.value) {
      spells.attr_cantrips_per_day = spellcastingEntry.system.autoHeightenLevel.value;
    }
  }

  private parseSpellComponents(components: any): string {
    const comps = ['focus', 'material', 'somatic', 'verbal'];
    return comps.filter(c => components[c]).join(', ');
  }
}
