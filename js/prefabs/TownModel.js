var HTown = HTown || {};

HTown.TownModel = function(coefs, initialStats, buildings) {

    this.coefs = {};
    this.coefs.populationGrowth = coefs.populationGrowth || 1.02;
    this.coefs.foodConsumption = coefs.foodConsumption || 1;
    this.coefs.productivityPerPerson = coefs.productivityPerPerson || 0.5;

    this.stats = {};
    this.stats.population = initialStats.population;
    this.stats.food = initialStats.food;
    this.stats.money = initialStats.money;

    this.buildings = buildings;

};

HTown.TownModel.prototype.step = function() {
    this.updateBuildingProduction();

    this.stats.population = this.stats.population * this.coefs.populationGrowth;

    //population cannot be greater that housing allows
    this.stats.population = Math.min(this.stats.population, this.stats.housing);

    //update food
    this.stats.food -= this.stats.population * this.coefs.foodConsumption;

    //if food becomes negative, population goes down
    if(this.stats.food < 0) {
        this.stats.population += this.stats.food / this.coefs.foodConsumption;
        this.stats.food = 0;
    }

    //industrial output
    this.stats.money += Math.min(this.stats.population, this.stats.jobs) * this.coefs.productivityPerPerson;

    console.log(this.stats);
};

HTown.TownModel.prototype.updateBuildingProduction = function() {
    this.stats.housing = 0;
    this.stats.jobs = 0;

    this.buildings.forEach(function(building){
        if(building.housing) {
            this.stats.housing += building.housing;
        }

        if(building.jobs) {
            this.stats.jobs += building.jobs;
        }

        if(building.food) {
            this.stats.food += building.food;
        }
    }, this);
};
