import * as React from 'react';
import { connect } from 'react-redux';
import logo from '../images/bar.jpg';
import { RouteComponentProps } from 'react-router';


class Footer extends React.PureComponent {
    public render() {
        return (
            <React.Fragment>
                <footer>
                    <div className="hotale-footer-wrapper "><div className="hotale-footer-container hotale-container clearfix"><div className="hotale-footer-column hotale-item-pdlr hotale-column-15"><div id="block-21" className="widget widget_block widget_media_image hotale-widget">
                        <figure className="wp-block-image"><img loading="lazy" width="110" height="27" src={logo} alt={logo} className="wp-image-14995" /></figure>
                    </div><div id="block-7" className="widget widget_block widget_text hotale-widget">
                            <p></p>
                        </div><div id="block-8" className="widget widget_block hotale-widget"><p><span className="gdlr-core-space-shortcode" style={{ marginTop: "-10px" }}></span><i className="fa fa-facebook" style={{ fontSize: "16px", color: "#ffffff", marginLeft: "3px", marginRight: "17px" }}></i><i className="fa5b fa-twitter" style={{ fontSize: "16px", color: "#ffffff", marginLeft: "3px", marginRight: "17px" }}></i><i className="fa5b fa-pinterest-p" style={{ fontSize: "16px", color: "#ffffff", marginLeft: "3px", marginRight: "17px" }}></i><i className="fa5b fa5-tiktok" style={{ fontSize: "16px", color: "#ffffff", marginLeft: "3px", marginRight: "17px" }}></i></p>
                        </div><div id="block-22" className="widget widget_block widget_text hotale-widget">
                            <p></p>
                        </div><div id="block-25" className="widget widget_block hotale-widget"><div className="tourmaster-currency-switcher-shortcode clearfix"><div className="tourmaster-currency-switcher" style={{ background: "#333333" }}><span className="tourmaster-head" style={{ color: "#ffffff" }}><span>USD</span><i className="fa fa-sort-down"></i></span><div className="tourmaster-currency-switcher-inner"><div className="tourmaster-currency-switcher-content"><ul><li><a href="index5e60.html?currency=eur">EUR</a></li><li><a href="index4236.html?currency=chf">CHF</a></li></ul></div></div></div></div></div></div><div className="hotale-footer-column hotale-item-pdlr hotale-column-15"><div id="block-10" className="widget widget_block hotale-widget">
                            <h4>Contact</h4>
                        </div><div id="block-14" className="widget widget_block hotale-widget"><p><span style={{ color: "#ffffff" }}>T</span>: 1-634-567-34 </p>
                                <p><span className="gdlr-core-space-shortcode" style={{ marginTop: "-10px" }}></span></p>
                                <p><span style={{ color: "#ffffff" }}>E</span>: Book@Hotel.co </p>
                                <p><span className="gdlr-core-space-shortcode" style={{ marginTop: "-10px" }}></span></p>
                                <p><span style={{ color: "#ffffff" }}>F</span>: 1-634-567-35</p></div></div><div className="hotale-footer-column hotale-item-pdlr hotale-column-15"><div id="block-12" className="widget widget_block hotale-widget">
                                    <h4>Hotel Address</h4>
                                </div><div id="block-15" className="widget widget_block hotale-widget"><p><span style={{ color: "#ffffff" }}>Hotale Av.<br />del Ejercito, 2, 1900<br />Madrid, Spain</span></p></div></div><div className="hotale-footer-column hotale-item-pdlr hotale-column-15"><div id="block-18" className="widget widget_block widget_media_image hotale-widget">
                                    <div className="wp-block-image"><figure className="aligncenter size-full"><img loading="lazy" width="213" height="90" src="../../../a6e8z9v6.stackpathcdn.com/hotale/resort/wp-content/uploads/sites/2/2021/11/footer-banner.png" alt="" className="wp-image-15004" /></figure></div>
                                </div><div id="block-20" className="widget widget_block widget_media_image hotale-widget">
                                <div className="wp-block-image"><figure className="aligncenter is-resized"><img loading="lazy" src="../../../a6e8z9v6.stackpathcdn.com/hotale/resort/wp-content/uploads/sites/2/2021/11/footer-cards.png" alt="" className="wp-image-15005" width="154" height="26" srcSet="https://a6e8z9v6.stackpathcdn.com/hotale/resort/wp-content/uploads/sites/2/2021/11/footer-cards.png 308w, https://a6e8z9v6.stackpathcdn.com/hotale/resort/wp-content/uploads/sites/2/2021/11/footer-cards-300x53.png 300w" sizes="(max-width: 154px) 100vw, 154px" /></figure></div>
                            </div></div></div></div><div className="hotale-copyright-wrapper"><div className="hotale-copyright-container hotale-container clearfix"><div className="hotale-copyright-left hotale-item-pdlr"><div style={{ textTransform: "uppercase", fontWeight: "500", fontSize: "13px", letterSpacing: "3px" }}><a href="https://demo.goodlayers.com/hotale/" style={{ marginRight: "22px" }}>Home</a><a href="about-us/index.html" style={{ marginRight: "22px" }}>About</a><a href="about-us-2/index.html" style={{ marginRight: "22px" }}>Privacy Policy</a><a href="contact/index.html" style={{ marginRight: "22px" }}>Contact</a></div></div><div className="hotale-copyright-right hotale-item-pdlr">Copyright © GoodLayers. All Rights Reserved.</div></div></div></footer>
            </React.Fragment>
        );
    }
};

export default connect()(Footer);