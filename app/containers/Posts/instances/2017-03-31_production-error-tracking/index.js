/*
 *
 * A Better Night&#x27;s Sleep
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';

import Post from 'components/Post';
import PostP from 'components/PostP';
import PostHeading from 'components/PostHeading';
import PostTitle from 'components/PostTitle';
import PostDate from 'components/PostDate';
import Revise from 'components/Revise';
import Thought from 'components/Thought';

import postInstances from '../../postInstances';

export class ABetterNightSSleep extends React.Component {
  render() {
    return (
      <Post>

        <Helmet
          title="A Better Night's Sleep"
          meta={[
            {
              name: 'description',
              content: "Description of A Better Night's Sleep'",
            },
          ]}
        />

        <PostHeading>
          <PostTitle>A Better Night's Sleep</PostTitle>
          <PostDate>
            {postInstances
              .get("A Better Night's Sleep")
              .dates.map(date => <span key={date}>{date.toDateString()}</span>)}
          </PostDate>
        </PostHeading>

        <div className="post-body">

          <PostP>
            If you're anything like me...something something something about the anxiety that comes with shipping or releasing a product that only you may have really worked on.
            {' '}
            <Revise>
              With error tracking, I know (almost) as soon as it happens.
            </Revise>
          </PostP>

          <PostP>
            Looking at this file right now. I am struggling to see the actual content.
          </PostP>

          <PostP>
            I found a good resource today. debuggexer. I think that's what it's called.
          </PostP>

          <PostP>
            I spent most of today learning about abstract syntax trees. Man learning can be hard. Most of the time I is just me looking and exploring some demonstrations thinking what the fuck am I looking at. Learning is such a cool thing though. Just looking and reading is really all I need to do. I can just sit back and not think that hard and slowly I'll understand it. Ok maybe I have to think hard for a bit. But the brain is fucking genius.
          </PostP>

          <h2>
            How the fuck do babies learn everything? It's goddamn unbelievable.
          </h2>

          <PostP>
            Learning how to communicate again would not be easy.
          </PostP>

          <PostP>
            The human life is such an incredible journey. You come in to it from out of nowhere. You don't exist and then you do. And you find yourself in this world. This amazing world. It's like something out of a dream.
          </PostP>

          <Thought>
            Sometimes I get just so excited about being alive.
          </Thought>

          <p>
            # This is how I would like to type.
          </p>
          <p>
            *In Markdown I mean.* And I would like to add things like ... and (?) to have indicate certain components should be used. And the end product has got to be animated and traversable. Through time.
          </p>

        </div>

      </Post>
    );
  }
}

ABetterNightSSleep.propTypes = {};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(ABetterNightSSleep);
