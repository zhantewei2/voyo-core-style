# Input 输入框样式

输入框组件样式，支持三种外观类型。

## 使用方式

```html
<!-- Material Design 风格 -->
<div class="voyo-input-wrapper __type-md __focus">
  <div class="_placeholder">请输入</div>
  <div class="_input-container">
    <input class="_input" type="text" />
  </div>
  <div class="_footer"></div>
</div>

<!-- 扁平风格 -->
<div class="voyo-input-wrapper __type-flat">
  <input class="_input" type="text" placeholder="请输入" />
</div>

<!-- 糖果风格 -->
<div class="voyo-input-wrapper __type-candy">
  <input class="_input" type="text" placeholder="搜索" />
</div>
```

## 三种类型

| 类名 | 说明 |
|---|---|
| `.__type-md` | Material Design 风格，带底部高亮线动画 |
| `.__type-flat` | 扁平风格，带底部边框 |
| `.__type-candy` | 糖果风格，圆角背景，适合搜索框 |

## 状态修饰

| 类名 | 说明 |
|---|---|
| `.__focus` | 聚焦态（md 类型显示底部线） |
| `.__show-placeholder` | 显示占位符 |
| `.__clearable` | 显示清除按钮 |
| `.__prefix` / `.__suffix` | 有前缀/后缀 |
| `.__footer` | 有底部提示 |
| `.__color-error` | 错误色边框 |

## 子元素

| 类名 | 说明 |
|---|---|
| `._input` | 原生 input 元素 |
| `._placeholder` | 占位符（md 类型专用） |
| `._prefix` | 前缀区域 |
| `._suffix` | 后缀区域 |
| `._clear` | 清除按钮 |
| `._footer` | 底部提示区域 |

## 尺寸

支持 6 种尺寸：`__size-mini`, `__size-small`, `__size-now`, `__size-medium`, `__size-strong`, `__size-large`

## 样式变量 (Sass)

| 变量名 | 默认值 | 说明 |
|---|---|---|
| `$voyo-input-border-color` | - | 边框颜色 |
| `$voyo-input-line-color` | - | 底部线颜色 |
| `$voyo-input-placeholder-color` | - | 占位符颜色 |
| `$voyo-input-candy-radius` | `2em` | 糖果风格圆角 |
| `$voyo-input-candy-bg` | `var(--color-bg3)` | 糖果风格背景色 |
