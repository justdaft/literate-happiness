/* eslint-disable */
import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home'
import Session from './components/Session'


Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/session',
      component: Session
    }
  ]
})