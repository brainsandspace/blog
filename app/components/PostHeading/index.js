/**
*
* PostHeading
*
*/

import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
// display: inline-block;
display: flex;
flex-direction: column;
align-items:center;

h1 {
  margin: 0;
}

`;

import { FormattedMessage } from 'react-intl';

function PostHeading(props) {
  return (
    <Wrapper>
      <div>
        {props.children}
      </div>
    </Wrapper>
  );
}

PostHeading.propTypes = {

};

export default PostHeading;
