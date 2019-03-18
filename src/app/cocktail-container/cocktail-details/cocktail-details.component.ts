import { Component, OnInit } from '@angular/core';
import { Cocktail } from '../../shared/model/cocktail.model';
import {CocktailService} from '../../shared/service/cocktail.service';
import {Ingredient} from '../../shared/model/ingredient.model';
import {PanierService} from '../../shared/service/panier.service';

@Component({
  selector: 'app-cocktail-details',
  templateUrl: './cocktail-details.component.html',
  styleUrls: ['./cocktail-details.component.css']
})
export class CocktailDetailsComponent implements OnInit {
  public cocktail :Cocktail;

  constructor(private cocktailsService :CocktailService, private panierService : PanierService) { }

  ngOnInit() {
    this.cocktailsService.cocktailBehavioSubject.subscribe((cock : Cocktail)=> this.cocktail = cock);
    console.log(this.cocktail);
  }
  addIngredients(ingredients: Ingredient[]): void {

    console.log('ingredients :', ingredients);

    this.panierService.addPanierSerice(ingredients);
  }
}
