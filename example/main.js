// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import LyTab from '../src/index';

Vue.use(LyTab);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
	el: '#app',
	components: { App },
	template: '<App/>'
});
