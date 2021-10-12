<template>
  <div class="modal-backdrop">
    <div class="modal">
      <header class="modal-header">
        <button type="button" class="btn-close" @click="close">
          x
        </button>
      </header>

      <section class="modal-body">
        <slot name="body">
          <Loader v-if="isLoading" />
          <div v-if="!isLoading" class="mauto">
            <img v-bind:src="src" class="img-min" />
            <p>Name: {{ name }}</p>
            <p>Weight: {{ weight }}</p>
            <p>Height: {{ height }}</p>
            <p>Tipo: {{ types }}</p>

            <div class="row mt-5">
            <div class="col-3">
            </div>
            <div class="col-4">
            <button type="button" class="btn btnActive" @click="share()">
              Share to my friends
            </button>
            </div>
            <div class="col-4 text-right">
            <img class="icon" src="../assets/images/estrellaOn.svg" />
            </div>
             <div class="col-1">
            </div>
          </div>
          </div>
        </slot>
      </section>
    </div>
  </div>
</template>

<script>
import Loader from "../plugins/loader/";
import ServicePokemon from "../services/ServicePokemon";
export default {
  name: "Modal",
  data() {
    return {
      isLoading: false,
      data: [],
      src: "",
      name: "",
      weight: "",
      height: "",
      types: "",
    };
  },

  components: {
    Loader,
  },
  methods: {
    close() {
      this.$emit("close");
    },
    share() {
      this.$copyText(
        this.name + "," + this.weight + "," + this.height + "," + this.types
      )
        .then(() => {
          console.log("copied!");
        })
        .catch(() => {
          console.log(`can't copy`);
        });
    },
  },

  mounted() {
    this.eventBus.on("callDetailModal", (name) => {
      this.isLoading = true;
      ServicePokemon.get(name)
        .then((response) => {
          console.log(response.data.results);

          this.data = response.data;
          this.src = response.data.sprites.back_default;
          this.name = name;
          this.weight = response.data.weight;
          this.height = response.data.height;
          debugger;
          response.data.types.forEach((field) => {
            this.types += field.type.name + ", ";
            debugger;
          });

          this.isLoading = false;
        })
        .catch((e) => {
          console.log(e);
          this.isLoading = false;
        });
    });
  },
};
</script>
<style>
.btnActive {
  align-items: center;

  background: #f22539;
  color: #ffffff;
  border-radius: 60px;
  font-weight: bold;
  font-size: 16px;
  min-width: 100%;
  padding: 10px;
}
.mauto {
  margin: 0 auto;
}
.img-min {
  min-width: 20%;
}
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 30;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  margin: 0 auto;
  background: #ffffff;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  width: 700px;
  height: 500px;
  position: fixed;

  left: 0;
  top: 5%;
  right: 0;
  bottom: 0;

  z-index: 9999;
}

.modal-header,
.modal-footer {
  padding: 15px;
  display: flex;
}

.modal-header {
  position: relative;
  border-bottom: 1px solid #eeeeee;
  color: #4aae9b;
  justify-content: space-between;
}

.modal-footer {
  border-top: 1px solid #eeeeee;
  flex-direction: column;
  justify-content: flex-end;
}

.modal-body {
  position: relative;
  padding: 20px 10px;
}

.btn-close {
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  font-size: 20px;
  padding: 10px;
  cursor: pointer;
  font-weight: bold;
  color: #4aae9b;
  background: transparent;
}

.btn-green {
  color: white;
  background: #4aae9b;
  border: 1px solid #4aae9b;
  border-radius: 2px;
}
</style>
