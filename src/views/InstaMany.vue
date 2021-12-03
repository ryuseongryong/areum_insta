<template>
  <InstaMany msg="Instagram Many" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import InstaMany from '../components/InstaMany.vue';

export default defineComponent({
  name: 'InstaManyView',
  components: {
    InstaMany,
  },
});
</script>
