<template>
  <InstaSum msg="Instagram Sum" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import InstaSum from '../components/InstaSum.vue';

export default defineComponent({
  name: 'InstaSumView',
  components: {
    InstaSum,
  },
});
</script>
