<template>
  <div class="AllPosts">
    <h1>all posts page</h1>
    <button @click="sendUserData()">get</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: this.$store.state.user,
      message: "",
    };
  },
  methods: {
    async sendUserData() {
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
            console.log(returnData)
          }
        });
        setTimeout(sendUserData(), 2000)
    },
  },
}
</script>
