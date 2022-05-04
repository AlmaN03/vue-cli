import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router/index'
// import SimplePlugin from './plugins/simplePlugin';


Vue.use(VueRouter)

import '@/assets/styles/main.scss';
// Vue.use(SimplePlugin)


new Vue({
  render: h => h(App),
  el: '#app',
  router
})
