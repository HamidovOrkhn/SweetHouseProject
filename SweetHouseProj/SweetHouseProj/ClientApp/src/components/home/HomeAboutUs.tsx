import * as React from 'react';
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { InitialDataState } from '../../interfaces/home/HomeTypes';

class HomeAboutUs extends React.Component<any, InitialDataState> {
    constructor(props: any) {
        super(props);
        this.state = {
            data : {
                miniText : "",
                aboutUsPictures: [],
                body: "",
                header:""

            }
        };
    }
    componentDidMount() {
        fetch('/api/home/aboutus').then((response) => {
            return response.json();
        }).then((data) => {
            this.setState({ data: data });
        })
    }
    public render() {
        return (
            <React.Fragment>
                <div
                    className="gdlr-core-pbf-wrapper"
                    style={{ padding: "105px 0px 36px 0px" }}
                    id="gdlr-core-wrapper-2"
                 
                >
                    <div className="gdlr-core-pbf-background-wrap" />
                    <div className="gdlr-core-pbf-wrapper-content gdlr-core-js "
                        data-aos="fade-left"
                        data-aos-duration="2000"
                    >
                        <div className="gdlr-core-pbf-wrapper-container clearfix gdlr-core-container">
                            <div
                                className="gdlr-core-pbf-column gdlr-core-column-30 gdlr-core-column-first"
                                id="gdlr-core-column-2"
                            >
                                <div
                                    className="gdlr-core-pbf-column-content-margin gdlr-core-js "
                                    style={{ padding: "30px 0px 0px 0px" }}
                                >
                                    <div className="gdlr-core-pbf-background-wrap" />
                                    <div
                                        className="gdlr-core-pbf-column-content clearfix gdlr-core-js"
                                        data-gdlr-animation-duration="600ms"
                                        data-gdlr-animation-offset="0.8"
                                        style={{}}
                                    >
                                        <div className="gdlr-core-pbf-element">
                                            <div className="gdlr-core-text-box-item gdlr-core-item-pdlr gdlr-core-item-pdb gdlr-core-left-align">
                                                <div
                                                    className="gdlr-core-text-box-item-content"
                                                    style={{ textTransform: "none", color: "#0a0a0a" }}
                                                >
                                                    <p>
                                                        <span
                                                            style={{
                                                                fontSize: "55px",
                                                                fontWeight: 500,
                                                                marginRight: "12px",
                                                                letterSpacing: "4px",
                                                            }}
                                                        >
                                                            5
                                                        </span>{" "}
                                                        <span
                                                            className="mmr30"
                                                            style={{
                                                                fontSize: "22px",
                                                                fontWeight: 400,
                                                                marginRight: "80px",
                                                                letterSpacing: "7px",
                                                            }}
                                                        >
                                                            stars
                                                        </span>
                                                        <span
                                                            style={{
                                                                fontSize: "55px",
                                                                fontWeight: 500,
                                                                marginRight: "12px",
                                                                letterSpacing: "4px",
                                                            }}
                                                        >
                                                            25
                                                        </span>{" "}
                                                        <span
                                                            style={{
                                                                fontSize: "22px",
                                                                fontWeight: 400,
                                                                marginRight: "12px",
                                                                letterSpacing: "7px",
                                                            }}
                                                        >
                                                            rooms
                                                        </span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="gdlr-core-pbf-element">
                                            <div className="gdlr-core-text-box-item gdlr-core-item-pdlr gdlr-core-item-pdb gdlr-core-left-align">
                                                <div
                                                    className="gdlr-core-text-box-item-content"
                                                    style={{
                                                        fontSize: "34px",
                                                        lineHeight: "1.4",
                                                        fontWeight: 400,
                                                        letterSpacing: "5px",
                                                        textTransform: "none",
                                                        color: "#0a0a0a",
                                                    }}
                                                >
                                                    <p>
                                                        {this.state.data.miniText}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="gdlr-core-pbf-element">
                                            <div className="gdlr-core-button-item gdlr-core-item-pdlr gdlr-core-item-pdb gdlr-core-left-align">
                                                <a
                                                    className="gdlr-core-button  gdlr-core-button-transparent gdlr-core-left-align gdlr-core-button-with-border"
                                                    href="#"
                                                    id="gdlr-core-button-id-1"
                                                >
                                                    <span className="gdlr-core-content">
                                                        {this.props.t("homeaboutus_footlink")}
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
                            <div
                                className="gdlr-core-pbf-column gdlr-core-column-30"
                                id="gdlr-core-column-3"
                            >
                                <div className="gdlr-core-pbf-column-content-margin gdlr-core-js ">
                                    <div className="gdlr-core-pbf-background-wrap" />
                                    <div
                                        className="gdlr-core-pbf-column-content clearfix gdlr-core-js"
                                        data-aos="fade-right"
                                        data-aos-duration="2000"
                                        style={{}}
                                    >
                                        <div className="gdlr-core-pbf-element">
                                            <div
                                                className="gdlr-core-image-item gdlr-core-item-pdb  gdlr-core-center-align"
                                                style={{ paddingBottom: "0px" }}
                                            >
                                                <div
                                                    className="gdlr-core-image-item-wrap gdlr-core-media-image  gdlr-core-image-item-style-round2 gdlr-core-image-item-style-round"
                                                    style={{
                                                        borderWidth: "0px",
                                                        maxWidth: "550px",
                                                        borderRadius: "50px 0px 50px 0px",
                                                        MozBorderRadius: "50px 0px 50px 0px",
                                                        WebkitBorderRadius: "50px 0px 50px 0px",
                                                    }}
                                                >
                                                    <img
                                                        src={this.state.data.aboutUsPictures.length > 0 ? require('../' + this.state.data.aboutUsPictures[0].src) : ""}
                                                        alt=""
                                                        width={1000}
                                                        height={1130}
                                                        title="resort-swim"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>;

            </React.Fragment>

        );


    }
}
export default withTranslation()(HomeAboutUs);