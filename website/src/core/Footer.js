/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from "react";
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

const Footer = () => {
  const {siteConfig = {}} = useDocusaurusContext();
  const {baseUrl, organizationName} = siteConfig;
  const {repoUrl, fossWebsite, twitterUsername} = siteConfig.customFields;
  const {copyright} = siteConfig.themeConfig.footer;

  return (
    <footer className="nav-footer" id="footer">
      <section className="sitemap">
        <div className="footer-title">
          <a href={baseUrl}>
            <h2 className="footerLogo"></h2>
          </a>
        </div>
        <div>
          <h5>Docs</h5>
          <a
            href={`${repoUrl}/blob/master/docs/getting-started/create-a-plugin.md`}
          >
            Create a Plugin
          </a>
          <a
            href={`${repoUrl}/blob/master/docs/getting-started/structure-of-a-plugin.md`}
          >
            Structure of a Plugin
          </a>
          <a
            href={`${repoUrl}/blob/master/docs/reference/README.md`}
          >
            API references
          </a>
          <a
            href={`${repoUrl}/blob/master/docs/FAQ.md`}
          >
            FAQ
          </a>
        </div>
        <div>
          <h5>Community</h5>
          <a href="https://discord.gg/MUpMjP2">#general on Discord</a>
          <a href="https://discord.gg/dKhwsBp">#support on Discord</a>
          <a href='https://forms.gle/diN2zFYW7YbP17gE7'>Request a live demo</a>
        </div>
        <div>
          <h5>More</h5>
          <a href={fossWebsite}>
            Open Source @ {organizationName}
          </a>
          <a href={repoUrl}>GitHub</a>
          <a
            className="github-button"
            href={repoUrl}
            data-icon="octicon-star"
            data-count-href="/spotify/backstage/stargazers"
            data-show-count="true"
            data-count-aria-label="# stargazers on GitHub"
            aria-label="Star this project on GitHub"
          >
            Star
          </a>
          {twitterUsername && (
            <div className="social">
              <a
                href={`https://twitter.com/${twitterUsername}`}
                className="twitter-follow-button"
              >
                Follow @{twitterUsername}
              </a>
            </div>
          )}
        </div>
      </section>

      <a
        href={fossWebsite}
        target="_blank"
        rel="noreferrer noopener"
        className="spotifyOpenSource"
      >
        Made with <span>❤</span> at {organizationName}
      </a>
      <p className="copyright">{copyright}</p>
    </footer>
  );

}

module.exports = Footer;
