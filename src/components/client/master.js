import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import ClientArea from './clientArea'
import ServiceArea from './serviceArea'
import TouchArea from './touchArea'
import Header from './header';
import Footer from './footer';

//pages content
import Home from './pages/home/home'
import Contact from './pages/contact/contact'

import '../../public/client/css/bootstrap.min.css';
import '../../public/client/lib/custom-slider/css/nivo-slider.css';
import '../../public/client/lib/custom-slider/css/preview.css';
import '../../public/client/css/font-awesome.min.css';
import '../../public/client/css/material-design-iconic-font.css';
import '../../public/client/css/material-design-iconic-font.min.css';
import '../../public/client/css/owl.carousel.css';
import '../../public/client/css/jquery-ui.css';
import '../../public/client/css/meanmenu.min.css';
import '../../public/client/css/animate.css';
import '../../public/client/css/animate-heading.css';
import '../../public/client/css/reset.css';
import '../../public/client/css/jquery.mb.YTPlayer.css';
import '../../public/client/style.css';
import '../../public/client/css/responsive.css';

class Master extends Component {
  render() {
    return (
      <div className="as-mainwrapper">
      	<div className="bg-white">
            <BrowserRouter>
                <div>
                    <Header/>
                    <Route path = "/" component = {Home} exact />
                    <Route path = "/contact" component = {Contact} />
                </div>
            </BrowserRouter>
            <ClientArea/>
            <ServiceArea/>
            <TouchArea/>
            <Footer/>
        </div>
      </div>
    );
  }
}

export default Master;