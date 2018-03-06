# Ly-tab

> A better mobile touch-swappable reusable component for **Vue 2.0**

 一个用于移动端的可触摸滑动具有回弹效果的可复用Vue组件
 
 **demo效果**
 
 ![image](https://raw.githubusercontent.com/ScoutYin/Image-Resource/master/images/ly-tab/ly-tab1.0.3.gif)

## Installation
```shell
npm i ly-tab -S

```

## Usage

```javascript
import Vue from 'vue';
import LyTab from 'ly-tab';

Vue.use(LyTab);
```

## Example

```html
<ly-tab v-model="selected">

  <!-- 需通过v-model双向传递索引值, selected是你自己定义的一个在data中用于存放当前tab-item的索引值的变量 -->
  
  <ly-tab-item v-for="(item, index) in tabList" :key="index">
    {{item.itemName}}
  </ly-tab-item>
</ly-tab>

```

 配置项 | 类型 | 描述 | 默认值 
--------|---------|-------|-----
 lineWidth | Number | fixBottom为false时tabbar底部border-width | 1px 
 activeColor | String | 激活状态下字体color以及border-bottom-color | red 
 fixBottom | Boolean | 是否固定在视图底部 | false 
 additionalX | Number | 近似等于超出边界时最大可拖动距离 | 50px 
 reBoundExponent | Number | 惯性回弹指数(值越大，幅度越大，惯性回弹距离越长) | 10 
 sensitivity | Number | 惯性滑动时的灵敏度(值越小，阻力越大),可近似认为手松开后速度减为零所需时间 | 1000ms 
 reBoundingDuration | Number | 回弹动画duration | 360ms 

## Repository

github：
[https://github.com/ScoutYin/ly-tab.git](https://github.com/ScoutYin/ly-tab.git)



## License
MIT