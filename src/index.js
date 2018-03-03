import {LyTab, LyTabItem} from './../packages/tab'

const version = '1.0.0'
const install = function (Vue, config = {}) {
  if (install.installed) return

  Vue.component(LyTab.name, LyTab)
  Vue.component(LyTabItem.name, LyTabItem)
}

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
export default {
  install,
  version,
  LyTab,
  LyTabItem
}
