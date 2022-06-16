﻿import * as React from 'react';
import { connect } from 'react-redux';
class HomeVideo extends React.Component {
    public render() {
        return (
            <React.Fragment>
                <div
                    className="gdlr-core-pbf-wrapper "
                    style={{
                        margin: "-50px 0px 0px 0px",
                        padding: "258px 0px 258px 0px",
                        borderRadius: "0px 60px 0px 60px",
                        MozBorderRadius: "0px 60px 0px 60px",
                        WebkitBorderRadius: "0px 60px 0px 60px",
                    }}
                    id="gdlr-core-wrapper-5"
                >
                    <div
                        className="gdlr-core-pbf-background-wrap"
                        style={{
                            borderRadius: "0px 60px 0px 60px",
                            MozBorderRadius: "0px 60px 0px 60px",
                            WebkitBorderRadius: "0px 60px 0px 60px",
                        }}
                    >
                        <div
                            className="gdlr-core-pbf-background gdlr-core-parallax gdlr-core-js"
                            style={{
                                backgroundImage:
                                    "url(../../../a6e8z9v6.stackpathcdn.com/hotale/resort/wp-content/uploads/sites/2/2021/11/bg-roomm.jpg)",
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                            data-parallax-speed={0}
                        />
                    </div>
                    <div className="gdlr-core-pbf-wrapper-content gdlr-core-js ">
                        <div className="gdlr-core-pbf-wrapper-container clearfix gdlr-core-container">
                            <div className="gdlr-core-pbf-column gdlr-core-column-60 gdlr-core-column-first">
                                <div className="gdlr-core-pbf-column-content-margin gdlr-core-js ">
                                    <div className="gdlr-core-pbf-column-content clearfix gdlr-core-js ">
                                        <div className="gdlr-core-pbf-element">
                                            <div className="gdlr-core-image-item gdlr-core-item-pdb  gdlr-core-center-align gdlr-core-item-pdlr">
                                                <div
                                                    className="gdlr-core-image-item-wrap gdlr-core-media-image  gdlr-core-image-item-style-rectangle"
                                                    style={{ borderWidth: "0px", maxWidth: "90px" }}
                                                >
                                                    <a
                                                        className="gdlr-core-lightgallery gdlr-core-js "
                                                        href="https://www.youtube.com/watch?v=US7bGTUkBfg"
                                                        data-lg-id="74507c6a-e061-4912-8737-8ecb4a110479"
                                                    >
                                                        <img
                                                            src="../../../a6e8z9v6.stackpathcdn.com/hotale/resort/wp-content/uploads/sites/2/2021/11/play.png"
                                                            alt=""
                                                            width={180}
                                                            height={180}
                                                            title="play"
                                                        />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>;

            </React.Fragment>);
    }
}
export default connect()(HomeVideo)