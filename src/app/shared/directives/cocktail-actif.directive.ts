import {Directive, HostBinding, Input} from '@angular/core';

@Directive({
  selector: '[appCocktailActif]'
})
export class CocktailActifDirective {

  @HostBinding('style.backgroundColor') backgroundColor: string;
  @HostBinding('style.color') color: string;

  @Input('appCocktailActif') set isActive(condition) {
    if (condition) {
      this.backgroundColor = 'blue';
      this.color = 'white';
    } else {
      this.backgroundColor = 'transparent';
      this.color = 'black';
    }
  }
  constructor() { }

}
