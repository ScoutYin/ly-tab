<template>
	<div class="ly-tab-bar">
		<div class="ly-tab-bar-wrap">
			<slot />
		</div>
	</div>
</template>

<script>
export default {
	name: 'LyTabBar',
	model: {
		prop: 'value',
		event: 'change'
	},
	props: {
		value: {
			type: [String, Number],
			default: ''
		},
		activeColor: {
			type: String,
			default: '#1677ff'
		}
	},
	data() {
		return {
			activeValue: this.value
		};
	},
	watch: {
		value(value) {
			this.activeValue = value;
		}
	},
	methods: {
		setActiveValue(value) {
			this.activeValue = value;
			this.$emit('change', value);
		}
	}
};
</script>

<style>
.ly-tab-bar-wrap {
	display: flex;
	flex-wrap: nowrap;
	align-items: stretch;
	min-height: 50px;
	background: #fff;
}
.ly-tab-bar .ly-tab-item {
	font-size: 12px;
}
</style>
