/*
 *
 * See Slug Slow
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

const seeSlugSlow = () => { 
    return (

      <Post>

        <Helmet
          title="See Slug Slow"
          meta={[
            { name: 'description', content: 'Description of See Slug Slow' },
          ]}
        />

        <PostHeading>
          <PostTitle>See Slug Slow</PostTitle>
          <PostDate>{postInstances.get('See Slug Slow').dates.map((date) => <span key={date}>{date.toDateString()}</span>)}</PostDate>
        </PostHeading>

        <div className="post-body">

          <Chunk type={content.type}>{content.children}</Chunk>
        
        </div>

      </Post>
    );
}

seeSlugSlow.propTypes = {};

export default seeSlugSlow;
