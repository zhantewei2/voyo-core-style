# Cell 单元格样式

单元格组件样式，常用于列表项展示。

## 使用方式

```html
<div class="voyo-cell">
  <div class="voyo-cell-label">标题</div>
  <div class="voyo-cell-content">内容</div>
</div>
```

## 结构说明

- `.voyo-cell`: 单元格根容器，Flex 布局，垂直居中
- `.voyo-cell-label`: 左侧标签
- `.voyo-cell-content`: 右侧内容
- `.voyo-cell-message`: 辅助信息
- `.voyo-cell-image`: 图标/图片区域
- `.voyo-cell-des`: 描述文字

## 与其他组件组合

Cell 常与 `.voyo-border-bottom` 辽框工具类配合使用，形成列表分隔效果：

```html
<div class="voyo-cell voyo-border-bottom">...</div>
<div class="voyo-cell voyo-border-bottom">...</div>
<div class="voyo-cell">...</div>
```
