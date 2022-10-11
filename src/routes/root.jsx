import Header from '../layout/Header/Header';
import Footer from '../layout/Footer/Footer';
import {Outlet} from 'react-router-dom';
import React from 'react';

const Root = () => {

  return (
    <div className="App">
      <Header className='header' classForLink='menu-list__link'/>
      <div className="container">
        <Outlet/>
      </div>
      <Footer className='footer'/>
    </div>
  );
}

export default Root;
