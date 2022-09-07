<template>
  <div class="AllPosts">
    <h1>all images page</h1>
    <div class="postWrapper">
      <div
        v-for="post in Posts"
        :key="post"
        class="d-flex justify-content-center"
        aria-live="assertive"
      >
        <div class="postCard rounded-pill">
          <h6 class="d-none">{{ post.id }}</h6>
          <P>{{ post.userId }}</P>
          <p>{{post.message}}</p>
          <img :src="post.message" :alt="'images posted by ' +post.userId" :id="'image'+post.id">
        </div>
      </div>
    </div>
  </div>
  <div id="submitPost">
    <p>submit post</p>
    <PostView />
  </div>
</template>
<style>
.postWrapper {
  overflow-y: scroll;
}
.postCard {
  margin: var(--ss);
  padding: var(--ss);
  border: 5px solid var(--thirty);
  width: fit-content;
}
#submitPost {
  position: fixed;
  bottom: 0;
}
</style>
<script>
import PostView from "./PostView.vue";
export default {
  mounted() {
    this.sendUserData();
  },
  computed: {
    Posts() {
      return this.$store.state.allImages;
    },
    user() {
      return this.$store.state.user;
    },
  },
  data(){
    return{
      brokenLink:this.$store.state.brokenLink
    }
  },
  methods: {
    brokenLink(id){
      console.trace()
        // document.getElementById(id).classList
      
    },
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
            returnData.reverse();
            // localStorage.setItem("postData", JSON.stringify(returnData));
            let allImages = (this.$store.state.allImages = []);
            let i;
            let config = "!image";
            for (i = 0; i < returnData.length; i++) {
              if (returnData[i].message.startsWith(config)) {
                allImages.push({
                  id: returnData[i].id,
                  message: returnData[i].message.split(config)[1],
                  userId: returnData[i].userId,
                });
              }
            }
          }
        });
      // setTimeout(this.sendUserData, 1000);
      // setTimeout(function () {
      //     this.Posts;
      // }, 1000);
    },
  },
  components: { PostView },
};
</script>
