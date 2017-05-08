/*
 *
 * Woop Woop
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
import PostSearch from 'components/PostSearch';

import postInstances from '../../postInstances';

export class WoopWoop extends React.Component {
  render() {
    return (
      <Post>

        <Helmet
          title="Woop Woop"
          meta={[{ name: 'description', content: 'Description of Woop Woop' }]}
        />

        <PostHeading>
          <PostTitle>Woop Woop</PostTitle>
          <PostDate>
            {postInstances
              .get('Woop Woop')
              .dates.map(date => <span key={date}>{date.toDateString()}</span>)}
          </PostDate>
        </PostHeading>

        <div className="post-body">
          <PostP>
            I find myself often choosing to just do classic posts. I should really give myself the option for writing in Markdown.

            There are sooo many things a user should not have to do that I have to do right now when making a new blog post. I need to tighten that up.
          </PostP>
          <h2>
            I feel like it's a really good time to be in the software tooling industry.
          </h2>
          <PostP>

            Don't you feel that emphasis right there of that heading?

          </PostP>

          <PostSearch>graphics card performance check ubuntu</PostSearch>

          <PostP>
            You haven't the least idea how much time making that search bar took me. And it isn't done. But it's mostly done. Kinda. It isn't functional yet. Like it wont Google Things. You
            {' '}
            <i>can</i>
            {' '}
            type.
          </PostP>

          <h3>Fuck actually this page is broken. Will fix in future.</h3>
        </div>
      </Post>
    );
  }
}

WoopWoop.propTypes = {};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(WoopWoop);
