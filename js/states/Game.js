var HTown = HTown || {};

HTown.GameState = {
    init: function() {
        //game constants
        this.STEP = 2;

        this.game.physics.arcade.gravity.y = 0;

        this.game.input.maxPointers = 1;
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

        this.initGui();
    },
    update: function() {
        if(!this.isDraggingMapBlocked) {
            //start dragging map
            if(!this.isDraggingMap) {
                if(this.game.input.activePointer.isDown) {
                    this.isDraggingMap = true;
                    this.startDragPoint = {};
                    this.startDragPoint.x = this.game.input.activePointer.x;
                    this.startDragPoint.y = this.game.input.activePointer.y;
                }
            }
            else {
                this.endDragPoint = {};
                this.endDragPoint.x = this.game.input.activePointer.x;
                this.endDragPoint.y = this.game.input.activePointer.y;

                this.game.camera.x += this.startDragPoint.x - this.endDragPoint.x;
                this.game.camera.y += this.startDragPoint.y - this.endDragPoint.y;

                //after update, take new starting point so the camera starts again later
                this.startDragPoint.x = this.game.input.activePointer.x;
                this.startDragPoint.y = this.game.input.activePointer.y;

                //stop dragging map when you release active pointer
                if(this.game.input.activePointer.isUp) {
                    this.isDraggingMap = false;
                }
            }
        }
    },
    simulationStep: function() {
        this.town.step();
        this.refreshStats();
    },
    initGui: function() {
        var style = {font: '14px Arial', fill: '#fff'};

        //moneyIcon
        this.moneyIcon = this.add.sprite(10, 10, 'money');
        this.moneyIcon.fixedToCamera = true;

        this.moneyLabel = this.add.text(45, 15, '0', style);
        this.moneyLabel.fixedToCamera = true;

        this.foodIcon = this.add.sprite(100, 10, 'food');
        this.foodIcon.fixedToCamera = true;

        this.foodLabel = this.add.text(135, 15, '0', style);
        this.foodLabel.fixedToCamera = true;

        this.populationIcon = this.add.sprite(190, 10, 'population');
        this.populationIcon.fixedToCamera = true;

        this.populationLabel = this.add.text(225, 15, '0', style);
        this.populationLabel.fixedToCamera = true;

        this.jobsIcon = this.add.sprite(280, 10, 'jobs');
        this.jobsIcon.fixedToCamera = true;

        this.jobsLabel = this.add.text(315, 15, '0', style);
        this.jobsLabel.fixedToCamera = true;

        this.refreshStats();
    },
    refreshStats: function() {
        this.moneyLabel.text = Math.round(this.town.stats.money);
        this.foodLabel.text = Math.round(this.town.stats.food);
        this.populationLabel.text = Math.round(this.town.stats.population) + "/" + Math.round(this.town.stats.housing);
        this.jobsLabel.text = Math.round(this.town.stats.jobs);

    }
};
