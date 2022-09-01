<template>
  <div class="AllPosts">
    <h1>all posts page</h1>
    <div id="posts" v-for="post in posts" :key="post">

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
      user: this.$store.state.user,
      message: "",
    };
  },
  methods: {
    sendUserData() {
      fetch(
        "https://tubular-malasada-d6c6b7.netlify.app/.netlify/functions/api/userPost",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((res) => res.json())
        .then((returnData) => {
          if (returnData.error) {
            alert(returnData.error);
          } else {
            console.log(returnData, Math.ceil(Math.random() * 9999));
          }
        });
        
      setTimeout(this.sendUserData, 500);
    },
  },
};
</script>
