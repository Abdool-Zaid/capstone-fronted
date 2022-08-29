<template>
  <!-- name  -->
  <!--  nav-->
  <!-- <NAvBAr/> -->
  <!--  nav-->
  <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
    </div>
    <div class="carousel-item">
      <home-view/>
    </div>
    <!--  -->
    <div class="carousel-item">
<login/>
    </div>
    <!--  -->
  </div>
  <button class="carousel-control-prev nav-bbutton" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <img src="https://raw.githubusercontent.com/Abdool-Zaid/capstone-fronted/main/src/assets/view.jpg" alt="">
  </button>
  <button class="carousel-control-next nav-bbutton" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <img src="https://raw.githubusercontent.com/Abdool-Zaid/capstone-fronted/main/src/assets/view.jpg" alt="">
  </button>
</div>
</template>
// import home from '@/views/HomeView.vue'
// import nav from '@/components/nav.vue'
<script>
  import HomeView from '../src/views/HomeView.vue'
  import NAvBAr from '../src/views/navView.vue'
  import login from "../src/views/AboutView.vue"
  export default {
    components: {
      HomeView,
      NAvBAr,
      login
    }
  }
  </script>
  
<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Literata', serif;

}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
.nav-bbutton{
  position: fixed  !important;
top: 100px !important;
}
span{
background-color: blue;
border-radius: 50%;
}
</style>
