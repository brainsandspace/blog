/*
 *
 * Incremental Progress
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

const incrementalProgress = () => { 
    return (

      <Post>

        <Helmet
          title="Incremental Progress"
          meta={[
            { name: 'description', content: 'Description of Incremental Progress' },
          ]}
        />

        <PostHeading>
          <PostTitle>Incremental Progress</PostTitle>
          <PostDate>{postInstances.get('Incremental Progress').dates.map((date) => <span key={date}>{date.toDateString()}</span>)}</PostDate>
        </PostHeading>

        <div className="post-body">

          <Chunk type={content.type}>{content.children}</Chunk>
        
        </div>

      </Post>
    );
}

incrementalProgress.propTypes = {};

export default incrementalProgress;
