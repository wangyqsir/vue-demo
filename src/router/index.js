import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/pages/home/HelloWorld'
import HomeIndex from '@/pages/home/Home'
import BasicLearn from '@/pages/basicLearn/index'
import RouterPage from '@/pages/router/RouterPage'
import SubComponentD from '@/components/subComponentD'
import SubComponentB from '@/components/subComponentB'
import vuePage from '@/pages/vuexLearn/vuexComponent'

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
      components:{default:RouterPage,b:SubComponentB},
      props: { default: false, b: true },
      children:[
        {
          path:'subrouter',
          component:SubComponentD
        }
      ]
    },
    {
      path: '/vuex',
      name: 'vue-learn',
      component: vuePage
    }
  ]
})
