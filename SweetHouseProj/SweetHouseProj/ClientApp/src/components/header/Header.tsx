
import * as React from 'react';
import { connect } from 'react-redux';
import logo from '../images/bar.jpg';
import { RouteComponentProps } from 'react-router';
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
                                    <div className="hotale-main-menu sf-js-enabled sf-arrows" id="hotale-main-menu" style={{ touchAction: 'pan-y' }}><ul id="menu-main-navigation-1" className="sf-menu"><li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-14980 current_page_item current-menu-ancestor current-menu-parent current_page_parent current_page_ancestor menu-item-has-children menu-item-15531 hotale-normal-menu"><a href="index.html" className="sf-with-ul-pre sf-with-ul">Home</a>
                                        <ul className="sub-menu" style={{ display: 'none' }}>
                                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-14980 current_page_item menu-item-15878" data-size={60}><a href="index.html">Home – Resort 1</a></li>
                                            <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-15879" data-size={60}><a target="_blank" href="https://demo.goodlayers.com/hotale/resort2/">Home – Resort 2</a></li>
                                            <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-15877" data-size={60}><a target="_blank" href="https://demo.goodlayers.com/hotale/hotel1/">Home – Hotel 1</a></li>
                                            <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-15880" data-size={60}><a target="_blank" href="https://demo.goodlayers.com/hotale/hotel2/">Home – Hotel 2</a></li>
                                            <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-15881" data-size={60}><a target="_blank" href="https://demo.goodlayers.com/hotale/apartment/">Home – Apartment</a></li>
                                            <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-15876" data-size={60}><a target="_blank" href="https://demo.goodlayers.com/hotale/apartment2/">Home – Apartment 2</a></li>
                                        </ul>
                                    </li>
                                        <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-15533 hotale-normal-menu"><a href="#" className="sf-with-ul-pre sf-with-ul">Pages</a>
                                            <ul className="sub-menu" style={{ display: 'none' }}>
                                                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-15523" data-size={60}><a href="about-us/index.html">About Us</a></li>
                                                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-15522" data-size={60}><a href="about-us-2/index.html">About Us 2</a></li>
                                                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-15525" data-size={60}><a href="about-us-3/index.html">About Us 3</a></li>
                                                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-15521" data-size={60}><a href="our-team/index.html">Our Team</a></li>
                                                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-15524" data-size={60}><a href="hotel-review/index.html">Hotel Review</a></li>
                                                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-15538" data-size={60}><a href="team-frame-style/index.html" className="sf-with-ul-pre sf-with-ul">Team / Frame Style</a>
                                                    <ul className="sub-menu" style={{ display: 'none' }}>
                                                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-15539"><a href="team-plain-style/index.html">Team / Plain Style</a></li>
                                                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-15540"><a href="team-thumbnail-style/index.html">Team / Thumbnail Style</a></li>
                                                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-15541"><a href="team-frame-style/index.html">Team / Frame Style</a></li>
                                                    </ul>
                                                </li>
                                                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-15542" data-size={60}><a href="woocommerce-page/index.html" className="sf-with-ul-pre sf-with-ul">Woocommerce Page Item</a>
                                                    <ul className="sub-menu" style={{ display: 'none' }}>
                                                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-15543"><a href="woocommerce-page/index.html">Woocommerce Page Item</a></li>
                                                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-15544"><a href="shop/index.html">Shop</a></li>
                                                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-15545"><a href="my-account/index.html">My account</a></li>
                                                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-15546"><a href="checkout/index.html">Checkout</a></li>
                                                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-15547"><a href="cart/index.html">Cart</a></li>
                                                    </ul>
                                                </li>
                                                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-15562" data-size={60}><a href="#" className="sf-with-ul-pre sf-with-ul">Features</a>
                                                    <ul className="sub-menu" style={{ display: 'none' }}>
                                                        <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-15570"><a href="#" className="sf-with-ul-pre sf-with-ul">Set 1</a>
                                                            <ul className="sub-menu" style={{ display: 'none' }}>
                                                                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-15563"><a href="accordions-toggles/index.html">Accordions &amp; Toggles</a></li>
                                                                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-15564"><a href="alert-box/index.html">Alert Box</a></li>
                                                                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-15565"><a href="blockquotes/index.html">Blockquotes</a></li>
                                                                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-15566"><a href="buttons/index.html">Buttons</a></li>
                                                                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-15567"><a href="call-to-action/index.html">Call To Action</a></li>
                                                                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-15568"><a href="column-services/index.html">Column Services</a></li>
                                                                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-15569"><a href="columns/index.html">Columns</a></li>
                                                            </ul>
                                                        </li>
                                                        <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-15571"><a href="#" className="sf-with-ul-pre sf-with-ul">Set 2</a>
                                                            <ul className="sub-menu" style={{ display: 'none' }}>
                                                                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-15574"><a href="count-down/index.html">Count Down</a></li>
                                                                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-15575"><a href="counters/index.html">Counters</a></li>
                                                                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-15576"><a href="dividers/index.html">Dividers</a></li>
                                                                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-15577"><a href="dropcaps/index.html">Dropcaps</a></li>
                                                                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-15578"><a href="featured-boxes/index.html">Featured Boxes</a></li>
                                                                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-15579"><a href="flip-boxes/index.html">Flip Boxes</a></li>
                                                                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-15581"><a href="icon-list/index.html">Icon Lists</a></li>
                                                            </ul>
                                                        </li>
                                                        <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-15572"><a href="#" className="sf-with-ul-pre sf-with-ul">Set 3</a>
                                                            <ul className="sub-menu" style={{ display: 'none' }}>
                                                                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-15580"><a href="icons/index.html">Icons</a></li>
                                                                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-15582"><a href="images/index.html">Images</a></li>
                                                                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-15583"><a href="price-table/index.html">Price Table</a></li>
                                                                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-15584"><a href="promo-boxes/index.html">Promo Boxes</a></li>
                                                                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-15585"><a href="shape-divider/index.html">Shape Divider</a></li>
                                                                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-15586"><a href="skill-bar/index.html">Skill Bar</a></li>
                                                            </ul>
                                                        </li>
                                                        <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-15573"><a href="#" className="sf-with-ul-pre sf-with-ul">Set 4</a>
                                                            <ul className="sub-menu" style={{ display: 'none' }}>
                                                                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-15587"><a href="skill-circle/index.html">Skill Circle</a></li>
                                                                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-15588"><a href="social-shares/index.html">Social Shares</a></li>
                                                                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-15589"><a href="stunning-texts/index.html">Stunning Texts</a></li>
                                                                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-15590"><a href="tabs-horizontal/index.html">Tabs Horizontal</a></li>
                                                                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-15591"><a href="tabs-vertical/index.html">Tabs Vertical</a></li>
                                                                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-15592"><a href="testimonial/index.html">Testimonial</a></li>
                                                                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-15593"><a href="typography/index.html">Typography</a></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-15548" data-size={60}><a href="faq/index.html">FAQ</a></li>
                                                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-15549" data-size={60}><a href="gallery/index.html">Gallery</a></li>
                                                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-15558" data-size={60}><a href="price-table/index.html">Price Table</a></li>
                                                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-15559" data-size={60}><a href="maintenance/index.html">Maintenance</a></li>
                                                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-15560" data-size={60}><a href="coming-soon/index.html">Coming Soon</a></li>
                                                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-15561" data-size={60}><a href="404.html">404 Page</a></li>
                                            </ul>
                                        </li>
                                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-15712 hotale-normal-menu"><a href="room-grid-style-1/index.html" className="sf-with-ul-pre sf-with-ul">Rooms</a>
                                            <ul className="sub-menu" style={{ display: 'none' }}>
                                                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-15713" data-size={60}><a href="room-grid-style-1/index.html">Room Grid Style 1</a></li>
                                                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-15727" data-size={60}><a href="room-grid-style-2/index.html">Room Grid Style 2</a></li>
                                                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-15726" data-size={60}><a href="room-grid-style-3/index.html">Room Grid Style 3</a></li>
                                                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-15725" data-size={60}><a href="room-grid-style-4/index.html">Room Grid Style 4</a></li>
                                                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-15734" data-size={60}><a href="room-modern-style/index.html">Room Modern Style</a></li>
                                                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-15738" data-size={60}><a href="room-side-thumbnail/index.html">Room Side Thumbnail</a></li>
                                            </ul>
                                        </li>
                                        <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-15839 hotale-normal-menu"><a href="room-search/indexae75.html?room_amount=1&room-search=">Reservation</a></li>
                                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-15617 hotale-normal-menu"><a href="blog-full-right-sidebar/index.html" className="sf-with-ul-pre sf-with-ul">Blog</a>
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
                                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-15537 hotale-normal-menu"><a href="contact/index.html" className="sf-with-ul-pre sf-with-ul">Contact</a>
                                            <ul className="sub-menu" style={{ display: 'none' }}>
                                                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-15534" data-size={60}><a href="contact/index.html">Contact</a></li>
                                                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-15535" data-size={60}><a href="contact-2/index.html">Contact 2</a></li>
                                                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-15536" data-size={60}><a href="contact-3/index.html">Contact 3</a></li>
                                            </ul>
                                        </li>
                                    </ul><div className="hotale-navigation-slide-bar  hotale-navigation-slide-bar-style-2 hotale-left" data-size-offset={0} data-width="19px" id="hotale-navigation-slide-bar" style={{ width: '19px', left: '358.313px', display: 'block', overflow: 'hidden' }} /></div><div className="hotale-main-menu-right-wrap clearfix  hotale-item-mglr hotale-navigation-top"><div className="tourmaster-currency-switcher"><span className="tourmaster-head"><span>USD</span><i className="fa fa-sort-down" /></span><div className="tourmaster-currency-switcher-inner"><div className="tourmaster-currency-switcher-content"><ul><li><a href="index5e60.html?currency=eur">EUR</a></li><li><a href="index4236.html?currency=chf">CHF</a></li></ul></div></div></div><div className="tourmaster-room-navigation-checkout-wrap "><a id="tourmaster-room-navigation-checkout-button" className="tourmaster-room-navigation-checkout-button" href="room-search/indexae75.html?room_amount=1&room-search=" data-checkout-label="Check Out" data-label="Book Now">Book Now<span className="tourmaster-count">0</span></a><div className="tourmaster-room-cart-item-wrap"><div className="tourmaster-room-cart-items"><ul /><a className="tourmaster-checkout-button" href="payment-summary/indexbaa2.html?pt=room&type=cart">Check Out</a></div></div></div></div>			</div>{/* hotale-navigation */}
                            </div>{/* hotale-header-inner */}
                        </div>{/* hotale-header-container */}
                    </header>
                </div>
            </React.Fragment>
        );
    }
}

export default connect()(Header);
