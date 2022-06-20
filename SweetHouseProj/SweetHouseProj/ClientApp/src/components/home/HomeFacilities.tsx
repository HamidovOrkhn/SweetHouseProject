import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
class HomeFacilities extends React.Component {
    public render() {
        return (
            <React.Fragment>
                <div
                    className="gdlr-core-pbf-wrapper "
                    style={{ padding: "50px 0px 200px 0px" }}
                    id="gdlr-core-wrapper-4"
                >
                    <div className="gdlr-core-pbf-background-wrap" />
                    <div className="gdlr-core-pbf-background-wrap" style={{ top: "-70px" }}>
                        <div
                            className="gdlr-core-pbf-background gdlr-core-parallax gdlr-core-js"
                            style={{
                                backgroundImage:
                                    `url(${ require('../images/Group-36.jpg')})`,
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "top center",
                            }}
                            data-parallax-speed={0}
                        />
                    </div>
                    <div className="gdlr-core-pbf-wrapper-content gdlr-core-js ">
                        <div
                            className="gdlr-core-pbf-wrapper-container clearfix gdlr-core-container-custom"
                            style={{ maxWidth: "1000px" }}
                        >
                            <div className="gdlr-core-pbf-column gdlr-core-column-60 gdlr-core-column-first">
                                <div className="gdlr-core-pbf-column-content-margin gdlr-core-js ">
                                    <div className="gdlr-core-pbf-column-content clearfix gdlr-core-js ">
                                        <div className="gdlr-core-pbf-element">
                                            <div
                                                className="gdlr-core-title-item gdlr-core-item-pdb clearfix  gdlr-core-center-align gdlr-core-title-item-caption-top gdlr-core-item-pdlr"
                                                id="gdlr-core-title-item-3"
                                            >
                                                <div className="gdlr-core-title-item-title-wrap ">
                                                    <h3
                                                        className="gdlr-core-title-item-title gdlr-core-skin-title hotale-additional-font class-test"
                                                        style={{
                                                            fontSize: "80px",
                                                            fontWeight: 400,
                                                            letterSpacing: "0px",
                                                            textTransform: "none",
                                                            color: "#000000",
                                                        }}
                                                    >
                                                        Hotel Facilities.
                                                        <span className="gdlr-core-title-item-title-divider gdlr-core-skin-divider" />
                                                    </h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="gdlr-core-pbf-column gdlr-core-column-60 gdlr-core-column-first"
                                id="gdlr-core-column-8"
                            >
                                <div
                                    className="gdlr-core-pbf-column-content-margin gdlr-core-js "
                                    style={{ padding: "0px 0px 30px 0px" }}
                                >
                                    <div className="gdlr-core-pbf-background-wrap" />
                                    <div
                                        className="gdlr-core-pbf-column-content clearfix gdlr-core-js "
                                        style={{ maxWidth: "760px" }}
                                    >
                                        <div className="gdlr-core-pbf-element">
                                            <div
                                                className="gdlr-core-text-box-item gdlr-core-item-pdlr gdlr-core-item-pdb gdlr-core-center-align gdlr-core-no-p-space"
                                                style={{ paddingBottom: "0px" }}
                                            >
                                                <div
                                                    className="gdlr-core-text-box-item-content"
                                                    style={{
                                                        fontSize: "21px",
                                                        fontWeight: 400,
                                                        letterSpacing: "0px",
                                                        textTransform: "none",
                                                        color: "#898989",
                                                    }}
                                                >
                                                    <p>
                                                        A wonderful serenity has taken possession of my entire soul,
                                                        like these sweet mornings of spring which I enjoy with my
                                                        whole heart.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="gdlr-core-pbf-column gdlr-core-column-12 gdlr-core-column-first"
                                id="gdlr-core-column-9"
                            >
                                <div
                                    className="gdlr-core-pbf-column-content-margin gdlr-core-js "
                                    style={{ padding: "70px 0px 0px 0px" }}
                                >
                                    <div className="gdlr-core-pbf-background-wrap" />
                                    <div
                                        className="gdlr-core-pbf-column-content clearfix gdlr-core-js"
                                        data-gdlr-animation-duration="600ms"
                                        data-gdlr-animation-offset="0.8"
                                        style={{}}
                                    >
                                        <div className="gdlr-core-pbf-element">
                                            <div className="gdlr-core-image-item gdlr-core-item-pdb  gdlr-core-center-align gdlr-core-item-pdlr">
                                                <div
                                                    className="gdlr-core-image-item-wrap gdlr-core-media-image  gdlr-core-image-item-style-rectangle"
                                                    style={{ borderWidth: "0px", maxWidth: "65px" }}
                                                >
                                                    <img
                                                        src={ require('../images/Group-40.png')}
                                                        alt=""
                                                        width={130}
                                                        height={110}
                                                        title="Group 40"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="gdlr-core-pbf-element">
                                            <div
                                                className="gdlr-core-title-item gdlr-core-item-pdb clearfix  gdlr-core-center-align gdlr-core-title-item-caption-top gdlr-core-item-pdlr"
                                                style={{ paddingBottom: "0px" }}
                                            >
                                                <div className="gdlr-core-title-item-title-wrap ">
                                                    <h3
                                                        className="gdlr-core-title-item-title gdlr-core-skin-title  class-test"
                                                        style={{
                                                            fontSize: "20px",
                                                            fontWeight: 500,
                                                            letterSpacing: "0px",
                                                            textTransform: "none",
                                                            color: "#000000",
                                                        }}
                                                    >
                                                        Parking
                                                        <span className="gdlr-core-title-item-title-divider gdlr-core-skin-divider" />
                                                    </h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="gdlr-core-pbf-column gdlr-core-column-12"
                                id="gdlr-core-column-10"
                            >
                                <div
                                    className="gdlr-core-pbf-column-content-margin gdlr-core-js "
                                    style={{ padding: "70px 0px 0px 0px" }}
                                >
                                    <div className="gdlr-core-pbf-background-wrap" />
                                    <div
                                        className="gdlr-core-pbf-column-content clearfix gdlr-core-js"
                                        data-gdlr-animation-duration="600ms"
                                        data-gdlr-animation-offset="0.8"
                                        style={{}}
                                    >
                                        <div className="gdlr-core-pbf-element">
                                            <div className="gdlr-core-icon-item gdlr-core-item-pdlr gdlr-core-item-pdb gdlr-core-center-align">
                                                <i
                                                    className=" gdlr-core-icon-item-icon gdlr-icon-safe-box1"
                                                    style={{
                                                        color: "#212121",
                                                        fontSize: "62px",
                                                        minWidth: "62px",
                                                        minHeight: "62px",
                                                    }}
                                                />
                                            </div>
                                        </div>
                                        <div className="gdlr-core-pbf-element">
                                            <div
                                                className="gdlr-core-title-item gdlr-core-item-pdb clearfix  gdlr-core-center-align gdlr-core-title-item-caption-top gdlr-core-item-pdlr"
                                                style={{ paddingBottom: "0px" }}
                                            >
                                                <div className="gdlr-core-title-item-title-wrap ">
                                                    <h3
                                                        className="gdlr-core-title-item-title gdlr-core-skin-title  class-test"
                                                        style={{
                                                            fontSize: "20px",
                                                            fontWeight: 500,
                                                            letterSpacing: "0px",
                                                            textTransform: "none",
                                                            color: "#000000",
                                                        }}
                                                    >
                                                        Safe
                                                        <span className="gdlr-core-title-item-title-divider gdlr-core-skin-divider" />
                                                    </h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="gdlr-core-pbf-column gdlr-core-column-12"
                                id="gdlr-core-column-11"
                            >
                                <div
                                    className="gdlr-core-pbf-column-content-margin gdlr-core-js "
                                    style={{ padding: "70px 0px 0px 0px" }}
                                >
                                    <div className="gdlr-core-pbf-background-wrap" />
                                    <div
                                        className="gdlr-core-pbf-column-content clearfix gdlr-core-js"
                                        data-gdlr-animation-duration="600ms"
                                        data-gdlr-animation-offset="0.8"
                                        style={{}}
                                    >
                                        <div className="gdlr-core-pbf-element">
                                            <div className="gdlr-core-icon-item gdlr-core-item-pdlr gdlr-core-item-pdb gdlr-core-center-align">
                                                <i
                                                    className=" gdlr-core-icon-item-icon gdlr-icon-swimming-pool1"
                                                    style={{
                                                        color: "#212121",
                                                        fontSize: "62px",
                                                        minWidth: "62px",
                                                        minHeight: "62px",
                                                    }}
                                                />
                                            </div>
                                        </div>
                                        <div className="gdlr-core-pbf-element">
                                            <div
                                                className="gdlr-core-title-item gdlr-core-item-pdb clearfix  gdlr-core-center-align gdlr-core-title-item-caption-top gdlr-core-item-pdlr"
                                                style={{ paddingBottom: "0px" }}
                                            >
                                                <div className="gdlr-core-title-item-title-wrap ">
                                                    <h3
                                                        className="gdlr-core-title-item-title gdlr-core-skin-title  class-test"
                                                        style={{
                                                            fontSize: "20px",
                                                            fontWeight: 500,
                                                            letterSpacing: "0px",
                                                            textTransform: "none",
                                                            color: "#000000",
                                                        }}
                                                    >
                                                        Swimming Pool
                                                        <span className="gdlr-core-title-item-title-divider gdlr-core-skin-divider" />
                                                    </h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="gdlr-core-pbf-column gdlr-core-column-12"
                                id="gdlr-core-column-12"
                            >
                                <div
                                    className="gdlr-core-pbf-column-content-margin gdlr-core-js "
                                    style={{ padding: "70px 0px 0px 0px" }}
                                >
                                    <div className="gdlr-core-pbf-background-wrap" />
                                    <div
                                        className="gdlr-core-pbf-column-content clearfix gdlr-core-js"
                                        data-gdlr-animation-duration="600ms"
                                        data-gdlr-animation-offset="0.8"
                                        style={{}}
                                    >
                                        <div className="gdlr-core-pbf-element">
                                            <div className="gdlr-core-icon-item gdlr-core-item-pdlr gdlr-core-item-pdb gdlr-core-center-align">
                                                <i
                                                    className=" gdlr-core-icon-item-icon gdlr-icon-massage"
                                                    style={{
                                                        color: "#212121",
                                                        fontSize: "62px",
                                                        minWidth: "62px",
                                                        minHeight: "62px",
                                                    }}
                                                />
                                            </div>
                                        </div>
                                        <div className="gdlr-core-pbf-element">
                                            <div
                                                className="gdlr-core-title-item gdlr-core-item-pdb clearfix  gdlr-core-center-align gdlr-core-title-item-caption-top gdlr-core-item-pdlr"
                                                style={{ paddingBottom: "0px" }}
                                            >
                                                <div className="gdlr-core-title-item-title-wrap ">
                                                    <h3
                                                        className="gdlr-core-title-item-title gdlr-core-skin-title  class-test"
                                                        style={{
                                                            fontSize: "20px",
                                                            fontWeight: 500,
                                                            letterSpacing: "0px",
                                                            textTransform: "none",
                                                            color: "#000000",
                                                        }}
                                                    >
                                                        Spa
                                                        <span className="gdlr-core-title-item-title-divider gdlr-core-skin-divider" />
                                                    </h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="gdlr-core-pbf-column gdlr-core-column-12"
                                id="gdlr-core-column-13"
                            >
                                <div
                                    className="gdlr-core-pbf-column-content-margin gdlr-core-js "
                                    style={{ padding: "70px 0px 0px 0px" }}
                                >
                                    <div className="gdlr-core-pbf-background-wrap" />
                                    <div
                                        className="gdlr-core-pbf-column-content clearfix gdlr-core-js"
                                        data-gdlr-animation-duration="600ms"
                                        data-gdlr-animation-offset="0.8"
                                        style={{}}
                                    >
                                        <div className="gdlr-core-pbf-element">
                                            <div className="gdlr-core-icon-item gdlr-core-item-pdlr gdlr-core-item-pdb gdlr-core-center-align">
                                                <i
                                                    className=" gdlr-core-icon-item-icon gdlr-icon-weights"
                                                    style={{
                                                        color: "#212121",
                                                        fontSize: "64px",
                                                        minWidth: "64px",
                                                        minHeight: "64px",
                                                    }}
                                                />
                                            </div>
                                        </div>
                                        <div className="gdlr-core-pbf-element">
                                            <div
                                                className="gdlr-core-title-item gdlr-core-item-pdb clearfix  gdlr-core-center-align gdlr-core-title-item-caption-top gdlr-core-item-pdlr"
                                                style={{ paddingBottom: "0px" }}
                                            >
                                                <div className="gdlr-core-title-item-title-wrap ">
                                                    <h3
                                                        className="gdlr-core-title-item-title gdlr-core-skin-title  class-test"
                                                        style={{
                                                            fontSize: "20px",
                                                            fontWeight: 500,
                                                            letterSpacing: "0px",
                                                            textTransform: "none",
                                                            color: "#000000",
                                                        }}
                                                    >
                                                        Gym
                                                        <span className="gdlr-core-title-item-title-divider gdlr-core-skin-divider" />
                                                    </h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="gdlr-core-pbf-column gdlr-core-column-12 gdlr-core-column-first"
                                id="gdlr-core-column-14"
                            >
                                <div
                                    className="gdlr-core-pbf-column-content-margin gdlr-core-js "
                                    style={{ padding: "0px 0px 0px 0px" }}
                                >
                                    <div className="gdlr-core-pbf-background-wrap" />
                                    <div className="gdlr-core-pbf-column-content clearfix gdlr-core-js " />
                                </div>
                            </div>
                            <div
                                className="gdlr-core-pbf-column gdlr-core-column-12"
                                id="gdlr-core-column-15"
                            >
                                <div
                                    className="gdlr-core-pbf-column-content-margin gdlr-core-js "
                                    style={{ padding: "75px 0px 0px 0px" }}
                                >
                                    <div className="gdlr-core-pbf-background-wrap" />
                                    <div
                                        className="gdlr-core-pbf-column-content clearfix gdlr-core-js"
                                        data-gdlr-animation-duration="600ms"
                                        data-gdlr-animation-offset="0.8"
                                        style={{}}
                                    >
                                        <div className="gdlr-core-pbf-element">
                                            <div className="gdlr-core-icon-item gdlr-core-item-pdlr gdlr-core-item-pdb gdlr-core-center-align">
                                                <i
                                                    className=" gdlr-core-icon-item-icon gdlr-icon-wifi-signal"
                                                    style={{
                                                        color: "#212121",
                                                        fontSize: "65px",
                                                        minWidth: "65px",
                                                        minHeight: "65px",
                                                    }}
                                                />
                                            </div>
                                        </div>
                                        <div className="gdlr-core-pbf-element">
                                            <div
                                                className="gdlr-core-title-item gdlr-core-item-pdb clearfix  gdlr-core-center-align gdlr-core-title-item-caption-top gdlr-core-item-pdlr"
                                                style={{ paddingBottom: "0px" }}
                                            >
                                                <div className="gdlr-core-title-item-title-wrap ">
                                                    <h3
                                                        className="gdlr-core-title-item-title gdlr-core-skin-title  class-test"
                                                        style={{
                                                            fontSize: "20px",
                                                            fontWeight: 500,
                                                            letterSpacing: "0px",
                                                            textTransform: "none",
                                                            color: "#000000",
                                                        }}
                                                    >
                                                        Free Wifi
                                                        <span className="gdlr-core-title-item-title-divider gdlr-core-skin-divider" />
                                                    </h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="gdlr-core-pbf-column gdlr-core-column-12"
                                id="gdlr-core-column-16"
                            >
                                <div
                                    className="gdlr-core-pbf-column-content-margin gdlr-core-js "
                                    style={{ padding: "75px 0px 0px 0px" }}
                                >
                                    <div className="gdlr-core-pbf-background-wrap" />
                                    <div
                                        className="gdlr-core-pbf-column-content clearfix gdlr-core-js"
                                        data-gdlr-animation-duration="600ms"
                                        data-gdlr-animation-offset="0.8"
                                        style={{}}
                                    >
                                        <div className="gdlr-core-pbf-element">
                                            <div className="gdlr-core-icon-item gdlr-core-item-pdlr gdlr-core-item-pdb gdlr-core-center-align">
                                                <i
                                                    className=" gdlr-core-icon-item-icon gdlr-icon-breakfast"
                                                    style={{
                                                        color: "#212121",
                                                        fontSize: "65px",
                                                        minWidth: "65px",
                                                        minHeight: "65px",
                                                    }}
                                                />
                                            </div>
                                        </div>
                                        <div className="gdlr-core-pbf-element">
                                            <div
                                                className="gdlr-core-title-item gdlr-core-item-pdb clearfix  gdlr-core-center-align gdlr-core-title-item-caption-top gdlr-core-item-pdlr"
                                                style={{ paddingBottom: "0px" }}
                                            >
                                                <div className="gdlr-core-title-item-title-wrap ">
                                                    <h3
                                                        className="gdlr-core-title-item-title gdlr-core-skin-title  class-test"
                                                        style={{
                                                            fontSize: "20px",
                                                            fontWeight: 500,
                                                            letterSpacing: "0px",
                                                            textTransform: "none",
                                                            color: "#000000",
                                                        }}
                                                    >
                                                        Breakfast
                                                        <span className="gdlr-core-title-item-title-divider gdlr-core-skin-divider" />
                                                    </h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="gdlr-core-pbf-column gdlr-core-column-12"
                                id="gdlr-core-column-17"
                            >
                                <div
                                    className="gdlr-core-pbf-column-content-margin gdlr-core-js "
                                    style={{ padding: "73px 0px 0px 0px" }}
                                >
                                    <div className="gdlr-core-pbf-background-wrap" />
                                    <div
                                        className="gdlr-core-pbf-column-content clearfix gdlr-core-js"
                                        data-gdlr-animation-duration="600ms"
                                        data-gdlr-animation-offset="0.8"
                                        style={{}}
                                    >
                                        <div className="gdlr-core-pbf-element">
                                            <div className="gdlr-core-icon-item gdlr-core-item-pdlr gdlr-core-item-pdb gdlr-core-center-align">
                                                <i
                                                    className=" gdlr-core-icon-item-icon gdlr-icon-workspace"
                                                    style={{
                                                        color: "#212121",
                                                        fontSize: "67px",
                                                        minWidth: "67px",
                                                        minHeight: "67px",
                                                    }}
                                                />
                                            </div>
                                        </div>
                                        <div className="gdlr-core-pbf-element">
                                            <div
                                                className="gdlr-core-title-item gdlr-core-item-pdb clearfix  gdlr-core-center-align gdlr-core-title-item-caption-top gdlr-core-item-pdlr"
                                                style={{ paddingBottom: "0px" }}
                                            >
                                                <div className="gdlr-core-title-item-title-wrap ">
                                                    <h3
                                                        className="gdlr-core-title-item-title gdlr-core-skin-title  class-test"
                                                        style={{
                                                            fontSize: "20px",
                                                            fontWeight: 500,
                                                            letterSpacing: "0px",
                                                            textTransform: "none",
                                                            color: "#000000",
                                                        }}
                                                    >
                                                        Workspace
                                                        <span className="gdlr-core-title-item-title-divider gdlr-core-skin-divider" />
                                                    </h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="gdlr-core-pbf-column gdlr-core-column-12"
                                id="gdlr-core-column-18"
                            >
                                <div
                                    className="gdlr-core-pbf-column-content-margin gdlr-core-js "
                                    style={{ padding: "70px 0px 0px 0px" }}
                                >
                                    <div className="gdlr-core-pbf-background-wrap" />
                                    <div className="gdlr-core-pbf-column-content clearfix gdlr-core-js " />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>;

            </React.Fragment>
            );
    }
}
export default connect()(HomeFacilities);