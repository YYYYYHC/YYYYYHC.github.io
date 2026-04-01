import { defineConfig } from 'vitepress'
import { readdirSync, statSync } from 'fs'
import { join } from 'path'

// 自动生成博客侧边栏
function getBlogSidebar(dir: string) {
  const items: any[] = []
  const files = readdirSync(dir)
  
  files.forEach(file => {
    const fullPath = join(dir, file)
    const stat = statSync(fullPath)
    
    if (stat.isDirectory()) {
      // 递归处理子目录
      const subItems = getBlogSidebar(fullPath)
      if (subItems.length > 0) {
        items.push({
          text: file,
          collapsed: false,
          items: subItems
        })
      }
    } else if (file.endsWith('.md') && file !== 'index.md') {
      // 添加 markdown 文件
      const name = file.replace('.md', '')
      const relativePath = fullPath.replace(process.cwd() + '/docs', '').replace('.md', '')
      items.push({
        text: name,
        link: relativePath
      })
    }
  })
  
  return items
}

export default defineConfig({
  title: "YYYYYHC",
  description: "Personal Website & Blog",
  base: '/',
  
  themeConfig: {
    logo: '/avatar.jpg',

    nav: [
      { text: 'Home', link: '/' }
    ],

    sidebar: {},

    socialLinks: [
      { icon: 'github', link: 'https://github.com/YYYYYHC' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2025-present Haocheng Yuan'
    }
  },

  // 简约冷淡风格的自定义样式
  head: [
    ['style', {}, `
      :root {
        --vp-c-brand-1: #646cff;
        --vp-c-brand-2: #747bff;
      }
    `]
  ]
})
