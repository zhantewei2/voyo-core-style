# Flex 布局工具类

提供一系列原子化的 Flex 布局类，直接在 HTML 中使用。

## 常用类列表

| 类名 | 效果 |
|---|---|
| `.flex` | `display: flex` |
| `.flex-inline` | `display: inline-flex` |
| `.flex-column` | 纵向排列 |
| `.flex-center` | 水平垂直居中 |
| `.flex-center-column` | 纵向居中 |
| `.flex-v-mid` | 垂直居中 |
| `.flex-h-mid` | 水平居中 |
| `.flex-between` | 两端对齐 |
| `.flex-around` | 等间距排列 |
| `.flex-1` | `flex: 1` |
| `.flex-auto` | `flex: auto` |

## 示例

```html
<!-- 水平垂直居中 -->
<div class="flex-center" style="height: 200px;">
  居中内容
</div>

<!-- 两端对齐 -->
<div class="flex-between">
  <span>左侧</span>
  <span>右侧</span>
</div>

<!-- 等分三栏 -->
<div class="flex">
  <div class="flex-1">1</div>
  <div class="flex-1">2</div>
  <div class="flex-1">3</div>
</div>
```
