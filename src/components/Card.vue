<template>
  <div>
    <img :src="image">
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    number: Number,
    suit: String,
    hide: Boolean
  },
  computed: {
    image: function () {
      const filename = this.hide ? 'back' : `${this.suit}_${this.number.toString().padStart(2, '0')}`
      return require(`../assets/card_${filename}.png`)
    }
  }
}
</script>

<style scoped>

</style>
