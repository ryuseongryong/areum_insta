<template>
  <div class="howtouse">
    <Introduce head1="Insta One/Many/Sum 사용법" :items="items" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Introduce from '../components/Introduce.vue';

export default defineComponent({
  name: 'HowToUse',
  components: {
    Introduce,
  },
  data() {
    return {
      items: [
        { msg: '하단의 연락처를 통해 서버주소를 확인하세요!' },
        { msg: '인스타그램 페이지 링크를 넣으세요!' },
        { msg: '링크 입력 후 enter를 입력하거나 완료 버튼을 클릭하세요!' },
        { msg: '기다리면 좋아요, 댓글, 팔로워 수를 가져옵니다!' },
      ],
    };
  },
});
</script>
