var HTown = HTown || {};

HTown.GameState = {
    init: function() {
        //game constants
        this.STEP = 2;

        this.game.physics.arcade.gravity.y = 0;
    },
    create: function() {
        //create grass background
        this.background = this.add.tileSprite(0, 0, 1200, 800, 'grass');
        this.game.world.setBounds(0, 0, 1200, 800);

        this.buildings = this.game.add.group();

        var house = new HTown.Building(this, 100, 100, {asset: 'house', housing: 100});
        this.buildings.add(house);

        var farm = new HTown.Building(this, 200, 200, {asset: 'crops', food: 100});
        this.buildings.add(farm);

        var factory = new HTown.Building(this, 300, 300, {asset: 'factory', jobs: 100});
        this.buildings.add(factory);

        //create a town
        this.town = new HTown.TownModel({}, {population: 6, food: 200, money: 100}, this.buildings);

        //simulation timer
        this.simulationTimer = this.game.time.events.loop(Phaser.Timer.SECOND * this.STEP, this.simulationStep, this);
    },
    update: function() {

    },
    simulationStep: function() {
        this.town.step();
    }
};
