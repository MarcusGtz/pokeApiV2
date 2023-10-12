import { Component, Input } from '@angular/core';
// import { Pokemon } from '../../interfaces/pokemons.interfaces';

@Component({
  selector: 'pokemons-card-list',
  templateUrl: './card-list.component.html'
})
export class CardListComponent {

  @Input()
  public pokemons: any = {};

}
