import React from "react";

import Post from "components/Post";
import PostP from "components/PostP";
import PostHeading from "components/PostHeading";
import PostTitle from "components/PostTitle";
import PostDate from "components/PostDate";

import styled from "styled-components";

import postInstances from '../../postInstances.js';

const StyledPost = styled.div`
li {
  list-style: disc;
  margin-left: 20px;
}
`;

class RandomThoughts extends React.Component {
  render() {
    return (
      <StyledPost>
        <Post>
          <PostHeading>
          <PostTitle>The Post Title Goes Here</PostTitle>
          <PostDate>{postInstances.get('Blogging CLI Tool?').dates.map((date) => <span key={date}>{date.toDateString()}</span>)}
          </PostDate>
        </PostHeading>
          <PostP>
            I do like this setup of working on my laptop with VS Code open on the right and a browser on the left. Terminal down below. Console below the browser.
          </PostP>

          <h3>
            Why does it take so much longer to refresh the browser on this machine compared to my PC? If I look at the timeline on my laptop, I see that the majority of the time was spent fetching React DLLs. Hmm.
            {" "}
          </h3>

          <PostP>
            It's almost scary to think how little I knew about my profession only a year ago.
          </PostP>

          <PostP>
            I think I ought to strive to make things work on mobile by default. A lot of viewing is done on mobile. That means I need to be
            {" "}
            <i>fast.</i>
          </PostP>

          <h1 style={{ textAlign: "center" }}>Fast First</h1>

          <PostP>
            I've been thinking about font-families. Should I use the user-agent choices for serif, sans-serif, monospace, etc? I guess I really just ought to lazy-load fonts of my choice. Let's say I want my body font-family to be Ubuntu. If I add a link to its Google Fonts resouce will.
          </PostP>

          <ul>
            Here's some ideas for normatives.
            <li>Questions posed in the post. (regex question marks)</li>

            One thing this will enforce is only using dots to mark sentence breaks. Or maybe capitalization.
          </ul>

          <PostP>
            It would be pretty cool to hook this whole thing up to its git repository. Fetch components from commit dates.
            I bet it would be easy to break things. Although it kind of always is.
          </PostP>

          <h1 style={{ textAlign: "right" }}>
            It's always easy to break things.
          </h1>
        </Post>
      </StyledPost>
    );
  }
}

export default RandomThoughts;
