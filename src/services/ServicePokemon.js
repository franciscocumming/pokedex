import http from "../http-common";

class ServicePokemon {
  getAll() {
    return http.get("/pokemon/");
  }

  get(name) {
    return http.get(`/pokemon/${name}`);
  }

  findByTitle(title) {
    return http.get(`/tutorials?title=${title}`);
  }
}

export default new ServicePokemon(); 