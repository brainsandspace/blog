/**
*
* WordChoice
*
*/

import React from 'react';
import styled from 'styled-components';
import shortid from 'shortid';

import Chunk from 'components/Chunk';

const wrap = (beforeContent = null, afterContent = null) => styled.span`
  display: inline-block;

  &::before, &::after {
    opacity: 0.05;
    display: block;
    position: absolute;
    font-size: 0.8rem;
    line-height: 0.8rem;
    z-index: -1;
  }

  &:hover {
    &::after, &::before {
      opacity: 1;
      background: rgba(255,255,255, 0.5);
      z-index: 1;
    }
  }

  &::before {
    content: '${beforeContent}';
    transform: translateY(-0.6rem);
  }

  &::after {
    content: '${afterContent}';
    transform: translateY(-0.3rem);  
  }
`;

const WcBackground = styled.span`
  &::before {
    position: absolute;
    content: 'WC';
    z-index: -1;
    opacity: 0.2;
    color: lightblue;
    font-size:2rem;
    // transform: scale(2);
    
  }
`;

/**
 * Right now, word choice will only work for up to three words
 */
function WordChoice({ children }) {
  let Wrapper;

  if (children[1]) {
    Wrapper = wrap(children[1].props.value, children[2] ? children[2].props.value : null);
  } else {
    Wrapper = WcBackground;
  }

  return (
    <Wrapper>
      {children[0]
        ? <Chunk type={children[0].props.type}>{children[0].props.value}</Chunk>
        : null}
    </Wrapper>
  );
}

WordChoice.propTypes = {};

export default WordChoice;
