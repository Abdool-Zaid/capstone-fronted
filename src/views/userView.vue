<template>
  <div class="AllPosts">
    <h1>user page</h1>
    <div id="userCard">
      <img :src="profile" alt="profile picture of user" />
      <H1>welcome back {{ username }}</H1>
      <p>{{ intro }}</p>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.sendUserData();
  },
  data() {
    return {
      id:this.$store.state.id[0] ,
      username:this.$store.state.username[0] ,
      intro:this.$store.state.intro[0] ,
      profile:this.$store.state.profile[0] ,
    };
  },
  methods:{
    sendUserData(){
      this.$store.state.id[0]=JSON.parse(localStorage.user_id),
      this.$store.state.username[0]=JSON.parse(localStorage.username) ,
      this.$store.state.intro[0]=JSON.parse(localStorage.intro) ,
    this.$store.state.profile[0]=JSON.parse(localStorage.profile) 
    // console.log('set')
    setTimeout(this.sendUserData, 1000);
    }
  }
};
</script>
