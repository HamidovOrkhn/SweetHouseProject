import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { CardsState } from '../../interfaces/home/HomeTypes';
import BlogSlider from './BlogSlider';
class BlogList extends React.Component {
    public render() {
        return (
            <div>
                <div className="gdlr-core-pbf-wrapper "
                    data-aos="fade-left"
                    data-aos-duration="2000">
                    <div className="gdlr-core-pbf-background-wrap" />
                    <div className="gdlr-core-pbf-background-wrap" style={{ top: "335px" }}>
                        <div
                            className="gdlr-core-pbf-background gdlr-core-parallax gdlr-core-js"
                            style={{
                                backgroundImage:
                                    `url(${require('../images/home-resort-news-bg.png')}`,
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
                                id="gdlr-core-column-28"
                            >
                                <div
                                    className="gdlr-core-pbf-column-content-margin gdlr-core-js "
                                    style={{ padding: "0px 0px 20px 0px" }}
                                >
                                    <div className="gdlr-core-pbf-background-wrap" />
                                    <div
                                        className="gdlr-core-pbf-column-content clearfix gdlr-core-js "
                                        style={{ maxWidth: "700px" }}
                                    >
                                        <div className="gdlr-core-pbf-element">
                                            <div
                                                className="gdlr-core-title-item gdlr-core-item-pdb clearfix  gdlr-core-center-align gdlr-core-title-item-caption-top gdlr-core-item-pdlr"
                                                style={{ paddingBottom: "20px" }}
                                                id="gdlr-core-title-item-6"
                                            >
                                                <div className="gdlr-core-title-item-title-wrap ">
                                                    <h3
                                                        className="gdlr-core-title-item-title gdlr-core-skin-title hotale-additional-font class-test"
                                                        style={{
                                                            fontSize: "80px",
                                                            fontWeight: 400,
                                                            textTransform: "none",
                                                            color: "#000000",
                                                        }}
                                                    >
                                                        Ən Son Xəbərlər &amp; Yeniliklər
                                                        <span className="gdlr-core-title-item-title-divider gdlr-core-skin-divider" />
                                                    </h3>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="gdlr-core-pbf-element">
                                            <div className="gdlr-core-text-box-item gdlr-core-item-pdlr gdlr-core-item-pdb gdlr-core-center-align">
                                                <div
                                                    className="gdlr-core-text-box-item-content"
                                                    style={{
                                                        fontSize: "21px",
                                                        fontWeight: 400,
                                                        textTransform: "none",
                                                        color: "#898989",
                                                    }}
                                                >
                                                    <p>
                                                        Aktiv bloglarımızla ən son xəbərlərlə tanış ola bilər ən son yeniliklərdən ilk xəbərdar ola bilərsiniz
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="gdlr-core-pbf-column gdlr-core-column-60 gdlr-core-column-first"
                                id="gdlr-core-column-29"
                            >
                                <div className="gdlr-core-pbf-column-content-margin gdlr-core-js ">
                                    <div className="gdlr-core-pbf-background-wrap" />
                                    <div
                                        className="gdlr-core-pbf-column-content clearfix gdlr-core-js"
                                        data-gdlr-animation-duration="600ms"
                                        data-gdlr-animation-offset="0.8"
                                        style={{}}
                                    >
                                        <div className="gdlr-core-pbf-element">
                                            <div
                                                className="gdlr-core-blog-item gdlr-core-item-pdb clearfix  gdlr-core-style-blog-image gdlr-core-item-pdlr"
                                                id="gdlr-core-blog-1"
                                            >
                                                <BlogSlider/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="gdlr-core-pbf-column gdlr-core-column-60 gdlr-core-column-first"
                                id="gdlr-core-column-30"
                            >
                                <div
                                    className="gdlr-core-pbf-column-content-margin gdlr-core-js "
                                    style={{ padding: "35px 0px 85px 0px" }}
                                >
                                    <div className="gdlr-core-pbf-background-wrap" />
                                    <div className="gdlr-core-pbf-column-content clearfix gdlr-core-js ">
                                        <div className="gdlr-core-pbf-element">
                                            <div
                                                className="gdlr-core-button-item gdlr-core-item-pdlr gdlr-core-item-pdb gdlr-core-center-align"
                                                style={{ paddingBottom: "0px" }}
                                            >
                                                <a
                                                    className="gdlr-core-button  gdlr-core-button-transparent gdlr-core-center-align gdlr-core-button-with-border"
                                                    href="blog-full-right-sidebar/index.html"
                                                    id="gdlr-core-button-id-5"
                                                >
                                                    <span className="gdlr-core-content">
                                                        Daha çox
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
                </div>;

                
            </div>


        )
    }
}
export default connect()(BlogList);