import * as React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { HomePicturesInitial } from '../../interfaces/home/HomeTypes';
class BlogSlider extends React.Component<HomePicturesInitial, any> {
    componentDidMount() {
        console.log(this.props.data)
    }
    public render() {
        return (
            <Swiper spaceBetween={0} slidesPerView={4} >
                {
                    this.props.data.map((value, index) => {

                        return (
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
                        )

                    })
                }
            </Swiper>
        )
    }
}
export default BlogSlider;