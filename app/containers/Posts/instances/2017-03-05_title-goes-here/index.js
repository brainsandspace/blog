import React from 'react';

import Post from 'components/Post';
import PostP from 'components/PostP';
import PostHeading from 'components/PostHeading';
import PostTitle from 'components/PostTitle';
import PostDate from 'components/PostDate';

import postInstances from '../../postInstances.js';

class TitleGoesHere extends React.Component {
  render() {
    return (
      <Post>
        <PostHeading>
          <PostTitle>The Post Title Goes Here</PostTitle>
          <PostDate>
            {postInstances
              .get('Blogging CLI Tool?')
              .dates.map(date => <span key={date}>{date.toDateString()}</span>)}
          </PostDate>
        </PostHeading>

        <div className="post-body">
          <PostP>
            Gosh darn I need to sit down and actually figure out how it is I want to organize posts. I need to set up dynamic routing. It would probably be nice to have things set up so I can just run `npm run generate post
            {' '}
            {'{posttitle}'}
            ` and boom new post with everything set up. Eventually a gui might be nice.
          </PostP>
          <PostP>
            I really need to decide whether
            {' '}
            <b>vim</b>
            {' '}
            is doing me good. I do like that it has made me more comfortable editing files in the terminal, which is useful when working on remote machines. The downside has been not necessarily with regards to
            {' '}
            <b>vim</b>
            , but rather the vim extension for
            {' '}
            <b>VS Code</b>
            . There are certain functionalities that it takes away from me. For instance, CTRL+D ought to highlight the next instance of the currently highlighted word, instead it looks like it decrements the indentation. Maybe that is actually a vim command? It is quite possible I just mostly need to learn more vim commands. The problem is that vim commands are not implemented perfectly in the extension either. Like global find replace with confirmation.
            {' '}
            <code>:%s/foo/bar/gc</code>
            {' '}
            By the way, this is regarding the extension
            {' '}
            <a href="https://github.com/VSCodeVim/Vim">Vim v0.6.2</a>
            . I should look at the codebase and see if it might be worthwhile to try to make some PRs. I should do this.
            I should should should . I should do that.
          </PostP>
        </div>
      </Post>
    );
  }
}

export default TitleGoesHere;
