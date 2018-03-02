<template>
  <div class="ly-tab" :class="{'ly-tab-fix-bottom': fixBottom}" ref="viewArea">
    <div class="ly-tab-list"
         :style="style"
         ref="list">
      <slot></slot>
    </div>
  </div>
</template>

<script>
/**
 * ly-tab
 * @desc 依赖 tab-item
 * @param {Boolean} fixBottom - 固定底部
 * @param {Number} value - 返回 item component 传入的 id
 *
 * @example
 * <ly-tab v-model="selected">
      <ly-tab-item v-for="(item, index) in tabList" :key="index">
        {{item.itemName}}
      </ly-tab-item>
    </ly-tab>
 */
import './utils/requestAnimationFrame'

export default {
  name: 'LyTab',
  props: {
    lineWidth: {
      type: Number,
      default: 1
    },
    activeColor: {
      type: String,
      default: 'red'
    },
    fixBottom: {
      type: Boolean,
      default: false
    },
    value: Number,
    options: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  computed: {
    style () {
      return {
        transitionTimingFunction: this.transitionTimingFunction,
        transitionDuration: `${this.transitionDuration}ms`,
        transform: `translate3d(${this.translateX}px, 0px, 0px)`
      }
    },
    transitionDuration () {
      if (this.touching || (!this.reBounding && !this.touching)) {
        return '0'
      }
      if (this.reBounding && !this.touching) {
        return this.opts.reBoundingDuration
      }
    },
    transitionTimingFunction () {
      return this.reBounding ? 'cubic-bezier(0.25, 0.46, 0.45, 0.94)' : 'cubic-bezier(0.1, 0.57, 0.1, 1)'
    },
    // 可视区宽度;
    viewAreaWidth () {
      return this.$refs.viewArea.offsetWidth
    },
    // 可视区与可滑动元素宽度差值;
    listWidth () {
      return this.$refs.list.offsetWidth - this.viewAreaWidth
    },
    // 最终参数;
    opts () {
      return Object.assign({}, this.defaultOptions, this.options)
    },
    // 是否向左惯性滚动;
    isMoveLeft () {
      return this.speed <= 0
    },
    isMoveRight () {
      return this.speed >= 0
    }
  },
  data () {
    return {
      speed: 0, // 滑动速度(正常滑动时一般不会超过10);
      touching: false, // 是否处于touch状态;
      reBounding: false, // 是否处于回弹过程;
      translateX: 0,
      startX: 0,
      lastX: 0,
      currentX: 0,
      frameTime: 16.7, // 每个动画帧的ms数
      frameStartTime: 0,
      frameEndTime: 0,
      inertiaFrame: 0,
      touchFrame: 0,
      zeroSpeed: 0.001, // 当speed绝对值小于该值时认为速度为0 (可用于控制惯性滚动结束期的顺滑度)
      acceleration: 0, // 惯性滑动加速度;
      defaultOptions: {
        // 近似等于超出边界时最大可拖动距离(px);
        additionalX: 50,
        // 惯性回弹指数(值越大，幅度越大，惯性回弹距离越长);
        reBoundExponent: 10,
        // 灵敏度(惯性滑动时的灵敏度,值越小，阻力越大),可近似认为速度减为零所需的时间(ms);
        sensitivity: 1000,
        // 回弹过程duration;
        reBoundingDuration: 360
      }
    }
  },
  mounted () {
    this.bindEvent()
    this.$el.addEventListener('transitionend', () => {
      this.reBounding = false
    }, false)
  },
  methods: {
    // start
    handleTouchStart (event) {
      cancelAnimationFrame(this.inertiaFrame)
      cancelAnimationFrame(this.touchFrame)
      this.startX = event.touches[0].clientX
      this.lastX = event.touches[0].clientX
      this.lastMoveStamp = event.timeStamp
    },
    // move
    handleTouchMove (event) {
      if (this.listWidth <= 0) {
        return
      }
      event.preventDefault()
      event.stopPropagation()
      this.touching = true
      this.startMoveTime = this.endMoveTime
      this.currentX = event.touches[0].clientX
      this.touchFrame = requestAnimationFrame(this.moveFellowTouch)
      this.endMoveTime = event.timeStamp // 每次触发touchmove事件的时间戳;
    },
    // end
    handleTouchEnd (event) {
      this.touching = false
      if (this.checkReboundX()) {
        cancelAnimationFrame(this.inertiaFrame)
        cancelAnimationFrame(this.touchFrame)
      } else {
        let silenceTime = event.timeStamp - this.endMoveTime
        let timeStamp = this.endMoveTime - this.startMoveTime
        if (silenceTime > 100) { // 停顿时间超过100ms不产生惯性滑动;
          return
        }
        this.speed = (this.lastX - this.startX) / (timeStamp)
        this.acceleration = this.speed / this.opts.sensitivity
        this.frameStartTime = new Date().getTime()
        this.inertiaFrame = requestAnimationFrame(this.moveByInertia)
      }
    },
    // 判断是否为向左滑动;
    toLeft () {
      return this.currentX - this.lastX < 0
    },
    // 检查是否需要回弹;
    checkReboundX () {
      this.reBounding = false
      if (this.translateX >= 0) {
        this.reBounding = true
        this.translateX = 0
      } else if (this.translateX <= -this.listWidth) {
        this.reBounding = true
        this.translateX = -this.listWidth
      }
      return this.translateX === 0 || this.translateX === -this.listWidth
    },
    bindEvent () {
      this.$el.addEventListener('touchstart', this.handleTouchStart, false)
      this.$el.addEventListener('touchmove', this.handleTouchMove, false)
      this.$el.addEventListener('touchend', this.handleTouchEnd, false)
    },
    // touch拖动
    moveFellowTouch () {
      this.startX = this.lastX
      if (this.toLeft()) { // 向左拖动
        if (this.translateX <= 0 && this.translateX + this.listWidth > 0) {
          this.translateX += this.currentX - this.lastX
        } else if (this.translateX + this.listWidth <= 0) {
          this.translateX += this.opts.additionalX * (this.currentX - this.lastX) / (this.viewAreaWidth + Math.abs(this.translateX + this.listWidth))
        } else if (this.translateX > 0) {
          this.translateX += this.currentX - this.lastX
        }
      } else { // 向右拖动
        if (this.translateX >= 0) {
          this.translateX += this.opts.additionalX * (this.currentX - this.lastX) / (this.viewAreaWidth + this.translateX)
        } else if (this.translateX <= 0 && this.translateX + this.listWidth >= 0) {
          this.translateX += this.currentX - this.lastX
        } else if (this.translateX + this.listWidth <= 0) {
          this.translateX += this.currentX - this.lastX
        }
      }
      this.lastX = this.currentX
    },
    // 惯性滑动
    moveByInertia () {
      this.frameEndTime = new Date().getTime()
      this.frameTime = this.frameEndTime - this.frameStartTime
      if (this.isMoveLeft) { // 向左惯性滑动;
        if (this.translateX <= -this.listWidth) { // 超出边界的过程;
          // 加速度指数变化;
          this.acceleration *= (this.opts.reBoundExponent +
                               Math.abs(this.translateX + this.listWidth)) /
                               this.opts.reBoundExponent
          this.speed = Math.min(this.speed - this.acceleration, 0) // 为避免减速过程过短，此处加速度没有乘上frameTime;
        } else {
          this.speed = Math.min(this.speed - this.acceleration * this.frameTime, 0)
        }
      } else if (this.isMoveRight) { // 向右惯性滑动;
        if (this.translateX >= 0) {
          this.acceleration *= (this.opts.reBoundExponent + this.translateX) / this.opts.reBoundExponent
          this.speed = Math.max(this.speed - this.acceleration, 0)
        } else {
          this.speed = Math.max(this.speed - this.acceleration * this.frameTime, 0)
        }
      }
      this.translateX += this.speed * this.frameTime / 2
      if (Math.abs(this.speed) <= this.zeroSpeed) {
        this.checkReboundX()
      } else {
        this.frameStartTime = this.frameEndTime
        this.inertiaFrame = requestAnimationFrame(this.moveByInertia)
      }
    }
  }
}
</script>

<style lang="scss">
.ly-tab {
  position: relative;
  background-color: rgba($color: #fff, $alpha: 0.8);
  width: 100%;
  overflow: hidden;
  display: flex;
  border-bottom: 1px solid #ddd;
  &.ly-tab-fix-bottom {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    border-top: 1px solid #ccc;
    border-bottom: none;
    width: 100%;
    .ly-tab-item {
      border-bottom: none!important;
    }
  }
  .ly-tab-list {
    box-sizing: border-box;
    display: flex;
    flex-flow: row nowrap;
    flex-shrink: 0;
    padding: 5px 10px 0;
    min-width: 100%;
    .ly-tab-item {
      flex-grow: 1;
      font-size: 14px;
      text-align: center;
      padding: 0 5px;
      &:not(:first-child) {
        margin-left: 15px;
      }
    }
  }
}
</style>
