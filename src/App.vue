<template>
  <div id="app">
    <h2>{{ message }}</h2>
    <Dealer/>
    <Player/>
  </div>
</template>

<script>
import Player from './components/Player'
import Dealer from './components/Dealer'

export default {
  name: 'App',
  components: {
    Player,
    Dealer
  },
  data () {
    return {
      message: 'Welcome to blackjack'
    }
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
  margin-top: 60px;
}
</style>
