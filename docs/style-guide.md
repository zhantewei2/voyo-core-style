# @voyo/new-core-style 样式指引

`@voyo/new-core-style` 提供了一套完整的样式基础设施，包含组件样式、工具类、Mixin 变量等。

## 快速导航

### 组件样式
每个组件都有独立的文档文件，详细介绍其结构和可用变量。
- [Button 按钮](./btn.md)
- [Card 卡片](./card.md)
- [Cell 单元格](./cell.md)
- [Input 输入框](./input.md)
- [Dialog 对话框](./dialog.md)
- [Toast 轻提示](./toast.md)

### CSS 变量
- [CSS 变量参考](./css-vars.md) — 全局颜色、尺寸、间距等变量

### 工具类 (Utils)
常用的布局、文本、间距等原子化工具类。
- [布局 Flex](./utils/flex.md)
- [间距 Space](./utils/space.md)
- [文本 Text](./utils/text.md)

---

## 提供的能力概览

### 1. 组件样式
涵盖常见的 UI 组件基础样式，每个组件都支持多种颜色和尺寸配置。

- **基础组件**: Button (按钮), Card (卡片), Cell (单元格), Divider (分割线)
- **表单组件**: Input (输入框), Select (选择器), Checkbox (复选框), Verification (验证码)
- **提示组件**: Dialog (对话框), Toast (轻提示), Snackbar (通知条), Alert (警告), Badge (徽标)
- **导航组件**: TabBar (标签栏), Sidebar (侧边栏), Menu (菜单), Pagination (分页)
- **其他**: Load (加载), Skeleton (骨架屏), Popup (弹出层), Fab (悬浮按钮), Image (图片)

### 2. 工具类 (Utils)
提供原子化的 CSS 类，直接在 HTML 中使用，无需编写 Sass。

- **布局**: Flex 布局 (居中、对齐、排列方向)
- **间距**: Margin 和 Padding (支持 1-5 倍基准间距)
- **文本**: 字体大小、颜色、对齐、溢出处理
- **背景**: 主题色背景、渐变背景、软背景
- **边框**: 1px 物理边框 (解决移动端适配)
- **定位**: 绝对定位、相对定位、固定定位
- **网格**: 12 列网格系统

### 3. Mixins (Sass 混入)
编写样式时可复用的逻辑块，需在 Sass 中使用。

- **布局**: Flex 居中、全屏覆盖、层级管理 (z-index)
- **样式**: 渐变背景、阴影、圆角、毛玻璃效果
- **交互**: 波纹效果、过渡动画、禁用状态
- **组件**: 按钮样式重置、输入框重置、弹出层位置计算
- **适配**: 1px 边框、iOS 安全区、媒体查询断点

### 4. 变量系统
定义了全局的设计规范，如颜色、尺寸、间距等。

- **CSS 变量**: 运行时可修改，支持动态主题
- **Sass 变量**: 编译时配置，支持 Map 映射 (如颜色表、尺寸表)
