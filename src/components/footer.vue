<template>
    <div class="d-flex  align-items-center logo">
        <div id="footer" class="d-flex justify-content-between" >
            <h6>copyright 2022</h6> 
            <h6>{{name}}</h6> 
        </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'footer',
    data(){
        return{
            name:this.$store.state.name
        }

    }
  }
  </script >
  
  <style scoped>
  #footer{
    width: 100vw;
    position: fixed;
    margin-top: var(--ss);
    margin-left: 0;
    margin-right:0;
    margin-bottom: 0 !important;
    bottom: 0 !important;
    background-color: var(--bg);
}
h6{   
      margin-bottom: 0 !important;
    padding: var(--sm);
  }
   
  </style>
  