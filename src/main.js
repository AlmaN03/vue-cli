import Vue from 'vue'
import App from './App.vue'
// import SimplePlugin from './plugins/simplePlugin';



import '@/assets/styles/main.scss';
// Vue.use(SimplePlugin)


new Vue({
  render: h => h(App),
  el: '#app'
})
