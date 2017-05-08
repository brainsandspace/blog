/*
 *
 * Now
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

import postInstances from '../../postInstances';

export class Now extends React.Component {
  render() {
    return (
      <Post>

        <Helmet
          title="Now"
          meta={[{ name: 'description', content: 'Description of Now' }]}
        />

        <PostHeading>
          <PostTitle>Now</PostTitle>
          <PostDate>
            {postInstances
              .get('Now')
              .dates.map(date => <span key={date}>{date.toDateString()}</span>)}
          </PostDate>
        </PostHeading>

        <div className="post-body">

          <PostP>
            Now.
          </PostP>

          <PostP>
            Now.
          </PostP>

          <PostP>
            It's so cool they use all the other cloud companies. Do other services like now exist?
          </PostP>

          <PostP>
            That's something I am interested in. Services that under the hood are just a collection of all the other great services, wrapped into a user-friendly abstract blanket.
          </PostP>

          <PostP>
            Why are most titles short? Like not complete sentences? Obviously for brevity. So they can be referred to easily.
            <Revise>Stupid stupid stupid!</Revise>
          </PostP>

          <PostP>
            A thing about me is I never stop working. I just start working on something else.
          </PostP>

          <PostP>
            I need to do the best I can on Puppy Club. Am I allowed to talk about things my company is building? Probably not, right?
          </PostP>

          <PostP>
            QA could be kinda fun. Just poking around at someone else's product, plus doing code reviews. You could be amazing at QA.
          </PostP>

          <PostP>
            I should start reading the source code Zeit has released for Now. And Next. And look at Hyper to see how they used redux and <Revise>if I am using it in a similar (right) way. I am sure I could learn a lot from looking at the repositories' histories. How a company operates.</Revise>
          </PostP>

          <PostP>
            I should also look at the platform(?), template(?) the redux and redux-saga websites are built on.
          </PostP>

          <PostP>
            Wow I've really been bouncing around trello boards just now. If only I could show you! I should write a component that pulls my Trello activity feed for a certain time period. A question is, how long does that data exist? Does Trello discard it eventually? .timelapse. Probably not I guess. After looking for a few minutes, I did not find it.
          </PostP>

          <PostP>
            {`<Vain>A problem I have right now is I am too excited about too many ideas.</Vain>`}
          </PostP>

        </div>

      </Post>
    );
  }
}

Now.propTypes = {};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(Now);
