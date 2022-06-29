import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps, useLocation, useParams } from 'react-router';
import { RoomProps, RoomState } from '../../interfaces/home/RoomTypes';
import parse from "html-react-parser";
import Posts from '../home/Posts';
import Cards from '../home/Cards';
class RoomDetails extends React.Component<any, RoomState> {
    constructor(props: any) {
        super(props);
        this.state = {
            data: {
                amenities: [],
                bedCount: 0,
                hotelRules: "",
                maxGuest: 0,
                roomSpace: 0,
                name: "",
                price: 0,
                roomDesc: "",
                roomPhotos: [],
                roomView: ""
            }
        };
    }

    async componentDidMount() {
        const { slug } = this.props.match.params;
        fetch('/api/room/details/' + slug).then((response) => {
            return response.json();
        }).then((data) => {
            this.setState({ data: data });
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
                            <h1 className="hotale-page-title">Otağ Detalı</h1>
                        </div>
                    </div>
                </div>{" "}
                <div className="hotale-page-wrapper" id="hotale-page-wrapper">  
                    <div className="gdlr-core-page-builder-body">
                        <div
                            className="gdlr-core-pbf-sidebar-wrapper  gdlr-core-sticky-sidebar gdlr-core-js "
                            id="gdlr-core-sidebar-wrapper-1"
                        >
                            <div className="gdlr-core-pbf-sidebar-container gdlr-core-line-height-0 clearfix gdlr-core-js gdlr-core-container">
                                <div
                                    className="gdlr-core-pbf-sidebar-content  gdlr-core-column-45 gdlr-core-pbf-sidebar-padding gdlr-core-line-height gdlr-core-column-extend-left"
                                    style={{ padding: "60px 0px 0px 0px" }}
                                >
                                    <div className="gdlr-core-pbf-sidebar-content-inner">
                                        <div className="gdlr-core-pbf-column gdlr-core-column-60 gdlr-core-column-first">
                                            <div className="gdlr-core-pbf-column-content-margin gdlr-core-js ">
                                                <div className="gdlr-core-pbf-column-content clearfix gdlr-core-js ">
                                                    <div className="gdlr-core-pbf-element">
                                                        <div className="gdlr-core-image-item gdlr-core-item-pdb  gdlr-core-center-align gdlr-core-item-pdlr">
                                                            <div
                                                                className="gdlr-core-image-item-wrap gdlr-core-media-image  gdlr-core-image-item-style-round"
                                                                style={{
                                                                    borderWidth: "0px",
                                                                    borderRadius: "20px",
                                                                    MozBorderRadius: "20px",
                                                                    WebkitBorderRadius: "20px",
                                                                }}
                                                            >
                                                                <img
                                                                    src={this.state.data.roomPhotos.length > 0 ? require('../' + this.state.data.roomPhotos[0].src) :""}
                                                                    alt=""
                                                                    width={1150}
                                                                    height={490}
                                                                    title="Hotel Room"
                                                                />
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
                                                style={{
                                                    margin: "0px 0px 0px 0px",
                                                    padding: "10px 0px 20px 0px",
                                                }}
                                            >
                                                <div className="gdlr-core-pbf-background-wrap" />
                                                <div className="gdlr-core-pbf-column-content clearfix gdlr-core-js ">
                                                    <div className="gdlr-core-pbf-element">
                                                        <div
                                                            className="tourmaster-room-title-item tourmaster-item-mglr tourmaster-item-pdb clearfix"
                                                            style={{ paddingBottom: "35px" }}
                                                        >
                                                            <h3 className="tourmaster-room-title-item-title">
                                                                {this.state.data.name}
                                                            </h3>
                                                            <div className="tourmaster-room-title-item-caption">
                                                                Otaq Haqqında
                                                            </div>
                                                            <div className="tourmaster-room-title-price">
                                                                <div className="tourmaster-head">

                                                                    <span className="tourmaster-price">Günlük {this.state.data.price} AZN</span>
                                                                </div>
                                                                <div className="tourmaster-tail">Qiymət/Gecəlik</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="gdlr-core-pbf-element">
                                                        <div className="gdlr-core-divider-item gdlr-core-divider-item-normal gdlr-core-item-pdlr gdlr-core-center-align">
                                                            <div className="gdlr-core-divider-line gdlr-core-skin-divider" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="gdlr-core-pbf-column gdlr-core-column-20 gdlr-core-column-first"
                                            id="gdlr-core-column-2"
                                        >
                                            <div className="gdlr-core-pbf-column-content-margin gdlr-core-js ">
                                                <div className="gdlr-core-pbf-background-wrap" />
                                                <div className="gdlr-core-pbf-column-content clearfix gdlr-core-js ">
                                                    <div className="gdlr-core-pbf-element">
                                                        <div
                                                            className="gdlr-core-column-service-item gdlr-core-item-pdb  gdlr-core-left-align gdlr-core-column-service-icon-left gdlr-core-with-caption gdlr-core-item-pdlr"
                                                            style={{ paddingBottom: "20px" }}
                                                        >
                                                            <div className="gdlr-core-column-service-media gdlr-core-media-icon ">
                                                                <i
                                                                    className="gdlr-icon-double-bed2"
                                                                    style={{
                                                                        fontSize: "33px",
                                                                        lineHeight: "33px",
                                                                        width: "33px",
                                                                        color: "#0a0a0a",
                                                                    }}
                                                                />
                                                            </div>
                                                            <div className="gdlr-core-column-service-content-wrapper">
                                                                <div className="gdlr-core-column-service-title-wrap">
                                                                    <h3
                                                                        className="gdlr-core-column-service-title gdlr-core-skin-title"
                                                                        style={{
                                                                            fontSize: "19px",
                                                                            fontWeight: 600,
                                                                            textTransform: "none",
                                                                        }}
                                                                    >
                                                                        Yataq Sayı
                                                                    </h3>
                                                                    <div
                                                                        className="gdlr-core-column-service-caption gdlr-core-info-font gdlr-core-skin-caption"
                                                                        style={{
                                                                            fontSize: "17px",
                                                                            fontWeight: 500,
                                                                            fontStyle: "normal",
                                                                            marginTop: "0px",
                                                                        }}
                                                                    >
                                                                        {this.state.data.bedCount} Ədəd Çarpayı
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="gdlr-core-pbf-column gdlr-core-column-20"
                                            id="gdlr-core-column-3"
                                        >
                                            <div className="gdlr-core-pbf-column-content-margin gdlr-core-js ">
                                                <div className="gdlr-core-pbf-background-wrap" />
                                                <div className="gdlr-core-pbf-column-content clearfix gdlr-core-js ">
                                                    <div className="gdlr-core-pbf-element">
                                                        <div
                                                            className="gdlr-core-column-service-item gdlr-core-item-pdb  gdlr-core-left-align gdlr-core-column-service-icon-left gdlr-core-with-caption gdlr-core-item-pdlr"
                                                            style={{ paddingBottom: "20px" }}
                                                        >
                                                            <div
                                                                className="gdlr-core-column-service-media gdlr-core-media-icon "
                                                                style={{ marginTop: "0px", marginRight: "26px" }}
                                                            >
                                                                <i
                                                                    className="gdlr-icon-group"
                                                                    style={{
                                                                        fontSize: "40px",
                                                                        lineHeight: "40px",
                                                                        width: "40px",
                                                                        color: "#0a0a0a",
                                                                    }}
                                                                />
                                                            </div>
                                                            <div className="gdlr-core-column-service-content-wrapper">
                                                                <div className="gdlr-core-column-service-title-wrap">
                                                                    <h3
                                                                        className="gdlr-core-column-service-title gdlr-core-skin-title"
                                                                        style={{
                                                                            fontSize: "19px",
                                                                            fontWeight: 600,
                                                                            textTransform: "none",
                                                                        }}
                                                                    >
                                                                        Max Say
                                                                    </h3>
                                                                    <div
                                                                        className="gdlr-core-column-service-caption gdlr-core-info-font gdlr-core-skin-caption"
                                                                        style={{
                                                                            fontSize: "17px",
                                                                            fontWeight: 500,
                                                                            fontStyle: "normal",
                                                                            marginTop: "0px",
                                                                        }}
                                                                    >
                                                                        {this.state.data.maxGuest} Nəfərlik
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="gdlr-core-pbf-column gdlr-core-column-20">
                                            <div className="gdlr-core-pbf-column-content-margin gdlr-core-js ">
                                                <div className="gdlr-core-pbf-column-content clearfix gdlr-core-js " />
                                            </div>
                                        </div>
                                        <div
                                            className="gdlr-core-pbf-column gdlr-core-column-20 gdlr-core-column-first"
                                            id="gdlr-core-column-4"
                                        >
                                            <div className="gdlr-core-pbf-column-content-margin gdlr-core-js ">
                                                <div className="gdlr-core-pbf-background-wrap" />
                                                <div className="gdlr-core-pbf-column-content clearfix gdlr-core-js ">
                                                    <div className="gdlr-core-pbf-element">
                                                        <div
                                                            className="gdlr-core-column-service-item gdlr-core-item-pdb  gdlr-core-left-align gdlr-core-column-service-icon-left gdlr-core-with-caption gdlr-core-item-pdlr"
                                                            style={{ paddingBottom: "20px" }}
                                                        >
                                                            <div className="gdlr-core-column-service-media gdlr-core-media-icon ">
                                                                <i
                                                                    className="gdlr-icon-resize"
                                                                    style={{
                                                                        fontSize: "34px",
                                                                        lineHeight: "34px",
                                                                        width: "34px",
                                                                        color: "#0a0a0a",
                                                                    }}
                                                                />
                                                            </div>
                                                            <div className="gdlr-core-column-service-content-wrapper">
                                                                <div className="gdlr-core-column-service-title-wrap">
                                                                    <h3
                                                                        className="gdlr-core-column-service-title gdlr-core-skin-title"
                                                                        style={{
                                                                            fontSize: "19px",
                                                                            fontWeight: 600,
                                                                            textTransform: "none",
                                                                        }}
                                                                    >
                                                                        Otaq Genişliyi
                                                                    </h3>
                                                                    <div
                                                                        className="gdlr-core-column-service-caption gdlr-core-info-font gdlr-core-skin-caption"
                                                                        style={{
                                                                            fontSize: "17px",
                                                                            fontWeight: 500,
                                                                            fontStyle: "normal",
                                                                            marginTop: "0px",
                                                                        }}
                                                                    >
                                                                        {this.state.data.roomSpace } kv/m
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div
                                            className="gdlr-core-pbf-column gdlr-core-column-20"
                                            id="gdlr-core-column-5"
                                        >
                                            <div className="gdlr-core-pbf-column-content-margin gdlr-core-js ">
                                                <div className="gdlr-core-pbf-background-wrap" />
                                                <div className="gdlr-core-pbf-column-content clearfix gdlr-core-js ">
                                                    <div className="gdlr-core-pbf-element">
                                                        <div
                                                            className="gdlr-core-column-service-item gdlr-core-item-pdb  gdlr-core-left-align gdlr-core-column-service-icon-left gdlr-core-with-caption gdlr-core-item-pdlr"
                                                            style={{ paddingBottom: "20px" }}
                                                        >
                                                            <div
                                                                className="gdlr-core-column-service-media gdlr-core-media-icon "
                                                                style={{ marginRight: "27px" }}
                                                            >
                                                                <i
                                                                    className="gdlr-icon-nature"
                                                                    style={{
                                                                        fontSize: "37px",
                                                                        lineHeight: "37px",
                                                                        width: "37px",
                                                                        color: "#0a0a0a",
                                                                    }}
                                                                />
                                                            </div>
                                                            <div className="gdlr-core-column-service-content-wrapper">
                                                                <div className="gdlr-core-column-service-title-wrap">
                                                                    <h3
                                                                        className="gdlr-core-column-service-title gdlr-core-skin-title"
                                                                        style={{
                                                                            fontSize: "19px",
                                                                            fontWeight: 600,
                                                                            textTransform: "none",
                                                                        }}
                                                                    >
                                                                        Mənzərə
                                                                    </h3>
                                                                    <div
                                                                        className="gdlr-core-column-service-caption gdlr-core-info-font gdlr-core-skin-caption"
                                                                        style={{
                                                                            fontSize: "17px",
                                                                            fontWeight: 500,
                                                                            fontStyle: "normal",
                                                                            marginTop: "0px",
                                                                        }}
                                                                    >
                                                                        {this.state.data.roomView}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="gdlr-core-pbf-column gdlr-core-column-20">
                                            <div className="gdlr-core-pbf-column-content-margin gdlr-core-js ">
                                                <div className="gdlr-core-pbf-column-content clearfix gdlr-core-js " />
                                            </div>
                                        </div>
                                        <div
                                            className="gdlr-core-pbf-column gdlr-core-column-60 gdlr-core-column-first"
                                            id="gdlr-core-column-6"
                                        >
                                            <div
                                                className="gdlr-core-pbf-column-content-margin gdlr-core-js "
                                                style={{ padding: "10px 0px 0px 0px" }}
                                            >
                                                <div className="gdlr-core-pbf-background-wrap" />
                                                <div className="gdlr-core-pbf-column-content clearfix gdlr-core-js ">
                                                    <div className="gdlr-core-pbf-element">
                                                        <div className="gdlr-core-text-box-item gdlr-core-item-pdlr gdlr-core-item-pdb gdlr-core-left-align">
                                                            <div
                                                                className="gdlr-core-text-box-item-content"
                                                                style={{ fontSize: "18px", textTransform: "none" }}
                                                            >
                                                                <p>
                                                                    {this.state.data.roomDesc}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="gdlr-core-pbf-column gdlr-core-column-60 gdlr-core-column-first"
                                            id="gdlr-core-column-7"
                                        >
                                            <div
                                                className="gdlr-core-pbf-column-content-margin gdlr-core-js "
                                                style={{
                                                    margin: "0px 0px 0px 0px",
                                                    padding: "0px 0px 25px 0px",
                                                }}
                                            >
                                                <div className="gdlr-core-pbf-background-wrap" />
                                                <div className="gdlr-core-pbf-column-content clearfix gdlr-core-js ">
                                                    <div className="gdlr-core-pbf-element">
                                                        <div className="gdlr-core-divider-item gdlr-core-divider-item-normal gdlr-core-item-pdlr gdlr-core-center-align">
                                                            <div className="gdlr-core-divider-line gdlr-core-skin-divider" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="gdlr-core-pbf-column gdlr-core-column-60 gdlr-core-column-first">
                                            <div className="gdlr-core-pbf-column-content-margin gdlr-core-js ">
                                                <div className="gdlr-core-pbf-column-content clearfix gdlr-core-js ">
                                                    <div className="gdlr-core-pbf-element">
                                                        <div
                                                            className="gdlr-core-title-item gdlr-core-item-pdb clearfix  gdlr-core-left-align gdlr-core-title-item-caption-top gdlr-core-item-pdlr"
                                                            style={{ paddingBottom: "40px" }}
                                                        >
                                                            <div className="gdlr-core-title-item-title-wrap ">
                                                                <h3
                                                                    className="gdlr-core-title-item-title gdlr-core-skin-title  class-test"
                                                                    style={{
                                                                        fontSize: "25px",
                                                                        fontWeight: 500,
                                                                        letterSpacing: "0px",
                                                                        textTransform: "none",
                                                                    }}
                                                                >
                                                                    Otaq Avadanlıqları
                                                                    <span className="gdlr-core-title-item-title-divider gdlr-core-skin-divider" />
                                                                </h3>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {
                                            this.state.data.amenities.map((value, index) => {
                                                return (<div
                                                    className="gdlr-core-pbf-column gdlr-core-column-20 gdlr-core-column-first"
                                                    id="gdlr-core-column-8"
                                                    key={index}
                                                >
                                                    <div
                                                        className="gdlr-core-pbf-column-content-margin gdlr-core-js  gdlr-core-move-up-with-shadow"
                                                        style={{
                                                            margin: "0px 10px 20px 20px",
                                                            padding: "25px 0px 0px 10px",
                                                            borderRadius: "20px 20px 20px 20px",
                                                            MozBorderRadius: "20px 20px 20px 20px",
                                                            WebkitBorderRadius: "20px 20px 20px 20px",
                                                        }}
                                                    >
                                                        <div
                                                            className="gdlr-core-pbf-background-wrap"
                                                            style={{
                                                                borderRadius: "20px 20px 20px 20px",
                                                                MozBorderRadius: "20px 20px 20px 20px",
                                                                WebkitBorderRadius: "20px 20px 20px 20px",
                                                                borderWidth: "1px 1px 1px 1px",
                                                                borderColor: "#e5e5e5",
                                                                borderStyle: "solid",
                                                            }}
                                                        />
                                                        <div className="gdlr-core-pbf-column-content clearfix gdlr-core-js ">
                                                            <div className="gdlr-core-pbf-element">
                                                                <div
                                                                    className="gdlr-core-title-item gdlr-core-item-pdb clearfix  gdlr-core-left-align gdlr-core-title-item-caption-top gdlr-core-item-pdlr"
                                                                    style={{ paddingBottom: "10px" }}
                                                                >
                                                                    <div
                                                                        className="gdlr-core-title-item-left-icon"
                                                                        style={{
                                                                            margin: "-12px 16px 0px 0px",
                                                                            fontSize: "35px",
                                                                        }}
                                                                    >
                                                                        { parse(value.icon)}
                                                                    </div>
                                                                    <div className="gdlr-core-title-item-left-icon-wrap">
                                                                        <div className="gdlr-core-title-item-title-wrap ">
                                                                            <h3
                                                                                className="gdlr-core-title-item-title gdlr-core-skin-title  class-test"
                                                                                style={{
                                                                                    fontSize: "17px",
                                                                                    fontWeight: 500,
                                                                                    letterSpacing: "0px",
                                                                                    textTransform: "none",
                                                                                    color: "#848484",
                                                                                }}
                                                                            >
                                                                                { value.name}
                                                                                <span className="gdlr-core-title-item-title-divider gdlr-core-skin-divider" />
                                                                            </h3>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>);
                                                   
                                            })
                                        }
                                    </div>
                                </div>
                                <div
                                    className="gdlr-core-pbf-sidebar-right gdlr-core-column-extend-right hotale-sidebar-area gdlr-core-column-15 gdlr-core-pbf-sidebar-padding gdlr-core-line-height gdlr-core-sidebar-sub-added gdlr-core-stick-bottom-sidebar"
                                    style={{
                                        padding: "60px 0px 0px",
                                        position: "absolute",
                                        top: "auto",
                                        bottom: "0px",
                                        left: "1059.6px",
                                        width: "320px",
                                    }}
                                >
                                    <div className="gdlr-core-sidebar-item gdlr-core-item-pdlr">
                                        <div className="tourmaster-room-booking-bar-wrap">
                                            <div className="tourmaster-room-booking-bar-title">
                                                <span className="tourmaster-active" data-room-tab="booking">
                                                    Book Your Room
                                                </span>
                                            </div>
                                            <div className="tourmaster-room-booking-bar-content">
                                                <div
                                                    className="tourmaster-room-booking-wrap tourmaster-active"
                                                    data-room-tab="booking"
                                                    style={{}}
                                                >
                                                    <form
                                                        className="tourmaster-room-booking-form clearfix"
                                                        id="tourmaster-room-booking-form"
                                                        action="https://demo.goodlayers.com/hotale/resort/payment-summary/?pt=room"
                                                        data-ajax-url="https://demo.goodlayers.com/hotale/resort/wp-admin/admin-ajax.php"
                                                        data-action="tourmaster_room_booking_form"
                                                        method="POST"
                                                    >
                                                        <div
                                                            className="tourmaster-room-date-selection tourmaster-vertical"
                                                            data-avail-date="2022-06-13,2022-06-14,2022-06-15,2022-06-16,2022-06-17,2022-06-18,2022-06-19,2022-06-20,2022-06-21,2022-06-22,2022-06-23,2022-06-24,2022-06-25,2022-06-26,2022-06-27,2022-06-28,2022-06-29,2022-06-30,2022-07-01,2022-07-02,2022-07-03,2022-07-04,2022-07-05,2022-07-06,2022-07-07,2022-07-08,2022-07-09,2022-07-10,2022-07-11,2022-07-12,2022-07-13,2022-07-14,2022-07-15,2022-07-16,2022-07-17,2022-07-18,2022-07-19,2022-07-20,2022-07-21,2022-07-22,2022-07-23,2022-07-24,2022-07-25,2022-07-26,2022-07-27,2022-07-28,2022-07-29,2022-07-30,2022-07-31,2022-08-01,2022-08-02,2022-08-03,2022-08-04,2022-08-05,2022-08-06,2022-08-07,2022-08-08,2022-08-09,2022-08-10,2022-08-11,2022-08-12,2022-08-13,2022-08-14,2022-08-15,2022-08-16,2022-08-17,2022-08-18,2022-08-19,2022-08-20,2022-08-21,2022-08-22,2022-08-23,2022-08-24,2022-08-25,2022-08-26,2022-08-27,2022-08-28,2022-08-29,2022-08-30,2022-08-31,2022-09-01,2022-09-02,2022-09-03,2022-09-04,2022-09-05,2022-09-06,2022-09-07,2022-09-08,2022-09-09,2022-09-10,2022-09-11,2022-09-12,2022-09-13,2022-09-14,2022-09-15,2022-09-16,2022-09-17,2022-09-18,2022-09-19,2022-09-20,2022-09-21,2022-09-22,2022-09-23,2022-09-24,2022-09-25,2022-09-26,2022-09-27,2022-09-28,2022-09-29,2022-09-30,2022-10-01,2022-10-02,2022-10-03,2022-10-04,2022-10-05,2022-10-06,2022-10-07,2022-10-08,2022-10-09,2022-10-10,2022-10-11,2022-10-12,2022-10-13,2022-10-14,2022-10-15,2022-10-16,2022-10-17,2022-10-18,2022-10-19,2022-10-20,2022-10-21,2022-10-22,2022-10-23,2022-10-24,2022-10-25,2022-10-26,2022-10-27,2022-10-28,2022-10-29,2022-10-30,2022-10-31,2022-11-01,2022-11-02,2022-11-03,2022-11-04,2022-11-05,2022-11-06,2022-11-07,2022-11-08,2022-11-09,2022-11-10,2022-11-11,2022-11-12,2022-11-13,2022-11-14,2022-11-15,2022-11-16,2022-11-17,2022-11-18,2022-11-19,2022-11-20,2022-11-21,2022-11-22,2022-11-23,2022-11-24,2022-11-25,2022-11-26,2022-11-27,2022-11-28,2022-11-29,2022-11-30,2022-12-01,2022-12-02,2022-12-03,2022-12-04,2022-12-05,2022-12-06,2022-12-07,2022-12-08,2022-12-09,2022-12-10,2022-12-11,2022-12-12,2022-12-13,2022-12-14,2022-12-15,2022-12-16,2022-12-17,2022-12-18,2022-12-19,2022-12-20,2022-12-21,2022-12-22,2022-12-23,2022-12-24,2022-12-25,2022-12-26,2022-12-27,2022-12-28,2022-12-29,2022-12-30,2022-12-31,2023-01-01,2023-01-02,2023-01-03,2023-01-04,2023-01-05,2023-01-06,2023-01-07,2023-01-08,2023-01-09,2023-01-10,2023-01-11,2023-01-12,2023-01-13,2023-01-14,2023-01-15,2023-01-16,2023-01-17,2023-01-18,2023-01-19,2023-01-20,2023-01-21,2023-01-22,2023-01-23,2023-01-24,2023-01-25,2023-01-26,2023-01-27,2023-01-28,2023-01-29,2023-01-30,2023-01-31,2023-02-01,2023-02-02,2023-02-03,2023-02-04,2023-02-05,2023-02-06,2023-02-07,2023-02-08,2023-02-09,2023-02-10,2023-02-11,2023-02-12,2023-02-13,2023-02-14,2023-02-15,2023-02-16,2023-02-17,2023-02-18,2023-02-19,2023-02-20,2023-02-21,2023-02-22,2023-02-23,2023-02-24,2023-02-25,2023-02-26,2023-02-27,2023-02-28,2023-03-01,2023-03-02,2023-03-03,2023-03-04,2023-03-05,2023-03-06,2023-03-07,2023-03-08,2023-03-09,2023-03-10,2023-03-11,2023-03-12,2023-03-13,2023-03-14,2023-03-15,2023-03-16,2023-03-17,2023-03-18,2023-03-19,2023-03-20,2023-03-21,2023-03-22,2023-03-23,2023-03-24,2023-03-25,2023-03-26,2023-03-27,2023-03-28,2023-03-29,2023-03-30,2023-03-31,2023-04-01,2023-04-02,2023-04-03,2023-04-04,2023-04-05,2023-04-06,2023-04-07,2023-04-08,2023-04-09,2023-04-10,2023-04-11,2023-04-12,2023-04-13,2023-04-14,2023-04-15,2023-04-16,2023-04-17,2023-04-18,2023-04-19,2023-04-20,2023-04-21,2023-04-22,2023-04-23,2023-04-24,2023-04-25,2023-04-26,2023-04-27,2023-04-28,2023-04-29,2023-04-30,2023-05-01,2023-05-02,2023-05-03,2023-05-04,2023-05-05,2023-05-06,2023-05-07,2023-05-08,2023-05-09,2023-05-10,2023-05-11,2023-05-12,2023-05-13,2023-05-14,2023-05-15,2023-05-16,2023-05-17,2023-05-18,2023-05-19,2023-05-20,2023-05-21,2023-05-22,2023-05-23,2023-05-24,2023-05-25,2023-05-26,2023-05-27,2023-05-28,2023-05-29,2023-05-30,2023-05-31,2023-06-01,2023-06-02,2023-06-03,2023-06-04,2023-06-05,2023-06-06,2023-06-07,2023-06-08,2023-06-09,2023-06-10,2023-06-11,2023-06-12,2023-06-13,2023-06-14,2023-06-15,2023-06-16,2023-06-17,2023-06-18,2023-06-19,2023-06-20,2023-06-21,2023-06-22,2023-06-23,2023-06-24,2023-06-25,2023-06-26,2023-06-27,2023-06-28,2023-06-29,2023-06-30,2023-07-01,2023-07-02,2023-07-03,2023-07-04,2023-07-05,2023-07-06,2023-07-07,2023-07-08,2023-07-09,2023-07-10,2023-07-11,2023-07-12,2023-07-13,2023-07-14,2023-07-15,2023-07-16,2023-07-17,2023-07-18,2023-07-19,2023-07-20,2023-07-21,2023-07-22,2023-07-23,2023-07-24,2023-07-25,2023-07-26,2023-07-27,2023-07-28,2023-07-29,2023-07-30,2023-07-31,2023-08-01,2023-08-02,2023-08-03,2023-08-04,2023-08-05,2023-08-06,2023-08-07,2023-08-08,2023-08-09,2023-08-10,2023-08-11,2023-08-12,2023-08-13,2023-08-14,2023-08-15,2023-08-16,2023-08-17,2023-08-18,2023-08-19,2023-08-20,2023-08-21,2023-08-22,2023-08-23,2023-08-24,2023-08-25,2023-08-26,2023-08-27,2023-08-28,2023-08-29,2023-08-30,2023-08-31,2023-09-01,2023-09-02,2023-09-03,2023-09-04,2023-09-05,2023-09-06,2023-09-07,2023-09-08,2023-09-09,2023-09-10,2023-09-11,2023-09-12,2023-09-13,2023-09-14,2023-09-15,2023-09-16,2023-09-17,2023-09-18,2023-09-19,2023-09-20,2023-09-21,2023-09-22,2023-09-23,2023-09-24,2023-09-25,2023-09-26,2023-09-27,2023-09-28,2023-09-29,2023-09-30,2023-10-01,2023-10-02,2023-10-03,2023-10-04,2023-10-05,2023-10-06,2023-10-07,2023-10-08,2023-10-09,2023-10-10,2023-10-11,2023-10-12,2023-10-13,2023-10-14,2023-10-15,2023-10-16,2023-10-17,2023-10-18,2023-10-19,2023-10-20,2023-10-21,2023-10-22,2023-10-23,2023-10-24,2023-10-25,2023-10-26,2023-10-27,2023-10-28,2023-10-29,2023-10-30,2023-10-31,2023-11-01,2023-11-02,2023-11-03,2023-11-04,2023-11-05,2023-11-06,2023-11-07,2023-11-08,2023-11-09,2023-11-10,2023-11-11,2023-11-12,2023-11-13,2023-11-14,2023-11-15,2023-11-16,2023-11-17,2023-11-18,2023-11-19,2023-11-20,2023-11-21,2023-11-22,2023-11-23,2023-11-24,2023-11-25,2023-11-26,2023-11-27,2023-11-28,2023-11-29,2023-11-30,2023-12-01,2023-12-02,2023-12-03,2023-12-04,2023-12-05,2023-12-06,2023-12-07,2023-12-08,2023-12-09,2023-12-10,2023-12-11,2023-12-12,2023-12-13,2023-12-14,2023-12-15,2023-12-16,2023-12-17,2023-12-18,2023-12-19,2023-12-20,2023-12-21,2023-12-22,2023-12-23,2023-12-24,2023-12-25,2023-12-26,2023-12-27,2023-12-28,2023-12-29,2023-12-30,2023-12-31,2024-01-01,2024-01-02,2024-01-03,2024-01-04,2024-01-05,2024-01-06,2024-01-07,2024-01-08,2024-01-09,2024-01-10,2024-01-11,2024-01-12,2024-01-13,2024-01-14,2024-01-15,2024-01-16,2024-01-17,2024-01-18,2024-01-19,2024-01-20,2024-01-21,2024-01-22,2024-01-23,2024-01-24,2024-01-25,2024-01-26,2024-01-27,2024-01-28,2024-01-29,2024-01-30,2024-01-31,2024-02-01,2024-02-02,2024-02-03,2024-02-04,2024-02-05,2024-02-06,2024-02-07,2024-02-08,2024-02-09,2024-02-10,2024-02-11,2024-02-12,2024-02-13,2024-02-14,2024-02-15,2024-02-16,2024-02-17,2024-02-18,2024-02-19,2024-02-20,2024-02-21,2024-02-22,2024-02-23,2024-02-24,2024-02-25,2024-02-26,2024-02-27,2024-02-28,2024-02-29,2024-03-01,2024-03-02,2024-03-03,2024-03-04,2024-03-05,2024-03-06,2024-03-07,2024-03-08,2024-03-09,2024-03-10,2024-03-11,2024-03-12,2024-03-13,2024-03-14,2024-03-15,2024-03-16,2024-03-17,2024-03-18,2024-03-19,2024-03-20,2024-03-21,2024-03-22,2024-03-23,2024-03-24,2024-03-25,2024-03-26,2024-03-27,2024-03-28,2024-03-29,2024-03-30,2024-03-31,2024-04-01,2024-04-02,2024-04-03,2024-04-04,2024-04-05,2024-04-06,2024-04-07,2024-04-08,2024-04-09,2024-04-10,2024-04-11,2024-04-12,2024-04-13,2024-04-14,2024-04-15,2024-04-16,2024-04-17,2024-04-18,2024-04-19,2024-04-20,2024-04-21,2024-04-22,2024-04-23,2024-04-24,2024-04-25,2024-04-26,2024-04-27,2024-04-28,2024-04-29,2024-04-30,2024-05-01,2024-05-02,2024-05-03,2024-05-04,2024-05-05,2024-05-06,2024-05-07,2024-05-08,2024-05-09,2024-05-10,2024-05-11,2024-05-12,2024-05-13,2024-05-14,2024-05-15,2024-05-16,2024-05-17,2024-05-18,2024-05-19,2024-05-20,2024-05-21,2024-05-22,2024-05-23,2024-05-24,2024-05-25,2024-05-26,2024-05-27,2024-05-28,2024-05-29,2024-05-30,2024-05-31,2024-06-01,2024-06-02,2024-06-03,2024-06-04,2024-06-05,2024-06-06,2024-06-07,2024-06-08,2024-06-09,2024-06-10,2024-06-11,2024-06-12,2024-06-13,2024-06-14,2024-06-15,2024-06-16,2024-06-17,2024-06-18,2024-06-19,2024-06-20,2024-06-21,2024-06-22,2024-06-23,2024-06-24,2024-06-25,2024-06-26,2024-06-27,2024-06-28,2024-06-29,2024-06-30,2024-07-01,2024-07-02,2024-07-03,2024-07-04,2024-07-05,2024-07-06,2024-07-07,2024-07-08,2024-07-09,2024-07-10,2024-07-11,2024-07-12,2024-07-13,2024-07-14,2024-07-15,2024-07-16,2024-07-17,2024-07-18,2024-07-19,2024-07-20,2024-07-21,2024-07-22,2024-07-23,2024-07-24,2024-07-25,2024-07-26,2024-07-27,2024-07-28,2024-07-29,2024-07-30,2024-07-31,2024-08-01,2024-08-02,2024-08-03,2024-08-04,2024-08-05,2024-08-06,2024-08-07,2024-08-08,2024-08-09,2024-08-10,2024-08-11,2024-08-12,2024-08-13,2024-08-14,2024-08-15,2024-08-16,2024-08-17,2024-08-18,2024-08-19,2024-08-20,2024-08-21,2024-08-22,2024-08-23,2024-08-24,2024-08-25,2024-08-26,2024-08-27,2024-08-28,2024-08-29,2024-08-30,2024-08-31,2024-09-01,2024-09-02,2024-09-03,2024-09-04,2024-09-05,2024-09-06,2024-09-07,2024-09-08,2024-09-09,2024-09-10,2024-09-11,2024-09-12,2024-09-13,2024-09-14,2024-09-15,2024-09-16,2024-09-17,2024-09-18,2024-09-19,2024-09-20,2024-09-21,2024-09-22,2024-09-23,2024-09-24,2024-09-25,2024-09-26,2024-09-27,2024-09-28,2024-09-29,2024-09-30,2024-10-01,2024-10-02,2024-10-03,2024-10-04,2024-10-05,2024-10-06,2024-10-07,2024-10-08,2024-10-09,2024-10-10,2024-10-11,2024-10-12,2024-10-13,2024-10-14,2024-10-15,2024-10-16,2024-10-17,2024-10-18,2024-10-19,2024-10-20,2024-10-21,2024-10-22,2024-10-23,2024-10-24,2024-10-25,2024-10-26,2024-10-27,2024-10-28,2024-10-29,2024-10-30,2024-10-31,2024-11-01,2024-11-02,2024-11-03,2024-11-04,2024-11-05,2024-11-06,2024-11-07,2024-11-08,2024-11-09,2024-11-10,2024-11-11,2024-11-12,2024-11-13,2024-11-14,2024-11-15,2024-11-16,2024-11-17,2024-11-18,2024-11-19,2024-11-20,2024-11-21,2024-11-22,2024-11-23,2024-11-24,2024-11-25,2024-11-26,2024-11-27,2024-11-28,2024-11-29,2024-11-30,2024-12-01,2024-12-02,2024-12-03,2024-12-04,2024-12-05,2024-12-06,2024-12-07,2024-12-08,2024-12-09,2024-12-10,2024-12-11,2024-12-12,2024-12-13,2024-12-14,2024-12-15,2024-12-16,2024-12-17,2024-12-18,2024-12-19,2024-12-20,2024-12-21,2024-12-22,2024-12-23,2024-12-24,2024-12-25,2024-12-26,2024-12-27,2024-12-28,2024-12-29,2024-12-30,2024-12-31,2025-01-01,2025-01-02,2025-01-03,2025-01-04,2025-01-05,2025-01-06,2025-01-07,2025-01-08,2025-01-09,2025-01-10,2025-01-11,2025-01-12,2025-01-13,2025-01-14,2025-01-15,2025-01-16,2025-01-17,2025-01-18,2025-01-19,2025-01-20,2025-01-21,2025-01-22,2025-01-23,2025-01-24,2025-01-25,2025-01-26,2025-01-27,2025-01-28,2025-01-29,2025-01-30,2025-01-31,2025-02-01,2025-02-02,2025-02-03,2025-02-04,2025-02-05,2025-02-06,2025-02-07,2025-02-08,2025-02-09,2025-02-10,2025-02-11,2025-02-12,2025-02-13,2025-02-14,2025-02-15,2025-02-16,2025-02-17,2025-02-18,2025-02-19,2025-02-20,2025-02-21,2025-02-22,2025-02-23,2025-02-24,2025-02-25,2025-02-26,2025-02-27,2025-02-28,2025-03-01,2025-03-02,2025-03-03,2025-03-04,2025-03-05,2025-03-06,2025-03-07,2025-03-08,2025-03-09,2025-03-10,2025-03-11,2025-03-12,2025-03-13,2025-03-14,2025-03-15,2025-03-16,2025-03-17,2025-03-18,2025-03-19,2025-03-20,2025-03-21,2025-03-22,2025-03-23,2025-03-24,2025-03-25,2025-03-26,2025-03-27,2025-03-28,2025-03-29,2025-03-30,2025-03-31,2025-04-01,2025-04-02,2025-04-03,2025-04-04,2025-04-05,2025-04-06,2025-04-07,2025-04-08,2025-04-09,2025-04-10,2025-04-11,2025-04-12,2025-04-13,2025-04-14,2025-04-15,2025-04-16,2025-04-17,2025-04-18,2025-04-19,2025-04-20,2025-04-21,2025-04-22,2025-04-23,2025-04-24,2025-04-25,2025-04-26,2025-04-27,2025-04-28,2025-04-29,2025-04-30,2025-05-01,2025-05-02,2025-05-03,2025-05-04,2025-05-05,2025-05-06,2025-05-07,2025-05-08,2025-05-09,2025-05-10,2025-05-11,2025-05-12,2025-05-13,2025-05-14,2025-05-15,2025-05-16,2025-05-17,2025-05-18,2025-05-19,2025-05-20,2025-05-21,2025-05-22,2025-05-23,2025-05-24,2025-05-25,2025-05-26,2025-05-27,2025-05-28,2025-05-29,2025-05-30,2025-05-31,2025-06-01,2025-06-02,2025-06-03,2025-06-04,2025-06-05,2025-06-06,2025-06-07,2025-06-08,2025-06-09,2025-06-10,2025-06-11,2025-06-12,2025-06-13,2025-06-14,2025-06-15,2025-06-16,2025-06-17,2025-06-18,2025-06-19,2025-06-20,2025-06-21,2025-06-22,2025-06-23,2025-06-24,2025-06-25,2025-06-26,2025-06-27,2025-06-28,2025-06-29,2025-06-30,2025-07-01,2025-07-02,2025-07-03,2025-07-04,2025-07-05,2025-07-06,2025-07-07,2025-07-08,2025-07-09,2025-07-10,2025-07-11,2025-07-12,2025-07-13,2025-07-14,2025-07-15,2025-07-16,2025-07-17,2025-07-18,2025-07-19,2025-07-20,2025-07-21,2025-07-22,2025-07-23,2025-07-24,2025-07-25,2025-07-26,2025-07-27,2025-07-28,2025-07-29,2025-07-30,2025-07-31,2025-08-01,2025-08-02,2025-08-03,2025-08-04,2025-08-05,2025-08-06,2025-08-07,2025-08-08,2025-08-09,2025-08-10,2025-08-11,2025-08-12,2025-08-13,2025-08-14,2025-08-15,2025-08-16,2025-08-17,2025-08-18,2025-08-19,2025-08-20,2025-08-21,2025-08-22,2025-08-23,2025-08-24,2025-08-25,2025-08-26,2025-08-27,2025-08-28,2025-08-29,2025-08-30,2025-08-31,2025-09-01,2025-09-02,2025-09-03,2025-09-04,2025-09-05,2025-09-06,2025-09-07,2025-09-08,2025-09-09,2025-09-10,2025-09-11,2025-09-12,2025-09-13,2025-09-14,2025-09-15,2025-09-16,2025-09-17,2025-09-18,2025-09-19,2025-09-20,2025-09-21,2025-09-22,2025-09-23,2025-09-24,2025-09-25,2025-09-26,2025-09-27,2025-09-28,2025-09-29,2025-09-30,2025-10-01,2025-10-02,2025-10-03,2025-10-04,2025-10-05,2025-10-06,2025-10-07,2025-10-08,2025-10-09,2025-10-10,2025-10-11,2025-10-12,2025-10-13,2025-10-14,2025-10-15,2025-10-16,2025-10-17,2025-10-18,2025-10-19,2025-10-20,2025-10-21,2025-10-22,2025-10-23,2025-10-24,2025-10-25,2025-10-26,2025-10-27,2025-10-28,2025-10-29,2025-10-30,2025-10-31,2025-11-01,2025-11-02,2025-11-03,2025-11-04,2025-11-05,2025-11-06,2025-11-07,2025-11-08,2025-11-09,2025-11-10,2025-11-11,2025-11-12,2025-11-13,2025-11-14,2025-11-15,2025-11-16,2025-11-17,2025-11-18,2025-11-19,2025-11-20,2025-11-21,2025-11-22,2025-11-23,2025-11-24,2025-11-25,2025-11-26,2025-11-27,2025-11-28,2025-11-29,2025-11-30,2025-12-01,2025-12-02,2025-12-03,2025-12-04,2025-12-05,2025-12-06,2025-12-07,2025-12-08,2025-12-09,2025-12-10,2025-12-11,2025-12-12,2025-12-13,2025-12-14,2025-12-15,2025-12-16,2025-12-17,2025-12-18,2025-12-19,2025-12-20,2025-12-21,2025-12-22,2025-12-23,2025-12-24,2025-12-25,2025-12-26,2025-12-27,2025-12-28,2025-12-29,2025-12-30,2025-12-31,2026-01-01,2026-01-02,2026-01-03,2026-01-04,2026-01-05,2026-01-06,2026-01-07,2026-01-08,2026-01-09,2026-01-10,2026-01-11,2026-01-12,2026-01-13,2026-01-14,2026-01-15,2026-01-16,2026-01-17,2026-01-18,2026-01-19,2026-01-20,2026-01-21,2026-01-22,2026-01-23,2026-01-24,2026-01-25,2026-01-26,2026-01-27,2026-01-28,2026-01-29,2026-01-30,2026-01-31,2026-02-01,2026-02-02,2026-02-03,2026-02-04,2026-02-05,2026-02-06,2026-02-07,2026-02-08,2026-02-09,2026-02-10,2026-02-11,2026-02-12,2026-02-13,2026-02-14,2026-02-15,2026-02-16,2026-02-17,2026-02-18,2026-02-19,2026-02-20,2026-02-21,2026-02-22,2026-02-23,2026-02-24,2026-02-25,2026-02-26,2026-02-27,2026-02-28,2026-03-01,2026-03-02,2026-03-03,2026-03-04,2026-03-05,2026-03-06,2026-03-07,2026-03-08,2026-03-09,2026-03-10,2026-03-11,2026-03-12,2026-03-13,2026-03-14,2026-03-15,2026-03-16,2026-03-17,2026-03-18,2026-03-19,2026-03-20,2026-03-21,2026-03-22,2026-03-23,2026-03-24,2026-03-25,2026-03-26,2026-03-27,2026-03-28,2026-03-29,2026-03-30,2026-03-31,2026-04-01,2026-04-02,2026-04-03,2026-04-04,2026-04-05,2026-04-06,2026-04-07,2026-04-08,2026-04-09,2026-04-10,2026-04-11,2026-04-12,2026-04-13,2026-04-14,2026-04-15,2026-04-16,2026-04-17,2026-04-18,2026-04-19,2026-04-20,2026-04-21,2026-04-22,2026-04-23,2026-04-24,2026-04-25,2026-04-26,2026-04-27,2026-04-28,2026-04-29,2026-04-30,2026-05-01,2026-05-02,2026-05-03,2026-05-04,2026-05-05,2026-05-06,2026-05-07,2026-05-08,2026-05-09,2026-05-10,2026-05-11,2026-05-12,2026-05-13,2026-05-14,2026-05-15,2026-05-16,2026-05-17,2026-05-18,2026-05-19,2026-05-20,2026-05-21,2026-05-22,2026-05-23,2026-05-24,2026-05-25,2026-05-26,2026-05-27,2026-05-28,2026-05-29,2026-05-30,2026-05-31,2026-06-01,2026-06-02,2026-06-03,2026-06-04,2026-06-05,2026-06-06,2026-06-07,2026-06-08,2026-06-09,2026-06-10,2026-06-11,2026-06-12,2026-06-13,2026-06-14,2026-06-15,2026-06-16,2026-06-17,2026-06-18,2026-06-19,2026-06-20,2026-06-21,2026-06-22,2026-06-23,2026-06-24,2026-06-25,2026-06-26,2026-06-27,2026-06-28,2026-06-29,2026-06-30,2026-07-01,2026-07-02,2026-07-03,2026-07-04,2026-07-05,2026-07-06,2026-07-07,2026-07-08,2026-07-09,2026-07-10,2026-07-11,2026-07-12,2026-07-13,2026-07-14,2026-07-15,2026-07-16,2026-07-17,2026-07-18,2026-07-19,2026-07-20,2026-07-21,2026-07-22,2026-07-23,2026-07-24,2026-07-25,2026-07-26,2026-07-27,2026-07-28,2026-07-29,2026-07-30,2026-07-31,2026-08-01,2026-08-02,2026-08-03,2026-08-04,2026-08-05,2026-08-06,2026-08-07,2026-08-08,2026-08-09,2026-08-10,2026-08-11,2026-08-12,2026-08-13,2026-08-14,2026-08-15,2026-08-16,2026-08-17,2026-08-18,2026-08-19,2026-08-20,2026-08-21,2026-08-22,2026-08-23,2026-08-24,2026-08-25,2026-08-26,2026-08-27,2026-08-28,2026-08-29,2026-08-30,2026-08-31,2026-09-01,2026-09-02,2026-09-03,2026-09-04,2026-09-05,2026-09-06,2026-09-07,2026-09-08,2026-09-09,2026-09-10,2026-09-11,2026-09-12,2026-09-13,2026-09-14,2026-09-15,2026-09-16,2026-09-17,2026-09-18,2026-09-19,2026-09-20,2026-09-21,2026-09-22,2026-09-23,2026-09-24,2026-09-25,2026-09-26,2026-09-27,2026-09-28,2026-09-29,2026-09-30,2026-10-01,2026-10-02,2026-10-03,2026-10-04,2026-10-05,2026-10-06,2026-10-07,2026-10-08,2026-10-09,2026-10-10,2026-10-11,2026-10-12,2026-10-13,2026-10-14,2026-10-15,2026-10-16,2026-10-17,2026-10-18,2026-10-19,2026-10-20,2026-10-21,2026-10-22,2026-10-23,2026-10-24,2026-10-25,2026-10-26,2026-10-27,2026-10-28,2026-10-29,2026-10-30,2026-10-31,2026-11-01,2026-11-02,2026-11-03,2026-11-04,2026-11-05,2026-11-06,2026-11-07,2026-11-08,2026-11-09,2026-11-10,2026-11-11,2026-11-12,2026-11-13,2026-11-14,2026-11-15,2026-11-16,2026-11-17,2026-11-18,2026-11-19,2026-11-20,2026-11-21,2026-11-22,2026-11-23,2026-11-24,2026-11-25,2026-11-26,2026-11-27,2026-11-28,2026-11-29,2026-11-30,2026-12-01,2026-12-02,2026-12-03,2026-12-04,2026-12-05,2026-12-06,2026-12-07,2026-12-08,2026-12-09,2026-12-10,2026-12-11,2026-12-12,2026-12-13,2026-12-14,2026-12-15,2026-12-16,2026-12-17,2026-12-18,2026-12-19,2026-12-20,2026-12-21,2026-12-22,2026-12-23,2026-12-24,2026-12-25,2026-12-26,2026-12-27,2026-12-28,2026-12-29,2026-12-30,2026-12-31,2027-01-01,2027-01-02,2027-01-03,2027-01-04,2027-01-05,2027-01-06,2027-01-07,2027-01-08,2027-01-09,2027-01-10,2027-01-11,2027-01-12,2027-01-13,2027-01-14,2027-01-15,2027-01-16,2027-01-17,2027-01-18,2027-01-19,2027-01-20,2027-01-21,2027-01-22,2027-01-23,2027-01-24,2027-01-25,2027-01-26,2027-01-27,2027-01-28,2027-01-29,2027-01-30,2027-01-31,2027-02-01,2027-02-02,2027-02-03,2027-02-04,2027-02-05,2027-02-06,2027-02-07,2027-02-08,2027-02-09,2027-02-10,2027-02-11,2027-02-12,2027-02-13,2027-02-14,2027-02-15,2027-02-16,2027-02-17,2027-02-18,2027-02-19,2027-02-20,2027-02-21,2027-02-22,2027-02-23,2027-02-24,2027-02-25,2027-02-26,2027-02-27,2027-02-28,2027-03-01,2027-03-02,2027-03-03,2027-03-04,2027-03-05,2027-03-06,2027-03-07,2027-03-08,2027-03-09,2027-03-10,2027-03-11,2027-03-12,2027-03-13,2027-03-14,2027-03-15,2027-03-16,2027-03-17,2027-03-18,2027-03-19,2027-03-20,2027-03-21,2027-03-22,2027-03-23,2027-03-24,2027-03-25,2027-03-26,2027-03-27,2027-03-28,2027-03-29,2027-03-30,2027-03-31,2027-04-01,2027-04-02,2027-04-03,2027-04-04,2027-04-05,2027-04-06,2027-04-07,2027-04-08,2027-04-09,2027-04-10,2027-04-11,2027-04-12,2027-04-13,2027-04-14,2027-04-15,2027-04-16,2027-04-17,2027-04-18,2027-04-19,2027-04-20,2027-04-21,2027-04-22,2027-04-23,2027-04-24,2027-04-25,2027-04-26,2027-04-27,2027-04-28,2027-04-29,2027-04-30,2027-05-01,2027-05-02,2027-05-03,2027-05-04,2027-05-05,2027-05-06,2027-05-07,2027-05-08,2027-05-09,2027-05-10,2027-05-11,2027-05-12,2027-05-13,2027-05-14,2027-05-15,2027-05-16,2027-05-17,2027-05-18,2027-05-19,2027-05-20,2027-05-21,2027-05-22,2027-05-23,2027-05-24,2027-05-25,2027-05-26,2027-05-27,2027-05-28,2027-05-29,2027-05-30,2027-05-31,2027-06-01,2027-06-02,2027-06-03,2027-06-04,2027-06-05,2027-06-06,2027-06-07,2027-06-08,2027-06-09,2027-06-10,2027-06-11,2027-06-12,2027-06-13,2027-06-14,2027-06-15,2027-06-16,2027-06-17,2027-06-18,2027-06-19,2027-06-20,2027-06-21,2027-06-22,2027-06-23,2027-06-24,2027-06-25,2027-06-26,2027-06-27,2027-06-28,2027-06-29,2027-06-30,2027-07-01,2027-07-02,2027-07-03,2027-07-04,2027-07-05,2027-07-06,2027-07-07,2027-07-08,2027-07-09,2027-07-10,2027-07-11,2027-07-12,2027-07-13,2027-07-14,2027-07-15,2027-07-16,2027-07-17,2027-07-18,2027-07-19,2027-07-20,2027-07-21,2027-07-22,2027-07-23,2027-07-24,2027-07-25,2027-07-26,2027-07-27,2027-07-28,2027-07-29,2027-07-30,2027-07-31,2027-08-01,2027-08-02,2027-08-03,2027-08-04,2027-08-05,2027-08-06,2027-08-07,2027-08-08,2027-08-09,2027-08-10,2027-08-11,2027-08-12,2027-08-13,2027-08-14,2027-08-15,2027-08-16,2027-08-17,2027-08-18,2027-08-19,2027-08-20,2027-08-21,2027-08-22,2027-08-23,2027-08-24,2027-08-25,2027-08-26,2027-08-27,2027-08-28,2027-08-29,2027-08-30,2027-08-31,2027-09-01,2027-09-02,2027-09-03,2027-09-04,2027-09-05,2027-09-06,2027-09-07,2027-09-08,2027-09-09,2027-09-10,2027-09-11,2027-09-12,2027-09-13,2027-09-14,2027-09-15,2027-09-16,2027-09-17,2027-09-18,2027-09-19,2027-09-20,2027-09-21,2027-09-22,2027-09-23,2027-09-24,2027-09-25,2027-09-26,2027-09-27,2027-09-28,2027-09-29,2027-09-30,2027-10-01,2027-10-02,2027-10-03,2027-10-04,2027-10-05,2027-10-06,2027-10-07,2027-10-08,2027-10-09,2027-10-10,2027-10-11,2027-10-12,2027-10-13,2027-10-14,2027-10-15,2027-10-16,2027-10-17,2027-10-18,2027-10-19,2027-10-20,2027-10-21,2027-10-22,2027-10-23,2027-10-24,2027-10-25,2027-10-26,2027-10-27,2027-10-28,2027-10-29,2027-10-30,2027-10-31,2027-11-01,2027-11-02,2027-11-03,2027-11-04,2027-11-05,2027-11-06,2027-11-07,2027-11-08,2027-11-09,2027-11-10,2027-11-11,2027-11-12,2027-11-13,2027-11-14,2027-11-15,2027-11-16,2027-11-17,2027-11-18,2027-11-19,2027-11-20,2027-11-21,2027-11-22,2027-11-23,2027-11-24,2027-11-25,2027-11-26,2027-11-27,2027-11-28,2027-11-29,2027-11-30,2027-12-01,2027-12-02,2027-12-03,2027-12-04,2027-12-05,2027-12-06,2027-12-07,2027-12-08,2027-12-09,2027-12-10,2027-12-11,2027-12-12,2027-12-13,2027-12-14,2027-12-15,2027-12-16,2027-12-17,2027-12-18,2027-12-19,2027-12-20,2027-12-21,2027-12-22,2027-12-23,2027-12-24,2027-12-25,2027-12-26,2027-12-27,2027-12-28,2027-12-29,2027-12-30,2027-12-31,2028-01-01,2028-01-02,2028-01-03,2028-01-04,2028-01-05,2028-01-06,2028-01-07,2028-01-08,2028-01-09,2028-01-10,2028-01-11,2028-01-12,2028-01-13,2028-01-14,2028-01-15,2028-01-16,2028-01-17,2028-01-18,2028-01-19,2028-01-20,2028-01-21,2028-01-22,2028-01-23,2028-01-24,2028-01-25,2028-01-26,2028-01-27,2028-01-28,2028-01-29,2028-01-30,2028-01-31,2028-02-01,2028-02-02,2028-02-03,2028-02-04,2028-02-05,2028-02-06,2028-02-07,2028-02-08,2028-02-09,2028-02-10,2028-02-11,2028-02-12,2028-02-13,2028-02-14,2028-02-15,2028-02-16,2028-02-17,2028-02-18,2028-02-19,2028-02-20,2028-02-21,2028-02-22,2028-02-23,2028-02-24,2028-02-25,2028-02-26,2028-02-27,2028-02-28,2028-02-29,2028-03-01,2028-03-02,2028-03-03,2028-03-04,2028-03-05,2028-03-06,2028-03-07,2028-03-08,2028-03-09,2028-03-10,2028-03-11,2028-03-12,2028-03-13,2028-03-14,2028-03-15,2028-03-16,2028-03-17,2028-03-18,2028-03-19,2028-03-20,2028-03-21,2028-03-22,2028-03-23,2028-03-24,2028-03-25,2028-03-26,2028-03-27,2028-03-28,2028-03-29,2028-03-30,2028-03-31,2028-04-01,2028-04-02,2028-04-03,2028-04-04,2028-04-05,2028-04-06,2028-04-07,2028-04-08,2028-04-09,2028-04-10,2028-04-11,2028-04-12,2028-04-13,2028-04-14,2028-04-15,2028-04-16,2028-04-17,2028-04-18,2028-04-19,2028-04-20,2028-04-21,2028-04-22,2028-04-23,2028-04-24,2028-04-25,2028-04-26,2028-04-27,2028-04-28,2028-04-29,2028-04-30,2028-05-01,2028-05-02,2028-05-03,2028-05-04,2028-05-05,2028-05-06,2028-05-07,2028-05-08,2028-05-09,2028-05-10,2028-05-11,2028-05-12,2028-05-13,2028-05-14,2028-05-15,2028-05-16,2028-05-17,2028-05-18,2028-05-19,2028-05-20,2028-05-21,2028-05-22,2028-05-23,2028-05-24,2028-05-25,2028-05-26,2028-05-27,2028-05-28,2028-05-29,2028-05-30,2028-05-31,2028-06-01,2028-06-02,2028-06-03,2028-06-04,2028-06-05,2028-06-06,2028-06-07,2028-06-08,2028-06-09,2028-06-10,2028-06-11,2028-06-12,2028-06-13,2028-06-14,2028-06-15,2028-06-16,2028-06-17,2028-06-18,2028-06-19,2028-06-20,2028-06-21,2028-06-22,2028-06-23,2028-06-24,2028-06-25,2028-06-26,2028-06-27,2028-06-28,2028-06-29,2028-06-30,2028-07-01,2028-07-02,2028-07-03,2028-07-04,2028-07-05,2028-07-06,2028-07-07,2028-07-08,2028-07-09,2028-07-10,2028-07-11,2028-07-12,2028-07-13,2028-07-14,2028-07-15,2028-07-16,2028-07-17,2028-07-18,2028-07-19,2028-07-20,2028-07-21,2028-07-22,2028-07-23,2028-07-24,2028-07-25,2028-07-26,2028-07-27,2028-07-28,2028-07-29,2028-07-30,2028-07-31,2028-08-01,2028-08-02,2028-08-03,2028-08-04,2028-08-05,2028-08-06,2028-08-07,2028-08-08,2028-08-09,2028-08-10,2028-08-11,2028-08-12,2028-08-13,2028-08-14,2028-08-15,2028-08-16,2028-08-17,2028-08-18,2028-08-19,2028-08-20,2028-08-21,2028-08-22,2028-08-23,2028-08-24,2028-08-25,2028-08-26,2028-08-27,2028-08-28,2028-08-29,2028-08-30,2028-08-31,2028-09-01,2028-09-02,2028-09-03,2028-09-04,2028-09-05,2028-09-06,2028-09-07,2028-09-08,2028-09-09,2028-09-10,2028-09-11,2028-09-12,2028-09-13,2028-09-14,2028-09-15,2028-09-16,2028-09-17,2028-09-18,2028-09-19,2028-09-20,2028-09-21,2028-09-22,2028-09-23,2028-09-24,2028-09-25,2028-09-26,2028-09-27,2028-09-28,2028-09-29,2028-09-30,2028-10-01,2028-10-02,2028-10-03,2028-10-04,2028-10-05,2028-10-06,2028-10-07,2028-10-08,2028-10-09,2028-10-10,2028-10-11,2028-10-12,2028-10-13,2028-10-14,2028-10-15,2028-10-16,2028-10-17,2028-10-18,2028-10-19,2028-10-20,2028-10-21,2028-10-22,2028-10-23,2028-10-24,2028-10-25,2028-10-26,2028-10-27,2028-10-28,2028-10-29,2028-10-30,2028-10-31,2028-11-01,2028-11-02,2028-11-03,2028-11-04,2028-11-05,2028-11-06,2028-11-07,2028-11-08,2028-11-09,2028-11-10,2028-11-11,2028-11-12,2028-11-13,2028-11-14,2028-11-15,2028-11-16,2028-11-17,2028-11-18,2028-11-19,2028-11-20,2028-11-21,2028-11-22,2028-11-23,2028-11-24,2028-11-25,2028-11-26,2028-11-27,2028-11-28,2028-11-29,2028-11-30,2028-12-01,2028-12-02,2028-12-03,2028-12-04,2028-12-05,2028-12-06,2028-12-07,2028-12-08,2028-12-09,2028-12-10,2028-12-11,2028-12-12,2028-12-13,2028-12-14,2028-12-15,2028-12-16,2028-12-17,2028-12-18,2028-12-19,2028-12-20,2028-12-21,2028-12-22,2028-12-23,2028-12-24,2028-12-25,2028-12-26,2028-12-27,2028-12-28,2028-12-29,2028-12-30,2028-12-31"
                                                        >
                                                            <div className="tourmaster-custom-start-date gdlr-core-skin-e-background">
                                                                <div className="tourmaster-head gdlr-core-skin-e-content">
                                                                    Check In
                                                                </div>
                                                                <div className="tourmaster-tail gdlr-core-skin-e-content">
                                                                    Jun 13, 2022
                                                                </div>
                                                                <input
                                                                    type="hidden"
                                                                    name="start_date"
                                                                    defaultValue="2022-06-13"
                                                                />
                                                            </div>
                                                            <div className="tourmaster-custom-end-date gdlr-core-skin-e-background">
                                                                <div className="tourmaster-head gdlr-core-skin-e-content">
                                                                    Check Out
                                                                </div>
                                                                <div className="tourmaster-tail gdlr-core-skin-e-content">
                                                                    Jun 14, 2022
                                                                </div>
                                                                <input
                                                                    type="hidden"
                                                                    name="end_date"
                                                                    defaultValue="2022-06-14"
                                                                />
                                                            </div>
                                                            <div
                                                                className="tourmaster-custom-datepicker-wrap"
                                                                data-date-format="d M yy"
                                                            >
                                                                <i className="tourmaster-custom-datepicker-close icon_close" />
                                                                <div className="tourmaster-custom-datepicker-title">
                                                                    13 Jun 2022 - 14 Jun 2022
                                                                </div>
                                                                <div
                                                                    className="tourmaster-custom-datepicker-calendar hasDatepicker"
                                                                    id="dp1656052010976"
                                                                >
                                                                    <div
                                                                        className="ui-datepicker-inline ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"
                                                                        style={{ display: "block" }}
                                                                    >
                                                                        <div className="ui-datepicker-header ui-widget-header ui-helper-clearfix ui-corner-all">
                                                                            <a
                                                                                className="ui-datepicker-prev ui-corner-all ui-state-disabled"
                                                                                title="Previous"
                                                                            >
                                                                                <span className="ui-icon ui-icon-circle-triangle-w">
                                                                                    Previous
                                                                                </span>
                                                                            </a>
                                                                            <a
                                                                                className="ui-datepicker-next ui-corner-all"
                                                                                data-handler="next"
                                                                                data-event="click"
                                                                                title="Next"
                                                                            >
                                                                                <span className="ui-icon ui-icon-circle-triangle-e">
                                                                                    Next
                                                                                </span>
                                                                            </a>
                                                                            <div className="ui-datepicker-title">
                                                                                <select
                                                                                    className="ui-datepicker-month"
                                                                                    aria-label="Select month"
                                                                                    data-handler="selectMonth"
                                                                                    data-event="change"
                                                                                >
                                                                                    <option value={5}>
                                                                                        Jun
                                                                                    </option>
                                                                                    <option value={6}>Jul</option>
                                                                                    <option value={7}>Aug</option>
                                                                                    <option value={8}>Sep</option>
                                                                                    <option value={9}>Oct</option>
                                                                                    <option value={10}>Nov</option>
                                                                                    <option value={11}>Dec</option>
                                                                                </select>
                                                                                <select
                                                                                    className="ui-datepicker-year"
                                                                                    aria-label="Select year"
                                                                                    data-handler="selectYear"
                                                                                    data-event="change"
                                                                                >
                                                                                    <option value={2022}>
                                                                                        2022
                                                                                    </option>
                                                                                    <option value={2023}>2023</option>
                                                                                    <option value={2024}>2024</option>
                                                                                    <option value={2025}>2025</option>
                                                                                    <option value={2026}>2026</option>
                                                                                    <option value={2027}>2027</option>
                                                                                    <option value={2028}>2028</option>
                                                                                </select>
                                                                            </div>
                                                                        </div>
                                                                        <table className="ui-datepicker-calendar">
                                                                            <thead>
                                                                                <tr>
                                                                                    <th scope="col">
                                                                                        <span title="Monday">M</span>
                                                                                    </th>
                                                                                    <th scope="col">
                                                                                        <span title="Tuesday">T</span>
                                                                                    </th>
                                                                                    <th scope="col">
                                                                                        <span title="Wednesday">W</span>
                                                                                    </th>
                                                                                    <th scope="col">
                                                                                        <span title="Thursday">T</span>
                                                                                    </th>
                                                                                    <th scope="col">
                                                                                        <span title="Friday">F</span>
                                                                                    </th>
                                                                                    <th
                                                                                        scope="col"
                                                                                        className="ui-datepicker-week-end"
                                                                                    >
                                                                                        <span title="Saturday">S</span>
                                                                                    </th>
                                                                                    <th
                                                                                        scope="col"
                                                                                        className="ui-datepicker-week-end"
                                                                                    >
                                                                                        <span title="Sunday">S</span>
                                                                                    </th>
                                                                                </tr>
                                                                            </thead>
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td className=" ui-datepicker-other-month ui-datepicker-unselectable ui-state-disabled">
                                                                                        &nbsp;
                                                                                    </td>
                                                                                    <td className=" ui-datepicker-other-month ui-datepicker-unselectable ui-state-disabled">
                                                                                        &nbsp;
                                                                                    </td>
                                                                                    <td className=" ui-datepicker-unselectable ui-state-disabled ">
                                                                                        <span className="ui-state-default">1</span>
                                                                                    </td>
                                                                                    <td className=" ui-datepicker-unselectable ui-state-disabled ">
                                                                                        <span className="ui-state-default">2</span>
                                                                                    </td>
                                                                                    <td className=" ui-datepicker-unselectable ui-state-disabled ">
                                                                                        <span className="ui-state-default">3</span>
                                                                                    </td>
                                                                                    <td className=" ui-datepicker-week-end ui-datepicker-unselectable ui-state-disabled ">
                                                                                        <span className="ui-state-default">4</span>
                                                                                    </td>
                                                                                    <td className=" ui-datepicker-week-end ui-datepicker-unselectable ui-state-disabled ">
                                                                                        <span className="ui-state-default">5</span>
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td className=" ui-datepicker-unselectable ui-state-disabled ">
                                                                                        <span className="ui-state-default">6</span>
                                                                                    </td>
                                                                                    <td className=" ui-datepicker-unselectable ui-state-disabled ">
                                                                                        <span className="ui-state-default">7</span>
                                                                                    </td>
                                                                                    <td className=" ui-datepicker-unselectable ui-state-disabled ">
                                                                                        <span className="ui-state-default">8</span>
                                                                                    </td>
                                                                                    <td className=" ui-datepicker-unselectable ui-state-disabled ">
                                                                                        <span className="ui-state-default">9</span>
                                                                                    </td>
                                                                                    <td className=" ui-datepicker-unselectable ui-state-disabled ">
                                                                                        <span className="ui-state-default">10</span>
                                                                                    </td>
                                                                                    <td className=" ui-datepicker-week-end ui-datepicker-unselectable ui-state-disabled ">
                                                                                        <span className="ui-state-default">11</span>
                                                                                    </td>
                                                                                    <td className=" ui-datepicker-week-end ui-datepicker-unselectable ui-state-disabled ">
                                                                                        <span className="ui-state-default">12</span>
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td
                                                                                        className=" ui-datepicker-days-cell-over tourmaster-start ui-datepicker-current-day"
                                                                                        data-handler="selectDay"
                                                                                        data-event="click"
                                                                                        data-month={5}
                                                                                        data-year={2022}
                                                                                    >
                                                                                        <a
                                                                                            className="ui-state-default ui-state-active ui-state-hover"
                                                                                            href="#"
                                                                                            aria-current="true"
                                                                                            data-date={13}
                                                                                        >
                                                                                            13
                                                                                        </a>
                                                                                    </td>
                                                                                    <td
                                                                                        className=" tourmaster-end"
                                                                                        data-handler="selectDay"
                                                                                        data-event="click"
                                                                                        data-month={5}
                                                                                        data-year={2022}
                                                                                    >
                                                                                        <a
                                                                                            className="ui-state-default"
                                                                                            href="#"
                                                                                            aria-current="false"
                                                                                            data-date={14}
                                                                                        >
                                                                                            14
                                                                                        </a>
                                                                                    </td>
                                                                                    <td
                                                                                        className=" "
                                                                                        data-handler="selectDay"
                                                                                        data-event="click"
                                                                                        data-month={5}
                                                                                        data-year={2022}
                                                                                    >
                                                                                        <a
                                                                                            className="ui-state-default"
                                                                                            href="#"
                                                                                            aria-current="false"
                                                                                            data-date={15}
                                                                                        >
                                                                                            15
                                                                                        </a>
                                                                                    </td>
                                                                                    <td
                                                                                        className=" "
                                                                                        data-handler="selectDay"
                                                                                        data-event="click"
                                                                                        data-month={5}
                                                                                        data-year={2022}
                                                                                    >
                                                                                        <a
                                                                                            className="ui-state-default"
                                                                                            href="#"
                                                                                            aria-current="false"
                                                                                            data-date={16}
                                                                                        >
                                                                                            16
                                                                                        </a>
                                                                                    </td>
                                                                                    <td
                                                                                        className=" "
                                                                                        data-handler="selectDay"
                                                                                        data-event="click"
                                                                                        data-month={5}
                                                                                        data-year={2022}
                                                                                    >
                                                                                        <a
                                                                                            className="ui-state-default"
                                                                                            href="#"
                                                                                            aria-current="false"
                                                                                            data-date={17}
                                                                                        >
                                                                                            17
                                                                                        </a>
                                                                                    </td>
                                                                                    <td
                                                                                        className=" ui-datepicker-week-end "
                                                                                        data-handler="selectDay"
                                                                                        data-event="click"
                                                                                        data-month={5}
                                                                                        data-year={2022}
                                                                                    >
                                                                                        <a
                                                                                            className="ui-state-default"
                                                                                            href="#"
                                                                                            aria-current="false"
                                                                                            data-date={18}
                                                                                        >
                                                                                            18
                                                                                        </a>
                                                                                    </td>
                                                                                    <td
                                                                                        className=" ui-datepicker-week-end "
                                                                                        data-handler="selectDay"
                                                                                        data-event="click"
                                                                                        data-month={5}
                                                                                        data-year={2022}
                                                                                    >
                                                                                        <a
                                                                                            className="ui-state-default"
                                                                                            href="#"
                                                                                            aria-current="false"
                                                                                            data-date={19}
                                                                                        >
                                                                                            19
                                                                                        </a>
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td
                                                                                        className=" "
                                                                                        data-handler="selectDay"
                                                                                        data-event="click"
                                                                                        data-month={5}
                                                                                        data-year={2022}
                                                                                    >
                                                                                        <a
                                                                                            className="ui-state-default"
                                                                                            href="#"
                                                                                            aria-current="false"
                                                                                            data-date={20}
                                                                                        >
                                                                                            20
                                                                                        </a>
                                                                                    </td>
                                                                                    <td
                                                                                        className=" "
                                                                                        data-handler="selectDay"
                                                                                        data-event="click"
                                                                                        data-month={5}
                                                                                        data-year={2022}
                                                                                    >
                                                                                        <a
                                                                                            className="ui-state-default"
                                                                                            href="#"
                                                                                            aria-current="false"
                                                                                            data-date={21}
                                                                                        >
                                                                                            21
                                                                                        </a>
                                                                                    </td>
                                                                                    <td
                                                                                        className=" "
                                                                                        data-handler="selectDay"
                                                                                        data-event="click"
                                                                                        data-month={5}
                                                                                        data-year={2022}
                                                                                    >
                                                                                        <a
                                                                                            className="ui-state-default"
                                                                                            href="#"
                                                                                            aria-current="false"
                                                                                            data-date={22}
                                                                                        >
                                                                                            22
                                                                                        </a>
                                                                                    </td>
                                                                                    <td
                                                                                        className=" "
                                                                                        data-handler="selectDay"
                                                                                        data-event="click"
                                                                                        data-month={5}
                                                                                        data-year={2022}
                                                                                    >
                                                                                        <a
                                                                                            className="ui-state-default"
                                                                                            href="#"
                                                                                            aria-current="false"
                                                                                            data-date={23}
                                                                                        >
                                                                                            23
                                                                                        </a>
                                                                                    </td>
                                                                                    <td
                                                                                        className="  ui-datepicker-today"
                                                                                        data-handler="selectDay"
                                                                                        data-event="click"
                                                                                        data-month={5}
                                                                                        data-year={2022}
                                                                                    >
                                                                                        <a
                                                                                            className="ui-state-default ui-state-highlight"
                                                                                            href="#"
                                                                                            aria-current="false"
                                                                                            data-date={24}
                                                                                        >
                                                                                            24
                                                                                        </a>
                                                                                    </td>
                                                                                    <td
                                                                                        className=" ui-datepicker-week-end "
                                                                                        data-handler="selectDay"
                                                                                        data-event="click"
                                                                                        data-month={5}
                                                                                        data-year={2022}
                                                                                    >
                                                                                        <a
                                                                                            className="ui-state-default"
                                                                                            href="#"
                                                                                            aria-current="false"
                                                                                            data-date={25}
                                                                                        >
                                                                                            25
                                                                                        </a>
                                                                                    </td>
                                                                                    <td
                                                                                        className=" ui-datepicker-week-end "
                                                                                        data-handler="selectDay"
                                                                                        data-event="click"
                                                                                        data-month={5}
                                                                                        data-year={2022}
                                                                                    >
                                                                                        <a
                                                                                            className="ui-state-default"
                                                                                            href="#"
                                                                                            aria-current="false"
                                                                                            data-date={26}
                                                                                        >
                                                                                            26
                                                                                        </a>
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td
                                                                                        className=" "
                                                                                        data-handler="selectDay"
                                                                                        data-event="click"
                                                                                        data-month={5}
                                                                                        data-year={2022}
                                                                                    >
                                                                                        <a
                                                                                            className="ui-state-default"
                                                                                            href="#"
                                                                                            aria-current="false"
                                                                                            data-date={27}
                                                                                        >
                                                                                            27
                                                                                        </a>
                                                                                    </td>
                                                                                    <td
                                                                                        className=" "
                                                                                        data-handler="selectDay"
                                                                                        data-event="click"
                                                                                        data-month={5}
                                                                                        data-year={2022}
                                                                                    >
                                                                                        <a
                                                                                            className="ui-state-default"
                                                                                            href="#"
                                                                                            aria-current="false"
                                                                                            data-date={28}
                                                                                        >
                                                                                            28
                                                                                        </a>
                                                                                    </td>
                                                                                    <td
                                                                                        className=" "
                                                                                        data-handler="selectDay"
                                                                                        data-event="click"
                                                                                        data-month={5}
                                                                                        data-year={2022}
                                                                                    >
                                                                                        <a
                                                                                            className="ui-state-default"
                                                                                            href="#"
                                                                                            aria-current="false"
                                                                                            data-date={29}
                                                                                        >
                                                                                            29
                                                                                        </a>
                                                                                    </td>
                                                                                    <td
                                                                                        className=" "
                                                                                        data-handler="selectDay"
                                                                                        data-event="click"
                                                                                        data-month={5}
                                                                                        data-year={2022}
                                                                                    >
                                                                                        <a
                                                                                            className="ui-state-default"
                                                                                            href="#"
                                                                                            aria-current="false"
                                                                                            data-date={30}
                                                                                        >
                                                                                            30
                                                                                        </a>
                                                                                    </td>
                                                                                    <td className=" ui-datepicker-other-month ui-datepicker-unselectable ui-state-disabled">
                                                                                        &nbsp;
                                                                                    </td>
                                                                                    <td className=" ui-datepicker-week-end ui-datepicker-other-month ui-datepicker-unselectable ui-state-disabled">
                                                                                        &nbsp;
                                                                                    </td>
                                                                                    <td className=" ui-datepicker-week-end ui-datepicker-other-month ui-datepicker-unselectable ui-state-disabled">
                                                                                        &nbsp;
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="tourmaster-room-amount-selection ">
                                                            <div className="tourmaster-custom-amount-display gdlr-core-skin-e-background">
                                                                <div className="tourmaster-head gdlr-core-skin-e-content">
                                                                    Room
                                                                </div>
                                                                <div className="tourmaster-tail gdlr-core-skin-e-content">
                                                                    <span className="tourmaster-space" />1
                                                                </div>
                                                            </div>
                                                            <div className="tourmaster-custom-amount-selection-wrap">
                                                                <div className="tourmaster-custom-amount-selection-item clearfix">
                                                                    <div className="tourmaster-head">Room</div>
                                                                    <div className="tourmaster-tail">
                                                                        <span className="tourmaster-minus">
                                                                            <i className="icon_minus-06" />
                                                                        </span>
                                                                        <span className="tourmaster-amount">1</span>
                                                                        <span className="tourmaster-plus">
                                                                            <i className="icon_plus" />
                                                                        </span>
                                                                    </div>
                                                                    <input
                                                                        type="hidden"
                                                                        name="room_amount"
                                                                        defaultValue={1}
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="tourmaster-room-booking-guest-selection tourmaster-one">
                                                            <div className="tourmaster-room-amount-selection ">
                                                                <div className="tourmaster-custom-amount-display gdlr-core-skin-e-background">
                                                                    <div className="tourmaster-head gdlr-core-skin-e-content">
                                                                        <span>
                                                                            Room<span className="tourmaster-number">1</span> :{" "}
                                                                        </span>
                                                                        Guests
                                                                    </div>
                                                                    <div className="tourmaster-tail gdlr-core-skin-e-content">
                                                                        <span className="tourmaster-space" />
                                                                        Adults 2<span className="tourmaster-space" />
                                                                        Children 0
                                                                    </div>
                                                                </div>
                                                                <div className="tourmaster-custom-amount-selection-wrap">
                                                                    <div
                                                                        className="tourmaster-custom-amount-selection-item clearfix"
                                                                        data-label="Adults"
                                                                    >
                                                                        <div className="tourmaster-head">Adults</div>
                                                                        <div className="tourmaster-tail">
                                                                            <span className="tourmaster-minus">
                                                                                <i className="icon_minus-06" />
                                                                            </span>
                                                                            <span className="tourmaster-amount">2</span>
                                                                            <span className="tourmaster-plus">
                                                                                <i className="icon_plus" />
                                                                            </span>
                                                                        </div>
                                                                        <input
                                                                            type="hidden"
                                                                            name="adult[]"
                                                                            defaultValue={2}
                                                                        />
                                                                    </div>
                                                                    <div
                                                                        className="tourmaster-custom-amount-selection-item clearfix"
                                                                        data-label="Children"
                                                                    >
                                                                        <div className="tourmaster-head">Children</div>
                                                                        <div className="tourmaster-tail">
                                                                            <span className="tourmaster-minus">
                                                                                <i className="icon_minus-06" />
                                                                            </span>
                                                                            <span className="tourmaster-amount">0</span>
                                                                            <span className="tourmaster-plus">
                                                                                <i className="icon_plus" />
                                                                            </span>
                                                                        </div>
                                                                        <input
                                                                            type="hidden"
                                                                            name="children[]"
                                                                            defaultValue={0}
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <input type="hidden" name="room_id" defaultValue={15678} />
                                                        <input type="hidden" name="post_type" defaultValue="room" />
                                                        <input
                                                            type="submit"
                                                            className="tourmaster-room-button tourmaster-full"
                                                            defaultValue="Book Now"
                                                        />
                                                    </form>
                                                </div>
                                                <div
                                                    className="tourmaster-room-enquiry-wrap"
                                                    data-room-tab="enquiry"
                                                    style={{ display: "none" }}
                                                >
                                                    <form
                                                        className="tourmaster-enquiry-form tourmaster-form-field tourmaster-room clearfix"
                                                        id="tourmaster-enquiry-form"
                                                        data-ajax-url="https://demo.goodlayers.com/hotale/resort/wp-admin/admin-ajax.php"
                                                        data-action="tourmaster_room_send_enquiry_form"
                                                        data-validate-error="Please fill all required fields."
                                                    >
                                                        <div className="tourmaster-enquiry-field tourmaster-enquiry-field-full-name tourmaster-type-text clearfix">
                                                            <div className="tourmaster-head">
                                                                Full Name<span className="tourmaster-req">*</span>
                                                            </div>
                                                            <div className="tourmaster-tail clearfix">
                                                                <input
                                                                    type="text"
                                                                    name="full-name"
                                                                    data-required
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="tourmaster-enquiry-field tourmaster-enquiry-field-email-address tourmaster-type-text clearfix">
                                                            <div className="tourmaster-head">
                                                                Email Address<span className="tourmaster-req">*</span>
                                                            </div>
                                                            <div className="tourmaster-tail clearfix">
                                                                <input
                                                                    type="text"
                                                                    name="email-address"
                                                                    data-required
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="tourmaster-enquiry-field tourmaster-enquiry-field-your-enquiry tourmaster-type-textarea clearfix">
                                                            <div className="tourmaster-head">
                                                                Your Enquiry<span className="tourmaster-req">*</span>
                                                            </div>
                                                            <div className="tourmaster-tail clearfix">
                                                                <textarea
                                                                    name="your-enquiry"
                                                                    data-required
                                                                    defaultValue={""}
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="tourmaster-enquiry-term">
                                                            <input
                                                                type="checkbox"
                                                                name="tourmaster-require-acceptance"
                                                            />
                                                            * I agree with{" "}
                                                            <a href="#" target="_blank">
                                                                Terms of Service
                                                            </a>{" "}
                                                            and{" "}
                                                            <a href="#" target="_blank">
                                                                Privacy Statement
                                                            </a>
                                                            .
                                                            <div className="tourmaster-enquiry-term-message tourmaster-enquiry-form-message tourmaster-failed">
                                                                Please agree to all the terms and conditions before
                                                                proceeding to the next step
                                                            </div>
                                                        </div>
                                                        <div className="tourmaster-enquiry-form-message" />
                                                        <input type="hidden" name="room-id" defaultValue={15678} />
                                                        <input
                                                            type="submit"
                                                            className="tourmaster-room-button tourmaster-full"
                                                            defaultValue="Submit Enquiry"
                                                        />
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="gdlr-core-column-15"
                                    style={{
                                        float: "right",
                                        height: "20px",
                                        background: "rgb(255, 221, 153)",
                                    }}
                                />
                            </div>
                        </div>
                        <div className="gdlr-core-pbf-wrapper " id="gdlr-core-wrapper-2">
                            <div className="gdlr-core-pbf-background-wrap" />
                            <div className="gdlr-core-pbf-wrapper-content gdlr-core-js ">
                                <div className="gdlr-core-pbf-wrapper-container clearfix gdlr-core-pbf-wrapper-full">
                                    <div className="gdlr-core-pbf-element">
                                        <div className="gdlr-core-gallery-item gdlr-core-item-pdb clearfix  gdlr-core-gallery-item-style-scroll gdlr-core-item-pdlr ">
                                            <div
                                                className="gdlr-core-sly-slider gdlr-core-js-2 gdlr-core-after-init"
                                                style={{ overflow: "hidden" }}
                                            >
                                                <Posts data={this.state.data.roomPhotos} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="gdlr-core-pbf-section">
                            <div className="gdlr-core-pbf-section-container gdlr-core-container clearfix">
                                <div
                                    className="gdlr-core-pbf-column gdlr-core-column-60 gdlr-core-column-first"
                                    id="gdlr-core-column-26"
                                >
                                    <div
                                        className="gdlr-core-pbf-column-content-margin gdlr-core-js "
                                        style={{ margin: "0px 0px 0px 0px", padding: "30px 0px 10px 0px" }}
                                    >
                                        <div className="gdlr-core-pbf-background-wrap" />
                                        <div className="gdlr-core-pbf-column-content clearfix gdlr-core-js ">
                                            <div className="gdlr-core-pbf-element">
                                                <div
                                                    className="gdlr-core-divider-item gdlr-core-divider-item-normal gdlr-core-item-pdlr gdlr-core-center-align"
                                                    style={{ marginBottom: "20px" }}
                                                >
                                                    <div className="gdlr-core-divider-line gdlr-core-skin-divider" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="gdlr-core-pbf-wrapper "
                            style={{ padding: "20px 0px 0px 0px" }}
                        >
                            <div className="gdlr-core-pbf-background-wrap" />
                            <div className="gdlr-core-pbf-wrapper-content gdlr-core-js ">
                                <div className="gdlr-core-pbf-wrapper-container clearfix gdlr-core-container">
                                    <div
                                        className="gdlr-core-pbf-column gdlr-core-column-60 gdlr-core-column-first"
                                        id="gdlr-core-column-27"
                                    >
                                        <div
                                            className="gdlr-core-pbf-column-content-margin gdlr-core-js "
                                            style={{ margin: "0px 0px 0px 0px", padding: "30px 0px 0px 0px" }}
                                        >
                                            <div className="gdlr-core-pbf-background-wrap" />
                                            <div className="gdlr-core-pbf-column-content clearfix gdlr-core-js ">
                                                <div className="gdlr-core-pbf-element">
                                                    <div
                                                        className="gdlr-core-title-item gdlr-core-item-pdb clearfix  gdlr-core-center-align gdlr-core-title-item-caption-top gdlr-core-item-pdlr"
                                                        style={{ paddingBottom: "60px" }}
                                                    >
                                                        <div className="gdlr-core-title-item-title-wrap ">
                                                            <h3
                                                                className="gdlr-core-title-item-title gdlr-core-skin-title  class-test"
                                                                style={{
                                                                    fontSize: "31px",
                                                                    fontWeight: 500,
                                                                    letterSpacing: "0px",
                                                                    textTransform: "none",
                                                                }}
                                                            >
                                                                More Rooms
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
                                        id="gdlr-core-column-28"
                                    >
                                        <div
                                            className="gdlr-core-pbf-column-content-margin gdlr-core-js "
                                            style={{ padding: "0px 0px 20px 0px" }}
                                        >
                                            <div className="gdlr-core-pbf-background-wrap" />
                                            <div className="gdlr-core-pbf-column-content clearfix gdlr-core-js ">
                                                <div className="gdlr-core-pbf-element">
                                                    <div
                                                        className="tourmaster-room-item clearfix  tourmaster-room-item-style-grid"
                                                        id="gdlr-core-room-1"
                                                    >
                                                        <div
                                                            className="gdlr-core-flexslider flexslider gdlr-core-js-2 "
                                                            data-type="carousel"
                                                            data-column={3}
                                                            data-move={1}
                                                            data-nav="navigation-outer"
                                                            data-nav-parent="self"
                                                            data-vcenter-nav={1}
                                                        >
                                                            <div
                                                                className="flex-viewport"
                                                                style={{ overflow: "hidden", position: "relative" }}
                                                            >
                                                                <Cards/>
                                                            </div>
                                                            <div
                                                                className="gdlr-core-flexslider-custom-nav  gdlr-core-style-navigation-outer gdlr-core-center-align"
                                                                style={{ marginTop: "-60px" }}
                                                            >
                                                                <i
                                                                    className="icon-arrow-left flex-prev"
                                                                    style={{
                                                                        color: "rgb(196, 196, 196)",
                                                                        fontSize: "34px",
                                                                        left: "-90px",
                                                                        marginTop: "-247.562px",
                                                                    }}
                                                                />
                                                                <i
                                                                    className="icon-arrow-right flex-next"
                                                                    style={{
                                                                        color: "rgb(196, 196, 196)",
                                                                        fontSize: "34px",
                                                                        right: "-90px",
                                                                        marginTop: "-247.562px",
                                                                    }}
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
                </div>;

            </React.Fragment>
        );
    }
}

export default connect()(RoomDetails);





