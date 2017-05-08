/**
*
* Chunk
*
*/
import shortid from 'shortid';
import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

import WordChoice from 'components/WordChoice';
import Ellipsis from 'components/Ellipsis';
import Tangent from 'components/Tangent';
import Normative from 'containers/Normative';
import Code from 'components/Code';

function Chunk({ type, children, ...props }) {
  let Tag, href, src, alt;

  switch (type) {
    case 'wordChoice':
      Tag = WordChoice;
      break;

    case 'ellipsis':
      Tag = Ellipsis;
      break;

    case 'tangent':
      Tag = Tangent;
      break;

    case 'normative':
      Tag = Normative;
      break;

    /* 🔝 Custom Elements Above 🔝 */

    case 'heading':
      Tag = `h${props.depth}`;
      break;

    case 'paragraph':
      Tag = 'p';
      break;

    case 'text':
      Tag = 'span';
      break;

    case 'code':
      Tag = Code;
      break;

    case 'inlineCode':
      Tag = Code;
      break;

    //  TODO what is delete
    case 'delete':
    case 'strong':
      Tag = 'strong';
      break;

    case 'emphasis':
      Tag = 'em';
      break;

    case 'link':
    case 'linkReference':
      Tag = 'a';
      href = props.url;
      break;

    case 'image':
      Tag = 'img';
      src = props.url;
      alt = props.alt;
      break;

    case 'list':
      Tag = props.ordered ? 'ol' : 'ul';
      break;

    case 'listItem':
      Tag = 'li';
      break;

    case 'root':
      Tag = 'div';
      break;

    default:
      // debugger;
      Tag = 'span';
      break;

    // return null;
  }

  return (
    <Tag href={href} src={src} alt={alt}>
      {children
        ? Array.isArray(children)
            ? children.map(child => {
                return (
                  <Chunk type={child.type} key={shortid.generate()} {...child}>
                    {child.children ? child.children : child.value}
                  </Chunk>
                );
              })
            : children.value ? children.value : children
        : null}
    </Tag>
  );
}

Chunk.propTypes = {
  type: PropTypes.string.isRequired,
};

export default Chunk;
