<template>
  <div class="AllPosts">
    <h1>all videos page</h1>
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
          <iframe
            width="560"
            height="315"
            :src="post.message"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
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
      return this.$store.state.allVideos;
    },
    user() {
      return this.$store.state.user;
    },
  },
  data() {
    return {
      brokenLink: this.$store.state.brokenLink,
    };
  },
  methods: {
    brokenLink(id) {
      console.trace();
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
            let allVideos = (this.$store.state.allVideos = []);
            let i;
            let config = "!video";
            for (i = 0; i < returnData.length; i++) {
              if (returnData[i].message.startsWith(config)) {
                allVideos.push({
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
