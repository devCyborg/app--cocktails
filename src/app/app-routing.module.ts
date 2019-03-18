import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CocktailContainerComponent} from './cocktail-container/cocktail-container.component';
import {PanierComponent} from './panier/panier.component';
import {CocktailDetailsComponent} from './cocktail-container/cocktail-details/cocktail-details.component';
import {CocktailEditComponent} from './cocktail-container/cocktail-edit/cocktail-edit.component';

const routes: Routes = [
  {path: '', redirectTo :'cocktails', pathMatch:'full'},
  {path: 'cocktails', component: CocktailContainerComponent ,children : [
      {path : ':index', component : CocktailDetailsComponent},
      {path : ':index/edit', component : CocktailEditComponent},
      {path : 'new', component : CocktailEditComponent},
      {path: '', component: CocktailDetailsComponent }

  ]},
  {path: 'panier', component: PanierComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
