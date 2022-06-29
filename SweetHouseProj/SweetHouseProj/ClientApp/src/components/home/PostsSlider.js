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
require("swiper/css");
var mdbreact_1 = require("mdbreact");
var Posts_1 = require("./Posts");
var PostsSlider = /** @class */ (function (_super) {
    __extends(PostsSlider, _super);
    function PostsSlider(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            data: []
        };
        return _this;
    }
    PostsSlider.prototype.componentDidMount = function () {
        var _this = this;
        fetch('/api/home/homepictures').then(function (response) {
            return response.json();
        }).then(function (data) {
            _this.setState({ data: data });
        });
    };
    PostsSlider.prototype.render = function () {
        return (React.createElement("div", { className: "gdlr-core-pbf-wrapper ", id: "gdlr-core-wrapper-9" },
            React.createElement("div", { className: "gdlr-core-pbf-background-wrap" }),
            React.createElement("div", { className: "gdlr-core-pbf-background-wrap", style: { top: "120px" } },
                React.createElement("div", { className: "gdlr-core-pbf-background gdlr-core-parallax gdlr-core-js", style: {
                        backgroundImage: "url(".concat(require('../images/home-resort-newsletter-bg.png')),
                        backgroundRepeat: "repeat-x",
                        backgroundPosition: "top center",
                    }, "data-parallax-speed": 0 })),
            React.createElement("div", { className: "gdlr-core-pbf-wrapper-content gdlr-core-js " },
                React.createElement("div", { className: "gdlr-core-pbf-wrapper-container clearfix gdlr-core-container" },
                    React.createElement("div", { className: "gdlr-core-pbf-column gdlr-core-column-60 gdlr-core-column-first" },
                        React.createElement("div", { className: "gdlr-core-pbf-column-content-margin gdlr-core-js " },
                            React.createElement("div", { className: "gdlr-core-pbf-column-content clearfix gdlr-core-js " },
                                React.createElement("div", { className: "gdlr-core-pbf-element" },
                                    React.createElement("div", { className: "gdlr-core-gallery-item gdlr-core-item-pdb clearfix  gdlr-core-gallery-item-style-grid-no-space gdlr-core-item-pdlr ", style: { paddingBottom: "45px" }, id: "gdlr-core-gallery-1" },
                                        React.createElement("div", { className: "gdlr-core-flexslider flexslider gdlr-core-js-2 ", "data-type": "carousel", "data-column": 4, "data-move": 1, "data-nav": "navigation-outer", "data-nav-parent": "self", "data-vcenter-nav": 1, "data-disable-autoslide": 1 },
                                            React.createElement("div", { className: "flex-viewport", style: { overflow: "hidden", position: "relative" } },
                                                React.createElement(Posts_1.default, { data: this.state.data })),
                                            React.createElement("div", { className: "gdlr-core-flexslider-custom-nav  gdlr-core-style-navigation-outer gdlr-core-center-align", style: { marginTop: "-25px" } },
                                                React.createElement("i", { className: "icon-arrow-left flex-prev", style: {
                                                        color: "rgb(204, 204, 204)",
                                                        fontSize: "34px",
                                                        left: "-70px",
                                                        marginTop: "-138px",
                                                    } }),
                                                React.createElement("i", { className: "icon-arrow-right flex-next", style: {
                                                        color: "rgb(204, 204, 204)",
                                                        fontSize: "34px",
                                                        right: "-70px",
                                                        marginTop: "-138px",
                                                    } }))))),
                                React.createElement("div", { className: "gdlr-core-pbf-element" },
                                    React.createElement("div", { className: "gdlr-core-button-item gdlr-core-item-pdlr gdlr-core-item-pdb gdlr-core-center-align" },
                                        React.createElement("a", { className: "gdlr-core-button  gdlr-core-button-transparent gdlr-core-center-align gdlr-core-button-no-border", href: "https://instagram.com/", target: "_blank", style: {
                                                fontSize: "13px",
                                                fontStyle: "normal",
                                                fontWeight: 600,
                                                letterSpacing: "4px",
                                                color: "#000000",
                                                textTransform: "uppercase",
                                            } },
                                            React.createElement("span", { className: "gdlr-core-content" },
                                                React.createElement(mdbreact_1.MDBIcon, { fab: true, icon: "instagram" }),
                                                "Bizi Instagramdan takip edin")))))))))));
    };
    return PostsSlider;
}(React.Component));
exports.default = (0, react_redux_1.connect)()(PostsSlider);
//# sourceMappingURL=PostsSlider.js.map