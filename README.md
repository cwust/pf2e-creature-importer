# pf2e-creature-importer
Firefox addon that imports creatures from the "Pathfinder Second Edition Game System for FoundryVTT" into Roll20.

It does not use any features usually availabe behind Roll20's paywall. Creatures are imported by scripts that executes all steps to create a creature ON SCREEN, just as a regular Roll20 user with a free subscription would do.

# How to use

Usage is simple:

- Open a Pathfinder 2e game on Roll20.
- Make sure there are no opened Character Sheets or Handouts
- Open the extension on the upper right part of your browser
- Type a creature name (or search it in the selection tree)
- Select the creature and click on Import.

# Notes
 
As this project is still in its initial phase, there are a LOT of things not working properly. So, keep these in mind:
  
- A lot of creatures still fail ot be imported. I've tried with Adamantine Golem, Adult Silver Dragon, Duergar Sharpshooter, and these seem to be ok.
- Spells are not yet being imported.


# Build instructions

## Setting up the environment

- Make sure you have the latest LTS version of node installed. 
- Install Angular (to be able to build the project): `npm install -g @angular/cli^15.1.3`
- Install web-ext (to be able to generate the .zip bundle): `npm install -g web-ext`
- Clone this repository: `git clone git@github.com:cwust/pf2e-creature-importer.git`. 
- `cd pf2e-creature-importer`
- Install the project dependencies: `npm install`

## Building the project

- Run: `npm run build`. This will generate: 
  - dist/pf2e-creature-importer: Folder with the built, unpacked addon
  - dist/pf2e-creature-importer-x.x.zip: Bundled addon file

## Testing it locally

- Open Firefox and type about:debugging;
- Click on "This Firefox" on the left side of the screen;
- Click on "Load Temporary Add-on"
- Choose the manifest.json in dist/pf2e-creature-importer
- Open the Roll20 editor on a Pathfinder 2e game to test it.


# TODO

- Keep selected creature when closing/opening the add-on
- Import spells
