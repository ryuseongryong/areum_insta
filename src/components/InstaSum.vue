<template>
  <div>
    <h1>{{ msg }}</h1>
    <table
      id="table-S"
      border="1"
      align="center"
      width="50%"
      height="10px"
      cellspacing="1"
    >
      <caption>
        [서버주소]
        <input id="server-S" placeholder="위의 이메일로 연락주세요!" />
      </caption>
      <thead>
        <tr align="center" bgcolor="white">
          <!-- <td></td> -->
          <th>링크 입력</th>
          <th>팔로워</th>
          <th>좋아요</th>
          <th>댓글</th>
          <th>인게이지먼트</th>
          <th>입력된 링크 수</th>
        </tr>
      </thead>

      <tbody>
        <tr align="center" bgcolor="white">
          <th id="link-S">
            <input
              id="linkUrl-S"
              placeholder="https://www.instagram.com/p/"
              @keyup.enter="done()"
            />
          </th>
          <td id="followers-S" class="blank"></td>
          <td id="likes-S" class="blank"></td>
          <td id="replies-S" class="blank"></td>
          <td id="engagements-S" class="blank"></td>
          <td id="links-S" class="blank"></td>
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
  name: 'InstaSum',
  props: {
    msg: String,
  },
  methods: {
    done: () => {
      console.log(
        'axios...',
        (document.getElementById('linkUrl-S') as HTMLInputElement)?.value
      );
      const urlsString: String = (
        document.getElementById('linkUrl-S') as HTMLInputElement
      )?.value;
      const urlArr: Array<string> = urlsString
        .split(' ')
        .filter((url) => url.slice(0, 27) === 'https://www.instagram.com/p');
      const serverUrl =
        (document.querySelector('#server-S') as HTMLInputElement)?.value ||
        'http://localhost:3919';
      axios
        .post(`${serverUrl}/scraping/inputSum`, {
          urlArr,
        })
        .then((res) => {
          (
            document.getElementById('likes-S') as HTMLTableRowElement
          ).innerText = res.data.totalLikes;
          (
            document.getElementById('replies-S') as HTMLTableRowElement
          ).innerText = res.data.totalReplies;
          (
            document.getElementById('followers-S') as HTMLTableRowElement
          ).innerText = res.data.totalFollowers;
          (
            document.getElementById('engagements-S') as HTMLTableRowElement
          ).innerText = res.data.totalEngages;
          (
            document.getElementById('links-S') as HTMLTableColElement
          ).innerText = res.data.links;
        })
        .catch((err) => {
          console.log('err...', err);
          if (err.response.status === 400) {
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
/* ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
} */
</style>
