<template>
  <div>
    <div class="flex-container">
      <Card v-for="(hand, index) in hands"
          :key="index"
          :suit="hand.suit"
          :number="hand.number"
          :hide="hand.hide">
       </Card>
    </div>
    <div class="flex-container" v-show="showButtons">
      <button @click="hit">Hit</button>
      <button @click="stand">Stand</button>
    </div>
  </div>
</template>

<script>
import Card from './Card'
import calc from '../utils/calc'
import deck from '../utils/deck'

export default {
  name: 'Player',
  components: {
    Card
  },
  props: ['showButtons'],
  data () {
    return {
      hands: [],
      result: 0
    }
  },
  created: function () {
    this.hands.push(deck())
    this.hands.push(deck())
    this.result = calc(this.hands)
  },
  methods: {
    hit () {
      this.hands.push(deck())
      this.result = calc(this.hands)
    },
    stand () {
      this.$emit('stand', this.result)
    }
  }
}
</script>

<style scoped>
.flex-container {
  display: flex;
  justify-content: center;
}
</style>
