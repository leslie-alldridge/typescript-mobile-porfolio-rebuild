import * as React from 'react';
import { Jumbotron } from 'react-bootstrap';
import * as style from '../../containers/App/style.css';

const mystyles = {
  color: 'blue',
  width: '100vw',
  height: '100vh',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  position: 'relative'
} as React.CSSProperties;

const heroText = {
  textAlign: 'center',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  color: 'white',
  background: 'none'
} as React.CSSProperties;

export class Header extends React.Component {
  render() {
    return (
      <div style={mystyles} className={style.header}>
        <Jumbotron style={heroText} className={style.header}>
          <h1>Leslie Alldridge</h1>
          <p>Full Stack Web Developer &amp; Technical Support</p>
        </Jumbotron>
      </div>
    );
  }
}
