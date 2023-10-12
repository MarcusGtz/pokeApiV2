import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import { SearchResponse, Ability } from '../pokemons/interfaces/pokemons.interfaces';

@Injectable({providedIn: 'root'})
export class PokemonsService {

  public pokemonsList: Array<any> = [];

  private _tagHistory: string[] = [];
  // private apiKey: string = 'N8dkDqPEIkQstGWF3qXhQBjaHlTPdb5Q';
  // private serviceURL: string = 'http://api.giphy.com/v1/gifs'
  private serviceURL: string = 'https://pokeapi.co/api/v2'

  constructor( private http: HttpClient) { }

  get tagsHistory() {
    return [...this._tagHistory];
  }

  private organizeHistory(tag: string){
    tag = tag.toLowerCase();

    if (this._tagHistory.includes(tag)) {
      this._tagHistory = this._tagHistory.filter( (oldTag) => oldTag !== tag)
    }

    this._tagHistory.unshift( tag );
    this._tagHistory = this.tagsHistory.splice(0,10);
  }

  searchTag (tag: string): void{
    const params = new HttpParams()
    this.organizeHistory(tag);

    this.pokemonsList = [];
    if (tag.length !== 0) {
      fetch(`${this.serviceURL}/pokemon/${ tag }`)
      .then( resp => resp.json() )
      .then( data => {
        console.log('data', data)
        this.pokemonsList.push(data);
        console.log('THIS.POKEMONLIST', this.pokemonsList)
      } )




      console.log('pokemonsList:', this.pokemonsList);
    } else {



      // .set('api_key', this.apiKey)
      // .set('limit', '10')
      // .set('q', tag)

    // this.http.get<SearchResponse>(`${ this.serviceURL}/search?`, {params})
    // this.http.get<SearchResponse>(`${ this.serviceURL}/pokemon/${tag}`)

      // this.http.get<SearchResponse>("https://pokeapi.co/api/v2/pokemon?limit=10&offset=0")
      //   .subscribe( resp => {

      //     this.pokemonsList = resp
      //     console.log(resp);

      //     // console.log(resp.species.name);
      //     // console.log(resp.name);
      //     // console.log(resp.id);
      //     console.log( 'pokemonsList-->.', {Pokemon: this.pokemonsList});
      //     // console.log(resp.species.front_default);

      //   });
      console.log('this.pokemonsList....', this.pokemonsList);

    fetch('https://pokeapi.co/api/v2/pokemon?limit=30&offset=0')
    .then( resp => resp.json() )
    .then (data => {
      console.log('10 pokemones:', data.results)
      for (let index = 0; index < data.results.length; index++) {
        fetch(data.results[index].url)
        .then( resp2 => resp2.json() )
        .then(data2 => {
          this.pokemonsList.push(data2); //todavia no
          console.log('pokemonsList:', this.pokemonsList);
          fetch(data2.abilities[0].ability.url)
          .then(habilities => habilities.json())
          .then(data3 => {
            this.pokemonsList[index].abilities[0].ability.new = (data3);
          })
        })
      }
    });


    // console.log('pokemonsListCHIDAA:', this.pokemonsList);
  }
}

}
