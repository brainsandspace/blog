/**
*
* PostTitle
*
*/

import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.h1`
color: firebrick;
text-align: center;
`;



function PostTitle(props) {
  return (
    <Wrapper>
      {props.children}
    </Wrapper>
  );
}

PostTitle.propTypes = {

};

export default PostTitle;
