import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
class ContactUs extends React.Component {
    public render() {
        return (
            <React.Fragment>
                <div className="hotale-page-title-wrap  hotale-style-custom hotale-center-align">
                    <div
                        className="hotale-header-transparent-substitute"
                        style={{ height: "149.3px" }}
                    />
                    <div className="hotale-page-title-overlay" />
                    <div className="hotale-page-title-container hotale-container">
                        <div className="hotale-page-title-content hotale-item-pdlr">
                            <h1 className="hotale-page-title">Haqqımızda</h1>
                        </div>
                    </div>
                </div>{" "}
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
                                                        Phone
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
                                                        A wonderful serenity has taken possession of my entire soul,
                                                        like these.
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
                                                    <p>
                                                        <a style={{ textDecoration: "underline" }} href="#">
                                                            +1-2345-2345
                                                        </a>
                                                    </p>
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
                                                        Email
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
                                                        A wonderful serenity has taken possession of my entire soul,
                                                        like these.
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
                                                    <p>
                                                        <a style={{ textDecoration: "underline" }} href="#">
                                                            Contact@goodlayersthemes.com
                                                        </a>
                                                    </p>
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
                                                        Location
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
                                                        4 apt. Flawing Street. The Grand Avenue.
                                                        <br />
                                                        Liverpool, UK 33342
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
                                                    <p>
                                                        <a style={{ textDecoration: "underline" }} href="#">
                                                            View On Google Map
                                                        </a>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>;
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
                                                        Leave us your info{" "}
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
                                                    and we will get back to you.
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
                                                    <form
                                                        action="https://demo.goodlayers.com/hotale/resort/contact/#wpcf7-f1979-p1964-o1"
                                                        method="post"
                                                        className="wpcf7-form init"
                                                        data-status="init"
                                                    >
                                                        <div style={{ display: "none" }}>
                                                            <input type="hidden" name="_wpcf7" defaultValue={1979} />
                                                            <input
                                                                type="hidden"
                                                                name="_wpcf7_version"
                                                                defaultValue="5.5.6.1"
                                                            />
                                                            <input
                                                                type="hidden"
                                                                name="_wpcf7_locale"
                                                                defaultValue="en_US"
                                                            />
                                                            <input
                                                                type="hidden"
                                                                name="_wpcf7_unit_tag"
                                                                defaultValue="wpcf7-f1979-p1964-o1"
                                                            />
                                                            <input
                                                                type="hidden"
                                                                name="_wpcf7_container_post"
                                                                defaultValue={1964}
                                                            />
                                                            <input
                                                                type="hidden"
                                                                name="_wpcf7_posted_data_hash"
                                                                
                                                            />
                                                        </div>
                                                        <div className="gdlr-core-input-wrap gdlr-core-full-width gdlr-core-no-border gdlr-core-with-column">
                                                            <div className="gdlr-core-column-30">
                                                                <span className="wpcf7-form-control-wrap your-name">
                                                                    <input
                                                                        type="text"
                                                                        name="your-name"
                                                                        size={40}
                                                                        className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                                                                        aria-required="true"
                                                                        aria-invalid="false"
                                                                        placeholder="Full Name*"
                                                                    />
                                                                </span>
                                                            </div>
                                                            <div className="gdlr-core-column-30">
                                                                <span className="wpcf7-form-control-wrap your-email">
                                                                    <input
                                                                        type="email"
                                                                        name="your-email"
                                                                        size={40}
                                                                        className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email"
                                                                        aria-required="true"
                                                                        aria-invalid="false"
                                                                        placeholder="Email*"
                                                                    />
                                                                </span>
                                                            </div>
                                                            <div className="clear" />
                                                            <div className="gdlr-core-column-60">
                                                                <span className="wpcf7-form-control-wrap your-subject">
                                                                    <input
                                                                        type="text"
                                                                        name="your-subject"
                                                                        
                                                                        size={40}
                                                                        className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                                                                        aria-required="true"
                                                                        aria-invalid="false"
                                                                        placeholder="Subject*"
                                                                    />
                                                                </span>
                                                            </div>
                                                            <div className="clear" />
                                                            <div className="gdlr-core-column-60">
                                                                <span className="wpcf7-form-control-wrap your-message">
                                                                    <textarea
                                                                        name="your-message"
                                                                        cols={40}
                                                                        rows={10}
                                                                        className="wpcf7-form-control wpcf7-textarea wpcf7-validates-as-required"
                                                                        aria-required="true"
                                                                        aria-invalid="false"
                                                                        placeholder="Message*"
                                                                        defaultValue={""}
                                                                    />
                                                                </span>
                                                            </div>
                                                            <div className="gdlr-core-column-60 gdlr-core-left-align">
                                                                <input
                                                                    type="submit"
                                                                    defaultValue="Submit Now"
                                                                    className="wpcf7-form-control has-spinner wpcf7-submit gdlr-core-small-button gdlr-core-curve-button"
                                                                />
                                                                <span className="wpcf7-spinner" />
                                                            </div>
                                                        </div>
                                                        <div className="wpcf7-response-output" aria-hidden="true" />
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>;
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
                                                className="wpgmp_map "
                                                style={{
                                                    width: "100%",
                                                    height: "500px",
                                                    position: "relative",
                                                    overflow: "hidden",
                                                }}
                                                id="map1"
                                            >
                                                <div
                                                    style={{
                                                        height: "100%",
                                                        width: "100%",
                                                        position: "absolute",
                                                        top: "0px",
                                                        left: "0px",
                                                        backgroundColor: "rgb(229, 227, 223)",
                                                    }}
                                                >
                                                    <div className="gm-err-container">
                                                        <div className="gm-err-content">
                                                            <div className="gm-err-icon">
                                                                <img
                                                                    src="https://maps.gstatic.com/mapfiles/api-3/images/icon_error.png"
                                                                    alt=""
                                                                    draggable="false"
                                                                    style={{ userSelect: "none" }}
                                                                />
                                                            </div>
                                                            <div className="gm-err-title">
                                                                Oops! Something went wrong.
                                                            </div>
                                                            <div className="gm-err-message">
                                                                This page didn't load Google Maps correctly. See the
                                                                JavaScript console for technical details.
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
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

export default connect()(ContactUs);