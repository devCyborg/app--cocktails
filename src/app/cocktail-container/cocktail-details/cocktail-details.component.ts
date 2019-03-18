import { Component, OnInit } from '@angular/core';
import { Cocktail } from '../../shared/model/cocktail.model';
import {CocktailService} from '../../shared/service/cocktail.service';
import {Ingredient} from '../../shared/model/ingredient.model';
import {PanierService} from '../../shared/service/panier.service';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-cocktail-details',
  templateUrl: './cocktail-details.component.html',
  styleUrls: ['./cocktail-details.component.css']
})
export class CocktailDetailsComponent implements OnInit {
  public cocktail :Cocktail;

  public index : number;

  constructor(private activatedRouter: ActivatedRoute,private cocktailsService :CocktailService, private panierService : PanierService) { }

  ngOnInit() {
    this.activatedRouter.params.subscribe( (params:Params) => {
      //activer cocktail zero par defaut
      if (params.index){
        this.index=params.index;
        this.cocktail=this.cocktailsService.getCocktail(params.index);
      }else{
        this.index=0;
        this.cocktail=this.cocktailsService.getCocktail(0);
      }

    } );
  }
  addIngredients(ingredients: Ingredient[]): void {

    console.log('ingredients :', ingredients);

    this.panierService.addPanierSerice(ingredients);
  }
  getUrl() {
    return ['/cocktails', this.index, 'edit'];
  }
}
