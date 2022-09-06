<template>
  <div class="AllPosts">
    <h1>contact us</h1>
    <div id="pageSplitter" class="d-flex">
      <div id="controllers">
        <input type="text" placeholder="search controller" />
        <div >
          <p>carousel controlling carousel</p>
       
        </div>
      </div>
      <div id="emoters" >
        <div class="contactCard " v-for="(user, index) in users" :key="user" >
          <h4>{{ user.username }}</h4>
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
            :data-bs-target="'#m' + user.id"
            >
            contact me
          </p>
        </div>
        
        <!-- Modal -->
        <div
            class="modal fade"
            :id="'m' + user.id"
            tabindex="1"
            
          >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" :id="'m' + index+ 'Label'">
                  post {{ index}}
                </h5>
                <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                ></button>
                </div>
                <div class="modal-body">
                  <div>
                    <input
                    type="text"
                    v-model="message"
                    :placeholder="user.email"
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
                      @click="contactMe(user.email)"
                    >
                     send email
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
.contactCard{
  margin: var(--ss);
  padding: var(--ss);
  border: 2px var(--sixty) solid;
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
      return this.$store.state.users;
    },
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
    contactMe(dataLoad){
      console.log(dataLoad)
      console.trace()
    }
  },
};
</script>
