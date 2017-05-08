/*
 *
 * Write Something
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

const writeSomething = () => { 
    return (

      <Post>

        <Helmet
          title="Write Something"
          meta={[
            { name: 'description', content: 'Description of Write Something' },
          ]}
        />

        <PostHeading>
          <PostTitle>Write Something</PostTitle>
          <PostDate>{postInstances.get('Write Something').dates.map((date) => <span key={date}>{date.toDateString()}</span>)}</PostDate>
        </PostHeading>

        <div className="post-body">

          <Chunk type={content.type}>{content.children}</Chunk>
        
        </div>

      </Post>
    );
}

writeSomething.propTypes = {};

export default writeSomething;
