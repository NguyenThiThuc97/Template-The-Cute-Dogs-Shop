import React, {Component} from 'react';

class TouchArea extends Component
{
	render(){
		return (
			<div className="touch-area ptb-90">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 col-sm-12 col-xs-12">
                                <div className="touch-left">
                                    <div className="touch-logo mb-35">
                                        <a href="index.html"><img src="https://devitems.com/html/shofixe-preview/shofixe/img/logo/2.png" alt="shofixe"/></a>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adi elit, sed do eiusmod tempor incididunt ut ore  dolore magna aliqua. Ut enim ad minim eniam</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adi elit, sed do eiusmod tempor incididunt ut</p>
                                    <div className="social-icon">
                                        <ul>
                                            <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                            <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                            <li><a href="#"><i className="fa fa-pinterest"></i></a></li>
                                            <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                                            <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-8 col-sm-12 col-xs-12">
                                <div className="touch-right">
                                    <h2 className="text-uppercase">get in touch</h2>
                                    <form id="contact-form-two" action="mail.php" method="post">
                                        <input type="text" placeholder="Your name here..." name="name"/>
                                        <input type="text" placeholder="Your email here..." name="email"/>
                                        <textarea className="mtb-25" cols="30" rows="10" placeholder="Write message here..." name="message"></textarea>
                                        <button className="section-button" type="submit">send</button>
                                    </form>
                                    <p className="form-message"></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>   
			)
	}
}
export default TouchArea