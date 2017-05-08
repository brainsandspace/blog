/**
*
* Thought
*
*/

import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.span`
color: gainsboro;

.floating {
  color: #444;
  font-weight: 550;
  font-size:5rem;
  font-family: 'ah natural';
}
`;


function Thought({ children }) {
  return (
    <Wrapper>
      <span className="floating">
        {children}
      </span>
    </Wrapper>
  );
}

Thought.propTypes = {

};

export default Thought;
