<template>
  <div class="app">
    <dealer ref="dealer" @result="postexec" />
    <div class="message flex-container">
      {{ mainMessage }}
    </div>
    <player @stand="stand" :showButtons="showButtons" />
    <div class="message result flex-container">
      {{ resultMessage }}
    </div>
  </div>
</template>

<script>
import Dealer from './components/Dealer'
import Player from './components/Player'

export default {
  name: 'App',
  components: { Dealer, Player },
  data () {
    return {
      mainMessage: 'Welcome to Black Jack',
      playersResult: 0,
      dealersResult: 0,
      showButtons: true
    }
  },
  methods: {
    stand: function (playersResult) {
      this.playersResult = playersResult
      this.$refs.dealer.$emit('postexec', playersResult === 'Bust')
    },
    postexec: function (dealersResult) {
      this.dealersResult = dealersResult
      this.showButtons = false
      this.mainMessage = `Dealer : ${dealersResult} / Player : ${this.playersResult}`
    }
  },
  computed: {
    resultMessage: function () {
      if (this.showButtons) {
        return ''
      }
      if (this.playersResult > this.dealersResult || this.dealersResult === 'Bust') {
        return 'You Win'
      }
      if (this.playersResult < this.dealersResult || this.playersResult === 'Bust') {
        return 'You Lose'
      }
      return 'Draw'
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
