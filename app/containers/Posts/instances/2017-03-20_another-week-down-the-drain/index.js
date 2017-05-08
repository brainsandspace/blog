/*
 *
 * Hrmph
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

import postInstances from '../../postInstances';

export class Hrmph extends React.Component {

  componentDidMount() {
    document.designMode = 'on';
  }

  componentWillUnmount() {
    document.designMode = 'off';
  }
  
  render() {
    return (
      <Post>

        <Helmet
          title="Hrmph"
          meta={[{ name: 'description', content: 'Description of Hrmph' }]}
        />

        <PostHeading>
          <PostTitle>Hrmph</PostTitle>
          <PostDate>
            {postInstances
              .get('Hrmph')
              .dates.map(date => <span key={date}>{date.toDateString()}</span>)}
          </PostDate>
        </PostHeading>
        <div className="post-body">

        <PostP>
          Why is this centered?
        </PostP>

        <PostP>
          It shouldn't be centered.
        </PostP>

        <PostP>
          Oh it isn't actually centered. It is in a containing element that is centered, whose width is not predefined.
        </PostP>

        <PostP>
          <code>document.designMode</code>
          {' '}
          is on, so you can go ahead and delete everything except the first couple paragraphs and see what I was referring to.
        </PostP>

        <PostP>
          I am fed up with how hard I have been working on this project for work. Two Fridays ago, I semi-quit my job. I offered to stay on and finish the project I was working on, up through a certain predefined scope, since I didn't want to leave the company hanging too bad, but I wasn't expecting to have to work on it as much as I have been. I don't know why I feel like I need to vent though. It is definitely getting better. I have just about written enough abstract classes that the future work on the project should be relatively smooth.
        </PostP>

        <PostP>
          For my company, this project has been a nightmare. They started working on it somewhere between 2 and 4 years ago, and it has just gone on and on. I came in about 9 months ago, worked on it underneath another developer and handled a specific component, without looking at the general architecture really at all. (I was very junior at the time.) I could tell that the codebase was out of control, and I urged the lead developer to take a second and refactor some things to make our lives easier, but she never felt like putting in the small amount of time that would save us days or weeks down the road.
        </PostP>

        <PostP>
          We stopped working on the project after a "BETA" release to our client in September. The lead developer quit some time in August. During her last couple weeks, I asked her a number of times if she could write some basic documentation that just generalizes the approach and design of the project, and she kept saying <i>oh yeah yeah I will</i>. She was totally checked out and never did.
        </PostP>

        <PostP>
          At the same time, my boss, our company's lead developer and tech director was also checked out. He was thinking about leaving/moving away and finding somewhere else to work. There's some amount of blame to be put on him for never reviewing the project lead's code. He knew someone should be making sure things are being done in a reasonable way, and he just didn't care. Now, months later, I am in charge of the project, and the only person who is paying for the debt brought about is me. That is not right, and I don't know what else can be done. Is it not rude and irresponsible of my predecessors to leave a project in such disarray?
        </PostP>

        <PostP>
          What complicates the matter even more is that the people at my company who I now am reporting to don't have a clue what the difference between HTML, CSS, and JavaScript are. They don't know what a canvas element is. The should know more if they want to be successful in the industry we are in. It can't all come down to me. I, of course, take pride in my work, and am not willing to produce poor quality work because others' around me, but I can't put all my time into fixing other people's mistakes, laziness, and just general shitty work. It has been very frustrating. Hrmph.
        </PostP>
        
        </div>
      </Post>
    );
  }
}

Hrmph.propTypes = {};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(Hrmph);
