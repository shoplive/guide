module.exports = {
  locales: {
    "/": {
      lang: "ko-KR",
      title: "Shoplive Guide",
      description: "Shoplive 연동 가이드",
    },
    "/en": {
      lang: "en-US",
      title: "Shoplive Guide",
      description: "Shoplive Guide",
    },
  },
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: "Shoplive Guide",
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: "Shoplive Guide",

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: `/icons/favicon-32x32.png`,
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: `/icons/favicon-16x16.png`,
      },
    ],
    [
      "link",
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: `/icons/apple-touch-icon.png`,
      },
    ],
    ["link", { rel: "manifest", href: "/manifest.json" }],
    [
      "link",
      {
        rel: "mask-icon",
        href: "/icons/safari-pinned-tab.svg",
        color: "#5bbad5",
      },
    ],
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
    [
      "meta",
      {
        name: "msapplication-TileImage",
        content: "/k8s/icons/mstile-150x150.png",
      },
    ],
    ["meta", { name: "msapplication-TileColor", content: "#000000" }],
  ],

  base: "/guide/",

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: "shoplive/guide",
    editLinks: false,
    docsDir: "",
    editLinkText: "",
    lastUpdated: false,
    locales: {
      "/": {
        label: "한글",
        selectText: "Languages",
        ariaLabel: "Select language",
        editLinkText: "Edit this page on GitHub",
        lastUpdated: "Last Updated",
        nav: [
          {
            text: "개발가이드",
            link: "/guide/",
          },
          {
            text: "데모",
            link: "/demo/",
          },
        ],
        sidebar: {
          "/guide/": [
            {
              title: "개발가이드",
              collapsable: false,
              children: ["", "script", "authorization", "jwt", "error-code"],
            },
          ],
          "/demo/": [
            {
              title: "데모",
              collapsable: false,
              children: ["", "guest", "simple-auth", "jwt-auth"],
            },
          ],
        },
      },
      "/en/": {
        label: "English",
        selectText: "Languages",
        ariaLabel: "Select language",
        editLinkText: "Edit this page on GitHub",
        lastUpdated: "Last Updated",
        nav: [
          {
            text: "Guide",
            link: "/guide/",
          },
          {
            text: "Demo",
            link: "/demo/",
          },
        ],
        sidebar: {
          "/guide/": [
            {
              title: "Guide",
              collapsable: false,
              children: ["", "script", "authorization", "jwt"],
            },
          ],
          "/demo/": [
            {
              title: "데모",
              collapsable: false,
              children: ["", "guest", "simple-auth", "jwt-auth"],
            },
          ],
        },
      },
    },
    yuu: {
      disableThemeIgnore: true,
    },
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: ["@vuepress/plugin-back-to-top", "@vuepress/plugin-medium-zoom"],

  configureWebpack: (config, isServer) => {
    console.log(config); //config.target = "web";
  },
};
