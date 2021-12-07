<template>
  <div class="black-bg" @click="close">
    <div class="white-bg" onclick="event.cancelBubble = true">
      <div class="content-wrap">
        <h3>⚠️올바른 링크를 입력해주세요!</h3>
        <h4>
          입력된 링크: <a :href="link" target="_blank">{{ link }}</a>
        </h4>
        <p>예시 : https://instagram.com/p/{something}</p>
        <div class="close-wrap" @click="close">
          <a class="close" href="">닫기</a>
        </div>
        <ul>
          <li class="contact">CONTACT BY</li>
          <li>
            <a href="mailto:ryuseongryong@gmail.com">E-Mail</a>
          </li>
          <li>
            <a href="https://github.com/ryuseongryong">GitHub</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Modal',
  props: { link: String, close: Function },
});
</script>

<style scoped>
div {
  box-sizing: border-box;
  overflow: auto;
  widows: 100%;
  height: 100%;
}
h3 {
  margin: 0;
  margin-bottom: 30px;
}
h4,
p {
  margin: 10px;
  padding-left: 20px;

  text-align: left;
}
.close-wrap {
  overflow: hidden;
  border: 1px solid;
  border-radius: 8px;
  margin-top: 8%;
  margin-left: 47%;
  padding: 0 0 10px 0;
  width: 40px;
  height: 20px;
  place-self: center;
}
div a {
  height: 100%;
  color: gray;
  /* display: inline-block; */
  text-decoration: none;
  transition: 10ms ease-out 80ms;
}
a:hover {
  color: rgb(41, 41, 41);
  transform: scale(1.1);
}
.content-wrap {
  font-size: 14px;
}
ul {
  list-style-type: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  vertical-align: bottom;
  margin: 0;
  margin-top: 10px;
}
li {
  font-size: 12px;
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
  color: rgb(41, 41, 41);
  transform: scale(1.1);
}
.black-bg {
  width: 100%;
  height: 90vh;
  background: rgba(0, 0, 0, 0.5);
  padding: 20px;
  align-self: center;
  display: flex;
  flex-direction: column;
}
.white-bg {
  width: 40%;
  height: 40%;
  background: white;
  border-radius: 8px;
  margin: 5%;
  padding: 20px;
  align-self: center;
}
@media screen and (max-width: 1024px) {
  h3 {
    margin-bottom: 20px;
  }

  h4,
  p {
    margin: 5px;
    padding-left: 15px;
    text-align: left;
  }
  .close-wrap {
    border: 1px solid;
    border-radius: 8px;
    margin-top: 60px;
    margin-left: 100px;
    padding: 0 0 10px 0;
    width: 40px;
    height: 20px;
    place-self: center;
  }
  .content-wrap {
    font-size: 12px;
  }

  ul {
    margin: 0px;
    margin-top: 10px;
    padding: 0;
  }
  li {
    white-space: nowrap;
    width: 50px;
    margin: 5px;
    font-size: 10px;
  }
}
@media screen and (max-width: 768px) {
  h3 {
    margin-bottom: 10px;
  }

  h4,
  p {
    margin: 5px;
    padding-left: 10px;
    text-align: left;
  }
  .close-wrap {
    border: 1px solid;
    border-radius: 8px;
    margin-top: 50px;
    margin-left: 100px;
    padding: 0 0 10px 0;
    width: 40px;
    height: 20px;
    place-self: center;
  }
  .content-wrap {
    font-size: 12px;
  }

  ul {
    margin: 0px;
    margin-top: 10px;
    padding: 0;
  }
  li {
    white-space: nowrap;
    width: 50px;
    margin: 5px;
    font-size: 10px;
  }
}
@media screen and (max-width: 500px) {
  .white-bg {
    width: 70%;
    height: 40%;
    background: white;
    border-radius: 8px;
    margin: 5%;
    padding: 20px;
    align-self: center;
  }
  .close-wrap {
    border: 1px solid;
    border-radius: 8px;
    margin-top: 70px;
    margin-left: 70px;
    padding: 0 0 10px 0;
    width: 40px;
    height: 20px;
    place-self: center;
  }
  ul {
    margin: 0px;
    margin-top: 10px;
    padding: 0;
  }
  li {
    white-space: nowrap;
    width: 50px;
    margin: 5px;
    font-size: 10px;
  }
}
</style>
