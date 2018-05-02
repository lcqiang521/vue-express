import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/Login'
import Index from '../components/Index'

import Teacher from '../components/Teacher'
import Student from '../components/Student'
import Footer from '../components/Footer'
import Left from '../components/Left'

Vue.use(Router)


export default new Router({
  mode: 'history',
  routes: [
    {
      path:'/',
      component: Login
    },
  	{ path: '/login',
      // You could also have named views at tho top
      component: Login
    },
    { 
      path: '/index',
      // You could also have named views at tho top
      component: Index,
      children: [{
        path: 'teacher',
        components: {
          default: Teacher,
          LeftNav: Left
        },
      }, {
        path: 'student',
        components: {
          default: Student,
          LeftNav: Left
        },
        //props: (route) => ({ query: route.query.uid })
      }]
    }
  ]
  })
