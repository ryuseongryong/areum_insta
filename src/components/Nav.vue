<template>
  <ul id="nav">
    <li>
      <router-link to="/" class="active">HOME</router-link>
    </li>
    <li>
      <router-link to="/howtouse" class="nav">How To Use</router-link>
    </li>
    <li>
      <router-link to="/instaone" class="nav">Insta One</router-link>
    </li>
    <li>
      <router-link to="/instamany" class="nav">Insta Many</router-link>
    </li>
    <li>
      <router-link to="/instasum" class="nav">Insta Sum</router-link>
    </li>
  </ul>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Nav',
});
</script>

<style scoped>
#nav {
  text-align: center;
  min-width: 9rem;
  height: 15rem;
}
ul {
  list-style-type: none;
  margin: 0.5rem;
  padding: 0;
  width: 10rem;
  background-color: #f1f1f1;
}
li a {
  display: block;
  color: #000;
  padding: 0.8rem 1.6rem;
  text-decoration: none;
}
li a.active {
  background-color: #4caf50;
  color: white;
}
li a:hover:not(.active) {
  background-color: #555;
  color: white;
}
@media screen and (max-width: 900px) {
  #nav {
    text-align: center;
    min-width: 40rem;
    height: 3rem;
  }
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    background-color: #f1f1f1;
  }
  ul:after {
    content: '';
    display: block;
    clear: both;
  }
  li {
    float: left;
  }
  li a {
    display: block;
    color: #000;
    text-align: center;
    padding: 0.8rem 1.6rem;
    text-decoration: none;
  }
  li a:hover:not(.active) {
    background-color: #555;
  }
  .active {
    background-color: #4caf50;
  }
}
</style>
