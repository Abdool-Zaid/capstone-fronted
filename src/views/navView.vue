<template>
  <button type="button" class="btn homeButton rounded-pill" data-bs-toggle="modal" data-bs-target="#navModal">
      <div id="navbar"  class="d-flex justify-content-around">
    <h1>{{name}}</h1>
      <h1>
        &#9778;
      </h1>
    </div>
    </button>

<div class="modal fade" id="navModal" tabindex="-1" aria-labelledby="navModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="navModalLabel">Terra Scientia</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div id="nav">
           <button type="button" data-bs-target="#mainCarousel" data-bs-slide-to="0"  @click="dismisModal()" class="active rounded clickable" >home</button>
           <button type="button" data-bs-target="#mainCarousel" data-bs-slide-to="1"  @click="dismisModal()"  class="rounded clickable">login</button>
           <button type="button" data-bs-target="#mainCarousel" data-bs-slide-to="2"  @click="dismisModal()"  class="rounded clickable">register</button>
           <button type="button" data-bs-target="#mainCarousel" data-bs-slide-to="3"  @click="dismisModal()"  class="rounded clickable">user</button>
           <button type="button" data-bs-target="#mainCarousel" data-bs-slide-to="4"  @click="dismisModal()"  class="rounded clickable">Posts</button>
           <button type="button" data-bs-target="#mainCarousel" data-bs-slide-to="5"  @click="dismisModal()"  class="rounded clickable">submit new post</button>
           <button type="button" data-bs-target="#mainCarousel" data-bs-slide-to="6"  @click="dismisModal()"  class="rounded clickable">Images</button>
           <button type="button" data-bs-target="#mainCarousel" data-bs-slide-to="7"  @click="dismisModal()"  class="rounded clickable">Videos</button>
           <button type="button" data-bs-target="#mainCarousel" data-bs-slide-to="8"  @click="dismisModal()"  class="rounded clickable">Audio</button>
           <button type="button" data-bs-target="#mainCarousel" data-bs-slide-to="9"  @click="dismisModal()"  class="rounded clickable">Colours</button>
           <button type="button" data-bs-target="#mainCarousel" data-bs-slide-to="10" @click="dismisModal()"   class="rounded clickable">contact</button>
           <button type="button" data-bs-target="#mainCarousel" data-bs-slide-to="11" @click="dismisModal()"  class="rounded clickable" >about Us </button>
</div>
      </div>
      <div class="modal-footer">
      </div>
    </div>
  </div>
</div>


</template>
<style scoped>
/* .modal-content{
  width: 80vw ;
  height: 90vh;
} */
.homeButton{
  margin-left:var(--ss) ;
  margin-right:var(--ss) ;
  width: 98vw;
  border-color: var(--ten);
  background-color: var(--ten);
  z-index: 10;
  position: fixed;
}
h1{
  color: var(--sixty);
}


.modal-body{
  height: 80vh;
background-color: var(--sixty);
}
button{
  top: 0;
  left: 0;
}
#nav{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}
#nav > * {
width: 100%;
}

.rounded{
  margin:var(--ss);
  padding:var(--ss);
background-color: var(--thirty);
border-color: var(--chesthair);  
color: white;
}
</style>
<script>
import HomeView from './HomeView.vue';
// import HomeView from './HomeView.vue';
  export default{
    name: "NAvBAr",
    components: { HomeView, HomeView },
    data() {
      return {
        name:this.$store.state.name
      }
    },
    methods:{
      dismisModal(){
        let clickEvent = new Event('click');
        document.querySelector('.btn-close').dispatchEvent(clickEvent)
      }
    }
}
</script>
