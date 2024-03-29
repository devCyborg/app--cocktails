import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Cocktail} from '../model/cocktail.model';
import {Ingredient} from '../model/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  public listCocktailBehaviorSubject : BehaviorSubject<Cocktail[]> = new BehaviorSubject<Cocktail[]>(
    [
        new Cocktail('Mojito', 'http://anotherwhiskyformisterbukowski.com/wp-content/uploads/2016/09/mojito-1.jpg', "Le mojito, prononcé en espagnol, est un cocktail à base de rhum, de citron vert et de feuilles de menthe fraîche, né à Cuba dans les années 1910."
        ,[new Ingredient("perrier", 1),
            new Ingredient("citron", 2),
            new Ingredient("sucre de canne", 3)
          ]
        ),
        new Cocktail('Margarita','https://cdn.liquor.com/wp-content/uploads/2017/07/05150949/Frozen-Margarita-720x720-recipe.jpg', "La Margarita est un cocktail à base de tequila, inventé par des Américains au Mexique. C'est un before lunch qui serait une version du cocktail daisy dans lequel on remplaça le brandy par de la téquila." ,
          [new Ingredient("tequila", 1),
            new Ingredient("citron", 2),
            new Ingredient("sirop fraise", 1)
          ]
          ),
        new Cocktail('Sour', 'https://cdn.liquor.com/wp-content/uploads/2016/08/03142547/Most-Popular-Cocktail-Recipes-July-2016-whiskey-sour-720x378-social.jpg', "Le Gin Sour est un cocktail mixte traditionnel qui précède la prohibition aux États-Unis d'Amérique . C'est une combinaison simple de gin, de jus de citron et de sucre. Ajouter de l'eau gazeuse à ceci le transforme en un gin fizz .",
          [new Ingredient("gin", 1),
            new Ingredient("eau gazeuze", 2),
            new Ingredient("citron", 3)
           ]
          )
      ]
  );

  constructor() { }

  getCocktail (index: number) : Cocktail {
     return this.listCocktailBehaviorSubject.getValue()[index];
  }
}
