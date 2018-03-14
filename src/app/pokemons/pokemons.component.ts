import { AppComponent } from './../app.component';
import { POKEMONS } from './../mock-database';
import { Pokemon } from "./../pokemon";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-pokemons",
  templateUrl: "./pokemons.component.html",
  styleUrls: ["./pokemons.component.css"]
})

export class PokemonsComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

  // Randomize list of pokemon each time it loads
  shuffleArray = function(array) {
    let m = array.length, t, i;

    // While there remain elements to shuffle
    while (m) {
      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);
  
      // And swap it with the current element.
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }

    // rearrange z-indexes of each image
    for (var y = 0; y < array.length; y++) {
      array[y].z = array.length - y;
    }

    return array;
  }

  pokemons = this.shuffleArray(POKEMONS).filter(pokemon => !pokemon.choiceMade);

  onCatch(pokemon: Pokemon): void {
    setTimeout(()=> {
      pokemon.catch = true;
      pokemon.choiceMade = true;
      //AppComponent.count = AppComponent.countCatches();
    }, 500);
  }

  onRun(pokemon: Pokemon): void {
    setTimeout(()=> {
      pokemon.catch = false;
      pokemon.choiceMade = true;
    }, 500);
  }
}
