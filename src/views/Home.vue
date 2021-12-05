<template>
  <div class="home">
    <Introduce
      head1="환영합니다!"
      head2="인스타그램 링크로 여러가지 정보를 확인하세요!"
      :items="items"
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
  data() {
    return {
      items: [],
    };
  },
});
</script>
