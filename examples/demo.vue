<template>
<div class="demo">
  <LyTab
    v-model="selectedId"
    :items="items"
    :options="options"
    @change="handleChange">
  </LyTab>
  <h3>请选择移动端调试模式或者真机调试</h3>
  <!-- 通过指定fixBottom为true实现固定在底部的tab -->
  <LyTab
    v-model="bottomSelectedId"
    :items="bottomItems"
    :options="bottomOptions"
    >
  </LyTab>
</div>
</template>

<script>

export default {
  name: 'Demo',
  data () {
    return {
      selectedId: 0,
      bottomSelectedId: 0,
      items: [
        {label: '首页'},
        {label: '推荐'},
        {label: 'Android'},
        {label: '前端'},
        {label: '后端'},
        {label: 'iOS'},
        {label: '产品'},
        {label: '人工智能'},
        {label: '设计'}
      ],
      options: {
        activeColor: '#1d98bd'
      },
      bottomItems: [
        {label: '首页', icon: 'ly-icon ly-icon-home'},
        {label: '沸点', icon: 'ly-icon ly-icon-icon--'},
        {label: '发现', icon: 'ly-icon ly-icon-sousuo'},
        {label: '我', icon: 'ly-icon ly-icon-wode'}
      ],
      bottomOptions: {
        activeColor: '#1d98bd',
        fixBottom: true
      }
    }
  },
  methods: {
    handleChange (item, index) {
      console.log(item, index)
    }
  }
}
</script>

<style>

</style>
