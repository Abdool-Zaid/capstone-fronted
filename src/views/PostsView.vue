<template>
  <div class="AllPosts">
    <h1>all posts page</h1>
    <div>
      <div id="posts" v-for="post in Posts" :key="post">
        <div class="postCard" >
          <P>{{ post.userId }}</P>
          <P>{{ post.message }}</P>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.sendUserData();
  },
computed:{
  Posts(){
    return this.$store.state.posts
  }
  
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
            localStorage.setItem("postData", JSON.stringify(returnData));
            this.$store.state.posts = [];
            let i;
            for (i = 0; i < returnData.length; i++) {
              this.$store.state.posts.push(returnData[i]);
            }
          }
        });
        setTimeout(this.sendUserData, 1000);
      setTimeout(function(){
        this.Posts}, 1000);
    },
  },
};
</script>
