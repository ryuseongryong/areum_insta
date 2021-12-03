<template>
  <div>
    <h1>{{ msg }}</h1>
    <table
      id="table-M"
      border="1"
      align="center"
      width="50%"
      height="10px"
      cellspacing="1"
    >
      <caption>
        [서버주소]
        <input id="server-M" />
      </caption>
      <thead>
        <tr align="center" bgcolor="white">
          <!-- <td></td> -->
          <th>링크 입력</th>
          <th>좋아요</th>
          <th>댓글</th>
          <th>팔로워</th>
          <th>입력된 링크 수</th>
        </tr>
      </thead>

      <tbody>
        <tr align="center" bgcolor="white">
          <th id="link-M">
            <input
              id="linkUrl-M"
              placeholder="https://www.instagram.com/p/CWsAX5UhrIY/"
              @keyup.enter="done()"
            />
          </th>
          <td id="likes-M" class="blank"></td>
          <td id="replies-M" class="blank"></td>
          <td id="followers-M" class="blank"></td>
          <td id="links-M" class="blank"></td>
        </tr>
      </tbody>
    </table>

    <p>
      <button @click="done()">완료</button>
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import axios from 'axios';

export default defineComponent({
  name: 'InstaMany',
  props: {
    msg: String,
  },
  methods: {
    done: () => {
      console.log(
        'axios...',
        (document.getElementById('linkUrl-M') as HTMLInputElement)?.value
      );
      const urlsString: String = (
        document.getElementById('linkUrl-M') as HTMLInputElement
      )?.value;
      const urlArr: Array<string> = urlsString
        .split(' ')
        .filter((url) => url.slice(0, 27) === 'https://www.instagram.com/p');

      const serverUrl =
        (document.querySelector('#server-M') as HTMLInputElement)?.value ||
        'http://localhost:3919';
      axios
        .post(`${serverUrl}/scraping/inputMany`, {
          urlArr,
        })
        .then((res) => {
          (
            document.getElementById('likes-M') as HTMLTableRowElement
          ).innerText = res.data.totalLikes;
          (
            document.getElementById('replies-M') as HTMLTableRowElement
          ).innerText = res.data.totalReplies;
          (
            document.getElementById('followers-M') as HTMLTableRowElement
          ).innerText = res.data.totalFollowers;
          (
            document.getElementById('links-M') as HTMLTableColElement
          ).innerText = res.data.links;
        })
        .catch((err) => {
          console.log('err...', err);
          if (err.response.status === 404) {
            alert('링크를 입력해주세요');
          }
        })
        .finally(() => console.log('done...'));
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.blank {
  min-width: 100px;
  max-height: 100px;
}

tbody {
  max-height: 200px;
  overflow: scroll;
}

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
