<template>
  <div class="AllPosts">
    <h1>contact us</h1>
    <div id="pageSplitter" class="d-flex">
      <div id="controllers">
        <input type="text" placeholder="search controller" />
        <div>
          <p>carousel controlling carousel</p>
        </div>
      </div>
      <div id="emoters">
        <div
          class="contactCard"
          v-for="(user, index) in users"
          :key="user"
          aria-live="assertive"
        >
          <h4>{{ user.username }}</h4>
          <h4>{{ user.id }}</h4>
          <img
            :src="user.profile"
            alt="user Profile picture"
            class="rounded-circle border border-primary border-opacity-75"
          />
          <div class="controlButtons d-flex justify-content-center">
            <p
              type="button"
              class="btn"
              data-bs-toggle="modal"
              :data-bs-target="'#modalNumber' + index"
              @click="passId(user.id)"
            >
              my posts
            </p>
            <a
              :href="`mailto:${user.email}`"
              target="_blank"
              rel="noopener noreferrer"
              >Send me an Email</a
            >
          </div>

          <!-- Modal -->
          <div
            class="modal fade"
            :id="'modalNumber' + index"
            tabindex="1"
            :aria-labelledby="'m' + index + 'Label'"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" :id="'modalNumber' + index + 'Label'">
                    post {{ index }}
                  </h5>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                  ></button>
                </div>
                <div class="modal-body">
                  <div
                    class="d-flex"
                    v-for="post in userPost"
                    :key="post"
                    :id="'user' + user.id"
                  >
                    <P>{{ post.message }}</P>
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p class="d-none">{{ index }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.carousel-item {
  height: 96vh;
}
img {
  height: 28vh;
  aspect-ratio: 1;
}

#pageSplitter > * {
  border: 3px double var(--ten);
  height: 80vh;
  width: 46vw;
  bottom: 0;
  margin: var(--ss);
  overflow: scroll;
}
#emoters {
  overflow-x: scroll !important;
}
#emoters ::-webkit-scrollbar {
  display: block;
}
.contactCard {
  margin: var(--ss);
  padding: var(--ss);
  border: 2px var(--sixty) solid;
}
.modal-body {
  display: flex;
  height: 72vh;
  overflow: scroll;
}
</style>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  mounted() {
    this.sendUserData();
  },
  computed: {
    Posts() {
      return this.$store.state.posts;
    },

    users() {
      let allUsers = this.$store.state.users;
      let i;
      let users = [];
      for (i = 0; i < allUsers.length; i++) {
        if (allUsers[i].id != localStorage.user_id) {
          users.push(allUsers[i]);
        }
      }
      return users;
    },
    userPost() {
      let allUsers = this.$store.state.users;
      let i;
      let users = [];
      let userPost = [];
      let posts = this.$store.state.allPosts;
      let user_id = localStorage.toggledUser;
      for (i = 0; i < allUsers.length; i++) {
        if (allUsers[i].id != localStorage.user_id) {
          users.push(allUsers[i]);
        }
      }
      let e;
      for (e = 0; e < posts.length; e++) {
        if (posts[e].userId == user_id) {
          userPost.push(posts[e]);
        }
      }

      return userPost;
    },
  },
  data() {
    return {
      outputUrl: "Type something",
      emailId: "you@example.com",
      email: {
        subject: "Hey there",
        cc: "somebody@example.com",
        bcc: "somebody.else@example.com",
        body: "Hey there, how have you been?",
      },
    };
  },
  methods: {
    sendUserData() {
      fetch(
        "https://tubular-malasada-d6c6b7.netlify.app/.netlify/functions/api/users",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "x-auth-token": JSON.parse(localStorage.token),
          },
        }
      )
        .then((res) => res.json())
        .then((returnData) => {
          if (returnData.error) {
            alert(returnData.error);
          } else {
            this.$store.state.users = [];
            let i;
            for (i = 0; i < returnData.length; i++) {
              this.$store.state.users.push(returnData[i]);
            }
          }
        });
      // setTimeout(this.sendUserData, 1000);
      // setTimeout(function () {
      //     this.Posts;
      // }, 1000);
    },
    passId(id) {
      console.log(id);
      localStorage.setItem("toggledUser", JSON.stringify(id));
    },
  },
};
</script>
