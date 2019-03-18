import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CocktailsListComponent } from './cocktail-container/cocktails-list/cocktails-list.component';

import { HeaderComponent } from './header/header.component';
import { CocktailDetailsComponent } from './cocktail-container/cocktail-details/cocktail-details.component';
import { CocktailActifDirective } from './shared/directives/cocktail-actif.directive';
import { PanierComponent } from './panier/panier.component';
import { IngredientsListComponent } from './panier/ingredients-list/ingredients-list.component';
import { CocktailContainerComponent } from './cocktail-container/cocktail-container.component';
import { CocktailEditComponent } from './cocktail-container/cocktail-edit/cocktail-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    CocktailsListComponent,
    HeaderComponent,
    CocktailDetailsComponent,
    CocktailActifDirective,
    PanierComponent,
    IngredientsListComponent,
    CocktailContainerComponent,
    CocktailEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
