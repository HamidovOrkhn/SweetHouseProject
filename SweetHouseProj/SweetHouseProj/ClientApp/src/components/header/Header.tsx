
import * as React from 'react';
import { connect } from 'react-redux';
import logo from '../images/bar.jpg';
import { RouteComponentProps } from 'react-router';
import { Link } from "react-router-dom";
class Header extends React.Component {
    public render() {
        return (
            <React.Fragment>
                <div className="hotale-header-background-transparent">
                    <div className="hotale-top-bar ">
                        <div className="hotale-top-bar-background">
                        </div>
                        <div className="hotale-top-bar-container hotale-container ">
                            <div className="hotale-top-bar-container-inner clearfix">
                                <div className="hotale-top-bar-left hotale-item-pdlr">
                                    <div className="hotale-top-bar-left-text">
                                        <i className="icon-phone" style={{ fontSize: '15px', color: '#ffffff', marginRight: '10px' }}>
                                        </i>
                                        1-634-567-34
                                        <i className="icon-envelope" style={{ fontSize: '15px', color: '#ffffff', marginLeft: '25px', marginRight: '10px' }}>
                                        </i>Book@Hotale.co
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <header className="hotale-header-wrap hotale-header-style-plain hotale-style-center-menu hotale-sticky-navigation hotale-style-slide" data-navigation-offset={75} style={{ display: 'block' }}>
                        <div className="hotale-header-background" />
                        <div className="hotale-header-container  hotale-container">
                            <div className="hotale-header-container-inner clearfix">
                                <div className="hotale-logo  hotale-item-pdlr"><div className="hotale-logo-inner"><a className="hotale-fixed-nav-logo" href="index.html"><img src="../../../a6e8z9v6.stackpathcdn.com/hotale/resort/wp-content/uploads/sites/2/2022/05/logo-nx1.png" alt="" width={147} height={37} title="logo-nx1" srcSet="https://a6e8z9v6.stackpathcdn.com/hotale/resort/wp-content/uploads/sites/2/2022/05/logo-nx1.png 1x, https://a6e8z9v6.stackpathcdn.com/hotale/resort/wp-content/uploads/sites/2/2022/05/logo-nx2-1.png 2x" /></a><a className=" hotale-orig-logo" href="index.html"><img src="../../../a6e8z9v6.stackpathcdn.com/hotale/resort/wp-content/uploads/sites/2/2022/05/logo-nx1.png" alt="" width={147} height={37} title="logo-nx1" srcSet="https://a6e8z9v6.stackpathcdn.com/hotale/resort/wp-content/uploads/sites/2/2022/05/logo-nx1.png 1x, https://a6e8z9v6.stackpathcdn.com/hotale/resort/wp-content/uploads/sites/2/2022/05/logo-nx2-1.png 2x" /></a></div></div>			<div className="hotale-navigation hotale-item-pdlr clearfix ">
                                    <div className="hotale-main-menu sf-js-enabled sf-arrows" id="hotale-main-menu" style={{ touchAction: 'pan-y' }}><ul id="menu-main-navigation-1" className="sf-menu"><li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-14980 current_page_item current-menu-ancestor current-menu-parent current_page_parent current_page_ancestor menu-item-has-children menu-item-15531 hotale-normal-menu"><Link className="sf-with-ul-pre sf-with-ul" to="/">Ana Səhifə</Link>
                                        <ul className="sub-menu" style={{ display: 'none' }}>
                                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-14980 current_page_item menu-item-15878" data-size={60}><a href="index.html">Home – Resort 1</a></li>
                                            <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-15879" data-size={60}><a target="_blank" href="https://demo.goodlayers.com/hotale/resort2/">Home – Resort 2</a></li>
                                            <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-15877" data-size={60}><a target="_blank" href="https://demo.goodlayers.com/hotale/hotel1/">Home – Hotel 1</a></li>
                                            <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-15880" data-size={60}><a target="_blank" href="https://demo.goodlayers.com/hotale/hotel2/">Home – Hotel 2</a></li>
                                            <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-15881" data-size={60}><a target="_blank" href="https://demo.goodlayers.com/hotale/apartment/">Home – Apartment</a></li>
                                            <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-15876" data-size={60}><a target="_blank" href="https://demo.goodlayers.com/hotale/apartment2/">Home – Apartment 2</a></li>
                                        </ul>
                                    </li>
                                        <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-15533 hotale-normal-menu"><Link className="sf-with-ul-pre sf-with-ul" to="/aboutus">Haqqımızda</Link>
                                        </li>
                                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-15712 hotale-normal-menu"><Link className="sf-with-ul-pre sf-with-ul" to="/rooms">Otaqlar</Link>
                                            <ul className="sub-menu" style={{ display: 'none' }}>
                                                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-15713" data-size={60}><a href="room-grid-style-1/index.html">Room Grid Style 1</a></li>
                                                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-15727" data-size={60}><a href="room-grid-style-2/index.html">Room Grid Style 2</a></li>
                                                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-15726" data-size={60}><a href="room-grid-style-3/index.html">Room Grid Style 3</a></li>
                                                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-15725" data-size={60}><a href="room-grid-style-4/index.html">Room Grid Style 4</a></li>
                                                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-15734" data-size={60}><a href="room-modern-style/index.html">Room Modern Style</a></li>
                                                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-15738" data-size={60}><a href="room-side-thumbnail/index.html">Room Side Thumbnail</a></li>
                                            </ul>
                                        </li>
                                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-15617 hotale-normal-menu"><Link className="sf-with-ul-pre sf-with-ul" to="/blogs">Bloglar</Link>
                                            <ul className="sub-menu" style={{ display: 'none' }}>
                                                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-15614" data-size={60}><a href="blog-3-columns-with-frame/index.html" className="sf-with-ul-pre sf-with-ul">Blog Columns</a>
                                                    <ul className="sub-menu" style={{ display: 'none' }}>
                                                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-15594"><a href="blog-2-columns/index.html">Blog 2 Columns</a></li>
                                                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-15595"><a href="blog-2-columns-with-frame/index.html">Blog 2 Columns With Frame</a></li>
                                                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-15596"><a href="blog-3-columns/index.html">Blog 3 Columns</a></li>
                                                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-15598"><a href="blog-3-columns-with-frame-post-format/index.html">Blog 3 Columns With Frame / Post Format</a></li>
                                                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-15597"><a href="blog-3-columns-with-frame/index.html">Blog 3 Columns With Frame</a></li>
                                                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-15599"><a href="blog-4-columns/index.html">Blog 4 Columns</a></li>
                                                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-15600"><a href="blog-4-columns-with-frame/index.html">Blog 4 Columns With Frame</a></li>
                                                    </ul>
                                                </li>
                                                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-15615" data-size={60}><a href="blog-full-right-sidebar/index.html" className="sf-with-ul-pre sf-with-ul">Blog Full</a>
                                                    <ul className="sub-menu" style={{ display: 'none' }}>
                                                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-15605"><a href="blog-full-right-sidebar/index.html">Blog Full Right Sidebar</a></li>
                                                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-15606"><a href="blog-full-right-sidebar-with-frame/index.html">Blog Full Right Sidebar With Frame</a></li>
                                                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-15603"><a href="blog-full-left-sidebar/index.html">Blog Full Left Sidebar</a></li>
                                                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-15604"><a href="blog-full-left-sidebar-with-frame/index.html">Blog Full Left Sidebar With Frame</a></li>
                                                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-15601"><a href="blog-full-both-sidebar/index.html">Blog Full Both Sidebar</a></li>
                                                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-15602"><a href="blog-full-both-sidebar-with-frame/index.html">Blog Full Both Sidebar With Frame</a></li>
                                                    </ul>
                                                </li>
                                                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-15616" data-size={60}><a href="blog-grid-3-columns/index.html" className="sf-with-ul-pre sf-with-ul">Blog Grid</a>
                                                    <ul className="sub-menu" style={{ display: 'none' }}>
                                                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-15607"><a href="blog-grid-2-columns/index.html">Blog Grid 2 Columns</a></li>
                                                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-15608"><a href="blog-grid-2-columns-no-space/index.html">Blog Grid 2 Columns No Space</a></li>
                                                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-15609"><a href="blog-grid-3-columns/index.html">Blog Grid 3 Columns</a></li>
                                                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-15610"><a href="blog-grid-3-columns-no-space/index.html">Blog Grid 3 Columns No Space</a></li>
                                                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-15611"><a href="blog-grid-4-columns/index.html">Blog Grid 4 Columns</a></li>
                                                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-15612"><a href="blog-grid-4-columns-no-space/index.html">Blog Grid 4 Columns No Space</a></li>
                                                    </ul>
                                                </li>
                                                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-15618" data-size={60}><a href="#" className="sf-with-ul-pre sf-with-ul">Single Posts</a>
                                                    <ul className="sub-menu" style={{ display: 'none' }}>
                                                        <li className="menu-item menu-item-type-post_type menu-item-object-post menu-item-15625"><a href="cities-to-visit-for-your-first-time-in-europe/index.html">Just A Post</a></li>
                                                        <li className="menu-item menu-item-type-post_type menu-item-object-post menu-item-15619"><a href="audio-post-format/index.html">Audio Post Format</a></li>
                                                        <li className="menu-item menu-item-type-post_type menu-item-object-post menu-item-15620"><a href="video-post-format/index.html">Video Post Format</a></li>
                                                        <li className="menu-item menu-item-type-post_type menu-item-object-post menu-item-15621"><a href="quote-post-format/index.html">Quote Post Format</a></li>
                                                        <li className="menu-item menu-item-type-post_type menu-item-object-post menu-item-15623"><a href="gallery-post-format/index.html">Gallery Post Format</a></li>
                                                        <li className="menu-item menu-item-type-post_type menu-item-object-post menu-item-15624"><a href="aside-post-format/index.html">Aside Post Format</a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-15537 hotale-normal-menu">
                                            <Link className="sf-with-ul-pre sf-with-ul" to="/contactus">Əlaqə</Link>
                                        </li>
                                    </ul><div className="hotale-navigation-slide-bar  hotale-navigation-slide-bar-style-2 hotale-left" data-size-offset={0} data-width="19px" id="hotale-navigation-slide-bar" style={{ width: '19px', left: '358.313px', display: 'block', overflow: 'hidden' }} />
                                    </div>
                                    <div className="hotale-main-menu-right-wrap clearfix  hotale-item-mglr hotale-navigation-top">
                                        <div className="tourmaster-room-navigation-checkout-wrap ">
                                            <a id="tourmaster-room-navigation-checkout-button" className="tourmaster-room-navigation-checkout-button" href="room-search/indexae75.html?room_amount=1&room-search=" data-checkout-label="Check Out" data-label="Book Now">
                                                Book Now
                                                <span className="tourmaster-count">0</span>
                                            </a>
                                            <div className="tourmaster-room-cart-item-wrap">
                                                <div className="tourmaster-room-cart-items">
                                                    <ul />
                                                    <a className="tourmaster-checkout-button" href="payment-summary/indexbaa2.html?pt=room&type=cart">Check Out</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>{/* hotale-navigation */}
                            </div>{/* hotale-header-inner */}
                        </div>{/* hotale-header-container */}
                    </header>
                </div>
            </React.Fragment>
        );
    }
}

export default connect()(Header);
