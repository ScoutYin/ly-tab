<template>
	<div ref="viewArea" class="ly-tabs">
		<div ref="list" :style="style" class="ly-tabs__tab-list">
			<slot />
			<div :style="activeBarStyle" class="ly-tabs__active-line" />
		</div>
	</div>
</template>

<script>
import { windowInit } from './utils/requestAnimationFrame';

export default {
	name: 'LyTabs',
	model: {
		prop: 'value',
		event: 'change'
	},
	props: {
		value: {
			type: [String, Number],
			default: ''
		},
		lineWidth: {
			type: Number,
			default: 30
		},
		lineHeight: {
			type: Number,
			default: 3
		},
		activeColor: {
			type: String,
			default: '#1677ff'
		},
		// 近似等于超出边界时最大可拖动距离(px);
		additionalX: {
			type: Number,
			default: 50
		},
		// 惯性回弹指数(值越大，幅度越大，惯性回弹距离越长);
		reBoundExponent: {
			type: Number,
			default: 10,
			validator(v) {
				return v > 0;
			}
		},
		// 灵敏度(惯性滑动时的灵敏度，值越小，阻力越大)，可近似认为速度减为零所需的时间(ms);
		sensitivity: {
			type: Number,
			default: 1000,
			validator(v) {
				return v > 0;
			}
		},
		// 回弹过程duration
		reBoundingDuration: {
			type: Number,
			default: 360
		}
	},

	data() {
		return {
			activeValue: this.value,
			lineOffset: 0,
			activeLineWidth: 0,
			viewAreaWidth: 0, // 可视区宽度;
			offsetX: 0, // 可视区与可滑动元素宽度差值;
			speed: 0, // 滑动速度(正常滑动时一般不会超过10);
			touching: false, // 是否处于touch状态;
			reBounding: false, // 是否处于回弹过程;
			translateX: 0,
			startX: 0,
			lastX: 0,
			currentX: 0,
			startMoveTime: 0,
			endMoveTime: 0,
			frameTime: 16.7, // 每个动画帧的ms数
			frameStartTime: 0,
			frameEndTime: 0,
			inertiaFrame: 0,
			zeroSpeed: 0.001, // 当speed绝对值小于该值时认为速度为0 (可用于控制惯性滚动结束期的顺滑度)
			acceleration: 0 // 惯性滑动加速度;
		};
	},

	computed: {
		style() {
			const duration =
				this.reBounding && !this.touching ? this.reBoundingDuration : 0;

			return {
				transitionTimingFunction: this.reBounding
					? 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
					: 'cubic-bezier(0.1, 0.57, 0.1, 1)',
				transitionDuration: `${duration}ms`,
				transform: `translate3d(${this.translateX}px, 0px, 0px)`
			};
		},
		activeBarStyle() {
			return {
				transition: `all 300ms`,
				width: `${this.activeLineWidth}px`,
				height: `${this.lineHeight}px`,
				transform: `translate3d(${this.lineOffset}px, 0, 0)`,
				backgroundColor: this.activeColor
			};
		},
		// 是否向左惯性滚动;
		isMoveLeft() {
			return this.currentX <= this.startX;
		}
	},

	watch: {
		value(v) {
			this.activeValue = v;
			this.refreshState();
		}
	},

	mounted() {
		windowInit();
		this.bindEvents();
		this.refreshState();
	},

	destroyed() {
		this.removeEvents();
	},

	methods: {
		refreshState() {
			if (this.refreshTask) return;

			// 避免在单次事件循环中重复执行多次计算逻辑，造成不必要的性能浪费
			this.refreshTask = new Promise((resolve) => {
				this.$nextTick(() => {
					// 重新计算可视区宽度、
					this.viewAreaWidth = this.$refs.viewArea.offsetWidth;
					this.offsetX = this.$refs.list.offsetWidth - this.viewAreaWidth;
					this.checkPosition();
					this.calcLineOffset();
					resolve();
					this.refreshTask = null;
				});
			});
		},
		/**
		 * touchstart
		 * @param {*} event
		 */
		handleTouchStart(event) {
			event.stopPropagation();
			cancelAnimationFrame(this.inertiaFrame);
			this.lastX = event.touches[0].clientX;
		},

		/**
		 * touchmove
		 * @param {*} event
		 */
		handleTouchMove(event) {
			if (this.offsetX <= 0) return;
			event.preventDefault();
			event.stopPropagation();
			this.touching = true;
			this.startMoveTime = this.endMoveTime;
			this.startX = this.lastX;
			this.currentX = event.touches[0].clientX;
			this.moveFollowTouch();
			this.endMoveTime = event.timeStamp; // 每次触发touchmove事件的时间戳;
		},

		/**
		 * touchend
		 * @param {*} event
		 */
		handleTouchEnd(event) {
			this.touching = false;
			if (this.reboundIfNeeded()) {
				cancelAnimationFrame(this.inertiaFrame);
			} else {
				let silenceTime = event.timeStamp - this.endMoveTime;
				let timeStamp = this.endMoveTime - this.startMoveTime;
				timeStamp = timeStamp > 0 ? timeStamp : 8;

				// 停顿时间超过100ms不产生惯性滑动;
				if (silenceTime > 100) return;

				this.speed = (this.lastX - this.startX) / timeStamp;
				this.acceleration = this.speed / this.sensitivity;
				this.frameStartTime = Date.now();
				this.inertiaFrame = requestAnimationFrame(this.moveByInertia);
			}
		},

		/**
		 * 如果需要回弹则进行回弹操作，并返回true;
		 */
		reboundIfNeeded() {
			this.reBounding = false;
			if (this.translateX > 0) {
				this.reBounding = true;
				this.translateX = 0;
			} else if (this.translateX < -this.offsetX) {
				this.reBounding = true;
				this.translateX = -this.offsetX;
			}
			return this.reBounding;
		},

		bindEvents() {
			this.$el.addEventListener('touchstart', this.handleTouchStart, false);
			this.$el.addEventListener('touchmove', this.handleTouchMove, false);
			this.$el.addEventListener('touchend', this.handleTouchEnd, false);
		},

		removeEvents() {
			this.$el.removeEventListener('touchstart', this.handleTouchStart);
			this.$el.removeEventListener('touchmove', this.handleTouchMove);
			this.$el.removeEventListener('touchend', this.handleTouchEnd);
		},

		/**
		 * touch拖动
		 */
		moveFollowTouch() {
			// 向左拖动
			if (this.isMoveLeft) {
				if (
					(this.translateX <= 0 && this.translateX + this.offsetX > 0) ||
					this.translateX > 0
				) {
					this.translateX += this.currentX - this.lastX;
				} else if (this.translateX + this.offsetX <= 0) {
					this.translateX +=
						(this.additionalX * (this.currentX - this.lastX)) /
						(this.viewAreaWidth + Math.abs(this.translateX + this.offsetX));
				}
			} else {
				// 向右拖动
				if (this.translateX >= 0) {
					this.translateX +=
						(this.additionalX * (this.currentX - this.lastX)) /
						(this.viewAreaWidth + this.translateX);
				} else if (
					(this.translateX <= 0 && this.translateX + this.offsetX >= 0) ||
					this.translateX + this.offsetX <= 0
				) {
					this.translateX += this.currentX - this.lastX;
				}
			}
			this.lastX = this.currentX;
		},

		/**
		 * 惯性滑动
		 */
		moveByInertia() {
			this.frameEndTime = Date.now();
			this.frameTime = this.frameEndTime - this.frameStartTime;

			// 向左惯性滑动;
			if (this.isMoveLeft) {
				// 超出边界的阶段;
				if (this.translateX <= -this.offsetX) {
					// 加速度指数变化;
					this.acceleration *=
						(this.reBoundExponent + Math.abs(this.translateX + this.offsetX)) /
						this.reBoundExponent;
					// 为避免减速过程过短，此处加速度没有乘上frameTime;
					this.speed = Math.min(this.speed - this.acceleration, 0);
				} else {
					this.speed = Math.min(
						this.speed - this.acceleration * this.frameTime,
						0
					);
				}
			} else {
				// 向右惯性滑动;
				if (this.translateX >= 0) {
					this.acceleration *=
						(this.reBoundExponent + this.translateX) / this.reBoundExponent;
					this.speed = Math.max(this.speed - this.acceleration, 0);
				} else {
					this.speed = Math.max(
						this.speed - this.acceleration * this.frameTime,
						0
					);
				}
			}
			this.translateX += (this.speed * this.frameTime) / 2;
			if (Math.abs(this.speed) <= this.zeroSpeed) {
				this.reboundIfNeeded();
				return;
			}
			this.frameStartTime = this.frameEndTime;
			this.inertiaFrame = requestAnimationFrame(this.moveByInertia);
		},

		/**
		 * 计算activeBar的translateX
		 */
		calcLineOffset() {
			const itemEl = this.getActiveItemEl();
			if (!itemEl) return;

			const itemWidth = itemEl.offsetWidth;
			const itemLeft = itemEl.offsetLeft;
			const { lineWidth } = this;

			if (lineWidth === 'auto') {
				// 等于当前激活item元素的宽度
				this.activeLineWidth = itemWidth;
			} else if (lineWidth < 1) {
				// 0~1表示占当前激活item元素宽度的比例
				this.activeLineWidth = itemWidth * lineWidth;
			} else {
				this.activeLineWidth = lineWidth;
			}

			this.lineOffset = itemLeft + (itemWidth - this.activeLineWidth) / 2;
		},

		/**
		 * 点击切换item时，调整位置使当前item尽可能往中间显示
		 */
		checkPosition() {
			const activeItemEl = this.getActiveItemEl();
			if (!activeItemEl) return;
			const offsetLeft = activeItemEl.offsetLeft;
			// 让 activeItem 展示在正中间时，其距视图左右边距为 half
			const half = (this.viewAreaWidth - activeItemEl.offsetWidth) / 2;
			// 在当前的translateX基础上需要调整的距离
			let changeX = 0;
			const absTransX = Math.abs(this.translateX);

			// item偏左，需要往右移（往中间靠）
			if (offsetLeft <= absTransX + half) {
				// 这种情况下this.translateX是负数
				changeX = half - (offsetLeft + this.translateX);
			} else {
				// item偏右，需要往左移
				changeX = -(offsetLeft - absTransX - half);
			}
			let targetX = changeX + this.translateX;
			// 左边界
			if (targetX > 0) {
				targetX = 0;
			}
			// 右边界
			if (targetX < -this.offsetX) {
				targetX = -this.offsetX;
			}
			this.reBounding = true;
			this.translateX = targetX;
		},
		/**
		 * 获取当前激活 item 的 dom 元素 $el
		 */
		getActiveItemEl() {
			if (!this.$children.length) return;
			const target = this.$children.find(
				(child) => child.name === this.activeValue
			);
			return target && target.$el;
		},
		/**
		 * 设置激活值，供 LyTabItem 实例调用
		 * @param {*} value
		 */
		setActiveValue(value) {
			this.activeValue = value;
			this.$emit('change', value);
		},
		/**
		 * LyTabItem 实例调用，注册 item
		 */
		addItem() {
			this.refreshState();
		}
	}
};
</script>

<style>
.ly-tabs {
	overflow: hidden;
	position: relative;
	width: 100%;
	border-bottom: 1px solid #eee;
	background: #fff;
}

.ly-tabs__tab-list {
	position: relative;
	display: flex;
	flex-wrap: nowrap;
	min-width: 100%;
	width: min-content;
}

.ly-tabs__active-line {
	position: absolute;
	bottom: 3px;
	left: 0;
	width: 30px;
	height: 3px;
	border-radius: 4px;
}

.ly-tabs .ly-tab-item {
	padding: 10px 12px;
	flex: 1 1 auto;
	font-size: 14px;
	text-align: center;
	white-space: nowrap;
}
/* .ly-tabs .ly-tab-item__badge {
	top: 6px;
} */
</style>
