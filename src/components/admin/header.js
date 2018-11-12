import React, { Component } from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom'

class MainHeader extends Component {
  render() {
    return (
      	<header className="header-area">
                    <div className="header-top-area ptb-10 hidden-sm hidden-xs">
                        <div className="container">
                            <div className="row">
                               <div className="col-md-4">
                                    <div className="account-usd text-left">
                                        <ul>
                                        </ul>
                                    </div>
                               </div>
                               <div className="col-md-4">
                                   <div className="social-icons text-center">
                                       
                                   </div>
                               </div>
                               <div className="col-md-4">
                                    <div className="top-right">
                                        <div className="top-login-cart">
                                            <ul>
                                                <li><a href="cart.html"><i className="far fa-user"></i>&nbsp;&nbsp;My Account</a>
                                                    <ul className="submenu-mainmenu">
                                                        <li className="single-cart-item clearfix">
                                                            <span className="cart-img">
                                                                <i className="fas fa-envelope-open-text"></i>
                                                            </span>
                                                            <span className="cart-info">
                                                                <a href="#">Profile</a>
                                                            </span>  
                                                        </li>  
                                                        <li className="single-cart-item clearfix">
                                                            <span className="cart-img">
                                                                <i className="fas fa-sign-out-alt"></i>
                                                            </span>
                                                            <span className="cart-info">
                                                                <a href="#">Log out</a>
                                                            </span>  
                                                        </li>   
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                   </div>    
                               </div>
                            </div>
                        </div>   
                    </div>
                    <div className="logo-info-area ptb-35">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-3 col-sm-6 col-xs-12">
                                    <div className="header-logo">
                                        <a href="index.html"><img src="https://devitems.com/html/shofixe-preview/shofixe/img/logo/1.png" alt="shofixe"/></a>
                                    </div>
                                </div>
                                <div className="col-md-3 hidden-sm hidden-xs">
                                    <div className="info">
                                        <div className="info-icon">

                                        </div>
                                        <div className="info-text">
                                            <h4>+012 345 678 102</h4>
                                            <p>We are open 9 am - 10pm</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 hidden-sm hidden-xs">
                                    <div className="info">
                                        <div className="info-icon">

                                        </div>
                                        <div className="info-text">
                                            <h4>info@example.com</h4>
                                            <p>You can mail us</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-6 col-xs-12">
                                    <div className="search-box">
                                        <img src="img/icon/search.png" alt=""/>
                                        <form action="#">
                                            <input type="text" placeholder="Search..."/>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>      
                </header>
    );
  }
}

export default MainHeader;
