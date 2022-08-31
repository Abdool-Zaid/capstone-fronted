<template>
  <h1>register</h1>
  <div class="register">
    <form v-on:submit.prevent="sendUserData()">
      <div class="mb-3">
        <label for="username" class="form-label">username</label>
        <input type="text" class="form-control" v-model="username" />
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">email address</label>
        <input type="email" class="form-control" v-model="email" />
      </div>
      <div class="mb-3">
        <label for="passwordHash" class="form-label">password</label>
        <input type="password" class="form-control" v-model="passwordHash" />
      </div>
      <div class="mb-3">
        <label for="intro" class="form-label">intro</label>
        <input type="text" class="form-control" v-model="intro" />
      </div>
      <div class="mb-3">
        <label for="profile" class="form-label">profile pic</label>
        <input type="text" class="form-control" v-model="profile" />
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "register",
  data() {
    return {
      user: this.$store.state.user,
      username: "",
      email: "",
      passwordHash: "",
      intro: "",
      profile: "",
    };
  },
  methods: {
    async sendUserData() {
      fetch(
        "https://tubular-malasada-d6c6b7.netlify.app/.netlify/functions/api/users/register",
        {
          method: "POST",
          mode:'no-cors',
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: this.username,
            email: this.email,
            passwordHash: this.passwordHash,
            intro: this.intro,
            profile: this.profile,
          }),
        }
      )
        .then((res) => res.json())
        .then((returndata) => {
          if (returndata.error) {
            alert(returndata.error);
          } else {
            alert(returndata.msg);
          }
        });
    },
  },
};
</script>
