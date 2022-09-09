<template>
  <div class="AllPosts">
    <h1>reach out</h1>
    <div id="pageSplitter" class="d-flex">
      <div id="controllers">
        <h2>contact us</h2>
        <h6>our socials</h6>
        <div id="contactButtons">
      <a href="mailto:aztoorabally7447@gmail.com" target="_blank" rel="noopener noreferrer"> &#9993;</a>
      <a href="https://www.linkedin.com/in/abdool-zaid-toorabally-004921237/" target="_blank" rel="noopener noreferrer">
        <img src="https://raw.githubusercontent.com/Abdool-Zaid/vuePortfolio/main/src/assets/LinkedIn-Logos/LinkedIn-Logos/LI-In-Bug.png" alt="linkedin" class="contactLogo">
      </a>
      <a href="tel:+27621213907" rel="noopener noreferrer">&#9742;</a>
      </div>
        <h6>message us</h6>
        <form action="https://formspree.io/f/xlevgook" method="POST" class="d-flex row justify-content-center">
            <input type="name" name="name"  required  placeholder="Name"/>
      <input type="email" name="email"  required  placeholder="Email"/>
      <input type="company" name="company"  required  placeholder="Company"/>
      <textarea name="message" required placeholder="Message"></textarea>
      <textarea name="conatact" placeholder="Optional contact information"></textarea>
        <button type="submit" class="clickable">send message &#8658;</button>
     
    </form>
        <!-- <form name="contact"   action="/thanks-page" method="POST"  data-netlify="true" netlify>
  <p>
    <label>Name <input type="text" name="name" placeholder="name" /></label>
  </p>
  <p>
    <label>Email <input type="email" name="email" placeholder="email" /></label>
  </p>
  <p>
    <label>message <input type="text" name="message" placeholder="message" /></label>
  </p>
  <p>
    <button type="submit">Send</button>
  </p>
</form> -->
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
h6{
  width: 100%;
  margin: var(--sm);
  border-bottom: 5px var(--bg) double;
}
#contactButtons > *{
  margin: var(--sm);
  width: var(--sm);
  height:var(--sm);
}
.contactLogo{
  width: var(--sm);
  height:var(--sm);
}
form > *{
  margin: var(--ss);
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
        if (posts[e].userId == user_id && posts[e].userId == 29){
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
      this.users
      localStorage.setItem("toggledUser", JSON.stringify(id));
    },
  },
};
</script>
