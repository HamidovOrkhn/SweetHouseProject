import * as React from 'react';
import { connect } from 'react-redux';
import background from "../images/home-resort-hero-bg.jpg";
import { RouteComponentProps } from 'react-router';
class HomeWelcome extends React.Component {
    public render() {
        return (
            <React.Fragment>
                <div className="hotale-page-wrapper" id="hotale-page-wrapper">
                    <div className="gdlr-core-page-builder-body">
                        <div
                            className="gdlr-core-pbf-wrapper  gdlr-core-wrapper-full-height gdlr-core-js gdlr-core-full-height-center"
                            style={{
                                margin: "0px",
                                padding: "280px 0px 80px",
                                borderRadius: "20px",
                                minHeight: "308px",
                            }}
                            id="gdlr-core-wrapper-1"
                            data-decrease-height="40px"
                        >
                            <div
                                className="gdlr-core-pbf-background-wrap"
                                style={{
                                    borderRadius: "20px 20px 20px 20px",
                                    MozBorderRadius: "20px 20px 20px 20px",
                                    WebkitBorderRadius: "20px 20px 20px 20px",
                                }}
                            >
                                <div
                                    className="gdlr-core-pbf-background gdlr-core-parallax gdlr-core-js"
                                    style={{
                                        backgroundImage:
                                            `url(${background})`,
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                    }}
                                    data-parallax-speed={0}
                                />
                            </div>
                            <div
                                className="gdlr-core-page-builder-wrapper-top-gradient"
                                style={{
                                    height: "344px",
                                    opacity: 1,
                                    background: "linear-gradient(rgba(0, 0, 0, 100), rgba(0, 0, 0, 0))",
                                    //MozBackground: "linear-gradient(rgba(0, 0, 0, 100), rgba(0, 0, 0, 0))",
                                    //OBackground: "linear-gradient(rgba(0, 0, 0, 100), rgba(0, 0, 0, 0))",
                                    //WebkitBackground: "linear-gradient(rgba(0, 0, 0, 100), rgba(0, 0, 0, 0))",
                                    borderRadius: "20px 20px 20px 20px",
                                    MozBorderRadius: "20px 20px 20px 20px",
                                    WebkitBorderRadius: "20px 20px 20px 20px",
                                }}
                            />
                            <div
                                className="gdlr-core-page-builder-wrapper-bottom-gradient"
                                style={{
                                    height: "338px",
                                    opacity: 1,
                                    background: "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 100))",
                                    /*                        MozBackground: "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 100))",*/
                                    /*                        OBackground: "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 100))",*/
                                    /*                        WebkitBackground: "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 100))",*/
                                    borderRadius: "20px 20px 20px 20px",
                                    MozBorderRadius: "20px 20px 20px 20px",
                                    WebkitBorderRadius: "20px 20px 20px 20px",
                                }}
                            />
                            <div className="gdlr-core-pbf-wrapper-content gdlr-core-js  gdlr-core-full-height-content">
                                <div className="gdlr-core-pbf-wrapper-container clearfix gdlr-core-container">
                                    <div className="gdlr-core-pbf-column gdlr-core-column-60 gdlr-core-column-first">
                                        <div className="gdlr-core-pbf-column-content-margin gdlr-core-js ">
                                            <div className="gdlr-core-pbf-column-content clearfix gdlr-core-js ">
                                                <div className="gdlr-core-pbf-element">
                                                    <div
                                                        className="gdlr-core-title-item gdlr-core-item-pdb clearfix  gdlr-core-center-align gdlr-core-title-item-caption-bottom gdlr-core-item-pdlr title-rotate"
                                                        id="gdlr-core-title-item-1"
                                                    >
                                                        <div className="gdlr-core-title-item-title-wrap ">
                                                            <h3
                                                                className="gdlr-core-title-item-title gdlr-core-skin-title hotale-additional-font class-test"
                                                                style={{
                                                                    fontSize: "126px",
                                                                    fontWeight: 400,
                                                                    letterSpacing: "0px",
                                                                    textTransform: "none",
                                                                    color: "#ffffff",
                                                                }}
                                                            >
                                                                SweetHouse
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
                                                                fontSize: "22px",
                                                                fontWeight: 400,
                                                                textTransform: "none",
                                                                color: "#ffffff",
                                                            }}
                                                        >
                                                            <p>İstirahətinizi bizlə keçirin</p>
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
                                            style={{ padding: "270px 0px 0px 0px" }}
                                        >
                                            <div className="gdlr-core-pbf-background-wrap" />
                                            <div className="gdlr-core-pbf-column-content clearfix gdlr-core-js ">
                                                <div className="gdlr-core-pbf-element">
                                                    <div className="tourmaster-room-search-item tourmaster-item-pdlr clearfix">
                                                        <form
                                                            className="tourmaster-room-search-form tourmaster-radius-round tourmaster-style-box tourmaster-align-horizontal "
                                                            action="https://demo.goodlayers.com/hotale/resort/room-search/"
                                                            method="get"
                                                        >
                                                            <div className="tourmaster-room-search-size10">
                                                                <div
                                                                    className="tourmaster-room-date-selection tourmaster-horizontal"
                                                                    data-avail-date
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
                                                                            id="dp1655140833665"
                                                                        >
                                                                            <div
                                                                                className="ui-datepicker-inline ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all ui-datepicker-multi-2 ui-datepicker-multi"
                                                                                style={{ width: "34em", display: "block" }}
                                                                            >
                                                                                <div className="ui-datepicker-group ui-datepicker-group-first">
                                                                                    <div className="ui-datepicker-header ui-widget-header ui-helper-clearfix ui-corner-left">
                                                                                        <a
                                                                                            className="ui-datepicker-prev ui-corner-all ui-state-disabled"
                                                                                            title="Previous"
                                                                                        >
                                                                                            <span className="ui-icon ui-icon-circle-triangle-w">
                                                                                                Previous
                                                                                            </span>
                                                                                        </a>
                                                                                        <div className="ui-datepicker-title">
                                                                                            <select
                                                                                                className="ui-datepicker-month"
                                                                                                aria-label="Select month"
                                                                                                data-handler="selectMonth"
                                                                                                data-event="change"
                                                                                            >
                                                                                                <option value={5} selected>
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
                                                                                                <option value={2022} selected>
                                                                                                    2022
                                                                                                </option>
                                                                                                <option value={2023}>2023</option>
                                                                                                <option value={2024}>2024</option>
                                                                                                <option value={2025}>2025</option>
                                                                                                <option value={2026}>2026</option>
                                                                                                <option value={2027}>2027</option>
                                                                                                <option value={2028}>2028</option>
                                                                                                <option value={2029}>2029</option>
                                                                                                <option value={2030}>2030</option>
                                                                                                <option value={2031}>2031</option>
                                                                                                <option value={2032}>2032</option>
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
                                                                                                    <span className="ui-state-default">
                                                                                                        1
                                                                                                    </span>
                                                                                                </td>
                                                                                                <td className=" ui-datepicker-unselectable ui-state-disabled ">
                                                                                                    <span className="ui-state-default">
                                                                                                        2
                                                                                                    </span>
                                                                                                </td>
                                                                                                <td className=" ui-datepicker-unselectable ui-state-disabled ">
                                                                                                    <span className="ui-state-default">
                                                                                                        3
                                                                                                    </span>
                                                                                                </td>
                                                                                                <td className=" ui-datepicker-week-end ui-datepicker-unselectable ui-state-disabled ">
                                                                                                    <span className="ui-state-default">
                                                                                                        4
                                                                                                    </span>
                                                                                                </td>
                                                                                                <td className=" ui-datepicker-week-end ui-datepicker-unselectable ui-state-disabled ">
                                                                                                    <span className="ui-state-default">
                                                                                                        5
                                                                                                    </span>
                                                                                                </td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td className=" ui-datepicker-unselectable ui-state-disabled ">
                                                                                                    <span className="ui-state-default">
                                                                                                        6
                                                                                                    </span>
                                                                                                </td>
                                                                                                <td className=" ui-datepicker-unselectable ui-state-disabled ">
                                                                                                    <span className="ui-state-default">
                                                                                                        7
                                                                                                    </span>
                                                                                                </td>
                                                                                                <td className=" ui-datepicker-unselectable ui-state-disabled ">
                                                                                                    <span className="ui-state-default">
                                                                                                        8
                                                                                                    </span>
                                                                                                </td>
                                                                                                <td className=" ui-datepicker-unselectable ui-state-disabled ">
                                                                                                    <span className="ui-state-default">
                                                                                                        9
                                                                                                    </span>
                                                                                                </td>
                                                                                                <td className=" ui-datepicker-unselectable ui-state-disabled ">
                                                                                                    <span className="ui-state-default">
                                                                                                        10
                                                                                                    </span>
                                                                                                </td>
                                                                                                <td className=" ui-datepicker-week-end ui-datepicker-unselectable ui-state-disabled ">
                                                                                                    <span className="ui-state-default">
                                                                                                        11
                                                                                                    </span>
                                                                                                </td>
                                                                                                <td className=" ui-datepicker-week-end ui-datepicker-unselectable ui-state-disabled ">
                                                                                                    <span className="ui-state-default">
                                                                                                        12
                                                                                                    </span>
                                                                                                </td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td
                                                                                                    className=" ui-datepicker-days-cell-over tourmaster-start ui-datepicker-current-day ui-datepicker-today"
                                                                                                    data-handler="selectDay"
                                                                                                    data-event="click"
                                                                                                    data-month={5}
                                                                                                    data-year={2022}
                                                                                                >
                                                                                                    <a
                                                                                                        className="ui-state-default ui-state-highlight ui-state-active ui-state-hover"
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
                                                                                <div className="ui-datepicker-group ui-datepicker-group-last">
                                                                                    <div className="ui-datepicker-header ui-widget-header ui-helper-clearfix ui-corner-right">
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
                                                                                            <span className="ui-datepicker-month">
                                                                                                July
                                                                                            </span>
                                                                                            &nbsp;
                                                                                            <span className="ui-datepicker-year">
                                                                                                2022
                                                                                            </span>
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
                                                                                                <td className=" ui-datepicker-other-month ui-datepicker-unselectable ui-state-disabled">
                                                                                                    &nbsp;
                                                                                                </td>
                                                                                                <td className=" ui-datepicker-other-month ui-datepicker-unselectable ui-state-disabled">
                                                                                                    &nbsp;
                                                                                                </td>
                                                                                                <td
                                                                                                    className=" "
                                                                                                    data-handler="selectDay"
                                                                                                    data-event="click"
                                                                                                    data-month={6}
                                                                                                    data-year={2022}
                                                                                                >
                                                                                                    <a
                                                                                                        className="ui-state-default"
                                                                                                        href="#"
                                                                                                        aria-current="false"
                                                                                                        data-date={1}
                                                                                                    >
                                                                                                        1
                                                                                                    </a>
                                                                                                </td>
                                                                                                <td
                                                                                                    className=" ui-datepicker-week-end "
                                                                                                    data-handler="selectDay"
                                                                                                    data-event="click"
                                                                                                    data-month={6}
                                                                                                    data-year={2022}
                                                                                                >
                                                                                                    <a
                                                                                                        className="ui-state-default"
                                                                                                        href="#"
                                                                                                        aria-current="false"
                                                                                                        data-date={2}
                                                                                                    >
                                                                                                        2
                                                                                                    </a>
                                                                                                </td>
                                                                                                <td
                                                                                                    className=" ui-datepicker-week-end "
                                                                                                    data-handler="selectDay"
                                                                                                    data-event="click"
                                                                                                    data-month={6}
                                                                                                    data-year={2022}
                                                                                                >
                                                                                                    <a
                                                                                                        className="ui-state-default"
                                                                                                        href="#"
                                                                                                        aria-current="false"
                                                                                                        data-date={3}
                                                                                                    >
                                                                                                        3
                                                                                                    </a>
                                                                                                </td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td
                                                                                                    className=" "
                                                                                                    data-handler="selectDay"
                                                                                                    data-event="click"
                                                                                                    data-month={6}
                                                                                                    data-year={2022}
                                                                                                >
                                                                                                    <a
                                                                                                        className="ui-state-default"
                                                                                                        href="#"
                                                                                                        aria-current="false"
                                                                                                        data-date={4}
                                                                                                    >
                                                                                                        4
                                                                                                    </a>
                                                                                                </td>
                                                                                                <td
                                                                                                    className=" "
                                                                                                    data-handler="selectDay"
                                                                                                    data-event="click"
                                                                                                    data-month={6}
                                                                                                    data-year={2022}
                                                                                                >
                                                                                                    <a
                                                                                                        className="ui-state-default"
                                                                                                        href="#"
                                                                                                        aria-current="false"
                                                                                                        data-date={5}
                                                                                                    >
                                                                                                        5
                                                                                                    </a>
                                                                                                </td>
                                                                                                <td
                                                                                                    className=" "
                                                                                                    data-handler="selectDay"
                                                                                                    data-event="click"
                                                                                                    data-month={6}
                                                                                                    data-year={2022}
                                                                                                >
                                                                                                    <a
                                                                                                        className="ui-state-default"
                                                                                                        href="#"
                                                                                                        aria-current="false"
                                                                                                        data-date={6}
                                                                                                    >
                                                                                                        6
                                                                                                    </a>
                                                                                                </td>
                                                                                                <td
                                                                                                    className=" "
                                                                                                    data-handler="selectDay"
                                                                                                    data-event="click"
                                                                                                    data-month={6}
                                                                                                    data-year={2022}
                                                                                                >
                                                                                                    <a
                                                                                                        className="ui-state-default"
                                                                                                        href="#"
                                                                                                        aria-current="false"
                                                                                                        data-date={7}
                                                                                                    >
                                                                                                        7
                                                                                                    </a>
                                                                                                </td>
                                                                                                <td
                                                                                                    className=" "
                                                                                                    data-handler="selectDay"
                                                                                                    data-event="click"
                                                                                                    data-month={6}
                                                                                                    data-year={2022}
                                                                                                >
                                                                                                    <a
                                                                                                        className="ui-state-default"
                                                                                                        href="#"
                                                                                                        aria-current="false"
                                                                                                        data-date={8}
                                                                                                    >
                                                                                                        8
                                                                                                    </a>
                                                                                                </td>
                                                                                                <td
                                                                                                    className=" ui-datepicker-week-end "
                                                                                                    data-handler="selectDay"
                                                                                                    data-event="click"
                                                                                                    data-month={6}
                                                                                                    data-year={2022}
                                                                                                >
                                                                                                    <a
                                                                                                        className="ui-state-default"
                                                                                                        href="#"
                                                                                                        aria-current="false"
                                                                                                        data-date={9}
                                                                                                    >
                                                                                                        9
                                                                                                    </a>
                                                                                                </td>
                                                                                                <td
                                                                                                    className=" ui-datepicker-week-end "
                                                                                                    data-handler="selectDay"
                                                                                                    data-event="click"
                                                                                                    data-month={6}
                                                                                                    data-year={2022}
                                                                                                >
                                                                                                    <a
                                                                                                        className="ui-state-default"
                                                                                                        href="#"
                                                                                                        aria-current="false"
                                                                                                        data-date={10}
                                                                                                    >
                                                                                                        10
                                                                                                    </a>
                                                                                                </td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td
                                                                                                    className=" "
                                                                                                    data-handler="selectDay"
                                                                                                    data-event="click"
                                                                                                    data-month={6}
                                                                                                    data-year={2022}
                                                                                                >
                                                                                                    <a
                                                                                                        className="ui-state-default"
                                                                                                        href="#"
                                                                                                        aria-current="false"
                                                                                                        data-date={11}
                                                                                                    >
                                                                                                        11
                                                                                                    </a>
                                                                                                </td>
                                                                                                <td
                                                                                                    className=" "
                                                                                                    data-handler="selectDay"
                                                                                                    data-event="click"
                                                                                                    data-month={6}
                                                                                                    data-year={2022}
                                                                                                >
                                                                                                    <a
                                                                                                        className="ui-state-default"
                                                                                                        href="#"
                                                                                                        aria-current="false"
                                                                                                        data-date={12}
                                                                                                    >
                                                                                                        12
                                                                                                    </a>
                                                                                                </td>
                                                                                                <td
                                                                                                    className=" "
                                                                                                    data-handler="selectDay"
                                                                                                    data-event="click"
                                                                                                    data-month={6}
                                                                                                    data-year={2022}
                                                                                                >
                                                                                                    <a
                                                                                                        className="ui-state-default"
                                                                                                        href="#"
                                                                                                        aria-current="false"
                                                                                                        data-date={13}
                                                                                                    >
                                                                                                        13
                                                                                                    </a>
                                                                                                </td>
                                                                                                <td
                                                                                                    className=" "
                                                                                                    data-handler="selectDay"
                                                                                                    data-event="click"
                                                                                                    data-month={6}
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
                                                                                                    data-month={6}
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
                                                                                                    className=" ui-datepicker-week-end "
                                                                                                    data-handler="selectDay"
                                                                                                    data-event="click"
                                                                                                    data-month={6}
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
                                                                                                    className=" ui-datepicker-week-end "
                                                                                                    data-handler="selectDay"
                                                                                                    data-event="click"
                                                                                                    data-month={6}
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
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td
                                                                                                    className=" "
                                                                                                    data-handler="selectDay"
                                                                                                    data-event="click"
                                                                                                    data-month={6}
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
                                                                                                    className=" "
                                                                                                    data-handler="selectDay"
                                                                                                    data-event="click"
                                                                                                    data-month={6}
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
                                                                                                <td
                                                                                                    className=" "
                                                                                                    data-handler="selectDay"
                                                                                                    data-event="click"
                                                                                                    data-month={6}
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
                                                                                                    data-month={6}
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
                                                                                                    data-month={6}
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
                                                                                                    className=" ui-datepicker-week-end "
                                                                                                    data-handler="selectDay"
                                                                                                    data-event="click"
                                                                                                    data-month={6}
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
                                                                                                    className=" ui-datepicker-week-end "
                                                                                                    data-handler="selectDay"
                                                                                                    data-event="click"
                                                                                                    data-month={6}
                                                                                                    data-year={2022}
                                                                                                >
                                                                                                    <a
                                                                                                        className="ui-state-default"
                                                                                                        href="#"
                                                                                                        aria-current="false"
                                                                                                        data-date={24}
                                                                                                    >
                                                                                                        24
                                                                                                    </a>
                                                                                                </td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td
                                                                                                    className=" "
                                                                                                    data-handler="selectDay"
                                                                                                    data-event="click"
                                                                                                    data-month={6}
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
                                                                                                    className=" "
                                                                                                    data-handler="selectDay"
                                                                                                    data-event="click"
                                                                                                    data-month={6}
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
                                                                                                <td
                                                                                                    className=" "
                                                                                                    data-handler="selectDay"
                                                                                                    data-event="click"
                                                                                                    data-month={6}
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
                                                                                                    data-month={6}
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
                                                                                                    data-month={6}
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
                                                                                                    className=" ui-datepicker-week-end "
                                                                                                    data-handler="selectDay"
                                                                                                    data-event="click"
                                                                                                    data-month={6}
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
                                                                                                <td
                                                                                                    className=" ui-datepicker-week-end "
                                                                                                    data-handler="selectDay"
                                                                                                    data-event="click"
                                                                                                    data-month={6}
                                                                                                    data-year={2022}
                                                                                                >
                                                                                                    <a
                                                                                                        className="ui-state-default"
                                                                                                        href="#"
                                                                                                        aria-current="false"
                                                                                                        data-date={31}
                                                                                                    >
                                                                                                        31
                                                                                                    </a>
                                                                                                </td>
                                                                                            </tr>
                                                                                        </tbody>
                                                                                    </table>
                                                                                </div>
                                                                                <div className="ui-datepicker-row-break" />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="tourmaster-room-size2">
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
                                                            </div>
                                                            <div className="tourmaster-room-search-size5">
                                                                <div className="tourmaster-room-amount-selection ">
                                                                    <div className="tourmaster-custom-amount-display gdlr-core-skin-e-background">
                                                                        <div className="tourmaster-head gdlr-core-skin-e-content">
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
                                                                            <input type="hidden" name="adult" defaultValue={2} />
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
                                                                                name="children"
                                                                                defaultValue={0}
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="tourmaster-room-search-size4 tourmaster-room-search-submit-wrap">
                                                                <input
                                                                    className="tourmaster-room-search-submit tourmaster-style-border"
                                                                    type="submit"
                                                                    defaultValue="Search Room"
                                                                    style={{
                                                                        background: "#ffffff",
                                                                        color: "#ffffff",
                                                                        borderColor: "#ffffff",
                                                                    }}
                                                                />
                                                            </div>
                                                            <input type="hidden" name="room-search" />
                                                        </form>
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

export default connect()(HomeWelcome);