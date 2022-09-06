<template>
  <div class="home ">
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
    z-index: -5;
    position: fixed;
    overflow: hidden;
    margin-top:0 !important;
    top: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    background-color: var(--sixty);
  }
</style>