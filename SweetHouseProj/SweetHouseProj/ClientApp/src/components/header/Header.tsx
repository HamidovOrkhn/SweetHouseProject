
import * as React from 'react';
import { connect } from 'react-redux';
import logo from '../images/bar.jpg';
import { RouteComponentProps } from 'react-router';
import { Link } from "react-router-dom";
import i18n from '../../i18n';
import { useEffect } from 'react';
import { withTranslation } from 'react-i18next';

const LangComponent = () => {
    useEffect(() => {
        changeLanguage(localStorage.getItem("langId") ?? "az");
    });
    const changeLanguage = (lng: string) => {
        localStorage.setItem("langId",lng)
        i18n.changeLanguage(lng);
    }
    return (
        <React.Fragment>
            <div className="tourmaster-currency-switcher">
                <span className="tourmaster-head">
                    <span>Dil</span>
                    <i className="fa fa-sort-down" />
                </span>
                <div
                    className="tourmaster-currency-switcher-inner"
                    style={{ display: "none" }}
                >
                    <div className="tourmaster-currency-switcher-content">
                        <ul>
                            <li>
                                <a onClick={()=>changeLanguage("az")}>AZ</a>
                            </li>
                            <li>
                                <a onClick={() => changeLanguage("en")}>EN</a>
                            </li>
                            <li>
                                <a onClick={() => changeLanguage("ru")}>RU</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
class Header extends React.Component<any,any> {
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
                                    <div className="hotale-main-menu sf-js-enabled sf-arrows" id="hotale-main-menu" style={{ touchAction: 'pan-y' }}><ul id="menu-main-navigation-1" className="sf-menu"><li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-14980 current_page_item current-menu-ancestor current-menu-parent current_page_parent current_page_ancestor menu-item-has-children menu-item-15531 hotale-normal-menu"><Link className="sf-with-ul-pre sf-with-ul" to="/">{this.props.t("navbar_home")}</Link>
                                    </li>
                                        <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-15533 hotale-normal-menu"><Link className="sf-with-ul-pre sf-with-ul" to="/aboutus">{this.props.t("navbar_aboutus")}</Link>
                                        </li>
                                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-15712 hotale-normal-menu"><Link className="sf-with-ul-pre sf-with-ul" to="/rooms">{this.props.t("navbar_rooms")}</Link>
                                        </li>
                                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-15617 hotale-normal-menu"><Link className="sf-with-ul-pre sf-with-ul" to="/blogs">{this.props.t("navbar_blogs")}</Link>
                                        </li>
                                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-15537 hotale-normal-menu">
                                            <Link className="sf-with-ul-pre sf-with-ul" to="/contactus">{this.props.t("navbar_contactus")}</Link>
                                        </li>
                                    </ul><div className="hotale-navigation-slide-bar  hotale-navigation-slide-bar-style-2 hotale-left" data-size-offset={0} data-width="19px" id="hotale-navigation-slide-bar" style={{ width: '19px', left: '358.313px', display: 'block', overflow: 'hidden' }} />
                                    </div>
                                    <div className="hotale-main-menu-right-wrap clearfix  hotale-item-mglr hotale-navigation-top">
                                        <LangComponent/>
                                        <div className="tourmaster-room-navigation-checkout-wrap ">
                                            <a id="tourmaster-room-navigation-checkout-button" className="tourmaster-room-navigation-checkout-button" href="room-search/indexae75.html?room_amount=1&room-search=" data-checkout-label="Check Out" data-label="Book Now">
                                                {this.props.t("navbar_booknow")}
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

export default withTranslation()(Header);
