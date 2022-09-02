<template>
  <div class="d-flex  align-items-center logo">
    <img alt="Vue logo" src="https://raw.githubusercontent.com/Abdool-Zaid/capstone-fronted/main/public/favicon.ico">
    <h1 class="text-primary rounded-pill ">{{ msg }}</h1>
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
h1{
  background-color: var(--ten);
  padding: var(--sm);
}
img{
  aspect-ratio: 1;
  margin:var(--ss)
}
</style>
