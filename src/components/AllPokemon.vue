<template>
  <div>
    <div class="panel panel-default">
      <div id="table-overflow">
        <div class="inner-addon left-addon">
          <input
            id="search-bar"
            v-model="search"
            v-bind:placeholder="$t('search')"
          />
        </div>
        <div id="table-container">
          <ul class="list-group">
            <li
              class="list-group-item"
              v-for="(pokemon, index) in filteredItems"
              :key="index"
            >
              <div class="row" @click="detail(pokemon.name)">
                <div class="col-6 text-left">{{ pokemon.name }}</div>
                <div class="col-6 text-right">
                  <img
                    @click="activate(pokemon.name)"
                    v-if="pokemon.selected == false"
                    class="icon"
                    src="../assets/images/estrellaOff.svg"
                  />
                  <img
                    @click="activate(pokemon.name)"
                    v-if="pokemon.selected"
                    class="icon"
                    src="../assets/images/estrellaOn.svg"
                  />
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AllPokemon",
  data() {
    return {
      search: "",
      list: [],
      pokemon: {
        weight: {},
        height: {},
      },

      filter: null,
    };
  },
  methods: {
    /**
     * Retrieve the Pokemon JSON object from data.json.
     */

    activate: function(namePokemon) {
      let lista = this.list;

      lista.forEach((field, index) => {
        if (field.name === namePokemon) {
          if (this.list[index].selected) {
            this.list[index].selected = false;
          } else {
            this.list[index].selected = true;
          }
        }
      });

      localStorage.setItem("Favorites", JSON.stringify(this.list));
    },
    detail:function(namePokemon) {

      

      this.eventBus.emit("callDetailPokemon", namePokemon);

    }
  },
  /**
   * Populate search panel with Pokemon.
   */
  mounted: function() {
    var data = JSON.parse(localStorage.getItem("Favorites"));

    for (let i in data) {
      let object = {};
      object.name = data[i].name;
      object.selected = data[i].selected;
      this.list.push(object);
    }
    //this.getPokemon(json[0]);
  },
  computed: {
    filteredItems() {
      return this.list.filter((item) => {
        return item.name.toLowerCase().indexOf(this.search.toLowerCase()) > -1;
      });
    },
  },
};
</script>

<style scoped>
.icon {
  padding: 0;
  max-height: 50px;
}

.panel {
  background-color: lighten(gray, 28%);
  width: 700px;
  margin: 0 auto;
}

/* Search table */
#table-overflow {
  overflow: hidden;
}

#table-container {
  height: 80vh;
  width: 100%;
  border: none;
  overflow: auto;
  background: #ffffff;
}

#table-container::-webkit-scrollbar {
  display: none;
}

.pokedex-table {
  padding: 10px;
  background: #ffffff;
  cursor: pointer;
}

/* Search bar */
#search-bar {
  width: 100%;
  margin: 50px 0 30px 0;

  border-radius: 0;
  padding: 10px;
  transition: border 0.2s linear;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.04);
  border-radius: 5px;
}

#search-bar,
#search-bar:focus,
#search-bar::placeholder {
  color: gray;
}

.form-control {
  box-shadow: none;
}
/* enable absolute positioning */
.inner-addon {
  position: relative;
}

/* align icon */
.left-addon .glyphicon {
  left: 0px;
}
.right-addon .glyphicon {
  right: 0px;
}

/* add padding  */
.left-addon input {
  padding-left: 30px;
}
.right-addon input {
  padding-right: 30px;
}
</style>
