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
            <th class="index">링크 입력</th>
            <th class="index">팔로워</th>
            <th class="index">좋아요</th>
            <th class="index">댓글</th>
            <th class="index-engage">인게이지먼트</th>
            <th class="index-engage">입력 링크 수</th>
            <th class="index">에러 페이지</th>
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
            <td id="links-S" class="blank">{{ insta.errorPage }}</td>
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
        errorPage: '',
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
          this.insta.errorPage = res.data.errorPage;

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
  .index,
  .index-engage {
    font-size: 15px;
  }
}
@media screen and (max-width: 500px) {
  h1 {
    font-size: 25px;
  }
  input {
    width: 40px;
  }
  .blank {
    min-width: 40px;
    width: 50%;
    height: 10px;
    max-height: 20px;
    font-size: 10px;
  }
  .index,
  .index-engage {
    font-size: 10px;
  }
}
</style>
