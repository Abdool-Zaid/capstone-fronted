<template>
  <NAvBAr />
  <div id="mainCarousel" class="carousel  slide" data-bs-ride="false" data-bs-touch="true">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <HomeView />
      </div>
      <div class="carousel-item ">
        <login />
      </div>
      <!--  -->
      <div class="carousel-item">
        <register />
      </div>
        <div class="carousel-item">
          <div class="show"></div> 
          <UserView />
        </div>
      <div class="carousel-item">
        <PostsView />
      </div>
      <div class="carousel-item">
    <h1>new post page</h1>

        <PostView />
      </div>
      <div class="carousel-item">
        <MessagesView />
      </div>
      <div class="carousel-item">
        <GroupsView />
      </div>
      <div class="carousel-item">
        <GroupMessagesView />
      </div>
      <div class="carousel-item">
        <GroupMembersView />
      </div>
      <div class="carousel-item">
        <GroupPostsView />
      </div>
      <div class="carousel-item">
        <FriendsListView />
      </div>
    </div>
    <!-- <button
      class="carousel-control-prev nav-bbutton"
      type="button"
      data-bs-target="#mainCarousel"
      data-bs-slide="prev"
    >
      <img
        src="https://raw.githubusercontent.com/Abdool-Zaid/capstone-fronted/main/src/assets/view.jpg"
        alt=""
      />
    </button>
    <button
      class="carousel-control-next nav-bbutton"
      type="button"
      data-bs-target="#mainCarousel"
      data-bs-slide="next"
    >
      <img
        src="https://raw.githubusercontent.com/Abdool-Zaid/capstone-fronted/main/src/assets/view.jpg"
        alt=""
      />
    </button> -->
  </div>
</template>
// import home from '@/views/HomeView.vue' // import nav from
'@/components/nav.vue'
<script>
import HomeView from "../src/views/HomeView.vue";
import NAvBAr from "../src/views/navView.vue";
import login from "../src/views/AboutView.vue";
import register from "../src/views/RegisterView.vue";
import UserView from "./views/userView.vue";
import PostsView from "./views/PostsView.vue";
import PostView from "./views/PostView.vue";
import MessagesView from "./views/MessagesView.vue";
import GroupsView from "./views/GroupsView.vue";
import GroupMessagesView from "./views/GroupMessagesView.vue";
import GroupMembersView from "./views/GroupMembersView.vue";
import FriendsListView from "./views/friendsListView.vue";
import GroupPostsView from "./views/GroupPostsView.vue";
export default {
  components: {
    HomeView,
    NAvBAr,
    login,
    register,
    UserView,
    PostsView,
    PostView,
    MessagesView,
    GroupsView,
    GroupMessagesView,
    GroupMembersView,
    FriendsListView,
    GroupPostsView,
  },
};
</script>

<style>

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Literata", serif;
}
::-webkit-scrollbar {
        display: none;
      }
:root{
  --ss:1%;
  --sm:1em;
--bg:#a9fba2;
--sixty:#0081e5;
--thirty:#b94100e1;
--ten:#844e98;
--chesthair:#00000000;
}
.divBorder{
  
  border: 5px solid var(--thirty);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color:var(--sixty);
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
.nav-bbutton {
  position: fixed !important;
}
.nav-bbutton > img {
  border-radius: 50%;
  transform: scale(0.25);
}
.carousel-control-next > img {
  transform: scaleX(-1);
  transform: scale(0.25);
}
span {
  background-color: blue;
  border-radius: 50%;
}
</style>
