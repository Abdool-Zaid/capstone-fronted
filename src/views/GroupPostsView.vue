<template>
  <div class="AllPosts">
    
      <div id="carouselExampleControls" class="carousel slide" data-bs-ride="false">
        <div class="carousel-inner">
          <h1>contact us</h1>
          <div class="carousel-item active">
    <div id="pageSplitter">
<div id="controllers">
<input type="text" placeholder="search controller">
<div>
  <p>carousel controlling carousel</p>
</div>
</div>
<div id="emoters">
            <div id="users" v-for="(user, index) in users" :key="user" class="d-flex justify-content-center"  aria-live="assertive" >
              <h4>{{user.username}}</h4>
              <img :src="user.profile" alt="user Profile picture"   class="rounded-circle border border-primary border-opacity-75">
              <p>{{index}}</p>
            </div>
            
          </div>
        </div>
        </div>
          <div class="carousel-item">
            <h4>div</h4>
          </div>
          <div class="carousel-item">
            <h4>div</h4>
          </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</div>
</div>
</template>
<style>
  .carousel-item{
    height: 96vh;
    overflow: scroll;
  }
  img {
  height: 28vh;
  aspect-ratio: 1;
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
            fetch("https://tubular-malasada-d6c6b7.netlify.app/.netlify/functions/api/users", {
                method: "GET",
                headers: {
                  "Content-Type": "application/json",
                  "x-auth-token":JSON.parse(localStorage.token)
                },
              })
                .then((res) => res.json())
                .then((returnData) => {
                if (returnData.error) {
                    alert(returnData.error);
                }
                else {

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
    },
}
</script>
