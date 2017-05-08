/*
 *
 * Internet Privacy
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import Revise from 'components/Revise';

import blackPyramid from 'images/black-pyramid.svg';

// import postInstances from '../../postInstances';
const Wrapper = styled.div`
width: 100%;
color: white;
font-size: 2rem;
background: white;

p {
  padding: 10px 0;
  margin: 0 auto
  max-width: 50rem;
}

p.white {
  background: white;
  color: black;
  width: 
}

.part-one {
  background: black;
  width: 100%;
}

.body-container {
  top: 100vh;
  display: flex;
  padding: 5px;
  padding-top: 10rem;
  position: absolute;
  flex-direction: column;
  align-items: center;
  width: 100%;
}
`;

const Pyramid = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
position: fixed;
padding: 10rem;
height: 100%;
width: 100%;
top: 0;z-index: -1;

p {
  max-width: 100%;
  color: black;
  font-size: 4rem;
  text-align: center;
  &:nth-of-type(2) {
    font-size: 5rem;
  }
}

img {
  transform: scale(3);
  margin-bottom: 10rem;
}
`;

export class InternetPrivacy extends React.Component {
  render() {
    return (
      <Wrapper>

        <Helmet
          title="Internet Privacy"
          meta={[
            { name: 'description', content: 'Description of Internet Privacy' },
          ]}
        />

        <Pyramid>

          <img src={blackPyramid} alt="black pyramid dripping with ooze" />

          <p>
            Imagine the internet is a black pyramid.
          </p>
          <p>
            Today a bunch of old white men decided to jizz on it.
          </p>
        </Pyramid>

        <div className="body-container">
          <div className="part-one">
            <p>
              The privacy and security of the world is being threatened by the United States government.
              <br />
              <span className="hot-take-alert">This is a very hot take.</span>
              <br />
            </p>
            <p>
              Super vaguely, the US Congress voted to let internet service providers sell your browsing history without your permission.
            </p>
            <p>
              That is not a good thing, but it also might not make much sense.
            </p>
            <p>
              If a website you are visiting has an SSL/TLS certificate, the data it passes back and forth between you and it can be encrypted.  Encryption is kinda just applied mathematics. The government, this time, is not trying to get at that encrypted information, but they have in the past. This feels like an indicator that they want to again. And I wouldn't put it past them if they didn't know that https protocol would still prevent information from being shared.'
              <Revise>
                With services like Let's Encrypt, it is super easy to get a TLS/SSL certificate for your website these days—for free. If your site has one of these certificates, then the data it passes back and forth between you and it can be encrypted.It
              </Revise>
            </p>
          </div>
          <p className="white" style={{ width: '100%', margin: 0 }}>
            I am a big proponent of the internet. That sounds silly. Who isn't? I believe in its potential to make the world a better place.
          </p>
        </div>
      </Wrapper>
    );
  }
}

InternetPrivacy.propTypes = {};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(InternetPrivacy);
