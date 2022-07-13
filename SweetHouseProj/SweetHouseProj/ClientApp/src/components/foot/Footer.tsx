import * as React from 'react';
import { connect } from 'react-redux';
import logo from '../images/logo2.png';
import { RouteComponentProps } from 'react-router';
import ContactUsInitial from '../../interfaces/contactus/ContactUsTypes';
import { withTranslation } from 'react-i18next';


class Footer extends React.PureComponent<any, ContactUsInitial> {
    constructor(props: any) {
        super(props);
        this.state = {
            data: {
                email: "",
                location: "",
                mapX: 0,
                mapY: 0,
                phone: ""

            }
        };
    }
    componentDidMount() {
        fetch('/api/contact/contactus').then((response) => {
            return response.json();
        }).then((data) => {
            this.setState({ data: data });
        })
    }
    public render() {
        return (
            <React.Fragment>
                <footer>
                    <div className="hotale-footer-wrapper ">
                        <div className="hotale-footer-container hotale-container clearfix">
                            <div className="hotale-footer-column hotale-item-pdlr hotale-column-15">
                                {/*<div*/}
                                {/*    id="block-21"*/}
                                {/*    className="widget widget_block widget_media_image hotale-widget"*/}
                                {/*>*/}
                                {/*    <figure className="wp-block-image">*/}
                                {/*        <img*/}
                                {/*            loading="lazy"*/}
                                {/*            width="110"*/}
                                {/*            height="27"*/}
                                {/*            src={logo}*/}
                                {/*            alt={logo}*/}
                                {/*            className="wp-image-14995"*/}
                                {/*        />*/}
                                {/*    </figure>*/}
                                {/*</div>*/}
                                <div
                                    id="block-7"
                                    className="widget widget_block widget_text hotale-widget"
                                >
                                    <p></p>
                                </div>
                                <div id="block-8" className="widget widget_block hotale-widget">
                                    <p>
                                        <span
                                            className="gdlr-core-space-shortcode"
                                            style={{ marginTop: "-10px" }}
                                        ></span>
                                        <i
                                            className="fa fa-facebook"
                                            style={{
                                                fontSize: "16px",
                                                color: "#ffffff",
                                                marginLeft: "3px",
                                                marginRight: "17px",
                                            }}
                                        ></i>
                                        <i
                                            className="fa5b fa-twitter"
                                            style={{
                                                fontSize: "16px",
                                                color: "#ffffff",
                                                marginLeft: "3px",
                                                marginRight: "17px",
                                            }}
                                        ></i>
                                        <i
                                            className="fa5b fa-pinterest-p"
                                            style={{
                                                fontSize: "16px",
                                                color: "#ffffff",
                                                marginLeft: "3px",
                                                marginRight: "17px",
                                            }}
                                        ></i>
                                        <i
                                            className="fa5b fa5-tiktok"
                                            style={{
                                                fontSize: "16px",
                                                color: "#ffffff",
                                                marginLeft: "3px",
                                                marginRight: "17px",
                                            }}
                                        ></i>
                                    </p>
                                </div>
                            </div>
                            <div className="hotale-footer-column hotale-item-pdlr hotale-column-15">
                                <div id="block-10" className="widget widget_block hotale-widget">
                                    <h4>Əlaqə</h4>
                                </div>
                                <div id="block-14" className="widget widget_block hotale-widget">
                                    <p>
                                        <span style={{ color: "#ffffff" }}>T</span>: {this.state.data.phone} {" "}
                                    </p>
                                    <p>
                                        <span
                                            className="gdlr-core-space-shortcode"
                                            style={{ marginTop: "-10px" }}
                                        ></span>
                                    </p>
                                    <p>
                                        <span style={{ color: "#ffffff" }}>E</span>: {this.state.data.email} {" "}
                                    </p>
                                </div>
                            </div>
                            <div className="hotale-footer-column hotale-item-pdlr hotale-column-15">
                                <div id="block-12" className="widget widget_block hotale-widget">
                                    <h4>Hotel Address</h4>
                                </div>
                                <div id="block-15" className="widget widget_block hotale-widget">
                                    <p>
                                        <span style={{ color: "#ffffff" }}>
                                            {this.state.data.location}
                                        </span>
                                    </p>
                                </div>
                            </div>
                            <div className="hotale-footer-column hotale-item-pdlr hotale-column-15">
                                <div
                                    id="block-18"
                                    className="widget widget_block widget_media_image hotale-widget"
                                >
                                    <div className="wp-block-image">
                                        <figure className="aligncenter size-full">
                                            <img
                                                loading="lazy"
                                                width="213"
                                                height="90"
                                                src={require("../images/footer-banner.png")}
                                                alt=""
                                                className="wp-image-15004"
                                            />
                                        </figure>
                                    </div>
                                </div>
                                <div
                                    id="block-20"
                                    className="widget widget_block widget_media_image hotale-widget"
                                >
                                    <div className="wp-block-image">
                                        <figure className="aligncenter is-resized">
                                            <img
                                                loading="lazy"
                                                src={require("../images/footer-cards.png")}
                                                alt=""
                                                className="wp-image-15005"
                                                width="154"
                                                height="26"
                                                srcSet={require("../images/footer-cards.png")}
                                                sizes="(max-width: 154px) 100vw, 154px"
                                            />
                                        </figure>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hotale-copyright-wrapper">
                        <div className="hotale-copyright-container hotale-container clearfix">
                            {/*<div className="hotale-copyright-left hotale-item-pdlr">*/}
                            {/*    <div*/}
                            {/*        style={{*/}
                            {/*            textTransform: "uppercase",*/}
                            {/*            fontWeight: "500",*/}
                            {/*            fontSize: "13px",*/}
                            {/*            letterSpacing: "3px",*/}
                            {/*        }}*/}
                            {/*    >*/}
                            {/*        <a*/}
                            {/*            href="https://demo.goodlayers.com/hotale/"*/}
                            {/*            style={{ marginRight: "22px" }}*/}
                            {/*        >*/}
                            {/*            Home*/}
                            {/*        </a>*/}
                            {/*        <a href="about-us/index.html" style={{ marginRight: "22px" }}>*/}
                            {/*            About*/}
                            {/*        </a>*/}
                            {/*        <a href="about-us-2/index.html" style={{ marginRight: "22px" }}>*/}
                            {/*            Privacy Policy*/}
                            {/*        </a>*/}
                            {/*        <a href="contact/index.html" style={{ marginRight: "22px" }}>*/}
                            {/*            Contact*/}
                            {/*        </a>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                            <div className="hotale-copyright-right hotale-item-pdlr">
                                {this.props.t("footer_foot")}
                            </div>
                        </div>
                    </div>
                </footer>
            </React.Fragment>
        );
    }
};

export default withTranslation()(Footer);