import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { MyCatchesComponent } from "./my-catches/my-catches.component";
import { PokemonsComponent } from "./pokemons/pokemons.component";
import { AboutComponent } from "./about/about.component";

const routes: Routes = [
  { path: "**", component: PokemonsComponent },
  { path: "home", component: PokemonsComponent },
  { path: "mycatches", component: MyCatchesComponent },
  { path: "about", component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
