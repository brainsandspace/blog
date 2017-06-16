/*
 *
 * Flagship
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

const flagship = () => { 
    return (

      <Post>

        <Helmet
          title="Flagship"
          meta={[
            { name: 'description', content: 'Description of Flagship' },
          ]}
        />

        <PostHeading>
          <PostTitle>Flagship</PostTitle>
          <PostDate>{postInstances.get('Flagship').dates.map((date) => <span key={date}>{date.toDateString()}</span>)}</PostDate>
        </PostHeading>

        <div className="post-body">

          <Chunk type={content.type}>{content.children}</Chunk>
        
        </div>

      </Post>
    );
}

flagship.propTypes = {};

export default flagship;
