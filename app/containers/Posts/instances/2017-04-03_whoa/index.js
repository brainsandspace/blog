/*
 *
 * Whoah?
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

console.log(content);

const whoaPost = () => {
  return (
    <Post>

      <Helmet
        title="Whoah"
        meta={[{ name: 'description', content: 'Description of Whoah?' }]}
      />

      <PostHeading>
        <PostTitle>Whoah?</PostTitle>
        <PostDate>
          {postInstances
            .get('Whoah?')
            .dates.map(date => <span key={date}>{date.toDateString()}</span>)}
        </PostDate>
      </PostHeading>

      <div className="post-body">

        <Chunk type={content.type}>{content.children}</Chunk>

      </div>

    </Post>
  );
};

whoaPost.propTypes = {};

export default whoaPost;
