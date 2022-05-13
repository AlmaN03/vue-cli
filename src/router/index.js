import VueRouter from 'vue-router'
import AllFilmsPage from '../pages/AllFilmsPage.vue'
import MainPage from '../pages/MainPage.vue'
import FilmPage from '../pages/FilmPage.vue'
import NotFound from '../pages/ErorEror.vue'
import FilmsLayout from '../pages/FilmsLayout.vue'





export default new VueRouter({
    mode: 'history',
    routes :[
        {
            path:'/',
            name:'main',
            component: MainPage
        },
        {
            path:'/films',
            name:'filmsLayout',
            component: FilmsLayout,
            children: [
                {
                    path:'',
                    name:'films',
                    component: AllFilmsPage
                },
                {
                    path:':id',
                    name:'FilmPage',
                    component: FilmPage
                },
            ]
        },
        
        {
            path: '/:catchAll(.*)',
            name:'notFound',
            component: NotFound
        },
    ]
  })