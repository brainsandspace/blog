/**
*
* Normatives
*
*/

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { colors } from 'global-styles';

const UL = styled.ul`

  list-style: none;
  padding: 0;
  
  li {
    overflow-x: hidden;
    padding: 10px 15px;
    border-bottom: 1px solid #ededed;

    &:nth-last-of-type(1) {
      border-bottom-color: #ccc;
    }

    &:hover {
      background: ${colors.highlight};
    }
  }  
`;

const NormativesList = ({ onMouseEnter, onMouseLeave, children }) => {
  return (
    <UL className="offscreen">
      {children.map(child => (
        <li
          key={child.id}
          onMouseEnter={() => {
            onMouseEnter(child.id);
          }}
          onMouseLeave={() => {
            onMouseLeave(child.id);
          }}
        >
          {child.statement}
        </li>
      ))}
    </UL>
  );
};
NormativesList.applypropTypes = {
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
  children: PropTypes.array,
};

export default NormativesList;
