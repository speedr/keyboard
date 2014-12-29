import {Binding} from 'speedr-dom'

let bindingsSymbol = Symbol('bindings')
let capturesSymbol = Symbol('captures')
let keysSymbol = Symbol('keys')

export class Keyboard {
  constructor(source) {
    this[bindingsSymbol] = [
      new Binding(source, 'keydown', e => this.onKeyDown(e)),
      new Binding(source, 'keyup', e => this.onKeyUp(e))
    ]

    this[capturesSymbol] = new Set()
    this[keysSymbol] = new Set()
  }

  start() {
    this[bindingsSymbol].forEach(binding => binding.bind())
  }

  stop() {
    this[bindingsSymbol].forEach(binding => binding.unbind())
  }

  onKeyDown(event) {
    let keyCode = event.keyCode

    if (this[capturesSymbol].has(keyCode)) {
      event.preventDefault()
    }

    this[keysSymbol].add(keyCode)
  }

  onKeyUp(event) {
    let keyCode = event.keyCode
    this[keysSymbol].delete(keyCode)
  }

  isDown(keyCode) {
    return this[keysSymbol].has(keyCode)
  }
}
