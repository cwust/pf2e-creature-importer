# pf2e-creature-importer
Firefox addon that imports creatures from the "Pathfinder Second Edition Game System for FoundryVTT" into Roll20.

It does not use any features usually availabe behind Roll20's paywall. Creatures are imported by scripts that executes all steps to create a creature ON SCREEN, just as a regular Roll20 user with a free subscription would do.

# Installation instructions

This project is still on early development stages, but, if you want to give it a try, here are instructions to build it:

To prepare the environment:

- This project uses Angular 15.1.3. To install it, run: npm install -g @angular/cli^15.1.3
- Clone this repository
- To install all dependencies, run: npm install

To build the project:

- Run: ng build --aot

To run it on Firefox
- On Firefox, open "about:debugging";
- Click on "This Firefox" on the left side of the screen;
- Click on "Load Temporary Add-on"
- Choose the manifest.json in <your local project folder>/dist/pf2e-creature-importer
- Open the Roll20 editor on a Pathfinder 2e game.
- Open the add-on (click on the jigsaw icon on the right side of the location bar to show your installed addons)
  
A selection tree will be exhibited. Choose a creature there and click on "Import"
  
# Notes
 
As this project is still in its initial phase, there are a LOT of things not working properly. So, keep these in mind:
  
  - A lot of creatures still fail ot be imported. I've tried with Adamantine Golem, Adult Silver Dragon, Duergar Sharpshooter, and these seem to be ok.
  - Spells are not yet being imported.


# TODO

- Keep selected creature when closing/opening the add-on
- Import spells
