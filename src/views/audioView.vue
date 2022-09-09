<template>
  <div class="AllPosts">
    <h1>all audio page</h1>
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
          <p>{{ post.message }}</p>
          <img :src="post.message" />
          <audio controls  allow="autoplay"
>
  <!-- <source :src="post.message" type="audio/ogg"> -->
  <source :src="post.message" type="audio/mpeg">
  Your browser does not support the audio element.
</audio>
          <!-- <iframe
            width="100%"
            height="300"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            :src="post.message"           ></iframe>
          <div
            style="
              font-size: 10px;
              color: #cccccc;
              line-break: anywhere;
              word-break: normal;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
              font-family: Interstate, Lucida Grande, Lucida Sans Unicode,
                Lucida Sans, Garuda, Verdana, Tahoma, sans-serif;
              font-weight: 100;
            "
          >
         
            <a
              :href="post.message"
              title="Black Hole Sonification: Perseus"
              target="_blank"
              style="color: #cccccc; text-decoration: none"
              >Black Hole Sonification: Perseus</a
            >
          </div> -->
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
      return this.$store.state.allAudios;
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
            let allAudios = (this.$store.state.allAudios = []);
            let i;
            let config = "!audio";
            for (i = 0; i < returnData.length; i++) {
              if (returnData[i].message.startsWith(config)) {
                allAudios.push({
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
