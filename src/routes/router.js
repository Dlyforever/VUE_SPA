// 导入Vue.js
import Vue from 'vue';
// 1 导入vue-router
import VueRouter from 'vue-router';

// 导入组件
import HeroList from '../views/hero/list.vue';
import  EquipList from '../views/equip/list.vue';
import WeaponList from '../views/weapon/list.vue';
// 添加英雄的组件
import HeroAdd from '../views/hero/Add.vue';


// 注册插件  
Vue.use(VueRouter);

// 2 创建路由对象   配置路由规则
const router = new VueRouter({
    linkExactActiveClass: 'active',
    routes: [
        // 路由规则
        // 配置跟路径
        // {name: 'home',path: '/',redirect: '/hero'}
        
        {name: 'home',path: '/',redirect:{name: 'hero'} },
        {name: 'hero',path: '/hero',component: HeroList},
        {name: 'equip',path: '/equip',component: EquipList},
        {name: 'weapon',path: '/weapon',component: WeaponList},
        {name: 'heroadd',path: '/hero/heroadd',component: HeroAdd}
    ]
});

// 3 导出模块
export default router;