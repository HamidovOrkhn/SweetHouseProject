import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { Link } from 'react-router-dom';
import { InitialState } from '../../interfaces/home/GlobalTypes';
import { CardStateInitial } from '../../interfaces/home/HomeTypes';
import logo from '../images/andrew-neel-T0eb55DxDN4-unsplash-780x595.jpg';
import Pagination from './Pagination';
class Rooms extends React.Component<any, InitialState<CardStateInitial[]>> {
    constructor(props: any) {
        super(props);
        this.state = {
            init: {
                page: 0,
                code: 200,
                data: []
            }

        };
    }
    GetRoutePage(): number {
        const queryParams = new URLSearchParams(window.location.search)
        const term: string = queryParams.get("page") === null ? "" : queryParams.get("page")!.toString();
        return parseInt(term);
    }
    componentDidMount() {
        fetch('/api/home/roomsall?page=' + this.state.init.page).then((response) => {
            return response.json();
        }).then((data) => {
            this.setState({ init: data });
            console.log(this.state.init)
        })
    }

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
                <div></div>
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

                                                {this.state.init.data ?

                                                    this.state.init.data.map((value, index) => {

                                                        return (
                                                            <div className="gdlr-core-item-list  tourmaster-item-pdlr tourmaster-column-20">
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
                                                                            <Link to={"/rooms/details/" + value.id}>
                                                                                <img
                                                                                    src={value.roomPhotos ? require('../' + value.roomPhotos[0].src) : ""}
                                                                                    alt=""
                                                                                    width={780}
                                                                                    height={595}
                                                                                />
                                                                            </Link>
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
                                                                                <Link to={"/rooms/details/" + value.id}>
                                                                                    {value.name}
                                                                                </Link>
                                                                            </h3>
                                                                            <div className="tourmaster-info-wrap clearfix">
                                                                                <div className="tourmaster-info tourmaster-info-bed-type">
                                                                                    <i className="gdlr-icon-double-bed2" />
                                                                                    <span className="tourmaster-tail">{value.bedCount} Ədəd Çarpayı</span>
                                                                                </div>
                                                                                <div className="tourmaster-info tourmaster-info-guest-amount">
                                                                                    <i className="gdlr-icon-group" />
                                                                                    <span className="tourmaster-tail">{value.maxGuest} Nəfər</span>
                                                                                </div>
                                                                            </div>
                                                                            <div className="tourmaster-bottom clearfix">
                                                                                <div className="tourmaster-price-wrap tourmaster-no-bg ">
                                                                                    <span className="tourmaster-price">{value.price} AZN</span>
                                                                                </div>
                                                                                <Link className="tourmaster-read-more tourmaster-type-button" to={"/rooms/details/" + value.id}>
                                                                                    Rezerv
                                                                                </Link>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )
                                                    })
                                                    : ""

                                                }
                                            </div>

                                        </div>
                                    </div>

                                    <Pagination pageCount={this.state.init.page} currentPage={0 } />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </React.Fragment >
        );
    }
}

export default connect()(Rooms);





