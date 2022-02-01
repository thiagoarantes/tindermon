import { POKEMONS } from "./../mock-database";
import { Pokemon } from "./../pokemon";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-my-catches",
  templateUrl: "./my-catches.component.html",
  styleUrls: ["./my-catches.component.css"],
})
export class MyCatchesComponent implements OnInit {
  constructor() {}

  searchCriteria = "";
  pokemons = [];

  getList(): void {
    this.pokemons = POKEMONS.filter((pokemon) => pokemon.catch)
      .filter(
        (pokemon) =>
          pokemon.name
            .toLowerCase()
            .indexOf(this.searchCriteria.toLowerCase()) != -1
      )
      .sort((name1, name2) => name1.id - name2.id);
  }

  ngOnInit() {
    this.getList();
  }
}
