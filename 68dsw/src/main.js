// 步骤1：导入 vue这个包
import Vue from 'vue';

// 步骤2：想要解析和呈现App.vue组件的内容，则导入 App.vue组件
// var App = require('./App.vue');
import App from './App.vue';

// 1.0 路由的写法
// 1.0.0 导包
import vueRouter from 'vue-router';

// 1.0.2 将vueRouter和vue绑定起来
Vue.use(vueRouter);

// 1.0.3 定义路由规则
// import   from ' ';
import index from './components/site/index.vue';

var router = new vueRouter({
    routes:[
        {name:'default',path:'/',redirect:'/site'},
        {name:'index',path:'/site',component:index,}

    ]
});

// 2.0 axios的使用
// 2.0.1 导入axios包
import axios from 'axios';
// 2.0.2 设定axios的基本的url请求前缀
// axios.defaults.baseURL = '';

// 2.0.3 想要在将来的每个子组件中的方法中均可以使用 this.$http去调用其方法执行ajax请求
//就要将axios对象挂载到vue的原型属性$http上
Vue.prototype.$http = axios;

// 设定axios的参数使得axios发出的ajax请求能够自动带上cookie
axios.defaults.withCredentials = true;

// 2.0.4 绑定到vue上
Vue.use(axios);

// 导入整个网站布局的控制样式
// import '../statics/site/css/style.css';

import vuex from 'vuex';
Vue.use(vuex);

// 4.0 实例化一个Store对象
// var store = new vuex.Store({
//     state,actions,mutations,getters
// });

// 注意：按需引入单个组件，另需导入重置基础样式；即在 main.js 或根组件执行 
import 'vue-ydui/dist/ydui.base.css';

import VueLazyload from 'vue-lazyload'  //引入这个懒加载插件
// 添加VueLazyload 选项
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'dist/error.png',
  loading: 'dist/loading.gif',
  attempt: 1
})

new Vue({
    el:'#app',
    // 使用app这个组件对象
    // es5的写法
    // render:function(create){create(App);}
    router,   
    // store,  //注册
    // es6的写法 :将app当做根组件替换index1.html这个模板中的<div id="app">
    render:create=>create(App)
});