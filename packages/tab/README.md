
# Ly-tab

> A better mobile touch-swappable reusable component for **Vue 2.0**

 一个用于移动端的可触摸滑动具有回弹效果的可复用Vue组件
 
 **demo效果**
 
 ![image](https://raw.githubusercontent.com/ScoutYin/Image-Resource/master/images/ly-tab/ly-tab2.0.0.gif)
 
 clone该仓库到本地可查看演示demo
 
 [掘金文章地址](https://juejin.im/post/5a9a48a55188255584536f75)

## Installation
```shell
npm i ly-tab -S

```
or
```shell
yarn add ly-tab

```

## Usage

```javascript
import Vue from 'vue'
import LyTab from 'ly-tab'

Vue.use(LyTab)
// 之后便可在全局使用了
```

## Example

> ly-tab 2.x版本（**推荐安装最新版本**）使用方法：

```html
<ly-tab
    v-model="selectedId"
    :items="items"
    :options="options">
</ly-tab>
```

```javascript
export default {
  data () {
    return {
      selectedId: 0,
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
        // 可在这里指定labelKey为你数据里文字对应的字段名
      },
    }
  }
}
```

> ly-tab 1.x版本使用方法：

```html
<ly-tab
  v-model="selectedId"
  activeColor="#1d98bd">
  <ly-tab-item
    v-for="(item, index) in items"
    :key="index">
    {{item.label}}
  </ly-tab-item>
</ly-tab>
```
```javascript
export default {
  data () {
    return {
      selectedId: 0,
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
      ]
    }
  }
}
```

## 版本差异

**2.x版本**相较于**1.x版本**：

- 简化了使用复杂度
- 配置项传入方式采用Object方式传入，即options的绑定值为一个Object
- 新增滑条动画效果
- 增加item切换时（非fixBottom）位置调整（动画），使当前激活的item尽量显示在中间

## 可选的配置项：

从2.0版本开始，配置项采用Object方式传入，1.x版本采用单个配置传入方式

 配置项 | 类型 | 描述 | 默认值 
--------|---------|-------|-----
 labelKey | String | 指定item的文字部分在item对象中的key | label 
 lineWidth | Number | fixBottom为false时tabbar底部border-width | 1px 
 activeColor | String | 激活状态下字体以及滑条颜色 | red 
 fixBottom | Boolean | 是否固定在视图底部 | false 
 additionalX | Number | 近似等于超出边界时最大可拖动距离 | 50px 
 reBoundExponent | Number | 惯性回弹指数(值越大，幅度越大，惯性回弹距离越长) | 10 
 sensitivity | Number | 惯性滑动时的灵敏度(值越小，阻力越大),可近似认为手松开后速度减为零所需时间 | 1000ms 
 reBoundingDuration | Number | 回弹动画duration | 360ms 


## 事件

 事件名 | 参数 | 描述 
 --------|---------|---------
 change | item, index | 当前点击的item以及索引值

## Build Setup

```bash
# install dependencies
npm install
# or
yarn

# serve with hot reload at localhost:8080
npm run dev
# or
yarn dev

```


## License
MIT