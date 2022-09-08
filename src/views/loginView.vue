<template>
  <div class="container d-flex justify-content-center align-items-center">
    <div>
      <form v-on:submit.prevent="sendUserData()">
        <div class="mb-3">
          <label for="email" class="form-label">email address</label>
          <input type="email" class="form-control" v-model="email" />
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Password</label>
          <input type="password" class="form-control" v-model="passwordHash" />
        </div>
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1"
            >keep me logged in</label
          >
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  </div>
</template>
<style>
.container {
  width: 100vw;
  height: 100vh;
}
</style>
<script>
export default {
  data() {
    return {
      user: this.$store.state.user,
      passwordHash: "",
      email: "",
    };
  },
  methods: {
    
// 
    async VerifyUser() {
      fetch(
        "https://tubular-malasada-d6c6b7.netlify.app/.netlify/functions/api/users/user/verify",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "x-auth-token":JSON.parse(localStorage.token)
          },
        }
      )
        .then((res) => res.json())
        .then((tokendata) => {
          if (tokendata.error) {
            alert(tokendata.error);
          } else {
            localStorage.setItem("user_id", JSON.stringify(tokendata.decodedToken.user.id));
            this.$store.state.id.push(tokendata.decodedToken.user.id);
            localStorage.setItem("username", JSON.stringify(tokendata.decodedToken.user.username));
            this.$store.state.username.push(tokendata.decodedToken.user.username);
            localStorage.setItem("intro", JSON.stringify(tokendata.decodedToken.user.intro));
            this.$store.state.intro.push(tokendata.decodedToken.user.intro);
            localStorage.setItem("profile", JSON.stringify(tokendata.decodedToken.user.profile));
            this.$store.state.profile.push(tokendata.decodedToken.user.profile);
            alert(`welcome ` +JSON.parse(localStorage.username))
          }
        });
           },

    async sendUserData() {
      fetch(
        "https://tubular-malasada-d6c6b7.netlify.app/.netlify/functions/api/users/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: this.email,
            passwordHash: this.passwordHash,
          }),
        }
        )
        .then((res) => res.json())
        .then((tokendata) => {
          if (tokendata.error) {
            alert(tokendata.error);
          } else {
            localStorage.setItem("isLoggedIN", JSON.stringify(true));
            localStorage.setItem("token", JSON.stringify(tokendata.token));
          }
        });
        this.VerifyUser()
    },
  },
};
</script>
