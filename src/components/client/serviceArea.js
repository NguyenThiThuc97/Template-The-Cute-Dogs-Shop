import React, {Component} from 'react';

class ServiceArea extends Component
{
	render(){
		return (
			<div className="service-area mb-10">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-3 col-sm-4 col-xs-12">
                                <div className="single-service text-center">
                                    <div className="single-service-content ptb-40">
                                        <div className="single-service-icon-wrapper">
                                            <div className="single-service-icon">
                                                <img src="https://devitems.com/html/shofixe-preview/shofixe/img/icon/5.png" alt=""/>
                                            </div>
                                        </div>    
                                        <div className="single-service-info">
                                            <h4 className="text-uppercase">free shipping</h4>
                                            <p>Free for all product</p>
                                        </div> 
                                    </div>
                                </div>
                            </div> 
                            <div className="col-md-3 col-sm-4 col-xs-12">   
                                <div className="single-service text-center">
                                    <div className="single-service-content ptb-40">
                                        <div className="single-service-icon-wrapper">
                                            <div className="single-service-icon">
                                                <img src="https://devitems.com/html/shofixe-preview/shofixe/img/icon/7.png" alt=""/>
                                            </div>
                                        </div>    
                                        <div className="single-service-info">
                                            <h4 className="text-uppercase">order online</h4>
                                            <p>www.shofixe.com</p>
                                        </div>
                                    </div>    
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-4 col-xs-12">    
                                <div className="single-service text-center">
                                    <div className="single-service-content ptb-40">
                                        <div className="single-service-icon-wrapper">
                                            <div className="single-service-icon">
                                                <img src="https://devitems.com/html/shofixe-preview/shofixe/img/icon/9.png" alt=""/>
                                            </div>
                                        </div>    
                                        <div className="single-service-info">
                                            <h4 className="text-uppercase">money back</h4>
                                            <p>money back guarantee</p>
                                        </div>
                                    </div>    
                                </div>
                            </div>
                            <div className="col-md-3 hidden-sm col-xs-12">    
                                <div className="single-service text-center">
                                    <div className="single-service-content ptb-40">
                                        <div className="single-service-icon-wrapper">
                                            <div className="single-service-icon">
                                                <img src="https://devitems.com/html/shofixe-preview/shofixe/img/icon/10.png" alt=""/>
                                            </div>
                                        </div>    
                                        <div className="single-service-info">
                                            <h4 className="text-uppercase">gift coupon</h4>
                                            <p>surprise gift coupon</p>
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

export default ServiceArea;