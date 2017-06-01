/*
 *
 * You probably should not bother reading this
 *
 */

import React from 'react';
import Helmet from 'react-helmet';

import Post from 'components/Post';
import PostHeading from 'components/PostHeading';
import PostTitle from 'components/PostTitle';
import PostDate from 'components/PostDate';
import Chunk from 'components/Chunk';

import postInstances from '../../postInstances';

import content from './index.whoa';

const youProbablyShouldNotBotherReadingThis = () => { 
    return (

      <Post>

        <Helmet
          title="You Probably Should Not Bother Reading This"
          meta={[
            { name: 'description', content: 'Description of You probably should not bother reading this' },
          ]}
        />

        <PostHeading>
          <PostTitle>You probably should not bother reading this</PostTitle>
          <PostDate>{postInstances.get('You probably should not bother reading this').dates.map((date) => <span key={date}>{date.toDateString()}</span>)}</PostDate>
        </PostHeading>

        <div className="post-body">

          <Chunk type={content.type}>{content.children}</Chunk>
        
        </div>

      </Post>
    );
}

youProbablyShouldNotBotherReadingThis.propTypes = {};

export default youProbablyShouldNotBotherReadingThis;
