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
           <button type="button" data-bs-target="#mainCarousel" data-bs-slide-to="0" class="active rounded" >home</button>
           <button type="button" data-bs-target="#mainCarousel" data-bs-slide-to="1"  class="rounded">login</button>
           <button type="button" data-bs-target="#mainCarousel" data-bs-slide-to="2"  class="rounded">register</button>
           <button type="button" data-bs-target="#mainCarousel" data-bs-slide-to="3"  class="rounded">user</button>
           <button type="button" data-bs-target="#mainCarousel" data-bs-slide-to="4"  class="rounded">Posts</button>
           <button type="button" data-bs-target="#mainCarousel" data-bs-slide-to="5"  class="rounded">submit new post</button>
           <button type="button" data-bs-target="#mainCarousel" data-bs-slide-to="6"  class="rounded">personal messages</button>
           <button type="button" data-bs-target="#mainCarousel" data-bs-slide-to="7"  class="rounded">Groups</button>
           <button type="button" data-bs-target="#mainCarousel" data-bs-slide-to="8"  class="rounded">groupMessages</button>
           <button type="button" data-bs-target="#mainCarousel" data-bs-slide-to="9"  class="rounded">GroupMembers</button>
           <button type="button" data-bs-target="#mainCarousel" data-bs-slide-to="10"  class="rounded">contact</button>
           <button type="button" data-bs-target="#mainCarousel" data-bs-slide-to="11" class="rounded" >about Us</button>
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
}

.modal-body{
  height: 80vh;
background-color: var(--sixty);
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
}
</script>
