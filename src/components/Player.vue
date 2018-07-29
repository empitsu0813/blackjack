<template>
  <div>
    <p>プレイヤーのカード2枚表示</p>
    <div class="flex-container">
      <Card v-for="(item, index) in items"
        :key="index"/>
    </div>
    <div class="flex-container">
      <button @click="hit">1枚引く</button>
      <button @click="stand">終わり</button>
    </div>
  </div>
</template>

<script>
import Card from './Card'

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
      ]
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

<style scoped>
.flex-container {
  display: flex;
  justify-content: center;
}
</style>
