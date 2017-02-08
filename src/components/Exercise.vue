<template>
  <div class="hello">
 
<md-card md-with-hover>
  <md-card-header>
    <div class="md-title">{{ex.title}}</div>
  </md-card-header>

  <md-card-content>
  <md-table v-once>
  <md-table-header>
    <md-table-row>
      <md-table-head md-numeric>Set</md-table-head>
      <md-table-head md-numeric>Weight (kg)</md-table-head>
      <md-table-head md-numeric>Reps</md-table-head>
    </md-table-row>
  </md-table-header>

  <md-table-body>
    <md-table-row v-for="(e, index) in ex.sets">
      <md-table-cell md-numeric>{{e.set}}</md-table-cell>
      <md-table-cell md-numeric>{{e.weight}}</md-table-cell>
       <md-table-cell md-numeric>{{e.reps}}</md-table-cell>
    </md-table-row>
  </md-table-body>
</md-table>
  </md-card-content>

  <md-card-actions>
    <md-button>Previous</md-button>
    <md-button>Next</md-button>
  </md-card-actions>
</md-card>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'exercise',
  props: [
      'ex'
  ],
  data () {
    return {
      msg: 'Exercise'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
