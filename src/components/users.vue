<template>
  </template>
  <script>
  export default {
    name: 'users',
    mounted() {
        this.sendUserData();
    },
    methods: {
        sendUserData() {
            fetch("https://tubular-malasada-d6c6b7.netlify.app/.netlify/functions/api/users/", {
                method: "GET",
                headers: {
                  "Content-Type": "application/json",
                  "x-auth-token":JSON.stringify(localStorage.token)
                },
              })
                .then((res) => res.json())
                .then((returnData) => {
                if (returnData.error) {
                    alert(returnData.error);
                }
                else {
                    returnData.reverse();
                    localStorage.setItem("users", JSON.stringify(returnData));
                    this.$store.state.users = [];
                    let i;
                    for (i = 0; i < returnData.length; i++) {
                        this.$store.state.users.push(returnData[i]);
                    }
                    console.log(this.$store.state.users)
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
  
  <style scoped>
 
  </style>
  