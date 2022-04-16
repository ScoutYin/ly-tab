import LyTab from './ly-tab.vue';

const install = function (Vue) {
	if (install.installed) return;

	Vue.component(LyTab.name, LyTab);
};

// auto install
if (typeof window !== 'undefined' && window.Vue) {
	install(window.Vue);
}

export default {
	install,
	LyTab
};
