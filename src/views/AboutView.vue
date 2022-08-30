<template>
  <div class="container d-flex justify-content-center align-items-center">
    <div>
      <form v-on:submit.prevent="sendUserData()">
        <div class="mb-3">
          <label for="email" class="form-label">Email address</label>
          <input
            type="email"
            class="form-control"
            id="email"
            v-model="email"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Password</label>
          <input type="password" class="form-control" id="password" v-model="passwordHash " />
        </div>
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">keep me logged in</label>
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
      email:this.email,
      passwordHash:this.passwordHash,
    };
  },
  methods: {
    async VerifyUser() {
      const response = await fetch(
        "https://tubular-malasada-d6c6b7.netlify.app/users/user/verify",
        {
          method: "GET",
          mode: "no-cors",
          headers: {
            "Content-type": "application/json",
            "x-auth-token": JSON.parse(localStorage.token),
          },
        }
      );
      let data = await response.json();
      if (data.msg == "Unauthorized Access!") {
        // alert("login first");
        console.log(data.msg);
      } else {
        localStorage.setItem("UserName", JSON.stringify(data.user.username));
        localStorage.setItem("UserID", JSON.stringify(data.user.id));
        localStorage.setItem("UserIntro", JSON.stringify(data.user.intro));
        localStorage.setItem("UserProfile", JSON.stringify(data.user.profile));
        alert(`welcome ` + (await JSON.parse(localStorage.UserName)));
      }
    },

    async sendUserData() {
      fetch("https://tubular-malasada-d6c6b7.netlify.app/.netlify/functions/api/users/login",
        { 
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            passwordHash: passwordHash,
          }),
        }
      )
        .then((res) => res.json())
        .then((tokendata) => {
          localStorage.setItem("token", JSON.stringify(tokendata.token));
          VerifyUser();
        });
    },
  },
};
</script>
