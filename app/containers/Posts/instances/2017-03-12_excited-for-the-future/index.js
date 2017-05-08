/*
 *
 * Blogging CLI Tool?
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';

/** TODO FEATURE hard 
 * The TODO feature thing I have been talking about for ages.
 * Here's a new idea for it though. 
 * It could automagically create a JIRA (or other software) ticket with labels, description, symlinks, etc.
 * It could link itself to it so when you edit one you edit the other.
*/

/** 
 * TODO REFACTOR easy 
 * Extract these Post components into their own file and then import them all like `import * as Post from 'PostComponents'`.
 * 
 * 
*/
import Post from 'components/Post';
import PostP from 'components/PostP';
import PostHeading from 'components/PostHeading';
import PostTitle from 'components/PostTitle';
import PostDate from 'components/PostDate';
import Thought from 'components/Thought';
import errorImage from 'images/error-image.png';

import postInstances from '../../postInstances';


export class BloggingCliTool extends React.Component {
  render() {
    return (
      <Post>

        <Helmet
          title="Blogging Cli Tool"
          meta={[
            {
              name: 'description',
              content: 'Description of Blogging CLI Tool?',
            },
          ]}
        />

        <PostHeading>
          <PostTitle>Blogging CLI Tool?</PostTitle>
          <PostDate>
            {postInstances
              .get('Blogging CLI Tool?')
              .dates.map(date => <span key={date}>{date.toDateString()}</span>)}
          </PostDate>
        </PostHeading>

        <PostP>
          Is that what we're building?{' '}
        </PostP>

        <h3>Who are we but me?</h3>

        <PostP>
          There's all these problems I'm running into and I know how to go about fixing them, I just haven't had the time. And I know I need to do them because they are slowing me down. I can feel them holding me back.
        </PostP>

        <PostP>
          For example, I need to implement some unit and integration testing. Right now this is what I see in my browser.
        </PostP>

        <img src={errorImage} alt="a red error" />

        <PostP>
          Like I can't even test if that error-image screenshot worked right now because of the error blocking my way.
        </PostP>

        <PostP>
          Just minutes ago I was brimming with ideas. And now I can remember none of them.
        </PostP>

        <h3>
          Do I want this kind of thing to be public? And if so, how public?
        </h3>

        <PostP>
          Okay and we're back. Maybe one way I could try to show what just happened would be a screen recording. So I could for example jump to a quick screen recording if I know something convoluted is going on.
        </PostP>

        <PostP>
          Idea for jawn. Wire. Wearing a wire. Always. Only to record your own voice. And then be able to analyze your vocabulary, syntax, tonality, all—the good stuff.
        </PostP>

        <h2>Ah the irony.</h2>

        <PostP>Up the apple tree.</PostP>
        <PostP>Oh the tyranny.</PostP>

        <h2>Have I talked about <i>annotations</i> on here before?</h2>
        <PostP>I don't think that I have.</PostP>

        <PostP>
          There's basically this new spec that aims to bring a standardized annotation layer to the web. I'm pretty excited about it. I want to build my own to see what kind of challenges are going to arise.
        </PostP>

        Here's some thoughts I've had so far.
        <ul style={{ listStyle: 'disc', paddingLeft: '20px' }}>
          <li>
            Annotations should be tied to nodes.
          </li>

          <li>Tablet and stylus support for beauty.</li>

          <li>
            Graph data structure. Maybe. Yes probably definitely fo the social aspects.
          </li>
          <PostP>
            <Thought>
              It has been a while since I have reminisced about overhead projectors.
            </Thought>
            {' '}
            Imagine you have all these different slides.
            <Thought>
              The difference between
              {' '}
              <i>gource</i>
              {' '}
              and
              {' '}
              <i>roz</i>
              {' '}
              is the scale. Gource tracks commits, not every time you touch a file in between commits.
            </Thought>
            {' '}
            I should go to sleep. GODDAMMIT CIRCADIA!
          </PostP>
        </ul>

        <h2>This thing could be a study in building itself.</h2>
        <h1>Tomorrow I must come back.</h1>
      </Post>
    );
  }
}

BloggingCliTool.propTypes = {};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(BloggingCliTool);
