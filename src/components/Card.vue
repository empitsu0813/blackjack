<template>
  <div>
    <img :src="image">
  </div>
</template>

<script>
export default {
  name: 'Card',
  computed: {
    image: function () {
      return require('../assets/card_club_01.png')
    }
  }
}
</script>

<style scoped>

</style>
