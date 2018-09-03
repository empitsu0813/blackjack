const deck = []
const suits = ['spade', 'club', 'diamond', 'heart']
// 1から13までの連番の配列作る
const ranks = Array.from({length: 13}, (v, k) => ++k)

suits.forEach((suit) => {
  ranks.forEach((rank) => {
    deck.push({
      suit,
      rank
    })
  })
})

export default () => {
  return deck.splice(Math.floor(Math.random() * Math.floor(deck.length)[0]), 1)
}
