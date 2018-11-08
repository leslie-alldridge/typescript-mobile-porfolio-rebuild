import * as React from 'react';
import * as style from './style.css';
import { NavbarTop } from '../../components/Navbar/index';
import { Header } from '../../components/Header/index';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { AboutHeader } from '../../components/About/AboutHeader';
import { AboutContent } from '../../components/About/AboutContent';
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fab, fas);

export namespace App {

}

export class App extends React.Component {
  render() {
    return (
      <div className={style.new}>
        <NavbarTop />
        <Header />
        <AboutHeader />
        <AboutContent />
      </div>
    );
  }
}
