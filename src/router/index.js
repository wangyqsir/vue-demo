import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/pages/home/HelloWorld'
import HomeIndex from '@/pages/home/Home'
import BasicLearn from '@/pages/basicLearn/index'
import RouterPage from '@/pages/router/RouterPage'
import SubComponentD from '@/components/subComponentD'

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
    },{
      path:'/router/:id',
      name:'RouterPage',
      component:RouterPage,
      children:[
        {
          path:'subrouter',
          component:SubComponentD
        }
      ]
    }
  ]
})
