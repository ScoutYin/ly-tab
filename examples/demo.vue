<template>
  <div>
    <!-- 通过拆解v-model语法糖实现双向传递 -->
    <ly-tab :value="selected" @input="changeSelected" activeColor="#1d98bd">
      <ly-tab-item v-for="(item, index) in tabList" :key="index">
        {{item.itemName}}
        </ly-tab-item>
    </ly-tab>
    <h3>请选择移动端调试模式或者真机调试</h3>
    <!-- 通过绑定‘fixBottom’实现固定在底部的tab -->
    <ly-tab v-model="selectedFixed" fixBottom>
      <ly-tab-item v-for="(item, index) in fixedList" :key="index">
        <span slot="icon">{{item.icon}}</span>
        {{item.itemName}}
        </ly-tab-item>
    </ly-tab>
  </div>
</template>

<script>
// import { LyTab, LyTabItem } from 'ly-tab'

export default {
  name: 'Demo',
  components: {
    // LyTab,
    // LyTabItem
  },
  data () {
    return {
      selected: 0, // 自定义的变量用于存放当前选中的tab的索引值
      selectedFixed: 0,
      tabList: [
        {itemName: '首页'},
        {itemName: '推荐'},
        {itemName: 'Android'},
        {itemName: '前端'},
        {itemName: '后端'},
        {itemName: 'iOS'},
        {itemName: '产品'},
        {itemName: '人工智能'},
        {itemName: '设计'}
      ],
      fixedList: [
        {itemName: '首页', icon: 'icon1'},
        {itemName: '沸点', icon: 'icon2'},
        {itemName: '发现', icon: 'icon3'},
        {itemName: '我', icon: 'icon4'}
      ]
    }
  },
  methods: {
    changeSelected (id) {
      this.selected = id
    }
  }
}
</script>

<style>

</style>
