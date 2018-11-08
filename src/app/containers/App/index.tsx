import * as React from 'react';
import * as style from './style.css';
import { NavbarTop } from '../../components/Navbar/index';
import { Header } from '../../components/Header/index';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { AboutHeader } from '../../components/About/AboutHeader';
import { AboutContent } from '../../components/About/AboutContent';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { ContactHeader } from '../../components/Contact/ContactHeader';
import { ContactContent } from '../../components/Contact/ContactContent';
import { BlogHeader, BlogContent } from 'app/components';

library.add(fab, fas);

export class App extends React.Component {
  render() {
    return (
      <div className={style.new}>
        <NavbarTop />
        <Header />
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
