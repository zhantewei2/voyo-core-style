# Toast 轻提示样式

轻提示组件样式，用于简短的消息提示。

## 使用方式

```html
<div class="voyo-toast voyo-toast-show">
  提示内容
</div>
```

## 样式变量 (Sass)

| 变量名 | 默认值 | 说明 |
|---|---|---|
| `$voyo-toast-bottom` | `10%` | 底部距离 |
| `$voyo-toast-min-width` | `5rem` | 最小宽度 |
| `$voyo-toast-max-width` | `80%` | 最大宽度 |

## 动画

Toast 使用 `yo-an-popup` 动画，从底部缩放 + 透明度进入。
