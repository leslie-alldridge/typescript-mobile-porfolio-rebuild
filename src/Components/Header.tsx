import * as React from 'react';
import { Jumbotron } from 'react-bootstrap';
import * as style from './App.css';

// const divStyle = {
//   color: "blue",
//   backgroundPosition: "center",
//   backgroundRepeat: "no-repeat",
//   backgroundSize: "cover",
//   height: "100vh",
//   position: "relative",
//   width: "100vw"
// };

// const heroText = {
//   textAlign: "center",
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   color: "white",
//   background: "none"
// };

export default function Header(props: any) {
  return (
    <div className={style.normal}>
      <Jumbotron>
        <h1>Leslie Alldridge</h1>
        <p>Full Stack Web Developer &amp; Technical Support</p>
      </Jumbotron>
    </div>
  );
}
