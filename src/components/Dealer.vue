<template>
  <div>
    <div class="flex-container">
      <card v-for="(hand, index) in hands"
            :key="index"
            :suit="hand.suit"
            :number="hand.number"
            :hide="hand.hide"></card>
    </div>
  </div>
</template>

<script>
import Card from './Card'
import pick from '../utils/deck'
import calc from '../utils/calc'

export default {
  name: 'dealer',
  components: { Card },
  data () {
    return {
      hands: []
    }
  },
  created: function () {
    this.hands.push(pick())
    this.hands.push(pick())

    this.hands[0].hide = true

    this.$on('postexec', this.postexec)
  },
  methods: {
    postexec (playerBust) {
      this.hands[0].hide = false
      // プレイヤーがBustしてない場合、17を超えるまでカードを引く
      // eslint-disable-next-line
      while (!playerBust && calc(this.hands) < 17) {
        this.hands.push(pick())
      }
      this.$emit('result', calc(this.hands))
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
