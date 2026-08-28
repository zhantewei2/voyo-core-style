#!/usr/bin/env node

import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import { readFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const DOCS_DIR = resolve(__dirname, "../docs");

const DOC_INDEX = {
  "style-guide": "style-guide.md",
  "guide": "style-guide.md",
  "btn": "btn.md",
  "button": "btn.md",
  "card": "card.md",
  "cell": "cell.md",
  "input": "input.md",
  "dialog": "dialog.md",
  "toast": "toast.md",
  "css-vars": "css-vars.md",
  "vars": "css-vars.md",
  "flex": "utils/flex.md",
  "space": "utils/space.md",
  "text": "utils/text.md",
};

function readDoc(filename) {
  try {
    return readFileSync(resolve(DOCS_DIR, filename), "utf-8");
  } catch {
    return `文档不存在: ${filename}`;
  }
}

const server = new McpServer({
  name: "new-core-style",
  version: "1.0.0",
});

// Tool 1: list_styles - 返回总指引
server.tool(
  "list_styles",
  "列出所有可用的 new-core-style 样式文档。返回总指引，包含组件样式、CSS变量、工具类的完整导航。",
  {},
  async () => ({
    content: [{ type: "text", text: readDoc("style-guide.md") }],
  })
);

// Tool 2: get_style_doc - 按主题查询具体文档
server.tool(
  "get_style_doc",
  `根据主题名获取 new-core-style 样式文档。
可用主题:
- style-guide / guide: 样式总指引
- btn / button: Button 按钮样式
- card: Card 卡片样式
- cell: Cell 单元格样式
- input: Input 输入框样式
- dialog: Dialog 对话框样式
- toast: Toast 轻提示样式
- css-vars / vars: CSS 变量参考
- flex: Flex 布局工具类
- space: 间距工具类
- text: 文本工具类`,
  { topic: z.string().describe("主题名，如 btn, flex, css-vars") },
  async ({ topic }) => {
    const key = topic.trim().toLowerCase();
    const filename = DOC_INDEX[key];
    if (!filename) {
      const available = [...new Set(Object.keys(DOC_INDEX))].sort().join(", ");
      return {
        content: [{
          type: "text",
          text: `未知主题 '${topic}'。可用主题: ${available}`,
        }],
      };
    }
    return { content: [{ type: "text", text: readDoc(filename) }] };
  }
);

// Start server
async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("new-core-style MCP Server running on stdio");
}

main().catch((error) => {
  console.error("Fatal error:", error);
  process.exit(1);
});
