# 文本工具类

提供字体大小、颜色、对齐、溢出等文本相关工具类。

## 字体大小

| 类名 | 实际大小 |
|---|---|
| `.voyo-text-size-mini` | 12px |
| `.voyo-text-size-small` | 14px |
| `.voyo-text-size-now` | 1rem |
| `.voyo-text-size-medium` | 1.1rem |
| `.voyo-text-size-strong` | 1.3rem |
| `.voyo-text-size-large` | 1.5rem |

## 语义文本类

| 类名 | 说明 |
|---|---|
| `.voyo-text-title` | 标题文本（bold, now 字号） |
| `.voyo-text-title-white` | 白色标题 |
| `.voyo-text-content` | 内容文本（small 字号） |
| `.voyo-text-brand` | 品牌文本（large 字号） |
| `.voyo-text-des` | 描述文本（mini 字号） |

## 文本颜色

| 类名 | 颜色 |
|---|---|
| `.voyo-color-primary` | 主色 |
| `.voyo-color-success` | 成功色 |
| `.voyo-color-warn` | 警告色 |
| `.voyo-color-error` | 错误色 |
| `.voyo-color-des` | 描述色 |
| `.voyo-color-content` | 内容色 |
| `.voyo-color-title` | 标题色 |
| `.voyo-color-brand` | 品牌色 |
| `.voyo-color-assist` | 辅助色 |

## 对齐与修饰

| 类名 | 效果 |
|---|---|
| `.text-center` | 居中 |
| `.text-left` | 左对齐 |
| `.text-right` | 右对齐 |
| `.text-bold` | 粗体 |
| `.text-underline` | 下划线 |
| `.text-through` | 删除线 |
| `.text-justify` | 两端对齐 |
| `.ellipsis` | 文本溢出省略号 |

## 示例

```html
<p class="voyo-text-title">标题文字</p>
<p class="voyo-text-content voyo-color-des">描述信息</p>
<p class="text-center text-bold">居中粗体</p>
<p class="ellipsis" style="width: 200px;">这是一段很长的文字会被截断...</p>
```
