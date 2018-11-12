import React, { Component } from 'react';

class quickView extends Component {
  render() {
    return (
      <div id = "quickview-wrapper">
      	<div className="modal fade" id="productModal" tabIndex="-1" role="dialog">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                        </div>
                        <div className="modal-body">
                            <div className="modal-product">
                                <div className="product-images">
                                    <div className="main-image images">
                                        <img alt="" src="img/product/static2.jpg"/>
                                    </div>
                                </div>

                                <div className="product-info">
                                    <h1>Diam quis cursus</h1>
                                    <div className="price-box">
                                        <p className="price"><span className="special-price"><span className="amount">$132.00</span></span></p>
                                    </div>
                                    <a href="shop.html" className="see-all">See all features</a>
                                    <div className="quick-add-to-cart">
                                        <form method="post" className="cart">
                                            <div className="numbers-row">
                                                <input type="number" id="french-hens" defaultValue="3"/>
                                            </div>
                                            <button className="single-add-to-cart-button" type="submit">Add to cart</button>
                                        </form>
                                    </div>
                                    <div className="quick-desc">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum.
                                    </div>
                                    <div className="social-sharing">
                                        <div className="widget widget_socialsharing_widget">
                                            <h3 className="widget-title-modal">Share this product</h3>
                                            <ul className="social-icons">
                                                <li><a target="_blank" title="Facebook" href="#" className="facebook social-icon"><i className="fa fa-facebook"></i></a></li>
                                                <li><a target="_blank" title="Twitter" href="#" className="twitter social-icon"><i className="fa fa-twitter"></i></a></li>
                                                <li><a target="_blank" title="Pinterest" href="#" className="pinterest social-icon"><i className="fa fa-pinterest"></i></a></li>
                                                <li><a target="_blank" title="Google +" href="#" className="gplus social-icon"><i className="fa fa-google-plus"></i></a></li>
                                                <li><a target="_blank" title="LinkedIn" href="#" className="linkedin social-icon"><i className="fa fa-linkedin"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      </div>
    );
  }
}

export default quickView;
