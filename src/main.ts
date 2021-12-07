import { createApp } from 'vue';
// import './style.less';
import App from './App.vue';
import router from './router';
import Vue from 'vue';

import Loader from './components/Loader.vue';
import Modal from './components/Modal.vue';

const app = createApp(App);
app.use(router);
app.component('Loader', Loader);
app.component('Modal', Modal);

app.mount('#app');
