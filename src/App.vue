<template>
  <Header />
  <div id="main-content">
    <Nav />
    <div id="view">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from './components/Header.vue';
import Nav from './components/Nav.vue';
export default defineComponent({
  name: 'App',
  components: { Header, Nav },
});
</script>

<style>
/* apple home page 느낌으로 만들어보기 */
body {
  width: 80rem;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 10px;
}

#main-content {
  display: flex;
  width: 80rem;
}

#view {
  text-align: center;
  width: 60rem;
}

@media screen and (max-width: 900px) {
  body {
    width: 40rem;
  }
  #main-content {
    width: 40rem;
    flex-direction: column;
  }

  #view {
    width: 40rem;
  }
}
</style>
