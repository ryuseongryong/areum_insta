<template>
  <div v-if="isClose">
    <ul id="nav">
      <li id="pic">
        <router-link to="/" class="nav-logo">
          <img
            class="pic-default"
            alt="SR logo"
            :src="require('@/assets/ryuseongryong CRT.png')"
          />
          <img
            class="pic-hovered"
            alt="SR logo Hovered"
            :src="require('@/assets/ryuseongryong CRT Reverse.png')"
          />
        </router-link>
      </li>
      <li>
        <a>
          <server-control />
        </a>
      </li>
      <li>
        <router-link to="/howtouse" class="nav">How To Use</router-link>
      </li>
      <li>
        <router-link to="/instaone" class="nav">Insta One</router-link>
      </li>
      <li>
        <router-link to="/instamany" class="nav">Insta Many</router-link>
      </li>
      <li>
        <router-link to="/instasum" class="nav">Insta Sum</router-link>
      </li>
      <button @click="close">
        <i class="nav-screen-close"></i>
      </button>
    </ul>
  </div>
  <div id="nav-screen-wrap" v-else>
    <ul id="nav-screen">
      <li id="pic">
        <router-link to="/" class="nav-logo" @click="close">
          <img
            class="pic-default"
            alt="SR logo"
            :src="require('@/assets/ryuseongryong CRT.png')"
          />
          <img
            class="pic-hovered"
            alt="SR logo Hovered"
            :src="require('@/assets/ryuseongryong CRT Reverse.png')"
          />
        </router-link>
        <button @click="close">
          <i class="nav-screen-open"></i>
        </button>
      </li>
      <div></div>
      <li>
        <router-link to="/howtouse" class="nav-screen" @click="close"
          >How To Use</router-link
        >
      </li>
      <li>
        <router-link to="/instaone" class="nav-screen" @click="close"
          >Insta One</router-link
        >
      </li>
      <li>
        <router-link to="/instamany" class="nav-screen" @click="close"
          >Insta Many</router-link
        >
      </li>
      <li>
        <router-link to="/instasum" class="nav-screen" @click="close"
          >Insta Sum</router-link
        >
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import ServerControl from './ServerControl.vue';
export default defineComponent({
  name: 'Nav',
  components: { ServerControl },
  // props:{isClose:boolean},
  data() {
    return {
      isClose: true,
    };
  },
  methods: {
    close: function () {
      // console.log('open');
      this.isClose = !this.isClose;
    },
  },
});
</script>

<style scoped>
button {
  background: inherit;
  border: none;
}
.nav-screen {
  display: none;
}

#nav {
  width: 100%;
  height: 5vh;
  min-height: 50px;
  display: flex;
  font-size: 12px;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
}

#pic {
  width: 5rem;
  align-items: center;
  position: relative;
}

.pic-default {
  padding: 6px 0 0 0;
  width: 33px;
  height: 33px;
}
.pic-hovered {
  padding: 6px 0 0 0;
  width: 33px;
  height: 33px;
  display: none;
}

#pic:hover .pic-default {
  display: none;
}
#pic:hover .pic-hovered {
  align-items: center;
  padding: 0 0 0 8px;
  display: block;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  background-color: rgb(41, 41, 41);
}
ul:after {
  content: '';
  display: block;
  clear: both;
}
li {
  float: left;
}
li a {
  display: block;
  color: gainsboro;
  text-align: center;
  padding: 12px 16px;
  text-decoration: none;
  transition: 10ms ease-out 80ms;
}
li a:hover {
  color: white;
  transform: scale(1.1);
}
/* nav bar 만들기*/
@media screen and (max-width: 1024px) {
}
@media screen and (max-width: 768px) {
  #nav {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 5vh;
    display: flex;
    font-size: 12px;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
  }
  #nav-screen > #pic {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-left: 0;
    width: 100%;
    min-height: 30px;
  }
  #pic > a {
    margin-left: 20px;
  }

  #pic > button {
    margin-right: 60px;
  }

  #pic {
    width: 5rem;
    align-items: center;
    position: relative;
  }

  .pic-default {
    padding: 0 0 0 0;
    width: 33px;
    height: 33px;
  }
  .pic-hovered {
    padding: 0 0 0 0;
    width: 33px;
    height: 33px;
    display: none;
  }

  #pic:hover .pic-default {
    display: none;
  }
  #pic:hover .pic-hovered {
    align-items: center;
    padding: 0 0 0 0px;
    display: block;
  }

  #nav-screen > #pic > .nav-logo {
  }
  #nav-screen {
    background-color: rgba(0, 0, 0, 0.9);
    display: flex;
    width: 100%;
    height: 100vh;
    flex-direction: column;
    text-align: center;
  }
  #nav-screen > li {
    margin-left: 20%;
    width: 60%;
    border-bottom: 2px solid;
    border-color: white;
  }
  #nav-screen > li a {
    display: block;
    color: gainsboro;
    text-align: center;
    padding: 12px 16px;
    text-decoration: none;
    transition: 10ms ease-out 80ms;
  }

  #nav-screen > li a:hover {
    color: white;
    transform: scale(1);
  }

  button {
    width: 30px;
    height: 50px;
    right: 0;
  }

  #nav-screen > button {
    /* margin-right: 10%; */
    /* width: 80%;
    display: flex; */
  }
  #nav-screen > button > .nav-screen-open {
    position: fixed;
    right: 0;
    padding: 0.3rem 3rem 0px 0px;
  }

  .nav-screen-close {
    display: block;
    position: relative;
    width: 30px;
    height: 30px;
  }
  .nav-screen-close:before,
  .nav-screen-close:after {
    position: absolute;
    content: '';
    height: 20px;
    width: 2px;
    background-color: gray;
  }
  .nav-screen-close:before {
    transform: rotate(90deg);
  }
  .nav-screen-close:after {
    bottom: 0;
    transform: rotate(90deg);
  }

  .nav {
    display: none;
  }
  .nav-screen-open {
    display: block;
    position: relative;
    width: 30px;
    height: 30px;
    margin-top: 10px;
  }
  .nav-screen-open:before,
  .nav-screen-open:after {
    position: absolute;
    content: '';
    height: 20px;
    width: 2px;
    background-color: gray;
  }
  .nav-screen-open:before {
    transform: rotate(45deg);
  }
  .nav-screen-open:after {
    transform: rotate(-45deg);
  }
}
@media screen and (max-width: 500px) {
}
</style>
