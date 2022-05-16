import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router/index'
import store from './store/index'

import ApiPlugin from './plugins/api' ;


Vue.use(VueRouter)
Vue.use(ApiPlugin)


// import SimplePlugin from './plugins/simplePlugin';



import '@/assets/styles/main.scss';
// Vue.use(SimplePlugin)


new Vue({
  render: h => h(App),
  el: '#app',
  router,
  store
})