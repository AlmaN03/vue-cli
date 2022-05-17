import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router/index'
import store from './store/index'

// import VModal from "vue-js-modal";

import ApiPlugin from './plugins/api'
import LoadPlugin from './plugins/LoadOne'


// Vue.use(VModal)

Vue.use(VueRouter)
Vue.use(ApiPlugin)
Vue.use(LoadPlugin)



// import SimplePlugin from './plugins/simplePlugin';



import '@/assets/styles/main.scss';
// Vue.use(SimplePlugin)


new Vue({
  render: h => h(App),
  el: '#app',
  router,
  store
})