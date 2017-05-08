/**
*
* Code
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors } from 'global-styles';

const Block = styled.pre`

  padding: 1rem;

  &.block {
      background: #333;
    
    code {
      color: yellow;      
    }
  }

`;

const Inline = styled.span`
    background: ${colors.inlineBackground};
    padding: 2px 5px;
    border-radius: 4px;
    font-size: 0.9rem;
`;

function Code({ children, block = false }) {
  const Wrapper = block || children.includes('\n') ? Block : Inline;
  return (
    <Wrapper className={block || children.includes('\n') ? 'block' : 'inline'}>
      <code>
        {children}
      </code>
    </Wrapper>
  );
}

Code.propTypes = {
  block: PropTypes.bool,
};

export default Code;
