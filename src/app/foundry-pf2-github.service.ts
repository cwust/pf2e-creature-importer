import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PacksTree } from './types';

@Injectable({
  providedIn: 'root'
})
export class FoundryPF2GithubService {

  constructor(
    private http: HttpClient
  ) { }

  public getCreatureTree(): PacksTree {
    //TODO: put this data into a separate file and create a script to generate it automatically
    return {
      "abomination-vaults-bestiary": {
        "label": "Abomination Vaults",
        "itens": [
          {
            "path": "packs/data/abomination-vaults-bestiary.db/afflicted-irnakurse.json",
            "label": "Afflicted Irnakurse"
          },
          {
            "path": "packs/data/abomination-vaults-bestiary.db/aller-rosk.json",
            "label": "Aller Rosk"
          },
          {
            "path": "packs/data/abomination-vaults-bestiary.db/augrael.json",
            "label": "Augrael"
          },
          {
            "path": "packs/data/abomination-vaults-bestiary.db/azvalvigander.json",
            "label": "Azvalvigander"
          },
          {
            "path": "packs/data/abomination-vaults-bestiary.db/barcumbuk.json",
            "label": "Barcumbuk"
          },
          {
            "path": "packs/data/abomination-vaults-bestiary.db/belcorra-haruvex.json",
            "label": "Belcorra Haruvex"
          },
          {
            "path": "packs/data/abomination-vaults-bestiary.db/beluthus.json",
            "label": "Beluthus"
          },
          {
            "path": "packs/data/abomination-vaults-bestiary.db/bloodsiphon.json",
            "label": "Bloodsiphon"
          },
          {
            "path": "packs/data/abomination-vaults-bestiary.db/bone-gladiator.json",
            "label": "Bone Gladiator"
          },
          {
            "path": "packs/data/abomination-vaults-bestiary.db/boss-skrawng.json",
            "label": "Boss Skrawng"
          },
          {
            "path": "packs/data/abomination-vaults-bestiary.db/bright-walker.json",
            "label": "Bright Walker"
          },
          {
            "path": "packs/data/abomination-vaults-bestiary.db/caliddo-haruvex.json",
            "label": "Caliddo Haruvex"
          },
          {
            "path": "packs/data/abomination-vaults-bestiary.db/caligni-defender.json",
            "label": "Caligni Defender"
          },
          {
            "path": "packs/data/abomination-vaults-bestiary.db/canker-cultist.json",
            "label": "Canker Cultist"
          },
          {
            "path": "packs/data/abomination-vaults-bestiary.db/carman-rajani.json",
            "label": "Carman Rajani"
          },
          {
            "path": "packs/data/abomination-vaults-bestiary.db/chafkhem.json",
            "label": "Chafkhem"
          },
          {
            "path": "packs/data/abomination-vaults-bestiary.db/chandriu-invisar.json",
            "label": "Chandriu Invisar"
          },
          {
            "path": "packs/data/abomination-vaults-bestiary.db/child-of-belcorra.json",
            "label": "Child of Belcorra"
          },
          {
            "path": "packs/data/abomination-vaults-bestiary.db/corpselight.json",
            "label": "Corpselight"
          },
          {
            "path": "packs/data/abomination-vaults-bestiary.db/cratonys.json",
            "label": "Cratonys"
          },
          {
            "path": "packs/data/abomination-vaults-bestiary.db/deadtide-skeleton-guard.json",
            "label": "Deadtide Skeleton Guard"
          },
          {
            "path": "packs/data/abomination-vaults-bestiary.db/deep-end-sarglagon.json",
            "label": "Deep End Sarglagon"
          },
          {
            "path": "packs/data/abomination-vaults-bestiary.db/deepwater-dhuthorex.json",
            "label": "Deepwater Dhuthorex"
          },
          {
            "path": "packs/data/abomination-vaults-bestiary.db/dhuthorex-sage.json",
            "label": "Dhuthorex Sage"
          },
          {
            "path": "packs/data/abomination-vaults-bestiary.db/dragons-blood-puffball.json",
            "label": "Dragon's Blood Puffball"
          },
          {
            "path": "packs/data/abomination-vaults-bestiary.db/dread-dhuthorex.json",
            "label": "Dread Dhuthorex"
          },
          {
            "path": "packs/data/abomination-vaults-bestiary.db/dread-wisp.json",
            "label": "Dread Wisp"
          },
          {
            "path": "packs/data/abomination-vaults-bestiary.db/dreshkan.json",
            "label": "Dreshkan"
          },
          {
            "path": "packs/data/abomination-vaults-bestiary.db/drill-field-barbazu.json",
            "label": "Drill Field Barbazu"
          },
          {
            "path": "packs/data/abomination-vaults-bestiary.db/drow-cavern-seer.json",
            "label": "Drow Cavern Seer"
          },
          {
            "path": "packs/data/abomination-vaults-bestiary.db/drow-hunter.json",
            "label": "Drow Hunter"
          },
          {
            "path": "packs/data/abomination-vaults-bestiary.db/drow-shootist.json",
            "label": "Drow Shootist"
          },
          {
            "path": "packs/data/abomination-vaults-bestiary.db/drow-warden.json",
            "label": "Drow Warden"
          },
          {
            "path": "packs/data/abomination-vaults-bestiary.db/dulac.json",
            "label": "Dulac"
          },
          {
            "path": "packs/data/abomination-vaults-bestiary.db/dune-candle.json",
            "label": "Dune Candle"
          },
          {
            "path": "packs/data/abomination-vaults-bestiary.db/elder-child-of-belcorra.json",
            "label": "Elder Child Of Belcorra"
          },
          {
            "path": "packs/data/abomination-vaults-bestiary.db/flickerwisp.json",
            "label": "Flickerwisp"
          },
          {
            "path": "packs/data/abomination-vaults-bestiary.db/galudu.json",
            "label": "Galudu"
          },
          {
            "path": "packs/data/abomination-vaults-bestiary.db/gibtanius.json",
            "label": "Gibtanius"
          },
          {
            "path": "packs/data/abomination-vaults-bestiary.db/gibtas-bounder.json",
            "label": "Gibtas Bounder"
          },
          {
            "path": "packs/data/abomination-vaults-bestiary.db/gibtas-spawn-swarm.json",
            "label": "Gibtas Spawn Swarm"
          },
          {
            "path": "packs/data/abomination-vaults-bestiary.db/groetan-candle.json",
            "label": "Groetan Candle"
          },
          {
            "path": "packs/data/abomination-vaults-bestiary.db/gulzash.json",
            "label": "Gulzash"
          },
          {
            "path": "packs/data/abomination-vaults-bestiary.db/hellforge-barbazu.json",
            "label": "Hellforge Barbazu"
          },
          {
            "path": "packs/data/abomination-vaults-bestiary.db/jafaki.json",
            "label": "Jafaki"
          },
          {
            "path": "packs/data/abomination-vaults-bestiary.db/jarelle-kaldrian.json",
            "label": "Jarelle Kaldrian"
          },
          {
            "path": "packs/data/abomination-vaults-bestiary.db/jaul-mezmin.json",
            "label": "Jaul Mezmin"
          },
          {
            "path": "packs/data/abomination-vaults-bestiary.db/jauls-wolf.json",
            "label": "Jaul's Wolf"
          },
          {
            "path": "packs/data/abomination-vaults-bestiary.db/khurfel.json",
            "label": "Khurfel"
          },
          {
            "path": "packs/data/abomination-vaults-bestiary.db/kragala.json",
            "label": "Kragala"
          },
          {
            "path": "packs/data/abomination-vaults-bestiary.db/ladys-whisper.json",
            "label": "Lady's Whisper"
          },
          {
            "path": "packs/data/abomination-vaults-bestiary.db/mister-beak.json",
            "label": "Mister Beak"
          },
          {
            "path": "packs/data/abomination-vaults-bestiary.db/morlock-cultist.json",
            "label": "Morlock Cultist"
          },
          {
            "path": "packs/data/abomination-vaults-bestiary.db/morlock-engineer.json",
            "label": "Morlock Engineer"
          },
          {
            "path": "packs/data/abomination-vaults-bestiary.db/morlock-scavenger.json",
            "label": "Morlock Scavenger"
          },
          {
            "path": "packs/data/abomination-vaults-bestiary.db/mulventok.json",
            "label": "Mulventok"
          },
          {
            "path": "packs/data/abomination-vaults-bestiary.db/murmur.json",
            "label": "Murmur"
          },
          {
            "path": "packs/data/abomination-vaults-bestiary.db/murschen.json",
            "label": "Murschen"
          },
          {
            "path": "packs/data/abomination-vaults-bestiary.db/nhakazarin.json",
            "label": "Nhakazarin"
          },
          {
            "path": "packs/data/abomination-vaults-bestiary.db/nhimbaloths-cutter.json",
            "label": "Nhimbaloth's Cutter"
          },
          {
            "path": "packs/data/abomination-vaults-bestiary.db/nox.json",
            "label": "Nox"
          },
          {
            "path": "packs/data/abomination-vaults-bestiary.db/nyzuros.json",
            "label": "Nyzuros"
          },
          {
            "path": "packs/data/abomination-vaults-bestiary.db/observation-deck-seugathi-researcher.json",
            "label": "Observation Deck Seugathi Researcher"
          },
          {
            "path": "packs/data/abomination-vaults-bestiary.db/otari-ilvashti.json",
            "label": "Otari Ilvashti"
          },
          {
            "path": "packs/data/abomination-vaults-bestiary.db/padli.json",
            "label": "Padli"
          },
          {
            "path": "packs/data/abomination-vaults-bestiary.db/poisoning-room-specter.json",
            "label": "Poisoning Room Specter"
          },
          {
            "path": "packs/data/abomination-vaults-bestiary.db/quara-orshendiel.json",
            "label": "Quara Orshendiel"
          },
          {
            "path": "packs/data/abomination-vaults-bestiary.db/reaper-skull-puffball.json",
            "label": "Reaper Skull Puffball"
          },
          {
            "path": "packs/data/abomination-vaults-bestiary.db/ryta.json",
            "label": "Ryta"
          },
          {
            "path": "packs/data/abomination-vaults-bestiary.db/sacuishu.json",
            "label": "Sacuishu"
          },
          {
            "path": "packs/data/abomination-vaults-bestiary.db/salaisa-malthulas.json",
            "label": "Salaisa Malthulas"
          },
          {
            "path": "packs/data/abomination-vaults-bestiary.db/scalathrax.json",
            "label": "Scalathrax"
          },
          {
            "path": "packs/data/abomination-vaults-bestiary.db/seugathi-guard.json",
            "label": "Seugathi Guard"
          },
          {
            "path": "packs/data/abomination-vaults-bestiary.db/seugathi-reality-warper.json",
            "label": "Seugathi Reality Warper"
          },
          {
            "path": "packs/data/abomination-vaults-bestiary.db/seugathi-researcher.json",
            "label": "Seugathi Researcher"
          },
          {
            "path": "packs/data/abomination-vaults-bestiary.db/seugathi-servant.json",
            "label": "Seugathi Servant"
          },
          {
            "path": "packs/data/abomination-vaults-bestiary.db/shanrigol-behemoth.json",
            "label": "Shanrigol Behemoth"
          },
          {
            "path": "packs/data/abomination-vaults-bestiary.db/shanrigol-heap.json",
            "label": "Shanrigol Heap"
          },
          {
            "path": "packs/data/abomination-vaults-bestiary.db/siora-fallowglade.json",
            "label": "Siora Fallowglade"
          },
          {
            "path": "packs/data/abomination-vaults-bestiary.db/spellvoid.json",
            "label": "Spellvoid"
          },
          {
            "path": "packs/data/abomination-vaults-bestiary.db/summoning-chamber-erinys.json",
            "label": "Summoning Chamber Erinys"
          },
          {
            "path": "packs/data/abomination-vaults-bestiary.db/torture-chamber-barbazu.json",
            "label": "Torture Chamber Barbazu"
          },
          {
            "path": "packs/data/abomination-vaults-bestiary.db/urdefhan-blood-mage.json",
            "label": "Urdefhan Blood Mage"
          },
          {
            "path": "packs/data/abomination-vaults-bestiary.db/urdefhan-death-scout.json",
            "label": "Urdefhan Death Scout"
          },
          {
            "path": "packs/data/abomination-vaults-bestiary.db/urdefhan-lasher.json",
            "label": "Urdefhan Lasher"
          },
          {
            "path": "packs/data/abomination-vaults-bestiary.db/urevian.json",
            "label": "Urevian"
          },
          {
            "path": "packs/data/abomination-vaults-bestiary.db/urthagul.json",
            "label": "Urthagul"
          },
          {
            "path": "packs/data/abomination-vaults-bestiary.db/vischari.json",
            "label": "Vischari"
          },
          {
            "path": "packs/data/abomination-vaults-bestiary.db/viscous-black-pudding.json",
            "label": "Viscous Black Pudding"
          },
          {
            "path": "packs/data/abomination-vaults-bestiary.db/voidbracken-chuul.json",
            "label": "Voidbracken Chuul"
          },
          {
            "path": "packs/data/abomination-vaults-bestiary.db/voidglutton.json",
            "label": "Voidglutton"
          },
          {
            "path": "packs/data/abomination-vaults-bestiary.db/volluk-azrinae.json",
            "label": "Volluk Azrinae"
          },
          {
            "path": "packs/data/abomination-vaults-bestiary.db/warped-brew-morlock.json",
            "label": "Warped Brew Morlock"
          },
          {
            "path": "packs/data/abomination-vaults-bestiary.db/will-o-the-deep.json",
            "label": "Will-o'-the-Deep"
          },
          {
            "path": "packs/data/abomination-vaults-bestiary.db/witchfire-warden.json",
            "label": "Witchfire Warden"
          },
          {
            "path": "packs/data/abomination-vaults-bestiary.db/wrin-sivinxi.json",
            "label": "Wrin Sivinxi"
          },
          {
            "path": "packs/data/abomination-vaults-bestiary.db/ysondkhelir.json",
            "label": "Ysondkhelir"
          }
        ]
      },
      "age-of-ashes-bestiary": {
        "label": "Age of Ashes",
        "itens": [
          {
            "path": "packs/data/age-of-ashes-bestiary.db/accursed-forge-spurned.json",
            "label": "Accursed Forge-Spurned"
          },
          {
            "path": "packs/data/age-of-ashes-bestiary.db/aiudara-wraith.json",
            "label": "Aiudara Wraith"
          },
          {
            "path": "packs/data/age-of-ashes-bestiary.db/alak-stagram.json",
            "label": "Alak Stagram"
          },
          {
            "path": "packs/data/age-of-ashes-bestiary.db/aluum-enforcer.json",
            "label": "Aluum Enforcer"
          },
          {
            "path": "packs/data/age-of-ashes-bestiary.db/animated-dragonstorm.json",
            "label": "Animated Dragonstorm"
          },
          {
            "path": "packs/data/age-of-ashes-bestiary.db/barushak-il-varashma.json",
            "label": "Barushak Il-Varashma"
          },
          {
            "path": "packs/data/age-of-ashes-bestiary.db/belmazog.json",
            "label": "Belmazog"
          },
          {
            "path": "packs/data/age-of-ashes-bestiary.db/bida.json",
            "label": "Bida"
          },
          {
            "path": "packs/data/age-of-ashes-bestiary.db/blood-boar.json",
            "label": "Blood Boar"
          },
          {
            "path": "packs/data/age-of-ashes-bestiary.db/bloody-blade-mercenary.json",
            "label": "Bloody Blade Mercenary"
          },
          {
            "path": "packs/data/age-of-ashes-bestiary.db/bshez-sand-claws-shak.json",
            "label": "Bshez \"Sand Claws\" Shak"
          },
          {
            "path": "packs/data/age-of-ashes-bestiary.db/calmont.json",
            "label": "Calmont"
          },
          {
            "path": "packs/data/age-of-ashes-bestiary.db/candlarons-echo.json",
            "label": "Candlaron's Echo"
          },
          {
            "path": "packs/data/age-of-ashes-bestiary.db/carnivorous-crystal.json",
            "label": "Carnivorous Crystal"
          },
          {
            "path": "packs/data/age-of-ashes-bestiary.db/charau-ka-dragon-priest.json",
            "label": "Charau-ka Dragon Priest"
          },
          {
            "path": "packs/data/age-of-ashes-bestiary.db/charau-ka.json",
            "label": "Charau-ka"
          },
          {
            "path": "packs/data/age-of-ashes-bestiary.db/corrupt-guard.json",
            "label": "Corrupt Guard"
          },
          {
            "path": "packs/data/age-of-ashes-bestiary.db/crucidaemon.json",
            "label": "Crucidaemon"
          },
          {
            "path": "packs/data/age-of-ashes-bestiary.db/dalos.json",
            "label": "Dalos"
          },
          {
            "path": "packs/data/age-of-ashes-bestiary.db/deculi.json",
            "label": "Deculi"
          },
          {
            "path": "packs/data/age-of-ashes-bestiary.db/dmiri-yoltosha.json",
            "label": "Dmiri Yoltosha"
          },
          {
            "path": "packs/data/age-of-ashes-bestiary.db/doorwarden.json",
            "label": "Doorwarden"
          },
          {
            "path": "packs/data/age-of-ashes-bestiary.db/dragonscarred-dead.json",
            "label": "Dragonscarred Dead"
          },
          {
            "path": "packs/data/age-of-ashes-bestiary.db/dragonshard-guardian.json",
            "label": "Dragonshard Guardian"
          },
          {
            "path": "packs/data/age-of-ashes-bestiary.db/dragonstorm-fire-giant.json",
            "label": "Dragonstorm Fire Giant"
          },
          {
            "path": "packs/data/age-of-ashes-bestiary.db/duergar-slave-lord.json",
            "label": "Duergar Slave Lord"
          },
          {
            "path": "packs/data/age-of-ashes-bestiary.db/ekujae-guardian.json",
            "label": "Ekujae Guardian"
          },
          {
            "path": "packs/data/age-of-ashes-bestiary.db/emaliza-zandivar.json",
            "label": "Emaliza Zandivar"
          },
          {
            "path": "packs/data/age-of-ashes-bestiary.db/emperor-bird.json",
            "label": "Emperor Bird"
          },
          {
            "path": "packs/data/age-of-ashes-bestiary.db/falrok.json",
            "label": "Falrok"
          },
          {
            "path": "packs/data/age-of-ashes-bestiary.db/forge-spurned.json",
            "label": "Forge-Spurned"
          },
          {
            "path": "packs/data/age-of-ashes-bestiary.db/gerhard-pendergrast.json",
            "label": "Gerhard Pendergrast"
          },
          {
            "path": "packs/data/age-of-ashes-bestiary.db/ghastly-bear.json",
            "label": "Ghastly Bear"
          },
          {
            "path": "packs/data/age-of-ashes-bestiary.db/grauladon.json",
            "label": "Grauladon"
          },
          {
            "path": "packs/data/age-of-ashes-bestiary.db/graveshell.json",
            "label": "Graveshell"
          },
          {
            "path": "packs/data/age-of-ashes-bestiary.db/grippli-archer.json",
            "label": "Grippli Archer"
          },
          {
            "path": "packs/data/age-of-ashes-bestiary.db/grippli-greenspeaker.json",
            "label": "Grippli Greenspeaker"
          },
          {
            "path": "packs/data/age-of-ashes-bestiary.db/hellcrown.json",
            "label": "Hellcrown"
          },
          {
            "path": "packs/data/age-of-ashes-bestiary.db/hermean-mutant.json",
            "label": "Hermean Mutant"
          },
          {
            "path": "packs/data/age-of-ashes-bestiary.db/heuberk-thropp.json",
            "label": "Heuberk Thropp"
          },
          {
            "path": "packs/data/age-of-ashes-bestiary.db/hezle.json",
            "label": "Hezle"
          },
          {
            "path": "packs/data/age-of-ashes-bestiary.db/ilgreth.json",
            "label": "Ilgreth"
          },
          {
            "path": "packs/data/age-of-ashes-bestiary.db/ilssrah-embermead.json",
            "label": "Ilssrah Embermead"
          },
          {
            "path": "packs/data/age-of-ashes-bestiary.db/immortal-ichor.json",
            "label": "Immortal Ichor"
          },
          {
            "path": "packs/data/age-of-ashes-bestiary.db/ingnovim-tluss.json",
            "label": "Ingnovim Tluss"
          },
          {
            "path": "packs/data/age-of-ashes-bestiary.db/ingnovims-assistant.json",
            "label": "Ingnovim's Assistant"
          },
          {
            "path": "packs/data/age-of-ashes-bestiary.db/inizra-arumelo.json",
            "label": "Inizra Arumelo"
          },
          {
            "path": "packs/data/age-of-ashes-bestiary.db/ishti.json",
            "label": "Ishti"
          },
          {
            "path": "packs/data/age-of-ashes-bestiary.db/jaggaki.json",
            "label": "Jaggaki"
          },
          {
            "path": "packs/data/age-of-ashes-bestiary.db/jahsi.json",
            "label": "Jahsi"
          },
          {
            "path": "packs/data/age-of-ashes-bestiary.db/kalavakus.json",
            "label": "Kalavakus"
          },
          {
            "path": "packs/data/age-of-ashes-bestiary.db/kelda-halrig.json",
            "label": "Kelda Halrig"
          },
          {
            "path": "packs/data/age-of-ashes-bestiary.db/king-harral.json",
            "label": "King Harral"
          },
          {
            "path": "packs/data/age-of-ashes-bestiary.db/kralgurn.json",
            "label": "Kralgurn"
          },
          {
            "path": "packs/data/age-of-ashes-bestiary.db/laslunn.json",
            "label": "Laslunn"
          },
          {
            "path": "packs/data/age-of-ashes-bestiary.db/lazurite-infused-stone-golem.json",
            "label": "Lazurite-Infused Stone Golem"
          },
          {
            "path": "packs/data/age-of-ashes-bestiary.db/lesser-manifestation-of-dahak.json",
            "label": "Lesser Manifestation Of Dahak"
          },
          {
            "path": "packs/data/age-of-ashes-bestiary.db/living-sap.json",
            "label": "Living Sap"
          },
          {
            "path": "packs/data/age-of-ashes-bestiary.db/malarunk.json",
            "label": "Malarunk"
          },
          {
            "path": "packs/data/age-of-ashes-bestiary.db/manifestation-of-dahak.json",
            "label": "Manifestation Of Dahak"
          },
          {
            "path": "packs/data/age-of-ashes-bestiary.db/mengkare.json",
            "label": "Mengkare"
          },
          {
            "path": "packs/data/age-of-ashes-bestiary.db/mercenary-sailor.json",
            "label": "Mercenary Sailor"
          },
          {
            "path": "packs/data/age-of-ashes-bestiary.db/mialari-docur.json",
            "label": "Mialari Docur"
          },
          {
            "path": "packs/data/age-of-ashes-bestiary.db/mud-spider.json",
            "label": "Mud Spider"
          },
          {
            "path": "packs/data/age-of-ashes-bestiary.db/nketiah.json",
            "label": "Nketiah"
          },
          {
            "path": "packs/data/age-of-ashes-bestiary.db/nolly-peltry.json",
            "label": "Nolly Peltry"
          },
          {
            "path": "packs/data/age-of-ashes-bestiary.db/precentor.json",
            "label": "Precentor"
          },
          {
            "path": "packs/data/age-of-ashes-bestiary.db/promise-guard.json",
            "label": "Promise Guard"
          },
          {
            "path": "packs/data/age-of-ashes-bestiary.db/racharak.json",
            "label": "Racharak"
          },
          {
            "path": "packs/data/age-of-ashes-bestiary.db/remnant-of-barzillai.json",
            "label": "Remnant of Barzillai"
          },
          {
            "path": "packs/data/age-of-ashes-bestiary.db/renali.json",
            "label": "Renali"
          },
          {
            "path": "packs/data/age-of-ashes-bestiary.db/rinnarv-bontimar.json",
            "label": "Rinnarv Bontimar"
          },
          {
            "path": "packs/data/age-of-ashes-bestiary.db/rusty-mae.json",
            "label": "Rusty Mae"
          },
          {
            "path": "packs/data/age-of-ashes-bestiary.db/saggorak-poltergeist.json",
            "label": "Saggorak Poltergeist"
          },
          {
            "path": "packs/data/age-of-ashes-bestiary.db/scarlet-triad-agent.json",
            "label": "Scarlet Triad Agent"
          },
          {
            "path": "packs/data/age-of-ashes-bestiary.db/scarlet-triad-boss.json",
            "label": "Scarlet Triad Boss"
          },
          {
            "path": "packs/data/age-of-ashes-bestiary.db/scarlet-triad-bruiser.json",
            "label": "Scarlet Triad Bruiser"
          },
          {
            "path": "packs/data/age-of-ashes-bestiary.db/scarlet-triad-enforcer.json",
            "label": "Scarlet Triad Enforcer"
          },
          {
            "path": "packs/data/age-of-ashes-bestiary.db/scarlet-triad-mage.json",
            "label": "Scarlet Triad Mage"
          },
          {
            "path": "packs/data/age-of-ashes-bestiary.db/scarlet-triad-poisoner.json",
            "label": "Scarlet Triad Poisoner"
          },
          {
            "path": "packs/data/age-of-ashes-bestiary.db/scarlet-triad-sneak.json",
            "label": "Scarlet Triad Sneak"
          },
          {
            "path": "packs/data/age-of-ashes-bestiary.db/scarlet-triad-sniper.json",
            "label": "Scarlet Triad Sniper"
          },
          {
            "path": "packs/data/age-of-ashes-bestiary.db/scarlet-triad-thug.json",
            "label": "Scarlet Triad Thug"
          },
          {
            "path": "packs/data/age-of-ashes-bestiary.db/skeletal-hellknight.json",
            "label": "Skeletal Hellknight"
          },
          {
            "path": "packs/data/age-of-ashes-bestiary.db/soulbound-ruin.json",
            "label": "Soulbound Ruin"
          },
          {
            "path": "packs/data/age-of-ashes-bestiary.db/spiritbound-aluum.json",
            "label": "Spiritbound Aluum"
          },
          {
            "path": "packs/data/age-of-ashes-bestiary.db/talamira.json",
            "label": "Talamira"
          },
          {
            "path": "packs/data/age-of-ashes-bestiary.db/tarrasque-the-armageddon-engine.json",
            "label": "Tarrasque, The Armageddon Engine"
          },
          {
            "path": "packs/data/age-of-ashes-bestiary.db/teyam-ishtori.json",
            "label": "Teyam Ishtori"
          },
          {
            "path": "packs/data/age-of-ashes-bestiary.db/tixitog.json",
            "label": "Tixitog"
          },
          {
            "path": "packs/data/age-of-ashes-bestiary.db/uri-zandivar.json",
            "label": "Uri Zandivar"
          },
          {
            "path": "packs/data/age-of-ashes-bestiary.db/vaklish.json",
            "label": "Vaklish"
          },
          {
            "path": "packs/data/age-of-ashes-bestiary.db/vazgorlu.json",
            "label": "Vazgorlu"
          },
          {
            "path": "packs/data/age-of-ashes-bestiary.db/veshumirix.json",
            "label": "Veshumirix"
          },
          {
            "path": "packs/data/age-of-ashes-bestiary.db/voz-lirayne.json",
            "label": "Voz Lirayne"
          },
          {
            "path": "packs/data/age-of-ashes-bestiary.db/warbal-bumblebrasher.json",
            "label": "Warbal Bumblebrasher"
          },
          {
            "path": "packs/data/age-of-ashes-bestiary.db/weathered-wail.json",
            "label": "Weathered Wail"
          },
          {
            "path": "packs/data/age-of-ashes-bestiary.db/xevalorg.json",
            "label": "Xevalorg"
          },
          {
            "path": "packs/data/age-of-ashes-bestiary.db/xotani-the-firebleeder.json",
            "label": "Xotani, The Firebleeder"
          },
          {
            "path": "packs/data/age-of-ashes-bestiary.db/xotanispawn.json",
            "label": "Xotanispawn"
          },
          {
            "path": "packs/data/age-of-ashes-bestiary.db/zephyr-guard.json",
            "label": "Zephyr Guard"
          },
          {
            "path": "packs/data/age-of-ashes-bestiary.db/zuferian.json",
            "label": "Zuferian"
          }
        ]
      },
      "agents-of-edgewatch-bestiary": {
        "label": "Agents of Edgewatch",
        "itens": [
          {
            "path": "packs/data/agents-of-edgewatch-bestiary.db/agent-of-the-gray-queen.json",
            "label": "Agent of the Gray Queen"
          },
          {
            "path": "packs/data/agents-of-edgewatch-bestiary.db/agradaemon.json",
            "label": "Agradaemon"
          },
          {
            "path": "packs/data/agents-of-edgewatch-bestiary.db/alchemical-horror.json",
            "label": "Alchemical Horror"
          },
          {
            "path": "packs/data/agents-of-edgewatch-bestiary.db/alchemist-aspirant.json",
            "label": "Alchemist Aspirant"
          },
          {
            "path": "packs/data/agents-of-edgewatch-bestiary.db/almiraj.json",
            "label": "Almiraj"
          },
          {
            "path": "packs/data/agents-of-edgewatch-bestiary.db/amateur-chemist.json",
            "label": "Amateur Chemist"
          },
          {
            "path": "packs/data/agents-of-edgewatch-bestiary.db/antaro-boldblade.json",
            "label": "Antaro Boldblade"
          },
          {
            "path": "packs/data/agents-of-edgewatch-bestiary.db/avarek.json",
            "label": "Avarek"
          },
          {
            "path": "packs/data/agents-of-edgewatch-bestiary.db/avsheros-the-betrayer.json",
            "label": "Avsheros the Betrayer"
          },
          {
            "path": "packs/data/agents-of-edgewatch-bestiary.db/baatamidar.json",
            "label": "Baatamidar"
          },
          {
            "path": "packs/data/agents-of-edgewatch-bestiary.db/barnacle-ghoul.json",
            "label": "Barnacle Ghoul"
          },
          {
            "path": "packs/data/agents-of-edgewatch-bestiary.db/barrel-launcher.json",
            "label": "Barrel Launcher"
          },
          {
            "path": "packs/data/agents-of-edgewatch-bestiary.db/battle-leader-rekarek.json",
            "label": "Battle Leader Rekarek"
          },
          {
            "path": "packs/data/agents-of-edgewatch-bestiary.db/binumir.json",
            "label": "Binumir"
          },
          {
            "path": "packs/data/agents-of-edgewatch-bestiary.db/black-whale-guard-f3-nightmare-cudgel.json",
            "label": "Black Whale Guard (F3, Nightmare Cudgel)"
          },
          {
            "path": "packs/data/agents-of-edgewatch-bestiary.db/black-whale-guard.json",
            "label": "Black Whale Guard"
          },
          {
            "path": "packs/data/agents-of-edgewatch-bestiary.db/blackfingers-acolyte.json",
            "label": "Blackfingers Acolyte"
          },
          {
            "path": "packs/data/agents-of-edgewatch-bestiary.db/bloody-barber-goon.json",
            "label": "Bloody Barber Goon"
          },
          {
            "path": "packs/data/agents-of-edgewatch-bestiary.db/bloody-berleth.json",
            "label": "Bloody Berleth"
          },
          {
            "path": "packs/data/agents-of-edgewatch-bestiary.db/blune-bandersworth.json",
            "label": "Blune Bandersworth"
          },
          {
            "path": "packs/data/agents-of-edgewatch-bestiary.db/blunes-illusory-toady.json",
            "label": "Blune's Illusory Toady"
          },
          {
            "path": "packs/data/agents-of-edgewatch-bestiary.db/bolar-of-stonemoor.json",
            "label": "Bolar Of Stonemoor"
          },
          {
            "path": "packs/data/agents-of-edgewatch-bestiary.db/bone-skipper-swarm.json",
            "label": "Bone Skipper Swarm"
          },
          {
            "path": "packs/data/agents-of-edgewatch-bestiary.db/bregdi.json",
            "label": "Bregdi"
          },
          {
            "path": "packs/data/agents-of-edgewatch-bestiary.db/calennia.json",
            "label": "Calennia"
          },
          {
            "path": "packs/data/agents-of-edgewatch-bestiary.db/camarach.json",
            "label": "Camarach"
          },
          {
            "path": "packs/data/agents-of-edgewatch-bestiary.db/carvey.json",
            "label": "Carvey"
          },
          {
            "path": "packs/data/agents-of-edgewatch-bestiary.db/casino-bouncer.json",
            "label": "Casino Bouncer"
          },
          {
            "path": "packs/data/agents-of-edgewatch-bestiary.db/chalky.json",
            "label": "Chalky"
          },
          {
            "path": "packs/data/agents-of-edgewatch-bestiary.db/chaos-gulgamodh.json",
            "label": "Chaos Gulgamodh"
          },
          {
            "path": "packs/data/agents-of-edgewatch-bestiary.db/child-of-venom.json",
            "label": "Child Of Venom"
          },
          {
            "path": "packs/data/agents-of-edgewatch-bestiary.db/clockwork-amalgam.json",
            "label": "Clockwork Amalgam"
          },
          {
            "path": "packs/data/agents-of-edgewatch-bestiary.db/clockwork-assassin.json",
            "label": "Clockwork Assassin"
          },
          {
            "path": "packs/data/agents-of-edgewatch-bestiary.db/clockwork-chopper.json",
            "label": "Clockwork Chopper"
          },
          {
            "path": "packs/data/agents-of-edgewatch-bestiary.db/clockwork-injector.json",
            "label": "Clockwork Injector"
          },
          {
            "path": "packs/data/agents-of-edgewatch-bestiary.db/cobbleswarm-aoe.json",
            "label": "Cobbleswarm (AoE)"
          },
          {
            "path": "packs/data/agents-of-edgewatch-bestiary.db/copper-hand-illusionist.json",
            "label": "Copper Hand Illusionist"
          },
          {
            "path": "packs/data/agents-of-edgewatch-bestiary.db/copper-hand-rogue.json",
            "label": "Copper Hand Rogue"
          },
          {
            "path": "packs/data/agents-of-edgewatch-bestiary.db/daemonic-infector.json",
            "label": "Daemonic Infector"
          },
          {
            "path": "packs/data/agents-of-edgewatch-bestiary.db/daemonic-rumormonger.json",
            "label": "Daemonic Rumormonger"
          },
          {
            "path": "packs/data/agents-of-edgewatch-bestiary.db/daemonic-skinner.json",
            "label": "Daemonic Skinner"
          },
          {
            "path": "packs/data/agents-of-edgewatch-bestiary.db/diobel-sweeper-chemist.json",
            "label": "Diobel Sweeper Chemist"
          },
          {
            "path": "packs/data/agents-of-edgewatch-bestiary.db/diobel-sweeper-tough.json",
            "label": "Diobel Sweeper Tough"
          },
          {
            "path": "packs/data/agents-of-edgewatch-bestiary.db/dreadsong-dancer.json",
            "label": "Dreadsong Dancer"
          },
          {
            "path": "packs/data/agents-of-edgewatch-bestiary.db/eberark.json",
            "label": "Eberark"
          },
          {
            "path": "packs/data/agents-of-edgewatch-bestiary.db/eunice.json",
            "label": "Eunice"
          },
          {
            "path": "packs/data/agents-of-edgewatch-bestiary.db/excorion-paragon.json",
            "label": "Excorion Paragon"
          },
          {
            "path": "packs/data/agents-of-edgewatch-bestiary.db/excorion.json",
            "label": "Excorion"
          },
          {
            "path": "packs/data/agents-of-edgewatch-bestiary.db/fayati-alummur.json",
            "label": "Fayati Alummur"
          },
          {
            "path": "packs/data/agents-of-edgewatch-bestiary.db/franca-laurentz.json",
            "label": "Franca Laurentz"
          },
          {
            "path": "packs/data/agents-of-edgewatch-bestiary.db/frefferth.json",
            "label": "Frefferth"
          },
          {
            "path": "packs/data/agents-of-edgewatch-bestiary.db/gage-carlyle.json",
            "label": "Gage Carlyle"
          },
          {
            "path": "packs/data/agents-of-edgewatch-bestiary.db/gang-tough.json",
            "label": "Gang Tough"
          },
          {
            "path": "packs/data/agents-of-edgewatch-bestiary.db/garrote-master-assassin.json",
            "label": "Garrote Master Assassin"
          },
          {
            "path": "packs/data/agents-of-edgewatch-bestiary.db/ghaele-of-kharnas.json",
            "label": "Ghaele Of Kharnas"
          },
          {
            "path": "packs/data/agents-of-edgewatch-bestiary.db/giant-bone-skipper.json",
            "label": "Giant Bone Skipper"
          },
          {
            "path": "packs/data/agents-of-edgewatch-bestiary.db/giant-joro-spiders.json",
            "label": "Giant Joro Spiders"
          },
          {
            "path": "packs/data/agents-of-edgewatch-bestiary.db/gloaming-will-o-wisp.json",
            "label": "Gloaming Will-o'-Wisp"
          },
          {
            "path": "packs/data/agents-of-edgewatch-bestiary.db/grabble-forden.json",
            "label": "Grabble Forden"
          },
          {
            "path": "packs/data/agents-of-edgewatch-bestiary.db/graem.json",
            "label": "Graem"
          },
          {
            "path": "packs/data/agents-of-edgewatch-bestiary.db/graveknight-of-kharnas.json",
            "label": "Graveknight Of Kharnas"
          },
          {
            "path": "packs/data/agents-of-edgewatch-bestiary.db/gref.json",
            "label": "Gref"
          },
          {
            "path": "packs/data/agents-of-edgewatch-bestiary.db/grick.json",
            "label": "Grick"
          },
          {
            "path": "packs/data/agents-of-edgewatch-bestiary.db/grimwold.json",
            "label": "Grimwold"
          },
          {
            "path": "packs/data/agents-of-edgewatch-bestiary.db/grinlowe.json",
            "label": "Grinlowe"
          },
          {
            "path": "packs/data/agents-of-edgewatch-bestiary.db/grospek-lavarsus.json",
            "label": "Grospek Lavarsus"
          },
          {
            "path": "packs/data/agents-of-edgewatch-bestiary.db/grunka.json",
            "label": "Grunka"
          },
          {
            "path": "packs/data/agents-of-edgewatch-bestiary.db/hegessik.json",
            "label": "Hegessik"
          },
          {
            "path": "packs/data/agents-of-edgewatch-bestiary.db/hendrid-pratchett.json",
            "label": "Hendrid Pratchett"
          },
          {
            "path": "packs/data/agents-of-edgewatch-bestiary.db/hestriviniaas.json",
            "label": "Hestriviniaas"
          },
          {
            "path": "packs/data/agents-of-edgewatch-bestiary.db/hundun-chaos-mage.json",
            "label": "Hundun Chaos Mage"
          },
          {
            "path": "packs/data/agents-of-edgewatch-bestiary.db/ilsetsya-wyrmtouched.json",
            "label": "Il'setsya Wyrmtouched"
          },
          {
            "path": "packs/data/agents-of-edgewatch-bestiary.db/iroran-skeleton.json",
            "label": "Iroran Skeleton"
          },
          {
            "path": "packs/data/agents-of-edgewatch-bestiary.db/ixusoth.json",
            "label": "Ixusoth"
          },
          {
            "path": "packs/data/agents-of-edgewatch-bestiary.db/izfiitar.json",
            "label": "Izfiitar"
          },
          {
            "path": "packs/data/agents-of-edgewatch-bestiary.db/jonis-flakfatter.json",
            "label": "Jonis Flakfatter"
          },
          {
            "path": "packs/data/agents-of-edgewatch-bestiary.db/kapral.json",
            "label": "Kapral"
          },
          {
            "path": "packs/data/agents-of-edgewatch-bestiary.db/kekker.json",
            "label": "Kekker"
          },
          {
            "path": "packs/data/agents-of-edgewatch-bestiary.db/kemeneles.json",
            "label": "Kemeneles"
          },
          {
            "path": "packs/data/agents-of-edgewatch-bestiary.db/kolo-harvan.json",
            "label": "Kolo Harvan"
          },
          {
            "path": "packs/data/agents-of-edgewatch-bestiary.db/lie-master.json",
            "label": "Lie-Master"
          },
          {
            "path": "packs/data/agents-of-edgewatch-bestiary.db/living-mural.json",
            "label": "Living Mural"
          },
          {
            "path": "packs/data/agents-of-edgewatch-bestiary.db/lord-guirden.json",
            "label": "Lord Guirden"
          },
          {
            "path": "packs/data/agents-of-edgewatch-bestiary.db/lusca.json",
            "label": "Lusca"
          },
          {
            "path": "packs/data/agents-of-edgewatch-bestiary.db/lyrma-swampwalker.json",
            "label": "Lyrma Swampwalker"
          },
          {
            "path": "packs/data/agents-of-edgewatch-bestiary.db/maurrisa-jonne.json",
            "label": "Maurrisa Jonne"
          },
          {
            "path": "packs/data/agents-of-edgewatch-bestiary.db/minchgorm.json",
            "label": "Minchgorm"
          },
          {
            "path": "packs/data/agents-of-edgewatch-bestiary.db/miogimo.json",
            "label": "Miogimo"
          },
          {
            "path": "packs/data/agents-of-edgewatch-bestiary.db/miriel-grayleaf.json",
            "label": "Miriel Grayleaf"
          },
          {
            "path": "packs/data/agents-of-edgewatch-bestiary.db/mobana.json",
            "label": "Mobana"
          },
          {
            "path": "packs/data/agents-of-edgewatch-bestiary.db/mother-venom.json",
            "label": "Mother Venom"
          },
          {
            "path": "packs/data/agents-of-edgewatch-bestiary.db/mr-snips.json",
            "label": "Mr. Snips"
          },
          {
            "path": "packs/data/agents-of-edgewatch-bestiary.db/myrna-rath.json",
            "label": "Myrna Rath"
          },
          {
            "path": "packs/data/agents-of-edgewatch-bestiary.db/myrucarx.json",
            "label": "Myrucarx"
          },
          {
            "path": "packs/data/agents-of-edgewatch-bestiary.db/najra-lizard.json",
            "label": "Najra Lizard"
          },
          {
            "path": "packs/data/agents-of-edgewatch-bestiary.db/nenchuuj.json",
            "label": "Nenchuuj"
          },
          {
            "path": "packs/data/agents-of-edgewatch-bestiary.db/norgorberite-poisoner.json",
            "label": "Norgorberite Poisoner"
          },
          {
            "path": "packs/data/agents-of-edgewatch-bestiary.db/obrousian.json",
            "label": "Obrousian"
          },
          {
            "path": "packs/data/agents-of-edgewatch-bestiary.db/ofalth-zombie.json",
            "label": "Ofalth Zombie"
          },
          {
            "path": "packs/data/agents-of-edgewatch-bestiary.db/olansa-terimor.json",
            "label": "Olansa Terimor"
          },
          {
            "path": "packs/data/agents-of-edgewatch-bestiary.db/overdrive-imentesh.json",
            "label": "Overdrive Imentesh"
          },
          {
            "path": "packs/data/agents-of-edgewatch-bestiary.db/pelmo.json",
            "label": "Pelmo"
          },
          {
            "path": "packs/data/agents-of-edgewatch-bestiary.db/penqual.json",
            "label": "Penqual"
          },
          {
            "path": "packs/data/agents-of-edgewatch-bestiary.db/pickled-punk.json",
            "label": "Pickled Punk"
          },
          {
            "path": "packs/data/agents-of-edgewatch-bestiary.db/poison-eater.json",
            "label": "Poison Eater"
          },
          {
            "path": "packs/data/agents-of-edgewatch-bestiary.db/priest-of-blackfingers.json",
            "label": "Priest of Blackfingers"
          },
          {
            "path": "packs/data/agents-of-edgewatch-bestiary.db/prospecti-statue.json",
            "label": "Prospecti Statue"
          },
          {
            "path": "packs/data/agents-of-edgewatch-bestiary.db/pulping-golem.json",
            "label": "Pulping Golem"
          },
          {
            "path": "packs/data/agents-of-edgewatch-bestiary.db/ralso.json",
            "label": "Ralso"
          },
          {
            "path": "packs/data/agents-of-edgewatch-bestiary.db/ravenile-rager.json",
            "label": "Ravenile Rager"
          },
          {
            "path": "packs/data/agents-of-edgewatch-bestiary.db/reginald-vancaskerkin.json",
            "label": "Reginald Vancaskerkin"
          },
          {
            "path": "packs/data/agents-of-edgewatch-bestiary.db/rhevanna.json",
            "label": "Rhevanna"
          },
          {
            "path": "packs/data/agents-of-edgewatch-bestiary.db/sad-liza.json",
            "label": "Sad Liza"
          },
          {
            "path": "packs/data/agents-of-edgewatch-bestiary.db/scathka.json",
            "label": "Scathka"
          },
          {
            "path": "packs/data/agents-of-edgewatch-bestiary.db/secret-keeper.json",
            "label": "Secret-Keeper"
          },
          {
            "path": "packs/data/agents-of-edgewatch-bestiary.db/shatterling.json",
            "label": "Shatterling"
          },
          {
            "path": "packs/data/agents-of-edgewatch-bestiary.db/shikwashim-mercenary.json",
            "label": "Shikwashim Mercenary"
          },
          {
            "path": "packs/data/agents-of-edgewatch-bestiary.db/shredskin.json",
            "label": "Shredskin"
          },
          {
            "path": "packs/data/agents-of-edgewatch-bestiary.db/shristi-melipdra.json",
            "label": "Shristi Melipdra"
          },
          {
            "path": "packs/data/agents-of-edgewatch-bestiary.db/siege-shard.json",
            "label": "Siege Shard"
          },
          {
            "path": "packs/data/agents-of-edgewatch-bestiary.db/skebs.json",
            "label": "Skebs"
          },
          {
            "path": "packs/data/agents-of-edgewatch-bestiary.db/skinsaw-murderer.json",
            "label": "Skinsaw Murderer"
          },
          {
            "path": "packs/data/agents-of-edgewatch-bestiary.db/skinsaw-seamer.json",
            "label": "Skinsaw Seamer"
          },
          {
            "path": "packs/data/agents-of-edgewatch-bestiary.db/skitterstitch.json",
            "label": "Skitterstitch"
          },
          {
            "path": "packs/data/agents-of-edgewatch-bestiary.db/sleepless-sun-veteran.json",
            "label": "Sleepless Sun Veteran"
          },
          {
            "path": "packs/data/agents-of-edgewatch-bestiary.db/slithering-rift.json",
            "label": "Slithering Rift"
          },
          {
            "path": "packs/data/agents-of-edgewatch-bestiary.db/sordesdaemon.json",
            "label": "Sordesdaemon"
          },
          {
            "path": "packs/data/agents-of-edgewatch-bestiary.db/starwatch-commando.json",
            "label": "Starwatch Commando"
          },
          {
            "path": "packs/data/agents-of-edgewatch-bestiary.db/svartalfar-killer.json",
            "label": "Svartalfar Killer"
          },
          {
            "path": "packs/data/agents-of-edgewatch-bestiary.db/tenome.json",
            "label": "Tenome"
          },
          {
            "path": "packs/data/agents-of-edgewatch-bestiary.db/teraphant.json",
            "label": "Teraphant"
          },
          {
            "path": "packs/data/agents-of-edgewatch-bestiary.db/the-inkmaster.json",
            "label": "The Inkmaster"
          },
          {
            "path": "packs/data/agents-of-edgewatch-bestiary.db/the-rabbit-prince.json",
            "label": "The Rabbit Prince"
          },
          {
            "path": "packs/data/agents-of-edgewatch-bestiary.db/the-stabbing-beast.json",
            "label": "The Stabbing Beast"
          },
          {
            "path": "packs/data/agents-of-edgewatch-bestiary.db/tiderunner-aquamancer.json",
            "label": "Tiderunner Aquamancer"
          },
          {
            "path": "packs/data/agents-of-edgewatch-bestiary.db/twisted-jack.json",
            "label": "Twisted Jack"
          },
          {
            "path": "packs/data/agents-of-edgewatch-bestiary.db/tyrroicese.json",
            "label": "Tyrroicese"
          },
          {
            "path": "packs/data/agents-of-edgewatch-bestiary.db/ulressia-the-blessed.json",
            "label": "Ulressia The Blessed"
          },
          {
            "path": "packs/data/agents-of-edgewatch-bestiary.db/vargouille.json",
            "label": "Vargouille"
          },
          {
            "path": "packs/data/agents-of-edgewatch-bestiary.db/vaultbreaker-ooze.json",
            "label": "Vaultbreaker Ooze"
          },
          {
            "path": "packs/data/agents-of-edgewatch-bestiary.db/veksciralenix.json",
            "label": "Veksciralenix"
          },
          {
            "path": "packs/data/agents-of-edgewatch-bestiary.db/venom-mage.json",
            "label": "Venom Mage"
          },
          {
            "path": "packs/data/agents-of-edgewatch-bestiary.db/washboard-dog-tough.json",
            "label": "Washboard Dog Tough"
          },
          {
            "path": "packs/data/agents-of-edgewatch-bestiary.db/water-elemental-vessel-i2.json",
            "label": "Water Elemental Vessel (I2)"
          },
          {
            "path": "packs/data/agents-of-edgewatch-bestiary.db/water-elemental-vessel.json",
            "label": "Water Elemental Vessel"
          },
          {
            "path": "packs/data/agents-of-edgewatch-bestiary.db/wrent-dicaspiron.json",
            "label": "Wrent Dicaspiron"
          },
          {
            "path": "packs/data/agents-of-edgewatch-bestiary.db/wynsal-starborn.json",
            "label": "Wynsal Starborn"
          },
          {
            "path": "packs/data/agents-of-edgewatch-bestiary.db/zeal-damned-ghoul.json",
            "label": "Zeal-damned Ghoul"
          },
          {
            "path": "packs/data/agents-of-edgewatch-bestiary.db/zealborn.json",
            "label": "Zealborn"
          },
          {
            "path": "packs/data/agents-of-edgewatch-bestiary.db/zrukbat.json",
            "label": "Zrukbat"
          }
        ]
      },
      "april-fools-bestiary": {
        "label": "April Fool's Bestiary",
        "itens": [
          {
            "path": "packs/data/april-fools-bestiary.db/blarghest.json",
            "label": "Blarghest"
          },
          {
            "path": "packs/data/april-fools-bestiary.db/cacaodaemon.json",
            "label": "Cacaodaemon"
          },
          {
            "path": "packs/data/april-fools-bestiary.db/demom.json",
            "label": "Demom"
          },
          {
            "path": "packs/data/april-fools-bestiary.db/floolf.json",
            "label": "Floolf"
          },
          {
            "path": "packs/data/april-fools-bestiary.db/nonsequitaur.json",
            "label": "Nonsequitaur"
          },
          {
            "path": "packs/data/april-fools-bestiary.db/nosferotter.json",
            "label": "Nosferotter"
          },
          {
            "path": "packs/data/april-fools-bestiary.db/psstpsstmitl.json",
            "label": "Psstpsstmitl"
          },
          {
            "path": "packs/data/april-fools-bestiary.db/squirrelwind.json",
            "label": "Squirrelwind"
          },
          {
            "path": "packs/data/april-fools-bestiary.db/weredigo.json",
            "label": "Weredigo"
          }
        ]
      },
      "blog-bestiary": {
        "label": "Paizo Blog Bestiary",
        "itens": [
          {
            "path": "packs/data/blog-bestiary.db/ailuran.json",
            "label": "Ailuran"
          },
          {
            "path": "packs/data/blog-bestiary.db/chea.json",
            "label": "Chea"
          },
          {
            "path": "packs/data/blog-bestiary.db/duhgik.json",
            "label": "Duhgik"
          },
          {
            "path": "packs/data/blog-bestiary.db/edolpho-phinelli.json",
            "label": "Edolpho Phinelli"
          },
          {
            "path": "packs/data/blog-bestiary.db/eleukas.json",
            "label": "Eleukas"
          },
          {
            "path": "packs/data/blog-bestiary.db/firebrand-ancient-brass-dragon.json",
            "label": "Firebrand Ancient Brass Dragon"
          },
          {
            "path": "packs/data/blog-bestiary.db/goblin-zombie.json",
            "label": "Goblin Zombie"
          },
          {
            "path": "packs/data/blog-bestiary.db/gristleburst.json",
            "label": "Gristleburst"
          },
          {
            "path": "packs/data/blog-bestiary.db/hellknight-centaur.json",
            "label": "Hellknight Centaur"
          },
          {
            "path": "packs/data/blog-bestiary.db/kobold-tunnelrunner.json",
            "label": "Kobold Tunnelrunner"
          },
          {
            "path": "packs/data/blog-bestiary.db/lisavet.json",
            "label": "Lisavet"
          },
          {
            "path": "packs/data/blog-bestiary.db/mari-lwyd.json",
            "label": "Mari Lwyd"
          },
          {
            "path": "packs/data/blog-bestiary.db/morlibint.json",
            "label": "Morlibint"
          },
          {
            "path": "packs/data/blog-bestiary.db/ogre-hurler.json",
            "label": "Ogre Hurler"
          },
          {
            "path": "packs/data/blog-bestiary.db/prrall.json",
            "label": "Pr'rall"
          },
          {
            "path": "packs/data/blog-bestiary.db/urok.json",
            "label": "Urok"
          },
          {
            "path": "packs/data/blog-bestiary.db/wendlyn.json",
            "label": "Wendlyn"
          },
          {
            "path": "packs/data/blog-bestiary.db/whispering-way-medusa.json",
            "label": "Whispering Way Medusa"
          },
          {
            "path": "packs/data/blog-bestiary.db/zhang-yong.json",
            "label": "Zhang Yong"
          }
        ]
      },
      "blood-lords-bestiary": {
        "label": "Blood Lords",
        "itens": [
          {
            "path": "packs/data/blood-lords-bestiary.db/aeolaeka.json",
            "label": "Aeolaeka"
          },
          {
            "path": "packs/data/blood-lords-bestiary.db/afziaka-brute.json",
            "label": "Afziaka Brute"
          },
          {
            "path": "packs/data/blood-lords-bestiary.db/afziaka-stalker.json",
            "label": "Afziaka Stalker"
          },
          {
            "path": "packs/data/blood-lords-bestiary.db/agorron-guard.json",
            "label": "Agorron Guard"
          },
          {
            "path": "packs/data/blood-lords-bestiary.db/ancient-skaveling.json",
            "label": "Ancient Skaveling"
          },
          {
            "path": "packs/data/blood-lords-bestiary.db/animated-fireplace.json",
            "label": "Animated Fireplace"
          },
          {
            "path": "packs/data/blood-lords-bestiary.db/animated-tea-cart.json",
            "label": "Animated Tea Cart"
          },
          {
            "path": "packs/data/blood-lords-bestiary.db/aquatic-ooze.json",
            "label": "Aquatic Ooze"
          },
          {
            "path": "packs/data/blood-lords-bestiary.db/arboreal-snag-axan-wood.json",
            "label": "Arboreal Snag (Axan Wood)"
          },
          {
            "path": "packs/data/blood-lords-bestiary.db/arboreal-snag.json",
            "label": "Arboreal Snag"
          },
          {
            "path": "packs/data/blood-lords-bestiary.db/arghun-the-annihilator.json",
            "label": "Arghun the Annihilator"
          },
          {
            "path": "packs/data/blood-lords-bestiary.db/azmakian-effigy.json",
            "label": "Azmakian Effigy"
          },
          {
            "path": "packs/data/blood-lords-bestiary.db/basiri-wellspring-keeper.json",
            "label": "Basiri, Wellspring Keeper"
          },
          {
            "path": "packs/data/blood-lords-bestiary.db/bellator-mortus-soldier.json",
            "label": "Bellator Mortus Soldier"
          },
          {
            "path": "packs/data/blood-lords-bestiary.db/blaanlool.json",
            "label": "Blaanlool"
          },
          {
            "path": "packs/data/blood-lords-bestiary.db/bloodshroud.json",
            "label": "Bloodshroud"
          },
          {
            "path": "packs/data/blood-lords-bestiary.db/bone-shard-tough.json",
            "label": "Bone Shard Tough"
          },
          {
            "path": "packs/data/blood-lords-bestiary.db/bulette.json",
            "label": "Bulette"
          },
          {
            "path": "packs/data/blood-lords-bestiary.db/charghar.json",
            "label": "Charghar"
          },
          {
            "path": "packs/data/blood-lords-bestiary.db/chattering-jaws.json",
            "label": "Chattering Jaws"
          },
          {
            "path": "packs/data/blood-lords-bestiary.db/clockwork-rifler.json",
            "label": "Clockwork Rifler"
          },
          {
            "path": "packs/data/blood-lords-bestiary.db/cobblebone-swarm.json",
            "label": "Cobblebone Swarm"
          },
          {
            "path": "packs/data/blood-lords-bestiary.db/creeping-crone.json",
            "label": "Creeping Crone"
          },
          {
            "path": "packs/data/blood-lords-bestiary.db/crooked-coffin-brewer.json",
            "label": "Crooked Coffin Brewer"
          },
          {
            "path": "packs/data/blood-lords-bestiary.db/dead-faine.json",
            "label": "Dead Faine"
          },
          {
            "path": "packs/data/blood-lords-bestiary.db/decrosia.json",
            "label": "Decrosia"
          },
          {
            "path": "packs/data/blood-lords-bestiary.db/dirge-piper.json",
            "label": "Dirge Piper"
          },
          {
            "path": "packs/data/blood-lords-bestiary.db/drowned-mummy.json",
            "label": "Drowned Mummy"
          },
          {
            "path": "packs/data/blood-lords-bestiary.db/drusilla.json",
            "label": "Drusilla"
          },
          {
            "path": "packs/data/blood-lords-bestiary.db/ectoplasmic-amalgam.json",
            "label": "Ectoplasmic Amalgam"
          },
          {
            "path": "packs/data/blood-lords-bestiary.db/eseneth.json",
            "label": "Eseneth"
          },
          {
            "path": "packs/data/blood-lords-bestiary.db/facetbound-cascader.json",
            "label": "Facetbound Cascader"
          },
          {
            "path": "packs/data/blood-lords-bestiary.db/facetbound-nullifier.json",
            "label": "Facetbound Nullifier"
          },
          {
            "path": "packs/data/blood-lords-bestiary.db/firebrand-bastion.json",
            "label": "Firebrand Bastion"
          },
          {
            "path": "packs/data/blood-lords-bestiary.db/floating-femur.json",
            "label": "Floating Femur"
          },
          {
            "path": "packs/data/blood-lords-bestiary.db/ghast-outlaw.json",
            "label": "Ghast Outlaw"
          },
          {
            "path": "packs/data/blood-lords-bestiary.db/ghiasi.json",
            "label": "Ghiasi"
          },
          {
            "path": "packs/data/blood-lords-bestiary.db/ghiasis-double.json",
            "label": "Ghiasi's Double"
          },
          {
            "path": "packs/data/blood-lords-bestiary.db/ghiono.json",
            "label": "Ghiono"
          },
          {
            "path": "packs/data/blood-lords-bestiary.db/ghostly-mob.json",
            "label": "Ghostly Mob"
          },
          {
            "path": "packs/data/blood-lords-bestiary.db/ghoul-antipaladin.json",
            "label": "Ghoul Antipaladin"
          },
          {
            "path": "packs/data/blood-lords-bestiary.db/ghoul-crocodile.json",
            "label": "Ghoul Crocodile"
          },
          {
            "path": "packs/data/blood-lords-bestiary.db/ghoul-gnawer.json",
            "label": "Ghoul Gnawer"
          },
          {
            "path": "packs/data/blood-lords-bestiary.db/ghoul-razorclaw.json",
            "label": "Ghoul Razorclaw"
          },
          {
            "path": "packs/data/blood-lords-bestiary.db/grace-the-rhino-owano.json",
            "label": "Grace \"The Rhino\" Owano"
          },
          {
            "path": "packs/data/blood-lords-bestiary.db/graelar-the-whisper.json",
            "label": "Graelar the Whisper"
          },
          {
            "path": "packs/data/blood-lords-bestiary.db/granite-vulture.json",
            "label": "Granite Vulture"
          },
          {
            "path": "packs/data/blood-lords-bestiary.db/grave-hag.json",
            "label": "Grave Hag"
          },
          {
            "path": "packs/data/blood-lords-bestiary.db/guloval.json",
            "label": "Guloval"
          },
          {
            "path": "packs/data/blood-lords-bestiary.db/harmony-in-agony.json",
            "label": "Harmony In Agony"
          },
          {
            "path": "packs/data/blood-lords-bestiary.db/hollow-husk.json",
            "label": "Hollow Husk"
          },
          {
            "path": "packs/data/blood-lords-bestiary.db/hungering-growth.json",
            "label": "Hungering Growth"
          },
          {
            "path": "packs/data/blood-lords-bestiary.db/hyrune-loxenna.json",
            "label": "Hyrune Loxenna"
          },
          {
            "path": "packs/data/blood-lords-bestiary.db/intellect-assemblage.json",
            "label": "Intellect Assemblage"
          },
          {
            "path": "packs/data/blood-lords-bestiary.db/iron-taviah.json",
            "label": "Iron Taviah"
          },
          {
            "path": "packs/data/blood-lords-bestiary.db/kapoacinth.json",
            "label": "Kapoacinth"
          },
          {
            "path": "packs/data/blood-lords-bestiary.db/kelganth.json",
            "label": "Kelganth"
          },
          {
            "path": "packs/data/blood-lords-bestiary.db/kemnebi.json",
            "label": "Kemnebi"
          },
          {
            "path": "packs/data/blood-lords-bestiary.db/kemnebis-puppet.json",
            "label": "Kemnebi's Puppet"
          },
          {
            "path": "packs/data/blood-lords-bestiary.db/kepgeda-the-hag-nailed.json",
            "label": "Kepgeda the Hag-Nailed"
          },
          {
            "path": "packs/data/blood-lords-bestiary.db/kerinza.json",
            "label": "Kerinza"
          },
          {
            "path": "packs/data/blood-lords-bestiary.db/lasheeli.json",
            "label": "Lasheeli"
          },
          {
            "path": "packs/data/blood-lords-bestiary.db/matron-uldrula.json",
            "label": "Matron Uldrula"
          },
          {
            "path": "packs/data/blood-lords-bestiary.db/meat-guardian.json",
            "label": "Meat Guardian"
          },
          {
            "path": "packs/data/blood-lords-bestiary.db/mechanical-laborer.json",
            "label": "Mechanical Laborer"
          },
          {
            "path": "packs/data/blood-lords-bestiary.db/mithral-golem.json",
            "label": "Mithral Golem"
          },
          {
            "path": "packs/data/blood-lords-bestiary.db/mosghuta-boss-cow.json",
            "label": "Mosghuta, Boss Cow"
          },
          {
            "path": "packs/data/blood-lords-bestiary.db/mummy-valet.json",
            "label": "Mummy Valet"
          },
          {
            "path": "packs/data/blood-lords-bestiary.db/necrohulk-flailer.json",
            "label": "Necrohulk Flailer"
          },
          {
            "path": "packs/data/blood-lords-bestiary.db/necrohulk-smasher.json",
            "label": "Necrohulk Smasher"
          },
          {
            "path": "packs/data/blood-lords-bestiary.db/necromancer-troop.json",
            "label": "Necromancer Troop"
          },
          {
            "path": "packs/data/blood-lords-bestiary.db/necromunculus.json",
            "label": "Necromunculus"
          },
          {
            "path": "packs/data/blood-lords-bestiary.db/nwanyian-archer.json",
            "label": "Nwanyian Archer"
          },
          {
            "path": "packs/data/blood-lords-bestiary.db/nwanyian-defender.json",
            "label": "Nwanyian Defender"
          },
          {
            "path": "packs/data/blood-lords-bestiary.db/nydazuul.json",
            "label": "Nydazuul"
          },
          {
            "path": "packs/data/blood-lords-bestiary.db/opkherab.json",
            "label": "Opkherab"
          },
          {
            "path": "packs/data/blood-lords-bestiary.db/pesgahi-the-poisoner.json",
            "label": "Pesgahi the Poisoner"
          },
          {
            "path": "packs/data/blood-lords-bestiary.db/phalanx-of-phalanges.json",
            "label": "Phalanx of Phalanges"
          },
          {
            "path": "packs/data/blood-lords-bestiary.db/pokmit-bloody-pike.json",
            "label": "Pokmit Bloody-Pike"
          },
          {
            "path": "packs/data/blood-lords-bestiary.db/prachalla.json",
            "label": "Prachalla"
          },
          {
            "path": "packs/data/blood-lords-bestiary.db/prince-doriel.json",
            "label": "Prince Doriel"
          },
          {
            "path": "packs/data/blood-lords-bestiary.db/princess-kerinza.json",
            "label": "Princess Kerinza"
          },
          {
            "path": "packs/data/blood-lords-bestiary.db/pyrogeist.json",
            "label": "Pyrogeist"
          },
          {
            "path": "packs/data/blood-lords-bestiary.db/restored-doll.json",
            "label": "Restored Doll"
          },
          {
            "path": "packs/data/blood-lords-bestiary.db/rival-corpsekiller.json",
            "label": "Rival Corpsekiller"
          },
          {
            "path": "packs/data/blood-lords-bestiary.db/rival-necromancer.json",
            "label": "Rival Necromancer"
          },
          {
            "path": "packs/data/blood-lords-bestiary.db/rotbomber.json",
            "label": "Rotbomber"
          },
          {
            "path": "packs/data/blood-lords-bestiary.db/ruby.json",
            "label": "Ruby"
          },
          {
            "path": "packs/data/blood-lords-bestiary.db/rumin-purgo.json",
            "label": "Rumin Purgo"
          },
          {
            "path": "packs/data/blood-lords-bestiary.db/rust-hag.json",
            "label": "Rust Hag"
          },
          {
            "path": "packs/data/blood-lords-bestiary.db/sahni-bride-of-the-sea.json",
            "label": "Sahni Bride-Of-The-Sea"
          },
          {
            "path": "packs/data/blood-lords-bestiary.db/sahreg-the-dirge-screamer.json",
            "label": "Sahreg the Dirge Screamer"
          },
          {
            "path": "packs/data/blood-lords-bestiary.db/sallowdrudge.json",
            "label": "Sallowdrudge"
          },
          {
            "path": "packs/data/blood-lords-bestiary.db/scrabbling-ribcage.json",
            "label": "Scrabbling Ribcage"
          },
          {
            "path": "packs/data/blood-lords-bestiary.db/seldeg-bheldis.json",
            "label": "Seldeg Bheldis"
          },
          {
            "path": "packs/data/blood-lords-bestiary.db/seldegs-steed.json",
            "label": "Seldeg's Steed"
          },
          {
            "path": "packs/data/blood-lords-bestiary.db/shabti-slayer.json",
            "label": "Shabti Slayer"
          },
          {
            "path": "packs/data/blood-lords-bestiary.db/shabti-votary.json",
            "label": "Shabti Votary"
          },
          {
            "path": "packs/data/blood-lords-bestiary.db/shadow-leydroth.json",
            "label": "Shadow Leydroth"
          },
          {
            "path": "packs/data/blood-lords-bestiary.db/shadow-worm.json",
            "label": "Shadow Worm"
          },
          {
            "path": "packs/data/blood-lords-bestiary.db/shadowbound-monk-statue.json",
            "label": "Shadowbound Monk Statue"
          },
          {
            "path": "packs/data/blood-lords-bestiary.db/shadowforged-guardian.json",
            "label": "Shadowforged Guardian"
          },
          {
            "path": "packs/data/blood-lords-bestiary.db/shimmernewt.json",
            "label": "Shimmernewt"
          },
          {
            "path": "packs/data/blood-lords-bestiary.db/shoki.json",
            "label": "Shoki"
          },
          {
            "path": "packs/data/blood-lords-bestiary.db/skeletal-knight.json",
            "label": "Skeletal Knight"
          },
          {
            "path": "packs/data/blood-lords-bestiary.db/skeleton-rival-corpsekiller.json",
            "label": "Skeleton Rival Corpsekiller"
          },
          {
            "path": "packs/data/blood-lords-bestiary.db/skeleton-rival-necromancer.json",
            "label": "Skeleton Rival Necromancer"
          },
          {
            "path": "packs/data/blood-lords-bestiary.db/skull-fairy.json",
            "label": "Skull Fairy"
          },
          {
            "path": "packs/data/blood-lords-bestiary.db/solar-glass-golem.json",
            "label": "Solar Glass Golem"
          },
          {
            "path": "packs/data/blood-lords-bestiary.db/sorvinaesen.json",
            "label": "Sorvinaesen"
          },
          {
            "path": "packs/data/blood-lords-bestiary.db/soul-slime.json",
            "label": "Soul Slime"
          },
          {
            "path": "packs/data/blood-lords-bestiary.db/straugh.json",
            "label": "Straugh"
          },
          {
            "path": "packs/data/blood-lords-bestiary.db/sulvik.json",
            "label": "Sulvik"
          },
          {
            "path": "packs/data/blood-lords-bestiary.db/teaching-assistant.json",
            "label": "Teaching Assistant"
          },
          {
            "path": "packs/data/blood-lords-bestiary.db/tenebric-giant.json",
            "label": "Tenebric Giant"
          },
          {
            "path": "packs/data/blood-lords-bestiary.db/terra-cotta-soldier.json",
            "label": "Terra-cotta Soldier"
          },
          {
            "path": "packs/data/blood-lords-bestiary.db/terrorguard.json",
            "label": "Terrorguard"
          },
          {
            "path": "packs/data/blood-lords-bestiary.db/theater-phantasm.json",
            "label": "Theater Phantasm"
          },
          {
            "path": "packs/data/blood-lords-bestiary.db/tombstone-troll.json",
            "label": "Tombstone Troll"
          },
          {
            "path": "packs/data/blood-lords-bestiary.db/umbraex.json",
            "label": "Umbraex"
          },
          {
            "path": "packs/data/blood-lords-bestiary.db/urbulinex.json",
            "label": "Urbulinex"
          },
          {
            "path": "packs/data/blood-lords-bestiary.db/urglid.json",
            "label": "Urglid"
          },
          {
            "path": "packs/data/blood-lords-bestiary.db/vampire-guardian.json",
            "label": "Vampire Guardian"
          },
          {
            "path": "packs/data/blood-lords-bestiary.db/vampire-rival-necromancer.json",
            "label": "Vampire Rival Necromancer"
          },
          {
            "path": "packs/data/blood-lords-bestiary.db/vampire-taviah.json",
            "label": "Vampire Taviah"
          },
          {
            "path": "packs/data/blood-lords-bestiary.db/vanth-warrior.json",
            "label": "Vanth Warrior"
          },
          {
            "path": "packs/data/blood-lords-bestiary.db/vice-chancellor-vikroti-stroh.json",
            "label": "Vice-Chancellor Vikroti Stroh"
          },
          {
            "path": "packs/data/blood-lords-bestiary.db/virulak-necromancer.json",
            "label": "Virulak Necromancer"
          },
          {
            "path": "packs/data/blood-lords-bestiary.db/virulak-villager.json",
            "label": "Virulak Villager"
          },
          {
            "path": "packs/data/blood-lords-bestiary.db/weeping-jack.json",
            "label": "Weeping Jack"
          },
          {
            "path": "packs/data/blood-lords-bestiary.db/wheel-archon.json",
            "label": "Wheel Archon"
          },
          {
            "path": "packs/data/blood-lords-bestiary.db/yshula.json",
            "label": "Yshula"
          },
          {
            "path": "packs/data/blood-lords-bestiary.db/yulthruk.json",
            "label": "Yulthruk"
          },
          {
            "path": "packs/data/blood-lords-bestiary.db/yurgak.json",
            "label": "Yurgak"
          },
          {
            "path": "packs/data/blood-lords-bestiary.db/zombie-chuul.json",
            "label": "Zombie Chuul"
          },
          {
            "path": "packs/data/blood-lords-bestiary.db/zombie-horse.json",
            "label": "Zombie Horse"
          },
          {
            "path": "packs/data/blood-lords-bestiary.db/zombie-hound.json",
            "label": "Zombie Hound"
          },
          {
            "path": "packs/data/blood-lords-bestiary.db/zombie-rival-necromancer.json",
            "label": "Zombie Rival Necromancer"
          },
          {
            "path": "packs/data/blood-lords-bestiary.db/zuntishan-guard.json",
            "label": "Zuntishan Guard"
          }
        ]
      },
      "book-of-the-dead-bestiary": {
        "label": "Book of the Dead Bestiary",
        "itens": [
          {
            "path": "packs/data/book-of-the-dead-bestiary.db/beetle-carapace.json",
            "label": "Beetle Carapace"
          },
          {
            "path": "packs/data/book-of-the-dead-bestiary.db/bhuta.json",
            "label": "Bhuta"
          },
          {
            "path": "packs/data/book-of-the-dead-bestiary.db/bone-croupier.json",
            "label": "Bone Croupier"
          },
          {
            "path": "packs/data/book-of-the-dead-bestiary.db/cadaverous-rake.json",
            "label": "Cadaverous Rake"
          },
          {
            "path": "packs/data/book-of-the-dead-bestiary.db/child-of-urgathoa.json",
            "label": "Child of Urgathoa"
          },
          {
            "path": "packs/data/book-of-the-dead-bestiary.db/combusted.json",
            "label": "Combusted"
          },
          {
            "path": "packs/data/book-of-the-dead-bestiary.db/corpseroot.json",
            "label": "Corpseroot"
          },
          {
            "path": "packs/data/book-of-the-dead-bestiary.db/daqqanoenyent.json",
            "label": "Daqqanoenyent"
          },
          {
            "path": "packs/data/book-of-the-dead-bestiary.db/death-coach.json",
            "label": "Death Coach"
          },
          {
            "path": "packs/data/book-of-the-dead-bestiary.db/deathless-acolyte-of-urgathoa.json",
            "label": "Deathless Acolyte Of Urgathoa"
          },
          {
            "path": "packs/data/book-of-the-dead-bestiary.db/deathless-hierophant-of-urgathoa.json",
            "label": "Deathless Hierophant Of Urgathoa"
          },
          {
            "path": "packs/data/book-of-the-dead-bestiary.db/decrepit-mummy.json",
            "label": "Decrepit Mummy"
          },
          {
            "path": "packs/data/book-of-the-dead-bestiary.db/drake-skeleton.json",
            "label": "Drake Skeleton"
          },
          {
            "path": "packs/data/book-of-the-dead-bestiary.db/ecorche.json",
            "label": "Ecorche"
          },
          {
            "path": "packs/data/book-of-the-dead-bestiary.db/excorion.json",
            "label": "Excorion"
          },
          {
            "path": "packs/data/book-of-the-dead-bestiary.db/faithless-ecclesiarch.json",
            "label": "Faithless Ecclesiarch"
          },
          {
            "path": "packs/data/book-of-the-dead-bestiary.db/fallen-champion.json",
            "label": "Fallen Champion"
          },
          {
            "path": "packs/data/book-of-the-dead-bestiary.db/festering-gnasher.json",
            "label": "Festering Gnasher"
          },
          {
            "path": "packs/data/book-of-the-dead-bestiary.db/fiddling-bones.json",
            "label": "Fiddling Bones"
          },
          {
            "path": "packs/data/book-of-the-dead-bestiary.db/fluxwraith.json",
            "label": "Fluxwraith"
          },
          {
            "path": "packs/data/book-of-the-dead-bestiary.db/gallowdead.json",
            "label": "Gallowdead"
          },
          {
            "path": "packs/data/book-of-the-dead-bestiary.db/gashadokuro.json",
            "label": "Gashadokuro"
          },
          {
            "path": "packs/data/book-of-the-dead-bestiary.db/geist.json",
            "label": "Geist"
          },
          {
            "path": "packs/data/book-of-the-dead-bestiary.db/gholdako.json",
            "label": "Gholdako"
          },
          {
            "path": "packs/data/book-of-the-dead-bestiary.db/ghost-pirate-captain.json",
            "label": "Ghost Pirate Captain"
          },
          {
            "path": "packs/data/book-of-the-dead-bestiary.db/ghul.json",
            "label": "Ghul"
          },
          {
            "path": "packs/data/book-of-the-dead-bestiary.db/grappling-spirit.json",
            "label": "Grappling Spirit"
          },
          {
            "path": "packs/data/book-of-the-dead-bestiary.db/graveknight-warmaster.json",
            "label": "Graveknight Warmaster"
          },
          {
            "path": "packs/data/book-of-the-dead-bestiary.db/harlo-krant.json",
            "label": "Harlo Krant"
          },
          {
            "path": "packs/data/book-of-the-dead-bestiary.db/hollow-serpent.json",
            "label": "Hollow Serpent"
          },
          {
            "path": "packs/data/book-of-the-dead-bestiary.db/horde-lich.json",
            "label": "Horde Lich"
          },
          {
            "path": "packs/data/book-of-the-dead-bestiary.db/hungry-ghost.json",
            "label": "Hungry Ghost"
          },
          {
            "path": "packs/data/book-of-the-dead-bestiary.db/hunter-wight.json",
            "label": "Hunter Wight"
          },
          {
            "path": "packs/data/book-of-the-dead-bestiary.db/husk-zombie.json",
            "label": "Husk Zombie"
          },
          {
            "path": "packs/data/book-of-the-dead-bestiary.db/ice-mummy.json",
            "label": "Ice Mummy"
          },
          {
            "path": "packs/data/book-of-the-dead-bestiary.db/ichor-slinger.json",
            "label": "Ichor Slinger"
          },
          {
            "path": "packs/data/book-of-the-dead-bestiary.db/iroran-mummy.json",
            "label": "Iroran Mummy"
          },
          {
            "path": "packs/data/book-of-the-dead-bestiary.db/iruxi-ossature.json",
            "label": "Iruxi Ossature"
          },
          {
            "path": "packs/data/book-of-the-dead-bestiary.db/jitterbone-contortionist.json",
            "label": "Jitterbone Contortionist"
          },
          {
            "path": "packs/data/book-of-the-dead-bestiary.db/lacedon.json",
            "label": "Lacedon"
          },
          {
            "path": "packs/data/book-of-the-dead-bestiary.db/last-guard.json",
            "label": "Last Guard"
          },
          {
            "path": "packs/data/book-of-the-dead-bestiary.db/little-man-in-the-woods.json",
            "label": "Little Man In The Woods"
          },
          {
            "path": "packs/data/book-of-the-dead-bestiary.db/llorona.json",
            "label": "Llorona"
          },
          {
            "path": "packs/data/book-of-the-dead-bestiary.db/minister-of-tumult.json",
            "label": "Minister Of Tumult"
          },
          {
            "path": "packs/data/book-of-the-dead-bestiary.db/mummified-cat.json",
            "label": "Mummified Cat"
          },
          {
            "path": "packs/data/book-of-the-dead-bestiary.db/mummy-prophet-of-set.json",
            "label": "Mummy Prophet Of Set"
          },
          {
            "path": "packs/data/book-of-the-dead-bestiary.db/nasurgeth.json",
            "label": "Nasurgeth"
          },
          {
            "path": "packs/data/book-of-the-dead-bestiary.db/obrousian.json",
            "label": "Obrousian"
          },
          {
            "path": "packs/data/book-of-the-dead-bestiary.db/onryo.json",
            "label": "Onryo"
          },
          {
            "path": "packs/data/book-of-the-dead-bestiary.db/pale-sovereign.json",
            "label": "Pale Sovereign"
          },
          {
            "path": "packs/data/book-of-the-dead-bestiary.db/pale-stranger.json",
            "label": "Pale Stranger"
          },
          {
            "path": "packs/data/book-of-the-dead-bestiary.db/polong.json",
            "label": "Polong"
          },
          {
            "path": "packs/data/book-of-the-dead-bestiary.db/predatory-rabbit.json",
            "label": "Predatory Rabbit"
          },
          {
            "path": "packs/data/book-of-the-dead-bestiary.db/priest-of-kabriri.json",
            "label": "Priest Of Kabriri"
          },
          {
            "path": "packs/data/book-of-the-dead-bestiary.db/provincial-jiang-shi.json",
            "label": "Provincial Jiang-shi"
          },
          {
            "path": "packs/data/book-of-the-dead-bestiary.db/prowler-wight.json",
            "label": "Prowler Wight"
          },
          {
            "path": "packs/data/book-of-the-dead-bestiary.db/queen-sluagh.json",
            "label": "Queen Sluagh"
          },
          {
            "path": "packs/data/book-of-the-dead-bestiary.db/raw-nerve.json",
            "label": "Raw Nerve"
          },
          {
            "path": "packs/data/book-of-the-dead-bestiary.db/relictner-eroder.json",
            "label": "Relictner Eroder"
          },
          {
            "path": "packs/data/book-of-the-dead-bestiary.db/runecarved-lich.json",
            "label": "Runecarved Lich"
          },
          {
            "path": "packs/data/book-of-the-dead-bestiary.db/scorned-hound.json",
            "label": "Scorned Hound"
          },
          {
            "path": "packs/data/book-of-the-dead-bestiary.db/seetangeist.json",
            "label": "Seetangeist"
          },
          {
            "path": "packs/data/book-of-the-dead-bestiary.db/shadern-immolator.json",
            "label": "Shadern Immolator"
          },
          {
            "path": "packs/data/book-of-the-dead-bestiary.db/shredskin.json",
            "label": "Shredskin"
          },
          {
            "path": "packs/data/book-of-the-dead-bestiary.db/siabrae.json",
            "label": "Siabrae"
          },
          {
            "path": "packs/data/book-of-the-dead-bestiary.db/silent-stalker.json",
            "label": "Silent Stalker"
          },
          {
            "path": "packs/data/book-of-the-dead-bestiary.db/skeletal-mage.json",
            "label": "Skeletal Mage"
          },
          {
            "path": "packs/data/book-of-the-dead-bestiary.db/skeletal-soldier.json",
            "label": "Skeletal Soldier"
          },
          {
            "path": "packs/data/book-of-the-dead-bestiary.db/skeletal-titan.json",
            "label": "Skeletal Titan"
          },
          {
            "path": "packs/data/book-of-the-dead-bestiary.db/sluagh-reaper.json",
            "label": "Sluagh Reaper"
          },
          {
            "path": "packs/data/book-of-the-dead-bestiary.db/sykever.json",
            "label": "Sykever"
          },
          {
            "path": "packs/data/book-of-the-dead-bestiary.db/taunting-skull.json",
            "label": "Taunting Skull"
          },
          {
            "path": "packs/data/book-of-the-dead-bestiary.db/tormented-burning.json",
            "label": "Tormented (Burning)"
          },
          {
            "path": "packs/data/book-of-the-dead-bestiary.db/tormented-crushing.json",
            "label": "Tormented (Crushing)"
          },
          {
            "path": "packs/data/book-of-the-dead-bestiary.db/tormented-dislocation.json",
            "label": "Tormented (Dislocation)"
          },
          {
            "path": "packs/data/book-of-the-dead-bestiary.db/tormented-drowning.json",
            "label": "Tormented (Drowning)"
          },
          {
            "path": "packs/data/book-of-the-dead-bestiary.db/tormented-impalement.json",
            "label": "Tormented (Impalement)"
          },
          {
            "path": "packs/data/book-of-the-dead-bestiary.db/tormented-starvation.json",
            "label": "Tormented (Starvation)"
          },
          {
            "path": "packs/data/book-of-the-dead-bestiary.db/unrisen.json",
            "label": "Unrisen"
          },
          {
            "path": "packs/data/book-of-the-dead-bestiary.db/urveth.json",
            "label": "Urveth"
          },
          {
            "path": "packs/data/book-of-the-dead-bestiary.db/vanyver.json",
            "label": "Vanyver"
          },
          {
            "path": "packs/data/book-of-the-dead-bestiary.db/vetalarana-emergent.json",
            "label": "Vetalarana Emergent"
          },
          {
            "path": "packs/data/book-of-the-dead-bestiary.db/vetalarana-manipulator.json",
            "label": "Vetalarana Manipulator"
          },
          {
            "path": "packs/data/book-of-the-dead-bestiary.db/waldgeist.json",
            "label": "Waldgeist"
          },
          {
            "path": "packs/data/book-of-the-dead-bestiary.db/wight-commander.json",
            "label": "Wight Commander"
          },
          {
            "path": "packs/data/book-of-the-dead-bestiary.db/withered.json",
            "label": "Withered"
          },
          {
            "path": "packs/data/book-of-the-dead-bestiary.db/wolf-skeleton.json",
            "label": "Wolf Skeleton"
          },
          {
            "path": "packs/data/book-of-the-dead-bestiary.db/zombie-lord.json",
            "label": "Zombie Lord"
          },
          {
            "path": "packs/data/book-of-the-dead-bestiary.db/zombie-mammoth.json",
            "label": "Zombie Mammoth"
          },
          {
            "path": "packs/data/book-of-the-dead-bestiary.db/zombie-owlbear.json",
            "label": "Zombie Owlbear"
          },
          {
            "path": "packs/data/book-of-the-dead-bestiary.db/zombie-snake.json",
            "label": "Zombie Snake"
          }
        ]
      },
      "crown-of-the-kobold-king-bestiary": {
        "label": "Crown of the Kobold King",
        "itens": [
          {
            "path": "packs/data/crown-of-the-kobold-king-bestiary.db/albino-giant-bat.json",
            "label": "Albino Giant Bat"
          },
          {
            "path": "packs/data/crown-of-the-kobold-king-bestiary.db/ashen-guardian.json",
            "label": "Ashen Guardian"
          },
          {
            "path": "packs/data/crown-of-the-kobold-king-bestiary.db/cilios.json",
            "label": "Cilios"
          },
          {
            "path": "packs/data/crown-of-the-kobold-king-bestiary.db/dark-talon-kobold.json",
            "label": "Dark Talon Kobold"
          },
          {
            "path": "packs/data/crown-of-the-kobold-king-bestiary.db/darkmantle.json",
            "label": "Darkmantle"
          },
          {
            "path": "packs/data/crown-of-the-kobold-king-bestiary.db/dismemberment-table.json",
            "label": "Dismemberment Table"
          },
          {
            "path": "packs/data/crown-of-the-kobold-king-bestiary.db/drazmorg-the-damned.json",
            "label": "Drazmorg The Damned"
          },
          {
            "path": "packs/data/crown-of-the-kobold-king-bestiary.db/edgrin-galesong.json",
            "label": "Edgrin Galesong"
          },
          {
            "path": "packs/data/crown-of-the-kobold-king-bestiary.db/foolish-hunter.json",
            "label": "Foolish Hunter"
          },
          {
            "path": "packs/data/crown-of-the-kobold-king-bestiary.db/grick.json",
            "label": "Grick"
          },
          {
            "path": "packs/data/crown-of-the-kobold-king-bestiary.db/grimbal.json",
            "label": "Grimbal"
          },
          {
            "path": "packs/data/crown-of-the-kobold-king-bestiary.db/gurtlekep.json",
            "label": "Gurtlekep"
          },
          {
            "path": "packs/data/crown-of-the-kobold-king-bestiary.db/hymmir-urath.json",
            "label": "Hymmir Urath"
          },
          {
            "path": "packs/data/crown-of-the-kobold-king-bestiary.db/id-ooze.json",
            "label": "Id Ooze"
          },
          {
            "path": "packs/data/crown-of-the-kobold-king-bestiary.db/jekkajak.json",
            "label": "Jekkajak"
          },
          {
            "path": "packs/data/crown-of-the-kobold-king-bestiary.db/kapmek.json",
            "label": "Kapmek"
          },
          {
            "path": "packs/data/crown-of-the-kobold-king-bestiary.db/kerrdremak.json",
            "label": "Kerrdremak"
          },
          {
            "path": "packs/data/crown-of-the-kobold-king-bestiary.db/kieragan-skross.json",
            "label": "Kieragan Skross"
          },
          {
            "path": "packs/data/crown-of-the-kobold-king-bestiary.db/king-merlokrep.json",
            "label": "King Merlokrep"
          },
          {
            "path": "packs/data/crown-of-the-kobold-king-bestiary.db/lekmek.json",
            "label": "Lekmek"
          },
          {
            "path": "packs/data/crown-of-the-kobold-king-bestiary.db/narlynark.json",
            "label": "Narlynark"
          },
          {
            "path": "packs/data/crown-of-the-kobold-king-bestiary.db/tallow-guardian.json",
            "label": "Tallow Guardian"
          },
          {
            "path": "packs/data/crown-of-the-kobold-king-bestiary.db/the-disciples.json",
            "label": "The Disciples"
          },
          {
            "path": "packs/data/crown-of-the-kobold-king-bestiary.db/thoqqua.json",
            "label": "Thoqqua"
          },
          {
            "path": "packs/data/crown-of-the-kobold-king-bestiary.db/ulizmilas-cauldron.json",
            "label": "Ulizmila's Cauldron"
          },
          {
            "path": "packs/data/crown-of-the-kobold-king-bestiary.db/vargouille.json",
            "label": "Vargouille"
          },
          {
            "path": "packs/data/crown-of-the-kobold-king-bestiary.db/ygrik.json",
            "label": "Ygrik"
          }
        ]
      },
      "extinction-curse-bestiary": {
        "label": "Extinction Curse",
        "itens": [
          {
            "path": "packs/data/extinction-curse-bestiary.db/abberton-ruffian.json",
            "label": "Abberton Ruffian"
          },
          {
            "path": "packs/data/extinction-curse-bestiary.db/adrivallo.json",
            "label": "Adrivallo"
          },
          {
            "path": "packs/data/extinction-curse-bestiary.db/aives-the-smoke-dragon.json",
            "label": "Aives The Smoke Dragon"
          },
          {
            "path": "packs/data/extinction-curse-bestiary.db/ammut.json",
            "label": "Ammut"
          },
          {
            "path": "packs/data/extinction-curse-bestiary.db/andera-paldreen.json",
            "label": "Andera Paldreen"
          },
          {
            "path": "packs/data/extinction-curse-bestiary.db/ararda.json",
            "label": "Ararda"
          },
          {
            "path": "packs/data/extinction-curse-bestiary.db/arskuva-the-gnasher.json",
            "label": "Arskuva the Gnasher"
          },
          {
            "path": "packs/data/extinction-curse-bestiary.db/aukashungi-swarm.json",
            "label": "Aukashungi Swarm"
          },
          {
            "path": "packs/data/extinction-curse-bestiary.db/barking-stag.json",
            "label": "Barking Stag"
          },
          {
            "path": "packs/data/extinction-curse-bestiary.db/bitter-truth-bandit.json",
            "label": "Bitter Truth Bandit"
          },
          {
            "path": "packs/data/extinction-curse-bestiary.db/blood-wolf.json",
            "label": "Blood Wolf"
          },
          {
            "path": "packs/data/extinction-curse-bestiary.db/bogey.json",
            "label": "Bogey"
          },
          {
            "path": "packs/data/extinction-curse-bestiary.db/bogeyman.json",
            "label": "Bogeyman"
          },
          {
            "path": "packs/data/extinction-curse-bestiary.db/bone-croupier.json",
            "label": "Bone Croupier"
          },
          {
            "path": "packs/data/extinction-curse-bestiary.db/brughadatch.json",
            "label": "Brughadatch"
          },
          {
            "path": "packs/data/extinction-curse-bestiary.db/bugaboo.json",
            "label": "Bugaboo"
          },
          {
            "path": "packs/data/extinction-curse-bestiary.db/bugul-noz.json",
            "label": "Bugul Noz"
          },
          {
            "path": "packs/data/extinction-curse-bestiary.db/cat-sith.json",
            "label": "Cat Sith"
          },
          {
            "path": "packs/data/extinction-curse-bestiary.db/cavnakash.json",
            "label": "Cavnakash"
          },
          {
            "path": "packs/data/extinction-curse-bestiary.db/celestial-menagerie-bruiser.json",
            "label": "Celestial Menagerie Bruiser"
          },
          {
            "path": "packs/data/extinction-curse-bestiary.db/chimpanzee-visitant.json",
            "label": "Chimpanzee Visitant"
          },
          {
            "path": "packs/data/extinction-curse-bestiary.db/ciza.json",
            "label": "Ciza"
          },
          {
            "path": "packs/data/extinction-curse-bestiary.db/convergent-giant-eagle.json",
            "label": "Convergent Giant Eagle"
          },
          {
            "path": "packs/data/extinction-curse-bestiary.db/convergent-kendley-nathrael.json",
            "label": "Convergent Kendley Nathrael"
          },
          {
            "path": "packs/data/extinction-curse-bestiary.db/convergent-soldier.json",
            "label": "Convergent Soldier"
          },
          {
            "path": "packs/data/extinction-curse-bestiary.db/corrosive-lizard.json",
            "label": "Corrosive Lizard"
          },
          {
            "path": "packs/data/extinction-curse-bestiary.db/corrupted-priest.json",
            "label": "Corrupted Priest"
          },
          {
            "path": "packs/data/extinction-curse-bestiary.db/corrupted-retainer.json",
            "label": "Corrupted Retainer"
          },
          {
            "path": "packs/data/extinction-curse-bestiary.db/counteflora.json",
            "label": "Counteflora"
          },
          {
            "path": "packs/data/extinction-curse-bestiary.db/cu-sith.json",
            "label": "Cu Sith"
          },
          {
            "path": "packs/data/extinction-curse-bestiary.db/daring-danika.json",
            "label": "Daring Danika"
          },
          {
            "path": "packs/data/extinction-curse-bestiary.db/darklands-alchemical-golem.json",
            "label": "Darklands Alchemical Golem"
          },
          {
            "path": "packs/data/extinction-curse-bestiary.db/darricus-stallit.json",
            "label": "Darricus Stallit"
          },
          {
            "path": "packs/data/extinction-curse-bestiary.db/death-drider.json",
            "label": "Death Drider"
          },
          {
            "path": "packs/data/extinction-curse-bestiary.db/deghuun-child-of-mhar.json",
            "label": "Deghuun (Child of Mhar)"
          },
          {
            "path": "packs/data/extinction-curse-bestiary.db/delamar-gianvin.json",
            "label": "Delamar Gianvin"
          },
          {
            "path": "packs/data/extinction-curse-bestiary.db/doblagub.json",
            "label": "Doblagub"
          },
          {
            "path": "packs/data/extinction-curse-bestiary.db/drow-bodyguard-golem.json",
            "label": "Drow Bodyguard Golem"
          },
          {
            "path": "packs/data/extinction-curse-bestiary.db/drunken-brawler.json",
            "label": "Drunken Brawler"
          },
          {
            "path": "packs/data/extinction-curse-bestiary.db/dyzallin-shraen.json",
            "label": "Dyzallin Shraen"
          },
          {
            "path": "packs/data/extinction-curse-bestiary.db/dyzallins-golem.json",
            "label": "Dyzallin's Golem"
          },
          {
            "path": "packs/data/extinction-curse-bestiary.db/elysian-sheep.json",
            "label": "Elysian Sheep"
          },
          {
            "path": "packs/data/extinction-curse-bestiary.db/evora-yarket.json",
            "label": "Evora Yarket"
          },
          {
            "path": "packs/data/extinction-curse-bestiary.db/faceless-butcher.json",
            "label": "Faceless Butcher"
          },
          {
            "path": "packs/data/extinction-curse-bestiary.db/flea-swarm.json",
            "label": "Flea Swarm"
          },
          {
            "path": "packs/data/extinction-curse-bestiary.db/gahlepod.json",
            "label": "Gahlepod"
          },
          {
            "path": "packs/data/extinction-curse-bestiary.db/giant-aukashungi.json",
            "label": "Giant Aukashungi"
          },
          {
            "path": "packs/data/extinction-curse-bestiary.db/giant-flea.json",
            "label": "Giant Flea"
          },
          {
            "path": "packs/data/extinction-curse-bestiary.db/ginjana-mindkeeper.json",
            "label": "Ginjana Mindkeeper"
          },
          {
            "path": "packs/data/extinction-curse-bestiary.db/gluttondark-babau.json",
            "label": "Gluttondark Babau"
          },
          {
            "path": "packs/data/extinction-curse-bestiary.db/guardian-of-the-faithful.json",
            "label": "Guardian of the Faithful"
          },
          {
            "path": "packs/data/extinction-curse-bestiary.db/harrow-doll.json",
            "label": "Harrow Doll"
          },
          {
            "path": "packs/data/extinction-curse-bestiary.db/headless-xulgath.json",
            "label": "Headless Xulgath"
          },
          {
            "path": "packs/data/extinction-curse-bestiary.db/helg-eats-the-eaters.json",
            "label": "Helg Eats-The-Eaters"
          },
          {
            "path": "packs/data/extinction-curse-bestiary.db/herecite-of-zevgavizeb.json",
            "label": "Herecite of Zevgavizeb"
          },
          {
            "path": "packs/data/extinction-curse-bestiary.db/hollow-hush.json",
            "label": "Hollow Hush"
          },
          {
            "path": "packs/data/extinction-curse-bestiary.db/hooklimb-xulgath.json",
            "label": "Hooklimb Xulgath"
          },
          {
            "path": "packs/data/extinction-curse-bestiary.db/horba.json",
            "label": "Horba"
          },
          {
            "path": "packs/data/extinction-curse-bestiary.db/iffdahsil.json",
            "label": "Iffdahsil"
          },
          {
            "path": "packs/data/extinction-curse-bestiary.db/iridescent-elephant.json",
            "label": "Iridescent Elephant"
          },
          {
            "path": "packs/data/extinction-curse-bestiary.db/jellico-bounce-bounce.json",
            "label": "Jellico Bounce-Bounce"
          },
          {
            "path": "packs/data/extinction-curse-bestiary.db/juvenile-boar.json",
            "label": "Juvenile Boar"
          },
          {
            "path": "packs/data/extinction-curse-bestiary.db/kalkek.json",
            "label": "Kalkek"
          },
          {
            "path": "packs/data/extinction-curse-bestiary.db/kharostan.json",
            "label": "Kharostan"
          },
          {
            "path": "packs/data/extinction-curse-bestiary.db/kimilekki.json",
            "label": "Kimilekki"
          },
          {
            "path": "packs/data/extinction-curse-bestiary.db/kirosthrek.json",
            "label": "Kirosthrek"
          },
          {
            "path": "packs/data/extinction-curse-bestiary.db/lakkai-one-fang.json",
            "label": "Lakkai One-Fang"
          },
          {
            "path": "packs/data/extinction-curse-bestiary.db/leandrus.json",
            "label": "Leandrus"
          },
          {
            "path": "packs/data/extinction-curse-bestiary.db/ledorick-banyan-possessed.json",
            "label": "Ledorick Banyan (Possessed)"
          },
          {
            "path": "packs/data/extinction-curse-bestiary.db/ledorick-banyan.json",
            "label": "Ledorick Banyan"
          },
          {
            "path": "packs/data/extinction-curse-bestiary.db/lion-visitant.json",
            "label": "Lion Visitant"
          },
          {
            "path": "packs/data/extinction-curse-bestiary.db/luminous-ooze.json",
            "label": "Luminous Ooze"
          },
          {
            "path": "packs/data/extinction-curse-bestiary.db/lyrt-cozurn.json",
            "label": "Lyrt Cozurn"
          },
          {
            "path": "packs/data/extinction-curse-bestiary.db/mechanical-carny.json",
            "label": "Mechanical Carny"
          },
          {
            "path": "packs/data/extinction-curse-bestiary.db/mistress-dusklight.json",
            "label": "Mistress Dusklight"
          },
          {
            "path": "packs/data/extinction-curse-bestiary.db/muse-phantom.json",
            "label": "Muse Phantom"
          },
          {
            "path": "packs/data/extinction-curse-bestiary.db/muurfeli.json",
            "label": "Muurfeli"
          },
          {
            "path": "packs/data/extinction-curse-bestiary.db/nemmia-bramblecloak.json",
            "label": "Nemmia Bramblecloak"
          },
          {
            "path": "packs/data/extinction-curse-bestiary.db/nihiris.json",
            "label": "Nihiris"
          },
          {
            "path": "packs/data/extinction-curse-bestiary.db/obsidian-golem.json",
            "label": "Obsidian Golem"
          },
          {
            "path": "packs/data/extinction-curse-bestiary.db/pin-tingwheely.json",
            "label": "Pin Tingwheely"
          },
          {
            "path": "packs/data/extinction-curse-bestiary.db/pinacosaurus.json",
            "label": "Pinacosaurus"
          },
          {
            "path": "packs/data/extinction-curse-bestiary.db/pruana-two-punch.json",
            "label": "Pruana Two-punch"
          },
          {
            "path": "packs/data/extinction-curse-bestiary.db/qormintur.json",
            "label": "Qormintur"
          },
          {
            "path": "packs/data/extinction-curse-bestiary.db/qurashith.json",
            "label": "Qurashith"
          },
          {
            "path": "packs/data/extinction-curse-bestiary.db/raptor-guard-wight.json",
            "label": "Raptor Guard Wight"
          },
          {
            "path": "packs/data/extinction-curse-bestiary.db/resin-seep-xulgath.json",
            "label": "Resin-seep Xulgath"
          },
          {
            "path": "packs/data/extinction-curse-bestiary.db/ruanna-nyamma.json",
            "label": "Ruanna Nyamma"
          },
          {
            "path": "packs/data/extinction-curse-bestiary.db/runkrunk.json",
            "label": "Runkrunk"
          },
          {
            "path": "packs/data/extinction-curse-bestiary.db/sarvel-ever-hunger.json",
            "label": "Sarvel Ever-Hunger"
          },
          {
            "path": "packs/data/extinction-curse-bestiary.db/saurian-warmonger.json",
            "label": "Saurian Warmonger"
          },
          {
            "path": "packs/data/extinction-curse-bestiary.db/saurian-worldwatcher.json",
            "label": "Saurian Worldwatcher"
          },
          {
            "path": "packs/data/extinction-curse-bestiary.db/shanchek.json",
            "label": "Shanchek"
          },
          {
            "path": "packs/data/extinction-curse-bestiary.db/shoony-hierarch.json",
            "label": "Shoony Hierarch"
          },
          {
            "path": "packs/data/extinction-curse-bestiary.db/shoony-militia-member.json",
            "label": "Shoony Militia Member"
          },
          {
            "path": "packs/data/extinction-curse-bestiary.db/shoony-tiller.json",
            "label": "Shoony Tiller"
          },
          {
            "path": "packs/data/extinction-curse-bestiary.db/shraen-graveknight.json",
            "label": "Shraen Graveknight"
          },
          {
            "path": "packs/data/extinction-curse-bestiary.db/skarja.json",
            "label": "Skarja"
          },
          {
            "path": "packs/data/extinction-curse-bestiary.db/smiler.json",
            "label": "Smiler"
          },
          {
            "path": "packs/data/extinction-curse-bestiary.db/smoldering-leopard.json",
            "label": "Smoldering Leopard"
          },
          {
            "path": "packs/data/extinction-curse-bestiary.db/sodden-sentinel.json",
            "label": "Sodden Sentinel"
          },
          {
            "path": "packs/data/extinction-curse-bestiary.db/starved-staff.json",
            "label": "Starved Staff"
          },
          {
            "path": "packs/data/extinction-curse-bestiary.db/stirvyn-banyan.json",
            "label": "Stirvyn Banyan"
          },
          {
            "path": "packs/data/extinction-curse-bestiary.db/swardlands-delinquent.json",
            "label": "Swardlands Delinquent"
          },
          {
            "path": "packs/data/extinction-curse-bestiary.db/tallow-ooze.json",
            "label": "Tallow Ooze"
          },
          {
            "path": "packs/data/extinction-curse-bestiary.db/tanessa-fleer.json",
            "label": "Tanessa Fleer"
          },
          {
            "path": "packs/data/extinction-curse-bestiary.db/tashlock-banyan.json",
            "label": "Tashlock Banyan"
          },
          {
            "path": "packs/data/extinction-curse-bestiary.db/the-vanish-man.json",
            "label": "The Vanish Man"
          },
          {
            "path": "packs/data/extinction-curse-bestiary.db/thessekka.json",
            "label": "Thessekka"
          },
          {
            "path": "packs/data/extinction-curse-bestiary.db/ulthadar.json",
            "label": "Ulthadar"
          },
          {
            "path": "packs/data/extinction-curse-bestiary.db/urdefhan-dominator.json",
            "label": "Urdefhan Dominator"
          },
          {
            "path": "packs/data/extinction-curse-bestiary.db/urdefhan-high-tormentor.json",
            "label": "Urdefhan High Tormentor"
          },
          {
            "path": "packs/data/extinction-curse-bestiary.db/urdefhan-hunter.json",
            "label": "Urdefhan Hunter"
          },
          {
            "path": "packs/data/extinction-curse-bestiary.db/urushil.json",
            "label": "Urushil"
          },
          {
            "path": "packs/data/extinction-curse-bestiary.db/vavakia.json",
            "label": "Vavakia"
          },
          {
            "path": "packs/data/extinction-curse-bestiary.db/vermlek.json",
            "label": "Vermlek"
          },
          {
            "path": "packs/data/extinction-curse-bestiary.db/viktor-volkano.json",
            "label": "Viktor Volkano"
          },
          {
            "path": "packs/data/extinction-curse-bestiary.db/violet.json",
            "label": "Violet"
          },
          {
            "path": "packs/data/extinction-curse-bestiary.db/viskithrel.json",
            "label": "Viskithrel"
          },
          {
            "path": "packs/data/extinction-curse-bestiary.db/vitalia.json",
            "label": "Vitalia"
          },
          {
            "path": "packs/data/extinction-curse-bestiary.db/war-sauropelta.json",
            "label": "War Sauropelta"
          },
          {
            "path": "packs/data/extinction-curse-bestiary.db/wight-cultist.json",
            "label": "Wight Cultist"
          },
          {
            "path": "packs/data/extinction-curse-bestiary.db/xilvirek.json",
            "label": "Xilvirek"
          },
          {
            "path": "packs/data/extinction-curse-bestiary.db/xulgath-bilebearer.json",
            "label": "Xulgath Bilebearer"
          },
          {
            "path": "packs/data/extinction-curse-bestiary.db/xulgath-bomber.json",
            "label": "Xulgath Bomber"
          },
          {
            "path": "packs/data/extinction-curse-bestiary.db/xulgath-deepmouth.json",
            "label": "Xulgath Deepmouth"
          },
          {
            "path": "packs/data/extinction-curse-bestiary.db/xulgath-demon-caller.json",
            "label": "Xulgath Demon-Caller"
          },
          {
            "path": "packs/data/extinction-curse-bestiary.db/xulgath-gutrager.json",
            "label": "Xulgath Gutrager"
          },
          {
            "path": "packs/data/extinction-curse-bestiary.db/xulgath-hardscale.json",
            "label": "Xulgath Hardscale"
          },
          {
            "path": "packs/data/extinction-curse-bestiary.db/xulgath-herd-tender.json",
            "label": "Xulgath Herd-Tender"
          },
          {
            "path": "packs/data/extinction-curse-bestiary.db/xulgath-mage.json",
            "label": "Xulgath Mage"
          },
          {
            "path": "packs/data/extinction-curse-bestiary.db/xulgath-roughrider.json",
            "label": "Xulgath Roughrider"
          },
          {
            "path": "packs/data/extinction-curse-bestiary.db/xulgath-skirmisher.json",
            "label": "Xulgath Skirmisher"
          },
          {
            "path": "packs/data/extinction-curse-bestiary.db/xulgath-spinesnapper.json",
            "label": "Xulgath Spinesnapper"
          },
          {
            "path": "packs/data/extinction-curse-bestiary.db/xulgath-stoneliege.json",
            "label": "Xulgath Stoneliege"
          },
          {
            "path": "packs/data/extinction-curse-bestiary.db/xulgath-thoughtmaw.json",
            "label": "Xulgath Thoughtmaw"
          },
          {
            "path": "packs/data/extinction-curse-bestiary.db/yaganty.json",
            "label": "Yaganty"
          },
          {
            "path": "packs/data/extinction-curse-bestiary.db/zashathal-head-taker.json",
            "label": "Zashathal Head-Taker"
          },
          {
            "path": "packs/data/extinction-curse-bestiary.db/zinogyvaz.json",
            "label": "Zinogyvaz"
          },
          {
            "path": "packs/data/extinction-curse-bestiary.db/zuipnyrn.json",
            "label": "Zuipnyrn"
          }
        ]
      },
      "fall-of-plaguestone": {
        "label": "Fall of Plaguestone",
        "itens": [
          {
            "path": "packs/data/fall-of-plaguestone.db/alchemical-drudge.json",
            "label": "Alchemical Drudge"
          },
          {
            "path": "packs/data/fall-of-plaguestone.db/bee-swarm.json",
            "label": "Bee Swarm"
          },
          {
            "path": "packs/data/fall-of-plaguestone.db/blood-ooze.json",
            "label": "Blood Ooze"
          },
          {
            "path": "packs/data/fall-of-plaguestone.db/bloodlash-bush.json",
            "label": "Bloodlash Bush"
          },
          {
            "path": "packs/data/fall-of-plaguestone.db/caustic-wolf.json",
            "label": "Caustic Wolf"
          },
          {
            "path": "packs/data/fall-of-plaguestone.db/drunken-farmer.json",
            "label": "Drunken Farmer"
          },
          {
            "path": "packs/data/fall-of-plaguestone.db/fiery-leopard.json",
            "label": "Fiery Leopard"
          },
          {
            "path": "packs/data/fall-of-plaguestone.db/giant-lightning-serpent.json",
            "label": "Giant Lightning Serpent"
          },
          {
            "path": "packs/data/fall-of-plaguestone.db/graytusk.json",
            "label": "Graytusk"
          },
          {
            "path": "packs/data/fall-of-plaguestone.db/hallod.json",
            "label": "Hallod"
          },
          {
            "path": "packs/data/fall-of-plaguestone.db/icy-rat.json",
            "label": "Icy Rat"
          },
          {
            "path": "packs/data/fall-of-plaguestone.db/lord-nar.json",
            "label": "Lord Nar"
          },
          {
            "path": "packs/data/fall-of-plaguestone.db/mangy-wolf.json",
            "label": "Mangy Wolf"
          },
          {
            "path": "packs/data/fall-of-plaguestone.db/mutant-wolf.json",
            "label": "Mutant Wolf"
          },
          {
            "path": "packs/data/fall-of-plaguestone.db/orc-alchemist.json",
            "label": "Orc Alchemist"
          },
          {
            "path": "packs/data/fall-of-plaguestone.db/stone-horse.json",
            "label": "Stone Horse"
          },
          {
            "path": "packs/data/fall-of-plaguestone.db/the-amalgam.json",
            "label": "The Amalgam"
          },
          {
            "path": "packs/data/fall-of-plaguestone.db/the-behemoth.json",
            "label": "The Behemoth"
          },
          {
            "path": "packs/data/fall-of-plaguestone.db/the-sculptor.json",
            "label": "The Sculptor"
          },
          {
            "path": "packs/data/fall-of-plaguestone.db/vilree.json",
            "label": "Vilree"
          },
          {
            "path": "packs/data/fall-of-plaguestone.db/vine-lasher.json",
            "label": "Vine Lasher"
          }
        ]
      },
      "fists-of-the-ruby-phoenix-bestiary": {
        "label": "Fists of the Ruby Phoenix",
        "itens": [
          {
            "path": "packs/data/fists-of-the-ruby-phoenix-bestiary.db/abbot-tsujon.json",
            "label": "Abbot Tsujon"
          },
          {
            "path": "packs/data/fists-of-the-ruby-phoenix-bestiary.db/agile-warrior-nightmares.json",
            "label": "Agile Warrior (Nightmares)"
          },
          {
            "path": "packs/data/fists-of-the-ruby-phoenix-bestiary.db/agile-warrior.json",
            "label": "Agile Warrior"
          },
          {
            "path": "packs/data/fists-of-the-ruby-phoenix-bestiary.db/akila-stormheel.json",
            "label": "Akila Stormheel"
          },
          {
            "path": "packs/data/fists-of-the-ruby-phoenix-bestiary.db/amihan.json",
            "label": "Amihan"
          },
          {
            "path": "packs/data/fists-of-the-ruby-phoenix-bestiary.db/angoyang.json",
            "label": "Angoyang"
          },
          {
            "path": "packs/data/fists-of-the-ruby-phoenix-bestiary.db/anugobu-apprentice.json",
            "label": "Anugobu Apprentice"
          },
          {
            "path": "packs/data/fists-of-the-ruby-phoenix-bestiary.db/anugobu-wondercrafter.json",
            "label": "Anugobu Wondercrafter"
          },
          {
            "path": "packs/data/fists-of-the-ruby-phoenix-bestiary.db/archery-specialist.json",
            "label": "Archery Specialist"
          },
          {
            "path": "packs/data/fists-of-the-ruby-phoenix-bestiary.db/arms-of-balance-jivati-rovat.json",
            "label": "Arms of Balance (Jivati Rovat)"
          },
          {
            "path": "packs/data/fists-of-the-ruby-phoenix-bestiary.db/arms-of-balance-pravan-majinapti.json",
            "label": "Arms of Balance (Pravan Majinapti)"
          },
          {
            "path": "packs/data/fists-of-the-ruby-phoenix-bestiary.db/arms-of-balance-ranya-shibhatesh.json",
            "label": "Arms of Balance (Ranya Shibhatesh)"
          },
          {
            "path": "packs/data/fists-of-the-ruby-phoenix-bestiary.db/arms-of-balance-usvani.json",
            "label": "Arms of Balance (Usvani)"
          },
          {
            "path": "packs/data/fists-of-the-ruby-phoenix-bestiary.db/artus-rodrivan.json",
            "label": "Artus Rodrivan"
          },
          {
            "path": "packs/data/fists-of-the-ruby-phoenix-bestiary.db/berberoka.json",
            "label": "Berberoka"
          },
          {
            "path": "packs/data/fists-of-the-ruby-phoenix-bestiary.db/blue-viper-level-14.json",
            "label": "Blue Viper (Level 14)"
          },
          {
            "path": "packs/data/fists-of-the-ruby-phoenix-bestiary.db/blue-viper-level-16.json",
            "label": "Blue Viper (Level 16)"
          },
          {
            "path": "packs/data/fists-of-the-ruby-phoenix-bestiary.db/blue-viper-level-20.json",
            "label": "Blue Viper (Level 20)"
          },
          {
            "path": "packs/data/fists-of-the-ruby-phoenix-bestiary.db/bul-gae.json",
            "label": "Bul-Gae"
          },
          {
            "path": "packs/data/fists-of-the-ruby-phoenix-bestiary.db/butterfly-blade-warrior.json",
            "label": "Butterfly Blade Warrior"
          },
          {
            "path": "packs/data/fists-of-the-ruby-phoenix-bestiary.db/canopy-elder.json",
            "label": "Canopy Elder"
          },
          {
            "path": "packs/data/fists-of-the-ruby-phoenix-bestiary.db/caustic-monitor.json",
            "label": "Caustic Monitor"
          },
          {
            "path": "packs/data/fists-of-the-ruby-phoenix-bestiary.db/cloudsplitter.json",
            "label": "Cloudsplitter"
          },
          {
            "path": "packs/data/fists-of-the-ruby-phoenix-bestiary.db/dancing-night-parade.json",
            "label": "Dancing Night Parade"
          },
          {
            "path": "packs/data/fists-of-the-ruby-phoenix-bestiary.db/desecrated-guardian.json",
            "label": "Desecrated Guardian"
          },
          {
            "path": "packs/data/fists-of-the-ruby-phoenix-bestiary.db/drake-courser.json",
            "label": "Drake Courser"
          },
          {
            "path": "packs/data/fists-of-the-ruby-phoenix-bestiary.db/dread-roc.json",
            "label": "Dread Roc"
          },
          {
            "path": "packs/data/fists-of-the-ruby-phoenix-bestiary.db/dromornis.json",
            "label": "Dromornis"
          },
          {
            "path": "packs/data/fists-of-the-ruby-phoenix-bestiary.db/elder-cauthooj.json",
            "label": "Elder Cauthooj"
          },
          {
            "path": "packs/data/fists-of-the-ruby-phoenix-bestiary.db/flying-mountain-kaminari.json",
            "label": "Flying Mountain Kaminari"
          },
          {
            "path": "packs/data/fists-of-the-ruby-phoenix-bestiary.db/ghost-monk.json",
            "label": "Ghost Monk"
          },
          {
            "path": "packs/data/fists-of-the-ruby-phoenix-bestiary.db/golarions-finest-brartork.json",
            "label": "Golarion's Finest (Brartork)"
          },
          {
            "path": "packs/data/fists-of-the-ruby-phoenix-bestiary.db/golarions-finest-han.json",
            "label": "Golarion's Finest (Han)"
          },
          {
            "path": "packs/data/fists-of-the-ruby-phoenix-bestiary.db/golarions-finest-jun.json",
            "label": "Golarion's Finest (Jun)"
          },
          {
            "path": "packs/data/fists-of-the-ruby-phoenix-bestiary.db/golarions-finest-krankkiss.json",
            "label": "Golarion's Finest (Krankkiss)"
          },
          {
            "path": "packs/data/fists-of-the-ruby-phoenix-bestiary.db/golarions-finest-mingyu.json",
            "label": "Golarion's Finest (Mingyu)"
          },
          {
            "path": "packs/data/fists-of-the-ruby-phoenix-bestiary.db/golarions-finest-numoriz.json",
            "label": "Golarion's Finest (Numoriz)"
          },
          {
            "path": "packs/data/fists-of-the-ruby-phoenix-bestiary.db/golarions-finest-paunnima.json",
            "label": "Golarion's Finest (Paunnima)"
          },
          {
            "path": "packs/data/fists-of-the-ruby-phoenix-bestiary.db/golarions-finest-rajna.json",
            "label": "Golarion's Finest (Rajna)"
          },
          {
            "path": "packs/data/fists-of-the-ruby-phoenix-bestiary.db/gomwai.json",
            "label": "Gomwai"
          },
          {
            "path": "packs/data/fists-of-the-ruby-phoenix-bestiary.db/grandfather-mantis.json",
            "label": "Grandfather Mantis"
          },
          {
            "path": "packs/data/fists-of-the-ruby-phoenix-bestiary.db/grave-spinosaurus.json",
            "label": "Grave Spinosaurus"
          },
          {
            "path": "packs/data/fists-of-the-ruby-phoenix-bestiary.db/gumiho.json",
            "label": "Gumiho"
          },
          {
            "path": "packs/data/fists-of-the-ruby-phoenix-bestiary.db/halspin-the-stung.json",
            "label": "Halspin the Stung"
          },
          {
            "path": "packs/data/fists-of-the-ruby-phoenix-bestiary.db/hanas-hundreds.json",
            "label": "Hana's Hundreds"
          },
          {
            "path": "packs/data/fists-of-the-ruby-phoenix-bestiary.db/hantu-belian.json",
            "label": "Hantu Belian"
          },
          {
            "path": "packs/data/fists-of-the-ruby-phoenix-bestiary.db/hantu-denai.json",
            "label": "Hantu Denai"
          },
          {
            "path": "packs/data/fists-of-the-ruby-phoenix-bestiary.db/huldrin-skolsdottir.json",
            "label": "Huldrin Skolsdottir"
          },
          {
            "path": "packs/data/fists-of-the-ruby-phoenix-bestiary.db/hummingbird.json",
            "label": "Hummingbird"
          },
          {
            "path": "packs/data/fists-of-the-ruby-phoenix-bestiary.db/inmyeonjo.json",
            "label": "Inmyeonjo"
          },
          {
            "path": "packs/data/fists-of-the-ruby-phoenix-bestiary.db/jaiban.json",
            "label": "Jaiban"
          },
          {
            "path": "packs/data/fists-of-the-ruby-phoenix-bestiary.db/ji-yook-gumiho-form.json",
            "label": "Ji-yook (Gumiho Form)"
          },
          {
            "path": "packs/data/fists-of-the-ruby-phoenix-bestiary.db/ji-yook-level-13.json",
            "label": "Ji-yook (Level 13)"
          },
          {
            "path": "packs/data/fists-of-the-ruby-phoenix-bestiary.db/ji-yook-level-9.json",
            "label": "Ji-yook (Level 9)"
          },
          {
            "path": "packs/data/fists-of-the-ruby-phoenix-bestiary.db/jin-hae.json",
            "label": "Jin-hae"
          },
          {
            "path": "packs/data/fists-of-the-ruby-phoenix-bestiary.db/joon-seo.json",
            "label": "Joon-seo"
          },
          {
            "path": "packs/data/fists-of-the-ruby-phoenix-bestiary.db/juspix-rammel.json",
            "label": "Juspix Rammel"
          },
          {
            "path": "packs/data/fists-of-the-ruby-phoenix-bestiary.db/kannitri.json",
            "label": "Kannitri"
          },
          {
            "path": "packs/data/fists-of-the-ruby-phoenix-bestiary.db/kas-xi-rai.json",
            "label": "Kas Xi Rai"
          },
          {
            "path": "packs/data/fists-of-the-ruby-phoenix-bestiary.db/ki-adept-ahmoza-twins.json",
            "label": "Ki Adept (Ahmoza Twins)"
          },
          {
            "path": "packs/data/fists-of-the-ruby-phoenix-bestiary.db/ki-adept.json",
            "label": "Ki Adept"
          },
          {
            "path": "packs/data/fists-of-the-ruby-phoenix-bestiary.db/koto-zekora.json",
            "label": "Koto Zekora"
          },
          {
            "path": "packs/data/fists-of-the-ruby-phoenix-bestiary.db/kun.json",
            "label": "Kun"
          },
          {
            "path": "packs/data/fists-of-the-ruby-phoenix-bestiary.db/lantondo.json",
            "label": "Lantondo"
          },
          {
            "path": "packs/data/fists-of-the-ruby-phoenix-bestiary.db/laruhao.json",
            "label": "Laruhao"
          },
          {
            "path": "packs/data/fists-of-the-ruby-phoenix-bestiary.db/lophiithu.json",
            "label": "Lophiithu"
          },
          {
            "path": "packs/data/fists-of-the-ruby-phoenix-bestiary.db/maalya.json",
            "label": "Maalya"
          },
          {
            "path": "packs/data/fists-of-the-ruby-phoenix-bestiary.db/mafika-ayuwari.json",
            "label": "Mafika Ayuwari"
          },
          {
            "path": "packs/data/fists-of-the-ruby-phoenix-bestiary.db/mage-of-many-styles.json",
            "label": "Mage of Many Styles"
          },
          {
            "path": "packs/data/fists-of-the-ruby-phoenix-bestiary.db/mammoth-turtle.json",
            "label": "Mammoth Turtle"
          },
          {
            "path": "packs/data/fists-of-the-ruby-phoenix-bestiary.db/manananggal.json",
            "label": "Manananggal"
          },
          {
            "path": "packs/data/fists-of-the-ruby-phoenix-bestiary.db/master-xun.json",
            "label": "Master Xun"
          },
          {
            "path": "packs/data/fists-of-the-ruby-phoenix-bestiary.db/melodic-squall.json",
            "label": "Melodic Squall"
          },
          {
            "path": "packs/data/fists-of-the-ruby-phoenix-bestiary.db/muckish-creep.json",
            "label": "Muckish Creep"
          },
          {
            "path": "packs/data/fists-of-the-ruby-phoenix-bestiary.db/nai-yan-fei.json",
            "label": "Nai Yan Fei"
          },
          {
            "path": "packs/data/fists-of-the-ruby-phoenix-bestiary.db/old-man-statue.json",
            "label": "Old Man Statue"
          },
          {
            "path": "packs/data/fists-of-the-ruby-phoenix-bestiary.db/orochi.json",
            "label": "Orochi"
          },
          {
            "path": "packs/data/fists-of-the-ruby-phoenix-bestiary.db/peng.json",
            "label": "Peng"
          },
          {
            "path": "packs/data/fists-of-the-ruby-phoenix-bestiary.db/phuthi.json",
            "label": "Phuthi"
          },
          {
            "path": "packs/data/fists-of-the-ruby-phoenix-bestiary.db/planar-terra-cotta-soldier.json",
            "label": "Planar Terra-cotta Soldier"
          },
          {
            "path": "packs/data/fists-of-the-ruby-phoenix-bestiary.db/planar-terra-cotta-squadron.json",
            "label": "Planar Terra-cotta Squadron"
          },
          {
            "path": "packs/data/fists-of-the-ruby-phoenix-bestiary.db/portal-eater.json",
            "label": "Portal Eater"
          },
          {
            "path": "packs/data/fists-of-the-ruby-phoenix-bestiary.db/rai-sho-disciple.json",
            "label": "Rai Sho Disciple"
          },
          {
            "path": "packs/data/fists-of-the-ruby-phoenix-bestiary.db/rai-sho-postulant.json",
            "label": "Rai Sho Postulant"
          },
          {
            "path": "packs/data/fists-of-the-ruby-phoenix-bestiary.db/ran-to-level-14.json",
            "label": "Ran-to (Level 14)"
          },
          {
            "path": "packs/data/fists-of-the-ruby-phoenix-bestiary.db/ran-to-level-16.json",
            "label": "Ran-to (Level 16)"
          },
          {
            "path": "packs/data/fists-of-the-ruby-phoenix-bestiary.db/ran-to-level-20.json",
            "label": "Ran-to (Level 20)"
          },
          {
            "path": "packs/data/fists-of-the-ruby-phoenix-bestiary.db/razu.json",
            "label": "Razu"
          },
          {
            "path": "packs/data/fists-of-the-ruby-phoenix-bestiary.db/rivka-cimurlian.json",
            "label": "Rivka (Cimurlian)"
          },
          {
            "path": "packs/data/fists-of-the-ruby-phoenix-bestiary.db/rivka-igroon.json",
            "label": "Rivka (Igroon)"
          },
          {
            "path": "packs/data/fists-of-the-ruby-phoenix-bestiary.db/rivka-kujiba.json",
            "label": "Rivka (Kujiba)"
          },
          {
            "path": "packs/data/fists-of-the-ruby-phoenix-bestiary.db/rivka-mogaru.json",
            "label": "Rivka (Mogaru)"
          },
          {
            "path": "packs/data/fists-of-the-ruby-phoenix-bestiary.db/rivka-yorak.json",
            "label": "Rivka (Yorak)"
          },
          {
            "path": "packs/data/fists-of-the-ruby-phoenix-bestiary.db/sanzuwu.json",
            "label": "Sanzuwu"
          },
          {
            "path": "packs/data/fists-of-the-ruby-phoenix-bestiary.db/shadow-yai.json",
            "label": "Shadow Yai"
          },
          {
            "path": "packs/data/fists-of-the-ruby-phoenix-bestiary.db/shino-hakusa-level-14.json",
            "label": "Shino Hakusa (Level 14)"
          },
          {
            "path": "packs/data/fists-of-the-ruby-phoenix-bestiary.db/shino-hakusa-level-16.json",
            "label": "Shino Hakusa (Level 16)"
          },
          {
            "path": "packs/data/fists-of-the-ruby-phoenix-bestiary.db/shino-hakusa-level-20.json",
            "label": "Shino Hakusa (Level 20)"
          },
          {
            "path": "packs/data/fists-of-the-ruby-phoenix-bestiary.db/sigbin.json",
            "label": "Sigbin"
          },
          {
            "path": "packs/data/fists-of-the-ruby-phoenix-bestiary.db/sixth-pillar-student.json",
            "label": "Sixth Pillar Student"
          },
          {
            "path": "packs/data/fists-of-the-ruby-phoenix-bestiary.db/spinel-leviathan-syndara.json",
            "label": "Spinel Leviathan Syndara"
          },
          {
            "path": "packs/data/fists-of-the-ruby-phoenix-bestiary.db/spirit-turtle.json",
            "label": "Spirit Turtle"
          },
          {
            "path": "packs/data/fists-of-the-ruby-phoenix-bestiary.db/sthira.json",
            "label": "Sthira"
          },
          {
            "path": "packs/data/fists-of-the-ruby-phoenix-bestiary.db/surjit-hamelan.json",
            "label": "Surjit Hamelan"
          },
          {
            "path": "packs/data/fists-of-the-ruby-phoenix-bestiary.db/syndara-the-sculptor.json",
            "label": "Syndara the Sculptor"
          },
          {
            "path": "packs/data/fists-of-the-ruby-phoenix-bestiary.db/syu-tak-nwa-level-14.json",
            "label": "Syu Tak-nwa (Level 14)"
          },
          {
            "path": "packs/data/fists-of-the-ruby-phoenix-bestiary.db/syu-tak-nwa-level-16.json",
            "label": "Syu Tak-nwa (Level 16)"
          },
          {
            "path": "packs/data/fists-of-the-ruby-phoenix-bestiary.db/syu-tak-nwa-level-20.json",
            "label": "Syu Tak-nwa (Level 20)"
          },
          {
            "path": "packs/data/fists-of-the-ruby-phoenix-bestiary.db/taiga-yai.json",
            "label": "Taiga Yai"
          },
          {
            "path": "packs/data/fists-of-the-ruby-phoenix-bestiary.db/takatorra-daitengu-form.json",
            "label": "Takatorra (Daitengu Form)"
          },
          {
            "path": "packs/data/fists-of-the-ruby-phoenix-bestiary.db/takatorra-level-13.json",
            "label": "Takatorra (Level 13)"
          },
          {
            "path": "packs/data/fists-of-the-ruby-phoenix-bestiary.db/takatorra-level-9.json",
            "label": "Takatorra (Level 9)"
          },
          {
            "path": "packs/data/fists-of-the-ruby-phoenix-bestiary.db/tamikan.json",
            "label": "Tamikan"
          },
          {
            "path": "packs/data/fists-of-the-ruby-phoenix-bestiary.db/tino-oni-form.json",
            "label": "Tino (Oni Form)"
          },
          {
            "path": "packs/data/fists-of-the-ruby-phoenix-bestiary.db/tino-tung-level-13.json",
            "label": "Tino Tung (Level 13)"
          },
          {
            "path": "packs/data/fists-of-the-ruby-phoenix-bestiary.db/tino-tung-level-9.json",
            "label": "Tino Tung (Level 9)"
          },
          {
            "path": "packs/data/fists-of-the-ruby-phoenix-bestiary.db/troff-frostknuckles.json",
            "label": "Troff Frostknuckles"
          },
          {
            "path": "packs/data/fists-of-the-ruby-phoenix-bestiary.db/tyrannosaurus-imperator.json",
            "label": "Tyrannosaurus Imperator"
          },
          {
            "path": "packs/data/fists-of-the-ruby-phoenix-bestiary.db/umbasi.json",
            "label": "Umbasi"
          },
          {
            "path": "packs/data/fists-of-the-ruby-phoenix-bestiary.db/urnak-lostwind.json",
            "label": "Urnak Lostwind"
          },
          {
            "path": "packs/data/fists-of-the-ruby-phoenix-bestiary.db/watchtower-poltergeist.json",
            "label": "Watchtower Poltergeist"
          },
          {
            "path": "packs/data/fists-of-the-ruby-phoenix-bestiary.db/watchtower-shadow.json",
            "label": "Watchtower Shadow"
          },
          {
            "path": "packs/data/fists-of-the-ruby-phoenix-bestiary.db/watchtower-wraith.json",
            "label": "Watchtower Wraith"
          },
          {
            "path": "packs/data/fists-of-the-ruby-phoenix-bestiary.db/weapon-master-under-the-pale-sun-dervishes.json",
            "label": "Weapon Master (Under the Pale Sun Dervishes)"
          },
          {
            "path": "packs/data/fists-of-the-ruby-phoenix-bestiary.db/weapon-master.json",
            "label": "Weapon Master"
          },
          {
            "path": "packs/data/fists-of-the-ruby-phoenix-bestiary.db/yabin-the-just-level-13.json",
            "label": "Yabin the Just (Level 13)"
          },
          {
            "path": "packs/data/fists-of-the-ruby-phoenix-bestiary.db/yabin-the-just-level-9.json",
            "label": "Yabin the Just (Level 9)"
          },
          {
            "path": "packs/data/fists-of-the-ruby-phoenix-bestiary.db/yabin-white-serpent-form.json",
            "label": "Yabin (White Serpent Form)"
          },
          {
            "path": "packs/data/fists-of-the-ruby-phoenix-bestiary.db/yarrika-mulandez.json",
            "label": "Yarrika Mulandez"
          },
          {
            "path": "packs/data/fists-of-the-ruby-phoenix-bestiary.db/yoh-souran.json",
            "label": "Yoh Souran"
          }
        ]
      },
      "gatewalkers-bestiary": {
        "label": "Gatewalkers",
        "itens": [
          {
            "path": "packs/data/gatewalkers-bestiary.db/amelekana.json",
            "label": "Amelekana"
          },
          {
            "path": "packs/data/gatewalkers-bestiary.db/bolan-nogasso.json",
            "label": "Bolan Nogasso"
          },
          {
            "path": "packs/data/gatewalkers-bestiary.db/captain-salah.json",
            "label": "Captain Salah"
          },
          {
            "path": "packs/data/gatewalkers-bestiary.db/cliffhunter-pteranodon.json",
            "label": "Cliffhunter Pteranodon"
          },
          {
            "path": "packs/data/gatewalkers-bestiary.db/delphon.json",
            "label": "Delphon"
          },
          {
            "path": "packs/data/gatewalkers-bestiary.db/desa-desa.json",
            "label": "Desa-Desa"
          },
          {
            "path": "packs/data/gatewalkers-bestiary.db/immolis.json",
            "label": "Immolis"
          },
          {
            "path": "packs/data/gatewalkers-bestiary.db/kaneepo-the-slim.json",
            "label": "Kaneepo the Slim"
          },
          {
            "path": "packs/data/gatewalkers-bestiary.db/kareq.json",
            "label": "Kareq"
          },
          {
            "path": "packs/data/gatewalkers-bestiary.db/oaksteward-enforcer-gatehouse.json",
            "label": "Oaksteward Enforcer (Gatehouse)"
          },
          {
            "path": "packs/data/gatewalkers-bestiary.db/oaksteward-enforcer.json",
            "label": "Oaksteward Enforcer"
          },
          {
            "path": "packs/data/gatewalkers-bestiary.db/ocluai.json",
            "label": "Ocluai"
          },
          {
            "path": "packs/data/gatewalkers-bestiary.db/quarry-construct.json",
            "label": "Quarry Construct"
          },
          {
            "path": "packs/data/gatewalkers-bestiary.db/symbiotic-amoeba.json",
            "label": "Symbiotic Amoeba"
          },
          {
            "path": "packs/data/gatewalkers-bestiary.db/temagyr.json",
            "label": "Temagyr"
          },
          {
            "path": "packs/data/gatewalkers-bestiary.db/the-looksee-man.json",
            "label": "The Looksee Man"
          },
          {
            "path": "packs/data/gatewalkers-bestiary.db/tree-fisher.json",
            "label": "Tree Fisher"
          }
        ]
      },
      "impossible-lands-bestiary": {
        "label": "Lost Omens: Impossible Lands",
        "itens": [
          {
            "path": "packs/data/impossible-lands-bestiary.db/benthix-reaver.json",
            "label": "Benthix Reaver"
          },
          {
            "path": "packs/data/impossible-lands-bestiary.db/clockwork-cannoneer.json",
            "label": "Clockwork Cannoneer"
          },
          {
            "path": "packs/data/impossible-lands-bestiary.db/cursed-king.json",
            "label": "Cursed King"
          },
          {
            "path": "packs/data/impossible-lands-bestiary.db/fleshforged-conformer.json",
            "label": "Fleshforged Conformer"
          },
          {
            "path": "packs/data/impossible-lands-bestiary.db/fleshforged-dreadnought.json",
            "label": "Fleshforged Dreadnought"
          },
          {
            "path": "packs/data/impossible-lands-bestiary.db/gunpowder-ooze.json",
            "label": "Gunpowder Ooze"
          },
          {
            "path": "packs/data/impossible-lands-bestiary.db/kasesh-stone.json",
            "label": "Kasesh (Stone)"
          },
          {
            "path": "packs/data/impossible-lands-bestiary.db/kashrishi-evaluator.json",
            "label": "Kashrishi Evaluator"
          },
          {
            "path": "packs/data/impossible-lands-bestiary.db/mutant-gnoll-hulk.json",
            "label": "Mutant Gnoll Hulk"
          },
          {
            "path": "packs/data/impossible-lands-bestiary.db/quantium-golem-acid.json",
            "label": "Quantium Golem (Acid)"
          },
          {
            "path": "packs/data/impossible-lands-bestiary.db/quantium-golem-electricity.json",
            "label": "Quantium Golem (Electricity)"
          },
          {
            "path": "packs/data/impossible-lands-bestiary.db/ratajin-mastermind.json",
            "label": "Ratajin Mastermind"
          },
          {
            "path": "packs/data/impossible-lands-bestiary.db/skinskitter.json",
            "label": "Skinskitter"
          },
          {
            "path": "packs/data/impossible-lands-bestiary.db/spellscar-fext.json",
            "label": "Spellscar Fext"
          },
          {
            "path": "packs/data/impossible-lands-bestiary.db/stone-sister.json",
            "label": "Stone Sister"
          },
          {
            "path": "packs/data/impossible-lands-bestiary.db/ugvashi.json",
            "label": "Ugvashi"
          }
        ]
      },
      "kingmaker-bestiary": {
        "label": "Kingmaker",
        "itens": [
          {
            "path": "packs/data/kingmaker-bestiary.db/aecora-silverfire.json",
            "label": "Aecora Silverfire"
          },
          {
            "path": "packs/data/kingmaker-bestiary.db/agai.json",
            "label": "Agai"
          },
          {
            "path": "packs/data/kingmaker-bestiary.db/akiros-ismort.json",
            "label": "Akiros Ismort"
          },
          {
            "path": "packs/data/kingmaker-bestiary.db/akuzhail.json",
            "label": "Akuzhail"
          },
          {
            "path": "packs/data/kingmaker-bestiary.db/alasen.json",
            "label": "Alasen"
          },
          {
            "path": "packs/data/kingmaker-bestiary.db/aldori-sister.json",
            "label": "Aldori Sister"
          },
          {
            "path": "packs/data/kingmaker-bestiary.db/ameon-trask.json",
            "label": "Ameon Trask"
          },
          {
            "path": "packs/data/kingmaker-bestiary.db/ancient-wisp.json",
            "label": "Ancient Wisp"
          },
          {
            "path": "packs/data/kingmaker-bestiary.db/ankou-assassin.json",
            "label": "Ankou Assassin"
          },
          {
            "path": "packs/data/kingmaker-bestiary.db/annamede-belavarah.json",
            "label": "Annamede Belavarah"
          },
          {
            "path": "packs/data/kingmaker-bestiary.db/armag-twice-born.json",
            "label": "Armag Twice-Born"
          },
          {
            "path": "packs/data/kingmaker-bestiary.db/auchs.json",
            "label": "Auchs"
          },
          {
            "path": "packs/data/kingmaker-bestiary.db/avatar-of-the-lantern-king.json",
            "label": "Avatar of the Lantern King"
          },
          {
            "path": "packs/data/kingmaker-bestiary.db/barbtongued-wyvern.json",
            "label": "Barbtongued Wyvern"
          },
          {
            "path": "packs/data/kingmaker-bestiary.db/black-smilodon.json",
            "label": "Black Smilodon"
          },
          {
            "path": "packs/data/kingmaker-bestiary.db/black-tear-cutthroat.json",
            "label": "Black Tear Cutthroat"
          },
          {
            "path": "packs/data/kingmaker-bestiary.db/bloom-cultist.json",
            "label": "Bloom Cultist"
          },
          {
            "path": "packs/data/kingmaker-bestiary.db/bloom-of-lamashtu.json",
            "label": "Bloom of Lamashtu"
          },
          {
            "path": "packs/data/kingmaker-bestiary.db/bloom-wyvern.json",
            "label": "Bloom Wyvern"
          },
          {
            "path": "packs/data/kingmaker-bestiary.db/bloomborn-athach.json",
            "label": "Bloomborn Athach"
          },
          {
            "path": "packs/data/kingmaker-bestiary.db/bog-mummy-cultist.json",
            "label": "Bog Mummy Cultist"
          },
          {
            "path": "packs/data/kingmaker-bestiary.db/boggard-cultist.json",
            "label": "Boggard Cultist"
          },
          {
            "path": "packs/data/kingmaker-bestiary.db/boggard-warden.json",
            "label": "Boggard Warden"
          },
          {
            "path": "packs/data/kingmaker-bestiary.db/brush-thylacine.json",
            "label": "Brush Thylacine"
          },
          {
            "path": "packs/data/kingmaker-bestiary.db/castruccio-irovetti.json",
            "label": "Castruccio Irovetti"
          },
          {
            "path": "packs/data/kingmaker-bestiary.db/centaur-scout.json",
            "label": "Centaur Scout"
          },
          {
            "path": "packs/data/kingmaker-bestiary.db/cephal-lorentus.json",
            "label": "Cephal Lorentus"
          },
          {
            "path": "packs/data/kingmaker-bestiary.db/chew-spider.json",
            "label": "Chew Spider"
          },
          {
            "path": "packs/data/kingmaker-bestiary.db/chief-sootscale.json",
            "label": "Chief Sootscale"
          },
          {
            "path": "packs/data/kingmaker-bestiary.db/cleansed-cultist.json",
            "label": "Cleansed Cultist"
          },
          {
            "path": "packs/data/kingmaker-bestiary.db/corax.json",
            "label": "Corax"
          },
          {
            "path": "packs/data/kingmaker-bestiary.db/cursed-guardian.json",
            "label": "Cursed Guardian"
          },
          {
            "path": "packs/data/kingmaker-bestiary.db/cyclops-zombie.json",
            "label": "Cyclops Zombie"
          },
          {
            "path": "packs/data/kingmaker-bestiary.db/darivan.json",
            "label": "Darivan"
          },
          {
            "path": "packs/data/kingmaker-bestiary.db/davik-nettles.json",
            "label": "Davik Nettles"
          },
          {
            "path": "packs/data/kingmaker-bestiary.db/defaced-naiad-queen.json",
            "label": "Defaced Naiad Queen"
          },
          {
            "path": "packs/data/kingmaker-bestiary.db/dog-ekundayos-companion.json",
            "label": "Dog (Ekundayo's Companion)"
          },
          {
            "path": "packs/data/kingmaker-bestiary.db/dovan-from-nisroch.json",
            "label": "Dovan from Nisroch"
          },
          {
            "path": "packs/data/kingmaker-bestiary.db/drelev-guards.json",
            "label": "Drelev Guards"
          },
          {
            "path": "packs/data/kingmaker-bestiary.db/elder-elemental-tsunami.json",
            "label": "Elder Elemental Tsunami"
          },
          {
            "path": "packs/data/kingmaker-bestiary.db/elga-verniex.json",
            "label": "Elga Verniex"
          },
          {
            "path": "packs/data/kingmaker-bestiary.db/engelidis.json",
            "label": "Engelidis"
          },
          {
            "path": "packs/data/kingmaker-bestiary.db/enormous-dragonfly.json",
            "label": "Enormous Dragonfly"
          },
          {
            "path": "packs/data/kingmaker-bestiary.db/enormous-flame-drake.json",
            "label": "Enormous Flame Drake"
          },
          {
            "path": "packs/data/kingmaker-bestiary.db/eobald.json",
            "label": "Eobald"
          },
          {
            "path": "packs/data/kingmaker-bestiary.db/evindra.json",
            "label": "Evindra"
          },
          {
            "path": "packs/data/kingmaker-bestiary.db/false-priestess.json",
            "label": "False Priestess"
          },
          {
            "path": "packs/data/kingmaker-bestiary.db/fen-pudding.json",
            "label": "Fen Pudding"
          },
          {
            "path": "packs/data/kingmaker-bestiary.db/fetch-behemoth.json",
            "label": "Fetch Behemoth"
          },
          {
            "path": "packs/data/kingmaker-bestiary.db/fetch-stalker.json",
            "label": "Fetch Stalker"
          },
          {
            "path": "packs/data/kingmaker-bestiary.db/fionn.json",
            "label": "Fionn"
          },
          {
            "path": "packs/data/kingmaker-bestiary.db/foras.json",
            "label": "Foras"
          },
          {
            "path": "packs/data/kingmaker-bestiary.db/freshly-bloomed-basilisk.json",
            "label": "Freshly Bloomed Basilisk"
          },
          {
            "path": "packs/data/kingmaker-bestiary.db/gaetane.json",
            "label": "Gaetane"
          },
          {
            "path": "packs/data/kingmaker-bestiary.db/gedovius.json",
            "label": "Gedovius"
          },
          {
            "path": "packs/data/kingmaker-bestiary.db/general-avinash-jurrg.json",
            "label": "General Avinash Jurrg"
          },
          {
            "path": "packs/data/kingmaker-bestiary.db/ghostly-guard.json",
            "label": "Ghostly Guard"
          },
          {
            "path": "packs/data/kingmaker-bestiary.db/giant-trapdoor-spider.json",
            "label": "Giant Trapdoor Spider"
          },
          {
            "path": "packs/data/kingmaker-bestiary.db/goblin-bat-dog.json",
            "label": "Goblin Bat-Dog"
          },
          {
            "path": "packs/data/kingmaker-bestiary.db/grabbles.json",
            "label": "Grabbles"
          },
          {
            "path": "packs/data/kingmaker-bestiary.db/grigori.json",
            "label": "Grigori"
          },
          {
            "path": "packs/data/kingmaker-bestiary.db/gromog.json",
            "label": "Gromog"
          },
          {
            "path": "packs/data/kingmaker-bestiary.db/gurija.json",
            "label": "Gurija"
          },
          {
            "path": "packs/data/kingmaker-bestiary.db/hannis-drelev.json",
            "label": "Hannis Drelev"
          },
          {
            "path": "packs/data/kingmaker-bestiary.db/happs-bydon.json",
            "label": "Happs Bydon"
          },
          {
            "path": "packs/data/kingmaker-bestiary.db/hargulka.json",
            "label": "Hargulka"
          },
          {
            "path": "packs/data/kingmaker-bestiary.db/hateful-hermit.json",
            "label": "Hateful Hermit"
          },
          {
            "path": "packs/data/kingmaker-bestiary.db/hill-giant-butcher.json",
            "label": "Hill Giant Butcher"
          },
          {
            "path": "packs/data/kingmaker-bestiary.db/hillstomper.json",
            "label": "Hillstomper"
          },
          {
            "path": "packs/data/kingmaker-bestiary.db/hooktongue-hydra.json",
            "label": "Hooktongue Hydra"
          },
          {
            "path": "packs/data/kingmaker-bestiary.db/hooktongue.json",
            "label": "Hooktongue"
          },
          {
            "path": "packs/data/kingmaker-bestiary.db/horagnamon.json",
            "label": "Horagnamon"
          },
          {
            "path": "packs/data/kingmaker-bestiary.db/ilora-nuski.json",
            "label": "Ilora Nuski"
          },
          {
            "path": "packs/data/kingmaker-bestiary.db/ilthuliak.json",
            "label": "Ilthuliak"
          },
          {
            "path": "packs/data/kingmaker-bestiary.db/imeckus-stroon.json",
            "label": "Imeckus Stroon"
          },
          {
            "path": "packs/data/kingmaker-bestiary.db/immense-mandragora.json",
            "label": "Immense Mandragora"
          },
          {
            "path": "packs/data/kingmaker-bestiary.db/irahkatu.json",
            "label": "Irahkatu"
          },
          {
            "path": "packs/data/kingmaker-bestiary.db/irovettis-fetch.json",
            "label": "Irovetti's Fetch"
          },
          {
            "path": "packs/data/kingmaker-bestiary.db/jaggedbriar-hag.json",
            "label": "Jaggedbriar Hag"
          },
          {
            "path": "packs/data/kingmaker-bestiary.db/jamandi-aldori.json",
            "label": "Jamandi Aldori"
          },
          {
            "path": "packs/data/kingmaker-bestiary.db/jewel.json",
            "label": "Jewel"
          },
          {
            "path": "packs/data/kingmaker-bestiary.db/jin-durwhimmer.json",
            "label": "Jin Durwhimmer"
          },
          {
            "path": "packs/data/kingmaker-bestiary.db/jurgrindor.json",
            "label": "Jurgrindor"
          },
          {
            "path": "packs/data/kingmaker-bestiary.db/kargstaad.json",
            "label": "Kargstaad"
          },
          {
            "path": "packs/data/kingmaker-bestiary.db/kargstaads-giant.json",
            "label": "Kargstaad's Giant"
          },
          {
            "path": "packs/data/kingmaker-bestiary.db/kellid-graveknight.json",
            "label": "Kellid Graveknight"
          },
          {
            "path": "packs/data/kingmaker-bestiary.db/kereek.json",
            "label": "Kereek"
          },
          {
            "path": "packs/data/kingmaker-bestiary.db/king-vesket.json",
            "label": "King Vesket"
          },
          {
            "path": "packs/data/kingmaker-bestiary.db/kob-moleg.json",
            "label": "Kob Moleg"
          },
          {
            "path": "packs/data/kingmaker-bestiary.db/korog.json",
            "label": "Korog"
          },
          {
            "path": "packs/data/kingmaker-bestiary.db/kressle.json",
            "label": "Kressle"
          },
          {
            "path": "packs/data/kingmaker-bestiary.db/kundal.json",
            "label": "Kundal"
          },
          {
            "path": "packs/data/kingmaker-bestiary.db/leng-envoy.json",
            "label": "Leng Envoy"
          },
          {
            "path": "packs/data/kingmaker-bestiary.db/lesser-jabberwock.json",
            "label": "Lesser Jabberwock"
          },
          {
            "path": "packs/data/kingmaker-bestiary.db/lickweed.json",
            "label": "Lickweed"
          },
          {
            "path": "packs/data/kingmaker-bestiary.db/lintwerth.json",
            "label": "Lintwerth"
          },
          {
            "path": "packs/data/kingmaker-bestiary.db/lizardfolk-warrior.json",
            "label": "Lizardfolk Warrior"
          },
          {
            "path": "packs/data/kingmaker-bestiary.db/logger.json",
            "label": "Logger"
          },
          {
            "path": "packs/data/kingmaker-bestiary.db/malgorzata-niska.json",
            "label": "Malgorzata Niska"
          },
          {
            "path": "packs/data/kingmaker-bestiary.db/mandragora-swarm.json",
            "label": "Mandragora Swarm"
          },
          {
            "path": "packs/data/kingmaker-bestiary.db/mastiff-of-tindalos.json",
            "label": "Mastiff Of Tindalos"
          },
          {
            "path": "packs/data/kingmaker-bestiary.db/melianse.json",
            "label": "Melianse"
          },
          {
            "path": "packs/data/kingmaker-bestiary.db/minognos-ushad.json",
            "label": "Minognos-Ushad"
          },
          {
            "path": "packs/data/kingmaker-bestiary.db/murder-of-crows.json",
            "label": "Murder of Crows"
          },
          {
            "path": "packs/data/kingmaker-bestiary.db/ngara.json",
            "label": "Ngara"
          },
          {
            "path": "packs/data/kingmaker-bestiary.db/nightmare-rook.json",
            "label": "Nightmare Rook"
          },
          {
            "path": "packs/data/kingmaker-bestiary.db/nilak.json",
            "label": "Nilak"
          },
          {
            "path": "packs/data/kingmaker-bestiary.db/niodrhast.json",
            "label": "Niodrhast"
          },
          {
            "path": "packs/data/kingmaker-bestiary.db/nishkiv-the-knife.json",
            "label": "Nishkiv the Knife"
          },
          {
            "path": "packs/data/kingmaker-bestiary.db/ntavi.json",
            "label": "Ntavi"
          },
          {
            "path": "packs/data/kingmaker-bestiary.db/nugrah.json",
            "label": "Nugrah"
          },
          {
            "path": "packs/data/kingmaker-bestiary.db/nyrissa.json",
            "label": "Nyrissa"
          },
          {
            "path": "packs/data/kingmaker-bestiary.db/old-crackjaw.json",
            "label": "Old Crackjaw"
          },
          {
            "path": "packs/data/kingmaker-bestiary.db/oleg.json",
            "label": "Oleg"
          },
          {
            "path": "packs/data/kingmaker-bestiary.db/overgrown-viper-vine.json",
            "label": "Overgrown Viper Vine"
          },
          {
            "path": "packs/data/kingmaker-bestiary.db/oversized-chimera.json",
            "label": "Oversized Chimera"
          },
          {
            "path": "packs/data/kingmaker-bestiary.db/pavetta-stroon-drelev.json",
            "label": "Pavetta Stroon-Drelev"
          },
          {
            "path": "packs/data/kingmaker-bestiary.db/phomandala.json",
            "label": "Phomandala"
          },
          {
            "path": "packs/data/kingmaker-bestiary.db/pitax-warden.json",
            "label": "Pitax Warden"
          },
          {
            "path": "packs/data/kingmaker-bestiary.db/prank-workshop-mitflit.json",
            "label": "Prank Workshop Mitflit"
          },
          {
            "path": "packs/data/kingmaker-bestiary.db/prazil.json",
            "label": "Prazil"
          },
          {
            "path": "packs/data/kingmaker-bestiary.db/primal-bandersnatch.json",
            "label": "Primal Bandersnatch"
          },
          {
            "path": "packs/data/kingmaker-bestiary.db/quintessa-maray.json",
            "label": "Quintessa Maray"
          },
          {
            "path": "packs/data/kingmaker-bestiary.db/rezatha.json",
            "label": "Rezatha"
          },
          {
            "path": "packs/data/kingmaker-bestiary.db/rigg-gargadilly.json",
            "label": "Rigg Gargadilly"
          },
          {
            "path": "packs/data/kingmaker-bestiary.db/risen-fetch.json",
            "label": "Risen Fetch"
          },
          {
            "path": "packs/data/kingmaker-bestiary.db/river-elasmosaurus.json",
            "label": "River Elasmosaurus"
          },
          {
            "path": "packs/data/kingmaker-bestiary.db/satinder-morne.json",
            "label": "Satinder Morne"
          },
          {
            "path": "packs/data/kingmaker-bestiary.db/sepoko.json",
            "label": "Sepoko"
          },
          {
            "path": "packs/data/kingmaker-bestiary.db/shambler.json",
            "label": "Shambler"
          },
          {
            "path": "packs/data/kingmaker-bestiary.db/sir-fredero-sinnet.json",
            "label": "Sir Fredero Sinnet"
          },
          {
            "path": "packs/data/kingmaker-bestiary.db/sister-of-the-bloodshot-eye.json",
            "label": "Sister of the Bloodshot Eye"
          },
          {
            "path": "packs/data/kingmaker-bestiary.db/skeletal-tiger-lord.json",
            "label": "Skeletal Tiger Lord"
          },
          {
            "path": "packs/data/kingmaker-bestiary.db/spirit-of-stisshak.json",
            "label": "Spirit of Stisshak"
          },
          {
            "path": "packs/data/kingmaker-bestiary.db/stag-lord-bandit.json",
            "label": "Stag Lord Bandit"
          },
          {
            "path": "packs/data/kingmaker-bestiary.db/storm-struck-arboreal.json",
            "label": "Storm-Struck Arboreal"
          },
          {
            "path": "packs/data/kingmaker-bestiary.db/svetlana.json",
            "label": "Svetlana"
          },
          {
            "path": "packs/data/kingmaker-bestiary.db/talon-peak-roc.json",
            "label": "Talon Peak Roc"
          },
          {
            "path": "packs/data/kingmaker-bestiary.db/tartuccio.json",
            "label": "Tartuccio"
          },
          {
            "path": "packs/data/kingmaker-bestiary.db/terrion-numesti.json",
            "label": "Terrion Numesti"
          },
          {
            "path": "packs/data/kingmaker-bestiary.db/the-beast.json",
            "label": "The Beast"
          },
          {
            "path": "packs/data/kingmaker-bestiary.db/the-dancing-lady.json",
            "label": "The Dancing Lady"
          },
          {
            "path": "packs/data/kingmaker-bestiary.db/the-first-faithful.json",
            "label": "The First Faithful"
          },
          {
            "path": "packs/data/kingmaker-bestiary.db/the-gardener.json",
            "label": "The Gardener"
          },
          {
            "path": "packs/data/kingmaker-bestiary.db/the-horned-hunter.json",
            "label": "The Horned Hunter"
          },
          {
            "path": "packs/data/kingmaker-bestiary.db/the-knurly-witch.json",
            "label": "The Knurly Witch"
          },
          {
            "path": "packs/data/kingmaker-bestiary.db/the-lonely-warrior.json",
            "label": "The Lonely Warrior"
          },
          {
            "path": "packs/data/kingmaker-bestiary.db/the-misbegotten-troll.json",
            "label": "The Misbegotten Troll"
          },
          {
            "path": "packs/data/kingmaker-bestiary.db/the-stag-lord.json",
            "label": "The Stag Lord"
          },
          {
            "path": "packs/data/kingmaker-bestiary.db/the-wriggling-man.json",
            "label": "The Wriggling Man"
          },
          {
            "path": "packs/data/kingmaker-bestiary.db/thorn-river-bandit.json",
            "label": "Thorn River Bandit"
          },
          {
            "path": "packs/data/kingmaker-bestiary.db/thresholder-disciple.json",
            "label": "Thresholder Disciple"
          },
          {
            "path": "packs/data/kingmaker-bestiary.db/thresholder-hermeticist.json",
            "label": "Thresholder Hermeticist"
          },
          {
            "path": "packs/data/kingmaker-bestiary.db/thresholder-mystic.json",
            "label": "Thresholder Mystic"
          },
          {
            "path": "packs/data/kingmaker-bestiary.db/thylacine.json",
            "label": "Thylacine"
          },
          {
            "path": "packs/data/kingmaker-bestiary.db/tiger-lord-hill-giant-tl2.json",
            "label": "Tiger Lord Hill Giant (TL2)"
          },
          {
            "path": "packs/data/kingmaker-bestiary.db/tiger-lord.json",
            "label": "Tiger Lord"
          },
          {
            "path": "packs/data/kingmaker-bestiary.db/trapdoor-ogre-spider.json",
            "label": "Trapdoor Ogre Spider"
          },
          {
            "path": "packs/data/kingmaker-bestiary.db/tree-that-weeps.json",
            "label": "Tree that Weeps"
          },
          {
            "path": "packs/data/kingmaker-bestiary.db/troll-guard.json",
            "label": "Troll Guard"
          },
          {
            "path": "packs/data/kingmaker-bestiary.db/tulvak.json",
            "label": "Tulvak"
          },
          {
            "path": "packs/data/kingmaker-bestiary.db/vicious-army-ant-swarm.json",
            "label": "Vicious Army Ant Swarm"
          },
          {
            "path": "packs/data/kingmaker-bestiary.db/vilderavn-herald.json",
            "label": "Vilderavn Herald"
          },
          {
            "path": "packs/data/kingmaker-bestiary.db/villamor-koth.json",
            "label": "Villamor Koth"
          },
          {
            "path": "packs/data/kingmaker-bestiary.db/virthad.json",
            "label": "Virthad"
          },
          {
            "path": "packs/data/kingmaker-bestiary.db/volodmyra.json",
            "label": "Volodmyra"
          },
          {
            "path": "packs/data/kingmaker-bestiary.db/vordakai.json",
            "label": "Vordakai"
          },
          {
            "path": "packs/data/kingmaker-bestiary.db/werendegar.json",
            "label": "Werendegar"
          },
          {
            "path": "packs/data/kingmaker-bestiary.db/whimwyrm.json",
            "label": "Whimwyrm"
          },
          {
            "path": "packs/data/kingmaker-bestiary.db/wild-hunt-archer.json",
            "label": "Wild Hunt Archer"
          },
          {
            "path": "packs/data/kingmaker-bestiary.db/wild-hunt-horse.json",
            "label": "Wild Hunt Horse"
          },
          {
            "path": "packs/data/kingmaker-bestiary.db/wild-hunt-hound.json",
            "label": "Wild Hunt Hound"
          },
          {
            "path": "packs/data/kingmaker-bestiary.db/wild-hunt-monarch.json",
            "label": "Wild Hunt Monarch"
          },
          {
            "path": "packs/data/kingmaker-bestiary.db/wild-hunt-scout.json",
            "label": "Wild Hunt Scout"
          },
          {
            "path": "packs/data/kingmaker-bestiary.db/windchaser.json",
            "label": "Windchaser"
          },
          {
            "path": "packs/data/kingmaker-bestiary.db/winged-owlbear.json",
            "label": "Winged Owlbear"
          },
          {
            "path": "packs/data/kingmaker-bestiary.db/xae.json",
            "label": "Xae"
          },
          {
            "path": "packs/data/kingmaker-bestiary.db/zorek.json",
            "label": "Zorek"
          }
        ]
      },
      "malevolence-bestiary": {
        "label": "Malevolence",
        "itens": [
          {
            "path": "packs/data/malevolence-bestiary.db/algea.json",
            "label": "Algea"
          },
          {
            "path": "packs/data/malevolence-bestiary.db/anitoli-nostraema.json",
            "label": "Anitoli Nostraema"
          },
          {
            "path": "packs/data/malevolence-bestiary.db/corrupted-nosoi.json",
            "label": "Corrupted Nosoi"
          },
          {
            "path": "packs/data/malevolence-bestiary.db/esobok-ghoul.json",
            "label": "Esobok Ghoul"
          },
          {
            "path": "packs/data/malevolence-bestiary.db/haunted-nosoi.json",
            "label": "Haunted Nosoi"
          },
          {
            "path": "packs/data/malevolence-bestiary.db/ioseff-xarwin.json",
            "label": "Ioseff Xarwin"
          },
          {
            "path": "packs/data/malevolence-bestiary.db/ixirizmid.json",
            "label": "Ixirizmid"
          },
          {
            "path": "packs/data/malevolence-bestiary.db/nils-kelveken.json",
            "label": "Nils Kelveken"
          },
          {
            "path": "packs/data/malevolence-bestiary.db/tanglebones.json",
            "label": "Tanglebones"
          },
          {
            "path": "packs/data/malevolence-bestiary.db/undead-brain-collector.json",
            "label": "Undead Brain Collector"
          },
          {
            "path": "packs/data/malevolence-bestiary.db/xarwins-manifestation.json",
            "label": "Xarwin's Manifestation"
          },
          {
            "path": "packs/data/malevolence-bestiary.db/yianyin.json",
            "label": "Yianyin"
          }
        ]
      },
      "menace-under-otari-bestiary": {
        "label": "Beginner Box Bestiary",
        "itens": [
          {
            "path": "packs/data/menace-under-otari-bestiary.db/animated-armor-bb.json",
            "label": "Animated Armor (BB)"
          },
          {
            "path": "packs/data/menace-under-otari-bestiary.db/basilisk-bb.json",
            "label": "Basilisk (BB)"
          },
          {
            "path": "packs/data/menace-under-otari-bestiary.db/black-kobold-dragon-mage-bb.json",
            "label": "Black Kobold Dragon Mage (BB)"
          },
          {
            "path": "packs/data/menace-under-otari-bestiary.db/blue-kobold-dragon-mage-bb.json",
            "label": "Blue Kobold Dragon Mage (BB)"
          },
          {
            "path": "packs/data/menace-under-otari-bestiary.db/boar-bb.json",
            "label": "Boar (BB)"
          },
          {
            "path": "packs/data/menace-under-otari-bestiary.db/brine-shark-bb.json",
            "label": "Brine Shark (BB)"
          },
          {
            "path": "packs/data/menace-under-otari-bestiary.db/bugbear-marauder-bb.json",
            "label": "Bugbear Marauder (BB)"
          },
          {
            "path": "packs/data/menace-under-otari-bestiary.db/cinder-rat-bb.json",
            "label": "Cinder Rat (BB)"
          },
          {
            "path": "packs/data/menace-under-otari-bestiary.db/doppelganger-bb.json",
            "label": "Doppelganger (BB)"
          },
          {
            "path": "packs/data/menace-under-otari-bestiary.db/drow-priestess-bb.json",
            "label": "Drow Priestess (BB)"
          },
          {
            "path": "packs/data/menace-under-otari-bestiary.db/drow-sneak-bb.json",
            "label": "Drow Sneak (BB)"
          },
          {
            "path": "packs/data/menace-under-otari-bestiary.db/drow-warrior-bb.json",
            "label": "Drow Warrior (BB)"
          },
          {
            "path": "packs/data/menace-under-otari-bestiary.db/gargoyle-bb.json",
            "label": "Gargoyle (BB)"
          },
          {
            "path": "packs/data/menace-under-otari-bestiary.db/ghost-commoner-bb.json",
            "label": "Ghost Commoner (BB)"
          },
          {
            "path": "packs/data/menace-under-otari-bestiary.db/ghoul-bb.json",
            "label": "Ghoul (BB)"
          },
          {
            "path": "packs/data/menace-under-otari-bestiary.db/giant-centipede-bb.json",
            "label": "Giant Centipede (BB)"
          },
          {
            "path": "packs/data/menace-under-otari-bestiary.db/giant-rat-bb.json",
            "label": "Giant Rat (BB)"
          },
          {
            "path": "packs/data/menace-under-otari-bestiary.db/giant-spider-bb.json",
            "label": "Giant Spider (BB)"
          },
          {
            "path": "packs/data/menace-under-otari-bestiary.db/giant-viper-bb.json",
            "label": "Giant Viper (BB)"
          },
          {
            "path": "packs/data/menace-under-otari-bestiary.db/goblin-commando-bb.json",
            "label": "Goblin Commando (BB)"
          },
          {
            "path": "packs/data/menace-under-otari-bestiary.db/goblin-igniter-bb.json",
            "label": "Goblin Igniter (BB)"
          },
          {
            "path": "packs/data/menace-under-otari-bestiary.db/goblin-warrior-bb.json",
            "label": "Goblin Warrior (BB)"
          },
          {
            "path": "packs/data/menace-under-otari-bestiary.db/green-dragon-wyrmling-bb.json",
            "label": "Green Dragon Wyrmling (BB)"
          },
          {
            "path": "packs/data/menace-under-otari-bestiary.db/green-kobold-dragon-mage-bb.json",
            "label": "Green Kobold Dragon Mage (BB)"
          },
          {
            "path": "packs/data/menace-under-otari-bestiary.db/harpy-bb.json",
            "label": "Harpy (BB)"
          },
          {
            "path": "packs/data/menace-under-otari-bestiary.db/hell-hound-bb.json",
            "label": "Hell Hound (BB)"
          },
          {
            "path": "packs/data/menace-under-otari-bestiary.db/hobgoblin-warrior-bb.json",
            "label": "Hobgoblin Warrior (BB)"
          },
          {
            "path": "packs/data/menace-under-otari-bestiary.db/kobold-boss-zolgran-bb.json",
            "label": "Kobold Boss Zolgran (BB)"
          },
          {
            "path": "packs/data/menace-under-otari-bestiary.db/kobold-scout-bb.json",
            "label": "Kobold Scout (BB)"
          },
          {
            "path": "packs/data/menace-under-otari-bestiary.db/kobold-trapmaster-bb.json",
            "label": "Kobold Trapmaster (BB)"
          },
          {
            "path": "packs/data/menace-under-otari-bestiary.db/kobold-warrior-bb.json",
            "label": "Kobold Warrior (BB)"
          },
          {
            "path": "packs/data/menace-under-otari-bestiary.db/leopard-bb.json",
            "label": "Leopard (BB)"
          },
          {
            "path": "packs/data/menace-under-otari-bestiary.db/mimic-bb.json",
            "label": "Mimic (BB)"
          },
          {
            "path": "packs/data/menace-under-otari-bestiary.db/ogre-warrior-bb.json",
            "label": "Ogre Warrior (BB)"
          },
          {
            "path": "packs/data/menace-under-otari-bestiary.db/orc-commander-bb.json",
            "label": "Orc Commander (BB)"
          },
          {
            "path": "packs/data/menace-under-otari-bestiary.db/orc-scrapper-bb.json",
            "label": "Orc Scrapper (BB)"
          },
          {
            "path": "packs/data/menace-under-otari-bestiary.db/orc-trooper-bb.json",
            "label": "Orc Trooper (BB)"
          },
          {
            "path": "packs/data/menace-under-otari-bestiary.db/owlbear-bb.json",
            "label": "Owlbear (BB)"
          },
          {
            "path": "packs/data/menace-under-otari-bestiary.db/pugwampi-bb.json",
            "label": "Pugwampi (BB)"
          },
          {
            "path": "packs/data/menace-under-otari-bestiary.db/red-kobold-dragon-mage-bb.json",
            "label": "Red Kobold Dragon Mage (BB)"
          },
          {
            "path": "packs/data/menace-under-otari-bestiary.db/sewer-ooze-bb.json",
            "label": "Sewer Ooze (BB)"
          },
          {
            "path": "packs/data/menace-under-otari-bestiary.db/shadow-bb.json",
            "label": "Shadow (BB)"
          },
          {
            "path": "packs/data/menace-under-otari-bestiary.db/skeletal-giant-bb.json",
            "label": "Skeletal Giant (BB)"
          },
          {
            "path": "packs/data/menace-under-otari-bestiary.db/skeleton-guard-bb.json",
            "label": "Skeleton Guard (BB)"
          },
          {
            "path": "packs/data/menace-under-otari-bestiary.db/sod-hound-bb.json",
            "label": "Sod Hound (BB)"
          },
          {
            "path": "packs/data/menace-under-otari-bestiary.db/troll-bb.json",
            "label": "Troll (BB)"
          },
          {
            "path": "packs/data/menace-under-otari-bestiary.db/viper-bb.json",
            "label": "Viper (BB)"
          },
          {
            "path": "packs/data/menace-under-otari-bestiary.db/web-lurker-bb.json",
            "label": "Web Lurker (BB)"
          },
          {
            "path": "packs/data/menace-under-otari-bestiary.db/white-kobold-dragon-mage-bb.json",
            "label": "White Kobold Dragon Mage (BB)"
          },
          {
            "path": "packs/data/menace-under-otari-bestiary.db/wight-bb.json",
            "label": "Wight (BB)"
          },
          {
            "path": "packs/data/menace-under-otari-bestiary.db/wolf-bb.json",
            "label": "Wolf (BB)"
          },
          {
            "path": "packs/data/menace-under-otari-bestiary.db/xulgath-boss-bb.json",
            "label": "Xulgath Boss (BB)"
          },
          {
            "path": "packs/data/menace-under-otari-bestiary.db/xulgath-warrior-bb.json",
            "label": "Xulgath Warrior (BB)"
          },
          {
            "path": "packs/data/menace-under-otari-bestiary.db/zephyr-hawk-bb.json",
            "label": "Zephyr Hawk (BB)"
          },
          {
            "path": "packs/data/menace-under-otari-bestiary.db/zombie-shambler-bb.json",
            "label": "Zombie Shambler (BB)"
          }
        ]
      },
      "monsters-of-myth-bestiary": {
        "label": "Lost Omens: Monsters of Myth",
        "itens": [
          {
            "path": "packs/data/monsters-of-myth-bestiary.db/ainamuuren.json",
            "label": "Ainamuuren"
          },
          {
            "path": "packs/data/monsters-of-myth-bestiary.db/cuetzmonquali.json",
            "label": "Cuetzmonquali"
          },
          {
            "path": "packs/data/monsters-of-myth-bestiary.db/deserts-howl.json",
            "label": "Desert's Howl"
          },
          {
            "path": "packs/data/monsters-of-myth-bestiary.db/fafnheir.json",
            "label": "Fafnheir"
          },
          {
            "path": "packs/data/monsters-of-myth-bestiary.db/grisantian-lion.json",
            "label": "Grisantian Lion"
          },
          {
            "path": "packs/data/monsters-of-myth-bestiary.db/grogrisant.json",
            "label": "Grogrisant"
          },
          {
            "path": "packs/data/monsters-of-myth-bestiary.db/howling-spawn.json",
            "label": "Howling Spawn"
          },
          {
            "path": "packs/data/monsters-of-myth-bestiary.db/imperfect-automaton.json",
            "label": "Imperfect Automaton"
          },
          {
            "path": "packs/data/monsters-of-myth-bestiary.db/kallas-devil.json",
            "label": "Kallas Devil"
          },
          {
            "path": "packs/data/monsters-of-myth-bestiary.db/kothogaz-dance-of-disharmony.json",
            "label": "Kothogaz, Dance Of Disharmony"
          },
          {
            "path": "packs/data/monsters-of-myth-bestiary.db/krampus-celebrant.json",
            "label": "Krampus Celebrant"
          },
          {
            "path": "packs/data/monsters-of-myth-bestiary.db/krampus-the-horned-miser.json",
            "label": "Krampus (The Horned Miser)"
          },
          {
            "path": "packs/data/monsters-of-myth-bestiary.db/kuworsys.json",
            "label": "Kuworsys"
          },
          {
            "path": "packs/data/monsters-of-myth-bestiary.db/melfesh-monster.json",
            "label": "Melfesh Monster"
          },
          {
            "path": "packs/data/monsters-of-myth-bestiary.db/mosquito-witch-the-hemoprophet.json",
            "label": "Mosquito Witch (The Hemoprophet)"
          },
          {
            "path": "packs/data/monsters-of-myth-bestiary.db/mosquito-witch-the-legion-leech.json",
            "label": "Mosquito Witch (The Legion Leech)"
          },
          {
            "path": "packs/data/monsters-of-myth-bestiary.db/mosquito-witch-the-swarm-seer.json",
            "label": "Mosquito Witch (The Swarm Seer)"
          },
          {
            "path": "packs/data/monsters-of-myth-bestiary.db/mosquito-witch.json",
            "label": "Mosquito Witch"
          },
          {
            "path": "packs/data/monsters-of-myth-bestiary.db/somnalu-oculus.json",
            "label": "Somnalu Oculus"
          },
          {
            "path": "packs/data/monsters-of-myth-bestiary.db/somnalu.json",
            "label": "Somnalu"
          },
          {
            "path": "packs/data/monsters-of-myth-bestiary.db/spawn-of-kothogaz.json",
            "label": "Spawn Of Kothogaz"
          },
          {
            "path": "packs/data/monsters-of-myth-bestiary.db/spectral-devil.json",
            "label": "Spectral Devil"
          },
          {
            "path": "packs/data/monsters-of-myth-bestiary.db/spring-heeled-jack.json",
            "label": "Spring-Heeled Jack"
          },
          {
            "path": "packs/data/monsters-of-myth-bestiary.db/taljjae-the-beast.json",
            "label": "Taljjae (The Beast)"
          },
          {
            "path": "packs/data/monsters-of-myth-bestiary.db/taljjae-the-general.json",
            "label": "Taljjae (The General)"
          },
          {
            "path": "packs/data/monsters-of-myth-bestiary.db/taljjae-the-grandmother.json",
            "label": "Taljjae (The Grandmother)"
          },
          {
            "path": "packs/data/monsters-of-myth-bestiary.db/taljjae-the-hermit.json",
            "label": "Taljjae (The Hermit)"
          },
          {
            "path": "packs/data/monsters-of-myth-bestiary.db/taljjae-the-hero.json",
            "label": "Taljjae (The Hero)"
          },
          {
            "path": "packs/data/monsters-of-myth-bestiary.db/taljjae-the-nobleman.json",
            "label": "Taljjae (The Nobleman)"
          },
          {
            "path": "packs/data/monsters-of-myth-bestiary.db/taljjae-the-wanderer.json",
            "label": "Taljjae (The Wanderer)"
          },
          {
            "path": "packs/data/monsters-of-myth-bestiary.db/taljjae.json",
            "label": "Taljjae"
          },
          {
            "path": "packs/data/monsters-of-myth-bestiary.db/tehialai-thief-of-ships.json",
            "label": "Tehialai-Thief-of-Ships"
          },
          {
            "path": "packs/data/monsters-of-myth-bestiary.db/temteki.json",
            "label": "Temteki"
          },
          {
            "path": "packs/data/monsters-of-myth-bestiary.db/ulgrem-axaan.json",
            "label": "Ulgrem-Axaan"
          },
          {
            "path": "packs/data/monsters-of-myth-bestiary.db/ulgrem-lurann.json",
            "label": "Ulgrem-Lurann"
          },
          {
            "path": "packs/data/monsters-of-myth-bestiary.db/ulistul.json",
            "label": "Ulistul"
          },
          {
            "path": "packs/data/monsters-of-myth-bestiary.db/young-linnorm.json",
            "label": "Young Linnorm"
          }
        ]
      },
      "mwangi-expanse-bestiary": {
        "label": "Lost Omens: Mwangi Expanse",
        "itens": [
          {
            "path": "packs/data/mwangi-expanse-bestiary.db/aigamuxa.json",
            "label": "Aigamuxa"
          },
          {
            "path": "packs/data/mwangi-expanse-bestiary.db/anadi-elder.json",
            "label": "Anadi Elder"
          },
          {
            "path": "packs/data/mwangi-expanse-bestiary.db/anadi-hunter.json",
            "label": "Anadi Hunter"
          },
          {
            "path": "packs/data/mwangi-expanse-bestiary.db/anadi-sage.json",
            "label": "Anadi Sage"
          },
          {
            "path": "packs/data/mwangi-expanse-bestiary.db/asanbosam.json",
            "label": "Asanbosam"
          },
          {
            "path": "packs/data/mwangi-expanse-bestiary.db/biloko-veteran.json",
            "label": "Biloko Veteran"
          },
          {
            "path": "packs/data/mwangi-expanse-bestiary.db/biloko-warrior.json",
            "label": "Biloko Warrior"
          },
          {
            "path": "packs/data/mwangi-expanse-bestiary.db/charau-ka-acolyte-of-angazhan.json",
            "label": "Charau-ka Acolyte of Angazhan"
          },
          {
            "path": "packs/data/mwangi-expanse-bestiary.db/charau-ka-butcher.json",
            "label": "Charau-ka Butcher"
          },
          {
            "path": "packs/data/mwangi-expanse-bestiary.db/charau-ka-warrior.json",
            "label": "Charau-ka Warrior"
          },
          {
            "path": "packs/data/mwangi-expanse-bestiary.db/eloko.json",
            "label": "Eloko"
          },
          {
            "path": "packs/data/mwangi-expanse-bestiary.db/grootslang.json",
            "label": "Grootslang"
          },
          {
            "path": "packs/data/mwangi-expanse-bestiary.db/kaava-stalker.json",
            "label": "Kaava Stalker"
          },
          {
            "path": "packs/data/mwangi-expanse-bestiary.db/karina.json",
            "label": "Karina"
          },
          {
            "path": "packs/data/mwangi-expanse-bestiary.db/knonna.json",
            "label": "K'nonna"
          },
          {
            "path": "packs/data/mwangi-expanse-bestiary.db/maliadi.json",
            "label": "Maliadi"
          },
          {
            "path": "packs/data/mwangi-expanse-bestiary.db/mamlambo.json",
            "label": "Mamlambo"
          },
          {
            "path": "packs/data/mwangi-expanse-bestiary.db/pygmy-kaava.json",
            "label": "Pygmy Kaava"
          },
          {
            "path": "packs/data/mwangi-expanse-bestiary.db/rompo.json",
            "label": "Rompo"
          },
          {
            "path": "packs/data/mwangi-expanse-bestiary.db/sié-goluo.json",
            "label": "Sié Goluo"
          },
          {
            "path": "packs/data/mwangi-expanse-bestiary.db/solar-ibis.json",
            "label": "Solar Ibis"
          },
          {
            "path": "packs/data/mwangi-expanse-bestiary.db/zinba.json",
            "label": "Zinba"
          }
        ]
      },
      "night-of-the-gray-death-bestiary": {
        "label": "Night of the Gray Death",
        "itens": [
          {
            "path": "packs/data/night-of-the-gray-death-bestiary.db/chakanaj.json",
            "label": "Chakanaj"
          },
          {
            "path": "packs/data/night-of-the-gray-death-bestiary.db/conqueror-worm.json",
            "label": "Conqueror Worm"
          },
          {
            "path": "packs/data/night-of-the-gray-death-bestiary.db/gray-death.json",
            "label": "Gray Death"
          },
          {
            "path": "packs/data/night-of-the-gray-death-bestiary.db/gray-gardener-assassin.json",
            "label": "Gray Gardener Assassin"
          },
          {
            "path": "packs/data/night-of-the-gray-death-bestiary.db/gray-gardener-director-general.json",
            "label": "Gray Gardener Director General"
          },
          {
            "path": "packs/data/night-of-the-gray-death-bestiary.db/gray-gardener-enforcer.json",
            "label": "Gray Gardener Enforcer"
          },
          {
            "path": "packs/data/night-of-the-gray-death-bestiary.db/guillotine-golem.json",
            "label": "Guillotine Golem"
          },
          {
            "path": "packs/data/night-of-the-gray-death-bestiary.db/keznin-nevarmo.json",
            "label": "Keznin Nevarmo"
          },
          {
            "path": "packs/data/night-of-the-gray-death-bestiary.db/mateena-lumlin.json",
            "label": "Mateena Lumlin"
          },
          {
            "path": "packs/data/night-of-the-gray-death-bestiary.db/miss-whisper.json",
            "label": "Miss Whisper"
          },
          {
            "path": "packs/data/night-of-the-gray-death-bestiary.db/pageant-troupe.json",
            "label": "Pageant Troupe"
          },
          {
            "path": "packs/data/night-of-the-gray-death-bestiary.db/riekanoy.json",
            "label": "Riekanoy"
          },
          {
            "path": "packs/data/night-of-the-gray-death-bestiary.db/tumblak.json",
            "label": "Tumblak"
          },
          {
            "path": "packs/data/night-of-the-gray-death-bestiary.db/worm-prophet.json",
            "label": "Worm Prophet"
          },
          {
            "path": "packs/data/night-of-the-gray-death-bestiary.db/zintaya-calbieste.json",
            "label": "Zintaya Calbieste"
          }
        ]
      },
      "npc-gallery": {
        "label": "NPC Gallery",
        "itens": [
          {
            "path": "packs/data/npc-gallery.db/acolyte-of-nethys.json",
            "label": "Acolyte of Nethys"
          },
          {
            "path": "packs/data/npc-gallery.db/acrobat.json",
            "label": "Acrobat"
          },
          {
            "path": "packs/data/npc-gallery.db/adept.json",
            "label": "Adept"
          },
          {
            "path": "packs/data/npc-gallery.db/advisor.json",
            "label": "Advisor"
          },
          {
            "path": "packs/data/npc-gallery.db/antipaladin.json",
            "label": "Antipaladin"
          },
          {
            "path": "packs/data/npc-gallery.db/apothecary.json",
            "label": "Apothecary"
          },
          {
            "path": "packs/data/npc-gallery.db/apprentice.json",
            "label": "Apprentice"
          },
          {
            "path": "packs/data/npc-gallery.db/archer-sentry.json",
            "label": "Archer Sentry"
          },
          {
            "path": "packs/data/npc-gallery.db/assassin.json",
            "label": "Assassin"
          },
          {
            "path": "packs/data/npc-gallery.db/astronomer.json",
            "label": "Astronomer"
          },
          {
            "path": "packs/data/npc-gallery.db/azarketi-crab-catcher.json",
            "label": "Azarketi Crab Catcher"
          },
          {
            "path": "packs/data/npc-gallery.db/azarketi-sailor.json",
            "label": "Azarketi Sailor"
          },
          {
            "path": "packs/data/npc-gallery.db/azarketi-tide-tamer.json",
            "label": "Azarketi Tide Tamer"
          },
          {
            "path": "packs/data/npc-gallery.db/bandit.json",
            "label": "Bandit"
          },
          {
            "path": "packs/data/npc-gallery.db/barkeep.json",
            "label": "Barkeep"
          },
          {
            "path": "packs/data/npc-gallery.db/barrister.json",
            "label": "Barrister"
          },
          {
            "path": "packs/data/npc-gallery.db/beast-tamer.json",
            "label": "Beast Tamer"
          },
          {
            "path": "packs/data/npc-gallery.db/beggar.json",
            "label": "Beggar"
          },
          {
            "path": "packs/data/npc-gallery.db/bodyguard.json",
            "label": "Bodyguard"
          },
          {
            "path": "packs/data/npc-gallery.db/bosun.json",
            "label": "Bosun"
          },
          {
            "path": "packs/data/npc-gallery.db/bounty-hunter.json",
            "label": "Bounty Hunter"
          },
          {
            "path": "packs/data/npc-gallery.db/burglar.json",
            "label": "Burglar"
          },
          {
            "path": "packs/data/npc-gallery.db/captain-of-the-guard.json",
            "label": "Captain Of The Guard"
          },
          {
            "path": "packs/data/npc-gallery.db/changeling-hellknight.json",
            "label": "Changeling Hellknight"
          },
          {
            "path": "packs/data/npc-gallery.db/charlatan.json",
            "label": "Charlatan"
          },
          {
            "path": "packs/data/npc-gallery.db/charming-scoundrel.json",
            "label": "Charming Scoundrel"
          },
          {
            "path": "packs/data/npc-gallery.db/chronicler.json",
            "label": "Chronicler"
          },
          {
            "path": "packs/data/npc-gallery.db/commoner.json",
            "label": "Commoner"
          },
          {
            "path": "packs/data/npc-gallery.db/cult-leader.json",
            "label": "Cult Leader"
          },
          {
            "path": "packs/data/npc-gallery.db/cultist.json",
            "label": "Cultist"
          },
          {
            "path": "packs/data/npc-gallery.db/dancer.json",
            "label": "Dancer"
          },
          {
            "path": "packs/data/npc-gallery.db/demonologist.json",
            "label": "Demonologist"
          },
          {
            "path": "packs/data/npc-gallery.db/despot.json",
            "label": "Despot"
          },
          {
            "path": "packs/data/npc-gallery.db/dockhand.json",
            "label": "Dockhand"
          },
          {
            "path": "packs/data/npc-gallery.db/drunkard.json",
            "label": "Drunkard"
          },
          {
            "path": "packs/data/npc-gallery.db/ethereal-sailor.json",
            "label": "Ethereal Sailor"
          },
          {
            "path": "packs/data/npc-gallery.db/executioner.json",
            "label": "Executioner"
          },
          {
            "path": "packs/data/npc-gallery.db/false-priest.json",
            "label": "False Priest"
          },
          {
            "path": "packs/data/npc-gallery.db/farmer.json",
            "label": "Farmer"
          },
          {
            "path": "packs/data/npc-gallery.db/fence.json",
            "label": "Fence"
          },
          {
            "path": "packs/data/npc-gallery.db/gang-leader.json",
            "label": "Gang Leader"
          },
          {
            "path": "packs/data/npc-gallery.db/grave-robber.json",
            "label": "Grave Robber"
          },
          {
            "path": "packs/data/npc-gallery.db/gravedigger.json",
            "label": "Gravedigger"
          },
          {
            "path": "packs/data/npc-gallery.db/guard.json",
            "label": "Guard"
          },
          {
            "path": "packs/data/npc-gallery.db/guide.json",
            "label": "Guide"
          },
          {
            "path": "packs/data/npc-gallery.db/guildmaster.json",
            "label": "Guildmaster"
          },
          {
            "path": "packs/data/npc-gallery.db/harbormaster.json",
            "label": "Harbormaster"
          },
          {
            "path": "packs/data/npc-gallery.db/harrow-reader.json",
            "label": "Harrow Reader"
          },
          {
            "path": "packs/data/npc-gallery.db/hellknight-armiger.json",
            "label": "Hellknight Armiger"
          },
          {
            "path": "packs/data/npc-gallery.db/hellknight-paravicar.json",
            "label": "Hellknight Paravicar"
          },
          {
            "path": "packs/data/npc-gallery.db/hunter.json",
            "label": "Hunter"
          },
          {
            "path": "packs/data/npc-gallery.db/innkeeper.json",
            "label": "Innkeeper"
          },
          {
            "path": "packs/data/npc-gallery.db/jailer.json",
            "label": "Jailer"
          },
          {
            "path": "packs/data/npc-gallery.db/judge.json",
            "label": "Judge"
          },
          {
            "path": "packs/data/npc-gallery.db/librarian.json",
            "label": "Librarian"
          },
          {
            "path": "packs/data/npc-gallery.db/mage-for-hire.json",
            "label": "Mage For Hire"
          },
          {
            "path": "packs/data/npc-gallery.db/mastermind.json",
            "label": "Mastermind"
          },
          {
            "path": "packs/data/npc-gallery.db/merchant.json",
            "label": "Merchant"
          },
          {
            "path": "packs/data/npc-gallery.db/miner.json",
            "label": "Miner"
          },
          {
            "path": "packs/data/npc-gallery.db/monster-hunter.json",
            "label": "Monster Hunter"
          },
          {
            "path": "packs/data/npc-gallery.db/navigator.json",
            "label": "Navigator"
          },
          {
            "path": "packs/data/npc-gallery.db/necromancer.json",
            "label": "Necromancer"
          },
          {
            "path": "packs/data/npc-gallery.db/noble.json",
            "label": "Noble"
          },
          {
            "path": "packs/data/npc-gallery.db/palace-guard.json",
            "label": "Palace Guard"
          },
          {
            "path": "packs/data/npc-gallery.db/pathfinder-field-agent.json",
            "label": "Pathfinder Field Agent"
          },
          {
            "path": "packs/data/npc-gallery.db/pathfinder-venture-captain.json",
            "label": "Pathfinder Venture-Captain"
          },
          {
            "path": "packs/data/npc-gallery.db/physician.json",
            "label": "Physician"
          },
          {
            "path": "packs/data/npc-gallery.db/pirate.json",
            "label": "Pirate"
          },
          {
            "path": "packs/data/npc-gallery.db/plague-doctor.json",
            "label": "Plague Doctor"
          },
          {
            "path": "packs/data/npc-gallery.db/poacher.json",
            "label": "Poacher"
          },
          {
            "path": "packs/data/npc-gallery.db/priest-of-pharasma.json",
            "label": "Priest of Pharasma"
          },
          {
            "path": "packs/data/npc-gallery.db/prisoner.json",
            "label": "Prisoner"
          },
          {
            "path": "packs/data/npc-gallery.db/privateer-captain.json",
            "label": "Privateer Captain"
          },
          {
            "path": "packs/data/npc-gallery.db/prophet.json",
            "label": "Prophet"
          },
          {
            "path": "packs/data/npc-gallery.db/rain-scribe.json",
            "label": "Rain-Scribe"
          },
          {
            "path": "packs/data/npc-gallery.db/reckless-scientist.json",
            "label": "Reckless Scientist"
          },
          {
            "path": "packs/data/npc-gallery.db/ruffian.json",
            "label": "Ruffian"
          },
          {
            "path": "packs/data/npc-gallery.db/saboteur.json",
            "label": "Saboteur"
          },
          {
            "path": "packs/data/npc-gallery.db/sage.json",
            "label": "Sage"
          },
          {
            "path": "packs/data/npc-gallery.db/servant.json",
            "label": "Servant"
          },
          {
            "path": "packs/data/npc-gallery.db/server.json",
            "label": "Server"
          },
          {
            "path": "packs/data/npc-gallery.db/ship-captain.json",
            "label": "Ship Captain"
          },
          {
            "path": "packs/data/npc-gallery.db/smith.json",
            "label": "Smith"
          },
          {
            "path": "packs/data/npc-gallery.db/spy.json",
            "label": "Spy"
          },
          {
            "path": "packs/data/npc-gallery.db/stone-giant-monk.json",
            "label": "Stone Giant Monk"
          },
          {
            "path": "packs/data/npc-gallery.db/surgeon.json",
            "label": "Surgeon"
          },
          {
            "path": "packs/data/npc-gallery.db/tax-collector.json",
            "label": "Tax Collector"
          },
          {
            "path": "packs/data/npc-gallery.db/teacher.json",
            "label": "Teacher"
          },
          {
            "path": "packs/data/npc-gallery.db/tempest-sun-mage.json",
            "label": "Tempest-Sun Mage"
          },
          {
            "path": "packs/data/npc-gallery.db/tomb-raider.json",
            "label": "Tomb Raider"
          },
          {
            "path": "packs/data/npc-gallery.db/torchbearer.json",
            "label": "Torchbearer"
          },
          {
            "path": "packs/data/npc-gallery.db/tracker.json",
            "label": "Tracker"
          },
          {
            "path": "packs/data/npc-gallery.db/troubadour.json",
            "label": "Troubadour"
          },
          {
            "path": "packs/data/npc-gallery.db/urchin.json",
            "label": "Urchin"
          },
          {
            "path": "packs/data/npc-gallery.db/veteran-reclaimer.json",
            "label": "Veteran Reclaimer"
          },
          {
            "path": "packs/data/npc-gallery.db/virtuous-defender.json",
            "label": "Virtuous Defender"
          },
          {
            "path": "packs/data/npc-gallery.db/warden.json",
            "label": "Warden"
          },
          {
            "path": "packs/data/npc-gallery.db/watch-officer.json",
            "label": "Watch Officer"
          },
          {
            "path": "packs/data/npc-gallery.db/zealot-of-asmodeus.json",
            "label": "Zealot of Asmodeus"
          }
        ]
      },
      "one-shot-bestiary": {
        "label": "One Shot Unique Bestiary",
        "itens": [
          {
            "path": "packs/data/one-shot-bestiary.db/auldegrund-grimcarver.json",
            "label": "Auldegrund Grimcarver"
          },
          {
            "path": "packs/data/one-shot-bestiary.db/cultist-of-alocer.json",
            "label": "Cultist of Alocer"
          },
          {
            "path": "packs/data/one-shot-bestiary.db/darius.json",
            "label": "Darius"
          },
          {
            "path": "packs/data/one-shot-bestiary.db/doatara-the-poisoner.json",
            "label": "Doatara the Poisoner"
          },
          {
            "path": "packs/data/one-shot-bestiary.db/doatara-the-priest.json",
            "label": "Doatara the Priest"
          },
          {
            "path": "packs/data/one-shot-bestiary.db/giant-pirate-skeleton.json",
            "label": "Giant Pirate Skeleton"
          },
          {
            "path": "packs/data/one-shot-bestiary.db/kelorbeyan-guard.json",
            "label": "Kelorbeyan Guard"
          },
          {
            "path": "packs/data/one-shot-bestiary.db/lawn-crawfish.json",
            "label": "Lawn Crawfish"
          },
          {
            "path": "packs/data/one-shot-bestiary.db/meliosas-leshy-golden-bamboo.json",
            "label": "Meliosa's Leshy (Golden Bamboo)"
          },
          {
            "path": "packs/data/one-shot-bestiary.db/meliosas-leshy-minkaian-honeysuckle-leshy.json",
            "label": "Meliosa's Leshy (Minkaian Honeysuckle Leshy)"
          },
          {
            "path": "packs/data/one-shot-bestiary.db/meliosas-leshy-mint-leshy.json",
            "label": "Meliosa's Leshy (Mint Leshy)"
          },
          {
            "path": "packs/data/one-shot-bestiary.db/meliosas-leshy-wisteria-leshy.json",
            "label": "Meliosa's Leshy (Wisteria Leshy)"
          },
          {
            "path": "packs/data/one-shot-bestiary.db/meliosas-leshy.json",
            "label": "Meliosa's Leshy"
          },
          {
            "path": "packs/data/one-shot-bestiary.db/pairaka-one-shot-4.json",
            "label": "Pairaka (One-Shot #4)"
          },
          {
            "path": "packs/data/one-shot-bestiary.db/princess-sunset.json",
            "label": "Princess Sunset"
          },
          {
            "path": "packs/data/one-shot-bestiary.db/scented-candle-homunculus.json",
            "label": "Scented Candle Homunculus"
          },
          {
            "path": "packs/data/one-shot-bestiary.db/simulacrum.json",
            "label": "Simulacrum"
          },
          {
            "path": "packs/data/one-shot-bestiary.db/taxidermic-dog.json",
            "label": "Taxidermic Dog"
          }
        ]
      },
      "outlaws-of-alkenstar-bestiary": {
        "label": "Outlaws of Alkenstar",
        "itens": [
          {
            "path": "packs/data/outlaws-of-alkenstar-bestiary.db/akrida.json",
            "label": "Akrida"
          },
          {
            "path": "packs/data/outlaws-of-alkenstar-bestiary.db/alethsia.json",
            "label": "Alethsia"
          },
          {
            "path": "packs/data/outlaws-of-alkenstar-bestiary.db/ambrost-mugland.json",
            "label": "Ambrost Mugland"
          },
          {
            "path": "packs/data/outlaws-of-alkenstar-bestiary.db/anjelique-loveless.json",
            "label": "Anjelique Loveless"
          },
          {
            "path": "packs/data/outlaws-of-alkenstar-bestiary.db/atticus.json",
            "label": "Atticus"
          },
          {
            "path": "packs/data/outlaws-of-alkenstar-bestiary.db/brighite-herexen.json",
            "label": "Brighite Herexen"
          },
          {
            "path": "packs/data/outlaws-of-alkenstar-bestiary.db/bristlebane.json",
            "label": "Bristlebane"
          },
          {
            "path": "packs/data/outlaws-of-alkenstar-bestiary.db/broken-centurion.json",
            "label": "Broken Centurion"
          },
          {
            "path": "packs/data/outlaws-of-alkenstar-bestiary.db/captured-dezullon.json",
            "label": "Captured Dezullon"
          },
          {
            "path": "packs/data/outlaws-of-alkenstar-bestiary.db/chemical-zombie.json",
            "label": "Chemical Zombie"
          },
          {
            "path": "packs/data/outlaws-of-alkenstar-bestiary.db/chimeric-manticore.json",
            "label": "Chimeric Manticore"
          },
          {
            "path": "packs/data/outlaws-of-alkenstar-bestiary.db/clearwater-cleaner.json",
            "label": "Clearwater Cleaner"
          },
          {
            "path": "packs/data/outlaws-of-alkenstar-bestiary.db/clockwork-brewer.json",
            "label": "Clockwork Brewer"
          },
          {
            "path": "packs/data/outlaws-of-alkenstar-bestiary.db/clockwork-buccaneer.json",
            "label": "Clockwork Buccaneer"
          },
          {
            "path": "packs/data/outlaws-of-alkenstar-bestiary.db/clockwork-disposer.json",
            "label": "Clockwork Disposer"
          },
          {
            "path": "packs/data/outlaws-of-alkenstar-bestiary.db/clockwork-door-warden.json",
            "label": "Clockwork Door Warden"
          },
          {
            "path": "packs/data/outlaws-of-alkenstar-bestiary.db/clockwork-fabricator.json",
            "label": "Clockwork Fabricator"
          },
          {
            "path": "packs/data/outlaws-of-alkenstar-bestiary.db/clockwork-gunner.json",
            "label": "Clockwork Gunner"
          },
          {
            "path": "packs/data/outlaws-of-alkenstar-bestiary.db/clockwork-handler.json",
            "label": "Clockwork Handler"
          },
          {
            "path": "packs/data/outlaws-of-alkenstar-bestiary.db/clockwork-hunter.json",
            "label": "Clockwork Hunter"
          },
          {
            "path": "packs/data/outlaws-of-alkenstar-bestiary.db/clockwork-puppeteer.json",
            "label": "Clockwork Puppeteer"
          },
          {
            "path": "packs/data/outlaws-of-alkenstar-bestiary.db/clockwork-shambler-horde.json",
            "label": "Clockwork Shambler Horde"
          },
          {
            "path": "packs/data/outlaws-of-alkenstar-bestiary.db/clockwork-shambler.json",
            "label": "Clockwork Shambler"
          },
          {
            "path": "packs/data/outlaws-of-alkenstar-bestiary.db/clockwork-sphinx.json",
            "label": "Clockwork Sphinx"
          },
          {
            "path": "packs/data/outlaws-of-alkenstar-bestiary.db/compromised-door-warden.json",
            "label": "Compromised Door Warden"
          },
          {
            "path": "packs/data/outlaws-of-alkenstar-bestiary.db/corrupt-shieldmarshal-clan-pistol.json",
            "label": "Corrupt Shieldmarshal (Clan Pistol)"
          },
          {
            "path": "packs/data/outlaws-of-alkenstar-bestiary.db/corrupt-shieldmarshal-jezail.json",
            "label": "Corrupt Shieldmarshal (Jezail)"
          },
          {
            "path": "packs/data/outlaws-of-alkenstar-bestiary.db/cranium-preserver.json",
            "label": "Cranium Preserver"
          },
          {
            "path": "packs/data/outlaws-of-alkenstar-bestiary.db/daelum.json",
            "label": "Daelum"
          },
          {
            "path": "packs/data/outlaws-of-alkenstar-bestiary.db/dewey-daystar.json",
            "label": "Dewey Daystar"
          },
          {
            "path": "packs/data/outlaws-of-alkenstar-bestiary.db/disgorged-zombie.json",
            "label": "Disgorged Zombie"
          },
          {
            "path": "packs/data/outlaws-of-alkenstar-bestiary.db/drela.json",
            "label": "Drela"
          },
          {
            "path": "packs/data/outlaws-of-alkenstar-bestiary.db/follower-of-shumfallow.json",
            "label": "Follower of Shumfallow"
          },
          {
            "path": "packs/data/outlaws-of-alkenstar-bestiary.db/gilded-gunner-assassin.json",
            "label": "Gilded Gunner Assassin"
          },
          {
            "path": "packs/data/outlaws-of-alkenstar-bestiary.db/gilded-gunner-goon.json",
            "label": "Gilded Gunner Goon"
          },
          {
            "path": "packs/data/outlaws-of-alkenstar-bestiary.db/gilded-gunner-safecracker.json",
            "label": "Gilded Gunner Safecracker"
          },
          {
            "path": "packs/data/outlaws-of-alkenstar-bestiary.db/glass-buccaneer.json",
            "label": "Glass Buccaneer"
          },
          {
            "path": "packs/data/outlaws-of-alkenstar-bestiary.db/glass-elephant.json",
            "label": "Glass Elephant"
          },
          {
            "path": "packs/data/outlaws-of-alkenstar-bestiary.db/glass-sentry.json",
            "label": "Glass Sentry"
          },
          {
            "path": "packs/data/outlaws-of-alkenstar-bestiary.db/glaz-nixbrix.json",
            "label": "Glaz Nixbrix"
          },
          {
            "path": "packs/data/outlaws-of-alkenstar-bestiary.db/gold-tank-broker.json",
            "label": "Gold Tank Broker"
          },
          {
            "path": "packs/data/outlaws-of-alkenstar-bestiary.db/gold-tank-investor.json",
            "label": "Gold Tank Investor"
          },
          {
            "path": "packs/data/outlaws-of-alkenstar-bestiary.db/gunmarshal.json",
            "label": "Gunmarshal"
          },
          {
            "path": "packs/data/outlaws-of-alkenstar-bestiary.db/hansin.json",
            "label": "Hansin"
          },
          {
            "path": "packs/data/outlaws-of-alkenstar-bestiary.db/headless-rustler.json",
            "label": "Headless Rustler"
          },
          {
            "path": "packs/data/outlaws-of-alkenstar-bestiary.db/i.json",
            "label": "I"
          },
          {
            "path": "packs/data/outlaws-of-alkenstar-bestiary.db/ibrium.json",
            "label": "Ibrium"
          },
          {
            "path": "packs/data/outlaws-of-alkenstar-bestiary.db/ioton-f6.json",
            "label": "Ioton (F6)"
          },
          {
            "path": "packs/data/outlaws-of-alkenstar-bestiary.db/irkem-dresh.json",
            "label": "Irkem Dresh"
          },
          {
            "path": "packs/data/outlaws-of-alkenstar-bestiary.db/kreeth-ni.json",
            "label": "Kreeth-Ni"
          },
          {
            "path": "packs/data/outlaws-of-alkenstar-bestiary.db/leadsmith.json",
            "label": "Leadsmith"
          },
          {
            "path": "packs/data/outlaws-of-alkenstar-bestiary.db/lucky-lanks.json",
            "label": "\"Lucky\" Lanks"
          },
          {
            "path": "packs/data/outlaws-of-alkenstar-bestiary.db/masu.json",
            "label": "Masu"
          },
          {
            "path": "packs/data/outlaws-of-alkenstar-bestiary.db/mutant-bat.json",
            "label": "Mutant Bat"
          },
          {
            "path": "packs/data/outlaws-of-alkenstar-bestiary.db/mutant-desert-drake.json",
            "label": "Mutant Desert Drake"
          },
          {
            "path": "packs/data/outlaws-of-alkenstar-bestiary.db/mutant-giant-toad.json",
            "label": "Mutant Giant Toad"
          },
          {
            "path": "packs/data/outlaws-of-alkenstar-bestiary.db/ogre-slug.json",
            "label": "Ogre Slug"
          },
          {
            "path": "packs/data/outlaws-of-alkenstar-bestiary.db/palzu.json",
            "label": "Palzu"
          },
          {
            "path": "packs/data/outlaws-of-alkenstar-bestiary.db/parsus.json",
            "label": "Parsus"
          },
          {
            "path": "packs/data/outlaws-of-alkenstar-bestiary.db/powderkeg-punk-bombardier.json",
            "label": "Powderkeg Punk Bombardier"
          },
          {
            "path": "packs/data/outlaws-of-alkenstar-bestiary.db/powderkeg-punk-gunner.json",
            "label": "Powderkeg Punk Gunner"
          },
          {
            "path": "packs/data/outlaws-of-alkenstar-bestiary.db/prairie-drake.json",
            "label": "Prairie Drake"
          },
          {
            "path": "packs/data/outlaws-of-alkenstar-bestiary.db/pyronite-ooze.json",
            "label": "Pyronite Ooze"
          },
          {
            "path": "packs/data/outlaws-of-alkenstar-bestiary.db/roxy.json",
            "label": "Roxy"
          },
          {
            "path": "packs/data/outlaws-of-alkenstar-bestiary.db/rust-ooze.json",
            "label": "Rust Ooze"
          },
          {
            "path": "packs/data/outlaws-of-alkenstar-bestiary.db/sabora-sharkosa.json",
            "label": "Sabora Sharkosa"
          },
          {
            "path": "packs/data/outlaws-of-alkenstar-bestiary.db/scarecophagus.json",
            "label": "Scarecophagus"
          },
          {
            "path": "packs/data/outlaws-of-alkenstar-bestiary.db/shock-zombie.json",
            "label": "Shock Zombie"
          },
          {
            "path": "packs/data/outlaws-of-alkenstar-bestiary.db/shoma-lyzerius.json",
            "label": "Shoma Lyzerius"
          },
          {
            "path": "packs/data/outlaws-of-alkenstar-bestiary.db/skeletal-crocodile.json",
            "label": "Skeletal Crocodile"
          },
          {
            "path": "packs/data/outlaws-of-alkenstar-bestiary.db/slick.json",
            "label": "Slick"
          },
          {
            "path": "packs/data/outlaws-of-alkenstar-bestiary.db/sludgespine-killer.json",
            "label": "Sludgespine Killer"
          },
          {
            "path": "packs/data/outlaws-of-alkenstar-bestiary.db/smog-giant.json",
            "label": "Smog Giant"
          },
          {
            "path": "packs/data/outlaws-of-alkenstar-bestiary.db/smog-wraith.json",
            "label": "Smog Wraith"
          },
          {
            "path": "packs/data/outlaws-of-alkenstar-bestiary.db/spellscar-sky-marauder.json",
            "label": "Spellscar Sky Marauder"
          },
          {
            "path": "packs/data/outlaws-of-alkenstar-bestiary.db/steaming-kingdom-bartender.json",
            "label": "Steaming Kingdom Bartender"
          },
          {
            "path": "packs/data/outlaws-of-alkenstar-bestiary.db/swee-pup.json",
            "label": "Swee Pup"
          },
          {
            "path": "packs/data/outlaws-of-alkenstar-bestiary.db/the-claws-of-time.json",
            "label": "The Claws of Time"
          },
          {
            "path": "packs/data/outlaws-of-alkenstar-bestiary.db/trapjaw-tangle.json",
            "label": "Trapjaw Tangle"
          },
          {
            "path": "packs/data/outlaws-of-alkenstar-bestiary.db/vewslog.json",
            "label": "Vewslog"
          },
          {
            "path": "packs/data/outlaws-of-alkenstar-bestiary.db/yeast-ooze.json",
            "label": "Yeast Ooze"
          }
        ]
      },
      "pathfinder-bestiary-2": {
        "label": "Bestiary 2",
        "itens": [
          {
            "path": "packs/data/pathfinder-bestiary-2.db/aapoph-serpentfolk.json",
            "label": "Aapoph Serpentfolk"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/adult-brine-dragon-spellcaster.json",
            "label": "Adult Brine Dragon (Spellcaster)"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/adult-brine-dragon.json",
            "label": "Adult Brine Dragon"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/adult-cloud-dragon-spellcaster.json",
            "label": "Adult Cloud Dragon (Spellcaster)"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/adult-cloud-dragon.json",
            "label": "Adult Cloud Dragon"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/adult-crystal-dragon-spellcaster.json",
            "label": "Adult Crystal Dragon (Spellcaster)"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/adult-crystal-dragon.json",
            "label": "Adult Crystal Dragon"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/adult-magma-dragon-spellcaster.json",
            "label": "Adult Magma Dragon (Spellcaster)"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/adult-magma-dragon.json",
            "label": "Adult Magma Dragon"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/adult-umbral-dragon-spellcaster.json",
            "label": "Adult Umbral Dragon (Spellcaster)"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/adult-umbral-dragon.json",
            "label": "Adult Umbral Dragon"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/ahuizotl.json",
            "label": "Ahuizotl"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/akata.json",
            "label": "Akata"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/akizendri.json",
            "label": "Akizendri"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/amoeba-swarm.json",
            "label": "Amoeba Swarm"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/anancus.json",
            "label": "Anancus"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/ancient-brine-dragon-spellcaster.json",
            "label": "Ancient Brine Dragon (Spellcaster)"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/ancient-brine-dragon.json",
            "label": "Ancient Brine Dragon"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/ancient-cloud-dragon-spellcaster.json",
            "label": "Ancient Cloud Dragon (Spellcaster)"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/ancient-cloud-dragon.json",
            "label": "Ancient Cloud Dragon"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/ancient-crystal-dragon-spellcaster.json",
            "label": "Ancient Crystal Dragon (Spellcaster)"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/ancient-crystal-dragon.json",
            "label": "Ancient Crystal Dragon"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/ancient-magma-dragon-spellcaster.json",
            "label": "Ancient Magma Dragon (Spellcaster)"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/ancient-magma-dragon.json",
            "label": "Ancient Magma Dragon"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/ancient-umbral-dragon-spellcaster.json",
            "label": "Ancient Umbral Dragon (Spellcaster)"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/ancient-umbral-dragon.json",
            "label": "Ancient Umbral Dragon"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/animate-dream.json",
            "label": "Animate Dream"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/ankou.json",
            "label": "Ankou"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/aolaz.json",
            "label": "Aolaz"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/army-ant-swarm.json",
            "label": "Army Ant Swarm"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/assassin-vine.json",
            "label": "Assassin Vine"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/athach.json",
            "label": "Athach"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/attic-whisperer.json",
            "label": "Attic Whisperer"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/augnagar.json",
            "label": "Augnagar"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/augur.json",
            "label": "Augur"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/aurumvorax.json",
            "label": "Aurumvorax"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/azuretzi.json",
            "label": "Azuretzi"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/babau.json",
            "label": "Babau"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/badger.json",
            "label": "Badger"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/baobhan-sith.json",
            "label": "Baobhan Sith"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/basidirond.json",
            "label": "Basidirond"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/bastion-archon.json",
            "label": "Bastion Archon"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/bebilith.json",
            "label": "Bebilith"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/behemoth-hippopotamus.json",
            "label": "Behemoth Hippopotamus"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/behir.json",
            "label": "Behir"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/belker.json",
            "label": "Belker"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/black-bear.json",
            "label": "Black Bear"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/black-dracolisk.json",
            "label": "Black Dracolisk"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/black-scorpion.json",
            "label": "Black Scorpion"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/blindheim.json",
            "label": "Blindheim"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/blink-dog.json",
            "label": "Blink Dog"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/blizzardborn.json",
            "label": "Blizzardborn"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/blodeuwedd.json",
            "label": "Blodeuwedd"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/blue-dracolisk.json",
            "label": "Blue Dracolisk"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/blue-ringed-octopus.json",
            "label": "Blue-Ringed Octopus"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/bodak.json",
            "label": "Bodak"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/bog-mummy.json",
            "label": "Bog Mummy"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/bog-strider.json",
            "label": "Bog Strider"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/bone-prophet.json",
            "label": "Bone Prophet"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/bottlenose-dolphin.json",
            "label": "Bottlenose Dolphin"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/bralani.json",
            "label": "Bralani"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/brood-leech-swarm.json",
            "label": "Brood Leech Swarm"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/brownie.json",
            "label": "Brownie"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/bythos.json",
            "label": "Bythos"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/cairn-linnorm.json",
            "label": "Cairn Linnorm"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/cairn-wight.json",
            "label": "Cairn Wight"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/calathgar.json",
            "label": "Calathgar"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/caligni-slayer.json",
            "label": "Caligni Slayer"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/carbuncle.json",
            "label": "Carbuncle"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/carnivorous-blob.json",
            "label": "Carnivorous Blob"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/carrion-golem.json",
            "label": "Carrion Golem"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/catoblepas.json",
            "label": "Catoblepas"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/catrina.json",
            "label": "Catrina"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/cave-fisher.json",
            "label": "Cave Fisher"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/cave-scorpion.json",
            "label": "Cave Scorpion"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/cavern-troll.json",
            "label": "Cavern Troll"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/chernobue.json",
            "label": "Chernobue"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/choker.json",
            "label": "Choker"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/chupacabra.json",
            "label": "Chupacabra"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/cockroach-swarm.json",
            "label": "Cockroach Swarm"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/coil-spy.json",
            "label": "Coil Spy"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/compsognathus.json",
            "label": "Compsognathus"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/cornugon.json",
            "label": "Cornugon"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/crawling-hand.json",
            "label": "Crawling Hand"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/culdewen.json",
            "label": "Culdewen"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/cythnigot.json",
            "label": "Cythnigot"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/denizen-of-leng.json",
            "label": "Denizen of Leng"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/derghodaemon.json",
            "label": "Derghodaemon"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/destrachan.json",
            "label": "Destrachan"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/devourer.json",
            "label": "Devourer"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/dig-widget.json",
            "label": "Dig-Widget"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/doprillu.json",
            "label": "Doprillu"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/drainberry-bush.json",
            "label": "Drainberry Bush"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/draugr.json",
            "label": "Draugr"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/dread-wraith.json",
            "label": "Dread Wraith"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/dream-spider.json",
            "label": "Dream Spider"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/duneshaker-solifugid.json",
            "label": "Duneshaker Solifugid"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/dust-mephit.json",
            "label": "Dust Mephit"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/dweomercat.json",
            "label": "Dweomercat"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/dziriak.json",
            "label": "D'ziriak"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/earthen-destrier.json",
            "label": "Earthen Destrier"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/elasmosaurus.json",
            "label": "Elasmosaurus"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/ember-fox.json",
            "label": "Ember Fox"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/emperor-cobra.json",
            "label": "Emperor Cobra"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/eremite.json",
            "label": "Eremite"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/esobok.json",
            "label": "Esobok"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/evangelist.json",
            "label": "Evangelist"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/fen-mosquito-swarm.json",
            "label": "Fen Mosquito Swarm"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/fetchling-scout.json",
            "label": "Fetchling Scout"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/filth-fire.json",
            "label": "Filth Fire"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/fire-jellyfish-swarm.json",
            "label": "Fire Jellyfish Swarm"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/fire-yai.json",
            "label": "Fire Yai"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/fjord-linnorm.json",
            "label": "Fjord Linnorm"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/flytrap-leshy.json",
            "label": "Flytrap Leshy"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/froghemoth.json",
            "label": "Froghemoth"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/frost-troll.json",
            "label": "Frost Troll"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/frost-worm.json",
            "label": "Frost Worm"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/ghonhatine.json",
            "label": "Ghonhatine"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/giant-amoeba.json",
            "label": "Giant Amoeba"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/giant-ant.json",
            "label": "Giant Ant"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/giant-badger.json",
            "label": "Giant Badger"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/giant-chameleon.json",
            "label": "Giant Chameleon"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/giant-cockroach.json",
            "label": "Giant Cockroach"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/giant-crab.json",
            "label": "Giant Crab"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/giant-crawling-hand.json",
            "label": "Giant Crawling Hand"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/giant-dragonfly-nymph.json",
            "label": "Giant Dragonfly Nymph"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/giant-dragonfly.json",
            "label": "Giant Dragonfly"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/giant-fly.json",
            "label": "Giant Fly"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/giant-frog.json",
            "label": "Giant Frog"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/giant-hippocampus.json",
            "label": "Giant Hippocampus"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/giant-jellyfish.json",
            "label": "Giant Jellyfish"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/giant-leech.json",
            "label": "Giant Leech"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/giant-maggot.json",
            "label": "Giant Maggot"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/giant-mosquito.json",
            "label": "Giant Mosquito"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/giant-slug.json",
            "label": "Giant Slug"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/giant-snapping-turtle.json",
            "label": "Giant Snapping Turtle"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/giant-solifugid.json",
            "label": "Giant Solifugid"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/giant-squid.json",
            "label": "Giant Squid"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/giant-tick.json",
            "label": "Giant Tick"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/giant-toad.json",
            "label": "Giant Toad"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/giant-whiptail-centipede.json",
            "label": "Giant Whiptail Centipede"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/giant-wolverine.json",
            "label": "Giant Wolverine"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/glass-golem.json",
            "label": "Glass Golem"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/gorgon.json",
            "label": "Gorgon"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/gosreg.json",
            "label": "Gosreg"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/granite-glyptodont.json",
            "label": "Granite Glyptodont"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/gray-ooze.json",
            "label": "Gray Ooze"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/green-dracolisk.json",
            "label": "Green Dracolisk"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/grendel.json",
            "label": "Grendel"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/grimstalker.json",
            "label": "Grimstalker"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/grindylow.json",
            "label": "Grindylow"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/grippli-scout.json",
            "label": "Grippli Scout"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/grodair.json",
            "label": "Grodair"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/gylou.json",
            "label": "Gylou"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/hadrosaurid.json",
            "label": "Hadrosaurid"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/hamatula.json",
            "label": "Hamatula"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/hellcat.json",
            "label": "Hellcat"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/hezrou.json",
            "label": "Hezrou"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/hippocampus.json",
            "label": "Hippocampus"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/hippogriff.json",
            "label": "Hippogriff"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/hippopotamus.json",
            "label": "Hippopotamus"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/hodag.json",
            "label": "Hodag"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/hound-archon.json",
            "label": "Hound Archon"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/hound-of-tindalos.json",
            "label": "Hound Of Tindalos"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/ice-golem.json",
            "label": "Ice Golem"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/ice-mephit.json",
            "label": "Ice Mephit"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/ice-yai.json",
            "label": "Ice Yai"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/icewyrm.json",
            "label": "Icewyrm"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/icicle-snake.json",
            "label": "Icicle Snake"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/ifrit-pyrochemist.json",
            "label": "Ifrit Pyrochemist"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/iguanodon.json",
            "label": "Iguanodon"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/imentesh.json",
            "label": "Imentesh"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/intellect-devourer.json",
            "label": "Intellect Devourer"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/interlocutor.json",
            "label": "Interlocutor"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/invidiak.json",
            "label": "Invidiak"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/irlgaunt.json",
            "label": "Irlgaunt"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/irnakurse.json",
            "label": "Irnakurse"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/isqulug.json",
            "label": "Isqulug"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/jabberwock.json",
            "label": "Jabberwock"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/jotund-troll.json",
            "label": "Jotund Troll"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/jyoti.json",
            "label": "Jyoti"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/kelpie.json",
            "label": "Kelpie"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/korred.json",
            "label": "Korred"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/leng-spider.json",
            "label": "Leng Spider"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/leprechaun.json",
            "label": "Leprechaun"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/lerritan.json",
            "label": "Lerritan"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/leucrotta.json",
            "label": "Leucrotta"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/leydroth.json",
            "label": "Leydroth"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/living-boulder.json",
            "label": "Living Boulder"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/living-thunderclap.json",
            "label": "Living Thunderclap"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/lunar-naga.json",
            "label": "Lunar Naga"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/lurker-in-light.json",
            "label": "Lurker In Light"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/magma-scorpion.json",
            "label": "Magma Scorpion"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/mandragora.json",
            "label": "Mandragora"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/manta-ray.json",
            "label": "Manta Ray"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/marrmora.json",
            "label": "Marrmora"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/marsh-giant.json",
            "label": "Marsh Giant"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/marut.json",
            "label": "Marut"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/mastodon.json",
            "label": "Mastodon"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/megalania.json",
            "label": "Megalania"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/meladaemon.json",
            "label": "Meladaemon"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/melody-on-the-wind.json",
            "label": "Melody On The Wind"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/mist-stalker.json",
            "label": "Mist Stalker"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/mohrg.json",
            "label": "Mohrg"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/monadic-deva.json",
            "label": "Monadic Deva"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/moonflower.json",
            "label": "Moonflower"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/morlock.json",
            "label": "Morlock"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/movanic-deva.json",
            "label": "Movanic Deva"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/mudwretch.json",
            "label": "Mudwretch"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/nabasu.json",
            "label": "Nabasu"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/nalfeshnee.json",
            "label": "Nalfeshnee"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/necrophidius.json",
            "label": "Necrophidius"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/neothelid.json",
            "label": "Neothelid"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/nereid.json",
            "label": "Nereid"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/nixie.json",
            "label": "Nixie"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/norn.json",
            "label": "Norn"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/nuckelavee.json",
            "label": "Nuckelavee"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/nuglub.json",
            "label": "Nuglub"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/nyogoth.json",
            "label": "Nyogoth"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/ogre-spider.json",
            "label": "Ogre Spider"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/olethrodaemon.json",
            "label": "Olethrodaemon"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/onidoshi.json",
            "label": "Onidoshi"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/ooze-mephit.json",
            "label": "Ooze Mephit"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/orca.json",
            "label": "Orca"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/oread-guard.json",
            "label": "Oread Guard"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/ostiarius.json",
            "label": "Ostiarius"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/osyluth.json",
            "label": "Osyluth"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/pachycephalosaurus.json",
            "label": "Pachycephalosaurus"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/peluda.json",
            "label": "Peluda"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/peryton.json",
            "label": "Peryton"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/petitioner-abaddon.json",
            "label": "Petitioner (Abaddon)"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/petitioner-abyss.json",
            "label": "Petitioner (Abyss)"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/petitioner-astral-plane.json",
            "label": "Petitioner (Astral Plane)"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/petitioner-axis.json",
            "label": "Petitioner (Axis)"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/petitioner-boneyard.json",
            "label": "Petitioner (Boneyard)"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/petitioner-dead-vault.json",
            "label": "Petitioner (Dead Vault)"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/petitioner-dimension-of-dreams.json",
            "label": "Petitioner (Dimension of Dreams)"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/petitioner-elysium.json",
            "label": "Petitioner (Elysium)"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/petitioner-ethereal-plane.json",
            "label": "Petitioner (Ethereal Plane)"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/petitioner-heaven.json",
            "label": "Petitioner (Heaven)"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/petitioner-hell.json",
            "label": "Petitioner (Hell)"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/petitioner-maelstrom.json",
            "label": "Petitioner (Maelstrom)"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/petitioner-material-plane.json",
            "label": "Petitioner (Material Plane)"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/petitioner-nirvana.json",
            "label": "Petitioner (Nirvana)"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/petitioner-plane-of-air.json",
            "label": "Petitioner (Plane of Air)"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/petitioner-plane-of-earth.json",
            "label": "Petitioner (Plane of Earth)"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/petitioner-plane-of-fire.json",
            "label": "Petitioner (Plane of Fire)"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/petitioner-plane-of-water.json",
            "label": "Petitioner (Plane of Water)"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/petitioner-positive-energy-plane.json",
            "label": "Petitioner (Positive Energy Plane)"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/petitioner-shadow-plane.json",
            "label": "Petitioner (Shadow Plane)"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/piscodaemon.json",
            "label": "Piscodaemon"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/planetar.json",
            "label": "Planetar"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/polar-bear.json",
            "label": "Polar Bear"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/purrodaemon.json",
            "label": "Purrodaemon"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/quetz-couatl.json",
            "label": "Quetz Couatl"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/quickling.json",
            "label": "Quickling"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/quoppopak.json",
            "label": "Quoppopak"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/radiant-warden.json",
            "label": "Radiant Warden"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/raven-swarm.json",
            "label": "Raven Swarm"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/raven.json",
            "label": "Raven"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/ravener-husk.json",
            "label": "Ravener Husk"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/ravener.json",
            "label": "Ravener"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/red-dracolisk.json",
            "label": "Red Dracolisk"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/reef-octopus.json",
            "label": "Reef Octopus"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/revenant.json",
            "label": "Revenant"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/rhinoceros.json",
            "label": "Rhinoceros"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/rusalka.json",
            "label": "Rusalka"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/sacristan.json",
            "label": "Sacristan"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/sand-sentry.json",
            "label": "Sand Sentry"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/sandpoint-devil.json",
            "label": "Sandpoint Devil"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/sard.json",
            "label": "Sard"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/sarglagon.json",
            "label": "Sarglagon"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/scarecrow.json",
            "label": "Scarecrow"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/sceaduinar.json",
            "label": "Sceaduinar"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/scythe-tree.json",
            "label": "Scythe Tree"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/sea-drake.json",
            "label": "Sea Drake"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/sea-snake.json",
            "label": "Sea Snake"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/shadow-drake.json",
            "label": "Shadow Drake"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/shadow-giant.json",
            "label": "Shadow Giant"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/shoal-linnorm.json",
            "label": "Shoal Linnorm"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/shocker-lizard.json",
            "label": "Shocker Lizard"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/shoggti.json",
            "label": "Shoggti"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/skaveling.json",
            "label": "Skaveling"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/skrik-nettle.json",
            "label": "Skrik Nettle"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/skulk.json",
            "label": "Skulk"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/slime-mold.json",
            "label": "Slime Mold"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/snapping-turtle.json",
            "label": "Snapping Turtle"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/solar.json",
            "label": "Solar"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/soul-eater.json",
            "label": "Soul Eater"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/spark-bat.json",
            "label": "Spark Bat"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/spear-frog.json",
            "label": "Spear Frog"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/specter.json",
            "label": "Specter"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/spinosaurus.json",
            "label": "Spinosaurus"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/spiral-centurion.json",
            "label": "Spiral Centurion"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/spirit-naga.json",
            "label": "Spirit Naga"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/sportlebore-swarm.json",
            "label": "Sportlebore Swarm"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/spriggan-bully.json",
            "label": "Spriggan Bully"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/spriggan-warlord.json",
            "label": "Spriggan Warlord"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/star-archon.json",
            "label": "Star Archon"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/steam-mephit.json",
            "label": "Steam Mephit"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/stingray.json",
            "label": "Stingray"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/striding-fire.json",
            "label": "Striding Fire"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/stygira.json",
            "label": "Stygira"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/suli-dune-dancer.json",
            "label": "Suli Dune Dancer"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/sunflower-leshy.json",
            "label": "Sunflower Leshy"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/sylph-sneak.json",
            "label": "Sylph Sneak"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/taiga-giant.json",
            "label": "Taiga Giant"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/taiga-linnorm.json",
            "label": "Taiga Linnorm"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/tatzlwyrm.json",
            "label": "Tatzlwyrm"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/tendriculos.json",
            "label": "Tendriculos"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/thanadaemon.json",
            "label": "Thanadaemon"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/theletos.json",
            "label": "Theletos"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/thrasfyr.json",
            "label": "Thrasfyr"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/thulgant.json",
            "label": "Thulgant"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/thunderbird.json",
            "label": "Thunderbird"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/tick-swarm.json",
            "label": "Tick Swarm"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/titan-centipede.json",
            "label": "Titan Centipede"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/totenmaske.json",
            "label": "Totenmaske"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/triton.json",
            "label": "Triton"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/trollhound.json",
            "label": "Trollhound"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/trumpet-archon.json",
            "label": "Trumpet Archon"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/twigjack.json",
            "label": "Twigjack"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/two-headed-troll.json",
            "label": "Two-Headed Troll"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/umonlee.json",
            "label": "Umonlee"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/undine-hydromancer.json",
            "label": "Undine Hydromancer"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/urdefhan-tormentor.json",
            "label": "Urdefhan Tormentor"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/urdefhan-warrior.json",
            "label": "Urdefhan Warrior"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/vampire-squid.json",
            "label": "Vampire Squid"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/vampiric-mist.json",
            "label": "Vampiric Mist"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/vanth.json",
            "label": "Vanth"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/vaspercham.json",
            "label": "Vaspercham"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/veranallia.json",
            "label": "Veranallia"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/verdurous-ooze.json",
            "label": "Verdurous Ooze"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/vexgit.json",
            "label": "Vexgit"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/violet-fungus.json",
            "label": "Violet Fungus"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/viper-vine.json",
            "label": "Viper Vine"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/void-zombie.json",
            "label": "Void Zombie"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/vrolikai.json",
            "label": "Vrolikai"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/vrykolakas-ancient.json",
            "label": "Vrykolakas Ancient"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/vrykolakas-master.json",
            "label": "Vrykolakas Master"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/vrykolakas-spawn.json",
            "label": "Vrykolakas Spawn"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/water-orm.json",
            "label": "Water Orm"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/water-yai.json",
            "label": "Water Yai"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/wereboar.json",
            "label": "Wereboar"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/weretiger.json",
            "label": "Weretiger"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/white-dracolisk.json",
            "label": "White Dracolisk"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/witchfire.json",
            "label": "Witchfire"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/witchwyrd.json",
            "label": "Witchwyrd"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/wolverine.json",
            "label": "Wolverine"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/wood-giant.json",
            "label": "Wood Giant"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/wood-golem.json",
            "label": "Wood Golem"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/woolly-rhinoceros.json",
            "label": "Woolly Rhinoceros"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/worm-that-walks-cultist.json",
            "label": "Worm That Walks Cultist"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/xill.json",
            "label": "Xill"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/yamaraj.json",
            "label": "Yamaraj"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/yellow-musk-brute.json",
            "label": "Yellow Musk Brute"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/yellow-musk-creeper.json",
            "label": "Yellow Musk Creeper"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/yellow-musk-thrall.json",
            "label": "Yellow Musk Thrall"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/yeth-hound.json",
            "label": "Yeth Hound"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/young-brine-dragon-spellcaster.json",
            "label": "Young Brine Dragon (Spellcaster)"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/young-brine-dragon.json",
            "label": "Young Brine Dragon"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/young-cloud-dragon-spellcaster.json",
            "label": "Young Cloud Dragon (Spellcaster)"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/young-cloud-dragon.json",
            "label": "Young Cloud Dragon"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/young-crystal-dragon-spellcaster.json",
            "label": "Young Crystal Dragon (Spellcaster)"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/young-crystal-dragon.json",
            "label": "Young Crystal Dragon"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/young-magma-dragon-spellcaster.json",
            "label": "Young Magma Dragon (Spellcaster)"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/young-magma-dragon.json",
            "label": "Young Magma Dragon"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/young-umbral-dragon-spellcaster.json",
            "label": "Young Umbral Dragon (Spellcaster)"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/young-umbral-dragon.json",
            "label": "Young Umbral Dragon"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/zebub.json",
            "label": "Zebub"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/zelekhut.json",
            "label": "Zelekhut"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/zomok.json",
            "label": "Zomok"
          },
          {
            "path": "packs/data/pathfinder-bestiary-2.db/zyss-serpentfolk.json",
            "label": "Zyss Serpentfolk"
          }
        ]
      },
      "pathfinder-bestiary-3": {
        "label": "Bestiary 3",
        "itens": [
          {
            "path": "packs/data/pathfinder-bestiary-3.db/abandoned-zealot.json",
            "label": "Abandoned Zealot"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/abrikandilu.json",
            "label": "Abrikandilu"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/adachros.json",
            "label": "Adachros"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/adhukait.json",
            "label": "Adhukait"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/adlet.json",
            "label": "Adlet"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/adult-forest-dragon-spellcaster.json",
            "label": "Adult Forest Dragon (Spellcaster)"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/adult-forest-dragon.json",
            "label": "Adult Forest Dragon"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/adult-sea-dragon-spellcaster.json",
            "label": "Adult Sea Dragon (Spellcaster)"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/adult-sea-dragon.json",
            "label": "Adult Sea Dragon"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/adult-sky-dragon-spellcaster.json",
            "label": "Adult Sky Dragon (Spellcaster)"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/adult-sky-dragon.json",
            "label": "Adult Sky Dragon"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/adult-sovereign-dragon-spellcaster.json",
            "label": "Adult Sovereign Dragon (Spellcaster)"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/adult-sovereign-dragon.json",
            "label": "Adult Sovereign Dragon"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/adult-underworld-dragon-spellcaster.json",
            "label": "Adult Underworld Dragon (Spellcaster)"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/adult-underworld-dragon.json",
            "label": "Adult Underworld Dragon"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/aghash.json",
            "label": "Aghash"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/air-wisp.json",
            "label": "Air Wisp"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/amalgamite.json",
            "label": "Amalgamite"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/amphisbaena.json",
            "label": "Amphisbaena"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/ancient-forest-dragon-spellcaster.json",
            "label": "Ancient Forest Dragon (Spellcaster)"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/ancient-forest-dragon.json",
            "label": "Ancient Forest Dragon"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/ancient-sea-dragon-spellcaster.json",
            "label": "Ancient Sea Dragon (Spellcaster)"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/ancient-sea-dragon.json",
            "label": "Ancient Sea Dragon"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/ancient-sky-dragon-spellcaster.json",
            "label": "Ancient Sky Dragon (Spellcaster)"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/ancient-sky-dragon.json",
            "label": "Ancient Sky Dragon"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/ancient-sovereign-dragon-spellcaster.json",
            "label": "Ancient Sovereign Dragon (Spellcaster)"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/ancient-sovereign-dragon.json",
            "label": "Ancient Sovereign Dragon"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/ancient-underworld-dragon-spellcaster.json",
            "label": "Ancient Underworld Dragon (Spellcaster)"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/ancient-underworld-dragon.json",
            "label": "Ancient Underworld Dragon"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/android-infiltrator.json",
            "label": "Android Infiltrator"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/angazhani.json",
            "label": "Angazhani"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/angheuvore-flesh-gnawer.json",
            "label": "Angheuvore Flesh-Gnawer"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/animated-colossus.json",
            "label": "Animated Colossus"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/animated-furnace.json",
            "label": "Animated Furnace"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/animated-silverware-swarm.json",
            "label": "Animated Silverware Swarm"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/animated-trebuchet.json",
            "label": "Animated Trebuchet"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/aphorite-sharpshooter.json",
            "label": "Aphorite Sharpshooter"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/arboreal-archive.json",
            "label": "Arboreal Archive"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/arboreal-reaper.json",
            "label": "Arboreal Reaper"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/azarketi-explorer.json",
            "label": "Azarketi Explorer"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/azer.json",
            "label": "Azer"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/bauble-beast.json",
            "label": "Bauble Beast"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/baykok.json",
            "label": "Baykok"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/betobeto-san.json",
            "label": "Betobeto-San"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/bison.json",
            "label": "Bison"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/blood-hag.json",
            "label": "Blood Hag"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/blood-painter.json",
            "label": "Blood Painter"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/bone-ship.json",
            "label": "Bone Ship"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/bore-worm-swarm.json",
            "label": "Bore Worm Swarm"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/brainchild.json",
            "label": "Brainchild"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/brimorak.json",
            "label": "Brimorak"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/buso-farmer.json",
            "label": "Buso Farmer"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/cactus-leshy.json",
            "label": "Cactus Leshy"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/caligni-caller.json",
            "label": "Caligni Caller"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/caligni-vanguard.json",
            "label": "Caligni Vanguard"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/calikang.json",
            "label": "Calikang"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/camel.json",
            "label": "Camel"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/caulborn.json",
            "label": "Caulborn"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/cave-giant.json",
            "label": "Cave Giant"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/cecaelia-trapper.json",
            "label": "Cecaelia Trapper"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/chouchin-obake.json",
            "label": "Chouchin-Obake"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/chyzaedu.json",
            "label": "Chyzaedu"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/city-guard-squadron.json",
            "label": "City Guard Squadron"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/clacking-sea-skull-swarm.json",
            "label": "Clacking Sea Skull Swarm"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/clacking-skull-swarm.json",
            "label": "Clacking Skull Swarm"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/clockwork-dragon.json",
            "label": "Clockwork Dragon"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/clockwork-mage.json",
            "label": "Clockwork Mage"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/clockwork-soldier.json",
            "label": "Clockwork Soldier"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/clockwork-spy.json",
            "label": "Clockwork Spy"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/cobbleswarm.json",
            "label": "Cobbleswarm"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/common-eurypterid.json",
            "label": "Common Eurypterid"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/consonite-choir.json",
            "label": "Consonite Choir"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/coral-capuchin.json",
            "label": "Coral Capuchin"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/corrupted-relic.json",
            "label": "Corrupted Relic"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/crossroads-guardian.json",
            "label": "Crossroads Guardian"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/cunning-fox.json",
            "label": "Cunning Fox"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/danava-titan.json",
            "label": "Danava Titan"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/deimavigga.json",
            "label": "Deimavigga"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/desert-giant.json",
            "label": "Desert Giant"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/divine-warden-of-nethys.json",
            "label": "Divine Warden Of Nethys"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/domovoi.json",
            "label": "Domovoi"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/doru.json",
            "label": "Doru"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/draconal-black.json",
            "label": "Draconal (Black)"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/draconal-green.json",
            "label": "Draconal (Green)"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/draconal-red.json",
            "label": "Draconal (Red)"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/draconal-white.json",
            "label": "Draconal (White)"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/draconal-yellow.json",
            "label": "Draconal (Yellow)"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/dramofir.json",
            "label": "Dramofir"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/draxie.json",
            "label": "Draxie"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/dretch.json",
            "label": "Dretch"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/duende.json",
            "label": "Duende"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/dvorovoi.json",
            "label": "Dvorovoi"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/dybbuk.json",
            "label": "Dybbuk"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/earth-wisp.json",
            "label": "Earth Wisp"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/einherji.json",
            "label": "Einherji"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/elder-sphinx.json",
            "label": "Elder Sphinx"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/elder-wyrmwraith.json",
            "label": "Elder Wyrmwraith"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/elysian-titan.json",
            "label": "Elysian Titan"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/empress-bore-worm.json",
            "label": "Empress Bore Worm"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/empress-ice-worm.json",
            "label": "Empress Ice Worm"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/empress-lava-worm.json",
            "label": "Empress Lava Worm"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/empress-mage-eater-worm.json",
            "label": "Empress Mage-Eater Worm"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/empress-necral-worm.json",
            "label": "Empress Necral Worm"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/esipil.json",
            "label": "Esipil"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/etioling-blightmage.json",
            "label": "Etioling Blightmage"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/eunemvro.json",
            "label": "Eunemvro"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/fading-fox.json",
            "label": "Fading Fox"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/feathered-bear.json",
            "label": "Feathered Bear"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/feral-sea-skull-swarm.json",
            "label": "Feral Sea Skull Swarm"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/feral-skull-swarm.json",
            "label": "Feral Skull Swarm"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/festrog.json",
            "label": "Festrog"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/fire-wisp.json",
            "label": "Fire Wisp"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/flaming-skull.json",
            "label": "Flaming Skull"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/flumph.json",
            "label": "Flumph"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/fortune-eater.json",
            "label": "Fortune Eater"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/fossil-golem.json",
            "label": "Fossil Golem"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/fuath.json",
            "label": "Fuath"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/galvo.json",
            "label": "Galvo"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/ganzi-martial-artist.json",
            "label": "Ganzi Martial Artist"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/garuda.json",
            "label": "Garuda"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/gathlain-wanderer.json",
            "label": "Gathlain Wanderer"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/ghoran-manipulator.json",
            "label": "Ghoran Manipulator"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/giant-flying-squirrel.json",
            "label": "Giant Flying Squirrel"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/giant-hermit-crab.json",
            "label": "Giant Hermit Crab"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/giant-opossum.json",
            "label": "Giant Opossum"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/giant-pangolin.json",
            "label": "Giant Pangolin"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/giant-porcupine.json",
            "label": "Giant Porcupine"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/giant-seahorse.json",
            "label": "Giant Seahorse"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/giant-skunk.json",
            "label": "Giant Skunk"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/giant-vulture.json",
            "label": "Giant Vulture"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/girtablilu-seer.json",
            "label": "Girtablilu Seer"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/girtablilu-sentry.json",
            "label": "Girtablilu Sentry"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/gliminal.json",
            "label": "Gliminal"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/globster.json",
            "label": "Globster"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/green-man.json",
            "label": "Green Man"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/grimple.json",
            "label": "Grimple"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/grioth-cultist.json",
            "label": "Grioth Cultist"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/grioth-scout.json",
            "label": "Grioth Scout"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/guecubu.json",
            "label": "Guecubu"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/gurgist-mauler.json",
            "label": "Gurgist Mauler"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/hadrinnex.json",
            "label": "Hadrinnex"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/haniver.json",
            "label": "Haniver"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/harmona.json",
            "label": "Harmona"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/harpy-skeleton.json",
            "label": "Harpy Skeleton"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/hatred-siktempora.json",
            "label": "Hatred Siktempora"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/hekatonkheires-titan.json",
            "label": "Hekatonkheires Titan"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/hellbound-attorney.json",
            "label": "Hellbound Attorney"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/hellknight-cavalry-brigade.json",
            "label": "Hellknight Cavalry Brigade"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/hellwasp-swarm.json",
            "label": "Hellwasp Swarm"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/herexen.json",
            "label": "Herexen"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/hermit-crab-swarm.json",
            "label": "Hermit Crab Swarm"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/hesperid-queen.json",
            "label": "Hesperid Queen"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/hesperid.json",
            "label": "Hesperid"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/hieracosphinx.json",
            "label": "Hieracosphinx"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/house-drake.json",
            "label": "House Drake"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/huldra.json",
            "label": "Huldra"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/hyakume.json",
            "label": "Hyakume"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/ice-worm-swarm.json",
            "label": "Ice Worm Swarm"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/incutilis.json",
            "label": "Incutilis"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/ioton.json",
            "label": "Ioton"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/ittan-momen.json",
            "label": "Ittan-Momen"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/japalisura.json",
            "label": "Japalisura"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/jorogumo.json",
            "label": "Jorogumo"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/kangaroo.json",
            "label": "Kangaroo"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/kappa.json",
            "label": "Kappa"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/kasa-obake.json",
            "label": "Kasa-Obake"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/khravgodon.json",
            "label": "Khravgodon"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/kimenhul.json",
            "label": "Kimenhul"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/kirin.json",
            "label": "Kirin"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/kishi.json",
            "label": "Kishi"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/kitsune-trickster.json",
            "label": "Kitsune Trickster"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/kodama.json",
            "label": "Kodama"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/kokogiak.json",
            "label": "Kokogiak"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/kongamato.json",
            "label": "Kongamato"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/kovintus-geomancer.json",
            "label": "Kovintus Geomancer"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/krampus.json",
            "label": "Krampus"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/kuchisake-onna.json",
            "label": "Kuchisake-Onna"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/kurobozu.json",
            "label": "Kurobozu"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/kushtaka.json",
            "label": "Kushtaka"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/lampad-queen.json",
            "label": "Lampad Queen"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/lampad.json",
            "label": "Lampad"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/lava-worm-swarm.json",
            "label": "Lava Worm Swarm"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/ledalusca.json",
            "label": "Ledalusca"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/leng-ghoul.json",
            "label": "Leng Ghoul"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/levaloch.json",
            "label": "Levaloch"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/lifeleecher-brawler.json",
            "label": "Lifeleecher Brawler"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/living-graffiti-blood.json",
            "label": "Living Graffiti (Blood)"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/living-graffiti-chalk.json",
            "label": "Living Graffiti (Chalk)"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/living-graffiti-ink.json",
            "label": "Living Graffiti (Ink)"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/living-graffiti-oil.json",
            "label": "Living Graffiti (Oil)"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/living-rune-arcane.json",
            "label": "Living Rune (Arcane)"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/living-rune-divine.json",
            "label": "Living Rune (Divine)"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/living-rune-occult.json",
            "label": "Living Rune (Occult)"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/living-rune-primal.json",
            "label": "Living Rune (Primal)"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/locathah-hunter.json",
            "label": "Locathah Hunter"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/love-siktempora.json",
            "label": "Love Siktempora"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/lovelorn.json",
            "label": "Lovelorn"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/maftet-guardian.json",
            "label": "Maftet Guardian"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/mage-eater-worm-swarm.json",
            "label": "Mage-Eater Worm Swarm"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/maharaja.json",
            "label": "Maharaja"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/manticore-paaridar.json",
            "label": "Manticore Paaridar"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/megalictis.json",
            "label": "Megalictis"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/megatherium.json",
            "label": "Megatherium"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/melixie.json",
            "label": "Melixie"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/mezlan.json",
            "label": "Mezlan"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/mi-go.json",
            "label": "Mi-Go"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/millindemalion.json",
            "label": "Millindemalion"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/misery-siktempora.json",
            "label": "Misery Siktempora"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/mithral-golem.json",
            "label": "Mithral Golem"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/mix-couatl.json",
            "label": "Mix Couatl"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/mobogo.json",
            "label": "Mobogo"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/mokele-mbembe.json",
            "label": "Mokele-Mbembe"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/monkey-swarm.json",
            "label": "Monkey Swarm"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/monkey.json",
            "label": "Monkey"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/moon-hag.json",
            "label": "Moon Hag"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/moose.json",
            "label": "Moose"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/mothman.json",
            "label": "Mothman"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/munagola.json",
            "label": "Munagola"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/munavri-spellblade.json",
            "label": "Munavri Spellblade"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/myceloid.json",
            "label": "Myceloid"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/nagaji-soldier.json",
            "label": "Nagaji Soldier"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/namorrodor.json",
            "label": "Namorrodor"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/narwhal.json",
            "label": "Narwhal"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/necral-worm-swarm.json",
            "label": "Necral Worm Swarm"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/nemhaith.json",
            "label": "Nemhaith"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/nightgaunt.json",
            "label": "Nightgaunt"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/nightmarchers.json",
            "label": "Nightmarchers"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/nikaramsa.json",
            "label": "Nikaramsa"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/nosferatu-malefactor.json",
            "label": "Nosferatu Malefactor"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/nosferatu-overlord.json",
            "label": "Nosferatu Overlord"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/nosferatu-thrall.json",
            "label": "Nosferatu Thrall"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/nucol.json",
            "label": "Nucol"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/nyktera.json",
            "label": "Nyktera"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/omox.json",
            "label": "Omox"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/ostovite.json",
            "label": "Ostovite"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/ouroboros.json",
            "label": "Ouroboros"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/ovinnik.json",
            "label": "Ovinnik"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/owb-prophet.json",
            "label": "Owb Prophet"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/owb.json",
            "label": "Owb"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/pairaka.json",
            "label": "Pairaka"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/pakalchi.json",
            "label": "Pakalchi"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/palace-skelm.json",
            "label": "Palace Skelm"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/penanggalan.json",
            "label": "Penanggalan"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/peri.json",
            "label": "Peri"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/phantom-beast.json",
            "label": "Phantom Beast"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/phantom-knight.json",
            "label": "Phantom Knight"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/piranha-swarm.json",
            "label": "Piranha Swarm"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/plague-giant.json",
            "label": "Plague Giant"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/platecarpus.json",
            "label": "Platecarpus"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/popobawa.json",
            "label": "Popobawa"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/procyal.json",
            "label": "Procyal"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/pufferfish.json",
            "label": "Pufferfish"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/pukwudgie.json",
            "label": "Pukwudgie"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/quintessivore.json",
            "label": "Quintessivore"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/raktavarna.json",
            "label": "Raktavarna"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/rancorous-priesthood.json",
            "label": "Rancorous Priesthood"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/rat-snake-swarm.json",
            "label": "Rat Snake Swarm"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/red-fox.json",
            "label": "Red Fox"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/rhu-chalik.json",
            "label": "Rhu-Chalik"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/ringhorn-ram.json",
            "label": "Ringhorn Ram"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/roiling-incant-evocation.json",
            "label": "Roiling Incant (Evocation)"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/rokurokubi.json",
            "label": "Rokurokubi"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/rosethorn-ram.json",
            "label": "Rosethorn Ram"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/sabosan.json",
            "label": "Sabosan"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/samsaran-anchorite.json",
            "label": "Samsaran Anchorite"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/sasquatch.json",
            "label": "Sasquatch"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/scalescribe.json",
            "label": "Scalescribe"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/seaweed-leshy.json",
            "label": "Seaweed Leshy"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/seething-spirit.json",
            "label": "Seething Spirit"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/sepid.json",
            "label": "Sepid"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/severed-head.json",
            "label": "Severed Head"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/shabti-redeemer.json",
            "label": "Shabti Redeemer"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/shae.json",
            "label": "Shae"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/shambler-troop.json",
            "label": "Shambler Troop"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/shantak.json",
            "label": "Shantak"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/shaukeen.json",
            "label": "Shaukeen"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/shikigami.json",
            "label": "Shikigami"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/shrine-skelm.json",
            "label": "Shrine Skelm"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/shulsaga.json",
            "label": "Shulsaga"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/silvanshee.json",
            "label": "Silvanshee"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/skeleton-infantry.json",
            "label": "Skeleton Infantry"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/skinstitch.json",
            "label": "Skinstitch"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/skull-peeler.json",
            "label": "Skull Peeler"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/skunk.json",
            "label": "Skunk"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/slithering-pit.json",
            "label": "Slithering Pit"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/sorcerous-sea-skull-swarm.json",
            "label": "Sorcerous Sea Skull Swarm"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/sorcerous-skull-swarm.json",
            "label": "Sorcerous Skull Swarm"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/soul-skelm.json",
            "label": "Soul Skelm"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/spiny-eurypterid.json",
            "label": "Spiny Eurypterid"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/squirming-swill.json",
            "label": "Squirming Swill"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/squirrel-swarm.json",
            "label": "Squirrel Swarm"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/stheno-harpist.json",
            "label": "Stheno Harpist"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/stone-lion-cub.json",
            "label": "Stone Lion Cub"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/stone-lion.json",
            "label": "Stone Lion"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/storm-hag.json",
            "label": "Storm Hag"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/street-skelm.json",
            "label": "Street Skelm"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/strix-kinmate.json",
            "label": "Strix Kinmate"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/sturzstromer.json",
            "label": "Sturzstromer"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/sulfur-zombie.json",
            "label": "Sulfur Zombie"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/sumbreiva.json",
            "label": "Sumbreiva"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/swordkeeper.json",
            "label": "Swordkeeper"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/tattoo-guardian.json",
            "label": "Tattoo Guardian"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/terra-cotta-garrison.json",
            "label": "Terra-Cotta Garrison"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/terra-cotta-soldier.json",
            "label": "Terra-Cotta Soldier"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/terror-bird.json",
            "label": "Terror Bird"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/terror-shrike.json",
            "label": "Terror Shrike"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/thanatotic-titan.json",
            "label": "Thanatotic Titan"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/three-toed-sloth.json",
            "label": "Three-Toed Sloth"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/tiddalik.json",
            "label": "Tiddalik"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/tidehawk.json",
            "label": "Tidehawk"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/tikbalang.json",
            "label": "Tikbalang"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/tolokand.json",
            "label": "Tolokand"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/tomb-giant.json",
            "label": "Tomb Giant"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/tooth-fairy-swarm.json",
            "label": "Tooth Fairy Swarm"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/tooth-fairy.json",
            "label": "Tooth Fairy"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/toshigami.json",
            "label": "Toshigami"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/trailgaunt.json",
            "label": "Trailgaunt"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/trilobite-swarm.json",
            "label": "Trilobite Swarm"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/trilobite.json",
            "label": "Trilobite"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/triumph-siktempora.json",
            "label": "Triumph Siktempora"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/tupilaq.json",
            "label": "Tupilaq"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/tylosaurus.json",
            "label": "Tylosaurus"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/tyrannosaurus-skeleton.json",
            "label": "Tyrannosaurus Skeleton"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/tzitzimitl.json",
            "label": "Tzitzimitl"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/umasi.json",
            "label": "Umasi"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/valkyrie.json",
            "label": "Valkyrie"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/vanara-disciple.json",
            "label": "Vanara Disciple"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/vilderavn.json",
            "label": "Vilderavn"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/vine-leshy.json",
            "label": "Vine Leshy"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/viper-swarm.json",
            "label": "Viper Swarm"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/vishkanya-infiltrator.json",
            "label": "Vishkanya Infiltrator"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/vulpinal.json",
            "label": "Vulpinal"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/water-wisp.json",
            "label": "Water Wisp"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/wayang-whisperblade.json",
            "label": "Wayang Whisperblade"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/weasel.json",
            "label": "Weasel"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/werebat.json",
            "label": "Werebat"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/werecrocodile.json",
            "label": "Werecrocodile"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/wihsaak.json",
            "label": "Wihsaak"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/winter-hag.json",
            "label": "Winter Hag"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/wizard-sponge-crypt.json",
            "label": "Wizard Sponge (Crypt)"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/wizard-sponge-fey-domain.json",
            "label": "Wizard Sponge (Fey Domain)"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/wizard-sponge-fiendish-temple.json",
            "label": "Wizard Sponge (Fiendish Temple)"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/wizard-sponge-toxic-lair.json",
            "label": "Wizard Sponge (Toxic Lair)"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/wizard-sponge-underwater.json",
            "label": "Wizard Sponge (Underwater)"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/wizard-sponge.json",
            "label": "Wizard Sponge"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/wolliped.json",
            "label": "Wolliped"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/wyrmwraith.json",
            "label": "Wyrmwraith"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/wyrwood-sneak.json",
            "label": "Wyrwood Sneak"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/ximtal.json",
            "label": "Ximtal"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/xiuh-couatl.json",
            "label": "Xiuh Couatl"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/yithian.json",
            "label": "Yithian"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/young-forest-dragon-spellcaster.json",
            "label": "Young Forest Dragon (Spellcaster)"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/young-forest-dragon.json",
            "label": "Young Forest Dragon"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/young-sea-dragon-spellcaster.json",
            "label": "Young Sea Dragon (Spellcaster)"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/young-sea-dragon.json",
            "label": "Young Sea Dragon"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/young-sky-dragon-spellcaster.json",
            "label": "Young Sky Dragon (Spellcaster)"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/young-sky-dragon.json",
            "label": "Young Sky Dragon"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/young-sovereign-dragon-spellcaster.json",
            "label": "Young Sovereign Dragon (Spellcaster)"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/young-sovereign-dragon.json",
            "label": "Young Sovereign Dragon"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/young-underworld-dragon-spellcaster.json",
            "label": "Young Underworld Dragon (Spellcaster)"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/young-underworld-dragon.json",
            "label": "Young Underworld Dragon"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/yzobu.json",
            "label": "Yzobu"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/zetogeki.json",
            "label": "Zetogeki"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/zombie-dragon.json",
            "label": "Zombie Dragon"
          },
          {
            "path": "packs/data/pathfinder-bestiary-3.db/zuishin.json",
            "label": "Zuishin"
          }
        ]
      },
      "pathfinder-bestiary": {
        "label": "Bestiary 1",
        "itens": [
          {
            "path": "packs/data/pathfinder-bestiary.db/aasimar-redeemer.json",
            "label": "Aasimar Redeemer"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/adamantine-golem.json",
            "label": "Adamantine Golem"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/adult-black-dragon-spellcaster.json",
            "label": "Adult Black Dragon (Spellcaster)"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/adult-black-dragon.json",
            "label": "Adult Black Dragon"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/adult-blue-dragon-spellcaster.json",
            "label": "Adult Blue Dragon (Spellcaster)"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/adult-blue-dragon.json",
            "label": "Adult Blue Dragon"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/adult-brass-dragon-spellcaster.json",
            "label": "Adult Brass Dragon (Spellcaster)"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/adult-brass-dragon.json",
            "label": "Adult Brass Dragon"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/adult-bronze-dragon-spellcaster.json",
            "label": "Adult Bronze Dragon (Spellcaster)"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/adult-bronze-dragon.json",
            "label": "Adult Bronze Dragon"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/adult-copper-dragon-spellcaster.json",
            "label": "Adult Copper Dragon (Spellcaster)"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/adult-copper-dragon.json",
            "label": "Adult Copper Dragon"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/adult-gold-dragon-spellcaster.json",
            "label": "Adult Gold Dragon (Spellcaster)"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/adult-gold-dragon.json",
            "label": "Adult Gold Dragon"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/adult-green-dragon-spellcaster.json",
            "label": "Adult Green Dragon (Spellcaster)"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/adult-green-dragon.json",
            "label": "Adult Green Dragon"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/adult-red-dragon-spellcaster.json",
            "label": "Adult Red Dragon (Spellcaster)"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/adult-red-dragon.json",
            "label": "Adult Red Dragon"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/adult-silver-dragon-spellcaster.json",
            "label": "Adult Silver Dragon (Spellcaster)"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/adult-silver-dragon.json",
            "label": "Adult Silver Dragon"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/adult-white-dragon-spellcaster.json",
            "label": "Adult White Dragon (Spellcaster)"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/adult-white-dragon.json",
            "label": "Adult White Dragon"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/air-mephit.json",
            "label": "Air Mephit"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/alchemical-golem.json",
            "label": "Alchemical Golem"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/alghollthu-master.json",
            "label": "Alghollthu Master"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/ancient-black-dragon-spellcaster.json",
            "label": "Ancient Black Dragon (Spellcaster)"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/ancient-black-dragon.json",
            "label": "Ancient Black Dragon"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/ancient-blue-dragon-spellcaster.json",
            "label": "Ancient Blue Dragon (Spellcaster)"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/ancient-blue-dragon.json",
            "label": "Ancient Blue Dragon"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/ancient-brass-dragon-spellcaster.json",
            "label": "Ancient Brass Dragon (Spellcaster)"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/ancient-brass-dragon.json",
            "label": "Ancient Brass Dragon"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/ancient-bronze-dragon-spellcaster.json",
            "label": "Ancient Bronze Dragon (Spellcaster)"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/ancient-bronze-dragon.json",
            "label": "Ancient Bronze Dragon"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/ancient-copper-dragon-spellcaster.json",
            "label": "Ancient Copper Dragon (Spellcaster)"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/ancient-copper-dragon.json",
            "label": "Ancient Copper Dragon"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/ancient-gold-dragon-spellcaster.json",
            "label": "Ancient Gold Dragon (Spellcaster)"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/ancient-gold-dragon.json",
            "label": "Ancient Gold Dragon"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/ancient-green-dragon-spellcaster.json",
            "label": "Ancient Green Dragon (Spellcaster)"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/ancient-green-dragon.json",
            "label": "Ancient Green Dragon"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/ancient-red-dragon-spellcaster.json",
            "label": "Ancient Red Dragon (Spellcaster)"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/ancient-red-dragon.json",
            "label": "Ancient Red Dragon"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/ancient-silver-dragon-spellcaster.json",
            "label": "Ancient Silver Dragon (Spellcaster)"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/ancient-silver-dragon.json",
            "label": "Ancient Silver Dragon"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/ancient-white-dragon-spellcaster.json",
            "label": "Ancient White Dragon (Spellcaster)"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/ancient-white-dragon.json",
            "label": "Ancient White Dragon"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/animated-armor.json",
            "label": "Animated Armor"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/animated-broom.json",
            "label": "Animated Broom"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/animated-statue.json",
            "label": "Animated Statue"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/ankhrav.json",
            "label": "Ankhrav"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/ankylosaurus.json",
            "label": "Ankylosaurus"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/annis-hag.json",
            "label": "Annis Hag"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/arbiter.json",
            "label": "Arbiter"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/arboreal-regent.json",
            "label": "Arboreal Regent"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/arboreal-warden.json",
            "label": "Arboreal Warden"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/astradaemon.json",
            "label": "Astradaemon"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/astral-deva.json",
            "label": "Astral Deva"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/awakened-tree.json",
            "label": "Awakened Tree"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/axiomite.json",
            "label": "Axiomite"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/azure-worm.json",
            "label": "Azure Worm"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/balisse.json",
            "label": "Balisse"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/ball-python.json",
            "label": "Ball Python"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/balor.json",
            "label": "Balor"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/banshee.json",
            "label": "Banshee"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/baomal.json",
            "label": "Baomal"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/barbazu.json",
            "label": "Barbazu"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/barghest.json",
            "label": "Barghest"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/basilisk.json",
            "label": "Basilisk"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/black-kobold-dragon-mage.json",
            "label": "Black Kobold Dragon Mage"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/black-pudding.json",
            "label": "Black Pudding"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/bloodseeker.json",
            "label": "Bloodseeker"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/blue-kobold-dragon-mage.json",
            "label": "Blue Kobold Dragon Mage"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/boar.json",
            "label": "Boar"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/boggard-scout.json",
            "label": "Boggard Scout"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/boggard-swampseer.json",
            "label": "Boggard Swampseer"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/boggard-warrior.json",
            "label": "Boggard Warrior"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/brain-collector.json",
            "label": "Brain Collector"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/brine-shark.json",
            "label": "Brine Shark"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/brontosaurus.json",
            "label": "Brontosaurus"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/bugbear-thug.json",
            "label": "Bugbear Thug"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/bugbear-tormentor.json",
            "label": "Bugbear Tormentor"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/bulette.json",
            "label": "Bulette"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/bunyip.json",
            "label": "Bunyip"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/cacodaemon.json",
            "label": "Cacodaemon"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/caligni-creeper.json",
            "label": "Caligni Creeper"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/caligni-dancer.json",
            "label": "Caligni Dancer"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/caligni-stalker.json",
            "label": "Caligni Stalker"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/cassisian.json",
            "label": "Cassisian"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/catfolk-pouncer.json",
            "label": "Catfolk Pouncer"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/cauthooj.json",
            "label": "Cauthooj"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/cave-bear.json",
            "label": "Cave Bear"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/centaur.json",
            "label": "Centaur"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/centipede-swarm.json",
            "label": "Centipede Swarm"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/ceustodaemon.json",
            "label": "Ceustodaemon"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/changeling-exile.json",
            "label": "Changeling Exile"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/chimera-black-dragon.json",
            "label": "Chimera (Black Dragon)"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/chimera-blue-dragon.json",
            "label": "Chimera (Blue Dragon)"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/chimera-green-dragon.json",
            "label": "Chimera (Green Dragon)"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/chimera-red-dragon.json",
            "label": "Chimera (Red Dragon)"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/chimera-white-dragon.json",
            "label": "Chimera (White Dragon)"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/choral.json",
            "label": "Choral"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/chuul.json",
            "label": "Chuul"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/cinder-rat.json",
            "label": "Cinder Rat"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/clay-golem.json",
            "label": "Clay Golem"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/cloaker.json",
            "label": "Cloaker"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/cloud-giant.json",
            "label": "Cloud Giant"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/cockatrice.json",
            "label": "Cockatrice"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/crag-linnorm.json",
            "label": "Crag Linnorm"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/crimson-worm.json",
            "label": "Crimson Worm"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/crocodile.json",
            "label": "Crocodile"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/cyclops.json",
            "label": "Cyclops"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/daeodon.json",
            "label": "Daeodon"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/dandasuka.json",
            "label": "Dandasuka"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/dark-naga.json",
            "label": "Dark Naga"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/deadly-mantis.json",
            "label": "Deadly Mantis"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/deep-gnome-rockwarden.json",
            "label": "Deep Gnome Rockwarden"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/deep-gnome-scout.json",
            "label": "Deep Gnome Scout"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/deep-gnome-warrior.json",
            "label": "Deep Gnome Warrior"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/deinonychus.json",
            "label": "Deinonychus"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/deinosuchus.json",
            "label": "Deinosuchus"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/demilich.json",
            "label": "Demilich"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/dero-magister.json",
            "label": "Dero Magister"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/dero-stalker.json",
            "label": "Dero Stalker"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/dero-strangler.json",
            "label": "Dero Strangler"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/desert-drake.json",
            "label": "Desert Drake"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/dezullon.json",
            "label": "Dezullon"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/dhampir-wizard.json",
            "label": "Dhampir Wizard"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/dire-wolf.json",
            "label": "Dire Wolf"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/djinni.json",
            "label": "Djinni"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/doppelganger.json",
            "label": "Doppelganger"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/dragon-turtle.json",
            "label": "Dragon Turtle"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/drakauthix.json",
            "label": "Drakauthix"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/drider.json",
            "label": "Drider"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/drow-fighter.json",
            "label": "Drow Fighter"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/drow-priestess.json",
            "label": "Drow Priestess"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/drow-rogue.json",
            "label": "Drow Rogue"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/dryad-queen.json",
            "label": "Dryad Queen"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/dryad.json",
            "label": "Dryad"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/duergar-bombardier.json",
            "label": "Duergar Bombardier"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/duergar-sharpshooter.json",
            "label": "Duergar Sharpshooter"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/duergar-taskmaster.json",
            "label": "Duergar Taskmaster"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/dullahan.json",
            "label": "Dullahan"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/duskwalker-ghost-hunter.json",
            "label": "Duskwalker Ghost Hunter"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/eagle.json",
            "label": "Eagle"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/earth-mephit.json",
            "label": "Earth Mephit"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/efreeti.json",
            "label": "Efreeti"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/elananx.json",
            "label": "Elananx"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/electric-eel.json",
            "label": "Electric Eel"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/elemental-avalanche.json",
            "label": "Elemental Avalanche"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/elemental-hurricane.json",
            "label": "Elemental Hurricane"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/elemental-inferno.json",
            "label": "Elemental Inferno"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/elemental-tsunami.json",
            "label": "Elemental Tsunami"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/elephant.json",
            "label": "Elephant"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/envyspawn.json",
            "label": "Envyspawn"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/erinys.json",
            "label": "Erinys"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/ether-spider.json",
            "label": "Ether Spider"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/ettin.json",
            "label": "Ettin"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/faceless-stalker.json",
            "label": "Faceless Stalker"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/faerie-dragon.json",
            "label": "Faerie Dragon"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/fire-giant.json",
            "label": "Fire Giant"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/fire-mephit.json",
            "label": "Fire Mephit"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/firewyrm.json",
            "label": "Firewyrm"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/flame-drake.json",
            "label": "Flame Drake"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/flash-beetle.json",
            "label": "Flash Beetle"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/flesh-golem.json",
            "label": "Flesh Golem"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/frost-drake.json",
            "label": "Frost Drake"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/frost-giant.json",
            "label": "Frost Giant"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/fungus-leshy.json",
            "label": "Fungus Leshy"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/gancanagh.json",
            "label": "Gancanagh"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/gargoyle.json",
            "label": "Gargoyle"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/gelatinous-cube.json",
            "label": "Gelatinous Cube"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/gelugon.json",
            "label": "Gelugon"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/ghaele.json",
            "label": "Ghaele"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/ghast.json",
            "label": "Ghast"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/ghost-commoner.json",
            "label": "Ghost Commoner"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/ghost-mage.json",
            "label": "Ghost Mage"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/ghoul.json",
            "label": "Ghoul"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/giant-anaconda.json",
            "label": "Giant Anaconda"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/giant-animated-statue.json",
            "label": "Giant Animated Statue"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/giant-bat.json",
            "label": "Giant Bat"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/giant-centipede.json",
            "label": "Giant Centipede"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/giant-eagle.json",
            "label": "Giant Eagle"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/giant-flytrap.json",
            "label": "Giant Flytrap"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/giant-frilled-lizard.json",
            "label": "Giant Frilled Lizard"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/giant-gecko.json",
            "label": "Giant Gecko"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/giant-mantis.json",
            "label": "Giant Mantis"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/giant-monitor-lizard.json",
            "label": "Giant Monitor Lizard"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/giant-moray-eel.json",
            "label": "Giant Moray Eel"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/giant-octopus.json",
            "label": "Giant Octopus"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/giant-rat.json",
            "label": "Giant Rat"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/giant-scorpion.json",
            "label": "Giant Scorpion"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/giant-stag-beetle.json",
            "label": "Giant Stag Beetle"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/giant-tarantula.json",
            "label": "Giant Tarantula"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/giant-viper.json",
            "label": "Giant Viper"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/giant-wasp.json",
            "label": "Giant Wasp"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/gibbering-mouther.json",
            "label": "Gibbering Mouther"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/gimmerling.json",
            "label": "Gimmerling"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/glabrezu.json",
            "label": "Glabrezu"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/gluttonyspawn.json",
            "label": "Gluttonyspawn"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/gnoll-cultist.json",
            "label": "Gnoll Cultist"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/gnoll-hunter.json",
            "label": "Gnoll Hunter"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/gnoll-sergeant.json",
            "label": "Gnoll Sergeant"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/goblin-commando.json",
            "label": "Goblin Commando"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/goblin-dog.json",
            "label": "Goblin Dog"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/goblin-pyro.json",
            "label": "Goblin Pyro"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/goblin-war-chanter.json",
            "label": "Goblin War Chanter"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/goblin-warrior.json",
            "label": "Goblin Warrior"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/gogiteth.json",
            "label": "Gogiteth"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/goliath-spider.json",
            "label": "Goliath Spider"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/gorilla.json",
            "label": "Gorilla"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/gourd-leshy.json",
            "label": "Gourd Leshy"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/graveknight.json",
            "label": "Graveknight"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/great-cyclops.json",
            "label": "Great Cyclops"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/great-white-shark.json",
            "label": "Great White Shark"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/greater-barghest.json",
            "label": "Greater Barghest"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/greater-nightmare.json",
            "label": "Greater Nightmare"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/greater-shadow.json",
            "label": "Greater Shadow"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/greedspawn.json",
            "label": "Greedspawn"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/green-hag.json",
            "label": "Green Hag"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/green-kobold-dragon-mage.json",
            "label": "Green Kobold Dragon Mage"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/griffon.json",
            "label": "Griffon"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/grig.json",
            "label": "Grig"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/grikkitog.json",
            "label": "Grikkitog"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/grim-reaper.json",
            "label": "Grim Reaper"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/grizzly-bear.json",
            "label": "Grizzly Bear"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/grothlut.json",
            "label": "Grothlut"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/guard-dog.json",
            "label": "Guard Dog"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/guardian-naga.json",
            "label": "Guardian Naga"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/gug.json",
            "label": "Gug"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/guthallath.json",
            "label": "Guthallath"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/harpy.json",
            "label": "Harpy"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/hell-hound.json",
            "label": "Hell Hound"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/hill-giant.json",
            "label": "Hill Giant"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/hive-mother.json",
            "label": "Hive Mother"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/hobgoblin-archer.json",
            "label": "Hobgoblin Archer"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/hobgoblin-general.json",
            "label": "Hobgoblin General"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/hobgoblin-soldier.json",
            "label": "Hobgoblin Soldier"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/homunculus.json",
            "label": "Homunculus"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/horned-archon.json",
            "label": "Horned Archon"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/hunting-spider.json",
            "label": "Hunting Spider"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/hyaenodon.json",
            "label": "Hyaenodon"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/hydra.json",
            "label": "Hydra"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/hyena.json",
            "label": "Hyena"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/ice-linnorm.json",
            "label": "Ice Linnorm"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/imp.json",
            "label": "Imp"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/invisible-stalker.json",
            "label": "Invisible Stalker"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/iron-golem.json",
            "label": "Iron Golem"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/janni.json",
            "label": "Janni"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/jinkin.json",
            "label": "Jinkin"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/jungle-drake.json",
            "label": "Jungle Drake"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/kapoacinth.json",
            "label": "Kapoacinth"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/keketar.json",
            "label": "Keketar"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/kobold-scout.json",
            "label": "Kobold Scout"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/kobold-warrior.json",
            "label": "Kobold Warrior"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/kolyarut.json",
            "label": "Kolyarut"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/kraken.json",
            "label": "Kraken"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/krooth.json",
            "label": "Krooth"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/lamia-matriarch.json",
            "label": "Lamia Matriarch"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/lamia.json",
            "label": "Lamia"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/lantern-archon-gestalt.json",
            "label": "Lantern Archon (Gestalt)"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/lantern-archon.json",
            "label": "Lantern Archon"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/leaf-leshy.json",
            "label": "Leaf Leshy"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/legion-archon.json",
            "label": "Legion Archon"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/lemure.json",
            "label": "Lemure"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/leopard.json",
            "label": "Leopard"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/lesser-death.json",
            "label": "Lesser Death"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/leukodaemon.json",
            "label": "Leukodaemon"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/lich.json",
            "label": "Lich"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/lillend.json",
            "label": "Lillend"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/lion.json",
            "label": "Lion"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/living-landslide.json",
            "label": "Living Landslide"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/living-waterfall.json",
            "label": "Living Waterfall"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/living-whirlwind.json",
            "label": "Living Whirlwind"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/living-wildfire.json",
            "label": "Living Wildfire"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/lizardfolk-defender.json",
            "label": "Lizardfolk Defender"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/lizardfolk-scout.json",
            "label": "Lizardfolk Scout"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/lizardfolk-stargazer.json",
            "label": "Lizardfolk Stargazer"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/lustspawn.json",
            "label": "Lustspawn"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/lyrakien.json",
            "label": "Lyrakien"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/mammoth.json",
            "label": "Mammoth"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/manticore.json",
            "label": "Manticore"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/marid.json",
            "label": "Marid"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/marilith.json",
            "label": "Marilith"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/medusa.json",
            "label": "Medusa"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/megalodon.json",
            "label": "Megalodon"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/megaprimatus.json",
            "label": "Megaprimatus"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/merfolk-warrior.json",
            "label": "Merfolk Warrior"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/merfolk-wavecaller.json",
            "label": "Merfolk Wavecaller"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/mimic.json",
            "label": "Mimic"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/minotaur.json",
            "label": "Minotaur"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/mitflit.json",
            "label": "Mitflit"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/morrigna.json",
            "label": "Morrigna"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/mu-spore.json",
            "label": "Mu Spore"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/mukradi.json",
            "label": "Mukradi"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/mummy-guardian.json",
            "label": "Mummy Guardian"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/mummy-pharaoh.json",
            "label": "Mummy Pharaoh"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/naiad-queen.json",
            "label": "Naiad Queen"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/naiad.json",
            "label": "Naiad"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/naunet.json",
            "label": "Naunet"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/nessian-warhound.json",
            "label": "Nessian Warhound"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/night-hag.json",
            "label": "Night Hag"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/nightmare.json",
            "label": "Nightmare"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/nilith.json",
            "label": "Nilith"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/nosoi.json",
            "label": "Nosoi"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/ochre-jelly.json",
            "label": "Ochre Jelly"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/ofalth.json",
            "label": "Ofalth"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/ogre-boss.json",
            "label": "Ogre Boss"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/ogre-glutton.json",
            "label": "Ogre Glutton"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/ogre-warrior.json",
            "label": "Ogre Warrior"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/orc-brute.json",
            "label": "Orc Brute"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/orc-warchief.json",
            "label": "Orc Warchief"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/orc-warrior.json",
            "label": "Orc Warrior"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/otyugh.json",
            "label": "Otyugh"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/owlbear.json",
            "label": "Owlbear"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/pegasus.json",
            "label": "Pegasus"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/phistophilus.json",
            "label": "Phistophilus"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/phoenix.json",
            "label": "Phoenix"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/pit-fiend.json",
            "label": "Pit Fiend"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/pixie.json",
            "label": "Pixie"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/plague-zombie.json",
            "label": "Plague Zombie"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/pleroma.json",
            "label": "Pleroma"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/poltergeist.json",
            "label": "Poltergeist"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/poracha.json",
            "label": "Poracha"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/pridespawn.json",
            "label": "Pridespawn"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/pteranodon.json",
            "label": "Pteranodon"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/pugwampi.json",
            "label": "Pugwampi"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/purple-worm.json",
            "label": "Purple Worm"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/quasit.json",
            "label": "Quasit"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/quatoid.json",
            "label": "Quatoid"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/quelaunt.json",
            "label": "Quelaunt"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/quetzalcoatlus.json",
            "label": "Quetzalcoatlus"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/raja-rakshasa.json",
            "label": "Raja Rakshasa"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/rat-swarm.json",
            "label": "Rat Swarm"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/ratfolk-grenadier.json",
            "label": "Ratfolk Grenadier"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/red-kobold-dragon-mage.json",
            "label": "Red Kobold Dragon Mage"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/redcap.json",
            "label": "Redcap"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/reefclaw.json",
            "label": "Reefclaw"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/remorhaz.json",
            "label": "Remorhaz"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/riding-dog.json",
            "label": "Riding Dog"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/riding-horse.json",
            "label": "Riding Horse"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/riding-pony.json",
            "label": "Riding Pony"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/river-drake.json",
            "label": "River Drake"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/roc.json",
            "label": "Roc"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/roper.json",
            "label": "Roper"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/rune-giant.json",
            "label": "Rune Giant"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/rust-monster.json",
            "label": "Rust Monster"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/salamander.json",
            "label": "Salamander"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/satyr.json",
            "label": "Satyr"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/scorpion-swarm.json",
            "label": "Scorpion Swarm"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/sea-devil-baron.json",
            "label": "Sea Devil Baron"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/sea-devil-brute.json",
            "label": "Sea Devil Brute"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/sea-devil-scout.json",
            "label": "Sea Devil Scout"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/sea-hag.json",
            "label": "Sea Hag"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/sea-serpent.json",
            "label": "Sea Serpent"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/sewer-ooze.json",
            "label": "Sewer Ooze"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/shadow.json",
            "label": "Shadow"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/shaitan.json",
            "label": "Shaitan"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/shambler.json",
            "label": "Shambler"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/shemhazian.json",
            "label": "Shemhazian"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/shield-archon.json",
            "label": "Shield Archon"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/shining-child.json",
            "label": "Shining Child"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/shoggoth.json",
            "label": "Shoggoth"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/shuln.json",
            "label": "Shuln"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/simurgh.json",
            "label": "Simurgh"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/skeletal-champion.json",
            "label": "Skeletal Champion"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/skeletal-giant.json",
            "label": "Skeletal Giant"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/skeletal-horse.json",
            "label": "Skeletal Horse"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/skeletal-hulk.json",
            "label": "Skeletal Hulk"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/skeleton-guard.json",
            "label": "Skeleton Guard"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/skulltaker.json",
            "label": "Skulltaker"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/skum.json",
            "label": "Skum"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/slothspawn.json",
            "label": "Slothspawn"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/slurk.json",
            "label": "Slurk"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/smilodon.json",
            "label": "Smilodon"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/snapping-flytrap.json",
            "label": "Snapping Flytrap"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/sod-hound.json",
            "label": "Sod Hound"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/soulbound-doll-chaotic-evil.json",
            "label": "Soulbound Doll (Chaotic Evil)"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/soulbound-doll-chaotic-good.json",
            "label": "Soulbound Doll (Chaotic Good)"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/soulbound-doll-chaotic-neutral.json",
            "label": "Soulbound Doll (Chaotic Neutral)"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/soulbound-doll-lawful-evil.json",
            "label": "Soulbound Doll (Lawful Evil)"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/soulbound-doll-lawful-good.json",
            "label": "Soulbound Doll (Lawful Good)"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/soulbound-doll-lawful-neutral.json",
            "label": "Soulbound Doll (Lawful Neutral)"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/soulbound-doll-neutral-evil.json",
            "label": "Soulbound Doll (Neutral Evil)"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/soulbound-doll-neutral-good.json",
            "label": "Soulbound Doll (Neutral Good)"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/soulbound-doll-true-neutral.json",
            "label": "Soulbound Doll (True Neutral)"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/sphinx.json",
            "label": "Sphinx"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/spider-swarm.json",
            "label": "Spider Swarm"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/sprite.json",
            "label": "Sprite"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/stegosaurus.json",
            "label": "Stegosaurus"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/stone-giant.json",
            "label": "Stone Giant"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/stone-golem.json",
            "label": "Stone Golem"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/stone-mauler.json",
            "label": "Stone Mauler"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/storm-giant.json",
            "label": "Storm Giant"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/storm-lord.json",
            "label": "Storm Lord"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/succubus.json",
            "label": "Succubus"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/tarn-linnorm.json",
            "label": "Tarn Linnorm"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/tengu-sneak.json",
            "label": "Tengu Sneak"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/terotricus.json",
            "label": "Terotricus"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/tidal-master.json",
            "label": "Tidal Master"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/tiefling-adept.json",
            "label": "Tiefling Adept"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/tiger.json",
            "label": "Tiger"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/tor-linnorm.json",
            "label": "Tor Linnorm"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/treerazer.json",
            "label": "Treerazer"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/triceratops.json",
            "label": "Triceratops"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/troll-king.json",
            "label": "Troll King"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/troll.json",
            "label": "Troll"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/tyrannosaurus.json",
            "label": "Tyrannosaurus"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/unicorn.json",
            "label": "Unicorn"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/unseen-servant.json",
            "label": "Unseen Servant"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/uthul.json",
            "label": "Uthul"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/vampire-bat-swarm.json",
            "label": "Vampire Bat Swarm"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/vampire-count.json",
            "label": "Vampire Count"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/vampire-mastermind.json",
            "label": "Vampire Mastermind"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/vampire-spawn-rogue.json",
            "label": "Vampire Spawn Rogue"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/veiled-master.json",
            "label": "Veiled Master"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/velociraptor.json",
            "label": "Velociraptor"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/viper.json",
            "label": "Viper"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/voidworm.json",
            "label": "Voidworm"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/vrock.json",
            "label": "Vrock"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/war-horse.json",
            "label": "War Horse"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/war-pony.json",
            "label": "War Pony"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/warg.json",
            "label": "Warg"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/warsworn.json",
            "label": "Warsworn"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/wasp-swarm.json",
            "label": "Wasp Swarm"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/water-mephit.json",
            "label": "Water Mephit"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/web-lurker.json",
            "label": "Web Lurker"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/wemmuth.json",
            "label": "Wemmuth"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/wendigo.json",
            "label": "Wendigo"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/werebear.json",
            "label": "Werebear"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/wererat.json",
            "label": "Wererat"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/werewolf.json",
            "label": "Werewolf"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/white-kobold-dragon-mage.json",
            "label": "White Kobold Dragon Mage"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/wight.json",
            "label": "Wight"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/will-o-wisp.json",
            "label": "Will-o'-Wisp"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/winter-wolf.json",
            "label": "Winter Wolf"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/wolf.json",
            "label": "Wolf"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/wraith.json",
            "label": "Wraith"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/wrathspawn.json",
            "label": "Wrathspawn"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/wyvern.json",
            "label": "Wyvern"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/xorn.json",
            "label": "Xorn"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/xulgath-leader.json",
            "label": "Xulgath Leader"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/xulgath-skulker.json",
            "label": "Xulgath Skulker"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/xulgath-warrior.json",
            "label": "Xulgath Warrior"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/yeti.json",
            "label": "Yeti"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/young-black-dragon-spellcaster.json",
            "label": "Young Black Dragon (Spellcaster)"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/young-black-dragon.json",
            "label": "Young Black Dragon"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/young-blue-dragon-spellcaster.json",
            "label": "Young Blue Dragon (Spellcaster)"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/young-blue-dragon.json",
            "label": "Young Blue Dragon"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/young-brass-dragon-spellcaster.json",
            "label": "Young Brass Dragon (Spellcaster)"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/young-brass-dragon.json",
            "label": "Young Brass Dragon"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/young-bronze-dragon-spellcaster.json",
            "label": "Young Bronze Dragon (Spellcaster)"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/young-bronze-dragon.json",
            "label": "Young Bronze Dragon"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/young-copper-dragon-spellcaster.json",
            "label": "Young Copper Dragon (Spellcaster)"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/young-copper-dragon.json",
            "label": "Young Copper Dragon"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/young-gold-dragon-spellcaster.json",
            "label": "Young Gold Dragon (Spellcaster)"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/young-gold-dragon.json",
            "label": "Young Gold Dragon"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/young-green-dragon-spellcaster.json",
            "label": "Young Green Dragon (Spellcaster)"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/young-green-dragon.json",
            "label": "Young Green Dragon"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/young-red-dragon-spellcaster.json",
            "label": "Young Red Dragon (Spellcaster)"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/young-red-dragon.json",
            "label": "Young Red Dragon"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/young-silver-dragon-spellcaster.json",
            "label": "Young Silver Dragon (Spellcaster)"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/young-silver-dragon.json",
            "label": "Young Silver Dragon"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/young-white-dragon-spellcaster.json",
            "label": "Young White Dragon (Spellcaster)"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/young-white-dragon.json",
            "label": "Young White Dragon"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/zaramuun.json",
            "label": "Zaramuun"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/zephyr-hawk.json",
            "label": "Zephyr Hawk"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/zombie-brute.json",
            "label": "Zombie Brute"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/zombie-hulk.json",
            "label": "Zombie Hulk"
          },
          {
            "path": "packs/data/pathfinder-bestiary.db/zombie-shambler.json",
            "label": "Zombie Shambler"
          }
        ]
      },
      "pathfinder-dark-archive": {
        "label": "Dark Archive Bestiary",
        "itens": [
          {
            "path": "packs/data/pathfinder-dark-archive.db/cocoon-of-lucid-potential.json",
            "label": "Cocoon of Lucid Potential"
          },
          {
            "path": "packs/data/pathfinder-dark-archive.db/k-h-w-s-echo.json",
            "label": "K. H. W.'s Echo"
          },
          {
            "path": "packs/data/pathfinder-dark-archive.db/mother-mitera.json",
            "label": "Mother Mitera"
          },
          {
            "path": "packs/data/pathfinder-dark-archive.db/quartz-spawned-shadow.json",
            "label": "Quartz-Spawned Shadow"
          },
          {
            "path": "packs/data/pathfinder-dark-archive.db/reflection.json",
            "label": "Reflection"
          },
          {
            "path": "packs/data/pathfinder-dark-archive.db/the-morrowkin.json",
            "label": "The Morrowkin"
          },
          {
            "path": "packs/data/pathfinder-dark-archive.db/the-weaver-in-dreams.json",
            "label": "The Weaver in Dreams"
          },
          {
            "path": "packs/data/pathfinder-dark-archive.db/verdures-moonflower.json",
            "label": "Verdure's Moonflower"
          }
        ]
      },
      "pfs-introductions-bestiary": {
        "label": "PFS Introductions",
        "itens": [
          {
            "path": "packs/data/pfs-introductions-bestiary.db/ghoul-pfs-intro-2.json",
            "label": "Ghoul (PFS Intro 2)"
          },
          {
            "path": "packs/data/pfs-introductions-bestiary.db/rain-in-cloudy-day.json",
            "label": "Rain In Cloudy Day"
          },
          {
            "path": "packs/data/pfs-introductions-bestiary.db/sun-scorched-shadow-drake.json",
            "label": "Sun-Scorched Shadow Drake"
          },
          {
            "path": "packs/data/pfs-introductions-bestiary.db/swamp-ooze.json",
            "label": "Swamp Ooze"
          }
        ]
      },
      "pfs-season-1-bestiary": {
        "label": "Season 1",
        "itens": [
          {
            "path": "packs/data/pfs-season-1-bestiary.db/adolescent-sea-serpent.json",
            "label": "Adolescent Sea Serpent"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/ahksiva-1-2.json",
            "label": "Ahksiva (1-2)"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/ahksiva-3-4.json",
            "label": "Ahksiva (3-4)"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/ahrkinos-3-4.json",
            "label": "Ahrkinos (3-4)"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/ahrkinos-5-6.json",
            "label": "Ahrkinos (5-6)"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/angry-fox.json",
            "label": "Angry Fox"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/animal-companion-wolf-1-2.json",
            "label": "Animal Companion (Wolf) (1-2)"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/animal-companion-wolf-3-4.json",
            "label": "Animal Companion (Wolf) (3-4)"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/annis-hag-1-06.json",
            "label": "Annis Hag (1-06)"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/bandit-disciple-1-2.json",
            "label": "Bandit Disciple (1-2)"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/bandit-disciple-3-4.json",
            "label": "Bandit Disciple (3-4)"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/bandit-lieutenant.json",
            "label": "Bandit Lieutenant"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/bandit-scout.json",
            "label": "Bandit Scout"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/barbed-bloodseeker.json",
            "label": "Barbed Bloodseeker"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/barralbus-1-2.json",
            "label": "Barralbus (1-2)"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/barralbus-3-4.json",
            "label": "Barralbus (3-4)"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/bijan-and-zaynap-ohrlavi.json",
            "label": "Bijan And Zaynap Ohrlavi"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/biloko-veteran-1-16.json",
            "label": "Biloko Veteran (1-16)"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/biloko-warrior-1-16.json",
            "label": "Biloko Warrior (1-16)"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/blue-streak-ambushers-5-6.json",
            "label": "Blue Streak Ambushers (5-6)"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/blue-streak-ambushers-7-8.json",
            "label": "Blue Streak Ambushers (7-8)"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/blue-streak-burglar.json",
            "label": "Blue Streak Burglar"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/blue-streak-mage-5-6.json",
            "label": "Blue Streak Mage (5-6)"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/blue-streak-mage-7-8.json",
            "label": "Blue Streak Mage (7-8)"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/blue-streak-sentry.json",
            "label": "Blue Streak Sentry"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/boggard-swampseer-pfs-1-24.json",
            "label": "Boggard Swampseer (PFS 1-24)"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/boggard-warrior-pfs-1-09.json",
            "label": "Boggard Warrior (PFS 1-09)"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/cairn-wight-pfs-1-20.json",
            "label": "Cairn Wight (PFS 1-20)"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/charlatan.json",
            "label": "Charlatan"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/chops-1-2.json",
            "label": "Chops (1-2)"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/chops-3-4.json",
            "label": "Chops (3-4)"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/cinder-wolf-1-2.json",
            "label": "Cinder Wolf (1-2)"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/cinder-wolf-3-4.json",
            "label": "Cinder Wolf (3-4)"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/crowd-agitator.json",
            "label": "Crowd Agitator"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/crowd-leader.json",
            "label": "Crowd Leader"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/damaged-alchemical-golem.json",
            "label": "Damaged Alchemical Golem"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/dehydrated-krooth.json",
            "label": "Dehydrated Krooth"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/desert-wind.json",
            "label": "Desert Wind"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/dilapidated-alchemical-golem.json",
            "label": "Dilapidated Alchemical Golem"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/dire-cinder-wolf.json",
            "label": "Dire Cinder Wolf"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/dire-warg.json",
            "label": "Dire Warg"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/dockhand-cultist.json",
            "label": "Dockhand Cultist"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/doctor-velshun-5-6.json",
            "label": "Doctor Velshun (5-6)"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/doctor-velshun-7-8.json",
            "label": "Doctor Velshun (7-8)"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/dorobu-1-2.json",
            "label": "Dorobu (1-2)"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/dorobu-3-4.json",
            "label": "Dorobu (3-4)"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/dryad-1-16.json",
            "label": "Dryad (1-16)"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/eerie-skeletal-giant.json",
            "label": "Eerie Skeletal Giant"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/elderly-giant-tarantula.json",
            "label": "Elderly Giant Tarantula"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/elite-boggard-swampseer-pfs-1-24-animal-staff.json",
            "label": "Elite Boggard Swampseer (PFS 1-24, Animal Staff)"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/elite-boggard-swampseer-pfs-1-24-staff.json",
            "label": "Elite Boggard Swampseer (PFS 1-24, Staff)"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/elite-duergar-taskmaster.json",
            "label": "Elite Duergar Taskmaster"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/elite-ghast-pfs-1-07.json",
            "label": "Elite Ghast (PFS 1-07)"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/elite-glass-river-midge.json",
            "label": "Elite Glass River Midge"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/elite-prefect-fist-3-4.json",
            "label": "Elite Prefect (Fist) (3-4)"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/elite-rebel.json",
            "label": "Elite Rebel"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/elite-sewer-ooze-q9.json",
            "label": "Elite Sewer Ooze (Q9)"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/elite-skeletal-giant-pfs-1-18.json",
            "label": "Elite Skeletal Giant (PFS 1-18)"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/elite-waterworks-rebel.json",
            "label": "Elite Waterworks Rebel"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/enraged-raven-swarm.json",
            "label": "Enraged Raven Swarm"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/experienced-mercenary.json",
            "label": "Experienced Mercenary"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/farmer-drystans-scarecrow-1-2.json",
            "label": "Farmer Drystan's Scarecrow (1-2)"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/farmer-drystans-scarecrow-3-4.json",
            "label": "Farmer Drystan's Scarecrow (3-4)"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/flaming-skull-skeletal-champion.json",
            "label": "Flaming Skull Skeletal Champion"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/flaming-skull-skeleton-guard.json",
            "label": "Flaming Skull Skeleton Guard"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/flesh-golem-pfs-1-25.json",
            "label": "Flesh Golem (PFS 1-25)"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/fleshforge-dreg-acid-spit.json",
            "label": "Fleshforge Dreg (Acid Spit)"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/fleshforge-dreg-breath-weapon.json",
            "label": "Fleshforge Dreg (Breath Weapon)"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/fleshforge-dreg-leaping-charge.json",
            "label": "Fleshforge Dreg (Leaping Charge)"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/fleshforge-dreg-reach.json",
            "label": "Fleshforge Dreg (Reach)"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/fleshforge-dreg-roots.json",
            "label": "Fleshforge Dreg (Roots)"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/fleshforge-dreg-shield.json",
            "label": "Fleshforge Dreg (Shield)"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/fleshforge-prototype-acid-spit.json",
            "label": "Fleshforge Prototype (Acid Spit)"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/fleshforge-prototype-breath-weapon.json",
            "label": "Fleshforge Prototype (Breath Weapon)"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/fleshforge-prototype-leaping-charge.json",
            "label": "Fleshforge Prototype (Leaping Charge)"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/fleshforge-prototype-reach.json",
            "label": "Fleshforge Prototype (Reach)"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/fleshforge-prototype-roots.json",
            "label": "Fleshforge Prototype (Roots)"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/fleshforge-prototype-shield.json",
            "label": "Fleshforge Prototype (Shield)"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/frog-swarm.json",
            "label": "Frog Swarm"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/ghost-of-diggen-thrune-1-2.json",
            "label": "Ghost Of Diggen Thrune (1-2)"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/ghost-of-diggen-thrune-3-4.json",
            "label": "Ghost Of Diggen Thrune (3-4)"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/giant-centipede-pfs-1-03.json",
            "label": "Giant Centipede (PFS 1-03)"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/giant-osprey.json",
            "label": "Giant Osprey"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/giant-short-faced-bear.json",
            "label": "Giant Short-faced Bear"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/giant-shrew.json",
            "label": "Giant Shrew"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/glass-river-midge.json",
            "label": "Glass River Midge"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/goblin-skeleton.json",
            "label": "Goblin Skeleton"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/goblin-warrior-pfs-1-01.json",
            "label": "Goblin Warrior (PFS 1-01)"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/great-white-shark-pfs-1-12.json",
            "label": "Great White Shark (PFS 1-12)"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/greater-metallic-sod-hound.json",
            "label": "Greater Metallic Sod Hound"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/greater-shadow-wisp.json",
            "label": "Greater Shadow Wisp"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/greater-steel-mephit.json",
            "label": "Greater Steel Mephit"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/groetuss-chosen-1-2.json",
            "label": "Groetus's Chosen (1-2)"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/groetuss-chosen-3-4.json",
            "label": "Groetus's Chosen (3-4)"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/guard-captain.json",
            "label": "Guard Captain"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/guard-pfs-1-17.json",
            "label": "Guard (PFS 1-17)"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/guard.json",
            "label": "Guard"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/gwibble-1-2.json",
            "label": "Gwibble (1-2)"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/gwibble-3-4.json",
            "label": "Gwibble (3-4)"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/halfling-druid-1-2.json",
            "label": "Halfling Druid (1-2)"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/halfling-druid-3-4.json",
            "label": "Halfling Druid (3-4)"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/harsus-1-2.json",
            "label": "Harsus (1-2)"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/harsus-3-4.json",
            "label": "Harsus (3-4)"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/hogweed-leshy-1-2.json",
            "label": "Hogweed Leshy (1-2)"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/hogweed-leshy-3-4.json",
            "label": "Hogweed Leshy (3-4)"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/house-cat.json",
            "label": "House Cat"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/human-bandit-3-4.json",
            "label": "Human Bandit (3-4)"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/human-bandit-5-6.json",
            "label": "Human Bandit (5-6)"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/human-bandit-pfs-1-06.json",
            "label": "Human Bandit (PFS 1-06)"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/hungry-blade-apprentice.json",
            "label": "Hungry Blade Apprentice"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/hungry-blade-recruit.json",
            "label": "Hungry Blade Recruit"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/iloise-5-6.json",
            "label": "Iloise (5-6)"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/iloise-7-8.json",
            "label": "Iloise (7-8)"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/immature-giant-gecko.json",
            "label": "Immature Giant Gecko"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/injured-sewer-ooze.json",
            "label": "Injured Sewer Ooze"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/injured-weak-otyugh.json",
            "label": "Injured Weak Otyugh"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/jinkin-pfs-1-17.json",
            "label": "Jinkin (PFS 1-17)"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/kanker.json",
            "label": "Kanker"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/keff-the-lion-1-2.json",
            "label": "Keff The Lion (1-2)"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/keff-the-lion-3-4.json",
            "label": "Keff The Lion (3-4)"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/kip-the-druid-1-2.json",
            "label": "Kip The Druid (1-2)"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/kip-the-druid-3-4.json",
            "label": "Kip The Druid (3-4)"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/kobold-dragon-mage-1-14.json",
            "label": "Kobold Dragon Mage (1-14)"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/kobold-dragon-mage-pfs-1-11.json",
            "label": "Kobold Dragon Mage (PFS 1-11)"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/kobold-dragon-spellweaver.json",
            "label": "Kobold Dragon Spellweaver"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/kobold-scout-1-14.json",
            "label": "Kobold Scout (1-14)"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/kobold-scout-pfs-1-11.json",
            "label": "Kobold Scout (PFS 1-11)"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/kobold-warrior-1-14.json",
            "label": "Kobold Warrior (1-14)"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/kobold-warrior-pfs-1-11.json",
            "label": "Kobold Warrior (PFS 1-11)"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/krooth-hatchlings.json",
            "label": "Krooth Hatchlings"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/larraz-virtanne.json",
            "label": "Larraz Virtanne"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/lelzeshin-tier-3-4.json",
            "label": "Lelzeshin (Tier 3-4)"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/lelzeshin-tier-5-6.json",
            "label": "Lelzeshin (Tier 5-6)"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/leopard-1-14.json",
            "label": "Leopard (1-14)"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/leshy-crafter-1-2.json",
            "label": "Leshy Crafter (1-2)"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/leshy-crafter-3-4.json",
            "label": "Leshy Crafter (3-4)"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/lesser-giant-short-faced-bear.json",
            "label": "Lesser Giant Short-faced Bear"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/lesser-guardian-statue.json",
            "label": "Lesser Guardian Statue"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/lion.json",
            "label": "Lion"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/little-zura-1-2.json",
            "label": "Little Zura (1-2)"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/little-zura-3-4.json",
            "label": "Little Zura (3-4)"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/loyal-giant-fox.json",
            "label": "Loyal Giant Fox"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/manifestation-of-qxal-3-4.json",
            "label": "Manifestation of Qxal (3-4)"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/manifestation-of-qxal-5-6.json",
            "label": "Manifestation of Qxal (5-6)"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/marcon-tinol-1-2.json",
            "label": "Marcon Tinol (1-2)"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/marcon-tinol-3-4.json",
            "label": "Marcon Tinol (3-4)"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/meleeka-sanvara-1-2.json",
            "label": "Meleeka Sanvara (1-2)"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/meleeka-sanvara-3-4.json",
            "label": "Meleeka Sanvara (3-4)"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/mercenary.json",
            "label": "Mercenary"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/metallic-sod-hound.json",
            "label": "Metallic Sod Hound"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/mirrored-lelzeshin-tier-3-4.json",
            "label": "Mirrored Lelzeshin (Tier 3-4)"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/mirrored-lelzeshin-tier-5-6.json",
            "label": "Mirrored Lelzeshin (Tier 5-6)"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/mitflit-pfs-1-02.json",
            "label": "Mitflit (PFS 1-02)"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/mitflit-sneak.json",
            "label": "Mitflit Sneak"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/mountain-goat.json",
            "label": "Mountain Goat"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/mr-chitters-5-6.json",
            "label": "Mr. Chitters (5-6)"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/mr-chitters-7-8.json",
            "label": "Mr. Chitters (7-8)"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/mummy-brute.json",
            "label": "Mummy Brute"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/mummy-shambler.json",
            "label": "Mummy Shambler"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/muraxi-3-4.json",
            "label": "Muraxi (3-4)"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/muraxi-5-6.json",
            "label": "Muraxi (5-6)"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/nalla-rebel-leader-1-2.json",
            "label": "Nalla, Rebel Leader (1-2)"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/nalla-rebel-leader-3-4.json",
            "label": "Nalla, Rebel Leader (3-4)"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/nashaxian-the-angered.json",
            "label": "Nashaxian The Angered"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/nashaxian-the-bored.json",
            "label": "Nashaxian The Bored"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/neidre-fliavazzana-3-4.json",
            "label": "Neidre Fliavazzana (3-4)"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/neidre-fliavazzana-5-6.json",
            "label": "Neidre Fliavazzana (5-6)"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/nevashi-5-6.json",
            "label": "Nevashi (5-6)"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/nevashi-7-8.json",
            "label": "Nevashi (7-8)"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/offended-gambler.json",
            "label": "Offended Gambler"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/offended-high-roller.json",
            "label": "Offended High Roller"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/ogre-glutton-pfs-1-05.json",
            "label": "Ogre Glutton (PFS 1-05)"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/ogre.json",
            "label": "Ogre"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/orc-alchemist.json",
            "label": "Orc Alchemist"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/osprey.json",
            "label": "Osprey"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/palace-guard-pfs-1-17.json",
            "label": "Palace Guard (PFS 1-17)"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/paravaax-3-4.json",
            "label": "Paravaax (3-4)"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/paravaax-5-6.json",
            "label": "Paravaax (5-6)"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/pine-brute.json",
            "label": "Pine Brute"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/plum-leshy-1-2.json",
            "label": "Plum Leshy (1-2)"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/plum-leshy-3-4.json",
            "label": "Plum Leshy (3-4)"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/prefect-electrowhip-3-4.json",
            "label": "Prefect (Electrowhip) (3-4)"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/prefect-electrowhip-5-6.json",
            "label": "Prefect (Electrowhip) (5-6)"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/prefect-fist-3-4.json",
            "label": "Prefect (Fist) (3-4)"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/prefect-fist-5-6.json",
            "label": "Prefect (Fist) (5-6)"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/ptiro-valner-1-2.json",
            "label": "Ptiro Valner (1-2)"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/ptiro-valner-3-4.json",
            "label": "Ptiro Valner (3-4)"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/rabid-squirrel-swarm.json",
            "label": "Rabid Squirrel Swarm"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/ralthiss-1-2.json",
            "label": "Ralthiss (1-2)"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/ralthiss-3-4.json",
            "label": "Ralthiss (3-4)"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/raven-swarm-1-05.json",
            "label": "Raven Swarm (1-05)"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/ravenous-giant-centipede.json",
            "label": "Ravenous Giant Centipede"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/reast-mycer-1-2.json",
            "label": "Reast Mycer (1-2)"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/reast-mycer-3-4.json",
            "label": "Reast Mycer (3-4)"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/rebel-brute.json",
            "label": "Rebel Brute"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/rebel.json",
            "label": "Rebel"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/reefclaw-pfs-1-12.json",
            "label": "Reefclaw (PFS 1-12)"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/reefclaw-spawn.json",
            "label": "Reefclaw Spawn"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/ruffian-q11.json",
            "label": "Ruffian (Q11)"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/ruffian.json",
            "label": "Ruffian"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/sea-devil-invader.json",
            "label": "Sea Devil Invader"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/seaborn-captain.json",
            "label": "Seaborn Captain"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/seaborn-fisher.json",
            "label": "Seaborn Fisher"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/shadow-wisp.json",
            "label": "Shadow Wisp"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/skeletal-gladiator.json",
            "label": "Skeletal Gladiator"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/skeletal-mage.json",
            "label": "Skeletal Mage"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/skeletal-mount.json",
            "label": "Skeletal Mount"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/skeleton-captain.json",
            "label": "Skeleton Captain"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/skeleton-corporal.json",
            "label": "Skeleton Corporal"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/skeleton-soldier.json",
            "label": "Skeleton Soldier"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/spirit-guardian-statue.json",
            "label": "Spirit Guardian Statue"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/squirrel-swarm-1-04.json",
            "label": "Squirrel Swarm (1-04)"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/statue-of-set.json",
            "label": "Statue Of Set"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/steel-mephit.json",
            "label": "Steel Mephit"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/storm-acolyte.json",
            "label": "Storm Acolyte"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/storm-warrior-priest.json",
            "label": "Storm Warrior-Priest"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/synthetic-khismar-5-6.json",
            "label": "Synthetic Khismar (5-6)"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/synthetic-khismar-7-8.json",
            "label": "Synthetic Khismar (7-8)"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/technic-zombie-3-4.json",
            "label": "Technic Zombie (3-4)"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/technic-zombie-5-6.json",
            "label": "Technic Zombie (5-6)"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/the-ascendant-3-4.json",
            "label": "The Ascendant (3-4)"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/the-ascendant-5-6.json",
            "label": "The Ascendant (5-6)"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/thorned-cocoon-3-4.json",
            "label": "Thorned Cocoon (3-4)"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/thorned-cocoon-5-6.json",
            "label": "Thorned Cocoon (5-6)"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/tough-giant-shrew.json",
            "label": "Tough Giant Shrew"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/tough-mountain-goat.json",
            "label": "Tough Mountain Goat"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/toxic-snapjaw-3-4.json",
            "label": "Toxic Snapjaw (3-4)"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/toxic-snapjaw-5-6.json",
            "label": "Toxic Snapjaw (5-6)"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/unkillable-zombie-brute-pfs-1-01.json",
            "label": "Unkillable Zombie Brute (PFS 1-01)"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/unkillable-zombie-brute-pfs-1-13.json",
            "label": "Unkillable Zombie Brute (PFS 1-13)"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/vengeant-thorn-1-2.json",
            "label": "Vengeant Thorn (1-2)"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/vengeant-thorn-3-4.json",
            "label": "Vengeant Thorn (3-4)"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/veteran-guard-captain.json",
            "label": "Veteran Guard Captain"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/vicious-vulpine.json",
            "label": "Vicious Vulpine"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/vigilant-guard.json",
            "label": "Vigilant Guard"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/voidworm-ouroboros.json",
            "label": "Voidworm Ouroboros"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/waterworks-rebel.json",
            "label": "Waterworks Rebel"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/weak-arboreal-warden.json",
            "label": "Weak Arboreal Warden"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/weak-ceustodaemon-pfs-1-01.json",
            "label": "Weak Ceustodaemon (PFS 1-01)"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/weak-green-hag.json",
            "label": "Weak Green Hag"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/weak-soulbound-homunculus.json",
            "label": "Weak Soulbound Homunculus"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/weak-spider-swarm.json",
            "label": "Weak Spider Swarm"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/weak-zephyr-hawk-pfs-1-24.json",
            "label": "Weak Zephyr Hawk (PFS 1-24)"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/webhekiz-3-4.json",
            "label": "Webhekiz (3-4)"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/webhekiz-5-6.json",
            "label": "Webhekiz (5-6)"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/witchwyrd-pfs-1-21.json",
            "label": "Witchwyrd (PFS 1-21)"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/wounded-orc-brute.json",
            "label": "Wounded Orc Brute"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/young-bloodseeker-swarm.json",
            "label": "Young Bloodseeker Swarm"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/young-sea-serpent.json",
            "label": "Young Sea Serpent"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/zatqualmish-3-4.json",
            "label": "Zatqualmish (3-4)"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/zatqualmish-5-6.json",
            "label": "Zatqualmish (5-6)"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/zombie-brute-pfs-1-18.json",
            "label": "Zombie Brute (PFS 1-18)"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/zombie-charger.json",
            "label": "Zombie Charger"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/zombie-flesh-golem-3-4.json",
            "label": "'Zombie' Flesh Golem (3-4)"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/zombie-flesh-golem-5-6.json",
            "label": "'Zombie' Flesh Golem (5-6)"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/zombie-minihulk.json",
            "label": "Zombie Minihulk"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/zombie-riding-horse.json",
            "label": "Zombie Riding Horse"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/zombie-shambler-pfs-1-03.json",
            "label": "Zombie Shambler (PFS 1-03)"
          },
          {
            "path": "packs/data/pfs-season-1-bestiary.db/zombie-warhorse.json",
            "label": "Zombie Warhorse"
          }
        ]
      },
      "pfs-season-2-bestiary": {
        "label": "Season 2",
        "itens": [
          {
            "path": "packs/data/pfs-season-2-bestiary.db/abyssal-fungi.json",
            "label": "Abyssal Fungi"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/anatomical-model-1-2.json",
            "label": "Anatomical Model (1-2)"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/anatomical-model-3-4.json",
            "label": "Anatomical Model (3-4)"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/animated-guardian-warrior.json",
            "label": "Animated Guardian Warrior"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/animated-guardian.json",
            "label": "Animated Guardian"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/archis-peers-1-2.json",
            "label": "Archis Peers (1-2)"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/archis-peers-3-4.json",
            "label": "Archis Peers (3-4)"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/artennod-raike-3-4.json",
            "label": "Artennod Raike (3-4)"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/artennod-raike-5-6.json",
            "label": "Artennod Raike (5-6)"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/ash-archer.json",
            "label": "Ash Archer"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/ash-skeleton-1-2.json",
            "label": "Ash Skeleton (1-2)"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/ash-skeleton-3-4.json",
            "label": "Ash Skeleton (3-4)"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/aspis-guard.json",
            "label": "Aspis Guard"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/aspis-veteran-guard.json",
            "label": "Aspis Veteran Guard"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/awakened-ball-python.json",
            "label": "Awakened Ball Python"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/awakened-giant-chameleon.json",
            "label": "Awakened Giant Chameleon"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/awakened-giant-frilled-lizard.json",
            "label": "Awakened Giant Frilled Lizard"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/awakened-megalania.json",
            "label": "Awakened Megalania"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/baron-utomo-3-4.json",
            "label": "Baron Utomo (3-4)"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/baron-utomo-5-6.json",
            "label": "Baron Utomo (5-6)"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/barrow-quasit.json",
            "label": "Barrow Quasit"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/blighted-fungus-leshy.json",
            "label": "Blighted Fungus Leshy"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/blighted-leaf-leshy.json",
            "label": "Blighted Leaf Leshy"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/bloodthirsty-razortoothed-shark.json",
            "label": "Bloodthirsty Razortoothed Shark"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/brittle-ravener-husk.json",
            "label": "Brittle Ravener Husk"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/brittle-skeletal-horse.json",
            "label": "Brittle Skeletal Horse"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/bruorsivi-mandragora.json",
            "label": "Bruorsivi Mandragora"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/burned-out-efreet.json",
            "label": "Burned-Out Efreet"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/burning-sun-orc-5-6.json",
            "label": "Burning Sun Orc (5-6)"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/burning-sun-orc-7-8.json",
            "label": "Burning Sun Orc (7-8)"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/chained-drained-troll.json",
            "label": "Chained Drained Troll"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/chained-troll.json",
            "label": "Chained Troll"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/charmed-crab.json",
            "label": "Charmed Crab"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/chesjilawa-jadwiga-karina-5-6.json",
            "label": "Chesjilawa Jadwiga Karina (5-6)"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/chesjilawa-jadwiga-karina-7-8.json",
            "label": "Chesjilawa Jadwiga Karina (7-8)"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/clouded-quartz-5-6.json",
            "label": "Clouded Quartz (5-6)"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/clouded-quartz-7-8.json",
            "label": "Clouded Quartz (7-8)"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/cobbleswarm-b5.json",
            "label": "Cobbleswarm (B5)"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/commoner-pfs-2-13.json",
            "label": "Commoner (PFS 2-13)"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/corrupted-wildfire-3-4.json",
            "label": "Corrupted Wildfire (3-4)"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/corrupted-wildfire-5-6.json",
            "label": "Corrupted Wildfire (5-6)"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/corvius-vayn-5-6.json",
            "label": "Corvius Vayn (5-6)"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/corvius-vayn-7-8.json",
            "label": "Corvius Vayn (7-8)"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/crumbling-ravener-husk.json",
            "label": "Crumbling Ravener Husk"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/cyclops-bodak.json",
            "label": "Cyclops Bodak"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/daughter-of-cocytus-enforcer.json",
            "label": "Daughter Of Cocytus Enforcer"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/daughter-of-cocytus-grunt.json",
            "label": "Daughter of Cocytus Grunt"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/daughter-of-cocytus-tough.json",
            "label": "Daughter of Cocytus Tough"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/debilitated-bulette.json",
            "label": "Debilitated Bulette"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/demoniac-spirit-7-8.json",
            "label": "Demoniac Spirit (7-8)"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/demoniac-spirit-9-10.json",
            "label": "Demoniac Spirit (9-10)"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/demonplague-zombie.json",
            "label": "Demonplague Zombie"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/desiccated-giant-crawling-hand.json",
            "label": "Desiccated Giant Crawling Hand"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/disciple-of-urxehl-7-8.json",
            "label": "Disciple of Urxehl (7-8)"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/disciple-of-urxehl-9-10.json",
            "label": "Disciple of Urxehl (9-10)"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/dragon-forest-rot.json",
            "label": "Dragon Forest Rot"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/drandle-dreng-7-8.json",
            "label": "Drandle Dreng (7-8)"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/drandle-dreng-9-10.json",
            "label": "Drandle Dreng (9-10)"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/draugr-raider.json",
            "label": "Draugr Raider"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/duergar-raider.json",
            "label": "Duergar Raider"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/elite-anatomical-model-3-4.json",
            "label": "Elite Anatomical Model (3-4)"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/ember-fox-pfs-2-14.json",
            "label": "Ember Fox (PFS 2-14)"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/exploding-skeleton-guard.json",
            "label": "Exploding Skeleton Guard"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/famished-mimic.json",
            "label": "Famished Mimic"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/fence-pfs-2-00.json",
            "label": "Fence (PFS 2-00)"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/ferocious-zombie-grindylow.json",
            "label": "Ferocious Zombie Grindylow"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/fire-eye-cyclops-zombie-1-2.json",
            "label": "Fire-Eye Cyclops Zombie (1-2)"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/fire-eye-cyclops-zombie-3-4.json",
            "label": "Fire-Eye Cyclops Zombie (3-4)"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/firestorm-brimorak.json",
            "label": "Firestorm Brimorak"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/flaming-eye-1-2.json",
            "label": "Flaming Eye (1-2)"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/flaming-eye-3-4.json",
            "label": "Flaming Eye (3-4)"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/flaming-moss-monster.json",
            "label": "Flaming Moss Monster"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/frost-troll-hunter.json",
            "label": "Frost Troll Hunter"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/frostbitten-trollhound.json",
            "label": "Frostbitten Trollhound"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/giant-worker-ant.json",
            "label": "Giant Worker Ant"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/glorzia.json",
            "label": "Glorzia"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/goblin-skeleton.json",
            "label": "Goblin Skeleton"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/greeleep-3-4.json",
            "label": "Greeleep (3-4)"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/greeleep-5-6.json",
            "label": "Greeleep (5-6)"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/hand-of-urxehl-7-8.json",
            "label": "Hand Of Urxehl (7-8)"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/hand-of-urxehl-9-10.json",
            "label": "Hand Of Urxehl (9-10)"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/hobgoblin-skeleton.json",
            "label": "Hobgoblin Skeleton"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/hunting-spider-pfs-2-18.json",
            "label": "Hunting Spider (PFS 2-18)"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/insidious-dragon-forest-rot.json",
            "label": "Insidious Dragon Forest Rot"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/iverri-3-4.json",
            "label": "Iverri (3-4)"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/iverri-5-6.json",
            "label": "Iverri (5-6)"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/jinkin-pfs-2-00.json",
            "label": "Jinkin (PFS 2-00)"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/joyful-planar-nixie.json",
            "label": "Joyful Planar Nixie"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/kareida.json",
            "label": "Kareida"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/kayajima-boar.json",
            "label": "Kayajima Boar"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/kayajima-daeodon.json",
            "label": "Kayajima Daeodon"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/kayajima-guardian-dogu-3-4.json",
            "label": "Kayajima Guardian Dogu (3-4)"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/kayajima-guardian-dogu-5-6.json",
            "label": "Kayajima Guardian Dogu (5-6)"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/kobold-warrior-pfs-2-11.json",
            "label": "Kobold Warrior (PFS 2-11)"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/leaded-skeleton.json",
            "label": "Leaded Skeleton"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/lesser-bruorsivi-mandragora.json",
            "label": "Lesser Bruorsivi Mandragora"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/lesser-skeletal-cyclops.json",
            "label": "Lesser Skeletal Cyclops"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/lion-pfs-2-13.json",
            "label": "Lion (PFS 2-13)"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/master-sergeant-morgroar-3-4.json",
            "label": "Master Sergeant Morgroar (3-4)"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/master-sergeant-morgroar-5-6.json",
            "label": "Master Sergeant Morgroar (5-6)"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/mephit-swarm-5-6.json",
            "label": "Mephit Swarm (5-6)"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/mephit-swarm-7-8.json",
            "label": "Mephit Swarm (7-8)"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/mercenary-trapper-1-2.json",
            "label": "Mercenary Trapper (1-2)"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/mercenary-trapper-3-4.json",
            "label": "Mercenary Trapper (3-4)"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/mercenary-wizard-1-2.json",
            "label": "Mercenary Wizard (1-2)"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/mercenary-wizard-3-4.json",
            "label": "Mercenary Wizard (3-4)"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/mishka-the-bear-5-6.json",
            "label": "Mishka The Bear (5-6)"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/mishka-the-bear-7-8.json",
            "label": "Mishka The Bear (7-8)"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/mother-forsythe-3-4.json",
            "label": "Mother Forsythe (3-4)"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/mother-forsythe-5-6.json",
            "label": "Mother Forsythe (5-6)"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/murta-kronniksdottir-3-4.json",
            "label": "Murta Kronniksdottir (3-4)"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/murta-kronniksdottir-5-6.json",
            "label": "Murta Kronniksdottir (5-6)"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/mutated-trollhound.json",
            "label": "Mutated Trollhound"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/nuglub-pfs-2-00.json",
            "label": "Nuglub (PFS 2-00)"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/ogre-spider-pfs-2-18.json",
            "label": "Ogre Spider (PFS 2-18)"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/ogthup-5-6.json",
            "label": "Ogthup (5-6)"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/ogthup-7-8.json",
            "label": "Ogthup (7-8)"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/onyx-alliance-agent-5-6.json",
            "label": "Onyx Alliance Agent (5-6)"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/onyx-alliance-agent-7-8.json",
            "label": "Onyx Alliance Agent (7-8)"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/perizia-5-6.json",
            "label": "Perizia (5-6)"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/perizia-7-8.json",
            "label": "Perizia (7-8)"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/pixie-pfs-2-00.json",
            "label": "Pixie (PFS 2-00)"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/plague-zombie-pfs-2-15.json",
            "label": "Plague Zombie (PFS 2-15)"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/planar-nixie.json",
            "label": "Planar Nixie"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/quickling-pfs-2-00.json",
            "label": "Quickling (PFS 2-00)"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/qxal-the-thorned-monarch.json",
            "label": "Qxal, The Thorned Monarch"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/ragewight-3-4.json",
            "label": "Ragewight (3-4)"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/ragewight-5-6.json",
            "label": "Ragewight (5-6)"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/razortoothed-shark.json",
            "label": "Razortoothed Shark"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/reinforced-animated-guardian.json",
            "label": "Reinforced Animated Guardian"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/run-down-efreet.json",
            "label": "Run-Down Efreet"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/russian-soldier-5-6.json",
            "label": "Russian Soldier (5-6)"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/russian-soldier-7-8.json",
            "label": "Russian Soldier (7-8)"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/saddleback-bunyip.json",
            "label": "Saddleback Bunyip"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/scorched-cavern-troll.json",
            "label": "Scorched Cavern Troll"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/scorched-earth-mephit.json",
            "label": "Scorched Earth Mephit"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/scorched-earth-orc-clipper-5-6.json",
            "label": "Scorched Earth Orc (Clipper) (5-6)"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/scorched-earth-orc-clipper-7-8.json",
            "label": "Scorched Earth Orc (Clipper) (7-8)"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/scorched-earth-orc-scout-5-6.json",
            "label": "Scorched Earth Orc (Scout) (5-6)"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/scorched-earth-orc-scout-7-8.json",
            "label": "Scorched Earth Orc (Scout) (7-8)"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/scorched-earth-orc-sharpshooter-5-6.json",
            "label": "Scorched Earth Orc (Sharpshooter) (5-6)"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/scorched-earth-orc-sharpshooter-7-8.json",
            "label": "Scorched Earth Orc (Sharpshooter) (7-8)"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/sea-devil-impaler.json",
            "label": "Sea Devil Impaler"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/semyon-5-6.json",
            "label": "Semyon (5-6)"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/semyon-7-8.json",
            "label": "Semyon (7-8)"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/sezruth-1-2.json",
            "label": "Sezruth (1-2)"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/sezruth-3-4.json",
            "label": "Sezruth (3-4)"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/silaqui-3-4.json",
            "label": "Silaqui (3-4)"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/silaqui-5-6.json",
            "label": "Silaqui (5-6)"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/skeletal-cyclops.json",
            "label": "Skeletal Cyclops"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/skeletal-reveler.json",
            "label": "Skeletal Reveler"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/small-opossum.json",
            "label": "Small Opossum"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/smoldering-moss-monster.json",
            "label": "Smoldering Moss Monster"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/solvatar-caryg.json",
            "label": "Solvatar Caryg"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/spark-troll-1-2.json",
            "label": "Spark Troll (1-2)"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/spark-troll-3-4.json",
            "label": "Spark Troll (3-4)"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/ssalarn.json",
            "label": "Ssalarn"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/starved-sea-drake.json",
            "label": "Starved Sea Drake"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/storm-bear-1-2.json",
            "label": "Storm Bear (1-2)"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/storm-bear-3-4.json",
            "label": "Storm Bear (3-4)"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/strak-5-6.json",
            "label": "Strak (5-6)"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/strak-7-8.json",
            "label": "Strak (7-8)"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/teflar.json",
            "label": "Teflar"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/tewakam-nekotek-3-4.json",
            "label": "Tewakam Nekotek (3-4)"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/tewakam-nekotek-5-6.json",
            "label": "Tewakam Nekotek (5-6)"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/the-saboteur-3-4.json",
            "label": "The Saboteur (3-4)"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/the-saboteur-5-6.json",
            "label": "The Saboteur (5-6)"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/the-scholar-of-sorts-1-2.json",
            "label": "The Scholar of Sorts (1-2)"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/the-scholar-of-sorts-3-4.json",
            "label": "The Scholar of Sorts (3-4)"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/tough-leaded-skeleton.json",
            "label": "Tough Leaded Skeleton"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/tough-skeletal-reveler.json",
            "label": "Tough Skeletal Reveler"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/tough-small-opossum.json",
            "label": "Tough Small Opossum"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/twigjack-pfs-2-08.json",
            "label": "Twigjack (PFS 2-08)"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/unkillable-zombie-shambler.json",
            "label": "Unkillable Zombie Shambler"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/urkhas-3-4.json",
            "label": "Urkhas (3-4)"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/urkhas-5-6.json",
            "label": "Urkhas (5-6)"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/usij-acolyte.json",
            "label": "Usij Acolyte"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/usij-cultist.json",
            "label": "Usij Cultist"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/valgomorus-1-2.json",
            "label": "Valgomorus (1-2)"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/valgomorus-3-4.json",
            "label": "Valgomorus (3-4)"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/vermlek-centaur-3-4.json",
            "label": "Vermlek Centaur (3-4)"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/vermlek-centaur-5-6.json",
            "label": "Vermlek Centaur (5-6)"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/weak-lion.json",
            "label": "Weak Lion"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/weak-mist-stalker.json",
            "label": "Weak Mist Stalker"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/weak-mudwretch.json",
            "label": "Weak Mudwretch"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/weak-sea-devil-scout.json",
            "label": "Weak Sea Devil Scout"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/weakened-abyssal-fungi.json",
            "label": "Weakened Abyssal Fungi"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/wind-malevolent-3-4.json",
            "label": "Wind Malevolent (3-4)"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/wind-malevolent-5-6.json",
            "label": "Wind Malevolent (5-6)"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/wishbound-belker-5-6.json",
            "label": "Wishbound Belker (5-6)"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/wishbound-belker-7-8.json",
            "label": "Wishbound Belker (7-8)"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/wishbound-mist-stalker-5-6.json",
            "label": "Wishbound Mist Stalker (5-6)"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/wishbound-mist-stalker-7-8.json",
            "label": "Wishbound Mist Stalker (7-8)"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/wounded-dragon-turtle-3-4.json",
            "label": "Wounded Dragon Turtle (3-4)"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/wounded-dragon-turtle-5-6.json",
            "label": "Wounded Dragon Turtle (5-6)"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/yeth-warbeast.json",
            "label": "Yeth Warbeast"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/ygracix.json",
            "label": "Ygracix"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/young-ahuizotl.json",
            "label": "Young Ahuizotl"
          },
          {
            "path": "packs/data/pfs-season-2-bestiary.db/zombie-grindylow.json",
            "label": "Zombie Grindylow"
          }
        ]
      },
      "pfs-season-3-bestiary": {
        "label": "Season 3",
        "itens": [
          {
            "path": "packs/data/pfs-season-3-bestiary.db/advanced-eltha-embercall-9-10-eltha-embercall-11-12.json",
            "label": "Advanced Eltha Embercall (9-10)/Eltha Embercall (11-12)"
          },
          {
            "path": "packs/data/pfs-season-3-bestiary.db/alchemy-gorged-giant-leech.json",
            "label": "Alchemy-Gorged Giant Leech"
          },
          {
            "path": "packs/data/pfs-season-3-bestiary.db/animated-blade-pfs-3-99.json",
            "label": "Animated Blade (PFS 3-99)"
          },
          {
            "path": "packs/data/pfs-season-3-bestiary.db/animated-cookware.json",
            "label": "Animated Cookware"
          },
          {
            "path": "packs/data/pfs-season-3-bestiary.db/animated-full-plate-pfs-3-99.json",
            "label": "Animated Full Plate (PFS 3-99)"
          },
          {
            "path": "packs/data/pfs-season-3-bestiary.db/animated-knickknack-1-2.json",
            "label": "Animated Knickknack (1-2)"
          },
          {
            "path": "packs/data/pfs-season-3-bestiary.db/animated-knickknack-3-4.json",
            "label": "Animated Knickknack (3-4)"
          },
          {
            "path": "packs/data/pfs-season-3-bestiary.db/arabuk-yearling.json",
            "label": "Arabuk Yearling"
          },
          {
            "path": "packs/data/pfs-season-3-bestiary.db/arabuk.json",
            "label": "Arabuk"
          },
          {
            "path": "packs/data/pfs-season-3-bestiary.db/arisept-7-8.json",
            "label": "Arisept (7-8)"
          },
          {
            "path": "packs/data/pfs-season-3-bestiary.db/arisept-9-10.json",
            "label": "Arisept (9-10)"
          },
          {
            "path": "packs/data/pfs-season-3-bestiary.db/aspis-agent.json",
            "label": "Aspis Agent"
          },
          {
            "path": "packs/data/pfs-season-3-bestiary.db/aspis-bulwark.json",
            "label": "Aspis Bulwark"
          },
          {
            "path": "packs/data/pfs-season-3-bestiary.db/aspis-defender.json",
            "label": "Aspis Defender"
          },
          {
            "path": "packs/data/pfs-season-3-bestiary.db/aspis-enforcer.json",
            "label": "Aspis Enforcer"
          },
          {
            "path": "packs/data/pfs-season-3-bestiary.db/aspis-oppressor.json",
            "label": "Aspis Oppressor"
          },
          {
            "path": "packs/data/pfs-season-3-bestiary.db/aspis-recruit.json",
            "label": "Aspis Recruit"
          },
          {
            "path": "packs/data/pfs-season-3-bestiary.db/aspis-striker.json",
            "label": "Aspis Striker"
          },
          {
            "path": "packs/data/pfs-season-3-bestiary.db/aspis-usurper.json",
            "label": "Aspis Usurper"
          },
          {
            "path": "packs/data/pfs-season-3-bestiary.db/aspis-warden.json",
            "label": "Aspis Warden"
          },
          {
            "path": "packs/data/pfs-season-3-bestiary.db/aydrian-thrune-3-4.json",
            "label": "Aydrian Thrune (3-4)"
          },
          {
            "path": "packs/data/pfs-season-3-bestiary.db/aydrian-thrune-5-6.json",
            "label": "Aydrian Thrune (5-6)"
          },
          {
            "path": "packs/data/pfs-season-3-bestiary.db/bergworm-tyrant.json",
            "label": "Bergworm Tyrant"
          },
          {
            "path": "packs/data/pfs-season-3-bestiary.db/bergworm.json",
            "label": "Bergworm"
          },
          {
            "path": "packs/data/pfs-season-3-bestiary.db/bloody-barber-ambusher.json",
            "label": "Bloody Barber Ambusher"
          },
          {
            "path": "packs/data/pfs-season-3-bestiary.db/bloody-barber-leader.json",
            "label": "Bloody Barber Leader"
          },
          {
            "path": "packs/data/pfs-season-3-bestiary.db/bloody-beetle-exoskeleton.json",
            "label": "Bloody Beetle Exoskeleton"
          },
          {
            "path": "packs/data/pfs-season-3-bestiary.db/bloody-skeletal-champion.json",
            "label": "Bloody Skeletal Champion"
          },
          {
            "path": "packs/data/pfs-season-3-bestiary.db/bloody-skeleton-guard.json",
            "label": "Bloody Skeleton Guard"
          },
          {
            "path": "packs/data/pfs-season-3-bestiary.db/branwaen.json",
            "label": "Branwaen"
          },
          {
            "path": "packs/data/pfs-season-3-bestiary.db/bugbear-tormentor-pfs-3-13.json",
            "label": "Bugbear Tormentor (PFS 3-13)"
          },
          {
            "path": "packs/data/pfs-season-3-bestiary.db/cairn-wight-pfs-3-09.json",
            "label": "Cairn Wight (PFS 3-09)"
          },
          {
            "path": "packs/data/pfs-season-3-bestiary.db/caliclotherax-11-12.json",
            "label": "Caliclotherax (11-12)"
          },
          {
            "path": "packs/data/pfs-season-3-bestiary.db/caliclotherax-9-10.json",
            "label": "Caliclotherax (9-10)"
          },
          {
            "path": "packs/data/pfs-season-3-bestiary.db/cinder-rat-ashgrip.json",
            "label": "Cinder Rat (Ashgrip)"
          },
          {
            "path": "packs/data/pfs-season-3-bestiary.db/cinder-rat-leadroar.json",
            "label": "Cinder Rat (Leadroar)"
          },
          {
            "path": "packs/data/pfs-season-3-bestiary.db/cobbled-bruiser.json",
            "label": "Cobbled Bruiser"
          },
          {
            "path": "packs/data/pfs-season-3-bestiary.db/cobbled-brutalizer.json",
            "label": "Cobbled Brutalizer"
          },
          {
            "path": "packs/data/pfs-season-3-bestiary.db/cog-the-ruffian.json",
            "label": "Cog the Ruffian"
          },
          {
            "path": "packs/data/pfs-season-3-bestiary.db/cog-the-torchbearer.json",
            "label": "Cog the Torchbearer"
          },
          {
            "path": "packs/data/pfs-season-3-bestiary.db/cole-farsen-advisor.json",
            "label": "Cole Farsen, Advisor"
          },
          {
            "path": "packs/data/pfs-season-3-bestiary.db/cole-farsen-gang-leader.json",
            "label": "Cole Farsen, Gang Leader"
          },
          {
            "path": "packs/data/pfs-season-3-bestiary.db/deadly-fetchling-sneak.json",
            "label": "Deadly Fetchling Sneak"
          },
          {
            "path": "packs/data/pfs-season-3-bestiary.db/debased-relic.json",
            "label": "Debased Relic"
          },
          {
            "path": "packs/data/pfs-season-3-bestiary.db/deep-shadow-guardian.json",
            "label": "Deep Shadow Guardian"
          },
          {
            "path": "packs/data/pfs-season-3-bestiary.db/displaced-robot-1-2.json",
            "label": "Displaced Robot (1-2)"
          },
          {
            "path": "packs/data/pfs-season-3-bestiary.db/displaced-robot-3-4.json",
            "label": "Displaced Robot (3-4)"
          },
          {
            "path": "packs/data/pfs-season-3-bestiary.db/displaced-robot-5-6.json",
            "label": "Displaced Robot (5-6)"
          },
          {
            "path": "packs/data/pfs-season-3-bestiary.db/displaced-robot-7-8.json",
            "label": "Displaced Robot (7-8)"
          },
          {
            "path": "packs/data/pfs-season-3-bestiary.db/drakauthix-pfs-3-15.json",
            "label": "Drakauthix (PFS 3-15)"
          },
          {
            "path": "packs/data/pfs-season-3-bestiary.db/duergar-crusher.json",
            "label": "Duergar Crusher"
          },
          {
            "path": "packs/data/pfs-season-3-bestiary.db/elite-green-hag-pfs-3-99.json",
            "label": "Elite Green Hag (PFS 3-99)"
          },
          {
            "path": "packs/data/pfs-season-3-bestiary.db/elite-hadrosaurid-pfs-3-99.json",
            "label": "Elite Hadrosaurid (PFS 3-99)"
          },
          {
            "path": "packs/data/pfs-season-3-bestiary.db/elite-hell-hound-pfs-3-07.json",
            "label": "Elite Hell Hound (PFS 3-07)"
          },
          {
            "path": "packs/data/pfs-season-3-bestiary.db/elite-hieracosphinx-pfs-3-14.json",
            "label": "Elite Hieracosphinx (PFS 3-14)"
          },
          {
            "path": "packs/data/pfs-season-3-bestiary.db/eloises-ghost-1-2.json",
            "label": "Eloise's Ghost (1-2)"
          },
          {
            "path": "packs/data/pfs-season-3-bestiary.db/eloises-ghost-3-4.json",
            "label": "Eloise's Ghost (3-4)"
          },
          {
            "path": "packs/data/pfs-season-3-bestiary.db/eloko-pfs-3-03.json",
            "label": "Eloko (PFS 3-03)"
          },
          {
            "path": "packs/data/pfs-season-3-bestiary.db/eltha-embercall-11-12-28-cp.json",
            "label": "Eltha Embercall (11-12, 28+ CP)"
          },
          {
            "path": "packs/data/pfs-season-3-bestiary.db/eltha-embercall-9-10.json",
            "label": "Eltha Embercall (9-10)"
          },
          {
            "path": "packs/data/pfs-season-3-bestiary.db/enduring-zombie-hulk.json",
            "label": "Enduring Zombie Hulk"
          },
          {
            "path": "packs/data/pfs-season-3-bestiary.db/enraged-shrouded-bloodseeker.json",
            "label": "Enraged Shrouded Bloodseeker"
          },
          {
            "path": "packs/data/pfs-season-3-bestiary.db/explosive-rat.json",
            "label": "Explosive Rat"
          },
          {
            "path": "packs/data/pfs-season-3-bestiary.db/fasiel-ibn-sazadin-1-2.json",
            "label": "Fasiel Ibn Sazadin (1-2)"
          },
          {
            "path": "packs/data/pfs-season-3-bestiary.db/fasiel-ibn-sazadin-3-4.json",
            "label": "Fasiel Ibn Sazadin (3-4)"
          },
          {
            "path": "packs/data/pfs-season-3-bestiary.db/fast-shambler-troop.json",
            "label": "Fast Shambler Troop"
          },
          {
            "path": "packs/data/pfs-season-3-bestiary.db/fetchling-sneak.json",
            "label": "Fetchling Sneak"
          },
          {
            "path": "packs/data/pfs-season-3-bestiary.db/filth-fire-pfs-3-01.json",
            "label": "Filth Fire (PFS 3-01)"
          },
          {
            "path": "packs/data/pfs-season-3-bestiary.db/fipp-the-prophet.json",
            "label": "Fipp the Prophet"
          },
          {
            "path": "packs/data/pfs-season-3-bestiary.db/flaming-animated-armor-ashgrip-1-2.json",
            "label": "Flaming Animated Armor (Ashgrip) (1-2)"
          },
          {
            "path": "packs/data/pfs-season-3-bestiary.db/flaming-animated-armor-firecutter-1-2.json",
            "label": "Flaming Animated Armor (Firecutter) (1-2)"
          },
          {
            "path": "packs/data/pfs-season-3-bestiary.db/flaming-animated-armor-holy-hand-1-2.json",
            "label": "Flaming Animated Armor (Holy Hand) (1-2)"
          },
          {
            "path": "packs/data/pfs-season-3-bestiary.db/flaming-animated-armor-leadroar-1-2.json",
            "label": "Flaming Animated Armor (Leadroar) (1-2)"
          },
          {
            "path": "packs/data/pfs-season-3-bestiary.db/forged-bones.json",
            "label": "Forged Bones"
          },
          {
            "path": "packs/data/pfs-season-3-bestiary.db/ghast-arctic.json",
            "label": "Ghast (Arctic)"
          },
          {
            "path": "packs/data/pfs-season-3-bestiary.db/ghast-heretical.json",
            "label": "Ghast (Heretical)"
          },
          {
            "path": "packs/data/pfs-season-3-bestiary.db/giant-amoeba-pfs-3-98.json",
            "label": "Giant Amoeba (PFS 3-98)"
          },
          {
            "path": "packs/data/pfs-season-3-bestiary.db/giant-rat-pfs-3-98.json",
            "label": "Giant Rat (PFS 3-98)"
          },
          {
            "path": "packs/data/pfs-season-3-bestiary.db/glurorchaes-7-8.json",
            "label": "Glurorchaes (7-8)"
          },
          {
            "path": "packs/data/pfs-season-3-bestiary.db/grimple-pfs-3-18.json",
            "label": "Grimple (PFS 3-18)"
          },
          {
            "path": "packs/data/pfs-season-3-bestiary.db/grimstalker-pfs-3-13.json",
            "label": "Grimstalker (PFS 3-13)"
          },
          {
            "path": "packs/data/pfs-season-3-bestiary.db/half-formed-abrikandilu.json",
            "label": "Half-Formed Abrikandilu"
          },
          {
            "path": "packs/data/pfs-season-3-bestiary.db/hellbound-jailer-3-4.json",
            "label": "Hellbound Jailer (3-4)"
          },
          {
            "path": "packs/data/pfs-season-3-bestiary.db/hellbound-jailer-5-6.json",
            "label": "Hellbound Jailer (5-6)"
          },
          {
            "path": "packs/data/pfs-season-3-bestiary.db/hellbound-robber.json",
            "label": "Hellbound Robber"
          },
          {
            "path": "packs/data/pfs-season-3-bestiary.db/hellbound-rogue.json",
            "label": "Hellbound Rogue"
          },
          {
            "path": "packs/data/pfs-season-3-bestiary.db/horrid-nightmare.json",
            "label": "Horrid Nightmare"
          },
          {
            "path": "packs/data/pfs-season-3-bestiary.db/iron-ring-bosun.json",
            "label": "Iron Ring Bosun"
          },
          {
            "path": "packs/data/pfs-season-3-bestiary.db/iron-ring-deckhand.json",
            "label": "Iron Ring Deckhand"
          },
          {
            "path": "packs/data/pfs-season-3-bestiary.db/iron-ring-pirate.json",
            "label": "Iron Ring Pirate"
          },
          {
            "path": "packs/data/pfs-season-3-bestiary.db/junior-1-2.json",
            "label": "Junior (1-2)"
          },
          {
            "path": "packs/data/pfs-season-3-bestiary.db/junior-3-4.json",
            "label": "Junior (3-4)"
          },
          {
            "path": "packs/data/pfs-season-3-bestiary.db/khisisi-5-6.json",
            "label": "Khisisi (5-6)"
          },
          {
            "path": "packs/data/pfs-season-3-bestiary.db/khisisi-7-8.json",
            "label": "Khisisi (7-8)"
          },
          {
            "path": "packs/data/pfs-season-3-bestiary.db/kobold-dragon-mage-pfs-3-99.json",
            "label": "Kobold Dragon Mage (PFS 3-99)"
          },
          {
            "path": "packs/data/pfs-season-3-bestiary.db/kobold-scout-pfs-3-99.json",
            "label": "Kobold Scout (PFS 3-99)"
          },
          {
            "path": "packs/data/pfs-season-3-bestiary.db/kobold-warrior-pfs-3-99.json",
            "label": "Kobold Warrior (PFS 3-99)"
          },
          {
            "path": "packs/data/pfs-season-3-bestiary.db/languid-isqulug.json",
            "label": "Languid Isqulug"
          },
          {
            "path": "packs/data/pfs-season-3-bestiary.db/languid-purple-worm.json",
            "label": "Languid Purple Worm"
          },
          {
            "path": "packs/data/pfs-season-3-bestiary.db/leopard-pfs-3-13.json",
            "label": "Leopard (PFS 3-13)"
          },
          {
            "path": "packs/data/pfs-season-3-bestiary.db/lesser-animate-dream.json",
            "label": "Lesser Animate Dream"
          },
          {
            "path": "packs/data/pfs-season-3-bestiary.db/lightweight-animated-armor.json",
            "label": "Lightweight Animated Armor"
          },
          {
            "path": "packs/data/pfs-season-3-bestiary.db/living-landslide-pfs-3-11.json",
            "label": "Living Landslide (PFS 3-11)"
          },
          {
            "path": "packs/data/pfs-season-3-bestiary.db/marcien-blakros-7-8-shadow-double.json",
            "label": "Marcien Blakros (7-8) (Shadow Double)"
          },
          {
            "path": "packs/data/pfs-season-3-bestiary.db/marcien-blakros-7-8.json",
            "label": "Marcien Blakros (7-8)"
          },
          {
            "path": "packs/data/pfs-season-3-bestiary.db/marcien-blakros-9-10-shadow-double.json",
            "label": "Marcien Blakros (9-10) (Shadow Double)"
          },
          {
            "path": "packs/data/pfs-season-3-bestiary.db/marcien-blakros-9-10.json",
            "label": "Marcien Blakros (9-10)"
          },
          {
            "path": "packs/data/pfs-season-3-bestiary.db/mature-arabuk.json",
            "label": "Mature Arabuk"
          },
          {
            "path": "packs/data/pfs-season-3-bestiary.db/monastic-bodyguard-3-4.json",
            "label": "Monastic Bodyguard (3-4)"
          },
          {
            "path": "packs/data/pfs-season-3-bestiary.db/monastic-bodyguard-5-6.json",
            "label": "Monastic Bodyguard (5-6)"
          },
          {
            "path": "packs/data/pfs-season-3-bestiary.db/mummy-guardian-pfs-3-09.json",
            "label": "Mummy Guardian (PFS 3-09)"
          },
          {
            "path": "packs/data/pfs-season-3-bestiary.db/ninth-army-bodyguard.json",
            "label": "Ninth Army Bodyguard"
          },
          {
            "path": "packs/data/pfs-season-3-bestiary.db/ninth-army-burglar.json",
            "label": "Ninth Army Burglar"
          },
          {
            "path": "packs/data/pfs-season-3-bestiary.db/ninth-army-fence.json",
            "label": "Ninth Army Fence"
          },
          {
            "path": "packs/data/pfs-season-3-bestiary.db/ninth-army-guard.json",
            "label": "Ninth Army Guard"
          },
          {
            "path": "packs/data/pfs-season-3-bestiary.db/ninth-army-mage.json",
            "label": "Ninth Army Mage"
          },
          {
            "path": "packs/data/pfs-season-3-bestiary.db/ninth-army-operative.json",
            "label": "Ninth Army Operative"
          },
          {
            "path": "packs/data/pfs-season-3-bestiary.db/ninth-army-ruffian.json",
            "label": "Ninth Army Ruffian"
          },
          {
            "path": "packs/data/pfs-season-3-bestiary.db/ninth-army-soldier.json",
            "label": "Ninth Army Soldier"
          },
          {
            "path": "packs/data/pfs-season-3-bestiary.db/ninth-army-war-mage.json",
            "label": "Ninth Army War Mage"
          },
          {
            "path": "packs/data/pfs-season-3-bestiary.db/nuglub-pfs-3-18.json",
            "label": "Nuglub (PFS 3-18)"
          },
          {
            "path": "packs/data/pfs-season-3-bestiary.db/old-drakauthix-pfs-3-15.json",
            "label": "Old Drakauthix (PFS 3-15)"
          },
          {
            "path": "packs/data/pfs-season-3-bestiary.db/onyx-alliance-commander.json",
            "label": "Onyx Alliance Commander"
          },
          {
            "path": "packs/data/pfs-season-3-bestiary.db/onyx-alliance-enforcer.json",
            "label": "Onyx Alliance Enforcer"
          },
          {
            "path": "packs/data/pfs-season-3-bestiary.db/onyx-alliance-officer.json",
            "label": "Onyx Alliance Officer"
          },
          {
            "path": "packs/data/pfs-season-3-bestiary.db/onyx-alliance-scout.json",
            "label": "Onyx Alliance Scout"
          },
          {
            "path": "packs/data/pfs-season-3-bestiary.db/panicked-bat-swarm.json",
            "label": "Panicked Bat Swarm"
          },
          {
            "path": "packs/data/pfs-season-3-bestiary.db/pelagastr-tail.json",
            "label": "Pelagastr Tail"
          },
          {
            "path": "packs/data/pfs-season-3-bestiary.db/peryton-arctic.json",
            "label": "Peryton (Arctic)"
          },
          {
            "path": "packs/data/pfs-season-3-bestiary.db/peryton-heretical.json",
            "label": "Peryton (Heretical)"
          },
          {
            "path": "packs/data/pfs-season-3-bestiary.db/peryton-rifle-mutation.json",
            "label": "Peryton (Rifle Mutation)"
          },
          {
            "path": "packs/data/pfs-season-3-bestiary.db/poltergeist-holy-hand.json",
            "label": "Poltergeist (Holy Hand)"
          },
          {
            "path": "packs/data/pfs-season-3-bestiary.db/pontrius-tilasti-1-2.json",
            "label": "Pontrius Tilasti (1-2)"
          },
          {
            "path": "packs/data/pfs-season-3-bestiary.db/pontrius-tilasti-3-4.json",
            "label": "Pontrius Tilasti (3-4)"
          },
          {
            "path": "packs/data/pfs-season-3-bestiary.db/pup-of-tindalos.json",
            "label": "Pup of Tindalos"
          },
          {
            "path": "packs/data/pfs-season-3-bestiary.db/rampaging-roast-medium-rare.json",
            "label": "Rampaging Roast (Medium Rare)"
          },
          {
            "path": "packs/data/pfs-season-3-bestiary.db/rampaging-roast-well-done.json",
            "label": "Rampaging Roast (Well Done)"
          },
          {
            "path": "packs/data/pfs-season-3-bestiary.db/raseri-kanton-skeleton.json",
            "label": "Raseri Kanton Skeleton"
          },
          {
            "path": "packs/data/pfs-season-3-bestiary.db/reckless-akitonian-scientist.json",
            "label": "Reckless Akitonian Scientist"
          },
          {
            "path": "packs/data/pfs-season-3-bestiary.db/revinus-1-2.json",
            "label": "Revinus (1-2)"
          },
          {
            "path": "packs/data/pfs-season-3-bestiary.db/revinus-3-4.json",
            "label": "Revinus (3-4)"
          },
          {
            "path": "packs/data/pfs-season-3-bestiary.db/revinuss-guards-1-2.json",
            "label": "Revinus's Guards (1-2)"
          },
          {
            "path": "packs/data/pfs-season-3-bestiary.db/revinuss-guards-3-4.json",
            "label": "Revinus's Guards (3-4)"
          },
          {
            "path": "packs/data/pfs-season-3-bestiary.db/ruthless-fetchling-sneak.json",
            "label": "Ruthless Fetchling Sneak"
          },
          {
            "path": "packs/data/pfs-season-3-bestiary.db/sandswept-statue.json",
            "label": "Sandswept Statue"
          },
          {
            "path": "packs/data/pfs-season-3-bestiary.db/scalding-mephit.json",
            "label": "Scalding Mephit"
          },
          {
            "path": "packs/data/pfs-season-3-bestiary.db/shadow-guardian.json",
            "label": "Shadow Guardian"
          },
          {
            "path": "packs/data/pfs-season-3-bestiary.db/shadow-pfs-3-17.json",
            "label": "Shadow (PFS 3-17)"
          },
          {
            "path": "packs/data/pfs-season-3-bestiary.db/shanrigol-mound.json",
            "label": "Shanrigol Mound"
          },
          {
            "path": "packs/data/pfs-season-3-bestiary.db/shobhad-hunter-5-6.json",
            "label": "Shobhad Hunter (5-6)"
          },
          {
            "path": "packs/data/pfs-season-3-bestiary.db/shobhad-hunter-7-8.json",
            "label": "Shobhad Hunter (7-8)"
          },
          {
            "path": "packs/data/pfs-season-3-bestiary.db/shrouded-bloodseeker.json",
            "label": "Shrouded Bloodseeker"
          },
          {
            "path": "packs/data/pfs-season-3-bestiary.db/skeleton-warrior.json",
            "label": "Skeleton Warrior"
          },
          {
            "path": "packs/data/pfs-season-3-bestiary.db/skulk-pfs-3-13.json",
            "label": "Skulk (PFS 3-13)"
          },
          {
            "path": "packs/data/pfs-season-3-bestiary.db/smiglen-daet.json",
            "label": "Smiglen Daet"
          },
          {
            "path": "packs/data/pfs-season-3-bestiary.db/smilglen-daet.json",
            "label": "Smilglen Daet"
          },
          {
            "path": "packs/data/pfs-season-3-bestiary.db/smoldering-nightmare.json",
            "label": "Smoldering Nightmare"
          },
          {
            "path": "packs/data/pfs-season-3-bestiary.db/sparkles-11-12.json",
            "label": "Sparkles (11-12)"
          },
          {
            "path": "packs/data/pfs-season-3-bestiary.db/sparkles-9-10.json",
            "label": "Sparkles (9-10)"
          },
          {
            "path": "packs/data/pfs-season-3-bestiary.db/sulfuric-slime.json",
            "label": "Sulfuric Slime"
          },
          {
            "path": "packs/data/pfs-season-3-bestiary.db/tadrun-1-2.json",
            "label": "Tadrun (1-2)"
          },
          {
            "path": "packs/data/pfs-season-3-bestiary.db/tadrun-3-4.json",
            "label": "Tadrun (3-4)"
          },
          {
            "path": "packs/data/pfs-season-3-bestiary.db/tascio-raetullus-3-4.json",
            "label": "Tascio Raetullus (3-4)"
          },
          {
            "path": "packs/data/pfs-season-3-bestiary.db/tascio-raetullus-5-6.json",
            "label": "Tascio Raetullus (5-6)"
          },
          {
            "path": "packs/data/pfs-season-3-bestiary.db/temporal-echoes-1-2.json",
            "label": "Temporal Echoes (1-2)"
          },
          {
            "path": "packs/data/pfs-season-3-bestiary.db/temporal-echoes-3-4.json",
            "label": "Temporal Echoes (3-4)"
          },
          {
            "path": "packs/data/pfs-season-3-bestiary.db/temporal-echoes-5-6.json",
            "label": "Temporal Echoes (5-6)"
          },
          {
            "path": "packs/data/pfs-season-3-bestiary.db/temporal-echoes-7-8.json",
            "label": "Temporal Echoes (7-8)"
          },
          {
            "path": "packs/data/pfs-season-3-bestiary.db/thick-pelagastr-tail.json",
            "label": "Thick Pelagastr Tail"
          },
          {
            "path": "packs/data/pfs-season-3-bestiary.db/thomil-bolyrius-3-4.json",
            "label": "Thomil Bolyrius (3-4)"
          },
          {
            "path": "packs/data/pfs-season-3-bestiary.db/thomil-bolyrius-5-6.json",
            "label": "Thomil Bolyrius (5-6)"
          },
          {
            "path": "packs/data/pfs-season-3-bestiary.db/thundering-wihsaak-arctic.json",
            "label": "Thundering Wihsaak (Arctic)"
          },
          {
            "path": "packs/data/pfs-season-3-bestiary.db/thundering-wihsaak-heretical.json",
            "label": "Thundering Wihsaak (Heretical)"
          },
          {
            "path": "packs/data/pfs-season-3-bestiary.db/thundering-wihsaak-rifle-mutation.json",
            "label": "Thundering Wihsaak (Rifle Mutation)"
          },
          {
            "path": "packs/data/pfs-season-3-bestiary.db/thundering-wihsaak.json",
            "label": "Thundering Wihsaak"
          },
          {
            "path": "packs/data/pfs-season-3-bestiary.db/timewarped-amalgam.json",
            "label": "Timewarped Amalgam"
          },
          {
            "path": "packs/data/pfs-season-3-bestiary.db/tyrannical-interrogator.json",
            "label": "Tyrannical Interrogator"
          },
          {
            "path": "packs/data/pfs-season-3-bestiary.db/umbral-cu-sith.json",
            "label": "Umbral Cu Sith"
          },
          {
            "path": "packs/data/pfs-season-3-bestiary.db/umbral-drake.json",
            "label": "Umbral Drake"
          },
          {
            "path": "packs/data/pfs-season-3-bestiary.db/uncle-jeb-1-2.json",
            "label": "Uncle Jeb (1-2)"
          },
          {
            "path": "packs/data/pfs-season-3-bestiary.db/uncle-jeb-3-4.json",
            "label": "Uncle Jeb (3-4)"
          },
          {
            "path": "packs/data/pfs-season-3-bestiary.db/unstable-skeletal-champion.json",
            "label": "Unstable Skeletal Champion"
          },
          {
            "path": "packs/data/pfs-season-3-bestiary.db/unstable-skeleton-guard.json",
            "label": "Unstable Skeleton Guard"
          },
          {
            "path": "packs/data/pfs-season-3-bestiary.db/vaggas-the-bosun.json",
            "label": "Vaggas the Bosun"
          },
          {
            "path": "packs/data/pfs-season-3-bestiary.db/vaggas-the-fanatic.json",
            "label": "Vaggas the Fanatic"
          },
          {
            "path": "packs/data/pfs-season-3-bestiary.db/vengeful-ember-fox.json",
            "label": "Vengeful Ember Fox"
          },
          {
            "path": "packs/data/pfs-season-3-bestiary.db/veteran-onyx-alliance-enforcer.json",
            "label": "Veteran Onyx Alliance Enforcer"
          },
          {
            "path": "packs/data/pfs-season-3-bestiary.db/veteran-onyx-alliance-scout.json",
            "label": "Veteran Onyx Alliance Scout"
          },
          {
            "path": "packs/data/pfs-season-3-bestiary.db/wailing-ghost.json",
            "label": "Wailing Ghost"
          },
          {
            "path": "packs/data/pfs-season-3-bestiary.db/wasp-swarm-arctic.json",
            "label": "Wasp Swarm (Arctic)"
          },
          {
            "path": "packs/data/pfs-season-3-bestiary.db/wasp-swarm-heretical.json",
            "label": "Wasp Swarm (Heretical)"
          },
          {
            "path": "packs/data/pfs-season-3-bestiary.db/wasp-swarm-pfs-3-13.json",
            "label": "Wasp Swarm (PFS 3-13)"
          },
          {
            "path": "packs/data/pfs-season-3-bestiary.db/weak-hell-hound-pfs-3-07.json",
            "label": "Weak Hell Hound (PFS 3-07)"
          },
          {
            "path": "packs/data/pfs-season-3-bestiary.db/weakened-cobbleswarm.json",
            "label": "Weakened Cobbleswarm"
          },
          {
            "path": "packs/data/pfs-season-3-bestiary.db/werebat-pfs-3-13.json",
            "label": "Werebat (PFS 3-13)"
          },
          {
            "path": "packs/data/pfs-season-3-bestiary.db/weretiger-pfs-3-13.json",
            "label": "Weretiger (PFS 3-13)"
          },
          {
            "path": "packs/data/pfs-season-3-bestiary.db/young-arabuk.json",
            "label": "Young Arabuk"
          },
          {
            "path": "packs/data/pfs-season-3-bestiary.db/zebub-pfs.json",
            "label": "Zebub (PFS)"
          }
        ]
      },
      "pfs-season-4-bestiary": {
        "label": "Season 4",
        "itens": [
          {
            "path": "packs/data/pfs-season-4-bestiary.db/animated-leather-armor.json",
            "label": "Animated Leather Armor"
          },
          {
            "path": "packs/data/pfs-season-4-bestiary.db/bandit-skullcracker.json",
            "label": "Bandit Skullcracker"
          },
          {
            "path": "packs/data/pfs-season-4-bestiary.db/bloody-barber-gang-leader.json",
            "label": "Bloody Barber Gang Leader"
          },
          {
            "path": "packs/data/pfs-season-4-bestiary.db/bloody-barber-ruffian.json",
            "label": "Bloody Barber Ruffian"
          },
          {
            "path": "packs/data/pfs-season-4-bestiary.db/bloody-barber-thief.json",
            "label": "Bloody Barber Thief"
          },
          {
            "path": "packs/data/pfs-season-4-bestiary.db/brinna.json",
            "label": "Brinna"
          },
          {
            "path": "packs/data/pfs-season-4-bestiary.db/bugbear-bully.json",
            "label": "Bugbear Bully"
          },
          {
            "path": "packs/data/pfs-season-4-bestiary.db/bugbear-creeper.json",
            "label": "Bugbear Creeper"
          },
          {
            "path": "packs/data/pfs-season-4-bestiary.db/bugbear-night-terror.json",
            "label": "Bugbear Night Terror"
          },
          {
            "path": "packs/data/pfs-season-4-bestiary.db/bugbear-raider.json",
            "label": "Bugbear Raider"
          },
          {
            "path": "packs/data/pfs-season-4-bestiary.db/bugbear-slasher.json",
            "label": "Bugbear Slasher"
          },
          {
            "path": "packs/data/pfs-season-4-bestiary.db/bugbear-terror.json",
            "label": "Bugbear Terror"
          },
          {
            "path": "packs/data/pfs-season-4-bestiary.db/bugbear-trickster.json",
            "label": "Bugbear Trickster"
          },
          {
            "path": "packs/data/pfs-season-4-bestiary.db/charlatan-pfs-4-05.json",
            "label": "Charlatan (PFS 4-05)"
          },
          {
            "path": "packs/data/pfs-season-4-bestiary.db/damaged-automaton.json",
            "label": "Damaged Automaton"
          },
          {
            "path": "packs/data/pfs-season-4-bestiary.db/denufair.json",
            "label": "Denufair"
          },
          {
            "path": "packs/data/pfs-season-4-bestiary.db/depleted-roiling-incant.json",
            "label": "Depleted Roiling Incant"
          },
          {
            "path": "packs/data/pfs-season-4-bestiary.db/dero-stalker-pfs-4-05.json",
            "label": "Dero Stalker (PFS 4-05)"
          },
          {
            "path": "packs/data/pfs-season-4-bestiary.db/dig-widget-pfs-4-07.json",
            "label": "Dig-Widget (PFS 4-07)"
          },
          {
            "path": "packs/data/pfs-season-4-bestiary.db/dorenea.json",
            "label": "Dorenea"
          },
          {
            "path": "packs/data/pfs-season-4-bestiary.db/dream-of-doom.json",
            "label": "Dream of Doom"
          },
          {
            "path": "packs/data/pfs-season-4-bestiary.db/elite-cave-bear-pfs-4-07.json",
            "label": "Elite Cave Bear (PFS 4-07)"
          },
          {
            "path": "packs/data/pfs-season-4-bestiary.db/enormous-rat.json",
            "label": "Enormous Rat"
          },
          {
            "path": "packs/data/pfs-season-4-bestiary.db/fetid-familiar.json",
            "label": "Fetid Familiar"
          },
          {
            "path": "packs/data/pfs-season-4-bestiary.db/giant-fetid-familiar.json",
            "label": "Giant Fetid Familiar"
          },
          {
            "path": "packs/data/pfs-season-4-bestiary.db/greater-barghest-pfs-4-07.json",
            "label": "Greater Barghest (PFS 4-07)"
          },
          {
            "path": "packs/data/pfs-season-4-bestiary.db/grim-rictus-bridge-guard.json",
            "label": "Grim Rictus Bridge Guard"
          },
          {
            "path": "packs/data/pfs-season-4-bestiary.db/grim-rictus-robber.json",
            "label": "Grim Rictus Robber"
          },
          {
            "path": "packs/data/pfs-season-4-bestiary.db/harpy-forager.json",
            "label": "Harpy Forager"
          },
          {
            "path": "packs/data/pfs-season-4-bestiary.db/harpy-wailer.json",
            "label": "Harpy Wailer"
          },
          {
            "path": "packs/data/pfs-season-4-bestiary.db/infested-clockwork-heap.json",
            "label": "Infested Clockwork Heap"
          },
          {
            "path": "packs/data/pfs-season-4-bestiary.db/infested-clockwork-vessel.json",
            "label": "Infested Clockwork Vessel"
          },
          {
            "path": "packs/data/pfs-season-4-bestiary.db/larcius.json",
            "label": "Larcius"
          },
          {
            "path": "packs/data/pfs-season-4-bestiary.db/living-boulder-pfs-4-04.json",
            "label": "Living Boulder (PFS 4-04)"
          },
          {
            "path": "packs/data/pfs-season-4-bestiary.db/mutated-scorpion.json",
            "label": "Mutated Scorpion"
          },
          {
            "path": "packs/data/pfs-season-4-bestiary.db/overtaxed-vrisk.json",
            "label": "Overtaxed Vrisk"
          },
          {
            "path": "packs/data/pfs-season-4-bestiary.db/patched-up-automaton.json",
            "label": "Patched Up Automaton"
          },
          {
            "path": "packs/data/pfs-season-4-bestiary.db/possessed-clockwork-heap.json",
            "label": "Possessed Clockwork Heap"
          },
          {
            "path": "packs/data/pfs-season-4-bestiary.db/possessed-clockwork-vessel.json",
            "label": "Possessed Clockwork Vessel"
          },
          {
            "path": "packs/data/pfs-season-4-bestiary.db/pups.json",
            "label": "Pups"
          },
          {
            "path": "packs/data/pfs-season-4-bestiary.db/revna-the-brave-5-6.json",
            "label": "Revna the Brave (5-6)"
          },
          {
            "path": "packs/data/pfs-season-4-bestiary.db/revna-the-brave-7-8.json",
            "label": "Revna the Brave (7-8)"
          },
          {
            "path": "packs/data/pfs-season-4-bestiary.db/seldrick-dralston-1-2.json",
            "label": "Seldrick Dralston (1-2)"
          },
          {
            "path": "packs/data/pfs-season-4-bestiary.db/seldrick-dralston-3-4.json",
            "label": "Seldrick Dralston (3-4)"
          },
          {
            "path": "packs/data/pfs-season-4-bestiary.db/shard-of-aslynn-1-2.json",
            "label": "Shard of Aslynn (1-2)"
          },
          {
            "path": "packs/data/pfs-season-4-bestiary.db/shard-of-aslynn-3-4.json",
            "label": "Shard of Aslynn (3-4)"
          },
          {
            "path": "packs/data/pfs-season-4-bestiary.db/skeletal-pathfinder-veteran.json",
            "label": "Skeletal Pathfinder Veteran"
          },
          {
            "path": "packs/data/pfs-season-4-bestiary.db/skeletal-pathfinder.json",
            "label": "Skeletal Pathfinder"
          },
          {
            "path": "packs/data/pfs-season-4-bestiary.db/skulk-raider.json",
            "label": "Skulk Raider"
          },
          {
            "path": "packs/data/pfs-season-4-bestiary.db/sounrel-3-4.json",
            "label": "Sounrel (3-4)"
          },
          {
            "path": "packs/data/pfs-season-4-bestiary.db/sounrel-5-6.json",
            "label": "Sounrel (5-6)"
          },
          {
            "path": "packs/data/pfs-season-4-bestiary.db/stabilized-black-pudding.json",
            "label": "Stabilized Black Pudding"
          },
          {
            "path": "packs/data/pfs-season-4-bestiary.db/stabilized-ochre-jelly.json",
            "label": "Stabilized Ochre Jelly"
          },
          {
            "path": "packs/data/pfs-season-4-bestiary.db/ulfen-soldier.json",
            "label": "Ulfen Soldier"
          },
          {
            "path": "packs/data/pfs-season-4-bestiary.db/veteran-ulfen-soldier.json",
            "label": "Veteran Ulfen Soldier"
          },
          {
            "path": "packs/data/pfs-season-4-bestiary.db/vrisk.json",
            "label": "Vrisk"
          }
        ]
      },
      "quest-for-the-frozen-flame-bestiary": {
        "label": "Quest for the Frozen Flame",
        "itens": [
          {
            "path": "packs/data/quest-for-the-frozen-flame-bestiary.db/animated-blade.json",
            "label": "Animated Blade"
          },
          {
            "path": "packs/data/quest-for-the-frozen-flame-bestiary.db/arboreal-tar-tree.json",
            "label": "Arboreal Tar Tree"
          },
          {
            "path": "packs/data/quest-for-the-frozen-flame-bestiary.db/ardissa-prendergant.json",
            "label": "Ardissa Prendergant"
          },
          {
            "path": "packs/data/quest-for-the-frozen-flame-bestiary.db/ardissas-porter.json",
            "label": "Ardissa's Porter"
          },
          {
            "path": "packs/data/quest-for-the-frozen-flame-bestiary.db/ashen-swale.json",
            "label": "Ashen Swale"
          },
          {
            "path": "packs/data/quest-for-the-frozen-flame-bestiary.db/azi.json",
            "label": "Azi"
          },
          {
            "path": "packs/data/quest-for-the-frozen-flame-bestiary.db/bargott.json",
            "label": "Bargott"
          },
          {
            "path": "packs/data/quest-for-the-frozen-flame-bestiary.db/beaver.json",
            "label": "Beaver"
          },
          {
            "path": "packs/data/quest-for-the-frozen-flame-bestiary.db/bone-warrior.json",
            "label": "Bone Warrior"
          },
          {
            "path": "packs/data/quest-for-the-frozen-flame-bestiary.db/burnbearer.json",
            "label": "Burnbearer"
          },
          {
            "path": "packs/data/quest-for-the-frozen-flame-bestiary.db/burning-mammoth-commando.json",
            "label": "Burning Mammoth Commando"
          },
          {
            "path": "packs/data/quest-for-the-frozen-flame-bestiary.db/burning-mammoth-hunter.json",
            "label": "Burning Mammoth Hunter"
          },
          {
            "path": "packs/data/quest-for-the-frozen-flame-bestiary.db/burning-mammoth-longshield.json",
            "label": "Burning Mammoth Longshield"
          },
          {
            "path": "packs/data/quest-for-the-frozen-flame-bestiary.db/burning-mammoth-reaver.json",
            "label": "Burning Mammoth Reaver"
          },
          {
            "path": "packs/data/quest-for-the-frozen-flame-bestiary.db/cairn-wight-g4.json",
            "label": "Cairn Wight (G4)"
          },
          {
            "path": "packs/data/quest-for-the-frozen-flame-bestiary.db/calcifda.json",
            "label": "Calcifda"
          },
          {
            "path": "packs/data/quest-for-the-frozen-flame-bestiary.db/castoroides.json",
            "label": "Castoroides"
          },
          {
            "path": "packs/data/quest-for-the-frozen-flame-bestiary.db/corrupted-elder-tree.json",
            "label": "Corrupted Elder Tree"
          },
          {
            "path": "packs/data/quest-for-the-frozen-flame-bestiary.db/crawling-hand-swarm.json",
            "label": "Crawling Hand Swarm"
          },
          {
            "path": "packs/data/quest-for-the-frozen-flame-bestiary.db/desiak.json",
            "label": "Desiak"
          },
          {
            "path": "packs/data/quest-for-the-frozen-flame-bestiary.db/elk.json",
            "label": "Elk"
          },
          {
            "path": "packs/data/quest-for-the-frozen-flame-bestiary.db/everburning-mammoth.json",
            "label": "Everburning Mammoth"
          },
          {
            "path": "packs/data/quest-for-the-frozen-flame-bestiary.db/fiendish-arboreal.json",
            "label": "Fiendish Arboreal"
          },
          {
            "path": "packs/data/quest-for-the-frozen-flame-bestiary.db/gathganara.json",
            "label": "Gathganara"
          },
          {
            "path": "packs/data/quest-for-the-frozen-flame-bestiary.db/giant-tapir-snared.json",
            "label": "Giant Tapir (Snared)"
          },
          {
            "path": "packs/data/quest-for-the-frozen-flame-bestiary.db/giant-tapir.json",
            "label": "Giant Tapir"
          },
          {
            "path": "packs/data/quest-for-the-frozen-flame-bestiary.db/glyptodon.json",
            "label": "Glyptodon"
          },
          {
            "path": "packs/data/quest-for-the-frozen-flame-bestiary.db/graylok-ambusher.json",
            "label": "Graylok Ambusher"
          },
          {
            "path": "packs/data/quest-for-the-frozen-flame-bestiary.db/graylok-artillerist.json",
            "label": "Graylok Artillerist"
          },
          {
            "path": "packs/data/quest-for-the-frozen-flame-bestiary.db/graylok-gatebreaker.json",
            "label": "Graylok Gatebreaker"
          },
          {
            "path": "packs/data/quest-for-the-frozen-flame-bestiary.db/groplit.json",
            "label": "Groplit"
          },
          {
            "path": "packs/data/quest-for-the-frozen-flame-bestiary.db/hegremon.json",
            "label": "Hegremon"
          },
          {
            "path": "packs/data/quest-for-the-frozen-flame-bestiary.db/hobji.json",
            "label": "Hobji"
          },
          {
            "path": "packs/data/quest-for-the-frozen-flame-bestiary.db/idovik.json",
            "label": "Idovik"
          },
          {
            "path": "packs/data/quest-for-the-frozen-flame-bestiary.db/ivarsa.json",
            "label": "Ivarsa"
          },
          {
            "path": "packs/data/quest-for-the-frozen-flame-bestiary.db/jesseri-the-hailstorm.json",
            "label": "Jesseri The Hailstorm"
          },
          {
            "path": "packs/data/quest-for-the-frozen-flame-bestiary.db/kadlaka.json",
            "label": "Kadlaka"
          },
          {
            "path": "packs/data/quest-for-the-frozen-flame-bestiary.db/lagofir.json",
            "label": "Lagofir"
          },
          {
            "path": "packs/data/quest-for-the-frozen-flame-bestiary.db/loblobi.json",
            "label": "Loblobi"
          },
          {
            "path": "packs/data/quest-for-the-frozen-flame-bestiary.db/lomok.json",
            "label": "Lomok"
          },
          {
            "path": "packs/data/quest-for-the-frozen-flame-bestiary.db/long-horned-bison-beheaded.json",
            "label": "Long-horned Bison Beheaded"
          },
          {
            "path": "packs/data/quest-for-the-frozen-flame-bestiary.db/long-horned-bison.json",
            "label": "Long-horned Bison"
          },
          {
            "path": "packs/data/quest-for-the-frozen-flame-bestiary.db/megaloceros.json",
            "label": "Megaloceros"
          },
          {
            "path": "packs/data/quest-for-the-frozen-flame-bestiary.db/metuak.json",
            "label": "Metuak"
          },
          {
            "path": "packs/data/quest-for-the-frozen-flame-bestiary.db/necrohusk.json",
            "label": "Necrohusk"
          },
          {
            "path": "packs/data/quest-for-the-frozen-flame-bestiary.db/pakano-level-12.json",
            "label": "Pakano (Level 12)"
          },
          {
            "path": "packs/data/quest-for-the-frozen-flame-bestiary.db/pakano.json",
            "label": "Pakano"
          },
          {
            "path": "packs/data/quest-for-the-frozen-flame-bestiary.db/rhino-warriors.json",
            "label": "Rhino Warriors"
          },
          {
            "path": "packs/data/quest-for-the-frozen-flame-bestiary.db/rime-sludge.json",
            "label": "Rime Sludge"
          },
          {
            "path": "packs/data/quest-for-the-frozen-flame-bestiary.db/roru.json",
            "label": "Roru"
          },
          {
            "path": "packs/data/quest-for-the-frozen-flame-bestiary.db/skeletal-woolly-rhinoceros.json",
            "label": "Skeletal Woolly Rhinoceros"
          },
          {
            "path": "packs/data/quest-for-the-frozen-flame-bestiary.db/summer-hora-queen.json",
            "label": "Summer Hora Queen"
          },
          {
            "path": "packs/data/quest-for-the-frozen-flame-bestiary.db/summer-hora.json",
            "label": "Summer Hora"
          },
          {
            "path": "packs/data/quest-for-the-frozen-flame-bestiary.db/syarstik-painted-tiger.json",
            "label": "Syarstik Painted-Tiger"
          },
          {
            "path": "packs/data/quest-for-the-frozen-flame-bestiary.db/tar-ooze.json",
            "label": "Tar Ooze"
          },
          {
            "path": "packs/data/quest-for-the-frozen-flame-bestiary.db/tar-zombie-mammoth.json",
            "label": "Tar Zombie Mammoth"
          },
          {
            "path": "packs/data/quest-for-the-frozen-flame-bestiary.db/tar-zombie-predator.json",
            "label": "Tar Zombie Predator"
          },
          {
            "path": "packs/data/quest-for-the-frozen-flame-bestiary.db/tar-zombie-snatcher.json",
            "label": "Tar Zombie Snatcher"
          },
          {
            "path": "packs/data/quest-for-the-frozen-flame-bestiary.db/throttled-blindheim.json",
            "label": "Throttled Blindheim"
          },
          {
            "path": "packs/data/quest-for-the-frozen-flame-bestiary.db/turkek.json",
            "label": "Turkek"
          },
          {
            "path": "packs/data/quest-for-the-frozen-flame-bestiary.db/varilyn-vare-eridge.json",
            "label": "Varilyn \"Vare\" Eridge"
          },
          {
            "path": "packs/data/quest-for-the-frozen-flame-bestiary.db/venexus.json",
            "label": "Venexus"
          },
          {
            "path": "packs/data/quest-for-the-frozen-flame-bestiary.db/venexuss-chosen.json",
            "label": "Venexus's Chosen"
          },
          {
            "path": "packs/data/quest-for-the-frozen-flame-bestiary.db/venexuss-wyrmling.json",
            "label": "Venexus's Wyrmling"
          },
          {
            "path": "packs/data/quest-for-the-frozen-flame-bestiary.db/weykoward.json",
            "label": "Weykoward"
          },
          {
            "path": "packs/data/quest-for-the-frozen-flame-bestiary.db/yana-no-trail.json",
            "label": "Yana No-trail"
          },
          {
            "path": "packs/data/quest-for-the-frozen-flame-bestiary.db/zombie-mammoth.json",
            "label": "Zombie Mammoth"
          },
          {
            "path": "packs/data/quest-for-the-frozen-flame-bestiary.db/zombie-megaloceros.json",
            "label": "Zombie Megaloceros"
          }
        ]
      },
      "shadows-at-sundown-bestiary": {
        "label": "Shadows at Sundown",
        "itens": [
          {
            "path": "packs/data/shadows-at-sundown-bestiary.db/abridan-ashau.json",
            "label": "Abridan Ashau"
          },
          {
            "path": "packs/data/shadows-at-sundown-bestiary.db/acolyte-of-pharasma.json",
            "label": "Acolyte of Pharasma"
          },
          {
            "path": "packs/data/shadows-at-sundown-bestiary.db/aliriel.json",
            "label": "Aliriel"
          },
          {
            "path": "packs/data/shadows-at-sundown-bestiary.db/bishop-keppira-dbear.json",
            "label": "Bishop Keppira D'Bear"
          },
          {
            "path": "packs/data/shadows-at-sundown-bestiary.db/ibrique.json",
            "label": "Ibrique"
          },
          {
            "path": "packs/data/shadows-at-sundown-bestiary.db/ileosas-shell.json",
            "label": "Ileosa's Shell"
          },
          {
            "path": "packs/data/shadows-at-sundown-bestiary.db/loreavor.json",
            "label": "Loreavor"
          },
          {
            "path": "packs/data/shadows-at-sundown-bestiary.db/lorthact.json",
            "label": "Lorthact"
          },
          {
            "path": "packs/data/shadows-at-sundown-bestiary.db/profane-ghoul.json",
            "label": "Profane Ghoul"
          },
          {
            "path": "packs/data/shadows-at-sundown-bestiary.db/scarlet-walker.json",
            "label": "Scarlet Walker"
          },
          {
            "path": "packs/data/shadows-at-sundown-bestiary.db/strigoi-progenitor.json",
            "label": "Strigoi Progenitor"
          },
          {
            "path": "packs/data/shadows-at-sundown-bestiary.db/strigoi-servant.json",
            "label": "Strigoi Servant"
          },
          {
            "path": "packs/data/shadows-at-sundown-bestiary.db/yniesse-zenderholm.json",
            "label": "Yniesse Zenderholm"
          }
        ]
      },
      "strength-of-thousands-bestiary": {
        "label": "Strength of Thousands",
        "itens": [
          {
            "path": "packs/data/strength-of-thousands-bestiary.db/abendego-brute.json",
            "label": "Abendego Brute"
          },
          {
            "path": "packs/data/strength-of-thousands-bestiary.db/abendego-jailer.json",
            "label": "Abendego Jailer"
          },
          {
            "path": "packs/data/strength-of-thousands-bestiary.db/abendego-priest.json",
            "label": "Abendego Priest"
          },
          {
            "path": "packs/data/strength-of-thousands-bestiary.db/ajbal-kimon.json",
            "label": "Ajbal Kimon"
          },
          {
            "path": "packs/data/strength-of-thousands-bestiary.db/alapolo.json",
            "label": "Alapolo"
          },
          {
            "path": "packs/data/strength-of-thousands-bestiary.db/alate-ant.json",
            "label": "Alate Ant"
          },
          {
            "path": "packs/data/strength-of-thousands-bestiary.db/anadi-fateweaver.json",
            "label": "Anadi Fateweaver"
          },
          {
            "path": "packs/data/strength-of-thousands-bestiary.db/anadi-lurker.json",
            "label": "Anadi Lurker"
          },
          {
            "path": "packs/data/strength-of-thousands-bestiary.db/anadi-seeker.json",
            "label": "Anadi Seeker"
          },
          {
            "path": "packs/data/strength-of-thousands-bestiary.db/ancient-rivener.json",
            "label": "Ancient Rivener"
          },
          {
            "path": "packs/data/strength-of-thousands-bestiary.db/apocalypse-ant-swarm.json",
            "label": "Apocalypse Ant Swarm"
          },
          {
            "path": "packs/data/strength-of-thousands-bestiary.db/aspect-of-hunger.json",
            "label": "Aspect of Hunger"
          },
          {
            "path": "packs/data/strength-of-thousands-bestiary.db/aspect-of-immortality.json",
            "label": "Aspect of Immortality"
          },
          {
            "path": "packs/data/strength-of-thousands-bestiary.db/aspect-of-insects.json",
            "label": "Aspect of Insects"
          },
          {
            "path": "packs/data/strength-of-thousands-bestiary.db/avatar-of-walkena.json",
            "label": "Avatar Of Walkena"
          },
          {
            "path": "packs/data/strength-of-thousands-bestiary.db/baaupa-mdoudu.json",
            "label": "Ba'aupa Mdoudu"
          },
          {
            "path": "packs/data/strength-of-thousands-bestiary.db/bharlen-sajor.json",
            "label": "Bharlen Sajor"
          },
          {
            "path": "packs/data/strength-of-thousands-bestiary.db/biloko-reaver.json",
            "label": "Biloko Reaver"
          },
          {
            "path": "packs/data/strength-of-thousands-bestiary.db/binji.json",
            "label": "Binji"
          },
          {
            "path": "packs/data/strength-of-thousands-bestiary.db/bog-mummy-amalgamation.json",
            "label": "Bog Mummy Amalgamation"
          },
          {
            "path": "packs/data/strength-of-thousands-bestiary.db/boggard-hunter.json",
            "label": "Boggard Hunter"
          },
          {
            "path": "packs/data/strength-of-thousands-bestiary.db/bramblehand-champion-construct.json",
            "label": "Bramblehand Champion Construct"
          },
          {
            "path": "packs/data/strength-of-thousands-bestiary.db/cataclysm-beetle.json",
            "label": "Cataclysm Beetle"
          },
          {
            "path": "packs/data/strength-of-thousands-bestiary.db/chromatic-ooze.json",
            "label": "Chromatic Ooze"
          },
          {
            "path": "packs/data/strength-of-thousands-bestiary.db/clockwork-clock-tower.json",
            "label": "Clockwork Clock Tower"
          },
          {
            "path": "packs/data/strength-of-thousands-bestiary.db/contemplative-meditant.json",
            "label": "Contemplative Meditant"
          },
          {
            "path": "packs/data/strength-of-thousands-bestiary.db/contemplative-mentor.json",
            "label": "Contemplative Mentor"
          },
          {
            "path": "packs/data/strength-of-thousands-bestiary.db/contemplative.json",
            "label": "Contemplative"
          },
          {
            "path": "packs/data/strength-of-thousands-bestiary.db/cookie.json",
            "label": "Cookie"
          },
          {
            "path": "packs/data/strength-of-thousands-bestiary.db/crawling-slurry.json",
            "label": "Crawling Slurry"
          },
          {
            "path": "packs/data/strength-of-thousands-bestiary.db/crimson-acolyte.json",
            "label": "Crimson Acolyte"
          },
          {
            "path": "packs/data/strength-of-thousands-bestiary.db/cyclops-bully.json",
            "label": "Cyclops Bully"
          },
          {
            "path": "packs/data/strength-of-thousands-bestiary.db/dajermube.json",
            "label": "Dajermube"
          },
          {
            "path": "packs/data/strength-of-thousands-bestiary.db/damibwa.json",
            "label": "Damibwa"
          },
          {
            "path": "packs/data/strength-of-thousands-bestiary.db/dimari-diji.json",
            "label": "Dimari-Diji"
          },
          {
            "path": "packs/data/strength-of-thousands-bestiary.db/drenchdead.json",
            "label": "Drenchdead"
          },
          {
            "path": "packs/data/strength-of-thousands-bestiary.db/dwandek.json",
            "label": "Dwandek"
          },
          {
            "path": "packs/data/strength-of-thousands-bestiary.db/fire-pot-ubanu.json",
            "label": "Fire-pot Ubanu"
          },
          {
            "path": "packs/data/strength-of-thousands-bestiary.db/formian-mageslayer.json",
            "label": "Formian Mageslayer"
          },
          {
            "path": "packs/data/strength-of-thousands-bestiary.db/formian-queen.json",
            "label": "Formian Queen"
          },
          {
            "path": "packs/data/strength-of-thousands-bestiary.db/formian-worker.json",
            "label": "Formian Worker"
          },
          {
            "path": "packs/data/strength-of-thousands-bestiary.db/froglegs.json",
            "label": "Froglegs"
          },
          {
            "path": "packs/data/strength-of-thousands-bestiary.db/gambulami.json",
            "label": "Gambulami"
          },
          {
            "path": "packs/data/strength-of-thousands-bestiary.db/gbahali.json",
            "label": "Gbahali"
          },
          {
            "path": "packs/data/strength-of-thousands-bestiary.db/giant-goliath-beetle.json",
            "label": "Giant Goliath Beetle"
          },
          {
            "path": "packs/data/strength-of-thousands-bestiary.db/giant-mining-bee.json",
            "label": "Giant Mining Bee"
          },
          {
            "path": "packs/data/strength-of-thousands-bestiary.db/giant-silverfish.json",
            "label": "Giant Silverfish"
          },
          {
            "path": "packs/data/strength-of-thousands-bestiary.db/giant-tsetse-fly.json",
            "label": "Giant Tsetse Fly"
          },
          {
            "path": "packs/data/strength-of-thousands-bestiary.db/giant-worker-bee.json",
            "label": "Giant Worker Bee"
          },
          {
            "path": "packs/data/strength-of-thousands-bestiary.db/gluttonworm.json",
            "label": "Gluttonworm"
          },
          {
            "path": "packs/data/strength-of-thousands-bestiary.db/gnagrif.json",
            "label": "Gnagrif"
          },
          {
            "path": "packs/data/strength-of-thousands-bestiary.db/gold-defender-garrison.json",
            "label": "Gold Defender Garrison"
          },
          {
            "path": "packs/data/strength-of-thousands-bestiary.db/gold-defender.json",
            "label": "Gold Defender"
          },
          {
            "path": "packs/data/strength-of-thousands-bestiary.db/golgopo.json",
            "label": "Golgopo"
          },
          {
            "path": "packs/data/strength-of-thousands-bestiary.db/grave-karina.json",
            "label": "Grave Karina"
          },
          {
            "path": "packs/data/strength-of-thousands-bestiary.db/graveknight-captain.json",
            "label": "Graveknight Captain"
          },
          {
            "path": "packs/data/strength-of-thousands-bestiary.db/graveknight-champion.json",
            "label": "Graveknight Champion"
          },
          {
            "path": "packs/data/strength-of-thousands-bestiary.db/great-grodair.json",
            "label": "Great Grodair"
          },
          {
            "path": "packs/data/strength-of-thousands-bestiary.db/grippli-jinxer.json",
            "label": "Grippli Jinxer"
          },
          {
            "path": "packs/data/strength-of-thousands-bestiary.db/grippli-skirmisher.json",
            "label": "Grippli Skirmisher"
          },
          {
            "path": "packs/data/strength-of-thousands-bestiary.db/grouloop.json",
            "label": "Grouloop"
          },
          {
            "path": "packs/data/strength-of-thousands-bestiary.db/halbrux-far-sight.json",
            "label": "Halbrux Far-sight"
          },
          {
            "path": "packs/data/strength-of-thousands-bestiary.db/hivebound-arboreal.json",
            "label": "Hivebound Arboreal"
          },
          {
            "path": "packs/data/strength-of-thousands-bestiary.db/iiko-dragon.json",
            "label": "I'iko Dragon"
          },
          {
            "path": "packs/data/strength-of-thousands-bestiary.db/ikeshti-brood-minder.json",
            "label": "Ikeshti Brood-Minder"
          },
          {
            "path": "packs/data/strength-of-thousands-bestiary.db/iobane-magus.json",
            "label": "Iobane Magus"
          },
          {
            "path": "packs/data/strength-of-thousands-bestiary.db/ironclad-annihilator-beetle.json",
            "label": "Ironclad Annihilator Beetle"
          },
          {
            "path": "packs/data/strength-of-thousands-bestiary.db/ixamè.json",
            "label": "Ixamè"
          },
          {
            "path": "packs/data/strength-of-thousands-bestiary.db/jackal-guard.json",
            "label": "Jackal Guard"
          },
          {
            "path": "packs/data/strength-of-thousands-bestiary.db/karumzek-swarm.json",
            "label": "Karumzek Swarm"
          },
          {
            "path": "packs/data/strength-of-thousands-bestiary.db/karumzek.json",
            "label": "Karumzek"
          },
          {
            "path": "packs/data/strength-of-thousands-bestiary.db/khefak-scuttler.json",
            "label": "Khefak Scuttler"
          },
          {
            "path": "packs/data/strength-of-thousands-bestiary.db/kilia-mwibo.json",
            "label": "Kilia Mwibo"
          },
          {
            "path": "packs/data/strength-of-thousands-bestiary.db/king-of-biting-ants.json",
            "label": "King of Biting Ants"
          },
          {
            "path": "packs/data/strength-of-thousands-bestiary.db/kiru.json",
            "label": "Kiru"
          },
          {
            "path": "packs/data/strength-of-thousands-bestiary.db/kolbo.json",
            "label": "Kolbo"
          },
          {
            "path": "packs/data/strength-of-thousands-bestiary.db/kreekoss.json",
            "label": "Kreekoss"
          },
          {
            "path": "packs/data/strength-of-thousands-bestiary.db/kurshkin.json",
            "label": "Kurshkin"
          },
          {
            "path": "packs/data/strength-of-thousands-bestiary.db/lignified-adamantine-golem.json",
            "label": "Lignified Adamantine Golem"
          },
          {
            "path": "packs/data/strength-of-thousands-bestiary.db/living-sun-spire.json",
            "label": "Living Sun-Spire"
          },
          {
            "path": "packs/data/strength-of-thousands-bestiary.db/loakan.json",
            "label": "Loakan"
          },
          {
            "path": "packs/data/strength-of-thousands-bestiary.db/mashkudu-the-bully.json",
            "label": "Mashkudu The Bully"
          },
          {
            "path": "packs/data/strength-of-thousands-bestiary.db/mpeshi.json",
            "label": "Mpeshi"
          },
          {
            "path": "packs/data/strength-of-thousands-bestiary.db/mpondo.json",
            "label": "Mpondo"
          },
          {
            "path": "packs/data/strength-of-thousands-bestiary.db/mutated-sewer-ooze.json",
            "label": "Mutated Sewer Ooze"
          },
          {
            "path": "packs/data/strength-of-thousands-bestiary.db/nairu.json",
            "label": "Nairu"
          },
          {
            "path": "packs/data/strength-of-thousands-bestiary.db/nkiruka.json",
            "label": "Nkiruka"
          },
          {
            "path": "packs/data/strength-of-thousands-bestiary.db/norgorberite-spy.json",
            "label": "Norgorberite Spy"
          },
          {
            "path": "packs/data/strength-of-thousands-bestiary.db/old-thrasher.json",
            "label": "Old Thrasher"
          },
          {
            "path": "packs/data/strength-of-thousands-bestiary.db/onyiji.json",
            "label": "Onyiji"
          },
          {
            "path": "packs/data/strength-of-thousands-bestiary.db/pugwampi-sot.json",
            "label": "Pugwampi (SoT)"
          },
          {
            "path": "packs/data/strength-of-thousands-bestiary.db/ravager-of-tindalos.json",
            "label": "Ravager Of Tindalos"
          },
          {
            "path": "packs/data/strength-of-thousands-bestiary.db/reborn-sun-hunter.json",
            "label": "Reborn Sun Hunter"
          },
          {
            "path": "packs/data/strength-of-thousands-bestiary.db/reborn-sun-mage.json",
            "label": "Reborn Sun Mage"
          },
          {
            "path": "packs/data/strength-of-thousands-bestiary.db/reborn-sun-warrior.json",
            "label": "Reborn Sun Warrior"
          },
          {
            "path": "packs/data/strength-of-thousands-bestiary.db/red-commander-ant.json",
            "label": "Red Commander Ant"
          },
          {
            "path": "packs/data/strength-of-thousands-bestiary.db/red-guard-ant.json",
            "label": "Red Guard Ant"
          },
          {
            "path": "packs/data/strength-of-thousands-bestiary.db/red-queen.json",
            "label": "Red Queen"
          },
          {
            "path": "packs/data/strength-of-thousands-bestiary.db/reth.json",
            "label": "Reth"
          },
          {
            "path": "packs/data/strength-of-thousands-bestiary.db/riding-frog.json",
            "label": "Riding Frog"
          },
          {
            "path": "packs/data/strength-of-thousands-bestiary.db/salathiss.json",
            "label": "Salathiss"
          },
          {
            "path": "packs/data/strength-of-thousands-bestiary.db/screaming-sulfur.json",
            "label": "Screaming Sulfur"
          },
          {
            "path": "packs/data/strength-of-thousands-bestiary.db/scrit.json",
            "label": "Scrit"
          },
          {
            "path": "packs/data/strength-of-thousands-bestiary.db/serpentfolk-granitescale.json",
            "label": "Serpentfolk Granitescale"
          },
          {
            "path": "packs/data/strength-of-thousands-bestiary.db/serpentfolk-venom-caller.json",
            "label": "Serpentfolk Venom Caller"
          },
          {
            "path": "packs/data/strength-of-thousands-bestiary.db/shianshi-waymaker.json",
            "label": "Shianshi Waymaker"
          },
          {
            "path": "packs/data/strength-of-thousands-bestiary.db/shieldbearer-construct.json",
            "label": "Shieldbearer Construct"
          },
          {
            "path": "packs/data/strength-of-thousands-bestiary.db/shobhad-enforcer.json",
            "label": "Shobhad Enforcer"
          },
          {
            "path": "packs/data/strength-of-thousands-bestiary.db/shobhad-sniper.json",
            "label": "Shobhad Sniper"
          },
          {
            "path": "packs/data/strength-of-thousands-bestiary.db/sicklehand-construct.json",
            "label": "Sicklehand Construct"
          },
          {
            "path": "packs/data/strength-of-thousands-bestiary.db/silverfish-swarm.json",
            "label": "Silverfish Swarm"
          },
          {
            "path": "packs/data/strength-of-thousands-bestiary.db/skartitch-chip-tooth.json",
            "label": "Skartitch Chip-Tooth"
          },
          {
            "path": "packs/data/strength-of-thousands-bestiary.db/slana.json",
            "label": "Slana"
          },
          {
            "path": "packs/data/strength-of-thousands-bestiary.db/soul-swarm.json",
            "label": "Soul Swarm"
          },
          {
            "path": "packs/data/strength-of-thousands-bestiary.db/sparkeater.json",
            "label": "Sparkeater"
          },
          {
            "path": "packs/data/strength-of-thousands-bestiary.db/spawn-of-taon.json",
            "label": "Spawn of Taon"
          },
          {
            "path": "packs/data/strength-of-thousands-bestiary.db/spellskein-consecrate.json",
            "label": "Spellskein (Consecrate)"
          },
          {
            "path": "packs/data/strength-of-thousands-bestiary.db/spellskein-control-weather.json",
            "label": "Spellskein (Control Weather)"
          },
          {
            "path": "packs/data/strength-of-thousands-bestiary.db/spellskein-heroes-feast.json",
            "label": "Spellskein (Heroes' Feast)"
          },
          {
            "path": "packs/data/strength-of-thousands-bestiary.db/spellskein.json",
            "label": "Spellskein"
          },
          {
            "path": "packs/data/strength-of-thousands-bestiary.db/ssumzili.json",
            "label": "Ssumzili"
          },
          {
            "path": "packs/data/strength-of-thousands-bestiary.db/stone-ghost.json",
            "label": "Stone Ghost"
          },
          {
            "path": "packs/data/strength-of-thousands-bestiary.db/sun-warrior-brigade.json",
            "label": "Sun Warrior Brigade"
          },
          {
            "path": "packs/data/strength-of-thousands-bestiary.db/sunburst-corpse.json",
            "label": "Sunburst Corpse"
          },
          {
            "path": "packs/data/strength-of-thousands-bestiary.db/taapundo.json",
            "label": "Ta'apundo"
          },
          {
            "path": "packs/data/strength-of-thousands-bestiary.db/takulu-ot.json",
            "label": "Takulu Ot"
          },
          {
            "path": "packs/data/strength-of-thousands-bestiary.db/taon.json",
            "label": "Taon"
          },
          {
            "path": "packs/data/strength-of-thousands-bestiary.db/tatterthread.json",
            "label": "Tatterthread"
          },
          {
            "path": "packs/data/strength-of-thousands-bestiary.db/terwa-chosen.json",
            "label": "Terwa Chosen"
          },
          {
            "path": "packs/data/strength-of-thousands-bestiary.db/terwa-prodigy.json",
            "label": "Terwa Prodigy"
          },
          {
            "path": "packs/data/strength-of-thousands-bestiary.db/terwa-star-reader.json",
            "label": "Terwa Star Reader"
          },
          {
            "path": "packs/data/strength-of-thousands-bestiary.db/thasteron-khefak.json",
            "label": "Thasteron Khefak"
          },
          {
            "path": "packs/data/strength-of-thousands-bestiary.db/thiarvo-the-quick.json",
            "label": "Thiarvo the Quick"
          },
          {
            "path": "packs/data/strength-of-thousands-bestiary.db/thorn-guardian.json",
            "label": "Thorn Guardian"
          },
          {
            "path": "packs/data/strength-of-thousands-bestiary.db/tollvych.json",
            "label": "Tollvych"
          },
          {
            "path": "packs/data/strength-of-thousands-bestiary.db/umbo.json",
            "label": "Umbo"
          },
          {
            "path": "packs/data/strength-of-thousands-bestiary.db/unshadowed-anchor-root.json",
            "label": "Unshadowed Anchor Root"
          },
          {
            "path": "packs/data/strength-of-thousands-bestiary.db/unshadowed-haibram.json",
            "label": "Unshadowed Haibram"
          },
          {
            "path": "packs/data/strength-of-thousands-bestiary.db/unshadowed-koride.json",
            "label": "Unshadowed Koride"
          },
          {
            "path": "packs/data/strength-of-thousands-bestiary.db/unshadowed-mariama.json",
            "label": "Unshadowed Mariama"
          },
          {
            "path": "packs/data/strength-of-thousands-bestiary.db/unshadowed-okoro.json",
            "label": "Unshadowed Okoro"
          },
          {
            "path": "packs/data/strength-of-thousands-bestiary.db/urbel.json",
            "label": "Urbel"
          },
          {
            "path": "packs/data/strength-of-thousands-bestiary.db/wereant-disciple.json",
            "label": "Wereant Disciple"
          },
          {
            "path": "packs/data/strength-of-thousands-bestiary.db/wereant-poisoner.json",
            "label": "Wereant Poisoner"
          },
          {
            "path": "packs/data/strength-of-thousands-bestiary.db/wereant-sentinel.json",
            "label": "Wereant Sentinel"
          },
          {
            "path": "packs/data/strength-of-thousands-bestiary.db/worknesh.json",
            "label": "Worknesh"
          },
          {
            "path": "packs/data/strength-of-thousands-bestiary.db/yonsuu.json",
            "label": "Yonsuu"
          },
          {
            "path": "packs/data/strength-of-thousands-bestiary.db/yorulu.json",
            "label": "Yorulu"
          }
        ]
      },
      "the-slithering-bestiary": {
        "label": "The Slithering",
        "itens": [
          {
            "path": "packs/data/the-slithering-bestiary.db/ahvothian.json",
            "label": "Ahvothian"
          },
          {
            "path": "packs/data/the-slithering-bestiary.db/alchemical-golem-slithering.json",
            "label": "Alchemical Golem (Slithering)"
          },
          {
            "path": "packs/data/the-slithering-bestiary.db/angazhani-cultist.json",
            "label": "Angazhani Cultist"
          },
          {
            "path": "packs/data/the-slithering-bestiary.db/aspis-guard.json",
            "label": "Aspis Guard"
          },
          {
            "path": "packs/data/the-slithering-bestiary.db/aspis-technician.json",
            "label": "Aspis Technician"
          },
          {
            "path": "packs/data/the-slithering-bestiary.db/croakchief-globblit-skink-eater.json",
            "label": "Croakchief Globblit Skink-eater"
          },
          {
            "path": "packs/data/the-slithering-bestiary.db/cursebreaker.json",
            "label": "Cursebreaker"
          },
          {
            "path": "packs/data/the-slithering-bestiary.db/fuming-sludge.json",
            "label": "Fuming Sludge"
          },
          {
            "path": "packs/data/the-slithering-bestiary.db/nyamat-mshwe.json",
            "label": "Nyamat Mshwe"
          },
          {
            "path": "packs/data/the-slithering-bestiary.db/paga-nikohian.json",
            "label": "Paga Nikohian"
          }
        ]
      },
      "travel-guide-bestiary": {
        "label": "Lost Omens: Travel Guide",
        "itens": [
          {
            "path": "packs/data/travel-guide-bestiary.db/baccali-alpaca.json",
            "label": "Baccali Alpaca"
          },
          {
            "path": "packs/data/travel-guide-bestiary.db/irriseni-owlbear.json",
            "label": "Irriseni Owlbear"
          },
          {
            "path": "packs/data/travel-guide-bestiary.db/sarkorian-wolf.json",
            "label": "Sarkorian Wolf"
          },
          {
            "path": "packs/data/travel-guide-bestiary.db/vulture-rat.json",
            "label": "Vulture Rat"
          },
          {
            "path": "packs/data/travel-guide-bestiary.db/whalesteed.json",
            "label": "Whalesteed"
          }
        ]
      },
      "troubles-in-otari-bestiary": {
        "label": "Troubles in Otari",
        "itens": [
          {
            "path": "packs/data/troubles-in-otari-bestiary.db/brimstone-rat.json",
            "label": "Brimstone Rat"
          },
          {
            "path": "packs/data/troubles-in-otari-bestiary.db/bugbear-marauder.json",
            "label": "Bugbear Marauder"
          },
          {
            "path": "packs/data/troubles-in-otari-bestiary.db/hargrit-leadbuster.json",
            "label": "Hargrit Leadbuster"
          },
          {
            "path": "packs/data/troubles-in-otari-bestiary.db/kobold-trapmaster.json",
            "label": "Kobold Trapmaster"
          },
          {
            "path": "packs/data/troubles-in-otari-bestiary.db/kotgar-leadbuster.json",
            "label": "Kotgar Leadbuster"
          },
          {
            "path": "packs/data/troubles-in-otari-bestiary.db/kurnugian-jackal.json",
            "label": "Kurnugian Jackal"
          },
          {
            "path": "packs/data/troubles-in-otari-bestiary.db/morgrym-leadbuster.json",
            "label": "Morgrym Leadbuster"
          },
          {
            "path": "packs/data/troubles-in-otari-bestiary.db/omblin-leadbuster.json",
            "label": "Omblin Leadbuster"
          },
          {
            "path": "packs/data/troubles-in-otari-bestiary.db/orc-commander.json",
            "label": "Orc Commander"
          },
          {
            "path": "packs/data/troubles-in-otari-bestiary.db/orc-scrapper.json",
            "label": "Orc Scrapper"
          },
          {
            "path": "packs/data/troubles-in-otari-bestiary.db/scalliwing.json",
            "label": "Scalliwing"
          },
          {
            "path": "packs/data/troubles-in-otari-bestiary.db/stinkweed-shambler.json",
            "label": "Stinkweed Shambler"
          }
        ]
      }
    };
  }

  public getCreatureJson(path: string) {
    return this.http.get<any>(`https://raw.githubusercontent.com/foundryvtt/pf2e/master/${path}`);
  }
}
