// const Vue = require('Vue')
// ES6导入模块语法
import Vue from 'vue';
import App from './App.vue';
// 导入路由对象
import router from './routes/router';   // .js 后缀可省略

// 导入css模块
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './assets/css/index.css';

new Vue({
  el: '#app',
  render: h => h(App),
  // 配置路由对象
  router
});
