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
    appState.emit('myPokemon')
  }

  async fetchPokemon() {
    let res = await sandbox.get('pokemon')
    appState.myPokemon = res.data
  }

  async release(id) {
    appState.myPokemon = appState.myPokemon.filter(p => p.id != id)
    await sandbox.delete(`pokemon/${id}`)

  }
}

export const sandboxPokemonsService = new SandboxPokemonsService()