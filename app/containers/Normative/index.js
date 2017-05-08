/**
*
* Normative
*
* To be able to reference the normatives from an external list, we add an id to the inline normative.
*/

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Chunk from 'components/Chunk';
import styled from 'styled-components';
import shortid from 'shortid';

const ADD_NORMATIVE = 'ADD_NORMATIVE';
export function addNormative(statement, id) {
  return {
    type: ADD_NORMATIVE,
    statement,
    id,
  };
}

export const normativeReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_NORMATIVE:
      return [...state, { id: action.id, statement: action.statement }];

    case 'LOAD_POST':
      return [];

    default:
      return state;
  }
};

const Span = styled.span`
`;

export class Normative extends Component {
  static propTypes = {
    children: PropTypes.array.isRequired,
    addNormative: PropTypes.func.isRequired,
  };

  constructor() {
    super();

    this.state = { id: null };
  }

  componentDidMount() {
    const id = shortid.generate();
    this.props.addNormative(this.props.children[0].props.value, id);

    this.setState({ id });
  }

  render() {
    return (
      <Span
        id={this.state.id}
        ref={ref => {
          this.element = ref;
        }}
      >
        {this.props.children[0]
          ? <Chunk type={this.props.children[0].props.type}>
              {this.props.children[0].props.value}
            </Chunk>
          : null}
      </Span>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addNormative: (statement, id) => dispatch(addNormative(statement, id)),
});

export default connect(null, mapDispatchToProps)(Normative);
