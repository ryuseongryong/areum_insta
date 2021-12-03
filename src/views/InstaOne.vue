<template>
  <Insta msg="Instagram One" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Insta from '../components/Insta.vue';

export default defineComponent({
  name: 'InstaOneView',
  components: {
    Insta,
  },
});
</script>
