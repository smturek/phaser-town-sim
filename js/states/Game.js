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

        //create a town
        this.town = new HTown.TownModel({}, {population: 6, food: 200, money: 100}, [{housing: 2}, {housing: 4}, {food: 50}, {jobs: 10}]);

        //simulation timer
        this.simulationTimer = this.game.time.events.loop(Phaser.Timer.SECOND * this.STEP, this.simulationStep, this);
    },
    update: function() {

    },
    simulationStep: function() {
        this.town.step();
    }
};
