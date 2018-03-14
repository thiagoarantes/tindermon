import { POKEMONS } from './../mock-database';
import { Pokemon } from "./../pokemon";
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-catches',
  templateUrl: './my-catches.component.html',
  styleUrls: ['./my-catches.component.css']
})

export class MyCatchesComponent implements OnInit {
  constructor() { }

  searchCriteria = "";
  pokemons = [];

  getList(): void {
    this.pokemons = POKEMONS.filter(pokemon => pokemon.catch)
      .filter(pokemon => pokemon.name.toLowerCase().indexOf(this.searchCriteria.toLowerCase()) != -1)
      .sort(function (name1, name2) {
        if (name1.id < name2.id) {
          return -1;
        } else if (name1.id > name2.id) {
          return 1;
        } else {
          return 0;
        }
      });
  }

  ngOnInit() {
    this.getList();
  }
}
