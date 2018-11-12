import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import MainHeader from './header';
import Menu from './menu';

class Master extends Component {
  render() {
    return (
      <div className="as-mainwrapper">
      	<div className="bg-white">
          <MainHeader/>
          <Menu/>
        </div>
      </div>
    );
  }
}

export default Master;