import { Component } from '@angular/core';
import { PokemonsService } from 'src/app/services/pokemons.service';
// import { Pokemon } from '../../interfaces/pokemons.interfaces';

@Component({
  selector: 'app-home-pokemon',
  templateUrl: './home-pokemon.component.html',
  styleUrls: ['./home-pokemon.component.css']
})
export class HomePokemonComponent {

    constructor( private pokemonsService: PokemonsService) {
    }

    get pokemons(): any {
      return this.pokemonsService.pokemonsList;
    }
}
