<template>
  <a class="ly-tab-item"
       :style="$parent.value === id ? activeStyle : {}"
       @click="onItemClicked">
    <div class="ly-tab-item-icon"><slot name="icon"></slot></div>
    <div class="ly-tab-item-label"><slot></slot></div>
  </a>
</template>

<script>
/**
 * ly-tab-item
 * @desc 搭配 tab 使用
 * @param {Number} id - 选中的item的索引值
 * @param {slot} [icon] - icon 图标
 * @param {slot} - 文字
 *
 * @example
 * <ly-tab-item>
 *   <img slot="icon" src="http://placehold.it/100x100">
 *   前端
 * </ly-tab-item>
 */
export default {
  name: 'LyTabItem',
  computed: {
    activeStyle () {
      return {
        color: this.$parent.activeColor,
        // borderColor: this.$parent.activeColor,
        // borderWidth: this.$parent.lineWidth,
        // borderBottomStyle: 'solid'
      }
    }
  },
  data () {
    return {
      id: (this.$parent.$children.length || 1) - 1
    }
  },
  methods: {
    onItemClicked () {
      this.$parent.$emit('input', this.id)
    }
  }
}
</script>

<style lang="scss">
.ly-tab-item {
  text-decoration: none;
  text-align: center;
  .ly-tab-item-icon {
    margin: 0 auto 5px;
  }
  .ly-tab-item-label {
    margin: 0 auto 10px;
    line-height: 18px;
  }
}
</style>
