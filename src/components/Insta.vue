<template>
  <div>
    <h1>{{ msg }}</h1>
    <table
      id="table"
      border="1"
      align="center"
      width="50%"
      height="10px"
      cellspacing="1"
    >
      <caption>
        [링크를 입력하세요.]
      </caption>
      <thead>
        <tr align="center" bgcolor="white">
          <!-- <td></td> -->
          <th>링크 입력</th>
          <th>좋아요</th>
          <th>댓글</th>
          <th>팔로워</th>
          <!-- <th>제목</th> -->
          <th>유저아이디</th>
        </tr>
      </thead>

      <tbody>
        <tr align="center" bgcolor="white">
          <th id="link">
            <input
              id="linkUrl"
              placeholder="https://www.instagram.com/p/CWsAX5UhrIY/"
              @keyup.enter="enter()"
            />
          </th>
          <td id="likes" class="blank"></td>
          <td id="replies" class="blank"></td>
          <td id="followers" class="blank"></td>
          <!-- <td id="title" class="blank"></td> -->
          <td id="username" class="blank"></td>
        </tr>
      </tbody>
    </table>
    <p>
      <button @click="done()">완료</button>
    </p>
    <!-- <p>사용횟수: {{ counter }}</p>
    <p>방문자수: {{ visitor }}</p> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import axios from 'axios';

export default defineComponent({
  name: 'Insta',
  props: {
    msg: String,
  },
  methods: {
    done: () => {
      console.log(
        'axios...',
        (document.getElementById('linkUrl') as HTMLInputElement)?.value
      );
      axios
        .post('http://localhost:3919/scraping/input', {
          url: (document.getElementById('linkUrl') as HTMLInputElement)?.value,
        })
        .then((res) => {
          (
            document.getElementById('username') as HTMLTableColElement
          ).innerText = res.data.name;
          (document.getElementById('title') as HTMLTableRowElement).innerText =
            res.data.title;
        })
        .catch((err) => {
          console.log('err...', err);
          if (err.response.status === 404) {
            alert('링크를 입력해주세요');
          }
        })
        .finally(() => console.log('done...'));
    },
    enter: () => {
      console.log(
        'axios...',
        (document.getElementById('linkUrl') as HTMLInputElement)?.value
      );
      axios
        .post('http://localhost:3919/scraping/input', {
          url: (document.getElementById('linkUrl') as HTMLInputElement)?.value,
        })
        .then((res) => {
          (document.getElementById('likes') as HTMLTableRowElement).innerText =
            res.data.likes;
          (
            document.getElementById('replies') as HTMLTableRowElement
          ).innerText = res.data.replies;
          (
            document.getElementById('followers') as HTMLTableRowElement
          ).innerText = res.data.followers;
          // (document.getElementById('title') as HTMLTableRowElement).innerText =
          //   res.data.title;
          (
            document.getElementById('username') as HTMLTableColElement
          ).innerText = res.data.name;
        })
        .catch((err) => {
          console.log('err...', err);
          if (err.response.status === 404) {
            alert('링크를 입력해주세요');
          }
        })
        .finally(() => console.log('done...'));
    },
    //   counter: (counter1: number) => {
    //     counter1 += 1;
    //   },
    // data() {
    //   return { counter: 0, visitor: 0 };
    // },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.blank {
  min-width: 100px;
  max-height: 100px;
}

/* td {
  overflow: scroll;
} */

tbody {
  max-height: 200px;
  overflow: scroll;
}

/* #title {
  overflow-y: scroll;
} */

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
