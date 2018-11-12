import React, {Component} from 'react';

class NewLetterArea extends Component
{
	render(){
		return (
			<div className="newsletter-area ptb-110">
                    <div className="container">
                        <div className="row">
                            <div className="newsletter-info">
                                <div className="col-lg-4 col-md-5 col-sm-12 col-xs-12">
                                    <div className="news-left text-right">
                                        <a href="#" className="section-button">sign up for free</a>
                                        <h3 className="text-uppercase">subscribe newsletter</h3>
                                    </div>    
                                </div>
                                <div className="col-lg-8 col-md-7 col-sm-12 col-xs-12">
                                    <div className="news-right text-center">
                                        <form action="#" id="mc-form" className="mc-form">
                                            <input id="mc-email" type="text" name="email" placeholder="Type Your Email Address..."/>
                                            <button id="mc-submit" type="submit" className="text-uppercase">send</button>
                                            <span className="hidden-xs"><input type="checkbox" name="agree"/>By Subscribing to our newsletter you are agree to receive emails from us !</span>
                                        </form>
                                        <div className="mailchimp-alerts text-centre fix">
                                            <div className="mailchimp-submitting"></div>
                                            <div className="mailchimp-success"></div>
                                            <div className="mailchimp-error"></div>
                                        </div>
                                    </div>    
                                </div>
                            </div>    
                        </div>
                    </div>
                </div>
			)
	}
}
export default NewLetterArea;