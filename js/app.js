var HTown = HTown || {};

HTown.dim = HTown.getGameLandscapeDimensions(800, 600);

HTown.game = new Phaser.Game(HTown.dim.w, HTown.dim.h, Phaser.AUTO);

HTown.game.state.add('Boot', HTown.BootState);
HTown.game.state.add('Preload', HTown.PreloadState);
HTown.game.state.add('Game', HTown.GameState);

HTown.game.state.start('Boot');
