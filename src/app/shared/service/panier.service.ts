import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Ingredient} from '../model/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class PanierService {

  public panier : BehaviorSubject<Ingredient[]> = new BehaviorSubject<Ingredient[]> (null);

  constructor() { }

  addPanierSerice(ingredients: Ingredient[]): void{
    //on recupere ce qu'il y a deja dans le panier
    const currentValue =this.panier.value;

    if (currentValue) {
      console.log("currentValue.concat(ingredients) :  ",currentValue.concat(ingredients));
      this.panier.next(currentValue.concat(ingredients));
    }
    else {
      this.panier.next(ingredients);
    }

  }

}

