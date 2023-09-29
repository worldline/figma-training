const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Figma makers',
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
      { text: 'Android', link: '/android/getting-started/guidelines/general/' },
      { text: 'Figma', link: '/figma/introduction/program' },
    ],
    sidebar: {
      '/figma/': [
        {
          title: 'Introduction',
          collapsable: true,
          children: [
            '/figma/introduction/program',
            '/figma/introduction/why',
            '/figma/introduction/trainers',
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
              collapsable: true,
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
            '/figma/theory/component',
            '/figma/theory/autolayout',
            '/figma/theory/prototype',
            '/figma/theory/plugin',
            '/figma/theory/organization'
          ]
        },
        {
          title: 'Partie pratique',
          collapsable: true,
          children: [
            '/figma/tutorial/ui-kit',
            '/figma/tutorial/app'
          ]

        }
      ],
      '/android/': [    
        {
          title: 'Getting started',
          collapsable: true,
          children: [
            {
              title: 'Guidelines',
              collapsable: true,
              children: [
                '/android/getting-started/guidelines/general',
                '/android/getting-started/guidelines/functionnal',
                '/android/getting-started/guidelines/technical',
                '/android/getting-started/guidelines/rating',
              ]
            },
            '/android/getting-started/hello-world',
          ]
        },  
        {
          title: 'Test data',
          collapsable: true,
          children: [
            '/android/mock-application/data',
            '/android/mock-application/list',
            '/android/mock-application/details',
          ]
        },
        {
          title: 'Real data',
          collapsable: true,
          children: [
            {
              title: 'Architecture - Theory',
              collapsable: true,
              children: [
                '/android/real-data/intro',
                '/android/real-data/solid',
                '/android/real-data/app-architecture',
                '/android/real-data/view-architecture',
                '/android/real-data/dependency-injection',
              ]
            },
            '/android/real-data/modules',
            '/android/real-data/hilt',
            '/android/real-data/retrofit',
          ]
        },
        {
          title: 'Improve the app',
          collapsable: true,
          children: [
            '/android/improve-the-app/features',
            '/android/improve-the-app/style',
          ]
        },
        {
          title: 'Firebase',
          collapsable: true,
          children: [
            '/android/firebase/setup',
            '/android/firebase/crashlytics-analytics',
            '/android/firebase/delivery',
          ]
        },        
        {
          title: 'Play Console',
          collapsable: true,
          children: [
            '/android/play-console/new-app',
          ]
        },
      ],
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
  base: '/figma-training/',
  dest: 'public'
}
