# Dialog 对话框样式

对话框组件样式，支持标准对话框和自定义对话框两种模式。

## 标准对话框 (Dialog 1)

```html
<div class="voyo-dialog-layout">
  <div class="voyo-dialog">
    <div class="voyo-dialog-header">标题</div>
    <div class="voyo-dialog-article">
      内容区域
    </div>
    <div class="voyo-dialog-footer">
      <button class="voyo-btn voyo-btn-pure __primary">取消</button>
      <button class="voyo-btn voyo-btn-appear __primary">确认</button>
    </div>
  </div>
</div>
```

## 结构说明

- `.voyo-dialog-layout`: 全屏遮罩层
- `.voyo-dialog`: 对话框容器
  - `.__double-confirm`: 双按钮确认模式
  - `.__disable-confirm`: 无确认按钮模式
- `.voyo-dialog-header`: 头部标题
- `.voyo-dialog-article`: 内容区域
- `.voyo-dialog-footer`: 底部按钮区域
  - `.confirm`: 确认按钮
  - `.cancel`: 取消按钮

## 自定义对话框 (Dialog 2)

```html
<div class="voyo-dialog2-container">
  <div class="_header">自定义头部</div>
  <div class="_article">自定义内容</div>
  <div class="_footer">自定义底部</div>
</div>
```

## 动画

对话框使用 `voyo-dialog-animate` 动画：
- 进入：缩放 + 透明度
- 离开：缩放 + 透明度

## 样式变量 (Sass)

| 变量名 | 默认值 | 说明 |
|---|---|---|
| `$voyo-dialog-width` | `85%` | 宽度 |
| `$voyo-dialog-min-width` | `320px` | 最小宽度 |
| `$voyo-dialog-max-width` | `500px` | 最大宽度 |
| `$voyo-dialog-top` | `40%` | 顶部位置 |
| `$voyo-dialog-article-padding` | `2rem 1.5rem` | 内容区内边距 |
