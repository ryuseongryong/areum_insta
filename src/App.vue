<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <img class="pic" alt="SR logo" :src="require('@/assets/developer D.png')" />
    <Insta msg="인스타그램 링크로 좋아요, 댓글, 팔로워 수 확인하기" />
    <div></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
// import HelloWorld from './components/HelloWorld.vue';
import Insta from './components/Insta.vue';

export default defineComponent({
  name: 'App',
  components: {
    Insta,
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.pic {
  width: 180px;
  height: 210px;
}
</style>
