import { POKEMONS } from "./../mock-database";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-my-catches",
  templateUrl: "./my-catches.component.html",
  styleUrls: ["./my-catches.component.css"],
})
export class MyCatchesComponent implements OnInit {
  constructor(private router: Router) {}

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

  openUrl(name: string): void {
    window.open(
      `https://bulbapedia.bulbagarden.net/wiki/${name}_(Pok%C3%A9mon)`,
      "pokemon"
    );
  }
}
