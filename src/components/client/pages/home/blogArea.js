import React, {Component} from 'react';

class BlogArea extends Component
{
	render(){
		return (
			<div className="blog-area ptb-90">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12">
                                <div className="section-tab">
                                    <div className="section-tab-menu mb-45 text-center">
                                        <ul role="tablist">
                                            <li role="presentation" className="active text-uppercase"><a href="#blog" aria-controls="blog" role="tab" data-toggle="tab">from blog</a></li>
                                            <li role="presentation" className="text-uppercase"><a href="#tweet" aria-controls="tweet" role="tab" data-toggle="tab">latest tweet</a></li>
                                            <li role="presentation" className="text-uppercase"><a href="#instagram" aria-controls="instagram" role="tab" data-toggle="tab">instagram</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="clearfix"></div>
                            <div className="tab-content row">
                                <div id="blog" role="tabpanel" className="active section-tab-item">
                                    <div className="col-md-4 col-sm-6 col-xs-12">
                                        <div className="single-blog">
                                            <div className="single-blog-img">
                                                <a href="#">
                                                    <img src="https://devitems.com/html/shofixe-preview/shofixe/img/blog/1.jpg" alt="blog"/>
                                                </a>
                                                <div className="blog-date text-center">
                                                    <h2>05 <span>Feb</span></h2>    
                                                </div>
                                            </div>
                                            <div className="single-blog-info mt-25">
                                                <h4><a href="blog.html">Beautiful Collection For Beauty</a></h4>
                                                <p>But I must explain to you how all this mistaken idea  of denouncing pleasure and praising pain was bornad will give you a complete pain was praising</p>
                                                <div className="button-comments">
                                                    <div className="read-button text-center">
                                                        <a className="read-more text-uppercase" href="blog.html">read More <i className="fa fa-angle-double-right"></i></a>
                                                    </div>
                                                    <div className="comment-like">
                                                        <ul>
                                                            <li><i className="fa fa-comments"></i>06 comments</li>
                                                            <li><i className="fa fa-heart"></i>25 likes</li>
                                                        </ul>
                                                    </div> 
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-sm-6 col-xs-12">
                                        <div className="single-blog">
                                            <div className="single-blog-img">
                                                <a href="#">
                                                    <img src="https://devitems.com/html/shofixe-preview/shofixe/img/blog/2.jpg" alt="blog"/>
                                                </a>
                                                <div className="blog-date text-center">
                                                    <h2>09 <span>Feb</span></h2>    
                                                </div>
                                            </div>
                                            <div className="single-blog-info mt-25">
                                                <h4><a href="blog.html">Fashion Show With New Trend</a></h4>
                                                <p>But I must explain to you how all this mistaken idea  of denouncing pleasure and praising pain was bornad will give you a complete pain was praising</p>
                                                <div className="button-comments">
                                                    <div className="read-button text-center">
                                                        <a className="read-more text-uppercase" href="blog.html">read More <i className="fa fa-angle-double-right"></i></a>
                                                    </div>
                                                    <div className="comment-like">
                                                        <ul>
                                                            <li><i className="fa fa-comments"></i>10 comments</li>
                                                            <li><i className="fa fa-heart"></i>20 likes</li>
                                                        </ul>
                                                    </div> 
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 hidden-sm col-xs-12">
                                        <div className="single-blog-list">
                                            <div className="blog-date mr-25 text-center">
                                                <h2>12 <span>Feb</span></h2>    
                                            </div>
                                            <div className="blog-list-info single-blog-info mb-25">
                                                <h4><a href="blog.html">Men’s New Trend</a></h4>
                                                <p>But I must explain to you how all this mistaken idea  of denouncing pleasure</p>
                                            </div>
                                        </div>
                                        <div className="single-blog-list">
                                            <div className="blog-date mr-25 text-center">
                                                <h2>15 <span>Feb</span></h2>    
                                            </div>
                                            <div className="blog-list-info single-blog-info mb-25">
                                                <h4><a href="blog.html">Fashion Show</a></h4>
                                                <p>But I must explain to you how all this mistaken idea  of denouncing pleasure</p>
                                            </div>
                                        </div>
                                        <div className="single-blog-list">
                                            <div className="blog-date mr-25 text-center">
                                                <h2>20 <span>Feb</span></h2>    
                                            </div>
                                            <div className="blog-list-info single-blog-info mb-25">
                                                <h4><a href="blog.html">Dress for Curte Gril</a></h4>
                                                <p>But I must explain to you how all this mistaken idea  of denouncing pleasure</p>
                                            </div>
                                        </div>
                                        <div className="single-blog-list hidden-md">
                                            <div className="blog-date mr-25 text-center">
                                                <h2>09 <span>Feb</span></h2>    
                                            </div>
                                            <div className="blog-list-info single-blog-info mb-25">
                                                <h4><a href="blog.html">Latest Handbag Collection</a></h4>
                                                <p>But I must explain to you how all this mistaken idea  of denouncing pleasure</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="tweet" role="tabpanel" className="section-tab-item">
                                    <div className="col-md-4">
                                        <div className="single-twitter mb-10">
                                            <div className="twitter-icon">
                                                <img src="img/icon/twitter.png" alt=""/>
                                            </div>
                                            <div className="twitter-feed">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur maiores rem dolores. <a>-jan 18, 2016</a></p>
                                            </div>
                                        </div>
                                        <div className="single-twitter mb-10">
                                            <div className="twitter-icon">
                                                <img src="img/icon/twitter.png" alt=""/>
                                            </div>
                                            <div className="twitter-feed">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur maiores rem dolores. <a>-jan 18, 2016</a></p>
                                            </div>
                                        </div>
                                        <div className="single-twitter">
                                            <div className="twitter-icon">
                                                <img src="img/icon/twitter.png" alt=""/>
                                            </div>
                                            <div className="twitter-feed">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur maiores rem dolores. <a>-jan 18, 2016</a></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="single-twitter mb-10">
                                            <div className="twitter-icon">
                                                <img src="img/icon/twitter.png" alt=""/>
                                            </div>
                                            <div className="twitter-feed">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur maiores rem dolores. <a>-jan 18, 2016</a></p>
                                            </div>
                                        </div>
                                        <div className="single-twitter mb-10">
                                            <div className="twitter-icon">
                                                <img src="img/icon/twitter.png" alt=""/>
                                            </div>
                                            <div className="twitter-feed">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur maiores rem dolores. <a>-jan 18, 2016</a></p>
                                            </div>
                                        </div>
                                        <div className="single-twitter">
                                            <div className="twitter-icon">
                                                <img src="img/icon/twitter.png" alt=""/>
                                            </div>
                                            <div className="twitter-feed">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur maiores rem dolores. <a>-jan 18, 2016</a></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="single-twitter mb-10">
                                            <div className="twitter-icon">
                                                <img src="img/icon/twitter.png" alt=""/>
                                            </div>
                                            <div className="twitter-feed">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur maiores rem dolores. <a>-jan 18, 2016</a></p>
                                            </div>
                                        </div>
                                        <div className="single-twitter mb-10">
                                            <div className="twitter-icon">
                                                <img src="img/icon/twitter.png" alt=""/>
                                            </div>
                                            <div className="twitter-feed">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur maiores rem dolores. <a>-jan 18, 2016</a></p>
                                            </div>
                                        </div>
                                        <div className="single-twitter">
                                            <div className="twitter-icon">
                                                <img src="img/icon/twitter.png" alt=""/>
                                            </div>
                                            <div className="twitter-feed">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur maiores rem dolores. <a>-jan 18, 2016</a></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="instagram" role="tabpanel" className="section-tab-item">
                                    <div className="row mb-25">
                                        <div className="col-md-4">
                                            <div className="single-instagram">
                                                <a href="#">
                                                    <img src="img/blog/1.jpg" alt="blog"/>
                                                </a>    
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="single-instagram">
                                                <a href="#">
                                                    <img src="img/blog/2.jpg" alt="blog"/>
                                                </a>    
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="single-instagram">
                                                <a href="#">
                                                    <img src="img/blog/1.jpg" alt="blog"/>
                                                </a>  
                                            </div>
                                        </div>    
                                    </div>
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="single-instagram">
                                                <a href="#">
                                                    <img src="img/blog/2.jpg" alt="blog"/>
                                                </a>    
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="single-instagram">
                                                <a href="#">
                                                    <img src="img/blog/1.jpg" alt="blog"/>
                                                </a>    
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                        <div className="single-instagram">
                                            <a href="#">
                                                <img src="img/blog/2.jpg" alt="blog"/>
                                            </a>  
                                        </div>
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
export default BlogArea;