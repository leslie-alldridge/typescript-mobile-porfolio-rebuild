import * as React from "react";
import { Media } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as style from "../../containers/App/style.css";

export class ContactContent extends React.Component {
  render() {
    return (
      <div className="container">
        <Media className={style.contactCard}>
          <div id="center">
            <Media.Left align="top">
              <img
                className="img-circle"
                width={128}
                height={128}
                src="../../assets/pimg.jpg"
                alt="thumbnail"
                id="imgCircle"
              />
            </Media.Left>
            <Media.Body align="right">
              <Media.Heading id="contactHead">Leslie Alldridge</Media.Heading>
              <ul>
                <li
                  data-aos-once="true"
                  data-aos="zoom-out-left"
                  data-aos-duration="9000"
                >
                  <strong>Email: </strong>
                  leslie.alldridge@gmail.com
                </li>
                <li
                  data-aos-once="true"
                  data-aos="zoom-in-left"
                  data-aos-duration="11000"
                >
                  <strong>Mobile: </strong>
                  027-331-3416
                </li>
                <li
                  data-aos-once="true"
                  data-aos="zoom-out-left"
                  data-aos-duration="13000"
                >
                  <strong>Location: </strong>
                  Wellington, New Zealand
                </li>
                <li
                  data-aos-once="true"
                  data-aos="zoom-in-left"
                  data-aos-duration="15000"
                >
                  <strong>Find me online: </strong> My GitHub and LinkedIn pages
                  are linked below:
                </li>

                <a
                  id="contactLink"
                  href="https://www.linkedin.com/in/lesliealldridge/"
                >
                  <FontAwesomeIcon
                    className={style.navBarIcons}
                    icon={["fab", "linkedin"]}
                  />
                  LinkedIn
                </a>
                <a id="contactLink" href="https://github.com/leslie-alldridge">
                  <FontAwesomeIcon
                    className={style.navBarIcons}
                    icon={["fab", "github"]}
                  />
                  GitHub
                </a>
              </ul>
            </Media.Body>
          </div>
        </Media>
      </div>
    );
  }
}
