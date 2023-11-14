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
            '/figma/introduction/shortcuts',
            '/figma/introduction/download',
          ]
        },
        {
          title: "Les bases",
          collapsable: true,
          children: [
            '/figma/basics/interface',
            {
              title: 'Éléments d\'interface',
              collapsable: true,
              children: [
                '/figma/basics/ui-elements/texts',
                '/figma/basics/ui-elements/forms',
                '/figma/basics/ui-elements/groups',
                '/figma/basics/ui-elements/frames',
                '/figma/basics/ui-elements/properties',
                '/figma/basics/ui-elements/images',
                '/figma/basics/ui-elements/icons'
              ]
            },
            '/figma/basics/positioning'
          ]
        },
        {
          title: 'Fonctionnalités avancées',
          collapsable: true,
          children: [
            '/figma/advanced-features/style',
            '/figma/advanced-features/variable',
            '/figma/advanced-features/component',
            {
              title: 'Autolayout',
              collapsable: true,
              children: [
                '/figma/advanced-features/autolayout/definition',
                '/figma/advanced-features/autolayout/layout-flow',
                '/figma/advanced-features/autolayout/spacing',
                '/figma/advanced-features/autolayout/alignment',
                '/figma/advanced-features/autolayout/resizing',
                '/figma/advanced-features/autolayout/exercice'
              ]
            },
            '/figma/advanced-features/prototype',
            '/figma/advanced-features/plugins'
          ]
        },
        {
          title: 'Exercice',
          collapsable: true,
          children: [
            '/figma/exercice/app-1',
            '/figma/exercice/app-2',
            '/figma/exercice/app-3',
            '/figma/exercice/app-4',
            '/figma/exercice/app-5',
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
