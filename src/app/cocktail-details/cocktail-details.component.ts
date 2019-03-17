import { Component, OnInit } from '@angular/core';
import { Cocktail } from '../shared/model/cocktail.model';
import {CocktailService} from '../shared/service/cocktail.service';

@Component({
  selector: 'app-cocktail-details',
  templateUrl: './cocktail-details.component.html',
  styleUrls: ['./cocktail-details.component.css']
})
export class CocktailDetailsComponent implements OnInit {
  public cocktail :Cocktail;

  constructor(private cocktailsService :CocktailService) { }

  ngOnInit() {
    this.cocktailsService.cocktailBehavioSubject.subscribe((cock : Cocktail)=> this.cocktail = cock);
  }

}
