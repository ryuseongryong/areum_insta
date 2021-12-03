<template>
  <div class="home">
    <Introduce
      msg="환영합니다! 인스타그램 링크로 여러가지 정보를 확인하세요!"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Introduce from '../components/Introduce.vue';

export default defineComponent({
  name: 'Home',
  components: {
    Introduce,
  },
});
</script>
