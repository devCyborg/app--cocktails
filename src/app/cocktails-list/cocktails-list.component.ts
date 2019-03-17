import {Component, Input, OnInit} from '@angular/core';
import { Cocktail } from '../shared/model/cocktail.model';
import {CocktailService} from '../shared/service/cocktail.service';

@Component({
  selector: 'app-cocktails-list',
  templateUrl: './cocktails-list.component.html',
  styleUrls: ['./cocktails-list.component.css']
})
export class CocktailsListComponent implements OnInit {

  public cocktails: Cocktail[];

  //par defaut active le cocktail en tete de la liste
  public activeCocktail : number=0;

  constructor(private cocktailsService :CocktailService) { }

  ngOnInit() {
    this.cocktailsService.listCocktailBehaviorSubject.subscribe((listCocktail: Cocktail[])=> this.cocktails= listCocktail);
  }

  //coktail choisi
  pickCockail(index : number) :void{
    this.activeCocktail = index;
    console.log("index:", index);
    this.cocktailsService.chooseCocktail(index);

  }
}
