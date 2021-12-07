<template>
  <header>
    <Nav />
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Nav from './Nav.vue';

export default defineComponent({
  name: 'Header',
  components: {
    Nav,
  },
});
</script>

<style scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 6vh;
}
.bar {
  margin: 0;
  border: 5px solid;
  border-color: #e34131;
}
</style>
