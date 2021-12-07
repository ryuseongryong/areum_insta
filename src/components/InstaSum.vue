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
        id="table-S"
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
                :value="insta.link"
              />
            </th>
            <td id="followers-S" class="blank">{{ insta.totalFollowers }}</td>
            <td id="likes-S" class="blank">{{ insta.totalLikes }}</td>
            <td id="replies-S" class="blank">{{ insta.totalReplies }}</td>
            <td id="engagements-S" class="blank">
              {{ insta.totalEngagements }}
            </td>
            <td id="links-S" class="blank">{{ insta.links }}</td>
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
      input: '',
      insta: {
        link: '',
        links: '',
        totalFollowers: '',
        totalLikes: '',
        totalReplies: '',
        totalEngagements: '',
      },
    };
  },

  methods: {
    done: function () {
      this.isLoading = true;
      const urlsString: string = (
        document.getElementById('linkUrl-S') as HTMLInputElement
      )?.value;
      console.log('axios...', urlsString);
      this.input = urlsString;
      const urlArr: Array<string> = urlsString
        .split(' ')
        .filter((url) => url.slice(0, 27) === 'https://www.instagram.com/p');
      const serverUrl =
        (document.querySelector('#server') as HTMLInputElement)?.value ||
        'http://localhost:3919';

      axios
        .post(`${serverUrl}/scraping/inputSum`, {
          urlArr,
        })
        .then((res) => {
          this.insta.link = urlArr.join(' ');
          this.insta.links = res.data.links;
          this.insta.totalFollowers = res.data.totalFollowers;
          this.insta.totalLikes = res.data.totalLikes;
          this.insta.totalReplies = res.data.totalReplies;
          this.insta.totalEngagements = res.data.totalEngagements;

          // (
          //   document.getElementById('likes-S') as HTMLTableRowElement
          // ).innerText = res.data.totalLikes;
          // (
          //   document.getElementById('replies-S') as HTMLTableRowElement
          // ).innerText = res.data.totalReplies;
          // (
          //   document.getElementById('followers-S') as HTMLTableRowElement
          // ).innerText = res.data.totalFollowers;
          // (
          //   document.getElementById('engagements-S') as HTMLTableRowElement
          // ).innerText = res.data.totalEngagements;
          // (
          //   document.getElementById('links-S') as HTMLTableColElement
          // ).innerText = res.data.links;
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
  overflow: scroll;
}
</style>
