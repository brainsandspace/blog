/* eslint-disable react/no-did-mount-set-state*/

/**
*
* Post
*
*/
import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { colors } from 'global-styles';
import socrates from 'utils/socrates';

import NormativesList from 'components/NormativesList';

const Wrapper = styled.div`
height: 100vh;
overflow: hidden;

.grid {
  display: grid;
}

.post {
  margin-left: 0;
}

.post > *:not( .post-search ):not( video ), .post-search > *, .post-search input {
    margin-left: auto;
    margin-right: auto;
    max-width: 50rem;
    padding-left: 5%;
    padding-right: 5%;
}

.post-search {
  margin-left: 0;
}

.post-body {
  width: 50rem;

}

i::before, i::after {
  content: '*';
  color: #ddd;
  position: absolute;
  z-index: -1;
  margin-top: -0.25rem;
  margin-left: -0.3rem;
}

i::after {
}

img {
  max-width: 100%;
}

.highlight {
  background: ${colors.highlight};
}

.meta-column {
  background: #fafafa;
  border-right: 1px solid #b0b0b0;
  color: #555;
}

.meta-on-screen {
  grid-template-columns: 300px 1fr;
}

.meta-off-screen {
  grid-template-columns: 0 1fr;

  .meta-column {
    width: 0;
    visibility: hidden;
  }
}

header {
  font-size: 3rem;

  ul {
    display:flex;
    padding: 0;
    list-style: none;

    li {
      margin: 0px 20px;
    }
  }

  button {
    cursor: pointer;
    transform: scale(1);

    &:hover {
      transform: scale(1.05)
    }

    &:focus {
      outline: 0;
    }
  }
}

`;

const MainColumn = styled.section`
// overflow-y: auto;
      height: 100vh;
  position: relative;
  overflow: scroll;
`;

const mouseEnterNormative = id => {
  document.querySelector(`#${id}`).className += ' highlight';
};

const mouseLeaveNormative = id => {
  document.querySelector(`#${id}`).className = document
    .querySelector(`#${id}`)
    .className.replace(' highlight', '');
};

/**
 * 
 * 
 * @class Post
 * @extends {Component}
 */
class Post extends Component {
  toggleMetaColumn(evt) {
    evt.preventDefault();
    this.gridDiv.className = this.gridDiv.className.match('on-screen')
      ? this.gridDiv.className.replace('on-', 'off-')
      : this.gridDiv.className.replace('off-', 'on-');
  }

  render() {
    return (
      <Wrapper>
        <div
          className="grid meta-off-screen"
          ref={ref => {
            this.gridDiv = ref;
          }}
        >
          <section className="meta-column on-screen">
            <NormativesList
              onMouseEnter={mouseEnterNormative}
              onMouseLeave={mouseLeaveNormative}
            >
              {this.props.normatives}
            </NormativesList>
          </section>

          <MainColumn>
            <header>
              <ul>
                <li>
                  <button
                    onClick={evt => {
                      this.toggleMetaColumn(evt);
                    }}
                  >
                    🗒
                  </button>
                </li>
                <li>
                  <button
                    onClick={evt => {
                      this.toggleMetaColumn(evt);
                    }}
                  >
                    ⌛🤔
                  </button>
                </li>
              </ul>
            </header>
            <article className="post">
              {this.props.children}
            </article>
          </MainColumn>
        </div>
      </Wrapper>
    );
  }
}

const mapStateToProps = state => ({
  normatives: state.toJS().posts.normatives,
});

Post.propTypes = { children: PropTypes.node, normatives: PropTypes.array };

export default connect(mapStateToProps)(Post);
