import { appState } from "../AppState.js";
import { Pokemon } from "../Models/Pokemon.js";
import { pokeAPIPokemonsService } from "../Services/PokeAPIPokemonsService.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";

// TODO need to include some logic to mark the pokeballs as red if they are owned. Will need to happen on the template in the controller. Might have to use a getter?
function _drawPokemon() {
  let pokemons = appState.pokemons
  let template = ''
  pokemons.forEach(p => template += Pokemon.ListTemplate(p))
  setHTML('list', template)
}

function _drawActive() {
  console.log('drawing active from the pokeAPI controller', appState.activePokemon);
  let activePokemon = appState.activePokemon
  setHTML('active', activePokemon.ActiveTemplate)
}
export class PokeAPIPokemonsController {
  constructor() {
    this.fetchPokemon()
    appState.on('pokemons', _drawPokemon)
    appState.on('activePokemon', _drawActive)
  }

  async fetchPokemon() {
    try {
      await pokeAPIPokemonsService.fetchPokemon()
    } catch (error) {
      console.error(error)
      Pop.error(error)
    }
  }

  async getActive(name) {
    try {
      await pokeAPIPokemonsService.getActive(name)
    } catch (error) {
      console.error(error)
      Pop.error(error)
    }
  }

}