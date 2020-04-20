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
    }
  },
  url: "https://backstage.io", // Your website URL
  cname: "backstage.io",
  baseUrl: "/", // Base URL for your project */
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',

  // Used for publishing and more
  projectName: "backstage",
  organizationName: "Spotify",
  fossWebsite: "https://spotify.github.io/",
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // Google Analytics
  gaTrackingId: "UA-48912878-10",

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    { href: "https://github.com/spotify/backstage", label: "GitHub" },
    { page: "blog", blog: true, label: "Blog" },
    { page: "demos", label: "Demos" },
    { page: "background", label: "The Spotify story" },
    { href: "https://forms.gle/diN2zFYW7YbP17gE7", label: "Request live demo" },
  ],

  /* path to images for header/footer */
  // headerIcon: "img/android-chrome-192x192.png",
  footerIcon: "img/android-chrome-192x192.png",
  favicon: "img/favicon.ico",

  /* Colors for syntax highlighting */
  highlight: {
    theme: "dark"
  },

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} Spotify AB`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: "monokai"
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: ["https://buttons.github.io/buttons.js"],

  // On page navigation for the current documentation page.
  onPageNav: "separate",
  // No .html extensions for paths.
  cleanUrl: true,

  // Open Graph and Twitter card images.
  ogImage: "img/logo-black-248x250.png",
  twitterImage: "img/logo-black-248x250.png",


  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  repoUrl: "https://github.com/spotify/backstage",
  twitterUsername: "SpotifyEng",

  stylesheets: [
    "https://fonts.googleapis.com/css?family=IBM+Plex+Mono:500,700&display=swap"
  ]
};

module.exports = siteConfig;
