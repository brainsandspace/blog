/*
 *
 * Not Yet
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

const notYet = () => { 
    return (

      <Post>

        <Helmet
          title="Not Yet"
          meta={[
            { name: 'description', content: 'Description of Not Yet' },
          ]}
        />

        <PostHeading>
          <PostTitle>Not Yet</PostTitle>
          <PostDate>{postInstances.get('Not Yet').dates.map((date) => <span key={date}>{date.toDateString()}</span>)}</PostDate>
        </PostHeading>

        <div className="post-body">

          <Chunk type={content.type}>{content.children}</Chunk>
        
        </div>

      </Post>
    );
}

notYet.propTypes = {};

export default notYet;
