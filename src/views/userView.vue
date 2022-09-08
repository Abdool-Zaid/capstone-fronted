<template>
  <div class="AllPosts">
    <h1>user page</h1>
   
    <div id="userCard"  v-if="loggedIN">
      <img
        :src="profile"
        alt="profile picture of user"
        class="rounded-circle border border-primary border-opacity-75"
      />
      <H1>welcome {{ username }}</H1>
      <p>BIO: {{ intro }}</p>
      <!-- <button class="btn homeButton" @click="logOUT()">log out</button> -->
    </div>
    <div class="extraControlls d-flex justify-content-between">

      <div id="userPosts" class="rounded-top ">
        <div
        id="posts"
        v-for="userpost in userPosts"
        :key="userpost"
        class="d-flex flex-column justify-content-center"
        aria-live="assertive"
        >
        <div class="userPostCard divBorder">
          <p class="d-none">{{ userpost.id }}</p>
          <!-- <P>{{ userpost.userId }}</P> -->
          <P>{{ userpost.message }}</P>
          <div class="controlButtons d-flex justify-content-center">
            <p
            type="button"
            class="btn"
            data-bs-toggle="modal"
            :data-bs-target="'#m' + userpost.id"
            >
            edit
          </p>
          <p class="btn" @click="deletePost(userpost.id)">delete</p>
        </div>
        
        <!-- Modal -->
        <div
            class="modal fade"
            :id="'m' + userpost.id"
            tabindex="-1"
            :aria-labelledby="'m' + userpost.id + 'Label'"
            aria-hidden="true"
          >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" :id="'m' + userpost.id + 'Label'">
                  post {{ userpost.id }}
                </h5>
                <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                ></button>
                </div>
                <div class="modal-body">
                  <div>
                    <input
                    type="text"
                    v-model="message"
                    :placeholder="userpost.message"
                    />
                  </div>
                  <div class="modal-footer">
                    <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                    >
                    Close
                  </button>
                  <button
                  type="button"
                  class="btn btn-primary"
                      @click="editPost(userpost.id)"
                    >
                      Save changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <p>all users</p>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "",
   
    };
  },
  computed: {
    loggedIN(){
       return this.$store.state.loggedIN
    },
    initialise() {
      console.log("initialise");
    },
    userPosts() {
      
      let posts = this.$store.state.allPosts;
      let id = this.$store.state.id;
      let i;
      let userPosts = [];
      for (i = 0; i < posts.length; i++) {
        if (posts[i].userId == id) {
          userPosts.push(posts[i]);
        }
      }

      return userPosts;
    },
    user() {
      return this.$store.state.user;
    },
    username() {
      return this.$store.state.username[0];
    },
    profile() {
      return this.$store.state.profile[0];
    },
    intro() {
      return this.$store.state.intro[0];
    },
  },
  mounted() {
    this.sendUserData();
  },

  methods: {
    // https://tubular-malasada-d6c6b7.netlify.app/.netlify/functions/api/users/
    sendUserData() {
      (this.$store.state.id[0] = JSON.parse(localStorage.user_id)),
        (this.$store.state.username[0] = JSON.parse(localStorage.username)),
        (this.$store.state.intro[0] = JSON.parse(localStorage.intro)),
        (this.$store.state.profile[0] = JSON.parse(localStorage.profile));
      // console.log('set')
      // setTimeout(function(){
      //   this.username;
      //   this.profile;
      //   this.intro;
      // }, 1000);
    },
    logOUT() {
      alert("till next time " + JSON.parse(localStorage.username));
      localStorage.clear();
      window.location.reload();
    },
    async editPost(id) {
      fetch(
        "https://tubular-malasada-d6c6b7.netlify.app/.netlify/functions/api/userPost/" +
          id,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            "x-auth-token": JSON.parse(localStorage.token),
          },
          body: JSON.stringify({
            userId: JSON.parse(localStorage.user_id),
            message: this.message,
          }),
        }
      )
        .then((res) => res.json())
        .then((returnData) => {
          if (returnData.error) {
            alert(returnData.error);
          } else {
          }
          alert(returnData.message);
        });
    },
    async deletePost(id) {
      fetch(
        "https://tubular-malasada-d6c6b7.netlify.app/.netlify/functions/api/userPost/" +
          id,
        {
          method: "DELETE",
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
            alert(`deleted ` + returnData.affectedRows + ` post`);
          }
        });
      console.log(id);
    },
  },
};
</script>
<style scoped>
img {
  height: 28vh;
  aspect-ratio: 1;
}
.extraControlls{
  width: 100vw;
}
.extraControlls > *{
width: 45vw;
}
#userPosts {
  border:2px dashed var(--thirty);
  max-width: 45vw;
  bottom: 0;
  left: 0;
  height: 45vh;
  overflow-y: scroll;
  padding: var(--ss);
}
#userPosts > * {
  margin: var(--sm);
  padding: var(--ss);
}

.userPostCard {
  border-color: var(--thirty);
}
.controlButtons > * {
  padding: var(--ss);
  margin: var(--ss);
}
</style>
