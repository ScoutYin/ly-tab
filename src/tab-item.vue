<template>
	<div
		:style="$parent.value === name ? activeStyle : {}"
		class="ly-tab-item"
		@click="onItemClicked"
	>
		<slot name="icon" />
		<div class="ly-tab-item-label">
			<slot>{{ title }}</slot>
		</div>
	</div>
</template>

<script>
export default {
	name: 'LyTabItem',
	props: {
		title: String,
		name: [String, Number]
	},
	computed: {
		activeStyle() {
			return {
				color: this.$parent.activeColor
			};
		}
	},
	mounted() {
		this.$parent.addItem && this.$parent.addItem(this);
	},
	methods: {
		onItemClicked() {
			this.$parent.setActiveValue(this.name);
		}
	}
};
</script>

<style>
.ly-tab-item {
	flex: 1 1;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}
</style>
