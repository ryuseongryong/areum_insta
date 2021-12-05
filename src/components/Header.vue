<template>
  <header>
    <div id="header-pic">
      <img
        class="pic"
        alt="SR logo"
        :src="require('@/assets/developer D.png')"
      />
    </div>
    <div id="intro">
      <p>
        <a href="https://mailto.ryuseongryong@gmail.com">
          📧 E-Mail : ryuseongryong@gmail.com</a
        >
      </p>
      <p>
        <a href="https://github.com/ryuseongryong"
          >🌲 GitHub: https://github.com/ryuseongryong</a
        >
      </p>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Header',
});
</script>

<style scoped>
header {
  display: flex;
  padding-left: 2rem;
}
#header-pic {
  text-align: center;
  margin: 1rem;
}

.pic {
  width: 7rem;
  height: 8rem;
}
</style>
