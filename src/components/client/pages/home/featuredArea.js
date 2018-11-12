import React, {Component} from 'react';

class FeaturedArea extends Component
{
	render(){
		return (
			<div className="featured-area ptb-90">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12">
                                <div className="section-tab">
                                    <div className="section-tab-menu mb-45 text-center">
                                        <ul role="tablist">
                                            <li role="presentation" className="active text-uppercase"><a href="#man" aria-controls="featured1" role="tab" data-toggle="tab">Man</a></li>
                                            <li role="presentation" className="text-uppercase"><a href="#woman" aria-controls="trendy" role="tab" data-toggle="tab">Woman</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div id="man" role="tabpanel" className="active section-tab-item">
                                <div className="col-md-5 hidden-sm hidden-xs">
                                    <div className="featured-left mt-2">
                                        <a href="#">
                                            <img src="https://www.kiton.it/sites/default/files/Kiton%20-%20Men%20Outfits_1.jpg" alt=""/>
                                            <div className="feature-info text-left">
                                                <h2 className="text-uppercase">men's</h2>
                                                <h3 className="text-uppercase">collection</h3>  
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-md-7">                      
                                    <div className="clearfix"></div>
                                    <div className="tab-content row">
                                        <div  role="tabpanel" className="active section-tab-item">
                                            <div className="feature-slider">
                                                <div className="col-xs-12 col-width">  
                                                    <div className="single-product">
                                                        <div className="single-product-item clearfix">
                                                            <div className="single-product-img clearfix">
                                                                <a href="#">
                                                                    <img className="primary-image" src="https://devitems.com/html/shofixe-preview/shofixe/img/product/16.jpg" alt=""/>
                                                                </a>
                                                                <div className="wish-icon-hover text-center clearfix">
                                                                    <div className="hover-text">
                                                                        <p className="hidden-md">Duis autem vel eum iriure dolor in hendrerit in tate velit esse lestiesequat  </p>
                                                                        <ul>
                                                                            <li><a href="#" data-toggle="tooltip" title="Shopping Cart"><i className="fa fa-shopping-cart"></i></a></li>
                                                                            <li><a className="modal-view" href="#" data-toggle="modal" data-target="#productModal"><i className="fa fa-eye"></i></a></li>
                                                                            <li className="hidden-md"><a href="#" data-toggle="tooltip" title="Compage"><i className="fas fa-sync-alt"></i></a></li>
                                                                            <li><a href="#" data-toggle="tooltip" title="Like it!"><i className="fa fa-heart"></i></a></li>
                                                                        </ul>
                                                                    </div>    
                                                                </div>
                                                            </div>
                                                            <div className="single-product-info clearfix">
                                                                <div className="pro-rating">  
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>  
                                                                </div> 
                                                                <div className="pro-price">
                                                                    <span className="new-price">$150</span>
                                                                    <span className="old-price">$180</span>
                                                                </div> 
                                                                <h3><a href="#">Electria Ostma</a></h3>  
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xs-12 col-width">  
                                                    <div className="single-product">
                                                        <div className="single-product-item">
                                                            <div className="single-product-img clearfix hover-effect">
                                                                <a href="#">
                                                                    <img className="primary-image" src="https://devitems.com/html/shofixe-preview/shofixe/img/product/16.jpg" alt=""/>
                                                                </a>
                                                                <div className="wish-icon-hover text-center clearfix">
                                                                    <div className="hover-text">
                                                                        <p className="hidden-md">Duis autem vel eum iriure dolor in hendrerit in tate velit esse lestiesequat  </p>
                                                                        <ul>
                                                                            <li><a href="#" data-toggle="tooltip" title="Shopping Cart"><i className="fa fa-shopping-cart"></i></a></li>
                                                                            <li><a className="modal-view" href="#" data-toggle="modal" data-target="#productModal"><i className="fa fa-eye"></i></a></li>
                                                                            <li className="hidden-md"><a href="#" data-toggle="tooltip" title="Compage"><i className="fas fa-sync-alt"></i></a></li>
                                                                            <li><a href="#" data-toggle="tooltip" title="Like it!"><i className="fa fa-heart"></i></a></li>
                                                                        </ul>
                                                                    </div>    
                                                                </div>
                                                            </div>
                                                            <div className="single-product-info clearfix">
                                                                <div className="pro-rating">   
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                </div> 
                                                                <div className="pro-price">
                                                                    <span className="new-price">$130</span>
                                                                    <span className="old-price">$150</span>
                                                                </div> 
                                                                <h3><a href="#">Tletria postma</a></h3>  
                                                            </div> 
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xs-12 col-width">  
                                                    <div className="single-product">
                                                        <div className="single-product-item">
                                                            <div className="single-product-img clearfix hover-effect">
                                                                <a href="#">
                                                                    <img className="primary-image" src="https://devitems.com/html/shofixe-preview/shofixe/img/product/16.jpg" alt=""/>
                                                                </a>
                                                                <div className="wish-icon-hover text-center clearfix">
                                                                    <div className="hover-text">
                                                                        <p className="hidden-md">Duis autem vel eum iriure dolor in hendrerit in tate velit esse lestiesequat  </p>
                                                                        <ul>
                                                                            <li><a href="#" data-toggle="tooltip" title="Shopping Cart"><i className="fa fa-shopping-cart"></i></a></li>
                                                                            <li><a className="modal-view" href="#" data-toggle="modal" data-target="#productModal"><i className="fa fa-eye"></i></a></li>
                                                                            <li className="hidden-md"><a href="#" data-toggle="tooltip" title="Compage"><i className="fas fa-sync-alt"></i></a></li>
                                                                            <li><a href="#" data-toggle="tooltip" title="Like it!"><i className="fa fa-heart"></i></a></li>
                                                                        </ul>
                                                                    </div>    
                                                                </div>
                                                            </div>
                                                            <div className="single-product-info clearfix">
                                                                <div className="pro-rating">     
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                </div> 
                                                                <div className="pro-price">
                                                                    <span className="new-price">$120</span>
                                                                    <span className="old-price">$150</span>
                                                                </div> 
                                                                <h3><a href="#">Celletria ostma</a></h3>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xs-12 col-width">  
                                                    <div className="single-product">
                                                        <div className="single-product-item">
                                                            <div className="single-product-img clearfix hover-effect">
                                                                <a href="#">
                                                                    <img className="primary-image" src="https://devitems.com/html/shofixe-preview/shofixe/img/product/16.jpg" alt=""/>
                                                                </a>
                                                                <div className="wish-icon-hover text-center clearfix">
                                                                    <div className="hover-text">
                                                                        <p className="hidden-md">Duis autem vel eum iriure dolor in hendrerit in tate velit esse lestiesequat  </p>
                                                                        <ul>
                                                                            <li><a href="#" data-toggle="tooltip" title="Shopping Cart"><i className="fa fa-shopping-cart"></i></a></li>
                                                                            <li><a className="modal-view" href="#" data-toggle="modal" data-target="#productModal"><i className="fa fa-eye"></i></a></li>
                                                                            <li className="hidden-md"><a href="#" data-toggle="tooltip" title="Compage"><i className="fas fa-sync-alt"></i></a></li>
                                                                            <li><a href="#" data-toggle="tooltip" title="Like it!"><i className="fa fa-heart"></i></a></li>
                                                                        </ul>
                                                                    </div>    
                                                                </div>
                                                            </div>
                                                            <div className="single-product-info clearfix">
                                                                <div className="pro-rating">  
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                </div>
                                                                <div className="pro-price">
                                                                    <span className="new-price">$150</span>
                                                                    <span className="old-price">$180</span>
                                                                </div>  
                                                                <h3><a href="#">Eletria ostma</a></h3>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xs-12 col-width">  
                                                    <div className="single-product">
                                                        <div className="single-product-item">
                                                            <div className="single-product-img clearfix hover-effect">
                                                                <a href="#">
                                                                    <img className="primary-image" src="https://devitems.com/html/shofixe-preview/shofixe/img/product/16.jpg" alt=""/>
                                                                </a>
                                                                <div className="wish-icon-hover text-center clearfix">
                                                                    <div className="hover-text">
                                                                        <p className="hidden-md">Duis autem vel eum iriure dolor in hendrerit in tate velit esse lestiesequat  </p>
                                                                        <ul>
                                                                            <li><a href="#" data-toggle="tooltip" title="Shopping Cart"><i className="fa fa-shopping-cart"></i></a></li>
                                                                            <li><a className="modal-view" href="#" data-toggle="modal" data-target="#productModal"><i className="fa fa-eye"></i></a></li>
                                                                            <li className="hidden-md"><a href="#" data-toggle="tooltip" title="Compage"><i className="fas fa-sync-alt"></i></a></li>
                                                                            <li><a href="#" data-toggle="tooltip" title="Like it!"><i className="fa fa-heart"></i></a></li>
                                                                        </ul>
                                                                    </div>    
                                                                </div>
                                                            </div>
                                                            <div className="single-product-info clearfix">
                                                                <div className="pro-rating">
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                </div>
                                                                <div className="pro-price">
                                                                    <span className="new-price">$100</span>
                                                                    <span className="old-price">$130</span>
                                                                </div>  
                                                                <h3><a href="#">Mortria ostma</a></h3>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xs-12 col-width">  
                                                    <div className="single-product">
                                                        <div className="single-product-item">
                                                            <div className="single-product-img clearfix hover-effect">
                                                                <a href="#">
                                                                    <img className="primary-image" src="https://devitems.com/html/shofixe-preview/shofixe/img/product/16.jpg" alt=""/>
                                                                </a>
                                                                <div className="wish-icon-hover text-center clearfix">
                                                                    <div className="hover-text">
                                                                        <p className="hidden-md">Duis autem vel eum iriure dolor in hendrerit in tate velit esse lestiesequat  </p>
                                                                        <ul>
                                                                            <li><a href="#" data-toggle="tooltip" title="Shopping Cart"><i className="fa fa-shopping-cart"></i></a></li>
                                                                            <li><a className="modal-view" href="#" data-toggle="modal" data-target="#productModal"><i className="fa fa-eye"></i></a></li>
                                                                            <li className="hidden-md"><a href="#" data-toggle="tooltip" title="Compage"><i className="fas fa-sync-alt"></i></a></li>
                                                                            <li><a href="#" data-toggle="tooltip" title="Like it!"><i className="fa fa-heart"></i></a></li>
                                                                        </ul>
                                                                    </div>    
                                                                </div>
                                                            </div>
                                                            <div className="single-product-info clearfix">
                                                                <div className="pro-rating">  
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                </div>
                                                                <div className="pro-price">
                                                                    <span className="new-price">$120</span>
                                                                    <span className="old-price">$150</span>
                                                                </div>      
                                                                <h3><a href="#">Celletria ostma</a></h3>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="arrival-button text-left">
                                        <a href='#' className='section-button mt-30'>View More</a>
                                    </div>  
                                    </div>  
                                </div>
                            </div>
                            <div id="woman" role="tabpanel" className="section-tab-item">
                                <div className="col-md-7">                      
                                    <div className="clearfix"></div>
                                    <div className="tab-content row">
                                        <div role="tabpanel" className="active section-tab-item">
                                            <div className="feature-slider">
                                                <div className="col-xs-12 col-width">  
                                                    <div className="single-product">
                                                        <div className="single-product-item clearfix">
                                                            <div className="single-product-img clearfix">
                                                                <a href="#">
                                                                    <img className="primary-image" src="https://devitems.com/html/shofixe-preview/shofixe/img/product/12.jpg" alt=""/>
                                                                </a>
                                                                <div className="wish-icon-hover text-center clearfix">
                                                                    <div className="hover-text">
                                                                        <p className="hidden-md">Duis autem vel eum iriure dolor in hendrerit in tate velit esse lestiesequat  </p>
                                                                        <ul>
                                                                            <li><a href="#" data-toggle="tooltip" title="Shopping Cart"><i className="fa fa-shopping-cart"></i></a></li>
                                                                            <li><a className="modal-view" href="#" data-toggle="modal" data-target="#productModal"><i className="fa fa-eye"></i></a></li>
                                                                            <li className="hidden-md"><a href="#" data-toggle="tooltip" title="Compage"><i className="fas fa-sync-alt"></i></a></li>
                                                                            <li><a href="#" data-toggle="tooltip" title="Like it!"><i className="fa fa-heart"></i></a></li>
                                                                        </ul>
                                                                    </div>    
                                                                </div>
                                                            </div>
                                                            <div className="single-product-info clearfix">
                                                                <div className="pro-rating">  
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>  
                                                                </div> 
                                                                <div className="pro-price">
                                                                    <span className="new-price">$150</span>
                                                                    <span className="old-price">$180</span>
                                                                </div> 
                                                                <h3><a href="#">Electria Ostma</a></h3>  
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xs-12 col-width">  
                                                    <div className="single-product">
                                                        <div className="single-product-item">
                                                            <div className="single-product-img clearfix hover-effect">
                                                                <a href="#">
                                                                    <img className="primary-image" src="https://devitems.com/html/shofixe-preview/shofixe/img/product/12.jpg" alt=""/>
                                                                </a>
                                                                <div className="wish-icon-hover text-center clearfix">
                                                                    <div className="hover-text">
                                                                        <p className="hidden-md">Duis autem vel eum iriure dolor in hendrerit in tate velit esse lestiesequat  </p>
                                                                        <ul>
                                                                            <li><a href="#" data-toggle="tooltip" title="Shopping Cart"><i className="fa fa-shopping-cart"></i></a></li>
                                                                            <li><a className="modal-view" href="#" data-toggle="modal" data-target="#productModal"><i className="fa fa-eye"></i></a></li>
                                                                            <li className="hidden-md"><a href="#" data-toggle="tooltip" title="Compage"><i className="fas fa-sync-alt"></i></a></li>
                                                                            <li><a href="#" data-toggle="tooltip" title="Like it!"><i className="fa fa-heart"></i></a></li>
                                                                        </ul>
                                                                    </div>    
                                                                </div>
                                                            </div>
                                                            <div className="single-product-info clearfix">
                                                                <div className="pro-rating">   
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                </div> 
                                                                <div className="pro-price">
                                                                    <span className="new-price">$130</span>
                                                                    <span className="old-price">$150</span>
                                                                </div> 
                                                                <h3><a href="#">Tletria postma</a></h3>  
                                                            </div> 
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xs-12 col-width">  
                                                    <div className="single-product">
                                                        <div className="single-product-item">
                                                            <div className="single-product-img clearfix hover-effect">
                                                                <a href="#">
                                                                    <img className="primary-image" src="https://devitems.com/html/shofixe-preview/shofixe/img/product/12.jpg" alt=""/>
                                                                </a>
                                                                <div className="wish-icon-hover text-center clearfix">
                                                                    <div className="hover-text">
                                                                        <p className="hidden-md">Duis autem vel eum iriure dolor in hendrerit in tate velit esse lestiesequat  </p>
                                                                        <ul>
                                                                            <li><a href="#" data-toggle="tooltip" title="Shopping Cart"><i className="fa fa-shopping-cart"></i></a></li>
                                                                            <li><a className="modal-view" href="#" data-toggle="modal" data-target="#productModal"><i className="fa fa-eye"></i></a></li>
                                                                            <li className="hidden-md"><a href="#" data-toggle="tooltip" title="Compage"><i className="fas fa-sync-alt"></i></a></li>
                                                                            <li><a href="#" data-toggle="tooltip" title="Like it!"><i className="fa fa-heart"></i></a></li>
                                                                        </ul>
                                                                    </div>    
                                                                </div>
                                                            </div>
                                                            <div className="single-product-info clearfix">
                                                                <div className="pro-rating">     
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                </div> 
                                                                <div className="pro-price">
                                                                    <span className="new-price">$120</span>
                                                                    <span className="old-price">$150</span>
                                                                </div> 
                                                                <h3><a href="#">Celletria ostma</a></h3>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xs-12 col-width">  
                                                    <div className="single-product">
                                                        <div className="single-product-item">
                                                            <div className="single-product-img clearfix hover-effect">
                                                                <a href="#">
                                                                    <img className="primary-image" src="https://devitems.com/html/shofixe-preview/shofixe/img/product/12.jpg" alt=""/>
                                                                </a>
                                                                <div className="wish-icon-hover text-center clearfix">
                                                                    <div className="hover-text">
                                                                        <p className="hidden-md">Duis autem vel eum iriure dolor in hendrerit in tate velit esse lestiesequat  </p>
                                                                        <ul>
                                                                            <li><a href="#" data-toggle="tooltip" title="Shopping Cart"><i className="fa fa-shopping-cart"></i></a></li>
                                                                            <li><a className="modal-view" href="#" data-toggle="modal" data-target="#productModal"><i className="fa fa-eye"></i></a></li>
                                                                            <li className="hidden-md"><a href="#" data-toggle="tooltip" title="Compage"><i className="fas fa-sync-alt"></i></a></li>
                                                                            <li><a href="#" data-toggle="tooltip" title="Like it!"><i className="fa fa-heart"></i></a></li>
                                                                        </ul>
                                                                    </div>    
                                                                </div>
                                                            </div>
                                                            <div className="single-product-info clearfix">
                                                                <div className="pro-rating">  
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                </div>
                                                                <div className="pro-price">
                                                                    <span className="new-price">$150</span>
                                                                    <span className="old-price">$180</span>
                                                                </div>  
                                                                <h3><a href="#">Eletria ostma</a></h3>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xs-12 col-width">  
                                                    <div className="single-product">
                                                        <div className="single-product-item">
                                                            <div className="single-product-img clearfix hover-effect">
                                                                <a href="#">
                                                                    <img className="primary-image" src="https://devitems.com/html/shofixe-preview/shofixe/img/product/12.jpg" alt=""/>
                                                                </a>
                                                                <div className="wish-icon-hover text-center clearfix">
                                                                    <div className="hover-text">
                                                                        <p className="hidden-md">Duis autem vel eum iriure dolor in hendrerit in tate velit esse lestiesequat  </p>
                                                                        <ul>
                                                                            <li><a href="#" data-toggle="tooltip" title="Shopping Cart"><i className="fa fa-shopping-cart"></i></a></li>
                                                                            <li><a className="modal-view" href="#" data-toggle="modal" data-target="#productModal"><i className="fa fa-eye"></i></a></li>
                                                                            <li className="hidden-md"><a href="#" data-toggle="tooltip" title="Compage"><i className="fas fa-sync-alt"></i></a></li>
                                                                            <li><a href="#" data-toggle="tooltip" title="Like it!"><i className="fa fa-heart"></i></a></li>
                                                                        </ul>
                                                                    </div>    
                                                                </div>
                                                            </div>
                                                            <div className="single-product-info clearfix">
                                                                <div className="pro-rating">
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                </div>
                                                                <div className="pro-price">
                                                                    <span className="new-price">$100</span>
                                                                    <span className="old-price">$130</span>
                                                                </div>  
                                                                <h3><a href="#">Mortria ostma</a></h3>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xs-12 col-width">  
                                                    <div className="single-product">
                                                        <div className="single-product-item">
                                                            <div className="single-product-img clearfix hover-effect">
                                                                <a href="#">
                                                                    <img className="primary-image" src="https://devitems.com/html/shofixe-preview/shofixe/img/product/12.jpg" alt=""/>
                                                                </a>
                                                                <div className="wish-icon-hover text-center clearfix">
                                                                    <div className="hover-text">
                                                                        <p className="hidden-md">Duis autem vel eum iriure dolor in hendrerit in tate velit esse lestiesequat  </p>
                                                                        <ul>
                                                                            <li><a href="#" data-toggle="tooltip" title="Shopping Cart"><i className="fa fa-shopping-cart"></i></a></li>
                                                                            <li><a className="modal-view" href="#" data-toggle="modal" data-target="#productModal"><i className="fa fa-eye"></i></a></li>
                                                                            <li className="hidden-md"><a href="#" data-toggle="tooltip" title="Compage"><i className="fas fa-sync-alt"></i></a></li>
                                                                            <li><a href="#" data-toggle="tooltip" title="Like it!"><i className="fa fa-heart"></i></a></li>
                                                                        </ul>
                                                                    </div>    
                                                                </div>
                                                            </div>
                                                            <div className="single-product-info clearfix">
                                                                <div className="pro-rating">  
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                </div>
                                                                <div className="pro-price">
                                                                    <span className="new-price">$120</span>
                                                                    <span className="old-price">$150</span>
                                                                </div>      
                                                                <h3><a href="#">Celletria ostma</a></h3>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>    
                                </div> 
                                <div className="col-md-5 hidden-sm hidden-xs">
                                    <div className="featured-left mt-2 pull-right">
                                        <a href="#">
                                            <img src="https://devitems.com/html/shofixe-preview/shofixe/img/product/b2.jpg" alt=""/>
                                            <div className="feature-info text-right">
                                                <h2 className="text-uppercase">women's</h2>
                                                <h3 className="text-uppercase">collection</h3>  
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="arrival-button text-center mt-30">
                                    <a href="#" className="section-button">View More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>  
			)
	}
}
export default FeaturedArea;