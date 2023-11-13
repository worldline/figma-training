const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Figma training',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#0C9D46' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    logo: '/welcome-image.png',
    docsDir: 'src',
    docsBranch: 'master',
    editLinks: true,
    editLinkText: 'Help us improve this page!',
    lastUpdated: true,
    search: false,
    sidebarDepth: 0,
    nav: [
      { text: 'Accueil', link: '/' },
      { text: 'Figma', link: '/figma/introduction/program' },
    ],
    sidebar: {
      '/figma/': [
        {
          title: 'Introduction',
          collapsable: true,
          children: [
            '/figma/introduction/program',
            '/figma/introduction/trainers',
            '/figma/introduction/why',
            '/figma/introduction/pricings',
            '/figma/introduction/shortcuts'
          ]
        },
        {
          title: 'Partie théorique',
          collapsable: true,
          children: [
            '/figma/theory/download',
            '/figma/theory/interface',
            {
              title: 'Éléments d\'interface',
              collapsable: false,
              children: [
                '/figma/theory/ui-elements/texts',
                '/figma/theory/ui-elements/forms',
                '/figma/theory/ui-elements/groups',
                '/figma/theory/ui-elements/frames',
                '/figma/theory/ui-elements/properties',
                '/figma/theory/ui-elements/images',
                '/figma/theory/ui-elements/icons'
              ]
            },
            '/figma/theory/positioning',
            '/figma/theory/style',
            '/figma/theory/variable',
            '/figma/theory/component',
            {
              title: 'Autolayout',
              collapsable: false,
              children: [
                '/figma/theory/autolayout/definition',
                '/figma/theory/autolayout/layout-flow',
                '/figma/theory/autolayout/spacing',
                '/figma/theory/autolayout/alignment',
                '/figma/theory/autolayout/resizing',
                '/figma/theory/autolayout/exercice'
              ]
            },
            '/figma/theory/prototype',
            '/figma/theory/plugins',
            '/figma/theory/practices'
          ]
        },
        {
          title: 'Partie pratique',
          collapsable: true,
          children: [
            '/figma/tutorial/app-1',
            '/figma/tutorial/app-2',
            '/figma/tutorial/app-3',
            '/figma/tutorial/app-4',
            '/figma/tutorial/app-5',
          ]
        }
      ]
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ],

  /**
   * Deployment，ref：https://v1.vuepress.vuejs.org/guide/deploy.html#gitlab-pages-and-gitlab-ci
   */
  base: '/figma-training/'
}
