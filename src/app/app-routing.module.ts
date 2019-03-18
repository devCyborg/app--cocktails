import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CocktailsListComponent} from './cocktail-container/cocktails-list/cocktails-list.component';

const routes: Routes = [
 /* {path: '', redirectTo :'cocktails', pathMatch:'full'},
  {path: 'cocktails', component: CocktailsListComponent}*/

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
