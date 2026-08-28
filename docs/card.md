# Card 组件样式

卡片容器样式，用于包裹内容区块。

## 使用方式

```html
<!-- 基础卡片 -->
<div class="voyo-card">
  <div class="voyo-card-header">
    <span class="_title">标题</span>
    <span class="_des">描述</span>
  </div>
  <div class="voyo-card-content">
    内容区域
  </div>
  <div class="voyo-card-footer">
    底部区域
  </div>
</div>
```

## 结构说明

- `.voyo-card`: 卡片根容器
- `.voyo-card-header`: 头部区域，默认 Flex 布局
  - `._title` / `.__title`: 标题样式
  - `._des`: 描述样式
- `.voyo-card-content`: 内容区域
- `.voyo-card-footer`: 底部区域，居中对齐

## 样式变量 (Sass)

| 变量名 | 默认值 | 说明 |
|---|---|---|
| `$voyo-card-bg` | `var(--color-bg)` | 背景色 |
| `$voyo-card-padding` | `1rem` | 内边距 |
| `$voyo-card-margin` | `.9rem` | 外边距 |
| `$use-block-shadow` | `true` | 是否使用阴影 |
