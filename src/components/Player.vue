<template>
  <div>
    <p>プレイヤーのカード2枚表示</p>
    <div class="flex-container">
      <Card v-for="(hand, index) in hands"
          :suit="hand.suit"
          :rank="hand.rank"
          :key="index"/>
    </div>
  </div>
</template>

<script>
import Card from './Card'
import deck from '../utils/deck'

export default {
  name: 'Player',
  components: {
    Card
  },
  data () {
    return {
      items: [
        {id: 1},
        {id: 2}
      ],
      hand: []
    }
  },
  created: function () {
    this.hand.push(deck())
    this.hand.push(deck())
  }
}
</script>

<style scoped>
.flex-container {
  display: flex;
  justify-content: center;
}
</style>
