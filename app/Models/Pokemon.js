import { appState } from "../AppState.js"


export class Pokemon {
  constructor(data) {
    this.id = data.id
    this.name = data.name
    this.img = this.getImg(data.name)
    this.weight = data.weight
    this.height = data.height
    this.types = data.types[0].type ? data.types[0].type.name : data.types[0]
    // this.types = data.types[0].type.name 
    // NOTE the above method broke when I pushed the data into the sandbox since it had already been found that way.
  }

  getImg(name) {
    let pokemonIndex = appState.pokemons.findIndex(p => p.name == name)
    let index = pokemonIndex + 1
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${index}.svg`
  }

  static ListTemplate(pokemon) {
    return `
    <div class="col-1 text-danger">
    <i class="mdi mdi-pokeball text-dark" id="caught"></i>
  </div>
  <div class="col-11 selectable" onclick="app.pokeAPIPokemonsController.getActive('${pokemon.name}')">
    <h5>${pokemon.name}</h5>
  </div>`
  }

  static MyPokemonListTemplate(pokemon) {
    return `
    <h5><i class="mdi mdi-pokeball text-danger"></i> ${pokemon.name}</h5><br>
    `
  }

  get ActiveTemplate() {
    return `
    <div class="col-10 active-card">
    <div class="text-container">
      <h1>${this.name}</h1>
    </div>
  </div>
  <div class="col-10 d-flex justify-content-center">
    <img
      src="${this.img}"
      alt="${this.name}" class="poke-img">
  </div>
  <div class="col-10 active-card">
    <div class="text-container p-1 row">
      <div class="col-6">
        <p>Height: ${this.height}</p>
        <p>Weight: ${this.weight}</p>
      </div>
      <div class="col-6">
        <p>Type: ${this.types}</p>
        <button class="btn btn-light text-danger" onclick="app.sandboxPokemonsController.catchPokemon()" ><i class="mdi mdi-pokeball"></i> Catch!</button>
      </div>
    </div>
  </div>`
  }
}