import React, {Component} from 'react'

class BannerArea extends Component
{
	render(){
		return (
			<div className="banner-area contact ptb-110 overlay">
                    <div className="container">  
                        <div className="row">
                            <div className="col-xs-12">
                                <div className="banner-text text-center">
                                    <div className="banner-title">
                                        <h2 className="text-uppercase">Contact Us</h2>
                                    </div>
                                    <div className="breadcrumbs">
                                        <ul>
                                            <li className="text-capitalize"><a href="index.html">Home</a> ></li>
                                            <li className="text-capitalize">contact</li>
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
export default BannerArea