<template>
	<div id="app">
		<ly-tabs v-model="tabsValue" @change="handleTabsChange">
			<ly-tab-item
				v-for="item in tabsItems"
				:key="item.value"
				:title="item.title"
				:name="item.value"
			/>
		</ly-tabs>

		<h3>请使用移动端调试模式或者真机调试</h3>

		<div class="demo-tab-bar">
			<ly-tab-bar v-model="tabBarValue" @change="handleTabBarChange">
				<ly-tab-item
					v-for="item in tabBarItems"
					:key="item.value"
					:title="item.title"
					:name="item.value"
				>
					<template #icon>
						<i :class="item.icon" />
					</template>
				</ly-tab-item>
			</ly-tab-bar>
		</div>
	</div>
</template>

<script>
// dev import
import { LyTabs, LyTabBar, LyTabItem } from 'ly-tab';
// prod import
// import { LyTabs, LyTabBar, LyTabItem } from '..';

export default {
	name: 'App',
	components: {
		LyTabs,
		LyTabBar,
		LyTabItem
	},
	data() {
		return {
			tabsValue: 'fe',
			tabBarValue: 'home',
			tabsItems: [
				{ title: '首页', value: 'home' },
				{ title: '推荐', value: 'recommend' },
				{ title: 'Android', value: 'android' },
				{ title: '前端', value: 'fe' },
				{ title: '后端', value: 'be' },
				{ title: 'iOS', value: 'ios' },
				{ title: '产品', value: 'pm' },
				{ title: '人工智能', value: 'ai' },
				{ title: '设计', value: 'design' }
			],
			tabBarItems: [
				{ title: '首页', icon: 'ly-icon ly-icon-home', value: 'home' },
				{ title: '沸点', icon: 'ly-icon ly-icon-icon--', value: 'pins' },
				{ title: '发现', icon: 'ly-icon ly-icon-sousuo', value: 'find' },
				{ title: '我', icon: 'ly-icon ly-icon-wode', value: 'mine' }
			]
		};
	},
	mounted() {
		// 模拟动态更新tabs
		// setTimeout(() => {
		// 	this.tabsItems.push(
		// 		{ title: '产品', value: 'pm' },
		// 		{ title: '人工智能', value: 'ai' },
		// 		{ title: '设计', value: 'design' }
		// 	);
		// }, 1000);
	},
	methods: {
		handleTabsChange(value) {
			console.log('LyTabs change:', value);
		},
		handleTabBarChange(value) {
			console.log('LyTabBar change:', value);
		}
	}
};
</script>

<style>
@import './assets/icon/iconfont.css';

body {
	min-height: 100vh;
	background: rgb(250, 251, 252);
}
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}
.demo-tab-bar {
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
}
</style>
