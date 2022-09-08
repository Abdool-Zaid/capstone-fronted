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
  <Footer></Footer>
</template>
// import home from '@/views/HomeView.vue' // import nav from
'@/components/nav.vue'
<script>
import HomeView from "../src/views/HomeView.vue";
import NAvBAr from "../src/views/navView.vue";
import login from "./views/loginView.vue";
import register from "../src/views/RegisterView.vue";
import UserView from "./views/userView.vue";
import PostsView from "./views/PostsView.vue";
import PostView from "./views/PostView.vue";
import MessagesView from "./views/imagesView.vue";
import GroupsView from "./views/videoView.vue";
import GroupMessagesView from "./views/audioView.vue";
import GroupMembersView from "./views/textView.vue";
import FriendsListView from "./views/aboutUsView.vue";
import GroupPostsView from "./views/contactUsView.vue";
import Footer from "./components/footer.vue";
export default {
  mounted(){
this.initialised()
this.reading()
  },
  methods:{
    initialised(){
      
let id = JSON.parse(localStorage.getItem("user_id"))
  ? JSON.parse(localStorage.getItem("user_id"))
  :localStorage.getItem("user_id", JSON.stringify(2));
  let loggedIN=JSON.parse(localStorage.getItem("isLoggedIN"))
  ?JSON.parse(localStorage.getItem("isLoggedIN"))
  :localStorage.setItem('isLoggedIN', JSON.stringify(false));

  this.$store.state.loggedIN=JSON.parse(localStorage.isLoggedIN)

      // localStorage.clear()
  // let user_id = localStorage.setItem("user_id", JSON.stringify(''));
},
reading(){
              // setTimeout(this.sendUserData, 1000);

  // setTimeout(this.reading,1000)
}
  },
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
    Footer
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
.carousel-item :first-child{
  margin-top:2em ;
}
::-webkit-scrollbar {
        display: none;
      }
:root{
  --ss:1%;
  --sm:1em;
--bg:#a9fba247;
--sixty:#0081e5;
--thirty:#844e98;
--ten:#b94100e1;
--chesthair:#00000000;
}
.divBorder{
  
  border: 5px solid var(--ten);
}
.clickable{
  color: var(--thirty) !important;
}
.clickable:hover{
  border: 3px solid var(--ten) !important;
  color: var(--ten) !important;
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
