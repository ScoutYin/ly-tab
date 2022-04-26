<template>
	<div
		:style="$parent.value === name ? activeStyle : {}"
		class="ly-tab-item"
		@click="onItemClicked"
	>
		<div class="ly-tab-item__wrap">
			<slot name="icon" />
			<div class="ly-tab-item__label">
				<slot>{{ title }}</slot>
			</div>
			<div v-if="badge" class="ly-tab-item__badge">
				{{ badge }}
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'LyTabItem',
	props: {
		title: String,
		name: [String, Number],
		badge: [String, Number]
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
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}
.ly-tab-item__wrap {
	position: relative;
}
.ly-tab-item__badge {
	position: absolute;
	top: 4px;
	right: -10px;
	padding: 1px 4px;
	min-width: 8px;
	font-size: 9px;
	line-height: 12px;
	color: #fff;
	background: #ff411c;
	white-space: nowrap;
	border-radius: 100px;
	transform: translate(50%, -50%);
	text-align: center;
}
</style>
