<template>
<div>
    <md-card>
      <md-card-header></md-card-header>
      <md-card-content>
      <form novalidate >
        <md-input-container>
          <label>Name</label>
          <md-input v-model="newUser.name"></md-input>
        </md-input-container>
        <md-input-container>
          <label>Age</label>
          <md-input v-model.number="newUser.age" type="number"></md-input>
        </md-input-container>
        <md-input-container>
          <label>Username</label>
          <md-input v-model="newUser.userName"></md-input>
        </md-input-container>
        <md-card-actions>
          <md-button v-on:click="saveUser" class="md-fab md-warn md-mini">
            <md-icon>add</md-icon>
          </md-button>
        </md-card-actions>
      </form>
      </md-card-content>
    </md-card>
</div>
</template>

<script>
/* eslint-disable */

export default {
  name: 'user',
  props: [

  ],
  data() {
    return {
      newUser: {name: '', age: '', userName: '' }
    }
  },
  computed: {

  },
  methods: {
    saveUser: function (event) {
      console.log("user: ", this.newUser)
      // `this` inside methods points to the Vue instance
      // alert('Hello ' + this.name + '!')
      // // `event` is the native DOM event
      // if (event) {
      //   alert(event.target.tagName)
      // }
    }
  }
}
</script>

<style scoped>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
  margin-left: 20px;
  margin-right: 20px;
  
}
</style>
