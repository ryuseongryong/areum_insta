<template>
  <div id="app">
    <p>ryuseongryong@gmail.com</p>
    <div id="main-pic">
      <img
        class="pic"
        alt="SR logo"
        :src="require('@/assets/developer D.png')"
      />
    </div>
    <body>
      <ul id="nav">
        <li>
          <router-link to="/" class="active">HOME</router-link>
        </li>
        <li>
          <router-link to="/instaone" class="nav">Insta One</router-link>
        </li>
        <li>
          <router-link to="/instamany" class="nav">Insta Many</router-link>
        </li>
      </ul>
      <div id="view">
        <router-view />
      </div>
    </body>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
// import HelloWorld from './components/HelloWorld.vue';
// import Insta from './components/Insta.vue';
// import InstaMany from './components/InstaMany.vue';

export default defineComponent({
  name: 'App',
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
}

#main-pic {
  align-content: center;
  margin: 1rem;
}

.pic {
  width: 180px;
  height: 210px;
}

body {
  display: flex;
}

#nav {
  text-align: center;
  min-width: 9rem;
  max-height: 10rem;
}

#view {
  min-width: 50rem;
}

ul {
  list-style-type: none;
  margin: 0.5rem;
  padding: 0;
  width: 200px;
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
</style>
