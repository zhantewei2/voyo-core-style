# new-core-style MCP Server

为 AI Agent 提供 `@voyo/new-core-style` 样式库的文档查询能力。

## 全局安装

```bash
npm install -g @voyo/new-core-style
```

安装后，`new-core-style-mcp` 命令将全局可用。

## 工具

### `list_styles`
列出总指引，返回所有可用样式能力的概览和导航。无需参数。

### `get_style_doc(topic)`
根据主题名获取具体文档。参数：

| 主题 | 内容 |
|------|------|
| `style-guide` / `guide` | 样式总指引 |
| `css-vars` / `vars` | CSS 变量参考（颜色、尺寸、间距等全局变量） |
| `btn` / `button` | Button 按钮组件样式 |
| `card` | Card 卡片组件样式 |
| `cell` | Cell 单元格组件样式 |
| `input` | Input 输入框组件样式 |
| `dialog` | Dialog 对话框组件样式 |
| `toast` | Toast 轻提示组件样式 |
| `flex` | Flex 布局工具类 |
| `space` | 间距工具类 |
| `text` | 文本工具类 |

## 配置到 MCP Client

```json
{
  "mcpServers": {
    "new-core-style": {
      "command": "new-core-style-mcp"
    }
  }
}
```
