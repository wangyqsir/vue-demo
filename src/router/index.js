import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/pages/home/HelloWorld'
import HomeIndex from '@/pages/home/Home'
import BasicLearn from '@/pages/basicLearn/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomeIndex',
      component: HomeIndex
    },
    {
      path: '/basic',
      name: 'BasicLearn',
      component: BasicLearn
    }
  ]
})
