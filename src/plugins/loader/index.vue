<template>
  <div class="containerLoader">
    <div class="row">
      <div class="mt-5 col-12 text-center imgr2">
        <img class="imgr" src="../../assets/images/pokebola.svg">
      </div>
      <div class="col-12 mt-5 text-center">
        <h1 class="titleLoader">{{ $t("titleLoader") }}</h1>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Loader',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.titleLoader{

  font-weight: bold;
  font-size: 26px;

}
.containerLoader {
    width: 100%;
    height: 100%;
    margin-top:30%;
    background-color: #ffffff;

}
@keyframes rotate {from {transform: rotate(0deg);}
    to {transform: rotate(360deg);}}
@-webkit-keyframes rotate {from {-webkit-transform: rotate(0deg);}
  to {-webkit-transform: rotate(360deg);}}
.imgr{
    -webkit-animation: 3s rotate linear infinite;
    animation: 3s rotate linear infinite;
    -webkit-transform-origin: 50% 50%;
    transform-origin: 50% 50%;
}
.imgr2 {
     -webkit-animation-direction: reverse;
     animation-direction: reverse;
}

</style>
