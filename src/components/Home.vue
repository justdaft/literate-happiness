<template>
    <div class="hello">
        <md-toolbar class="md-primary">
            <md-button class="md-icon-button">
                <md-icon>menu</md-icon>
            </md-button>
            <md-button class="md-button">
                <router-link to="session">session</router-link>
            </md-button>
            <!--<router-link to="session">session</router-link>-->
        </md-toolbar>
        <h1>{{ msg }}</h1>
    </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      msg: 'Home'
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
