/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');
const Components = require(`${process.cwd()}/core/Components.js`);
const Block = Components.Block;

const Background = (props) => {
  const { config: siteConfig } = props;
  const { baseUrl } = siteConfig;
  return (
    <div className="mainWrapper">

      <Block small className="stripe-bottom bg-black-grey">
        <Block.Container style={{justifyContent: "flex-start"}}>
          <Block.TextBox>
            <Block.Title>Create a microservice</Block.Title>
            <Block.Paragraph>You’re a Spotify engineer about to build a new microservice (or any component) using Spring Boot. Where do you start? Search for a quick start guide online? Create an empty repo on GitHub? Copy and paste an old project? Nope. Just go to Backstage, and you’ll be up and running in two minutes — with a “Hello World” app, CI, and documentation all automatically set up and configured in a standardized way.</Block.Paragraph>

            <Block.LinkButton href={"https://www.youtube.com/watch?v=U1iwe3L5pzc"}>Request a live demo</Block.LinkButton>
          </Block.TextBox>
          <Block.TextBox>
            <iframe width="800" height="500" src="https://www.youtube.com/embed/U1iwe3L5pzc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </Block.TextBox>
        </Block.Container>
      </Block>

      <Block className="stripe bg-black">
      <Block.Container style={{justifyContent: "flex-start"}}>
        <Block.TextBox>
          <Block.Title>Manage data pipelines</Block.Title>
          <Block.Paragraph>We manage a lot of data pipelines (also known as workflows) here at Spotify. So, of course, we made a great workflows plugin for our version of Backstage. All our workflow tools — including a scheduler, log inspector, data lineage graph, and configurable alerts — are integrated into one simple interface.</Block.Paragraph>
          <Block.LinkButton href={"https://www.youtube.com/watch?v=rH46MLNZIPM "}>Request a live demo</Block.LinkButton>
        </Block.TextBox>
        <Block.TextBox>
          <iframe width="800" height="500" src="https://www.youtube.com/embed/rH46MLNZIPM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </Block.TextBox>
      </Block.Container>
      </Block>
    </div>
  );
}

module.exports = Background;
