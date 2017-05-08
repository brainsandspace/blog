/**
*
* Tangent
*
*/

import React from 'react';
import styled from 'styled-components';
import shortid from 'shortid';

import Chunk from 'components/Chunk';

const Wrapper = styled.span`
  display: inline;

  svg {
    position: absolute
    display: inline-block;
    // z-index: -1;

    text {
      transform: translateY(1rem);

      &:hover {
        fill: red;
      }
    }
  }
`;

class Tangent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      straightLength: 300,
      id: shortid.generate(),
    };
  }

  componentDidMount() {
    // TODO this is hacky-ish, could instead use a ref that is passed down down down. Actually maybe this is better
    const svgLeft = this.svg.getBoundingClientRect().left;
    const postBody = document
      .querySelector('.post-body')
      .getBoundingClientRect();

    // debugger;//
    // this.setState({
    //   straightLength: postBody.right - svgLeft - 100,
    // });

    // this part totally doesn't work. I am trying to not have overflow x
    console.log(
      'client bound ',
      this.textPath,
      this.textPath.getBoundingClientRect()
    );
    this.svg.setAttribute('width', this.textPath.getBoundingClientRect().width);
    this.svg.setAttribute(
      'height',
      this.textPath.getBoundingClientRect().height
    );
    // debugger;
  }

  render() {
    // debugger;
    return (
      <Wrapper>
        <svg
          ref={ref => {
            this.svg = ref;
          }}
        >
          <defs>
            <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="2 2" result="shadow" />
              <feOffset dx="0" dy="0" />
            </filter>

            <path
              id={this.state.id}
              d={
                `M 0 0 
                 l ${this.state.straightLength} 0
                 c 200 0 200 0 200 200
                 l 0 3000`
              }
            />
          </defs>
          {/*<text>
            <textPath
              href={`#${this.state.id}`}
              style={{ filter: 'url(#shadow)', fill: 'white' }}
            >
              {this.props.children[0].props.value}
            </textPath>
          </text>*/}
          <text>
            <textPath
              href={`#${this.state.id}`}
              ref={ref => {
                this.textPath = ref;
              }}
            >
              {this.props.children[0].props.value}
            </textPath>
          </text>
        </svg>
        <br />
        {' '}
      </Wrapper>
    );
  }
}

Tangent.propTypes = {};

export default Tangent;
