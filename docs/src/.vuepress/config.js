const { description } = require('../../package')

module.exports = {
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
    ['meta', { name: 'theme-color', content: '#F24E1E' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon.ico"}],
  ],

    locales: {
    "/en/": {
      lang: "en-US",// this will be set as the lang attribute on <html>
      title: "Figma for everyone",
      description: "Figma training docs"
    },

    "/fr/": {
      lang: "fr-FR",
      title: "Figma pour tous",
      description: "Support de formation Figma"
    }
    },
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
    search: true,
    searchMaxSuggestions: 10,
    sidebarDepth: 0,
    sidebar: {
      '/en': [
        {
          title: 'Introduction',
          collapsable: true,
          children: [
            '/en/introduction/program',
            '/en/introduction/trainers',
            '/en/introduction/why',
            '/en/introduction/pricings',
            '/en/introduction/shortcuts',
            '/en/introduction/download',
          ]
        },
        {
          title: "Basics",
          collapsable: true,
          children: [
            '/en/basics/interface',
            {
              title: 'Interface Elements',
              collapsable: true,
              children: [
                '/en/basics/ui-elements/texts',
                '/en/basics/ui-elements/forms',
                '/en/basics/ui-elements/groups',
                '/en/basics/ui-elements/frames',
                '/en/basics/ui-elements/properties',
                '/en/basics/ui-elements/images',
                '/en/basics/ui-elements/icons'
              ]
            },
            '/en/basics/positioning'
          ]
        },
        {
          title: 'Advanced Features',
          collapsable: true,
          children: [
            '/en/advanced-features/styles-et-variables',
            '/en/advanced-features/component',
            {
              title: 'Autolayout',
              collapsable: true,
              children: [
                '/en/advanced-features/autolayout/definition',
                '/en/advanced-features/autolayout/layout-flow',
                '/en/advanced-features/autolayout/spacing',
                '/en/advanced-features/autolayout/alignment',
                '/en/advanced-features/autolayout/resizing',
                '/en/advanced-features/autolayout/exercice'
              ]
            },
            '/en/advanced-features/prototype',
            '/en/advanced-features/plugins'
          ]
        },
        {
          title: 'Exercise',
          collapsable: true,
          children: [
            '/en/exercice/app-1',
            '/en/exercice/app-2',
            '/en/exercice/app-3',
            '/en/exercice/app-4',
            '/en/exercice/app-5',
          ]
        }
      ],
      '/fr': [
              {
                title: 'Introduction',
                collapsable: true,
                children: [
                  '/fr/introduction/program',
                  '/fr/introduction/trainers',
                  '/fr/introduction/why',
                  '/fr/introduction/pricings',
                  '/fr/introduction/shortcuts',
                  '/fr/introduction/download',
                ]
              },
              {
                title: "Les bases",
                collapsable: true,
                children: [
                  '/fr/basics/interface',
                  {
                    title: 'Éléments d\'interface',
                    collapsable: true,
                    children: [
                      '/fr/basics/ui-elements/texts',
                      '/fr/basics/ui-elements/forms',
                      '/fr/basics/ui-elements/groups',
                      '/fr/basics/ui-elements/frames',
                      '/fr/basics/ui-elements/properties',
                      '/fr/basics/ui-elements/images',
                      '/fr/basics/ui-elements/icons'
                    ]
                  },
                  '/fr/basics/positioning'
                ]
              },
              {
                title: 'Fonctionnalités avancées',
                collapsable: true,
                children: [
                  '/fr/advanced-features/styles-et-variables',
                  '/fr/advanced-features/component',
                  {
                    title: 'Autolayout',
                    collapsable: true,
                    children: [
                      '/fr/advanced-features/autolayout/definition',
                      '/fr/advanced-features/autolayout/layout-flow',
                      '/fr/advanced-features/autolayout/spacing',
                      '/fr/advanced-features/autolayout/alignment',
                      '/fr/advanced-features/autolayout/resizing',
                      '/fr/advanced-features/autolayout/exercice'
                    ]
                  },
                  '/fr/advanced-features/prototype',
                  '/fr/advanced-features/plugins'
                ]
              },
              {
                title: 'Exercice',
                collapsable: true,
                children: [
                  '/fr/exercice/app-1',
                  '/fr/exercice/app-2',
                  '/fr/exercice/app-3',
                  '/fr/exercice/app-4',
                  '/fr/exercice/app-5',
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
