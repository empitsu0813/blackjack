<template>
  <div id="app">
    <h2>{{ message }}</h2>
    <Dealer/>
    <Player/>
    <div class="flex-container">
      <button @click="hit">1枚引く</button>
      <button @click="stand">終わり</button>
    </div>
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
      message: 'blackjack'
    }
  },
  methods: {
    hit () {
      console.log('hit')
    },
    stand () {
      console.log('stand')
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

.flex-container {
  display: flex;
  justify-content: center;
}
</style>
