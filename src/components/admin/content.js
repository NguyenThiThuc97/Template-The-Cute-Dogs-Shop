import React, {Component} from 'react'
import Product from './pages/product'

class Content extends Component
{
	render(){
		return (
			<div className="shop-area-start leftsidebar mt-90">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3">
                                <div className="shop-left-sidebar">
                                    <div className="single-left-widget">
                                        <div className="section-title">
                                            <h4 className="text-uppercase">All Subjectss</h4>
                                            <ul>
                                                <li className="active"><a href="#"><i className="fa fa-angle-right"></i>Product</a></li>
                                                <li><a href="#"><i className="fa fa-angle-right"></i>Company</a></li>
                                                <li><a href="#"><i className="fa fa-angle-right"></i>Category</a></li>
                                                <li><a href="#"><i className="fa fa-angle-right"></i>Employee</a></li>
                                                <li><a href="#"><i className="fa fa-angle-right"></i>Customer</a></li>
                                                <li><a href="#"><i className="fa fa-angle-right"></i>Department</a></li>
                                                <li><a href="#"><i className="fa fa-angle-right"></i>Orders</a></li>
                                                <li><a href="#"><i className="fa fa-angle-right"></i>Sale Code</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-9">
                                <div className="row">
                                    <div className="">     
                                      {/*table content*/}
                                      <Product/>
                                    </div>
                                </div>
                                <div className="clearfix"></div>
                            </div>
                        </div>
                    </div>
                </div>
			)
	}
}
export default Content