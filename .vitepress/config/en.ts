import { createRequire } from 'module'
import { defineConfig, type DefaultTheme } from 'vitepress'

const require = createRequire(import.meta.url)

export const en = defineConfig({
  lang: 'en-US',
  description:
    'CubyFun products are the perfect mixture of art, entertainment, and technology that will inspire creative souls to build a better world.',

  themeConfig: {
    nav: nav(),

    sidebar: sidebar(),

    editLink: {
      pattern: 'https://github.com/cuby-team/cubyfun-docs/tree/main/:path',
      text: 'Edit this page on GitHub'
    },

    footer: {
      // message: 'Released under the MIT License.',
      copyright: `Copyright ©${new Date().getFullYear()} Cubyfun Technology Co., Ltd`
    }
  }
})

function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: 'Guide',
      link: '/easyplay/video_tutorial',
      activeMatch: '/'
    }
  ]
}

function sidebar() {
  return {
    '/': {
      base: '/',
      items: [
        {
          text: 'EasyPlay',
          collapsed: false,
          base: '/easyplay',
          items: [
            { text: 'video_tutorial', link: '/video_tutorial' },
            { text: 'ep1s_manual', link: '/manual' },
            { text: 'other_tutorial', link: '/other_tutorial' },
            { text: 'ep-faq', link: '/faq' }
          ]
        },
        {
          text: 'Pocket2048',
          collapsed: false,
          base: '/pocket2048',
          items: [{ text: 'instructions', link: '/instructions' }]
        },
        {
          text: 'JOYO',
          collapsed: false,
          base: '/joyo',
          items: [{ text: 'instructions', link: '/instructions' }]
        }
      ]
    }
  }
}
