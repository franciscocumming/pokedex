<template>
  <div class="caja">
    <AllPokemon v-if="showList && !isLoading && !isModalVisible" />
    <Favorites v-if="showFavorites && !isLoading && !isModalVisible" />
    <Loader v-if="isLoading" />
    <modalDetail v-show="isModalVisible" @close="closeModal"/>
    <footerNav  v-if="!isLoading && !isModalVisible" />
  </div>
</template>

<script>
import AllPokemon from "./AllPokemon";
import Favorites from "./Favorites.vue";
import footerNav from "./shared/footerNav";
import ServicePokemon from "../services/ServicePokemon";
import Loader from '../plugins/loader/';
import modalDetail from './modalDetail';

export default {
  name: "Pokedex",
  data() {
    return {
      isModalVisible: false,
      isLoading: false,
      showFavorites: false,
      showDetail: false,
      showList:true,
      list: [],
      seleccionado:''
    };
  },
  methods: {
      showModal() {
        this.isModalVisible = true;
      },
      closeModal() {
        this.isModalVisible = false;
      }
  },
  components: {
    AllPokemon,
    footerNav,
    Favorites,
    Loader,
    modalDetail
  },
  mounted() {

    this.isLoading =true;
    ServicePokemon.getAll()
      .then((response) => {
        let data = response.data.results;
        console.log(response.data.results);
      

        for (let i in data) {
          let object = {};
          object.name = data[i].name;
          object.selected = false;
          this.list.push(object);
        }
        localStorage.setItem("Favorites", JSON.stringify(this.list));
        this.isLoading =false ;
        
      })
      .catch(() => {
       
        this.isLoading =false;
      });

    this.eventBus.on("callList", () => {
      this.showList = true;
      this.showFavorites = false;
    });

    this.eventBus.on("callFavorites", () => {
      this.showList = false;
      this.showFavorites = true;
    });

    this.eventBus.on("callFavorites", () => {
      this.showList = false;
      this.showFavorites = true;
    });

    this.eventBus.on("callDetailPokemon", (name) => {

        this.isModalVisible = true;
        this.eventBus.emit("callDetailModal", name );
       
    });




    
  },
};
</script>

<style scoped>
.caja {
  margin: 0 auto;
}
</style>
