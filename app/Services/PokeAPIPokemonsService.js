import { appState } from "../AppState.js";
import { Pokemon } from "../Models/Pokemon.js";

// @ts-ignore
let pokeAPI = axios.create({
  baseURL: `https://pokeapi.co/api/v2/pokemon`,
  timeout: 8000
})

class PokeAPIPokemonsService {
  async fetchPokemon() {
    let res = await pokeAPI.get('')
    appState.pokemons = res.data.results
  }

  async getActive(name) {
    let res = await pokeAPI.get(name)
    appState.activePokemon = new Pokemon(res.data)
  }

}

export const pokeAPIPokemonsService = new PokeAPIPokemonsService()