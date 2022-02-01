import { POKEMONS } from "./../mock-database";
import { Pokemon } from "./../pokemon";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-pokemons",
  templateUrl: "./pokemons.component.html",
  styleUrls: ["./pokemons.component.css"],
})
export class PokemonsComponent implements OnInit {
  constructor() {}

  currentPointer: number = 0;
  isCatch: boolean = false;
  isRun: boolean = false;

  ngOnInit() {}

  // Randomize list of pokemon each time it loads
  shuffleArray = function (array) {
    let m = array.length,
      t,
      i;

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
  };

  pokemons = this.shuffleArray(POKEMONS).filter(
    (pokemon) => !pokemon.choiceMade
  );

  pokemon = this.pokemons[this.currentPointer];
  nextp = this.pokemons[this.currentPointer + 1];

  onCatch(pokemon: Pokemon): void {
    this.isCatch = true;

    setTimeout(() => {
      pokemon.catch = true;
      pokemon.choiceMade = true;
      this.nextPokemon();
      this.isCatch = false;
    }, 500);
  }

  onRun(pokemon: Pokemon): void {
    this.isRun = true;

    setTimeout(() => {
      pokemon.catch = false;
      pokemon.choiceMade = true;
      this.nextPokemon();
      this.isRun = false;
    }, 500);
  }

  nextPokemon(): void {
    this.pokemon =
      this.currentPointer < this.pokemons.length
        ? this.pokemons[++this.currentPointer]
        : null;
    this.nextp =
      this.currentPointer < this.pokemons.length
        ? this.pokemons[this.currentPointer + 1]
        : null;
  }
}
