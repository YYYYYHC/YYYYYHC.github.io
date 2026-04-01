# Personal Site

基于 VitePress 构建的个人主页和博客。

## 功能特点

- 🎨 简约冷淡风格设计
- 📝 Markdown 自动转换为网页
- 📁 文件夹结构自动映射为博客分类
- 🚀 一键部署到 GitHub Pages
- 📱 响应式设计，支持移动端

## 快速开始

### 安装依赖

```bash
npm install
```

### 本地开发

```bash
npm run dev
```

访问 http://localhost:5173 查看效果

### 构建生产版本

```bash
npm run build
```

### 预览生产版本

```bash
npm run preview
```

## 目录结构

```
personal-site/
├── docs/
│   ├── .vitepress/
│   │   ├── config.mts        # 配置文件
│   │   └── theme/
│   │       ├── index.ts       # 主题入口
│   │       └── custom.css     # 自定义样式
│   ├── index.md               # 主页
│   ├── blog/                  # 博客目录
│   │   ├── index.md
│   │   ├── 技术分享/          # 分类文件夹
│   │   └── 生活随笔/          # 分类文件夹
│   └── public/                # 静态资源
│       └── (你的图片文件)
└── package.json
```

## 如何使用

### 1. 修改个人信息

编辑 `docs/index.md` 文件，修改：
- 个人照片（支持网络图片或本地图片）
- 个人介绍
- Publications 列表

### 2. 添加博客文章

在 `docs/blog/` 目录下：
1. 创建分类文件夹（例如：`技术分享`、`生活随笔`）
2. 在文件夹中添加 `.md` 文件
3. 文件夹结构会自动映射为侧边栏导航

示例：
```
docs/blog/
├── 技术分享/
│   ├── vue-tutorial.md
│   └── react-hooks.md
└── 生活随笔/
    └── 2025-thoughts.md
```

### 3. 添加图片

#### 方式 1: 使用网络图片（推荐用于示例）
直接在 Markdown 中使用完整的 URL：
```markdown
![描述](https://example.com/image.jpg)
```

#### 方式 2: 使用本地图片
1. 将图片放到 `docs/public/` 目录下
2. 在 Markdown 中使用绝对路径引用：
```markdown
![描述](/my-image.jpg)
![描述](/subfolder/image.jpg)
```

**注意：** 不要使用 `./` 或 `../` 相对路径，VitePress 需要使用 `/` 开头的绝对路径。

示例目录结构：
```
docs/public/
├── profile.jpg           → 引用: ![](/profile.jpg)
├── publications/
│   └── paper1.jpg        → 引用: ![](/publications/paper1.jpg)
└── blog-images/
    └── photo.jpg         → 引用: ![](/blog-images/photo.jpg)
```

### 4. 部署到 GitHub Pages

1. 在 GitHub 创建一个新仓库（例如：`personal-site`）

2. 修改 `docs/.vitepress/config.mts` 中的 `base` 配置：
   ```ts
   base: '/personal-site/', // 改成你的仓库名
   ```

3. 修改 `deploy.sh` 文件中的部署命令：
   ```sh
   git push -f git@github.com:yourusername/personal-site.git main:gh-pages
   ```

4. 运行部署命令：
   ```bash
   chmod +x deploy.sh
   npm run deploy
   ```

5. 在 GitHub 仓库设置中，启用 GitHub Pages，选择 `gh-pages` 分支

6. 访问 `https://yourusername.github.io/personal-site/`

## 自定义样式

编辑 `docs/.vitepress/theme/custom.css` 来修改样式。

## 配置说明

主要配置在 `docs/.vitepress/config.mts`：
- `title`: 网站标题
- `description`: 网站描述
- `base`: 部署的基础路径
- `themeConfig`: 主题配置（导航、侧边栏等）

## 常见问题

### Q: 图片显示不出来？
A: 确保：
1. 网络图片使用完整 URL
2. 本地图片放在 `docs/public/` 目录
3. 使用 `/` 开头的绝对路径，不要用相对路径

### Q: 如何添加新的博客分类？
A: 直接在 `docs/blog/` 下创建新文件夹即可，会自动出现在侧边栏。

### Q: 如何修改网站标题和导航？
A: 编辑 `docs/.vitepress/config.mts` 文件。

## License

MIT
