import { appState } from "../AppState.js"
import { Pokemon } from "../Models/Pokemon.js"

// @ts-ignore
const sandbox = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/elizabeth',
  timeout: 8000
})

class SandboxPokemonsService {

  async catchPokemon() {
    let pokemon = appState.activePokemon
    let res = await sandbox.post('pokemon', pokemon)
    console.log(res.data, 'new pokemon');
    appState.myPokemon.push(new Pokemon(res.data))
  }

  async fetchPokemon() {
    let res = await sandbox.get('pokemon')
    console.log(res.data);
  }
}

export const sandboxPokemonsService = new SandboxPokemonsService()