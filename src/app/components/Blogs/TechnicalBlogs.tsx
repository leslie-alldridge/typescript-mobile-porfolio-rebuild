import * as React from 'react';
import { Col } from 'react-bootstrap';

import * as style from '../../containers/App/style.css';

export class TechnicalBlogs extends React.Component {
  render() {
    return (
      <div className="container">
        <div className={style.blog}>
          <Col className={style.blogCol}>
            <h4>
              <b>React and Redux</b>
            </h4>
            <i className={style.date}>19 Sep 2018</i>
            <br />
            <p>
              This website is 100% React and utlises both stateless and stateful
              components. I love the way React can be so flexible with its
              rendering and provide a simple but effective way to code. I love
              teaching others the difference between state and props and
              explaining the direction props goes throughout multiple layers of
              components. React is the most challenging language we learn at
              DevAcademy so I've taken it upon myself to fall in love with React
              and learn everything I can about it.
            </p>
          </Col>
          <Col className={style.blogCol}>
            <h4>
              <b>Full Stack</b>
            </h4>
            <i className={style.date}>23 Sep 2018</i>
            <br />
            <p>
              I'm now able to confidently code full stack applications and this
              has really opened up my understanding with what full stack really
              is. I used to struggle often with how websites logged in users,
              saved items in a database, all while the user navigated the front
              end. After extensive practice with internal API's, SQL databases,
              React and Redux, I'm now confident with the full stack concept.
              I'm taking this opportunity to teach others in my cohort how to
              code and understand full stack.
            </p>
          </Col>
          <Col className={style.blogCol}>
            <h4>
              <b>My next areas of focus</b>
            </h4>
            <i className={style.date}>23 Oct 2018</i>
            <br />
            <p>
              In the near future I'll be diving into complex data structures and
              learning about more efficient ways to complete basic tasks. For
              example, there's multiple ways to find a single item within an
              array, but some ways are more efficient than others when the array
              contains thousands of items. I was inspired by a YouTube video of
              a Google interview, where the software engineer discoved more than
              five ways to achieve the same outcome. I'm currently learning C#,
              Rails, MongoDB, Docker and Python.
            </p>
          </Col>
          <Col className={style.blogCol}>
            <h4>
              <b>Technical Mindset</b>
            </h4>
            <i className={style.date}>29 Oct 2018</i>
            <br />
            <p>
              I've been gifted with a technical mindset. I love breaking down
              problems, thinking outside of the box and strategically
              implementing a solution. If someone tells me that something isn't
              possible, I'll continue planning and thinking about a solution as
              their comment will fuel me to find the answer. In saying that,
              sometimes it's not possible 'yet', but I'll have my eyes and ears
              open for when it will be possible.
            </p>
          </Col>
        </div>
      </div>
    );
  }
}
