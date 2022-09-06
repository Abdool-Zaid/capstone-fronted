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
        <div class="contactCard " v-for="(user, index) in users" :key="user" aria-live="assertive">
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
            :data-bs-target="'#modalNumber' + index"
            >
            my posts
          </p>
          <a :href="`mailto:${user.email}`"  target="_blank" rel="noopener noreferrer">Send Email</a>|
          <a href="mailto:aztoorabally7447@gmail.com"> mail me </a>
        </div>
        
        <!-- Modal -->
        <div
            class="modal fade"
            :id="'modalNumber' + index"
            tabindex="1"
            :aria-labelledby="'m' + index+ 'Label'"
          >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" :id="'modalNumber' + index+ 'Label'">
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
                  

    <form>
      <label for="target-email-id">Target Email ID</label>
      <input
        name="target-email-id"
        :placeholder="user.email"
        type="email"
        v-model="emailId"
        v-on:keyup="updateOutputUrl"
      />
      <label for="subject">Subject</label>
      <input
        name="subject"
        placeholder="Subject"
        type="text"
        v-model="email.subject"
        v-on:keyup="updateOutputUrl"
      />
      <label for="cc">CC</label>
      <input
        name="cc"
        placeholder="CC"
        type="text"
        v-model="email.cc"
        v-on:keyup="updateOutputUrl"
      />
      <label for="bcc">BCC</label>
      <input
        name="bcc"
        placeholder="BCC"
        type="text"
        v-model="email.bcc"
        v-on:keyup="updateOutputUrl"
      />
      <label for="body">Body</label>
      <textarea
        name="body"
        placeholder="Body"
        type="text"
        v-model="email.body"
        v-on:keyup="updateOutputUrl"
      ></textarea>
      <input type="hidden" id="final-link-to-copy" :value="outputUrl" />
    </form>
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

import { thisTypeAnnotation } from '@babel/types';

export default {
  mounted() {
    this.sendUserData();
    this.updateOutputUrl();
  },
  computed: {
    Posts() {
      return this.$store.state.posts;
    },
    users() {
      let allUsers=this.$store.state.users
      let i
      let users=[]
      for(i=0;i<allUsers.length;i++){
        if(allUsers[i].id!=localStorage.user_id){
users.push(allUsers[i])
        }
      }
      return users;

    },
  },
  data(){
    return {
      outputUrl: "Type something",
      emailId: "you@example.com",
      email: {
        subject: "Hey there",
        cc: "somebody@example.com",
        bcc: "somebody.else@example.com",
        body: "Hey there, how have you been?"
      }
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
    contactMe(dataLoad){
      console.log(dataLoad)
      console.trace()
    },
    updateOutputUrl() {
      this.outputUrl = "mailto:" + this.emailId;
      const emailKeys = Object.keys(this.email);
      const remaining = emailKeys.filter(
        (key) => this.email[key].trim().length > 0
      );
      if (remaining.length > 0) {
        this.outputUrl += "?";
      }
      this.outputUrl += remaining
        .map((key) => `${key}=${encodeURI(this.email[key].trim())}`)
        .join("&");
    },
    copyToClipboard() {
      const finalLinkToCopy = document.querySelector("#final-link-to-copy");
      finalLinkToCopy.setAttribute("type", "text");
      finalLinkToCopy.select();
      try {
        let res = document.execCommand("copy");
        alert("Copied to clipboard!");
      } catch (e) {
        alert("Unable to copy! Please select the text & copy it.");
      }
      finalLinkToCopy.setAttribute("type", "hidden");
      window.getSelection().removeAllRanges();
    },
  },
};
</script>
