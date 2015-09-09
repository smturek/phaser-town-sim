var HTown = HTown || {};

HTown.TownModel = function(coefs, initialStats) {

    this.coefs = {};
    this.coefs.populationGrowth = coefs.populationGrowth || 1.02;

    this.stats = {};
    this.stats.population = initialStats.population;
    this.stats.food = initialStats.food;
    this.stats.money = initialStats.money;

};

HTown.TownModel.prototype.step = function() {
    this.stats.population = this.stats.population * this.coefs.populationGrowth;
};
