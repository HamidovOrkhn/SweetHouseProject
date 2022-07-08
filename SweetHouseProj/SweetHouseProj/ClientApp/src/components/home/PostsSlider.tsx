import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MDBIcon } from 'mdbreact';
import Posts from './Posts';
import { HomePicturesInitial } from '../../interfaces/home/HomeTypes';
class PostsSlider extends React.Component<any, HomePicturesInitial> {
    constructor(props: any) {
        super(props);
        this.state = {
            data: []
        };
    }
    componentDidMount() {
        fetch('/api/home/homepictures').then((response) => {
            return response.json();
        }).then((data) => {
            this.setState({ data: data });
        })
    }
    public render() {
        return (
            <div className="gdlr-core-pbf-wrapper " id="gdlr-core-wrapper-9"
                data-aos="fade-right"
                data-aos-duration="2000"
            >
                <div className="gdlr-core-pbf-background-wrap" />
                <div className="gdlr-core-pbf-background-wrap" style={{ top: "120px" }}>
                    <div
                        className="gdlr-core-pbf-background gdlr-core-parallax gdlr-core-js"
                        style={{
                            backgroundImage:
                                `url(${require('../images/home-resort-newsletter-bg.png')}`,
                            backgroundRepeat: "repeat-x",
                            backgroundPosition: "top center",
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
                                        <div
                                            className="gdlr-core-gallery-item gdlr-core-item-pdb clearfix  gdlr-core-gallery-item-style-grid-no-space gdlr-core-item-pdlr "
                                            style={{ paddingBottom: "45px" }}
                                            id="gdlr-core-gallery-1"
                                        >
                                            <div
                                                className="gdlr-core-flexslider flexslider gdlr-core-js-2 "
                                                data-type="carousel"
                                                data-column={4}
                                                data-move={1}
                                                data-nav="navigation-outer"
                                                data-nav-parent="self"
                                                data-vcenter-nav={1}
                                                data-disable-autoslide={1}
                                            >
                                                <div
                                                    className="flex-viewport"
                                                    style={{ overflow: "hidden", position: "relative" }}
                                                >
                                                    <Posts data={this.state.data} />
                                                </div>
                                                <div
                                                    className="gdlr-core-flexslider-custom-nav  gdlr-core-style-navigation-outer gdlr-core-center-align"
                                                    style={{ marginTop: "-25px" }}
                                                >
                                                    <i
                                                        className="icon-arrow-left flex-prev"
                                                        style={{
                                                            color: "rgb(204, 204, 204)",
                                                            fontSize: "34px",
                                                            left: "-70px",
                                                            marginTop: "-138px",
                                                        }}
                                                    />
                                                    <i
                                                        className="icon-arrow-right flex-next"
                                                        style={{
                                                            color: "rgb(204, 204, 204)",
                                                            fontSize: "34px",
                                                            right: "-70px",
                                                            marginTop: "-138px",
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="gdlr-core-pbf-element">
                                        <div className="gdlr-core-button-item gdlr-core-item-pdlr gdlr-core-item-pdb gdlr-core-center-align">
                                            <a
                                                className="gdlr-core-button  gdlr-core-button-transparent gdlr-core-center-align gdlr-core-button-no-border"
                                                href="https://instagram.com/"
                                                target="_blank"
                                                style={{
                                                    fontSize: "13px",
                                                    fontStyle: "normal",
                                                    fontWeight: 600,
                                                    letterSpacing: "4px",
                                                    color: "#000000",
                                                    textTransform: "uppercase",
                                                }}
                                            >
                                                <span className="gdlr-core-content">
                                                    Bizi Instagramdan takip edin
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
        )
    }
}
export default connect()(PostsSlider);