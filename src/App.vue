<template>
  <Header />
  <main id="main-content">
    <div id="view">
      <router-view />
    </div>
  </main>
  <Footer />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default defineComponent({
  name: 'App',
  components: { Header, Footer },
});
</script>

<style>
/* apple home page 느낌으로 만들어보기 */
html,
body {
  overflow: visible;
  margin: 0;
  width: 100%;
  height: 100%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#main-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 87vh;
  min-height: 80vh;
  padding-top: 50px;
  /* background-color: red; */
}

#view {
  text-align: center;
  background-color: white;
  width: 100%;
  height: 80vh;
}
@media screen and (max-width: 1024px) {
}
@media screen and (max-width: 768px) {
}
@media screen and (max-width: 500px) {
}
</style>
