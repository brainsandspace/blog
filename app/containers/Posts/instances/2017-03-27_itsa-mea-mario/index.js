/*
 *
 * Broken Pipes
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
import Search from 'components/Search';
import Code from 'components/Code';
import Revise from 'components/Revise';

import postInstances from '../../postInstances';

export class BrokenPipes extends React.Component {
  render() {
    return (
      <Post>

        <Helmet
          title="Broken Pipes"
          meta={[
            { name: 'description', content: 'Description of Broken Pipes' },
          ]}
        />

        <PostHeading>
          <PostTitle>Broken Pipes</PostTitle>
          <PostDate>
            {postInstances
              .get('Broken Pipes')
              .dates.map(date => <span key={date}>{date.toDateString()}</span>)}
          </PostDate>
        </PostHeading>

        <div className="post-body">

          <PostP>
            For a while I have been encountering the following minor annoyance. If I am logged in to a remote server, after a while of idleness, the terminal freezes up. The pipe is breaking. As it should. The problem has been that the terminal is freezing and I then have to close it and open a new instance. Not a
            {' '}
            <i style={{ fontSize: '2rem' }}>huge</i>
            {' '}
            deal. But annoying. Here's the fix.
          </PostP>

          <Code block>~.⏎</Code>

          <PostP>
            <i>Isn't that wonderful?</i> Here's how I found the answer.
          </PostP>

          <Search>broken pipe freezes terminal</Search>

          <PostP>
            And the answer was from this <a
              href="http://apple.stackexchange.com/questions/36690/how-can-i-prevent-an-ssh-session-from-hanging-in-os-x-terminal"
            >
              stack overflow question.
            </a>
          </PostP>

          <PostP>
            <span style={{fontSize: '1.5rem'}}>You really ought to try blogging with components you've made. It's super fun.</span> 
          </PostP>

          <PostP>
            I really like using Trello for all the things.
          </PostP>

          <PostP>
            I've been thinking about this thing that could be entertaining? But probably would be super boring and difficult. Maybe not. It's hard to tell at this point without actually trying to do it. <i>Let's flesh it out a biiit more.</i> I guess there are a bunch of ways parameters that could determine how succesful and funny it might be. <i>Get on with it!</i>
          </PostP>

          <PostP>
            Oh wait here's another idea. Randomly pairing with other people on codepen and collaborating for fun. Does that already exist?'
          </PostP>

          <PostP>
            Okay the idea was about explaining in detail the current state of some modern industry to a person from the past. 200 years past. 50 years past. 20 years past. They could all be super interesting I think.  
          </PostP>

          <PostP>
            I think animations not prompted by a user action make me mad. Sometimes. They can be distracting. They have their place though.
          </PostP>

          <PostP>
            Their is a good amount of this react-boilerplate code I am using that I do not understand. Nor do I need to yet.
          </PostP>

          <PostP>
            A lot of the time when I am writing I will know something is bad but will not want to stop now to fix it since it <Revise>isn't part of the main train</Revise>. That's why I just made a <code>Revise</code> component that highlights stuff I know is bad. Not to say the other stuff is any good.
          </PostP>

          <PostP>
            I would really like to be a writer who codes. What I like so much about written works is they are usually individual endeavors and can express such voice. Movies and television shows are never so intimately tied to 1 person.
          </PostP>

          <PostP>I should fuck what was I about to say.</PostP>

          <i>I think I am pretty happy with the effort put forth these past few days.</i> Things are getting organized. Progress is being made.

        </div>

      </Post>
    );
  }
}

BrokenPipes.propTypes = {};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(BrokenPipes);
