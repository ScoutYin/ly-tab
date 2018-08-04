<template>
  <Tab
    v-model="selectedId"
    v-bind="options">
    <TabItem
      v-for="(item, index) in items"
      :key="index"
      >
      <span
        v-if="options.fixBottom && item.icon"
        slot="icon">
        <i :class="item.icon"></i>
      </span>
      <span>{{ item.label }}</span>
    </TabItem>
  </Tab>
</template>

<script>
import Tab from './tab'
import TabItem from './tab-item'

export default {
  name: 'LyTab',
  components: {
    Tab,
    TabItem
  },
  props: {
    value: {
      type: Number,
      default: 0
    },
    items: {
      type: Array,
      default () {
        return []
      }
    },
    options: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  data () {
    return {
      selectedId: this.value
    }
  }
}
</script>

<style>

</style>
