import * as React from 'react';
import { Well } from 'react-bootstrap';

import * as style from '../../containers/App/style.css';

export class AboutContent extends React.Component {
  render() {
    return (
      <div className="container">
        <div className={style.aboutPage}>
          <Well className={style.wellLeft} bsSize="large">
            <h3>About Leslie</h3> <br />
            Hi there! First of all, thanks for checking out my portfolio.
            <p />
            My strongest skills are bringing energy into a team, finding more
            efficient ways to carry out repetitive tasks and thinking of
            creative solutions to a problem. Outside of the workplace, you'll
            find me at the gym, practising karate, solving rubik's cubes and
            learning something new.
            <p />
            I've finally found my passion after three careers. I'm driven to
            become a full stack developer and do the best work of my life. This
            career will offer me a place where I'll never master my role and be
            continually learning new technologies and stacks as the industry
            evolves.
            <p />
            At the moment I'm working in Technical Support for Xero and have
            completed a developer bootcamp at Enspiral Dev Academy. I'm eager to
            share my knowledge with my future team and learn from the best
            developers in the industry. <p />
            <p />I will bring a great customer awareness and quality of life
            focus to your team. I love thinking of big outside the box ideas and
            presenting in front of an audience. I'll frequently get drinks or do
            dishes for my team to set a good example of how a team should look
            after one another. I value honesty, caring for others, hard work and
            timeliness.
          </Well>
          <Well className={style.wellRight} bsSize="large">
            <h3>About My Portfolio</h3>
            <strong>
              <i>
                This is a mobile first design to compliment my main portfolio
                website that you can view{' '}
                <a
                  target="_blank"
                  href="https://portfolio-leslie.herokuapp.com/"
                >
                  here.
                </a>
              </i>
            </strong>
            <br />
            <br />
            During my time at DevAcademy I decided to do a reflection at the
            halfway point to see how far I've grown in a short amount of time.
            <p />
            Compared to my portfolio website pre-bootcamp, I'm proud to say I
            spent much less time on this website and achieved an outcome that
            exceeded my expectations.
            <p />
            I've included more details about my reflections in the readme over
            on GitHub (
            <a
              target="_blank"
              href="https://github.com/leslie-alldridge/personal-blog-react-rebuild"
            >
              here
            </a>
            ) This website is powered by the following technologies:
            <ul>
              <li> React</li>
              <li> Typescript</li>
              <li> React-Bootstrap</li>
              <li> CSS 3 Animations</li>
              <li> Node JS</li>
            </ul>
            <p>
              If you have any questions about the technologies used or want to
              learn how I developed certain parts of this page, please let me
              know.
              <p />
              <p />
              For anyone looking at this page thinking "Wow, how'd he do that?",
              drop me a message or email and I'll be in touch.
              <p />
              <strong>Please note:</strong> Page will be edited to reflect my
              new projects and blogs.
            </p>
          </Well>
        </div>
      </div>
    );
  }
}
