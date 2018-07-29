<template>
  <div>
    <p>ディーラーのカード2枚表示</p>
    <div class="flex-container">
      <Card v-for="(item, index) in items"
        :key="index"/>
    </div>
  </div>
</template>

<script>
import Card from './Card'

export default {
  name: 'Dealer',
  data () {
    return {
      items: [
        {id: 1},
        {id: 2}
      ]
    }
  },
  components: {
    Card
  }
}
</script>

<style scoped>
.flex-container {
  display: flex;
  justify-content: center;
}
</style>
