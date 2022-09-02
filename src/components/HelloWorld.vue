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

<style scoped>
.logo{
  padding: 1%;
}
img{
  aspect-ratio: 1;
}
</style>
