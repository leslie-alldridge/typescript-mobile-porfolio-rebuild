import * as React from 'react';
import * as style from './style.css';
import {Footer} from '../../components/Footer/index'
import {Header} from '../../components/Header/index'

export namespace App {
  
}

export class App extends React.Component {

  render() {

    return (
      <div className={style.normal}>
      <Header/>
      <p>hello</p>
      <Footer />
      </div>
    );
  }
}
