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
var react_1 = require("swiper/react");
require("swiper/css");
var react_router_dom_1 = require("react-router-dom");
var react_i18next_1 = require("react-i18next");
var Cards = /** @class */ (function (_super) {
    __extends(Cards, _super);
    function Cards(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            data: []
        };
        return _this;
    }
    Cards.prototype.componentDidMount = function () {
        var _this = this;
        fetch('/api/home/rooms').then(function (response) {
            return response.json();
        }).then(function (data) {
            _this.setState({ data: data });
            console.log(_this.state.data);
        });
    };
    Cards.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", null,
            React.createElement(react_1.Swiper, { spaceBetween: 10, slidesPerView: 3, onSlideChange: function () { return console.log('slide change'); }, onSwiper: function (swiper) { return console.log(swiper); } }, this.state.data.map(function (value, index) {
                return (React.createElement(react_1.SwiperSlide, { key: index },
                    React.createElement("div", { className: "item", style: {
                            width: "400px",
                            marginRight: "40px",
                            float: "left",
                            display: "block",
                        } },
                        React.createElement("div", { className: "tourmaster-room-grid tourmaster-grid-frame " },
                            React.createElement("div", { className: "tourmaster-room-grid-inner ", style: {
                                    boxShadow: "0 10px 45px rgba(10, 10, 10,0.07)",
                                    MozBoxShadow: "0 10px 45px rgba(10, 10, 10,0.07)",
                                    WebkitBoxShadow: "0 10px 45px rgba(10, 10, 10,0.07)",
                                    borderRadius: "20px",
                                    MozBorderRadius: "20px",
                                    WebkitBorderRadius: "20px",
                                } },
                                React.createElement("div", { className: "tourmaster-room-thumbnail tourmaster-media-image  gdlr-core-outer-frame-element tourmaster-with-price" },
                                    React.createElement(react_router_dom_1.Link, { to: "/rooms/details/" + value.id },
                                        React.createElement("img", { src: value.roomPhotos.length > 0 ? require('../' + value.roomPhotos[0].src) : "", alt: "", width: 780, height: 595, draggable: "false" })),
                                    React.createElement("div", { className: "tourmaster-price-wrap tourmaster-with-bg ", style: {
                                            borderRadius: "10px",
                                            MozBorderRadius: "10px",
                                            WebkitBorderRadius: "10px",
                                        } },
                                        React.createElement("span", { className: "tourmaster-price" }, value.name),
                                        React.createElement("span", { className: "tourmaster-tail" },
                                            " ",
                                            "/ ",
                                            _this.props.t("global_card_namecomponent")))),
                                React.createElement("div", { className: "tourmaster-room-content-wrap gdlr-core-skin-e-background gdlr-core-js ", "data-sync-height": "room-item-53", style: {
                                        paddingTop: "45px",
                                        paddingBottom: "40px",
                                        height: "239px",
                                    } },
                                    React.createElement("h3", { className: "tourmaster-room-title gdlr-core-skin-title", style: { textTransform: "none" } },
                                        React.createElement(react_router_dom_1.Link, { to: "/rooms/details/" + value.id }, value.name)),
                                    React.createElement("div", { className: "tourmaster-info-wrap clearfix" },
                                        React.createElement("div", { className: "tourmaster-info tourmaster-info-bed-type" },
                                            React.createElement("i", { className: "gdlr-icon-double-bed2" }),
                                            React.createElement("span", { className: "tourmaster-tail" },
                                                value.bedCount,
                                                " ",
                                                _this.props.t("global_card_bed"))),
                                        React.createElement("div", { className: "tourmaster-info tourmaster-info-guest-amount" },
                                            React.createElement("i", { className: "gdlr-icon-group" }),
                                            React.createElement("span", { className: "tourmaster-tail" },
                                                value.maxGuest,
                                                " ",
                                                _this.props.t("global_card_guest")))),
                                    React.createElement(react_router_dom_1.Link, { className: "tourmaster-read-more tourmaster-type-text", to: "/rooms/details/" + value.id },
                                        _this.props.t("global_card_button"),
                                        React.createElement("i", { className: "icon-arrow-right" }))))))));
            }))));
    };
    return Cards;
}(React.Component));
exports.default = (0, react_i18next_1.withTranslation)()(Cards);
//# sourceMappingURL=Cards.js.map