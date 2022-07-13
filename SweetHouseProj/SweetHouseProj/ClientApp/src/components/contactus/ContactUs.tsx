import * as React from 'react';
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import ContactUsInitial from '../../interfaces/contactus/ContactUsTypes';
import SignupForm from './ContactUsForm';
class ContactUs extends React.Component<any, ContactUsInitial> {
    constructor(props: any) {
        super(props);
        this.state = {
            data: {
                email: "",
                location: "",
                mapX: 0,
                mapY: 0,
                phone:""

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
                <div
                    className="gdlr-core-pbf-wrapper "
                    style={{ padding: "300px 0px 160px 0px" }}
                    data-skin="white"
                    id="gdlr-core-wrapper-1"
                    data-aos="fade-bottom"
                    data-aos-duration="1000"
                >
                    <div
                        className="gdlr-core-pbf-background-wrap"
                        style={{ backgroundColor: "#0a0a0a" }}
                    >
                        <div
                            className="gdlr-core-pbf-background gdlr-core-parallax gdlr-core-js"
                            style={{
                                backgroundImage:
                                    `url(${require('../images/resort-title-bg.jpg')})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                            data-parallax-speed={0}
                        />
                    </div>
                    <div
                        className="gdlr-core-pbf-wrapper-content gdlr-core-js"
                        data-gdlr-animation-duration="600ms"
                        data-gdlr-animation-offset="0.8"
                        style={{}}
                    >
                        <div className="gdlr-core-pbf-wrapper-container clearfix gdlr-core-container">
                            <div className="gdlr-core-pbf-element">
                                <div className="gdlr-core-title-item gdlr-core-item-pdb clearfix  gdlr-core-center-align gdlr-core-title-item-caption-bottom gdlr-core-item-pdlr">
                                    <div className="gdlr-core-title-item-title-wrap ">
                                        <h3
                                            className="gdlr-core-title-item-title gdlr-core-skin-title  class-test"
                                            style={{
                                                fontSize: "75px",
                                                fontWeight: 600,
                                                letterSpacing: "0px",
                                                textTransform: "none",
                                                color: "#ffffff",
                                            }}
                                        >
                                            {this.props.t("contactus_head") }
                                            <span className="gdlr-core-title-item-title-divider gdlr-core-skin-divider" />
                                        </h3>
                                    </div>
                                    <span
                                        className="gdlr-core-title-item-caption gdlr-core-info-font gdlr-core-skin-caption"
                                        style={{
                                            fontSize: "25px",
                                            fontStyle: "normal",
                                            letterSpacing: "0px",
                                            color: "#e5e5e5",
                                            marginTop: "15px",
                                        }}
                                    >
                                        
                                        {this.props.t("contactus_title")}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="gdlr-core-pbf-wrapper "
                    style={{ padding: "30px 0px 20px 0px" }}
                    data-skin="White Text"
                >
                    <div
                        className="gdlr-core-pbf-background-wrap"
                        style={{ backgroundColor: "#191919" }}
                    >
                        <div
                            className="gdlr-core-pbf-background gdlr-core-parallax gdlr-core-js"
                            style={{
                                opacity: "0.5",
                                backgroundSize: "cover",
                                backgroundPosition: "center center",
                                height: "420.12px",
                                transform: "translate(0px, -64.3px)",
                            }}
                            data-parallax-speed="0.2"
                        />
                    </div>
                    <div className="gdlr-core-pbf-wrapper-content gdlr-core-js ">
                        <div className="gdlr-core-pbf-wrapper-container clearfix gdlr-core-container">
                            <div
                                className="gdlr-core-pbf-column gdlr-core-column-20 gdlr-core-column-first"
                                id="gdlr-core-column-1"
                            >
                                <div
                                    className="gdlr-core-pbf-column-content-margin gdlr-core-js "
                                    style={{ padding: "50px 20px 0px 20px" }}
                                >
                                    <div className="gdlr-core-pbf-background-wrap" />
                                    <div
                                        className="gdlr-core-pbf-column-content clearfix gdlr-core-js"
                                        data-gdlr-animation-duration="600ms"
                                        data-gdlr-animation-offset="0.8"
                                        style={{}}
                                    >
                                        <div className="gdlr-core-pbf-element">
                                            <div
                                                className="gdlr-core-icon-item gdlr-core-item-pdlr gdlr-core-item-pdb gdlr-core-left-align"
                                                style={{ paddingBottom: "40px" }}
                                            >
                                                <div
                                                    className=" gdlr-core-icon-item-wrap gdlr-core-skin-e-background gdlr-core-icon-item-type-round"
                                                    style={{
                                                        backgroundColor: "#ffffff",
                                                        borderRadius: "40px",
                                                        MozBorderRadius: "40px",
                                                        WebkitBorderRadius: "40px",
                                                        padding: "20px 20px 20px 20px",
                                                    }}
                                                >
                                                    <i
                                                        className=" gdlr-core-icon-item-icon fa fa-phone gdlr-core-skin-e-content"
                                                        style={{
                                                            color: "#0a0a0a",
                                                            fontSize: "40px",
                                                            minWidth: "40px",
                                                            minHeight: "40px",
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="gdlr-core-pbf-element">
                                            <div
                                                className="gdlr-core-title-item gdlr-core-item-pdb clearfix  gdlr-core-left-align gdlr-core-title-item-caption-top gdlr-core-item-pdlr"
                                                style={{ paddingBottom: "25px" }}
                                            >
                                                <div className="gdlr-core-title-item-title-wrap ">
                                                    <h3
                                                        className="gdlr-core-title-item-title gdlr-core-skin-title  class-test"
                                                        style={{
                                                            fontSize: "26px",
                                                            letterSpacing: "0px",
                                                            textTransform: "none",
                                                            color: "#ffffff",
                                                        }}
                                                    >
                                                        {this.props.t("contactus_phone") }
                                                        <span className="gdlr-core-title-item-title-divider gdlr-core-skin-divider" />
                                                    </h3>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="gdlr-core-pbf-element">
                                            <div
                                                className="gdlr-core-text-box-item gdlr-core-item-pdlr gdlr-core-item-pdb gdlr-core-left-align"
                                                style={{ paddingBottom: "0px" }}
                                            >
                                                <div
                                                    className="gdlr-core-text-box-item-content"
                                                    style={{ textTransform: "none", color: "#ffffff" }}
                                                >
                                                    <p>
                                                        {this.state.data.phone}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="gdlr-core-pbf-element">
                                            <div className="gdlr-core-text-box-item gdlr-core-item-pdlr gdlr-core-item-pdb gdlr-core-left-align">
                                                <div
                                                    className="gdlr-core-text-box-item-content"
                                                    style={{ fontWeight: 700, textTransform: "none" }}
                                                >
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="gdlr-core-pbf-column gdlr-core-column-20"
                                id="gdlr-core-column-2"
                            >
                                <div
                                    className="gdlr-core-pbf-column-content-margin gdlr-core-js "
                                    style={{ padding: "50px 20px 0px 20px" }}
                                >
                                    <div className="gdlr-core-pbf-background-wrap" />
                                    <div
                                        className="gdlr-core-pbf-column-content clearfix gdlr-core-js"
                                        data-gdlr-animation-duration="600ms"
                                        data-gdlr-animation-offset="0.8"
                                        style={{}}
                                    >
                                        <div className="gdlr-core-pbf-element">
                                            <div
                                                className="gdlr-core-icon-item gdlr-core-item-pdlr gdlr-core-item-pdb gdlr-core-left-align"
                                                style={{ paddingBottom: "40px" }}
                                            >
                                                <div
                                                    className=" gdlr-core-icon-item-wrap gdlr-core-skin-e-background gdlr-core-icon-item-type-round"
                                                    style={{
                                                        backgroundColor: "#ffffff",
                                                        borderRadius: "40px",
                                                        MozBorderRadius: "40px",
                                                        WebkitBorderRadius: "40px",
                                                        padding: "24px 24px 24px 24px",
                                                    }}
                                                >
                                                    <i
                                                        className=" gdlr-core-icon-item-icon fa fa-envelope-o gdlr-core-skin-e-content"
                                                        style={{
                                                            color: "#000000",
                                                            fontSize: "31px",
                                                            minWidth: "31px",
                                                            minHeight: "31px",
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="gdlr-core-pbf-element">
                                            <div
                                                className="gdlr-core-title-item gdlr-core-item-pdb clearfix  gdlr-core-left-align gdlr-core-title-item-caption-top gdlr-core-item-pdlr"
                                                style={{ paddingBottom: "25px" }}
                                            >
                                                <div className="gdlr-core-title-item-title-wrap ">
                                                    <h3
                                                        className="gdlr-core-title-item-title gdlr-core-skin-title  class-test"
                                                        style={{
                                                            fontSize: "26px",
                                                            letterSpacing: "0px",
                                                            textTransform: "none",
                                                            color: "#ffffff",
                                                        }}
                                                    >
                                                        {this.props.t("contactus_email")}
                                                        <span className="gdlr-core-title-item-title-divider gdlr-core-skin-divider" />
                                                    </h3>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="gdlr-core-pbf-element">
                                            <div
                                                className="gdlr-core-text-box-item gdlr-core-item-pdlr gdlr-core-item-pdb gdlr-core-left-align"
                                                style={{ paddingBottom: "0px" }}
                                            >
                                                <div
                                                    className="gdlr-core-text-box-item-content"
                                                    style={{ textTransform: "none", color: "#ffffff" }}
                                                >
                                                    <p>
                                                        {this.state.data.email}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="gdlr-core-pbf-element">
                                            <div className="gdlr-core-text-box-item gdlr-core-item-pdlr gdlr-core-item-pdb gdlr-core-left-align">
                                                <div
                                                    className="gdlr-core-text-box-item-content"
                                                    style={{ fontWeight: 700, textTransform: "none" }}
                                                >
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="gdlr-core-pbf-column gdlr-core-column-20"
                                id="gdlr-core-column-3"
                            >
                                <div
                                    className="gdlr-core-pbf-column-content-margin gdlr-core-js "
                                    style={{ padding: "50px 20px 0px 20px" }}
                                >
                                    <div className="gdlr-core-pbf-background-wrap" />
                                    <div
                                        className="gdlr-core-pbf-column-content clearfix gdlr-core-js"
                                        data-gdlr-animation-duration="600ms"
                                        data-gdlr-animation-offset="0.8"
                                        style={{}}
                                    >
                                        <div className="gdlr-core-pbf-element">
                                            <div
                                                className="gdlr-core-icon-item gdlr-core-item-pdlr gdlr-core-item-pdb gdlr-core-left-align"
                                                style={{ paddingBottom: "40px" }}
                                            >
                                                <div
                                                    className=" gdlr-core-icon-item-wrap gdlr-core-skin-e-background gdlr-core-icon-item-type-round"
                                                    style={{
                                                        backgroundColor: "#ffffff",
                                                        borderRadius: "40px",
                                                        MozBorderRadius: "40px",
                                                        WebkitBorderRadius: "40px",
                                                        padding: "24px 24px 24px 24px",
                                                    }}
                                                >
                                                    <i
                                                        className=" gdlr-core-icon-item-icon fa fa-location-arrow gdlr-core-skin-e-content"
                                                        style={{
                                                            color: "#000000",
                                                            fontSize: "31px",
                                                            minWidth: "31px",
                                                            minHeight: "31px",
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="gdlr-core-pbf-element">
                                            <div
                                                className="gdlr-core-title-item gdlr-core-item-pdb clearfix  gdlr-core-left-align gdlr-core-title-item-caption-top gdlr-core-item-pdlr"
                                                style={{ paddingBottom: "25px" }}
                                            >
                                                <div className="gdlr-core-title-item-title-wrap ">
                                                    <h3
                                                        className="gdlr-core-title-item-title gdlr-core-skin-title  class-test"
                                                        style={{
                                                            fontSize: "26px",
                                                            letterSpacing: "0px",
                                                            textTransform: "none",
                                                            color: "#ffffff",
                                                        }}
                                                    >
                                                        {this.props.t("contactus_location")}
                                                        <span className="gdlr-core-title-item-title-divider gdlr-core-skin-divider" />
                                                    </h3>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="gdlr-core-pbf-element">
                                            <div
                                                className="gdlr-core-text-box-item gdlr-core-item-pdlr gdlr-core-item-pdb gdlr-core-left-align"
                                                style={{ paddingBottom: "0px" }}
                                            >
                                                <div
                                                    className="gdlr-core-text-box-item-content"
                                                    style={{ textTransform: "none", color: "#ffffff" }}
                                                >
                                                </div>
                                            </div>
                                        </div>
                                        <div className="gdlr-core-pbf-element">
                                            <div className="gdlr-core-text-box-item gdlr-core-item-pdlr gdlr-core-item-pdb gdlr-core-left-align">
                                                <div
                                                    className="gdlr-core-text-box-item-content"
                                                    style={{ textTransform: "none", color: "#ffffff" }}
                                                >
                                                    <p>
                                                        {this.state.data.location}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="gdlr-core-pbf-wrapper "
                    style={{ padding: "90px 0px 35px 0px" }}
                >
                    <div
                        className="gdlr-core-pbf-background-wrap"
                        style={{ backgroundColor: "#ffffff" }}
                    />
                    <div className="gdlr-core-pbf-wrapper-content gdlr-core-js ">
                        <div className="gdlr-core-pbf-wrapper-container clearfix gdlr-core-container">
                            <div
                                className="gdlr-core-pbf-column gdlr-core-column-60 gdlr-core-column-first"
                                data-skin="Contact Field"
                                id="gdlr-core-column-4"
                            >
                                <div className="gdlr-core-pbf-column-content-margin gdlr-core-js ">
                                    <div className="gdlr-core-pbf-background-wrap" />
                                    <div
                                        className="gdlr-core-pbf-column-content clearfix gdlr-core-js "
                                        style={{ maxWidth: "760px" }}
                                    >
                                        <div className="gdlr-core-pbf-element">
                                            <div
                                                className="gdlr-core-title-item gdlr-core-item-pdb clearfix  gdlr-core-center-align gdlr-core-title-item-caption-bottom gdlr-core-item-pdlr"
                                                style={{ paddingBottom: "60px" }}
                                            >
                                                <div className="gdlr-core-title-item-title-wrap ">
                                                    <h3
                                                        className="gdlr-core-title-item-title gdlr-core-skin-title  class-test"
                                                        style={{
                                                            fontSize: "39px",
                                                            fontWeight: 600,
                                                            letterSpacing: "0px",
                                                            textTransform: "none",
                                                        }}
                                                    >
                                                        { this.props.t("contactus_formhead")} {" "}
                                                        <span className="gdlr-core-title-item-title-divider gdlr-core-skin-divider" />
                                                    </h3>
                                                </div>
                                                <span
                                                    className="gdlr-core-title-item-caption gdlr-core-info-font gdlr-core-skin-caption"
                                                    style={{
                                                        fontSize: "19px",
                                                        fontStyle: "normal",
                                                        letterSpacing: "0px",
                                                    }}
                                                >
                                                    {this.props.t("contactus_formtitle")}
                                                   
                                                </span>
                                            </div>
                                        </div>
                                        <div className="gdlr-core-pbf-element">
                                            <div className="gdlr-core-contact-form-7-item gdlr-core-item-pdlr gdlr-core-item-pdb ">
                                                <div
                                                    role="form"
                                                    className="wpcf7"
                                                    id="wpcf7-f1979-p1964-o1"
                                                    lang="en-US"
                                                    dir="ltr"
                                                >
                                                    <div className="screen-reader-response">
                                                        <p role="status" aria-live="polite" aria-atomic="true" />{" "}
                                                        <ul />
                                                    </div>
                                                    <SignupForm />
                                                   
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="gdlr-core-pbf-wrapper " style={{ padding: "0px 0px 0px 0px" }}>
                    <div className="gdlr-core-pbf-background-wrap" />
                    <div className="gdlr-core-pbf-wrapper-content gdlr-core-js ">
                        <div className="gdlr-core-pbf-wrapper-container clearfix gdlr-core-pbf-wrapper-full-no-space">
                            <div className="gdlr-core-pbf-element">
                                <div
                                    className="gdlr-core-wp-google-map-plugin-item gdlr-core-item-pdlr gdlr-core-item-pdb "
                                    style={{ paddingBottom: "0px" }}
                                >
                                    <div className="wpgmp_map_container wpgmp-map-1" >
                                        <div className="wpgmp_map_parent">
                                            <div
                                                className="wpgmp_map"
                                                style={{
                                                    width: "100%",
                                                    height: "500px",
                                                    position: "relative",
                                                    overflow: "hidden",
                                                }}
                                                id="map1"
                                            >
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </React.Fragment>
        );
    }
}

export default withTranslation()(ContactUs);