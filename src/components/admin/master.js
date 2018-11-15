import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import MainHeader from './header';
import Menu from './menu';
import TopNavigation from './top_navigation';
import Home from './pages/home';
import Footer from './footer';
// import css
// import '../../public/admin/vendors/bootstrap/dist/css/bootstrap.min.css';
// import '../../public/admin/vendors/font-awesome/css/font-awesome.min.css';
// import '../../public/admin/vendors/nprogress/nprogress.css';
// import '../../public/admin/vendors/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.min.css';
// import '../../public/admin/build/css/custom.min.css';
import '../../public/admin/vendors/bootstrap/dist/css/bootstrap.min.css';
import '../../public/admin/vendors/font-awesome/css/font-awesome.min.css';
import '../../public/admin/vendors/nprogress/nprogress.css';
import '../../public/admin/vendors/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.min.css';
import '../../public/admin/build/css/custom.min.css';
// end import css
class Master extends Component {
  render() {
    return (
      <body class="nav-md">
        <div class="container body">
          <div class="main_container">
            <Menu/>
            <TopNavigation/>
            <Home/>
            <Footer/>
          </div>
        </div>
      </body>
    );
  }
}

export default Master;