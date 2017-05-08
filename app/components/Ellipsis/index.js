/**
*
* Ellipsis
*
*/

import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.span`
background: orange;
`;

function Ellipsis({children}) {
  return (
    <Wrapper>
      ...
      {/*//THIS IS LAZY DOUBLY SO
      {Array.isArray(children)
        ? <Chunk type={children[0].props.type}>
            {children[0].props.children}
          </Chunk>
        : <Chunk type={children.props.type}>{children.props.children}</Chunk>}*/}
    </Wrapper>
  );
}

Ellipsis.propTypes = {};

export default Ellipsis;
