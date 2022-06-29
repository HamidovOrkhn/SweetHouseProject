import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { CardsState } from '../../interfaces/home/HomeTypes';
class BlogList extends React.Component {
    //constructor(props: any) {
    //    super(props);
    //    this.state = {
    //        data: []
    //    };
    //}
    //componentDidMount() {
    //    fetch('/api/home/rooms').then((response) => {
    //        return response.json();
    //    }).then((data) => {
    //        this.setState({ data: data });
    //        console.log(this.state.data)
    //    })
    //}
    public render() {
        return (
            <div>
                <div className="gdlr-core-pbf-wrapper ">
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
                                                <Swiper spaceBetween={10} slidesPerView={3} onSlideChange={() => console.log('slide change')} onSwiper={(swiper) => console.log(swiper)}>

                                                    <SwiperSlide>
                                                        <div
                                                            className="gdlr-core-item-mglr flex-with-active-class"
                                                            style={{
                                                                width: "386.667px",
                                                                marginRight: "40px",
                                                                float: "left",
                                                                display: "block",
                                                            }}
                                                        >
                                                            <div
                                                                className="gdlr-core-blog-modern  gdlr-core-with-image gdlr-core-hover-overlay-content gdlr-core-opacity-on-hover gdlr-core-zoom-on-hover gdlr-core-style-1 gdlr-core-outer-frame-element"
                                                                style={{
                                                                    borderWidth: "0px",
                                                                    borderRadius: "20px",
                                                                    MozBorderRadius: "20px",
                                                                    WebkitBorderRadius: "20px",
                                                                }}
                                                            >
                                                                <div className="gdlr-core-blog-modern-inner">
                                                                    <div className="gdlr-core-blog-thumbnail gdlr-core-media-image">
                                                                        <img
                                                                            src={require("../images/andrii-podilnyk-766487-unsplash-794x1024.jpg")}
                                                                            alt=""
                                                                            width={700}
                                                                            height={990}
                                                                            title="kelsey-roenau-608583-unsplash"
                                                                            draggable="false"
                                                                        />
                                                                    </div>
                                                                    <div
                                                                        className="gdlr-core-blog-modern-content  gdlr-core-center-align"
                                                                        style={{
                                                                            paddingRight: "40px",
                                                                            paddingLeft: "40px",
                                                                        }}
                                                                    >
                                                                        <h3
                                                                            className="gdlr-core-blog-title gdlr-core-skin-title"
                                                                            style={{
                                                                                fontSize: "24px",
                                                                                fontStyle: "normal",
                                                                                fontWeight: 500,
                                                                                letterSpacing: "0px",
                                                                            }}
                                                                        >
                                                                            <a href="cities-to-visit-for-your-first-time-in-europe/index.html">
                                                                                Cities To Visit For Your First Time In Europe
                                                                            </a>
                                                                        </h3>
                                                                        <div className="gdlr-core-blog-info-wrapper gdlr-core-skin-divider">
                                                                            <span className="gdlr-core-blog-info gdlr-core-blog-info-font gdlr-core-skin-caption gdlr-core-blog-info-date">
                                                                                <span className="gdlr-core-blog-info-sep">
                                                                                    •
                                                                                </span>
                                                                                <span className="gdlr-core-head">
                                                                                    <i className="gdlr-icon-clock" />
                                                                                </span>
                                                                                <a href="2021/12/17/index.html">
                                                                                    Dec 17, 2021
                                                                                </a>
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </SwiperSlide>
                                                    <SwiperSlide>
                                                        <div
                                                            className="gdlr-core-item-mglr flex-with-active-class"
                                                            style={{
                                                                width: "386.667px",
                                                                marginRight: "40px",
                                                                float: "left",
                                                                display: "block",
                                                            }}
                                                        >
                                                            <div
                                                                className="gdlr-core-blog-modern  gdlr-core-with-image gdlr-core-hover-overlay-content gdlr-core-opacity-on-hover gdlr-core-zoom-on-hover gdlr-core-style-1 gdlr-core-outer-frame-element"
                                                                style={{
                                                                    borderWidth: "0px",
                                                                    borderRadius: "20px",
                                                                    MozBorderRadius: "20px",
                                                                    WebkitBorderRadius: "20px",
                                                                }}
                                                            >
                                                                <div className="gdlr-core-blog-modern-inner">
                                                                    <div className="gdlr-core-blog-thumbnail gdlr-core-media-image">
                                                                        <img
                                                                            src={require("../images/andrii-podilnyk-766487-unsplash-794x1024.jpg")}
                                                                            alt=""
                                                                            width={700}
                                                                            height={990}
                                                                            title="kelsey-roenau-608583-unsplash"
                                                                            draggable="false"
                                                                        />
                                                                    </div>
                                                                    <div
                                                                        className="gdlr-core-blog-modern-content  gdlr-core-center-align"
                                                                        style={{
                                                                            paddingRight: "40px",
                                                                            paddingLeft: "40px",
                                                                        }}
                                                                    >
                                                                        <h3
                                                                            className="gdlr-core-blog-title gdlr-core-skin-title"
                                                                            style={{
                                                                                fontSize: "24px",
                                                                                fontStyle: "normal",
                                                                                fontWeight: 500,
                                                                                letterSpacing: "0px",
                                                                            }}
                                                                        >
                                                                            <a href="cities-to-visit-for-your-first-time-in-europe/index.html">
                                                                                Cities To Visit For Your First Time In Europe
                                                                            </a>
                                                                        </h3>
                                                                        <div className="gdlr-core-blog-info-wrapper gdlr-core-skin-divider">
                                                                            <span className="gdlr-core-blog-info gdlr-core-blog-info-font gdlr-core-skin-caption gdlr-core-blog-info-date">
                                                                                <span className="gdlr-core-blog-info-sep">
                                                                                    •
                                                                                </span>
                                                                                <span className="gdlr-core-head">
                                                                                    <i className="gdlr-icon-clock" />
                                                                                </span>
                                                                                <a href="2021/12/17/index.html">
                                                                                    Dec 17, 2021
                                                                                </a>
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </SwiperSlide>
                                                    <SwiperSlide>
                                                        <div
                                                            className="gdlr-core-item-mglr flex-with-active-class"
                                                            style={{
                                                                width: "386.667px",
                                                                marginRight: "40px",
                                                                float: "left",
                                                                display: "block",
                                                            }}
                                                        >
                                                            <div
                                                                className="gdlr-core-blog-modern  gdlr-core-with-image gdlr-core-hover-overlay-content gdlr-core-opacity-on-hover gdlr-core-zoom-on-hover gdlr-core-style-1 gdlr-core-outer-frame-element"
                                                                style={{
                                                                    borderWidth: "0px",
                                                                    borderRadius: "20px",
                                                                    MozBorderRadius: "20px",
                                                                    WebkitBorderRadius: "20px",
                                                                }}
                                                            >
                                                                <div className="gdlr-core-blog-modern-inner">
                                                                    <div className="gdlr-core-blog-thumbnail gdlr-core-media-image">
                                                                        <img
                                                                            src={require("../images/andrii-podilnyk-766487-unsplash-794x1024.jpg")}
                                                                            alt=""
                                                                            width={700}
                                                                            height={990}
                                                                            title="kelsey-roenau-608583-unsplash"
                                                                            draggable="false"
                                                                        />
                                                                    </div>
                                                                    <div
                                                                        className="gdlr-core-blog-modern-content  gdlr-core-center-align"
                                                                        style={{
                                                                            paddingRight: "40px",
                                                                            paddingLeft: "40px",
                                                                        }}
                                                                    >
                                                                        <h3
                                                                            className="gdlr-core-blog-title gdlr-core-skin-title"
                                                                            style={{
                                                                                fontSize: "24px",
                                                                                fontStyle: "normal",
                                                                                fontWeight: 500,
                                                                                letterSpacing: "0px",
                                                                            }}
                                                                        >
                                                                            <a href="cities-to-visit-for-your-first-time-in-europe/index.html">
                                                                                Cities To Visit For Your First Time In Europe
                                                                            </a>
                                                                        </h3>
                                                                        <div className="gdlr-core-blog-info-wrapper gdlr-core-skin-divider">
                                                                            <span className="gdlr-core-blog-info gdlr-core-blog-info-font gdlr-core-skin-caption gdlr-core-blog-info-date">
                                                                                <span className="gdlr-core-blog-info-sep">
                                                                                    •
                                                                                </span>
                                                                                <span className="gdlr-core-head">
                                                                                    <i className="gdlr-icon-clock" />
                                                                                </span>
                                                                                <a href="2021/12/17/index.html">
                                                                                    Dec 17, 2021
                                                                                </a>
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </SwiperSlide>

                                                </Swiper>
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