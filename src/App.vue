<template>
  <div id="root">

    <!-- 头部 -->
    <app-header></app-header>

    <div class="container-fluid">
      <div class="row">

        <!-- 侧边栏 -->
        <app-sidebar></app-sidebar>

        <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
         
         <!-- 主内容区域 -->

         <router-view></router-view>
         
        </div>
      </div>
    </div>

  </div>
</template>


<script>

// 导入头部 import AppHeader
import AppHeader from './component/AppHeader.vue';
// 导入  Appsidebar
import AppSidebar  from './component/AppSidebar.vue';

export default {
   name:'App',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
    
  },
  components: {
    AppHeader,
    AppSidebar
  }
}


// webpack 支持各种模块化的语法 CommonJS  AMD  ES6
// module.exports = {
// };

</script>

<style>

</style>
