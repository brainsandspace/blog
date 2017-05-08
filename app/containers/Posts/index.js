/* eslint-disable no-unneeded-ternary*/

/*
 *
 * Posts
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import makeSelectPosts from './selectors';
import {
  makeSelectCurrentPost,
  makeSelectCurrentNormatives,
} from './selectors';
import { push } from 'react-router-redux';

import { getPost } from './actions';
import postInstances from './postInstances';
import PostList from 'components/PostList';

const color = 'red';

import styled from 'styled-components';
const Wrapper = styled.div`
`;

const UL = styled.ul`


`;

export class Posts extends React.Component {
  render() {
    return (
      <Wrapper>
        <Helmet
          title="Posts"
          meta={[
            {
              name: 'description',
              content: 'All the posts of posty type type post',
            },
          ]}
        />
        <PostList
          postInstances={postInstances}
          folded={this.props.children ? true : false}
          onClickPost={this.props.onClickPost}
        >
          {this.props}
        </PostList>
        {this.props.children}
      </Wrapper>
    );
  }
}

Posts.propTypes = {
  onClickPost: PropTypes.func.isRequired,
  currentNormatives: PropTypes.array,
  children: PropTypes.node,
  // dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  // Posts: makeSelectPosts(),
  currentPost: makeSelectCurrentPost,
});

function mapDispatchToProps(dispatch) {
  return {
    onClickPost: (slug, date) => dispatch(getPost(dispatch, slug, date)), //dispatch(push(`/posts/${filename}`)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
