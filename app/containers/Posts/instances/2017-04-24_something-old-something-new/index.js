/*
 *
 * Little Hi Little Hey
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';

import Post from 'components/Post';
import PostP from 'components/PostP';
import PostHeading from 'components/PostHeading';
import PostTitle from 'components/PostTitle';
import PostDate from 'components/PostDate';

import postInstances from '../../postInstances';

export class LittleHiLittleHey extends React.Component { 
  render() {
    return (

      <Post>

        <Helmet
          title="Little Hi Little Hey"
          meta={[
            { name: 'description', content: 'Description of Little Hi Little Hey' },
          ]}
        />

        <PostHeading>
          <PostTitle>Little Hi Little Hey</PostTitle>
          <PostDate>{postInstances.get('Little Hi Little Hey').dates.map((date) => <span key={date}>{date.toDateString()}</span>)}</PostDate>
        </PostHeading>

        <div className="post-body">

          <PostP>
            Start writing in here.
          </PostP>
        
        </div>

      </Post>
    );
  }
}

LittleHiLittleHey.propTypes = {

};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(LittleHiLittleHey);
