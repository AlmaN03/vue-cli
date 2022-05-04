import VueRouter from 'vue-router'

import MainPage from '../pages/MainPage'


import AllFilmsPage from '../pages/AllFilmsPage'

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'main',
      component: MainPage
    },
    {
      path: '/films',
      component: AllFilmsPage,
    },
  ]
})