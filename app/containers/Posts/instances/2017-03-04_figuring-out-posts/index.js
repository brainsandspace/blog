/*
 *
 * Posts
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';
// import makeSelectPosts from '../selectors';

export class FiguringOutPosts extends React.Component { 
  render() {
    return (
      <div>
        <Helmet
          title="Figuring Out Posts"
          meta={[
            { name: 'description', content: 'Description of Posts' },
          ]}
        />
        <h1>This whole taxonomy thing is hard.</h1>
        <p>It's like, how much do you plan ahead?</p>
        <h2>Where do things go!?</h2>
        <p>Let's say we're making a new post. Like a blog post. You could think of it like that. Where does that belong in our file structure? Is it itself its own component. That's a fun sentence.</p>
        <h1>Is it itself its own component?</h1>
        <p>I feel like it is. But I also feel like the post is going to mostly just be text data that can sort of just hydrate a react component tree.</p>
        <h3>I'm definitely leaning towards a post being a component though. If for nothing more than the ability to encapsulate its own styles.</h3>
        <h2>I'd like to be able to write this using a Markdown editor though also.</h2>
        <p>Is that somehting I should sacrifice in the name of freedom?</p>
        <hr/>
        <p>I also must come back to the ideas that I've been circling in my head.</p>
        <h1>Time Travelling Styles, Scripts, and Crips</h1>
        <h2>Cookie Crips</h2>
      </div>
    );
  }
}

FiguringOutPosts.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  // FiguringOutPosts: makeSelectPosts(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FiguringOutPosts);

