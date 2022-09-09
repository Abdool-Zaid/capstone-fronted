import {toRaw} from 'vue'

<template>
  <div class="AllPosts">
    <h1>all posts page</h1>
    <div class="postWrapper">
      <div
        v-for="post in Posts"
        :key="post"
        class="d-flex justify-content-center"
        aria-live="assertive"
      >
        <div class="postCard rounded-pill">
          <h6 class="d-none">{{ post.id }}</h6>
          <P
            class="posterName"
           
            :id="'mlem' + post.id"
            >{{ post.userId }}</P
          >
          <P>{{ post.message }}</P>
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
import { toRaw } from "@vue/reactivity";

import PostView from "./PostView.vue";
export default {
  mounted() {
    this.sendUserData();
    this.overloop();
  },
  computed: {
    Posts() {
      return this.$store.state.allPosts;
    },
    user() {
      return this.$store.state.user;
    },
  },
  methods: {
    sendUserData() {
      fetch(
        "https://tubular-malasada-d6c6b7.netlify.app/.netlify/functions/api/userPost",
        {
          method: "GET",

          headers: {
            "Content-Type": "application/json",
            mode: "no-cors",
            "Access-Control-Allow-Origin": "*",
          },
        }
      )
        .then((res) => res.json())
        .then((returnData) => {
          if (returnData.error) {
            alert(returnData.error);
          } else {
            returnData.reverse();
            localStorage.setItem("postData", JSON.stringify(returnData));
            this.$store.state.allPosts = [];
            let i;
            for (i = 0; i < returnData.length; i++) {
              this.$store.state.allPosts.push(returnData[i]);
            }
          }
        });
      // setTimeout(this.sendUserData, 1000);
      // setTimeout(function () {
      //     this.Posts;
      // }, 1000);
    },
    overloop() {
      let obj = document.querySelectorAll(".posterName");
      let users = this.$store.state.users;
      let user = [];
      let rewrite = [];
      let i;
      let u;
      let a;
      for (a = 0; a < obj.length; a++) {
        user.push(obj[a].innerHTML);
      }
      for (u = 0; u < user.length; u++) {
        let userDetails = users.find((o) => o.id == user[u]);
        rewrite.push(toRaw(userDetails));
      }
      for(i=0;i<obj.length;i++){
        obj[i].innerHTML=rewrite[i].username
      }
      setTimeout(this.overloop, 1000);

    },
  },
  components: { PostView },
};
</script>
