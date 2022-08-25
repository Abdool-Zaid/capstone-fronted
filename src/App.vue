<template>
  <nav>
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
  </nav>
  <router-view/>
</template>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Literata', serif;

}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
