var HTown = HTown || {};

HTown.GameState = {
    init: function() {
        this.game.physics.arcade.gravity.y = 0;
    },
    create: function() {
        //create grass background
        this.background = this.add.tileSprite(0, 0, 1200, 800, 'grass');
        this.game.world.setBounds(0, 0, 1200, 800);
    },
    update: function() {

    }
};
