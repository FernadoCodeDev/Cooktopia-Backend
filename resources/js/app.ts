/*
import '../css/app.css';
import Api from './components/Api.vue';

import { createApp } from 'vue';

const app = createApp({});
app.component('users-list', Api);
app.mount('#app');

*/

import '../css/app.css';
import { createApp } from 'vue';
import Api from './components/Api.vue';

createApp(Api).mount('#app');
