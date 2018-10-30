/**
 * v-clickoutside
 *
 * ```vue
 * <div v-clickoutside="onClose">
 * ```
 */
import { isServer } from './index'
var context = '@@clickoutsideContext'
export default {
  bind: function (el, binding) {
    var handler = function (event) {
      if (!el.contains(event.target)) {
        el[context].callback()
      }
    }
    el[context] = {
      handler: handler,
      callback: binding.value,
      arg: binding.arg || 'click'
    }
    !isServer && document.addEventListener(el[context].arg, handler)
  },
  update: function (el, binding) {
    /* istanbul ignore next */
    el[context].callback = binding.value
  },
  unbind: function (el) {
    !isServer &&
      document.removeEventListener(el[context].arg, el[context].handler)
  },
  install: function (Vue) {
    Vue.directive('clickoutside', {
      bind: this.bind,
      unbind: this.unbind
    })
  }
}
