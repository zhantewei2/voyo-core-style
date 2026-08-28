# 间距工具类

基于基准间距（默认 5px）生成的 Margin 和 Padding 工具类。

## 使用规则

类名格式：`.{属性}{方向}-{倍数}`
- **属性**: `m` (margin), `p` (padding)
- **方向**: 留空 (四边), `t` (上), `b` (下), `l` (左), `r` (右), `x` (水平), `y` (垂直)
- **倍数**: 1-5

## 示例

```html
<!-- 四周 margin: 5px -->
<div class="m-1">...</div>

<!-- 上下 padding: 10px -->
<div class="py-2">...</div>

<!-- 右边 margin: 15px -->
<div class="mr-3">...</div>

<!-- 四周 padding: 25px -->
<div class="p-5">...</div>
```

## 间距对照表

| 倍数 | 实际大小 |
|---|---|
| 1 | 5px |
| 2 | 10px |
| 3 | 15px |
| 4 | 20px |
| 5 | 25px |
