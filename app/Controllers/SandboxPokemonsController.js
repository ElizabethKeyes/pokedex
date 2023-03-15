import { appState } from "../AppState.js";
import { Pokemon } from "../Models/Pokemon.js";
import { sandboxPokemonsService } from "../Services/SandboxPokemonsService.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";


function _drawMyPokemon() {
  let myPokemon = appState.myPokemon
  let template = ``
  myPokemon.forEach(p => template += Pokemon.MyPokemonListTemplate(p))
  setHTML('my-pokemon', template)
}
export class SandboxPokemonsController {
  constructor() {
    this.fetchPokemon()
  }

  async catchPokemon(name) {
    try {
      sandboxPokemonsService.catchPokemon()
      Pop.toast('You caught a Pokemon!', 'success', 'top', 1500)
    } catch (error) {
      console.error(error)
      Pop.error(error)
    }
  }

  async fetchPokemon() {
    try {
      sandboxPokemonsService.fetchPokemon()
    } catch (error) {
      console.error(error)
      Pop.error(error)
    }
  }

}