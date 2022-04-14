import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import store from './store';
import axios from '@/api/axios';
// vant组件库
import Vant from 'vant';
// 全局引用vant样式
import 'vant/lib/index.css';
// 全局定义初始样式
import '@/assets/style/reset.css';
// 全局定义移动端1像素边框
import '@/assets/style/boder.css';
const app = createApp(App);
app.provide("axios", axios);
app.use(Vant);
app.use(store);
app.use(router);
app.mount('#app');

