"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_redux_1 = require("react-redux");
var react_router_dom_1 = require("react-router-dom");
var Pagination_1 = require("./Pagination");
var Rooms = /** @class */ (function (_super) {
    __extends(Rooms, _super);
    function Rooms(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            init: {
                page: 0,
                code: 200,
                data: []
            }
        };
        return _this;
    }
    Rooms.prototype.GetRoutePage = function () {
        var queryParams = new URLSearchParams(window.location.search);
        var term = queryParams.get("page") === null ? "" : queryParams.get("page").toString();
        return parseInt(term);
    };
    Rooms.prototype.componentDidMount = function () {
        var _this = this;
        fetch('/api/home/roomsall?page=' + this.state.init.page).then(function (response) {
            return response.json();
        }).then(function (data) {
            _this.setState({ init: data });
            console.log(_this.state.init);
        });
    };
    Rooms.prototype.render = function () {
        return (React.createElement(React.Fragment, null,
            React.createElement("div", { className: "hotale-page-title-wrap  hotale-style-custom hotale-center-align", "data-aos": "fade-bottom", "data-aos-duration": "1000" },
                React.createElement("div", { className: "hotale-header-transparent-substitute", style: { height: "149.3px" } }),
                React.createElement("div", { className: "hotale-page-title-overlay" }),
                React.createElement("div", { className: "hotale-page-title-container hotale-container" },
                    React.createElement("div", { className: "hotale-page-title-content hotale-item-pdlr" },
                        React.createElement("h1", { className: "hotale-page-title" }, "Otaqlar")))),
            " ",
            React.createElement("div", null),
            React.createElement("div", { className: "hotale-page-wrapper", id: "hotale-page-wrapper", "data-aos": "fade-top", "data-aos-duration": "1000" },
                React.createElement("div", { className: "gdlr-core-page-builder-body" },
                    React.createElement("div", { className: "gdlr-core-pbf-wrapper ", style: { padding: "80px 0px 15px 0px" } },
                        React.createElement("div", { className: "gdlr-core-pbf-background-wrap" }),
                        React.createElement("div", { className: "gdlr-core-pbf-wrapper-content gdlr-core-js " },
                            React.createElement("div", { className: "gdlr-core-pbf-wrapper-container clearfix gdlr-core-container" },
                                React.createElement("div", { className: "gdlr-core-pbf-element" },
                                    React.createElement("div", { className: "tourmaster-room-item clearfix  tourmaster-room-item-style-grid2" },
                                        React.createElement("div", { className: "tourmaster-room-item-holder gdlr-core-js-2 clearfix", "data-layout": "fitrows" }, this.state.init.data ?
                                            this.state.init.data.map(function (value, index) {
                                                return (React.createElement("div", { className: "gdlr-core-item-list  tourmaster-item-pdlr tourmaster-column-20" },
                                                    React.createElement("div", { className: "tourmaster-room-grid2 tourmaster-grid-frame ", style: { marginBottom: "40px" } },
                                                        React.createElement("div", { className: "tourmaster-room-grid-inner ", style: {
                                                                boxShadow: "0px 20px 35px rgba(10, 10, 10,0.06)",
                                                                MozBoxShadow: "0px 20px 35px rgba(10, 10, 10,0.06)",
                                                                WebkitBoxShadow: "0px 20px 35px rgba(10, 10, 10,0.06)",
                                                            } },
                                                            React.createElement("div", { className: "tourmaster-room-thumbnail tourmaster-media-image  gdlr-core-outer-frame-element" },
                                                                React.createElement(react_router_dom_1.Link, { to: "/rooms/details/" + value.id },
                                                                    React.createElement("img", { src: value.roomPhotos ? require('../' + value.roomPhotos[0].src) : "", alt: "", width: 780, height: 595 }))),
                                                            React.createElement("div", { className: "tourmaster-room-content-wrap gdlr-core-skin-e-background gdlr-core-js ", "data-sync-height": "room-item-32", style: { paddingRight: "30px", height: "279px" } },
                                                                React.createElement("h3", { className: "tourmaster-room-title gdlr-core-skin-title", style: { textTransform: "none" } },
                                                                    React.createElement(react_router_dom_1.Link, { to: "/rooms/details/" + value.id }, value.name)),
                                                                React.createElement("div", { className: "tourmaster-info-wrap clearfix" },
                                                                    React.createElement("div", { className: "tourmaster-info tourmaster-info-bed-type" },
                                                                        React.createElement("i", { className: "gdlr-icon-double-bed2" }),
                                                                        React.createElement("span", { className: "tourmaster-tail" },
                                                                            value.bedCount,
                                                                            " \u018Fd\u0259d \u00C7arpay\u0131")),
                                                                    React.createElement("div", { className: "tourmaster-info tourmaster-info-guest-amount" },
                                                                        React.createElement("i", { className: "gdlr-icon-group" }),
                                                                        React.createElement("span", { className: "tourmaster-tail" },
                                                                            value.maxGuest,
                                                                            " N\u0259f\u0259r"))),
                                                                React.createElement("div", { className: "tourmaster-bottom clearfix" },
                                                                    React.createElement("div", { className: "tourmaster-price-wrap tourmaster-no-bg " },
                                                                        React.createElement("span", { className: "tourmaster-price" },
                                                                            value.price,
                                                                            " AZN")),
                                                                    React.createElement(react_router_dom_1.Link, { className: "tourmaster-read-more tourmaster-type-button", to: "/rooms/details/" + value.id }, "Rezerv")))))));
                                            })
                                            : ""))),
                                React.createElement(Pagination_1.default, { pageCount: this.state.init.page, currentPage: 0 }))))))));
    };
    return Rooms;
}(React.Component));
exports.default = (0, react_redux_1.connect)()(Rooms);
//# sourceMappingURL=Rooms.js.map