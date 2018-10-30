import Vue from 'vue'
import { getTouch } from './touches'

const isServer = Vue.prototype.$isServer

/**
 * whether the value is defined
 * @param value
 */
function isDef (value: any): boolean {
  return value !== undefined && value !== null
}

/**
 * whether the value is a type of object
 * @param x
 */
function isObj (x: any): boolean {
  const type = typeof x
  return x !== null && (type === 'object' || type === 'function')
}

export { isServer, getTouch, isDef, isObj }
