import React from 'react';
import { Jumbotron } from 'react-bootstrap';

const divStyle = {
  color: 'blue',
  width: '100vw',
  height: '100vh',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  position: 'relative'
};

const heroText = {
  textAlign: 'center',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  color: 'white',
  background: 'none'
};

export default function Header(props) {
  return (
    <div id="mainImg" style={divStyle}>
      <Jumbotron style={heroText}>
        <h1>Leslie Alldridge</h1>
        <p>Full Stack Web Developer &amp; Technical Support</p>
      </Jumbotron>
    </div>
  );
}
