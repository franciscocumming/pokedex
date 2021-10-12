<template>
   
  <div class="container">
   
    <div class="row">
      <div class="mt-5 col-12 text-center">
        <img src="../assets/images/pikachu.svg">
      </div>
      <div class="col-12 mt-5 text-center">
        <h1 class="titleHome">{{ $t("titleWelcome") }}</h1>
        <p class="mt-5">{{ $t("welcomeMsg") }}</p>
       
            
          
          <router-link to="/Pokedex"><button type="button" class="btn btn-base">{{ $t("getStarted") }}</button></router-link>   
      </div>
    </div>

  </div>
</template>

<script>

export default {
  name: 'welcome',
  
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.titleHome{

  font-weight: bold;
  font-size: 26px;

}
.container {
    width: 700px;
}
.btn-base{
  align-items: center;
 
  background: #F22539;
  color: #FFFFFF;
  border-radius: 60px;
  font-weight: bold;
  font-size: 18px;
  padding: 20px;
  line-height: 22px;
  /* identical to box height */

  display: flex;
  align-items: center;
  text-align: center;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0 auto;
  margin-top: 20px;
}
</style>
