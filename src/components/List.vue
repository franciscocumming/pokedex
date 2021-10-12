<template>
  <div>
    <Loader v-if="isLoading"></Loader>
    <div v-if="!isLoading" class="list row">
      <div class="col-md-8">
        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="Search by name"
          />
          <div class="input-group-append">
            <button class="btn btn-outline-secondary" type="button">
              Search
            </button>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <h4>Tutorials List</h4>
        <ul class="list-group">
          <li
            class="list-group-item"
            v-for="(tutorial, index) in pokemonList"
            :key="index"
          >
            {{ tutorial.name }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import ServicePokemon from "../services/ServicePokemon";
import Loader from "../plugins/loader/";

export default {
  name: "List",
  created() {
    
    this.loadListPokemon();
  },
  data() {
    return {
      pokemonList: [],
      currentPokemon: null,
      currentIndex: -1,
      nombre: "",
      isLoading: false,
    };
  },
   components: {
    Loader
  },
  methods: {
    loadListPokemon() {
      
      this.isLoading = true;
      ServicePokemon.getAll()
        .then((response) => {
           
          this.pokemonList = JSON.parse(response.results);
          console.log("pruena",this.pokemonList);
          this.isLoading = false;
        })
        .catch((e) => {
          console.log(e);
          this.isLoading = false;
        });
    },

    refreshList() {
      this.loadListPokemon();
      this.currentPokemon = null;
      this.currentIndex = -1;
    },

  
  }
  
};
</script>

<style>
.list {
  text-align: left;
  max-width: 750px;
  margin: auto;
}
</style>
