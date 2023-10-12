import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePokemonComponent } from './pages/home-pokemon/home-pokemon.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { CardListComponent } from './components/card-list/card-list.component';



@NgModule({
  declarations: [
    HomePokemonComponent,
    SearchBoxComponent,
    CardListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomePokemonComponent
  ]
})
export class PokemonsModule { }
