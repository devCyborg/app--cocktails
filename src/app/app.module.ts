import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CocktailsListComponent } from './cocktails-list/cocktails-list.component';

import { HeaderComponent } from './header/header.component';
import { CocktailDetailsComponent } from './cocktail-details/cocktail-details.component';
import { CocktailActifDirective } from './shared/directives/cocktail-actif.directive';

@NgModule({
  declarations: [
    AppComponent,
    CocktailsListComponent,
    HeaderComponent,
    CocktailDetailsComponent,
    CocktailActifDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
