var HTown = HTown || {};

HTown.PreloadState = {
    preload: function() {
        this.preloadBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'bar');
        this.preloadBar.anchor.setTo(0.5);
        this.preloadBar.scale.setTo(100, 1);

        this.load.setPreloadSprite(this.preloadBar);

        this.load.image('grass', 'assets/images/grass.png');
        this.load.image('tree', 'assets/images/tree.png');
        this.load.image('crops', 'assets/images/crops.png');
        this.load.image('factory', 'assets/images/factory.png');
        this.load.image('house', 'assets/images/house.png');

        this.load.image('food', 'assets/images/food.png');
        this.load.image('money', 'assets/images/money.png');
        this.load.image('population', 'assets/images/population.png');
        this.load.image('jobs', 'assets/images/worker.png');

        this.load.image('buttonFarm', 'assets/images/button_farm.png');
        this.load.image('buttonFactory', 'assets/images/button_factory.png');
        this.load.image('buttonHouse', 'assets/images/button_house.png');

        this.load.text('buttonData', 'assets/data/buttons.json');
    },
    create: function() {
        this.state.start('Game');
    }
};
