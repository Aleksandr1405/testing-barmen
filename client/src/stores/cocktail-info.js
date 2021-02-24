export default class CocktailInfo {
    constructor(cocktailInfo = {}) {
        this.id = cocktailInfo.id;
        this.name = cocktailInfo.name;
        this.compound = cocktailInfo.compound;
        this.description = cocktailInfo.description;
        this.complexity = cocktailInfo.complexity;
    }
}