<template>
  <div class="AllPosts">
    <form v-on:submit.prevent="sendUserData()">
      <div class="mb-3">
        <label for="message" class="form-label">message</label>
        <input type="text" class="form-control" v-model="message" required />
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  data() {
    return {
      user: this.$store.state.user,
      message: "",
    };
  },
  methods: {
    async sendUserData() {
      fetch(
        "https://tubular-malasada-d6c6b7.netlify.app/.netlify/functions/api/userPost/newPost",
        {
          method: "POST",
        
          headers: {
            "Content-Type": "application/json",
            "x-auth-token": JSON.parse(localStorage.token),
          },
          body: JSON.stringify({
            userId:JSON.parse(localStorage.user_id),
            message: this.message,
          }),
        }
      )
        .then((res) => res.json())
        .then((returnData) => {
          if (returnData.error) {
            alert(returnData.error);
          } else {
            alert(returnData.msg)
          }
        });
    },
  },

}
</script>
