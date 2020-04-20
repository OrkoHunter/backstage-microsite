/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const siteConfig = {
  title: 'Backstage',
  tagline: "An open platform for building developer portals",

  url: "https://backstage.io", // Your website URL
  baseUrl: "/", // Base URL for your project */

  // Used for publishing and more
  projectName: "backstage",
  organizationName: "Spotify",

  themeConfig: {
    navbar: {
      title: 'Backstage',
      // target: '_self',
      links: [
        { to: "https://github.com/spotify/backstage", label: "GitHub", position: "right" },
        { to: "blog", blog: true, label: "Blog", position: "right" },
        { to: "demos", label: "Demos", position: "right" },
        { to: "background", label: "The Spotify story", position: "right" },
        { to: "https://forms.gle/diN2zFYW7YbP17gE7", label: "Request live demo", position: "right" },
      ],
    },
    footer: {
      logo: {
        src: "img/android-chrome-192x192.png",
      },
      copyright: `Copyright © ${new Date().getFullYear()} Spotify AB`,
    },
    ogImage: "img/logo-black-248x250.png",
    twitterImage: "img/logo-black-248x250.png",
    googleAnalytics: {
      trackingID: "UA-48912878-10",
    }
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: 'docs',
          editUrl: 'https://github.com/spotify/backstage-microsite',
        },
        pages: {
          path: 'src/pages',
        },
        theme: {
          customCss: require.resolve('./static/css/custom.css'),
        },
      },
    ],
  ],


  /* path to images for header/footer */
  // headerIcon: "img/android-chrome-192x192.png",
  favicon: "img/favicon.ico",

  /* highlight has been removed in Docusaurus v2 - "We now use Prism instead of highlight.js." */
  /* Colors for syntax highlighting */
  // highlight: {
  //   theme: "dark"
  // },

  // highlight: {
  //   // Highlight.js theme to use for syntax highlighting in code blocks.
  //   theme: "monokai"
  // },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: ["https://buttons.github.io/buttons.js"],

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...

  stylesheets: [
    "https://fonts.googleapis.com/css?family=IBM+Plex+Mono:500,700&display=swap"
  ]
};

module.exports = siteConfig;
