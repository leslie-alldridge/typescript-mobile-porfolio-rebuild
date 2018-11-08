import * as React from 'react';
import { Tab, Row, Col, Nav, NavItem } from 'react-bootstrap';

import { TechnicalBlogs } from './TechnicalBlogs';
import { PersonalBlogs } from './PersonalBlogs';

import * as style from '../../containers/App/style.css';

export class BlogContent extends React.Component {
  render() {
    return (
      <div>
        <Tab.Container className={style.centerTabs} defaultActiveKey="first">
          <Row className="clearfix">
            <Col sm={4} md={6} lg={12}>
              <Nav className={style.navBlog} bsStyle="pills">
                <NavItem eventKey="first">Personal Blogs</NavItem>
                <NavItem eventKey="second">Technical Blogs</NavItem>
              </Nav>
            </Col>
            <Col sm={4} md={6} lg={12}>
              <Tab.Content animation>
                <Tab.Pane eventKey="first">
                  <PersonalBlogs />
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <TechnicalBlogs />
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    );
  }
}
