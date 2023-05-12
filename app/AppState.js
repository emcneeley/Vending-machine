import { Snack } from "./Models/Snacks.js"
import { Value } from "./Models/Value.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import { loadState } from "./Utils/Store.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = loadState('values', [Value])

  /** @type {import('./Models/Snacks').Snack[]} */
  snacks = [
    new Snack({ name: 'Fritos', price: 1.75, imgUrl: 'https://m.media-amazon.com/images/I/91M5DIRwhoL._SX679_PIbundle-64,TopRight,0,0_AA679SH20_.jpg' }),
    new Snack({ name: 'Doritos', price: 1.25, imgUrl: 'https://m.media-amazon.com/images/I/51sBScAK-OL.jpg' }),
    new Snack({ name: 'Oreos', price: 2.25, imgUrl: 'https://m.media-amazon.com/images/I/81hT6JWCVUL._SX679_.jpg' })
  ]

  money = 0

  mySnacks = []
}









































export const appState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
