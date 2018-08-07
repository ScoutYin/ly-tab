import LyTab from './src/index.vue'

const version = '2.0.0'
const install = function (Vue, config = {}) {
  if (install.installed) return

  Vue.component(LyTab.name, LyTab)
}

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  version,
  LyTab
}
