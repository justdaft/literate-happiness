// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/* eslint-disable */
import Vue from 'vue'
import App from './App'
import Vuex from 'vuex';
import store from './vuex/store'
var VueFire = require('vuefire')
var Firebase = require('firebase')
var VueMaterial = require('vue-material')
Vue.use(VueFire)
Vue.use(VueMaterial)

/* eslint-disable */
new Vue({
  el: '#app',
  store,
  template: '<App/>',
  components: { App }
})
