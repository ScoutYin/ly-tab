<template>
  <div id="app">
    <ly-tab
    v-model="selectedId"
    :items="items"
    :options="options"
    @change="handleChange">
  </ly-tab>
  <h3>请选择移动端调试模式或者真机调试</h3>
  <!-- 通过指定fixBottom为true实现固定在底部的tab -->
  <ly-tab
    v-model="bottomSelectedId"
    :items="bottomItems"
    :options="bottomOptions"
    >
  </ly-tab>
  </div>
</template>

<script>

export default {
  name: 'App',
	 data () {
    return {
      selectedId: 2,
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
        {text: '首页', icon: 'ly-icon ly-icon-home'},
        {text: '沸点', icon: 'ly-icon ly-icon-icon--'},
        {text: '发现', icon: 'ly-icon ly-icon-sousuo'},
        {text: '我', icon: 'ly-icon ly-icon-wode'}
      ],
      bottomOptions: {
        activeColor: '#1d98bd',
        fixBottom: true,
        labelKey: 'text'
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
@import "./assets/icon/iconfont.css";

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
