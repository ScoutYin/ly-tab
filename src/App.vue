<template>
  <div id="app">
    <demo></demo>
  </div>
</template>

<script>
import Demo from '../examples/demo'

export default {
  name: 'App',
  components: {
    Demo
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
