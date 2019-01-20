import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import threadShow from '@/components/threadShow'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/thread/:id',
      name: 'threadShow',
      component: 'threadShow',
      props: true
    }
  ],
  mode: 'history'
})
