import * as React from 'react';
import { connect } from 'react-redux';
import Cards from './Cards';
import { RouteComponentProps } from 'react-router';
class HotelCards extends React.Component {
    public render() {
        return (
            <React.Fragment>
                <div
                    className="gdlr-core-pbf-wrapper "
                    style={{ padding: "80px 0px 15px 0px" }}
                    id="gdlr-core-wrapper-3"
                    data-aos="zoom-out"
                    data-aos-duration="2000"
                >
                    <div className="gdlr-core-pbf-background-wrap">
                        <div
                            className="gdlr-core-pbf-background gdlr-core-parallax gdlr-core-js"
                            style={{
                                backgroundImage:
                                    `url(${require('../images/Square.png')})`,
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "top center",
                            }}
                            data-parallax-speed={0}
                        />
                    </div>
                    <div className="gdlr-core-pbf-wrapper-content gdlr-core-js ">
                        <div className="gdlr-core-pbf-wrapper-container clearfix gdlr-core-container">
                            <div
                                className="gdlr-core-pbf-column gdlr-core-column-60 gdlr-core-column-first"
                                id="gdlr-core-column-5"
                            >
                                <div
                                    className="gdlr-core-pbf-column-content-margin gdlr-core-js "
                                    style={{ padding: "0px 0px 90px 0px" }}
                                >
                                    <div className="gdlr-core-pbf-background-wrap" />
                                    <div
                                        className="gdlr-core-pbf-column-content clearfix gdlr-core-js "
                                        style={{ maxWidth: "760px" }}
                                    >
                                        <div className="gdlr-core-pbf-element">
                                            <div
                                                className="gdlr-core-title-item gdlr-core-item-pdb clearfix  gdlr-core-center-align gdlr-core-title-item-caption-top gdlr-core-item-pdlr"
                                                id="gdlr-core-title-item-2"
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
                                                        Otaqlar.
                                                        <span className="gdlr-core-title-item-title-divider gdlr-core-skin-divider" />
                                                    </h3>
                                                </div>
                                            </div>
                                        </div>
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
                                                        Siz burada şəhər səs-küyündən uzaqda əsl istirahətinizi tapacaqsınız
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="gdlr-core-pbf-column gdlr-core-column-60 gdlr-core-column-first"
                                id="gdlr-core-column-6"
                            >
                                <div
                                    className="gdlr-core-pbf-column-content-margin gdlr-core-js "
                                    style={{ padding: "0px 0px 0px 0px" }}
                                >
                                    <div className="gdlr-core-pbf-background-wrap" />
                                    <div className="gdlr-core-pbf-column-content clearfix gdlr-core-js ">
                                        <div className="gdlr-core-pbf-element">
                                            <div
                                                className="tourmaster-room-item clearfix  tourmaster-room-item-style-grid"
                                                id="gdlr-core-room-1"
                                            >
                                                <div
                                                    className="gdlr-core-flexslider flexslider gdlr-core-js-2 gdlr-core-with-outer-frame-element"
                                                    data-type="carousel"
                                                    data-column={3}
                                                    data-move={1}
                                                    data-nav="navigation-outer"
                                                    data-nav-parent="self"
                                                    data-vcenter-nav={1}
                                                >
                                                    <div
                                                        className="flex-viewport"
                                                        style={{ overflow: "hidden", position: "relative" }}
                                                    >
                                                    <Cards/>
                                                    </div>
                                                    <div
                                                        className="gdlr-core-flexslider-custom-nav  gdlr-core-style-navigation-outer gdlr-core-center-align"
                                                        style={{ marginTop: "-20px" }}
                                                    >
                                                        <i
                                                            className="icon-arrow-left flex-prev"
                                                            style={{
                                                                color: "rgb(181, 181, 181)",
                                                                fontSize: "34px",
                                                                left: "-80px",
                                                                marginTop: "-314.062px",
                                                            }}
                                                        />
                                                        <i
                                                            className="icon-arrow-right flex-next"
                                                            style={{
                                                                color: "rgb(181, 181, 181)",
                                                                fontSize: "34px",
                                                                right: "-80px",
                                                                marginTop: "-314.062px",
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="gdlr-core-pbf-column gdlr-core-column-60 gdlr-core-column-first"
                                id="gdlr-core-column-7"
                            >
                                <div
                                    className="gdlr-core-pbf-column-content-margin gdlr-core-js "
                                    style={{ padding: "0px 0px 90px 0px" }}
                                >
                                    <div className="gdlr-core-pbf-background-wrap" />
                                    <div className="gdlr-core-pbf-column-content clearfix gdlr-core-js ">
                                        <div className="gdlr-core-pbf-element">
                                            <div className="gdlr-core-button-item gdlr-core-item-pdlr gdlr-core-item-pdb gdlr-core-center-align">
                                                <a
                                                    className="gdlr-core-button  gdlr-core-button-transparent gdlr-core-center-align gdlr-core-button-with-border"
                                                    href="room-search/indexae75.html?room_amount=1&room-search="
                                                    style={{
                                                        fontSize: "13px",
                                                        fontStyle: "normal",
                                                        fontWeight: 600,
                                                        letterSpacing: "4px",
                                                        color: "#000000",
                                                        padding: "15px 0px 10px 0px",
                                                        textTransform: "uppercase",
                                                        borderRadius: "0px",
                                                        MozBorderRadius: "0px",
                                                        WebkitBorderRadius: "0px",
                                                        borderWidth: "0px 0px 1px 0px",
                                                        borderColor: "#dadada",
                                                    }}
                                                >
                                                    <span className="gdlr-core-content">
                                                        Bütün Otaqlarımız
                                                        <i
                                                            className="gdlr-core-pos-right icon-arrow-right"
                                                            style={{ fontSize: "16px", color: "#000000" }}
                                                        />
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </React.Fragment>
            )
    }
}
export default connect()(HotelCards);