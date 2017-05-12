/**
*
* PostList
*
*/

import React from 'react';
import styled from 'styled-components';

const articleMaxWidth = '50rem';

const UL = styled.ul`
  width:100%;
  display: flex;
  flex-direction: column;
  padding-left: 0;


  @media(min-width: ${articleMaxWidth}) {
    position: absolute;
    width: inherit;

    p.date {
      display: none;  
    }
  }

li {
  color: steelblue;
  display: flex;
}

p.title {
  margin: 0;
}

a {
  color: steelblue;
  margin: 0;
  font-weight: normal;
  text-decoration: none;

  &:hover {
    cursor: pointer;
    font-weight: bold;
  }
}

p.date {
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transform: scaleX(-1);
  span {
  } 
}

`;

class PostList extends React.Component {
  render() {
    return (
      <UL>
        {Array.from(this.props.postInstances)
          .reverse()
          .map(([title, { slug, dates }]) => (
            <li tabIndex="O" key={title}>
              {dates
                ? <p className="date">
                    {dates.map(d => (
                      <span key={`${slug}-${d}`}>{d.toDateString()}</span>
                    ))}
                  </p>
                : null}

              <p className="title">
                <a
                  className="title"
                  onClick={evt => {
                    evt.preventDefault();
                    this.props.onClickPost(slug, dates[0]);
                  }}
                  href={slug}
                >
                  {title}
                </a>
              </p>

            </li>
          ))}
      </UL>
    );
  }
}

PostList.propTypes = {
  folded: React.PropTypes.bool.isRequired,
  postInstances: React.PropTypes.object,
};

export default PostList;
