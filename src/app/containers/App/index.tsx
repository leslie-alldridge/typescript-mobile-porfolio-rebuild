import * as React from 'react';
import * as style from './style.css';
import { NavbarTop } from '../../components/Navbar/index';
import { Header } from '../../components/Header/index';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fab);

export namespace App {

}

export class App extends React.Component {
  render() {
    return (
      <div className={style.new}>
        <NavbarTop />
        <Header />
        <p>hello</p>
      </div>
    );
  }
}
