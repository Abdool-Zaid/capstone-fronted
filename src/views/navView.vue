<template>
  <!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#navModal">
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
  <router-link to="/">Home</router-link><div></div>
  <router-link to="/register">register</router-link><div></div>
  <router-link to="/user">user</router-link><div></div>
  <router-link to="/friendslist">friendslist</router-link><div></div>
  <router-link to="/messages">messages</router-link><div></div>
  <router-link to="/groups">groups</router-link><div></div>
  <router-link to="/post">post</router-link><div></div>
  <router-link to="/groupMessages">groupMessages</router-link><div></div>
  <router-link to="/GroupMembers">GroupMembers</router-link><div></div>
  <router-link to="/GroupPosts">GroupPosts</router-link><div></div>
  <router-link to="/Posts">Posts</router-link><div></div>
  <router-link to="/login">loign</router-link><div></div>
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

#nav{
  display: flex;
  flex-direction: column;
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
