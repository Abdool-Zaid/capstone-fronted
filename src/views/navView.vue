<template>
  <!-- Button trigger modal -->
<button type="button" class="btn homeButton" data-bs-toggle="modal" data-bs-target="#navModal">
  <HomeView/>
  </button>

<!-- Modal -->
<div class="modal fade" id="navModal" tabindex="-1" aria-labelledby="navModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="navModalLabel">Terra Scientia</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div id="nav">
           <button type="button" data-bs-target="#mainCarousel" data-bs-slide-to="0" class="active">login</button>
           <button type="button" data-bs-target="#mainCarousel" data-bs-slide-to="1" >register</button>
           <button type="button" data-bs-target="#mainCarousel" data-bs-slide-to="2" >user</button>
           <button type="button" data-bs-target="#mainCarousel" data-bs-slide-to="3" >Posts</button>
           <button type="button" data-bs-target="#mainCarousel" data-bs-slide-to="4" >submit post</button>
           <button type="button" data-bs-target="#mainCarousel" data-bs-slide-to="5" >personal messages</button>
           <button type="button" data-bs-target="#mainCarousel" data-bs-slide-to="6" >Groups</button>
           <button type="button" data-bs-target="#mainCarousel" data-bs-slide-to="7" >groupMessages</button>
           <button type="button" data-bs-target="#mainCarousel" data-bs-slide-to="8" >GroupMembers</button>
           <button type="button" data-bs-target="#mainCarousel" data-bs-slide-to="9" >GroupPosts</button>
           <button type="button" data-bs-target="#mainCarousel" data-bs-slide-to="10" >friendslist</button>
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
  left: 0;
  border: 0px;
}
#nav{
  display: flex;
  flex-direction: column;
  height: 80vh;
}
#nav > * {
width: 100%;
}
</style>
<script>
import HomeView from './HomeView.vue';
// import HomeView from './HomeView.vue';
  export default{
    name: "NAvBAr",
    components: { HomeView}
}
</script>
