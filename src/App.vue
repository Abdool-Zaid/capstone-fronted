<template>
  <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
    <nav></nav>
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
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</template>
// import home from '@/views/HomeView.vue'
// import nav from '@/components/nav.vue'
<script>
  import HomeView from '../src/views/HomeView.vue'
  import nav from '../src/views/navView.vue'
  import login from "../src/views/AboutView.vue"
  export default {
    components: {
      HomeView,
      nav,
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
button{
  position: fixed  !important;
top: 100px !important;
}
span{
background-color: blue;
border-radius: 50%;
}
</style>
