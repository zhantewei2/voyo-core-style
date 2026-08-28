# Button 组件样式

按钮组件样式，支持多种外观、颜色和尺寸。

## 使用方式

```html
<!-- 基础用法 -->
<button class="base-btn voyo-btn voyo-btn-appear __primary">按钮</button>

<!-- 描边按钮 -->
<button class="base-btn voyo-btn voyo-btn-outline __success">成功</button>

<!-- 透明按钮 -->
<button class="base-btn voyo-btn voyo-btn-pure __error">错误</button>

<!-- 淡色按钮 -->
<button class="base-btn voyo-btn voyo-btn-candy __warn">警告</button>

<!-- 圆角按钮 -->
<button class="base-btn voyo-btn voyo-btn-round voyo-btn-appear __primary">圆角</button>

<!-- 块级按钮 -->
<button class="base-btn voyo-btn voyo-btn-block voyo-btn-appear __primary">Block</button>

<!-- 加载状态 -->
<button class="base-btn voyo-btn voyo-btn-appear __primary __loading">Loading</button>
```

## 样式变量 (Sass)

在使用前可以通过覆盖这些变量来自定义按钮样式。

```scss
@use "@voyo/new-core-style/lib/vars" as *;

// 修改按钮默认颜色
$voyo-btn-colors: map-merge($color-various, (
  primary: #6366f1
));
```

### 可用变量

| 变量名 | 默认值 | 说明 |
|---|---|---|
| `$voyo-btn-padding` | `0 .6em` | 内边距 |
| `$voyo-btn-distance` | `1em` | 间距 |
| `$voyo-btn-min-width` | `5.5em` | 最小宽度 |
| `$voyo-btn-block-spacing` | `1em` | 块级按钮间距 |
| `$voyo-btn-round-radius` | `var(--radius-large)` | 圆角按钮半径 |
| `$voyo-btn-shadow-use` | `false` | 是否启用阴影 |

### 尺寸列表
支持 6 种尺寸：`mini`, `small`, `now`, `medium`, `strong`, `large`

```html
<button class="... voyo-btn-size-mini">Mini</button>
<button class="... voyo-btn-size-large">Large</button>
```

### 颜色列表
支持 7 种颜色：`primary`, `primary2`, `secondary`, `success`, `warn`, `error`, `gentle`

```html
<button class="... __primary">Primary</button>
<button class="... __success">Success</button>
```
