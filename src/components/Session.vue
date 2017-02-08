<template>
  <div>
    <md-card v-if="startSession">
      <md-card-header></md-card-header>
      <md-card-content>
        <form novalidate>
          <md-input-container>
            <label>Workout</label>
            <!--<md-input v-model="newSession.workout = today"></md-input>-->
            <md-select name="movie" id="movie" v-model="newSession.workout">
              <md-option v-for="item in wrkOuts" :value="item.name">{{item.name}}, {{item.desc}}</md-option>
            </md-select>
          </md-input-container>
          <md-input-container>
            <label>Date</label>
            <md-input v-model="newSession.date = today.date"></md-input>
          </md-input-container>
          <md-input-container>
            <label>Time</label>
            <md-input v-model="newSession.time = today.time"></md-input>
          </md-input-container>
          <md-card-actions>
            <md-button class="md-primary md-raised" v-on:click="startSession()">
              Start
            </md-button>
            <md-button v-if="sessionComplete" v-on:click="saveSession" class="md-fab md-warn md-mini">
              <md-icon>add</md-icon>
            </md-button>
          </md-card-actions>
        </form>
      </md-card-content>
    </md-card>

    <exercise class="card" v-for="exercise in exerciseData" :ex="exercise"></exercise>
  </div>
</template>

<script>
/* eslint-disable */
var moment = require('moment')
import Exercise from './Exercise'

export default {
  name: 'session',
  props: [

  ],
  components: {
    Exercise
  },
  data() {
    return {
      exercises: [{title: 'Seated Row'}, {title: 'Assisted Dip'}, {title: 'Shoulder Press'}],
      exerciseData: [{title: 'Seated Row', sets: [
        {weight: 45, set: 1, reps: 15}, {weight: 45, set: 2, reps: 15}, {weight: 45, set: 3, reps: 15}
      ]}, {title: 'Assisted Dip', sets: [
        {weight: 45, set: 1, reps: 15}, {weight: 45, set: 2, reps: 15}, {weight: 45, set: 3, reps: 15}
      ]}, {title: 'Shoulder Press', sets: [
        {weight: 45, set: 1, reps: 15}, {weight: 45, set: 2, reps: 15}, {weight: 45, set: 3, reps: 15}
      ]}],
      sessionComplete: false,
      startSession: false,
      newSession: {},
      wrkOuts: [{name: "wrk1", desc: "Full Body"}, {name: "wrk2", desc: "Upper Body"}, {name: "wrk3", desc: "Lower Body"}]
      
    }
  },
  computed: {
    today () {
      // return  moment().format("MMMM Do YYYY, h:mm:ss a")
      return {
        dateUnParsed: Date.now(),
        date: moment().format("MMMM Do YYYY"),
        time: moment().format("h:mm:ss a"),
      };
    }

  },
  methods: {
    startSession() {
      console.log(this.newSession);
    }

  }
}
</script>

<style scoped>
  .card {
      margin-top: 10px;
  }
</style>
