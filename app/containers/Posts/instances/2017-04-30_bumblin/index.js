/*
 *
 * And Mumblin
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

const andMumblin = () => { 
    return (

      <Post>

        <Helmet
          title="And Mumblin"
          meta={[
            { name: 'description', content: 'Description of And Mumblin' },
          ]}
        />

        <PostHeading>
          <PostTitle>And Mumblin</PostTitle>
          <PostDate>{postInstances.get('And Mumblin').dates.map((date) => <span key={date}>{date.toDateString()}</span>)}</PostDate>
        </PostHeading>

        <div className="post-body">

          <Chunk type={content.type}>{content.children}</Chunk>
        
        </div>

      </Post>
    );
}

andMumblin.propTypes = {};

export default andMumblin;
