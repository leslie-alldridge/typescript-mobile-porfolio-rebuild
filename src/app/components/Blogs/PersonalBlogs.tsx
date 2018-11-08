import * as React from 'react';
import { Col } from 'react-bootstrap';

import * as style from '../../containers/App/style.css';

export class PersonalBlogs extends React.Component {
  render() {
    return (
      <div className="container">
        <div className={style.blog}>
          <Col className={style.blogCol}>
            <h4>
              <b>Learning to learn</b>
            </h4>
            <i className={style.date}>19 May 2018</i>
            <br />
            <p>
              Learning to learn is a great skill that isn't acquired naturally
              for most people. We can all learn, but there's true power in
              finding what helps you learn best. I've noticed when learning new
              concepts it no longer takes an entire day. I can apply myself to
              the subject and in a few hours time, find myself teaching others
              how to better understand that same topic. I'm never afraid to
              learn new things and continually reflect on my progress towards
              goals that I've set for learning new content.
            </p>
          </Col>
          <Col className={style.blogCol}>
            <h4>
              <b>Mindfulness</b>
            </h4>
            <i className={style.date}>25 Jun 2018</i>
            <br />
            <p>
              Enspiral Dev Academy has taught me the importantance of
              mindfulness in the workplace. It's not often we take five minutes
              to just 'be' and have a clear mind. This has helped my
              productivity and concentration levels improve so I can do my best
              work possible. Originally I thought of it as meditation and it was
              hard to incorporate into my daily routine. Now that I understand
              mindfulness can be a walk at lunch, five minutes outside in fresh
              air or solving a rubik's cube, I can continue to practice
              mindfulness throughout my day.
            </p>
          </Col>
          <Col className={style.blogCol}>
            <h4>
              <b>Teamwork</b>
            </h4>
            <i className={style.date}>12 Sep 2018</i>
            <br />
            <p>
              One of the most important concepts I've learned is that projects
              rarely fail due to the technical challenge that lies ahead. Having
              a solid team and discussing expectations before starting work, is
              critical to success. We've had a few road bumps early on where
              expectations and roles weren't set, leading to us having nothing
              to present. I'm glad to have been through this experience as it
              was valuable to reflect on.
            </p>
          </Col>
          <Col className={style.blogCol}>
            <h4>
              <b>Goals and Reflections</b>
            </h4>
            <i className={style.date}>15 Sep 2018</i>
            <br />
            <p>
              Writing goals and reflecting on experiences has become part of my
              daily routine. I value planning before starting a project and
              reflecting daily to see what I've learned or what I'm having
              trouble with. My recent applications have utilised a documented
              ReadMe file with reflcetions, MVP and stretch goals. Using this
              method has helped my productivity increase and I've experienced
              less downtime wondering where to go next, as the next step is
              clearly defined.
            </p>
          </Col>
        </div>
      </div>
    );
  }
}
