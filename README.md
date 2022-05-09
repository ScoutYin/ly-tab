# Ly-Tab 3.x版本（非Vue3）

3.x版本将和目前的2.x版本存在使用方法及API上的不兼容，使用者如需升级，请参照3.x版本。**强烈建议**使用3.x版本，2.x版本将不再进行更新维护。

## Vue3版本

如果你使用的是Vue3，请[点击这里](https://github.com/ScoutYin/fun-tab)
## 基本效果展示

![v3 0 0](https://user-images.githubusercontent.com/32835712/166098427-fef7c973-00aa-4a3a-82a5-41ce74dbe62f.gif)

## 安装

```shell
yarn add ly-tab
# or
npm i ly-tab
```
## 使用

### 全局注册

```js
import LyTab from 'ly-tab';

Vue.use(LyTab);
```

### 局部注册

```js
import { LyTabs, LyTabBar, LyTabItem } from 'ly-tab';

export default {
  components: {
    LyTabs,
    LyTabBar,
    LyTabItem
  }
  // ...
}
```

## LyTabs

### 简单示例

```javascript
<ly-tabs v-model="value">
  <ly-tab-item name="1" title="选项卡1" />
  <ly-tab-item name="2" title="选项卡2" />
</ly-tabs>
```

```javascript
export default {
  data() {
    return  {
      value: '1'
    }
  }
}
```

### 属性

| 属性 | 说明 | 类型 | 默认值 |
| ---- | -----|---|----|
| value | 当前激活的 `tab` 的 name 属性值 | `string \| number` | '' |
| lineWidth | 当前激活 `tab` 下划线的宽度，单位 `px` | `number` | 30 |
| lineHeight | 当前激活 `tab` 下划线的高度，单位 `px` | `number` | 3 |
| activeColor | 激活状态下 `tab` 文案及下划线的颜色 | `string` | #1677ff |
| additionalX | 近似等于超出边界时最大可拖动距离，单位 `px` | `number` | 50 |
| reBoundExponent | 惯性回弹指数，值越大，惯性回弹距离越长 | `number` | 10 |
| inertialDuration | 惯性滑动过程的持续时间，值越小，感知上阻力越大，可近似认为惯性滑动过程速度减为零所需的时间(ms) | `number` | 1000 |
| reBoundingDuration | 回弹过程动画duration，单位 `ms` | `number` | 1000 |

### 事件

| 事件名 | 说明 | 回调参数 |
| ----- | ---- | ----- |
| change | 切换激活 tab 项的回调 | `name: string \| number` |

### 插槽

| 名称 | 说明 |
| --- | ---- |
| default | 默认插槽，放置 `LyTabItem` 组件 |

## LyTabItem

### 属性

| 属性 | 说明 | 类型 | 默认值 |
| ---- | -----|---|----|
| title | 选项卡显示文字 | `string` | - |
| name | 选项卡标识符 | `string \| number` | 选项卡索引 |
| badge | 右上角徽标内容 | `string \| number` | - |

### 方法

| 方法名 | 说明 | 参数 | 返回值 |
| ----- | ---- | ---- | ---- |
| resize | 外层元素大小或组件布局、尺寸变化时，可以调用此方法来进行重绘 | - | - |

### 插槽

| 名称 | 说明 |
| --- | ---- |
| default | 选项卡文字内容插槽，优先级高于传入的 `title` 属性 |
| icon | 选项卡图标 |

## LyTabBar

### 简单示例

```javascript
<ly-tab-bar v-model="value">
  <ly-tab-item name="1" title="选项卡1" />
  <ly-tab-item name="2" title="选项卡2" />
</ly-tab-bar>
```

```javascript
export default {
  data() {
    return  {
      value: '1'
    }
  }
}
```

### 属性

| 属性 | 说明 | 类型 | 默认值 |
| ---- | -----|---|----|
| value | 当前激活的 `tab` 的 name 属性值 | `string \| number` | '' |
| activeColor | 激活状态下 `tab` 文案及icon的颜色 | `string` | #1677ff |

### 事件

| 事件名 | 说明 | 回调参数 |
| ----- | ---- | ----- |
| change | 切换激活 tab 项的回调 | `name: string \| number` |

### 插槽

| 名称 | 说明 |
| --- | ---- |
| default | 默认插槽，放置 `LyTabItem` 组件 |
