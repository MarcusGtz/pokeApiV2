

import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { PokemonsService } from '../../../services/pokemons.service';

@Component({
  selector: 'pokemons-search-box',
  template: `

    <h5>Buscar:</h5>
    <input type="text"
      class="form-control"
      placeholder="Buscar pokemons..."
      (keyup.enter)="searchTag()"
      #txtTagInput
    >

    `
})

export class SearchBoxComponent {
  @ViewChild( 'txtTagInput' )
  public tagInput!: ElementRef<HTMLInputElement>;

  constructor(private pokemonsService: PokemonsService ) { }

  searchTag() {
    const newTag = this.tagInput.nativeElement.value;

    this.pokemonsService.searchTag(newTag);

    this.tagInput.nativeElement.value = '';
    // console.log({newTag});
  }

}
