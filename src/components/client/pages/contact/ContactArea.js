import React, {Component} from 'react';

class ContactArea extends Component
{
	render()
	{
		return (
			<div className="contact-area pt-90">
                    <div className="container">
                        <div className="row">
                        <div className="row">
                            <div className="col-xs-12"></div>
                                <div className="contact-us-form">
                                    <div className="section-title text-center">
                                        <h4>Leave a message</h4>
                                    </div>
                                </div>    
                            </div>  
                            <div className="row">
                                <div className="col-md-offset-3 col-md-6 col-sm-12 col-xs-12 ">  
                                    <div className="contact-form">
                                        <form id="contact-form-two" action="mail.php" method="post">
                                            <div className="form-top">
                                                <div className="form-group col-xs-12">
                                                    <label>Your Name<span className="required" title="required">*</span></label>
                                                    <input name="name" type="text" className="form-control" placeholder="Name"/>
                                                </div>
                                                <div className="form-group col-sm-6 col-xs-12">
                                                    <label>Email Address<span className="required" title="required">*</span></label> 
                                                    <input name="email" type="email" className="form-control" placeholder="Email"/>
                                                </div>										
                                                <div className="form-group col-sm-6 col-xs-12">
                                                    <label>Phone No<span className="required" title="required">*</span></label>
                                                    <input name="phone" type="text" className="form-control" placeholder="Phone"/>
                                                </div>									
                                                <div className="form-group col-xs-12">
                                                    <label>Subject<span className="required" title="required">*</span></label>
                                                    <input name="subject" type="text" className="form-control" placeholder="Subject"/>
                                                </div>	
                                                <div className="form-group col-xs-12">
                                                    <label>Message<span className="required" title="required">*</span></label>
                                                    <textarea name="message" className="form-control" placeholder="Write Something"></textarea>
                                                </div>												
                                            </div>
                                            <div className="submit-form form-group col-xs-12 submit-review text-center">
                                                <div className="clearfix"></div>
                                                <button className="section-button mt-20" type="submit"><span>Send Message</span></button>
                                            </div>
                                        </form>
                                        <p className="form-message-two"></p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-8 col-sm-8 col-xs-12">
                                    <div className="contact-us-area">
                                        <div className="google-map-area mt-90">
                                            <div id="contacts" className="map-area">
                                                <div id="googleMap" style={{width: '100%', height: 390}}></div>
                                            </div>
                                        </div>
                                    </div>    
                                </div>
                                <div className="col-md-4 col-sm-4 col-xs-12">
                                    <div className="google-address">
                                        <ul>
                                            <li><img src="https://devitems.com/html/shofixe-preview/shofixe/img/icon/11.png" alt=""/>8901 Marmora Raod, <br/>Glasgow, D04  89GR</li>
                                            <li><img src="https://devitems.com/html/shofixe-preview/shofixe/img/icon/12.png" alt=""/>Telephone : +012 345 678 102 <br/>Telephone : +032 225 501 172</li>
                                            <li><img src="https://devitems.com/html/shofixe-preview/shofixe/img/icon/13.png" alt=""/>Email : <span><a href="#">info@example.com</a></span> <br/>Web: <a href="#"> www.example.com</a></li>
                                        </ul>
                                    </div>    
                                </div>     
                            </div>   
                        </div>
                    </div>
                </div>
			)
	}
}

export default ContactArea