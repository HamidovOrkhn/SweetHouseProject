import * as React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { HomePicturesInitial } from '../../interfaces/home/HomeTypes';
class Posts extends React.Component<HomePicturesInitial, any> {
    componentDidMount() {
        console.log(this.props.data)
    }
    public render() {
        return (
            <Swiper spaceBetween={0} slidesPerView={4} >
                {
                    this.props.data.map((value, index) => {

                        return (< SwiperSlide key={index} >
                            <li
                                style={{
                                    width: "310px",
                                    marginRight: "0px",
                                    float: "left",
                                    display: "block",
                                }}
                                className="flex-with-active-class flex-active-slide"
                            >
                                <div className="gdlr-core-gallery-list gdlr-core-media-image">
                                    <a
                                        className="gdlr-core-lightgallery gdlr-core-js "
                                        href={require('../' + value.src)}
                                        data-lightbox-group="gdlr-core-img-group-1"
                                        data-lg-id="7e7ad524-83eb-402e-85a6-c3d5ed1c4154"
                                    >
                                        <img
                                            src={require('../' + value.src)}
                                            alt=""
                                            width={600}
                                            height={600}
                                            title="shutterstock_1298236804"
                                            draggable="false"
                                        />
                                    </a>
                                </div>
                            </li>
                        </SwiperSlide>)
                           
                    })
                }
            </Swiper>
        )
    }
}
export default Posts;