import {Component, OnDestroy, OnInit} from '@angular/core';
import {Ingredient} from '../../shared/model/ingredient.model';
import {PanierService} from '../../shared/service/panier.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-ingredients-list',
  templateUrl: './ingredients-list.component.html',
  styleUrls: ['./ingredients-list.component.css']
})
export class IngredientsListComponent implements OnInit,OnDestroy {

  public ingredients : Ingredient[]=[new Ingredient("citron", 2)];
  subscription: Subscription;

  constructor(private paniersService: PanierService) { }

  ngOnInit() {
    this.subscription=this.paniersService.panier.subscribe((ingredients) => this.ingredients=ingredients);
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
