<template>
  <div class="full">
    <div class="container">
      <div class="row">
        <div class="mt-5 col-6 text-center">
          <button
            @click="activate(1)"
            type="button"
            class="btn-base-inactive"
            :class="{ btnActive: active_el == 1 }"
          >
            <img class="icon" src="../../assets/images/list.svg" />
            {{ $t("all") }}
          </button>
        </div>
        <div class="mt-5 col-6 text-center">
          <button
            @click="activate(2)"
            type="button"
            class="btn-base-inactive"
            :class="{ btnActive: active_el == 2 }"
          >
            <img class="icon" src="../../assets/images/estrella.svg" />
            {{ $t("favorites") }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "footerNav",

  data() {
    return {
      active_el: 1,
    };
  },
  methods: {
    activate: function(el) {
      this.active_el = el;
      if (el == 1) {
        this.eventBus.emit("callList");
      } else {
        this.eventBus.emit("callFavorites");
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.btn-base-inactive {
  align-items: center;

  background: #bfbfbf;
  color: #ffffff;
  border-radius: 60px;
  font-weight: bold;
  font-size: 16px;
  min-width: 100%;
  padding: 10px;
}
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

.container {
  width: 700px;
  padding-bottom: 30px;
}

.titleHome {
  font-weight: bold;
  font-size: 26px;
}
.full {
  width: 100%;
  background-color: #ffffff;
  overflow: hidden;
  position: fixed;
  bottom: 0;
  left: 0;
}
.icon {
  margin-right: 5px;
}
</style>
