import * as React from 'react';
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { InitialDataState } from '../../interfaces/home/HomeTypes';
class AboutUs extends React.Component<any, InitialDataState> {
    constructor(props: any) {
        super(props);
        this.state = {
            data: {
                miniText: "",
                aboutUsPictures: [],
                body: "",
                header: ""

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
                <div className="hotale-page-title-wrap  hotale-style-custom hotale-center-align" data-aos="fade-bottom"
                    data-aos-duration="1000" >
                    <div
                        className="hotale-header-transparent-substitute"
                        style={{ height: "149.3px" }}
                    />
                    <div className="hotale-page-title-overlay" />
                    <div className="hotale-page-title-container hotale-container">
                        <div className="hotale-page-title-content hotale-item-pdlr">
                            <h1 className="hotale-page-title">{this.props.t("aboutus_title")}</h1>
                        </div>
                    </div>
                </div>{" "}
                <div className="hotale-page-wrapper" id="hotale-page-wrapper">
                    <div className="gdlr-core-page-builder-body">
                        <div
                            className="gdlr-core-pbf-wrapper "
                            style={{ padding: "105px 0px 55px 0px" }}
                            id="gdlr-core-wrapper-1"
                        >
                            <div className="gdlr-core-pbf-background-wrap" />
                            <div className="gdlr-core-pbf-wrapper-content gdlr-core-js ">
                                <div className="gdlr-core-pbf-wrapper-container clearfix gdlr-core-container">
                                    <div className="gdlr-core-pbf-column gdlr-core-column-60 gdlr-core-column-first">
                                        <div className="gdlr-core-pbf-column-content-margin gdlr-core-js ">
                                            <div className="gdlr-core-pbf-column-content clearfix gdlr-core-js " >
                                                <div className="gdlr-core-pbf-element">
                                                    <div
                                                        className="gdlr-core-title-item gdlr-core-item-pdb clearfix  gdlr-core-center-align gdlr-core-title-item-caption-top gdlr-core-item-pdlr"
                                                        style={{ paddingBottom: "20px" }}
                                                        id="gdlr-core-title-item-1"
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
                                                                {this.props.t("aboutus_title")}
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
                                        id="gdlr-core-column-1"
                                    >
                                        <div
                                            className="gdlr-core-pbf-column-content-margin gdlr-core-js "
                                            style={{ padding: "0px 0px 20px 0px" }}
                                        >
                                            <div className="gdlr-core-pbf-background-wrap" />
                                            <div
                                                className="gdlr-core-pbf-column-content clearfix gdlr-core-js "
                                                style={{ maxWidth: "100% !important" }}
                                            >
                                                <div className="gdlr-core-pbf-element">
                                                    <div className="gdlr-core-text-box-item gdlr-core-item-pdlr gdlr-core-item-pdb gdlr-core-center-align gdlr-core-no-p-space">
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
                                                                {this.state.data.body}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="gdlr-core-pbf-element">
                                                    <div className="gdlr-core-divider-item gdlr-core-divider-item-normal gdlr-core-item-pdlr gdlr-core-center-align">
                                                        <div
                                                            className="gdlr-core-divider-container"
                                                            style={{ maxWidth: "40px" }}
                                                        >
                                                            <div
                                                                className="gdlr-core-divider-line gdlr-core-skin-divider"
                                                                style={{ borderColor: "#0a0a0a", borderWidth: "3px" }}
                                                            />
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

export default withTranslation()(AboutUs);