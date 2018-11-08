import * as React from 'react';
import { Jumbotron } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import * as style from '../../containers/App/style.css';

const divStyle = {
  color: 'blue',
  width: '100vw',
  height: '10vh',
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

export class BlogHeader extends React.Component {
  render() {
    return (
      <div className={style.subHead} style={divStyle} id="blogs">
        <Jumbotron style={heroText}>
          <h3
            data-aos="slide-left"
            data-aos-anchor-placement="top-center"
            data-aos-duration="600"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="true"
          >
            Blogs
          </h3>
        </Jumbotron>

        <a className={style.arrow} href="#">
          <FontAwesomeIcon
            size={'lg'}
            className={style.navBarIcons}
            icon={'chevron-circle-up'}
          />
        </a>
      </div>
    );
  }
}
