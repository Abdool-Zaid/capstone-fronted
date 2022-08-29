<template>
<div id="nav">

  <h1>navbar</h1> 
  <router-link to="/">Home</router-link> |
  <router-link to="/register">register</router-link>|
  <router-link to="/user">user</router-link>|
  <router-link to="/friendslist">friendslist</router-link>|
  <router-link to="/messages">messages</router-link>|
  <router-link to="/groups">groups</router-link>|
  <router-link to="/post">post</router-link>|
  <router-link to="/groupMessages">groupMessages</router-link>|
  <router-link to="/GroupMembers">GroupMembers</router-link>|
  <router-link to="/GroupPosts">GroupPosts</router-link>|
  <router-link to="/Posts">Posts</router-link>|
  <router-link to="/login">loign</router-link>|
  <router-view/>
</div>
</template>
<script>
  export default{
    name: 'nav'
  }
</script>
<style>
  #nav{
    height: 200vh;

    background-color: blueviolet;
  } 
</style>