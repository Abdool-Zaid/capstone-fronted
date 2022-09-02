<template>
  <div class="home ">
    <!-- <h1>aaaaaaaaa</h1> -->
    <HelloWorld msg="Welcome to the land of knowledge"/>

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
<style>
  .home{
    width: 100vw;
    height: 90vh;
    display: flex;
    justify-content: center;
  }
</style>