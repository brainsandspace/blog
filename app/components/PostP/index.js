/**
*
* P
*
*/

import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.p`
 
`;

function PostP(props) {
  return (
    <Wrapper>
      {props.children}
    </Wrapper>
  );
}

PostP.propTypes = {};

export default PostP;
