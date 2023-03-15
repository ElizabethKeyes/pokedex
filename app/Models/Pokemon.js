

export class Pokemon {
  constructor(data) {
    this.id = data.id
    this.name = data.name
    this.img = data.sprites.front_default
    this.weight = data.weight
    this.height = data.height
    this.types = data.types[0].type.name
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
        <p>Types: ${this.types}</p>
        <button class="btn btn-outline-danger text-danger"><i class="mdi mdi-pokeball"></i> Catch!</button>
      </div>
    </div>
  </div>`
  }
}