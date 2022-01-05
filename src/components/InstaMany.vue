<template>
  <div v-if="isWarning">
    <Modal :link="input" :close="close" />
  </div>
  <div v-else>
    <h1>{{ msg }}</h1>
    <div v-if="isLoading">
      <Loader />
    </div>
    <div v-else>
      <table
        id="table-M"
        border="1"
        align="center"
        width="50%"
        height="10px"
        cellspacing="0"
      >
        <caption>
          [링크주소]
          <input
            id="linkUrl-M"
            placeholder="https://www.instagram.com/p/"
            @keyup.enter="done()"
          />
          <p></p>
        </caption>
        <thead>
          <tr align="center" bgcolor="white">
            <td class="blank">Index</td>
            <th class="blank">링크</th>
            <th class="blank">유저이름</th>
            <th class="blank">팔로워</th>
            <th class="blank">좋아요</th>
            <th class="blank">댓글</th>
            <th class="blank">인게이지먼트</th>
          </tr>
        </thead>

        <tbody v-if="instaArr.length">
          <tr
            v-for="(insta, idx) in instaArr"
            v-bind:key="idx"
            align="center"
            bgcolor="white"
          >
            <th class="blank">
              {{ insta.index }}
            </th>
            <td class="blank">{{ insta.link }}</td>
            <td class="blank">{{ insta.username }}</td>
            <td class="blank">{{ insta.followers }}</td>
            <td class="blank">{{ insta.likes }}</td>
            <td class="blank">{{ insta.replies }}</td>
            <td class="blank">{{ insta.engagements }}</td>
          </tr>
        </tbody>
        <tbody v-else>
          <tr align="center" bgcolor="white">
            <td class="blank"></td>
            <td class="blank"></td>
            <td class="blank"></td>
            <td class="blank"></td>
            <td class="blank"></td>
            <td class="blank"></td>
          </tr>
        </tbody>
      </table>

      <p>
        <button @click="done()">완료</button>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import axios from 'axios';
import Loader from './Loader.vue';
import Modal from './Modal.vue';

export default defineComponent({
  name: 'InstaSum',
  props: {
    msg: String,
  },
  components: { Loader, Modal },
  data() {
    return {
      isLoading: false,
      isWarning: false,
      instaArr: [],
      input: '',
    };
  },

  methods: {
    close: function (): void {
      this.isWarning = false;
    },

    done: function (): void {
      this.isLoading = true;
      const urlsString: string = (
        document.getElementById('linkUrl-M') as HTMLInputElement
      )?.value;
      this.input = urlsString;
      console.log('axios...', urlsString);

      const urlArr: Array<string> = urlsString
        .split(' ')
        .filter((url) => url.slice(0, 27) === 'https://www.instagram.com/p');
      const serverUrl =
        (document.querySelector('#server') as HTMLInputElement)?.value ||
        'http://localhost:3919';

      axios
        // .create({ timeout: 1000 * 60 * 5 })
        .post(`${serverUrl}/scraping/inputMany`, {
          urlArr,
        })
        .then((res) => {
          this.instaArr = res.data.instaArr;
        })
        .catch((err) => {
          console.log('err...', err);
          if (err.response.status === 400) {
            this.isWarning = true;
          }
        })
        .finally(() => {
          console.log('done...');
          this.isLoading = false;
        });
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.blank {
  min-width: 100px;
  width: 50%;
  height: 20px;
  max-height: 20px;
}

tbody {
  max-height: 200px;
}

ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 5px;
}
a {
  color: #42b983;
}
@media screen and (max-width: 768px) {
  .blank {
    min-width: 80px;
    width: 50%;
    height: 20px;
    max-height: 20px;
    font-size: 15px;
  }
}
@media screen and (max-width: 500px) {
  h1 {
    font-size: 25px;
  }

  input {
    width: 150px;
  }
  .blank {
    min-width: 40px;
    width: 50%;
    height: 10px;
    max-height: 20px;
    font-size: 9px;
  }
}
</style>
