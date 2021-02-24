import { EventEmitter } from 'events';

import cocktailsData from '../data/cocktails.json';
import CocktailInfo from "./cocktail-info";

class CocktailsStore extends EventEmitter {
    _cocktails = [];

    constructor() {
        super();

        this._cocktails = cocktailsData.map((cocktail) => {
            return new CocktailInfo (
                {
                    id: cocktail.id,
                    name: cocktail.name,
                    compound: cocktail.compound,
                    description: cocktail.description,
                    complexity: cocktail.complexity
                }
            )
        })
    };

    getCocktails () {
        return this._cocktails;
    }

    getScore (points) {
        let score = 0;
        for (let i = 0; i < points.length; i++) {
            score += points[i]*this._cocktails[i].complexity;
        }
        return score;
    }
}

export default new CocktailsStore();