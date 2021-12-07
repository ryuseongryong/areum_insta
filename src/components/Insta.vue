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
        id="table"
        border="1"
        align="center"
        width="50%"
        height="10px"
        cellspacing="0"
      >
        <thead>
          <tr align="center" bgcolor="white">
            <!-- <td></td> -->
            <th>링크 입력</th>
            <th>유저이름</th>
            <th>팔로워</th>
            <th>좋아요</th>
            <th>댓글</th>
            <th>인게이지먼트</th>
          </tr>
        </thead>

        <tbody>
          <tr align="center" bgcolor="white">
            <th id="link">
              <input
                id="linkUrl"
                placeholder="https://www.instagram.com/p/"
                @keyup.enter="done()"
                :value="insta.link"
              />
            </th>
            <td id="username" class="blank">{{ insta.username }}</td>
            <td id="followers" class="blank">{{ insta.followers }}</td>
            <td id="likes" class="blank">{{ insta.likes }}</td>
            <td id="replies" class="blank">{{ insta.replies }}</td>
            <td id="engagements" class="blank">{{ insta.engagements }}</td>
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
  name: 'Insta',
  props: {
    msg: String,
  },
  components: { Loader, Modal },
  data() {
    return {
      isLoading: false,
      isWarning: false,
      input: '',
      insta: {
        link: '',
        username: '',
        followers: '',
        likes: '',
        replies: '',
        engagements: '',
      },
    };
  },
  methods: {
    close: function (): void {
      this.isWarning = false;
    },
    done: function (): void {
      this.isLoading = true;
      const linkUrl = (document.getElementById('linkUrl') as HTMLInputElement)
        ?.value;
      this.input = linkUrl;
      console.log('axios...', linkUrl);
      const serverUrl =
        (document.querySelector('#server') as HTMLInputElement)?.value ||
        'http://localhost:3919';
      axios
        .post(`${serverUrl}/scraping/input`, {
          url: (document.getElementById('linkUrl') as HTMLInputElement)?.value,
        })
        .then((res) => {
          this.insta['link'] = linkUrl;
          this.insta['username'] = res.data.name;
          this.insta['followers'] = res.data.followers;
          this.insta['likes'] = res.data.likes;
          this.insta['replies'] = res.data.replies;
          this.insta['engagements'] = res.data.engagements;
          // (
          //   document.getElementById('username') as HTMLTableColElement
          // ).innerText = res.data.name;
          // (
          //   document.getElementById('followers') as HTMLTableRowElement
          // ).innerText = res.data.followers;
          // (document.getElementById('likes') as HTMLTableRowElement).innerText =
          //   res.data.likes;
          // (
          //   document.getElementById('replies') as HTMLTableRowElement
          // ).innerText = res.data.replies;
          // (
          //   document.getElementById('engagements') as HTMLTableRowElement
          // ).innerText = res.data.engagements;
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
</style>
