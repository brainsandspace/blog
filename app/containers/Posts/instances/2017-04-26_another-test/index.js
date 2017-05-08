/*
 *
 * Yet Another Test
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

const yetAnotherTest = () => { 
    return (

      <Post>

        <Helmet
          title="Yet Another Test"
          meta={[
            { name: 'description', content: 'Description of Yet Another Test' },
          ]}
        />

        <PostHeading>
          <PostTitle>Yet Another Test</PostTitle>
          <PostDate>{postInstances.get('Yet Another Test').dates.map((date) => <span key={date}>{date.toDateString()}</span>)}</PostDate>
        </PostHeading>

        <div className="post-body">

          <Chunk type={content.type}>{content.children}</Chunk>
        
        </div>

      </Post>
    );
}

yetAnotherTest.propTypes = {};

export default yetAnotherTest;
