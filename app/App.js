import { PokeAPIPokemonsController } from "./Controllers/PokeAPIPokemonsController.js";
import { SandboxPokemonsController } from "./Controllers/SandboxPokemonsController.js";

class App {
  sandboxPokemonsController = new SandboxPokemonsController();
  pokeAPIPokemonsController = new PokeAPIPokemonsController
}

window["app"] = new App();
