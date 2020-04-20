/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const siteConfig = {
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        theme: {
          customCss: require.resolve('./static/css/custom.css'),
        },
      },
    ],
  ],
  themeConfig: {
    navbar: {
      title: 'Backstage',
      tagline: "An open platform for building developer portals",
      target: '_self',
      links: [
        { to: "https://github.com/spotify/backstage", label: "GitHub" },
        { to: "blog", blog: true, label: "Blog" },
        { to: "demos", label: "Demos" },
        { to: "background", label: "The Spotify story" },
        { to: "https://forms.gle/diN2zFYW7YbP17gE7", label: "Request live demo" },
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

  url: "https://backstage.io", // Your website URL
  baseUrl: "/", // Base URL for your project */

  // Used for publishing and more
  projectName: "backstage",
  organizationName: "Spotify",
  fossWebsite: "https://spotify.github.io/",
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'


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
  repoUrl: "https://github.com/spotify/backstage",
  twitterUsername: "SpotifyEng",

  stylesheets: [
    "https://fonts.googleapis.com/css?family=IBM+Plex+Mono:500,700&display=swap"
  ]
};

module.exports = siteConfig;
