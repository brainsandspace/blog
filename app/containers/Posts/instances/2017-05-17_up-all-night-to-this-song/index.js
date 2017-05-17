/*
 *
 * We&#x27;re Up All Night To Get Lucky
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

const weReUpAllNightToGetLucky = () => { 
    return (

      <Post>

        <Helmet
          title="We Re Up All Night To Get Lucky"
          meta={[
            { name: 'description', content: 'Description of We&#x27;re Up All Night To Get Lucky' },
          ]}
        />

        <PostHeading>
          <PostTitle>We&#x27;re Up All Night To Get Lucky</PostTitle>
          <PostDate>{postInstances.get('We&#x27;re Up All Night To Get Lucky').dates.map((date) => <span key={date}>{date.toDateString()}</span>)}</PostDate>
        </PostHeading>

        <div className="post-body">

          <Chunk type={content.type}>{content.children}</Chunk>
        
        </div>

      </Post>
    );
}

weReUpAllNightToGetLucky.propTypes = {};

export default weReUpAllNightToGetLucky;
