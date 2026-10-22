import { defineConfig } from 'vitepress'

const base = process.env.VITEPRESS_BASE || '/'

const enNav = [
  { text: 'Guide', link: '/guide/getting-started' },
  { text: 'About', link: '/about' },
  { text: 'Try it', link: 'https://songlh.top/paint-board/' }
]

const zhNav = [
  { text: '使用指南', link: '/zh/guide/getting-started' },
  { text: '关于', link: '/zh/about' },
  { text: '在线体验', link: 'https://songlh.top/paint-board/' }
]

const enSidebar = [
  {
    text: 'Using Paint Board',
    items: [
      { text: 'Getting started', link: '/guide/getting-started' },
      { text: 'Drawing', link: '/guide/drawing' },
      { text: 'Select and edit', link: '/guide/select-and-edit' },
      { text: 'Multiple boards', link: '/guide/boards' },
      { text: 'Board settings', link: '/guide/canvas' },
      { text: 'FAQ', link: '/guide/faq' }
    ]
  },
  {
    text: 'Project',
    items: [
      { text: 'About the project', link: '/about' },
      { text: 'CHANGELOG', link: 'https://github.com/LHRUN/paint-board/blob/main/CHANGELOG.md' }
    ]
  }
]

const zhSidebar = [
  {
    text: '使用 Paint Board',
    items: [
      { text: '快速开始', link: '/zh/guide/getting-started' },
      { text: '绘画', link: '/zh/guide/drawing' },
      { text: '选择与编辑', link: '/zh/guide/select-and-edit' },
      { text: '多画板', link: '/zh/guide/boards' },
      { text: '画板设置', link: '/zh/guide/canvas' },
      { text: '常见问题', link: '/zh/guide/faq' }
    ]
  },
  {
    text: '项目',
    items: [
      { text: '关于项目', link: '/zh/about' },
      { text: 'CHANGELOG', link: 'https://github.com/LHRUN/paint-board/blob/main/CHANGELOG.md' }
    ]
  }
]

export default defineConfig({
  title: 'Paint Board',
  description:
    'An open-source web canvas. Free drawing, shapes, text, and multiple boards, all in the browser.',
  base,
  lang: 'en-US',
  cleanUrls: true,
  lastUpdated: false,
  appearance: true,
  ignoreDeadLinks: [/^https?:\/\/localhost/],
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    [
      'link',
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossorigin: ''
      }
    ],
    [
      'link',
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&display=swap'
      }
    ],
    ['meta', { name: 'theme-color', content: '#248654' }],
    ['meta', { property: 'og:title', content: 'Paint Board' }],
    [
      'meta',
      {
        property: 'og:description',
        content:
          'An open-source web canvas. Free drawing, shapes, text, and multiple boards, all in the browser.'
      }
    ]
  ],
  themeConfig: {
    logo: '/logo.png',
    siteTitle: 'Paint Board',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/LHRUN/paint-board' }
    ],
    search: {
      provider: 'local'
    },
    outline: {
      level: [2, 3]
    }
  },
  locales: {
    root: {
      label: 'English',
      lang: 'en-US',
      title: 'Paint Board',
      description:
        'An open-source web canvas. Free drawing, shapes, text, and multiple boards, all in the browser.',
      themeConfig: {
        nav: enNav,
        sidebar: enSidebar,
        outline: {
          label: 'On this page',
          level: [2, 3]
        },
        docFooter: {
          prev: 'Previous',
          next: 'Next'
        },
        darkModeSwitchLabel: 'Appearance',
        sidebarMenuLabel: 'Menu',
        returnToTopLabel: 'Back to top',
        langMenuLabel: 'Language',
        footer: {
          copyright: 'Copyright © 2022-present'
        }
      }
    },
    zh: {
      label: '简体中文',
      lang: 'zh-CN',
      link: '/zh/',
      title: 'Paint Board',
      description: '开源网页画板。自由绘画、图形、文字，以及多个画板都在浏览器里完成。',
      themeConfig: {
        nav: zhNav,
        sidebar: zhSidebar,
        outline: {
          label: '本页目录',
          level: [2, 3]
        },
        docFooter: {
          prev: '上一页',
          next: '下一页'
        },
        darkModeSwitchLabel: '外观',
        sidebarMenuLabel: '菜单',
        returnToTopLabel: '回到顶部',
        langMenuLabel: '语言',
        footer: {
          copyright: 'Copyright © 2022-present'
        }
      }
    }
  }
})
