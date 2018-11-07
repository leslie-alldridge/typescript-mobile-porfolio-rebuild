import * as React from "react";
import { Jumbotron } from "react-bootstrap";
import * as style from "../../containers/App/style.css";

export namespace Header {

}

export class Header extends React.Component {
  render() {
    return (
      <div className={style.header}>
        <Jumbotron>
          <h1>Leslie2 Alldridge</h1>
          <p>Full Stack Web Developer &amp; Technical Support</p>
        </Jumbotron>
      </div>
    );
  }
}
