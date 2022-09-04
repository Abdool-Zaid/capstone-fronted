<template>
  <div class="AllPosts">
    <h1>user page</h1>
    <div id="userCard">
      <img :src="profile" alt="profile picture of user" class="rounded-circle border  border-primary border-opacity-75" />
      <H1>welcome back {{username }}</H1>
      <p>{{ intro }}</p>
      <button class="btn homeButton" @click="logOUT()">log out</button>
    </div>
<div id="userPosts" class=" rounded-top">
  <p>user posts will go here</p>
  <!-- <div id="mainCarousel" class="carousel  slide" data-bs-ride="false" data-bs-touch="true">
    <div class="carousel-inner"> -->
      <div id="posts" v-for="userpost in userPosts" :key="userpost" class="d-flex justify-content-center"  aria-live="assertive" >
          <!-- <div class="carousel-item postCard rounded-pill"> -->
          <p class="d-none">{{userpost.id}}</p>
          <P>{{ userpost.userId }}</P>
          <P>{{ userpost.message }}</P>
      </div>
</div>
      </div>
      <!-- </div> -->
<!-- </div>
  </div> -->
</template>

<script>
export default {
  
  computed: {
    initialise(){
console.log('initialise')
    },
    userPosts() {
                          // localStorage.setItem("user_id", JSON.stringify('returnData'));

      let posts= this.$store.state.posts
      let id=JSON.parse(localStorage.user_id)
let i 
let userPosts=[] 
for(i=0;i<posts.length;i++){
  if(posts[i].userId==id){
userPosts.push(posts[i])
  }
}
console.log(userPosts)

return userPosts;
        },
        user() {
            return this.$store.state.user;
        },
    username() {
      return this.$store.state.username[0]
    },
    profile() {
      return this.$store.state.profile[0]
    },
    intro() {
      return this.$store.state.intro[0]
    },
  },
  mounted() {
    this.sendUserData();
  },
  methods: {
    sendUserData() {
      (this.$store.state.id[0] = JSON.parse(localStorage.user_id)),
        (this.$store.state.username[0] = JSON.parse(localStorage.username)),
        (this.$store.state.intro[0] = JSON.parse(localStorage.intro)),
        (this.$store.state.profile[0] = JSON.parse(localStorage.profile));
      // console.log('set') 
      // setTimeout(function(){
      //   this.username;
      //   this.profile;
      //   this.intro;
      // }, 1000);
    },
    logOUT(){
      alert('till next time ' + JSON.parse(localStorage.username))
      localStorage.clear()
      window.location.reload()
    }
  },
};
</script>
<style scoped>
img{
  height: 28vh;
  aspect-ratio: 1;
}
#userPosts{
  position: fixed;
  bottom: 0;
  left: 0;
  height: 45vh;
overflow-y: scroll;
  border: 5px solid var(--thirty);
  padding: var(--ss);
}
#userPosts > *{
  margin: var(--sm);
  padding: var(--ss);
}
</style>
