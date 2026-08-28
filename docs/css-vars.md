# CSS 变量参考

定义在 `:root` 上的全局 CSS 自定义属性，可通过覆盖实现运行时主题切换。

引入方式：在 HTML 中引入 `lib/css-vars-root.css`。

---

## 主题色

每种颜色提供原色、浅色 (light)、淡色 (gentle, 10% 透明度)、反色字体 (font) 四种变体。

| 变量 | 默认值 | 说明 |
|------|--------|------|
| `--color-primary` | `#00A0E2` | 主色调 |
| `--color-primary2` | `#12b6e2` | 次主色调 |
| `--color-secondary` | `rgb(0,0,0)` | 辅助色 |
| `--color-success` | `#07c160` | 成功色 |
| `--color-warn` | `#ff976a` | 警告色 |
| `--color-error` | `#ee0a24` | 错误色 |
| `--color-disabled` | `#ececec` | 禁用色 |
| `--color-gentle` | `rgb(100,100,100)` | 柔和色 |

**浅色变体 (light)**

| 变量 | 默认值 |
|------|--------|
| `--color-primary-light` | `#1BC6E2` |
| `--color-primary2-light` | `#52c4e3` |
| `--color-secondary-light` | `rgb(230,230,230)` |
| `--color-success-light` | `#07c160` |
| `--color-warn-light` | `#ff976a` |
| `--color-error-light` | `#ee0a24` |
| `--color-disabled-light` | `#f6f6f6` |
| `--color-gentle-light` | `rgb(240,240,240)` |

**淡色变体 (gentle, 10% 透明度)**

| 变量 | 默认值 |
|------|--------|
| `--color-primary-gentle` | `rgba(0,160,226,.1)` |
| `--color-primary2-gentle` | `rgba(0,160,186,.1)` |
| `--color-secondary-gentle` | `rgba(100,100,100,.1)` |
| `--color-success-gentle` | `rgba(0,255,255,.1)` |
| `--color-warn-gentle` | `rgba(255,255,0,0.1)` |
| `--color-error-gentle` | `rgba(255,0,0,.1)` |
| `--color-gentle-gentle` | `rgba(160,160,160,.1)` |

**反色字体 (font, 在该色背景上使用的字体颜色)**

| 变量 | 默认值 |
|------|--------|
| `--color-primary-font` | `white` |
| `--color-primary2-font` | `white` |
| `--color-secondary-font` | `white` |
| `--color-success-font` | `white` |
| `--color-warn-font` | `white` |
| `--color-error-font` | `white` |
| `--color-gentle-font` | `white` |
| `--color-disabled-font` | `gainsboro` |
| `--color-disabled-border` | `gainsboro` |

---

## 背景色

### 浅色背景

| 变量 | 默认值 | 说明 |
|------|--------|------|
| `--color-bg` | `white` | 主背景 |
| `--color-bg2` | `rgba(245,245,245)` | 二级背景 |
| `--color-bg3` | `#f7f8fa` | 三级背景 |
| `--color-bg4` | `rgba(255,255,255,.9)` | 高透明白 |
| `--color-bg5` | `rgba(255,255,255,.5)` | 半透明白 |
| `--color-bg6` | `rgba(255,255,255,.7)` | 七成透明白 |
| `--color-header-bg` | `var(--color-bg)` | 页面头部背景 |

### 深色背景

| 变量 | 默认值 | 说明 |
|------|--------|------|
| `--color-bg-deep` | `black` | 纯黑 |
| `--color-bg-deep2` | `#373737` | 深灰 |
| `--color-bg-deep3` | `rgba(0,0,0,0.4)` | 四成黑 |
| `--color-bg-deep4` | `rgba(0,0,0,0.8)` | 八成黑 |

### 边框色

| 变量 | 默认值 |
|------|--------|
| `--color-after-border` | `rgb(230,230,230)` |
| `--color-border-light` | `rgb(249,249,249)` |

---

## 字体色

| 变量 | 默认值 | 说明 |
|------|--------|------|
| `--color-font-base` | `#333333` | 基础字体色 |
| `--color-font-brand` | `#000000` | 品牌色 |
| `--color-font-brand-reverse` | `white` | 品牌反色 |
| `--color-font-des` | `#98a5aa` | 描述色 |
| `--color-font-des-reverse` | `rgba(255,255,255,0.6)` | 描述反色 |
| `--color-font-light` | `#CCCCCC` | 浅灰 |
| `--color-font-white` | `white` | 纯白 |
| `--color-font-dark` | `#333333` | 深色 |
| `--color-font-content` | `#666666` | 内容色 |
| `--color-font-title` | `#333333` | 标题色 |
| `--color-font-title-reverse` | `rgb(249,249,249)` | 标题反色 |
| `--color-font-assist` | `#999999` | 辅助色 |

---

## Ripple 波纹色

### 深色模式 (深色背景上使用)

| 变量 | 默认值 |
|------|--------|
| `--color-ripple-deep-bg` | `rgba(255,255,255,.2)` |
| `--color-ripple-deep-hover` | `rgba(255,255,255,.3)` |
| `--color-ripple-deep-bubbling` | `rgb(255,255,255)` |

### 浅色模式 (浅色背景上使用)

| 变量 | 默认值 |
|------|--------|
| `--color-ripple-light-bg` | `rgba(50,50,50,.1)` |
| `--color-ripple-light-hover` | `rgba(0,0,0,.1)` |
| `--color-ripple-light-bubbling` | `rgba(0,0,0,.6)` |

---

## 尺寸

| 变量 | 默认值 | 说明 |
|------|--------|------|
| `--size-font` | `16px` | 基础字号 |
| `--size-font-message` | `16px` | 消息字号 |
| `--size-font-small` | `13px` | 小字号 |
| `--size-mini` | `12px` | 极小尺寸 |
| `--size-small` | `14px` | 小尺寸 |
| `--size-now` | `1rem` | 默认尺寸 |
| `--size-medium` | `1.1rem` | 中等尺寸 |
| `--size-strong` | `1.3rem` | 加强尺寸 |
| `--size-large` | `1.5rem` | 大尺寸 |

---

## 间距、圆角、阴影

| 变量 | 默认值 | 说明 |
|------|--------|------|
| `--space-base` | `5px` | 间距基准 (所有间距工具类基于此) |
| `--radius-base` | `5px` | 基础圆角 |
| `--radius-medium` | `10px` | 中等圆角 |
| `--radius-large` | `25px` | 大圆角 |
| `--shadow-color` | `rgba(197,180,180,0.2)` | 通用阴影色 |
| `--shadow-color-tabbar` | `rgba(197,180,180,0.2)` | TabBar 阴影色 |

---

## 全局

| 变量 | 默认值 | 说明 |
|------|--------|------|
| `--font-family` | `-apple-system,'STHeiti','Microsoft YaHei',Helvetica,Arial,sans-serif` | 字体族 |
| `--line-height` | `1.5` | 行高 |
| `--blur-size` | `10px` | 毛模糊大小 |
| `--load-cover-bg` | `transparent` | 加载遮罩背景 |
| `--page-header-h` | `3.4rem` | 页面头部高度 |
| `--voyo-tab-bar-item-mini-w` | `80px` | TabBar 项最小宽度 |

---

## 主题定制示例

```css
/* 修改主题色 */
:root {
  --color-primary: #6366f1;
  --color-primary-light: #818cf8;
  --color-primary-gentle: rgba(99, 102, 241, .1);
  --color-primary-font: white;
}

/* 暗色模式 */
:root.dark {
  --color-bg: #1a1a1a;
  --color-bg2: #2a2a2a;
  --color-bg3: #333;
  --color-font-base: #e0e0e0;
  --color-font-title: #ffffff;
  --color-font-content: #aaaaaa;
  --color-font-des: #888888;
  --color-after-border: #444;
}
```
