<template>
  <a
    class="ly-tab-item"
    :style="$parent.value === id ? activeStyle : {}"
    @click="onItemClicked">
    <div class="ly-tab-item-icon" v-if="$parent.fixBottom"><slot name="icon"></slot></div>
    <div class="ly-tab-item-label"><slot></slot></div>
  </a>
</template>

<script>
export default {
  name: 'LyTabItem',
  computed: {
    activeStyle () {
      return {
        color: this.$parent.activeColor
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
