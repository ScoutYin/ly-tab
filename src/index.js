import LyTabBar from './tab-bar.vue';
import LyTabItem from './tab-item.vue';
import LyTabs from './tabs.vue';

const install = (Vue) => {
	Vue.component(LyTabs.name, LyTabs);
	Vue.component(LyTabItem.name, LyTabItem);
	Vue.component(LyTabBar.name, LyTabBar);
};

export default { install };

export { LyTabs, LyTabBar, LyTabItem };
