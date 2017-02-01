
<template>
<div id="app">
  <md-toolbar class="md-primary">
  </md-toolbar>
  <!-- <hello></hello> -->
  <!-- <pre>{{ anObject }}</pre> -->
  <ul>
    <li v-for="item in anArray">{{ item['.key'] }}</li>
  </ul>
</div>
</template>

<script>
/* eslint-disable */
import Hello from './components/Hello';
import Config from './firebase_config';

var config = Config;
firebase.initializeApp(config);
var db = firebase.database();

export default {
  name: 'app',
  firebase: {
    anArray: db.ref('/users'),
    anObject: {
      source: db.ref('/users'),
      // optionally bind as an object
      asObject: true,
      // optionally provide the cancelCallback
      cancelCallback: function() {}
    }
  },
  components: {
    Hello
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
  margin-left: 10px;
  margin-right: 10px;
}
</style>
