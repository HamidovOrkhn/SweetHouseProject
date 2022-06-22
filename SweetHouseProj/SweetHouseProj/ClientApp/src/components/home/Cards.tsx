import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { CardsState } from '../../interfaces/home/HomeTypes';
class Cards extends React.Component<any, CardsState> {
    constructor(props: any) {
        super(props);
        this.state = {
            data:[]
        };
    }
    componentDidMount() {
        fetch('/api/home/rooms').then((response) => {
            return response.json();
        }).then((data) => {
            this.setState({ data: data });
            console.log(this.state.data)
        })
    }
    public render() {
        return (
            this.state.data.map((value, index) => {
                return (
                    <div
                        className="item"
                        style={{
                            width: "400px",
                            marginRight: "40px",
                            float: "left",
                            display: "block",
                        }}
                    >
                        <div className="tourmaster-room-grid tourmaster-grid-frame ">
                            <div
                                className="tourmaster-room-grid-inner "
                                style={{
                                    boxShadow: "0 10px 45px rgba(10, 10, 10,0.07)",
                                    MozBoxShadow: "0 10px 45px rgba(10, 10, 10,0.07)",
                                    WebkitBoxShadow:
                                        "0 10px 45px rgba(10, 10, 10,0.07)",
                                    borderRadius: "20px",
                                    MozBorderRadius: "20px",
                                    WebkitBorderRadius: "20px",
                                }}
                            >
                                <div className="tourmaster-room-thumbnail tourmaster-media-image  gdlr-core-outer-frame-element tourmaster-with-price">
                                    <a href="room/luxury-suite/index.html">
                                        <img
                                            src={value.roomPhotos.length > 0 ? require('../' + value.roomPhotos[0].src):""}
                                            alt=""
                                            width={780}
                                            height={595}
                                            draggable="false"
                                        />
                                    </a>
                                    <div
                                        className="tourmaster-price-wrap tourmaster-with-bg "
                                        style={{
                                            borderRadius: "10px",
                                            MozBorderRadius: "10px",
                                            WebkitBorderRadius: "10px",
                                        }}
                                    >
                                        <span className="tourmaster-price">{ value.name }</span>
                                        <span className="tourmaster-tail">
                                            {" "}
                                            / Gecəsi
                                        </span>
                                    </div>
                                </div>
                                <div
                                    className="tourmaster-room-content-wrap gdlr-core-skin-e-background gdlr-core-js "
                                    data-sync-height="room-item-53"
                                    style={{
                                        paddingTop: "45px",
                                        paddingBottom: "40px",
                                        height: "239px",
                                    }}
                                >
                                    <h3
                                        className="tourmaster-room-title gdlr-core-skin-title"
                                        style={{ textTransform: "none" }}
                                    >
                                        <a href="room/luxury-suite/index.html">
                                            {value.name}
                                        </a>
                                    </h3>
                                    <div className="tourmaster-info-wrap clearfix">
                                        <div className="tourmaster-info tourmaster-info-bed-type">
                                            <i className="gdlr-icon-double-bed2" />
                                            <span className="tourmaster-tail">
                                                {value.bedCount } Ədəd Çarpayı
                                            </span>
                                        </div>
                                        <div className="tourmaster-info tourmaster-info-guest-amount">
                                            <i className="gdlr-icon-group" />
                                            <span className="tourmaster-tail">
                                                {value.maxGuest} Nəfər
                                            </span>
                                        </div>
                                    </div>
                                    <a
                                        className="tourmaster-read-more tourmaster-type-text"
                                        href="room/luxury-suite/index.html"
                                    >
                                        Rezerv
                                        <i className="icon-arrow-right" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    );

            })
                    
            )
    }
}
export default connect()(Cards);