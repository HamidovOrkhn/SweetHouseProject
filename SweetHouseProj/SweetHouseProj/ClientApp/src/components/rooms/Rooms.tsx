import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import logo from '../images/andrew-neel-T0eb55DxDN4-unsplash-780x595.jpg';
class Rooms extends React.Component {
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
                            <h1 className="hotale-page-title">Otaqlar</h1>
                        </div>
                    </div>
                </div>{" "}
                <div className="hotale-page-wrapper" id="hotale-page-wrapper">
                    <div className="gdlr-core-page-builder-body">
                        <div
                            className="gdlr-core-pbf-wrapper "
                            style={{ padding: "80px 0px 15px 0px" }}
                        >
                            <div className="gdlr-core-pbf-background-wrap" />
                            <div className="gdlr-core-pbf-wrapper-content gdlr-core-js ">
                                <div className="gdlr-core-pbf-wrapper-container clearfix gdlr-core-container">
                                    <div className="gdlr-core-pbf-element">
                                        <div className="tourmaster-room-item clearfix  tourmaster-room-item-style-grid2">
                                            <div
                                                className="tourmaster-room-item-holder gdlr-core-js-2 clearfix"
                                                data-layout="fitrows"
                                            >
                                                <div className="gdlr-core-item-list  tourmaster-item-pdlr tourmaster-column-20 tourmaster-column-first">
                                                    <div
                                                        className="tourmaster-room-grid2 tourmaster-grid-frame "
                                                        style={{ marginBottom: "40px" }}
                                                    >
                                                        <div
                                                            className="tourmaster-room-grid-inner "
                                                            style={{
                                                                boxShadow: "0px 20px 35px rgba(10, 10, 10,0.06)",
                                                                MozBoxShadow: "0px 20px 35px rgba(10, 10, 10,0.06)",
                                                                WebkitBoxShadow: "0px 20px 35px rgba(10, 10, 10,0.06)",
                                                            }}
                                                        >
                                                            <div className="tourmaster-room-thumbnail tourmaster-media-image  gdlr-core-outer-frame-element">
                                                                <a href="../room/luxury-suite/index.html">
                                                                    <img
                                                                        src={require('../images/andrew-neel-T0eb55DxDN4-unsplash-780x595.jpg')}
                                                                        alt=""
                                                                        width={780}
                                                                        height={595}
                                                                    />
                                                                </a>
                                                            </div>
                                                            <div
                                                                className="tourmaster-room-content-wrap gdlr-core-skin-e-background gdlr-core-js "
                                                                data-sync-height="room-item-32"
                                                                style={{ paddingRight: "30px", height: "279px" }}
                                                            >
                                                                <h3
                                                                    className="tourmaster-room-title gdlr-core-skin-title"
                                                                    style={{ textTransform: "none" }}
                                                                >
                                                                    <a href="../room/luxury-suite/index.html">
                                                                        Luxury Suite
                                                                    </a>
                                                                </h3>
                                                                <div className="tourmaster-info-wrap clearfix">
                                                                    <div className="tourmaster-info tourmaster-info-bed-type">
                                                                        <i className="gdlr-icon-double-bed2" />
                                                                        <span className="tourmaster-tail">1 King Bed</span>
                                                                    </div>
                                                                    <div className="tourmaster-info tourmaster-info-guest-amount">
                                                                        <i className="gdlr-icon-group" />
                                                                        <span className="tourmaster-tail">4 Guests</span>
                                                                    </div>
                                                                </div>
                                                                <div className="tourmaster-room-rating">
                                                                    <i className="fa fa-star" />
                                                                    <i className="fa fa-star" />
                                                                    <i className="fa fa-star" />
                                                                    <i className="fa fa-star" />
                                                                    <i className="fa fa-star" />
                                                                    <span className="tourmaster-room-rating-text">
                                                                        1 Review
                                                                    </span>
                                                                </div>
                                                                <div className="tourmaster-bottom clearfix">
                                                                    <div className="tourmaster-price-wrap tourmaster-no-bg ">
                                                                        <span className="tourmaster-head">From</span>
                                                                        <span className="tourmaster-price">$90</span>
                                                                    </div>
                                                                    <a
                                                                        className="tourmaster-read-more tourmaster-type-button"
                                                                        href="../room/luxury-suite/index.html"
                                                                    >
                                                                        Book Now
                                                                    </a>
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
                </div>
            </React.Fragment>
        );
    }
}

export default connect()(Rooms);





