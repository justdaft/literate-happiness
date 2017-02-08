
<template>
<div id="app">

  <router-view class="view"></router-view>
  <!-- <hello></hello> -->
  <!-- <pre>{{ anObject }}</pre> -->
  <!--<ul></ul>
    <li v-for="item in dataX.users">{{ item.name }}</li>

  </ul>
  <ul>
    <li v-for="item in dataX.workouts">{{ item.title }}</li>
  </ul>
  <ul>
    <li v-for="item in dataX.sessions">{{ item.workoutDone }}, {{item.dateDone}}, {{item.doneBy}}</li>
  </ul>-->
  <!-- <workout>hello</workout> -->
  <!-- <md-list>
    <md-list-item v-for="item in currentWorkouts">{{item['.key']}}

    </md-list-item>
    <md-list>
      <md-list-item v-for="ex in currentExercises">{{ex}}</md-list-item>
    </md-list>

  </md-list> -->
<!-- {{dataX.user.workouts}} -->
<!--<session></session>-->
<br />

<md-button v-on:click="addSession = !addSession" class="md-fab md-fab-bottom-left">
  <md-icon>create</md-icon>
</md-button>
<md-button v-on:click="addUser = !addUser" class="md-fab md-fab-bottom-right">
  <md-icon>add</md-icon>
</md-button>
<session v-if="addSession"></session>
<user v-if="addUser"></user>
</div>
</template>

<script>
/* eslint-disable */
import CurrentSession from './components/CurrentSession';
import Workout from './components/Workout';

import Session from './components/Session';
import User from './components/User';
import dataX from './vuex/structured_json.json';

import config from './firebase_config';
// let app = firebase.initializeApp(config);
//
// let db = app.database();
//
// let userRef = db.ref('/users');

export default {
  name: 'app',
  data() {
    return {
        dataX,
        addUser: false,
        addSession: false
    }
  },
  methods: {},
  // firebase: {
  //   anArray: userRef,
  //   currentWorkouts: db.ref('/users/Billy/workouts'),
  //   currentExercises: db.ref('/users/Billy/workouts/wrk1/exercises'),
  //
  //   anObject: {
  //     source: db.ref('/users/Billy/workouts'),
  //     // optionally bind as an object
  //     asObject: true,
  //     // optionally provide the cancelCallback
  //     cancelCallback: function() {}
  //   }
  // },
  components: {
    Workout,
    Session,
    User,
    CurrentSession
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
