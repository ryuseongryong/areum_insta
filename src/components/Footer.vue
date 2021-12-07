<template>
  <footer>
    <div id="footer">
      <div class="bar"></div>
      <div class="footer-wrap">
        <ul>
          <li class="contact">CONTACT BY</li>
          <li>
            <a href="mailto:ryuseongryong@gmail.com">E-Mail</a>
          </li>
          <li>
            <a href="https://github.com/ryuseongryong">GitHub</a>
          </li>
        </ul>
        <div id="sign">Copyright 2021© Seongryong Ryu All Rights Reserved.</div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Footer',
  components: {},
});
</script>

<style scoped>
footer {
  width: 100%;
}
.bar {
  width: 100%;
  height: 5px;
  background-color: rgba(0, 0, 0, 50%);
}
.footer-wrap {
  width: 100%;
  /* margin-top: 3px; */
  height: 6vh;
  background-color: rgb(41, 41, 41);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

#sign {
  height: 100%;
  margin: 0 5vw;
  padding: 0;
  font-size: 12px;
  display: flex;
  list-style-type: none;
  flex-direction: row;
  justify-content: left;
  align-items: center;
  color: white;
}

.contact {
  color: whitesmoke;
}
ul {
  height: 100%;
  margin: 0 5vw;
  padding: 0;
  font-size: 12px;
  display: flex;
  list-style-type: none;
  flex-direction: row;
  justify-content: left;
  align-items: center;
}
li {
  color: gray;
  display: inline-block;
}
li a {
  height: 100%;
  padding: 0px 16px;
  color: gray;
  display: inline-block;
  text-decoration: none;
  transition: 10ms ease-out 80ms;
}
li a:hover {
  color: white;
  transform: scale(1.1);
}
</style>
