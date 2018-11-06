import React from 'react';
import { Jumbotron } from 'react-bootstrap';

const divStyle = {
  color: 'blue',
  width: '100vw',
  height: '10vh',
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

export default function ContactHeader(props) {
  return (
    <div id="contact" style={divStyle}>
      <Jumbotron style={heroText}>
        <h3
          data-aos="slide-left"
          data-aos-anchor-placement="top-center"
          data-aos-duration="600"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="true"
        >
          Contact
        </h3>
      </Jumbotron>
      <a id="top" href="">
        <i id="arrow" class="fas fa-chevron-circle-up" />
      </a>
    </div>
  );
}
