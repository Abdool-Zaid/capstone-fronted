<template>
  <div class="d-flex  align-items-center logo">
    <img alt="Vue logo" src="https://raw.githubusercontent.com/Abdool-Zaid/capstone-fronted/main/public/favicon.ico">
    <h1 class="text-primary">{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.logo{
  padding: 1%;
}
img{
  width:152px ;
  aspect-ratio: 1;
}
div{
  /* background-color: green; */
  height: 200vh;
}
</style>
