import LyTab from './src/tab'
import LyTabItem from './src/tab-item'

const version = '1.0.1'
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
