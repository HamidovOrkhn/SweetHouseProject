import * as React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { HomePicturesInitial } from '../../interfaces/home/HomeTypes';
import { BlogDetailsInitial, BlogsInitial } from '../../interfaces/blog/BlogTypes';
import { Link } from 'react-router-dom';
class BlogSlider extends React.Component<any, BlogsInitial> {
    constructor(props: any) {
        super(props);
        this.state = {
            data: []
        };
    }
    componentDidMount() {
        fetch('/api/blog/blogsection').then((response) => {
            return response.json();
        }).then((data) => {
            this.setState({ data: data });
            console.log(this.state.data)
        })
    }
    public render() {
        return (
            <div className="gdlr-core-pbf-element">
                <div
                    className="gdlr-core-blog-item gdlr-core-item-pdb clearfix  gdlr-core-style-blog-image gdlr-core-item-pdlr">
                    <Swiper spaceBetween={0} slidesPerView={3} >
                        {
                            this.state.data.map((value, index) => {

                                return (


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
                                                            src={require("../" + value.blogPicture)}
                                                            alt=""
                                                            style={{ width: "400px", height: "400px" }}
                                                            title="blogimage"
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
                                                            <Link to={"/blogs/details/" + value.id} >{value.headText}</Link>
                                                        </h3>
                                                        <div className="gdlr-core-blog-info-wrapper gdlr-core-skin-divider">
                                                            <span className="gdlr-core-blog-info gdlr-core-blog-info-font gdlr-core-skin-caption gdlr-core-blog-info-date">
                                                                <span className="gdlr-core-blog-info-sep">
                                                                    •
                                                                </span>
                                                                <span className="gdlr-core-head">
                                                                    <i className="gdlr-icon-clock" />
                                                                </span>
                                                                <a>
                                                                    {value.createdDate}
                                                                </a>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                )

                            })
                        }
                    </Swiper>
                </div>
            </div >

        )
    }
}
export default BlogSlider;