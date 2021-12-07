<template>
  <div>
    <caption>
      🖋<input
        id="server"
        type="text"
        placeholder="서버주소를 입력하세요!"
        :value="server"
      />
    </caption>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ServerControl',
  components: {},
  data() {
    return {
      server: '',
    };
  },
});
</script>

<style scoped>
caption {
  display: flex;
  flex-direction: row;
}
input {
  border: none;
  min-width: 100%;
  background-color: rgb(41, 41, 41);
  font-size: 12px;
  caret-color: gainsboro;
  color: white;
}

input:focus {
  outline: none;
  box-shadow: -1px 2px 0px -1px gainsboro;
}
</style>
