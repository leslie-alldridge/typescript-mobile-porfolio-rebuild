import * as React from 'react';
import * as style from './style.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import {
  AboutHeader,
  AboutContent,
  BlogHeader,
  BlogContent,
  ContactContent,
  ContactHeader,
  Header,
  NavbarTop,
  Portfolio
} from 'app/components';

library.add(fab, fas);

export class App extends React.Component {
  render() {
    return (
      <div className={style.new}>
        <NavbarTop />
        <Header />
        <Portfolio />
        <BlogHeader />
        <BlogContent />
        <ContactHeader />
        <ContactContent />
        <AboutHeader />
        <AboutContent />
      </div>
    );
  }
}
