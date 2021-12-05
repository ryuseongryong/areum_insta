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
        <input id="server-M" placeholder="위의 이메일로 연락주세요!" />
      </caption>
      <caption>
        [링크주소]
        <input
          id="linkUrl-M"
          placeholder="https://www.instagram.com/p/"
          @keyup.enter="done()"
        />
      </caption>
      <thead>
        <tr align="center" bgcolor="white">
          <!-- <td></td> -->
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
          v-bind:key="insta + idx"
          align="center"
          bgcolor="white"
        >
          <!-- <th id="link-M" class="blank"></th>
          <td id="username-M" class="blank"></td>
          <td id="followers-M" class="blank"></td>
          <td id="likes-M" class="blank"></td>
          <td id="replies-M" class="blank"></td>
          <td id="engagements-M" class="blank"></td> -->

          <!-- <th class="blank">{{ idx + 1 }}</th> -->
          <td class="blank">{{ insta.link }}</td>
          <td class="blank">{{ insta.username }}</td>
          <td class="blank">{{ insta.followers }}</td>
          <td class="blank">{{ insta.likes }}</td>
          <td class="blank">{{ insta.replies }}</td>
          <td class="blank">{{ insta.engagements }}</td>
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
    // instaArr: Array,
  },
  data() {
    return {
      instaArr: [],
    };
  },

  methods: {
    done: function () {
      // type InstaObj = {
      //   link: String;
      //   username: String;
      //   likes: Number;
      //   replies: Number;
      //   engagements: Number;
      //   followers: Number;
      // };
      // let instaArrData: Array<InstaObj>;

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
          this.instaArr = res.data.instaArr;
          // this.instaArr = res.data.instaArr;
          // instaArrData = res.data.instaArr;
          // (
          //   document.getElementById('likes-M') as HTMLTableRowElement
          // ).innerText = res.data.totalLikes;
          // (
          //   document.getElementById('replies-M') as HTMLTableRowElement
          // ).innerText = res.data.totalReplies;
          // (
          //   document.getElementById('followers-M') as HTMLTableRowElement
          // ).innerText = res.data.totalFollowers;
          // (
          //   document.getElementById('links-M') as HTMLTableColElement
          // ).innerText = res.data.links;
        })
        .catch((err) => {
          console.log('err...', err);
          if (err.response.status === 400) {
            alert(
              '올바른 링크를 입력해주세요 : https://instagram.com/p/{something}'
            );
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
</style>
