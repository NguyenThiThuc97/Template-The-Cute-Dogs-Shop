import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import MainHeader from './header';
import Footer from './footer';
import TouchArea from './touchArea'
import ServiceArea from './serviceArea'
import ClientArea from './clientArea'
//pages content
import Home from './pages/home/home'
import Contact from './pages/contact/contact'

class Master extends Component {
  render() {
    return (
      <div className="as-mainwrapper">
      	<div className="bg-white">
            <BrowserRouter>
                <div>
                    <MainHeader/>
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