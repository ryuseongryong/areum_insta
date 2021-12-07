<template>
  <div id="intro">
    <h1>{{ head1 }}</h1>
    <h2>{{ head2 }}</h2>
    <h3>{{ head3 }}</h3>
    <ol v-if="items.length">
      <li v-for="(item, idx) in items" v-bind:key="idx">
        {{ item.msg }}
      </li>
    </ol>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Introduce',
  props: {
    head1: String,
    head2: String,
    head3: String,
    items: Array,
  },
});
</script>
<style scoped>
#intro {
  height: 100%;
}

ol {
  /* padding-left: 10rem; */
  display: flex;
  flex-direction: column;
  width: 400px;
  margin: 0 auto 0 auto;
}
li {
  text-align: left;
}

/* @media screen and (max-width: 900px) {
  ol {
    padding-left: 3rem;
  }
} */
</style>
