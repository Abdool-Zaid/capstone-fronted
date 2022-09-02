<template>
  <div class="AllPosts">
    <h1>user page</h1>
    <div id="userCard">
      <img :src="profile" alt="profile picture of user" class="rounded-circle border  border-primary border-opacity-75" />
      <H1>welcome back {{username }}</H1>
      <p>{{ intro }}</p>
      <button class="btn homeButton" @click="logOUT()">log out</button>
    </div>
  </div>
</template>

<script>
export default {
  
  computed: {
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
  // data() {
  //   return {
  //     id: this.$store.state.id[0],
  //     username: this.$store.state.username[0],
  //     intro: this.$store.state.intro[0],
  //     profile: this.$store.state.profile[0],
  //     user: this.$store.state.user,
  //   };
  // },
  methods: {
    sendUserData() {
      (this.$store.state.id[0] = JSON.parse(localStorage.user_id)),
        (this.$store.state.username[0] = JSON.parse(localStorage.username)),
        (this.$store.state.intro[0] = JSON.parse(localStorage.intro)),
        (this.$store.state.profile[0] = JSON.parse(localStorage.profile));
      // console.log('set') 
      setTimeout(function(){
        this.username;
        this.profile;
        this.intro;
      }, 1000);
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
</style>
