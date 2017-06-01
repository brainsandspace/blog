/*
 * WhoaPost!
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';

import Post from 'components/Post';
import PostHeading from 'components/PostHeading';
import PostTitle from 'components/PostTitle';
import PostDate from 'components/PostDate';
import Chunk from 'components/Chunk';

const WhoaPost = ({ attributes, content }) => {

  console.log('in post container', attributes)
  // debugger;

  return (
    <Post>

      <Helmet
        title={attributes.title}
        meta={[
          {
            name: 'description',
            content: 'Description of TODO this better',
          },
        ]}
      />

      <PostHeading>
        <PostTitle>{attributes.title}</PostTitle>
        <PostDate>{attributes.date}</PostDate>
      </PostHeading>

      <div className="post-body">

        <Chunk type={content.type}>{content.children}</Chunk>

      </div>

    </Post>
  );
};

WhoaPost.propTypes = {
  attributes: PropTypes.shape({
    title: PropTypes.string.isRequired,
    date: PropTypes.string,
  }).isRequired,
  content: PropTypes.object.isRequired,
};

export default WhoaPost;
