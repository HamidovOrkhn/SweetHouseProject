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
var BlogSlider = /** @class */ (function (_super) {
    __extends(BlogSlider, _super);
    function BlogSlider(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            data: []
        };
        return _this;
    }
    BlogSlider.prototype.componentDidMount = function () {
        var _this = this;
        fetch('/api/blog/blogsection').then(function (response) {
            return response.json();
        }).then(function (data) {
            _this.setState({ data: data });
            console.log(_this.state.data);
        });
    };
    BlogSlider.prototype.render = function () {
        return (React.createElement("div", { className: "gdlr-core-pbf-element" },
            React.createElement("div", { className: "gdlr-core-blog-item gdlr-core-item-pdb clearfix  gdlr-core-style-blog-image gdlr-core-item-pdlr" },
                React.createElement(react_1.Swiper, { spaceBetween: 0, slidesPerView: 3 }, this.state.data.map(function (value, index) {
                    return (React.createElement(react_1.SwiperSlide, null,
                        React.createElement("div", { className: "gdlr-core-item-mglr flex-with-active-class", style: {
                                width: "386.667px",
                                marginRight: "40px",
                                float: "left",
                                display: "block",
                            } },
                            React.createElement("div", { className: "gdlr-core-blog-modern  gdlr-core-with-image gdlr-core-hover-overlay-content gdlr-core-opacity-on-hover gdlr-core-zoom-on-hover gdlr-core-style-1 gdlr-core-outer-frame-element", style: {
                                    borderWidth: "0px",
                                    borderRadius: "20px",
                                    MozBorderRadius: "20px",
                                    WebkitBorderRadius: "20px",
                                } },
                                React.createElement("div", { className: "gdlr-core-blog-modern-inner" },
                                    React.createElement("div", { className: "gdlr-core-blog-thumbnail gdlr-core-media-image" },
                                        React.createElement("img", { src: require("../" + value.blogPicture), alt: "", style: { width: "400px", height: "400px" }, title: "blogimage", draggable: "false" })),
                                    React.createElement("div", { className: "gdlr-core-blog-modern-content  gdlr-core-center-align", style: {
                                            paddingRight: "40px",
                                            paddingLeft: "40px",
                                        } },
                                        React.createElement("h3", { className: "gdlr-core-blog-title gdlr-core-skin-title", style: {
                                                fontSize: "24px",
                                                fontStyle: "normal",
                                                fontWeight: 500,
                                                letterSpacing: "0px",
                                            } },
                                            React.createElement(react_router_dom_1.Link, { to: "/blogs/details/" + value.id }, value.headText)),
                                        React.createElement("div", { className: "gdlr-core-blog-info-wrapper gdlr-core-skin-divider" },
                                            React.createElement("span", { className: "gdlr-core-blog-info gdlr-core-blog-info-font gdlr-core-skin-caption gdlr-core-blog-info-date" },
                                                React.createElement("span", { className: "gdlr-core-blog-info-sep" }, "\u2022"),
                                                React.createElement("span", { className: "gdlr-core-head" },
                                                    React.createElement("i", { className: "gdlr-icon-clock" })),
                                                React.createElement("a", null, value.createdDate)))))))));
                })))));
    };
    return BlogSlider;
}(React.Component));
exports.default = BlogSlider;
//# sourceMappingURL=BlogSlider.js.map