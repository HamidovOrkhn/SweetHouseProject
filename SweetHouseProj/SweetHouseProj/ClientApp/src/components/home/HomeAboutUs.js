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
var HomeAboutUs = /** @class */ (function (_super) {
    __extends(HomeAboutUs, _super);
    function HomeAboutUs(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            data: {
                miniText: "",
                aboutUsPictures: [],
                body: "",
                header: ""
            }
        };
        return _this;
    }
    HomeAboutUs.prototype.componentDidMount = function () {
        var _this = this;
        fetch('/api/home/aboutus').then(function (response) {
            return response.json();
        }).then(function (data) {
            _this.setState({ data: data });
            console.log(_this.state.data.aboutUsPictures);
        });
    };
    HomeAboutUs.prototype.render = function () {
        return (React.createElement(React.Fragment, null,
            React.createElement("div", { className: "gdlr-core-pbf-wrapper ", style: { padding: "105px 0px 36px 0px" }, id: "gdlr-core-wrapper-2" },
                React.createElement("div", { className: "gdlr-core-pbf-background-wrap" }),
                React.createElement("div", { className: "gdlr-core-pbf-wrapper-content gdlr-core-js " },
                    React.createElement("div", { className: "gdlr-core-pbf-wrapper-container clearfix gdlr-core-container" },
                        React.createElement("div", { className: "gdlr-core-pbf-column gdlr-core-column-30 gdlr-core-column-first", id: "gdlr-core-column-2" },
                            React.createElement("div", { className: "gdlr-core-pbf-column-content-margin gdlr-core-js ", style: { padding: "30px 0px 0px 0px" } },
                                React.createElement("div", { className: "gdlr-core-pbf-background-wrap" }),
                                React.createElement("div", { className: "gdlr-core-pbf-column-content clearfix gdlr-core-js", "data-gdlr-animation-duration": "600ms", "data-gdlr-animation-offset": "0.8", style: {} },
                                    React.createElement("div", { className: "gdlr-core-pbf-element" },
                                        React.createElement("div", { className: "gdlr-core-text-box-item gdlr-core-item-pdlr gdlr-core-item-pdb gdlr-core-left-align" },
                                            React.createElement("div", { className: "gdlr-core-text-box-item-content", style: { textTransform: "none", color: "#0a0a0a" } },
                                                React.createElement("p", null,
                                                    React.createElement("span", { style: {
                                                            fontSize: "55px",
                                                            fontWeight: 500,
                                                            marginRight: "12px",
                                                            letterSpacing: "4px",
                                                        } }, "5"),
                                                    " ",
                                                    React.createElement("span", { className: "mmr30", style: {
                                                            fontSize: "22px",
                                                            fontWeight: 400,
                                                            marginRight: "80px",
                                                            letterSpacing: "7px",
                                                        } }, "stars"),
                                                    React.createElement("span", { style: {
                                                            fontSize: "55px",
                                                            fontWeight: 500,
                                                            marginRight: "12px",
                                                            letterSpacing: "4px",
                                                        } }, "25"),
                                                    " ",
                                                    React.createElement("span", { style: {
                                                            fontSize: "22px",
                                                            fontWeight: 400,
                                                            marginRight: "12px",
                                                            letterSpacing: "7px",
                                                        } }, "rooms"))))),
                                    React.createElement("div", { className: "gdlr-core-pbf-element" },
                                        React.createElement("div", { className: "gdlr-core-text-box-item gdlr-core-item-pdlr gdlr-core-item-pdb gdlr-core-left-align" },
                                            React.createElement("div", { className: "gdlr-core-text-box-item-content", style: {
                                                    fontSize: "34px",
                                                    lineHeight: "1.4",
                                                    fontWeight: 400,
                                                    letterSpacing: "5px",
                                                    textTransform: "none",
                                                    color: "#0a0a0a",
                                                } },
                                                React.createElement("p", null, this.state.data.miniText)))),
                                    React.createElement("div", { className: "gdlr-core-pbf-element" },
                                        React.createElement("div", { className: "gdlr-core-button-item gdlr-core-item-pdlr gdlr-core-item-pdb gdlr-core-left-align" },
                                            React.createElement("a", { className: "gdlr-core-button  gdlr-core-button-transparent gdlr-core-left-align gdlr-core-button-with-border", href: "#", id: "gdlr-core-button-id-1" },
                                                React.createElement("span", { className: "gdlr-core-content" },
                                                    "More About US",
                                                    React.createElement("i", { className: "gdlr-core-pos-right icon-arrow-right", style: { fontSize: "16px", color: "#000000" } })))))))),
                        React.createElement("div", { className: "gdlr-core-pbf-column gdlr-core-column-30", id: "gdlr-core-column-3" },
                            React.createElement("div", { className: "gdlr-core-pbf-column-content-margin gdlr-core-js " },
                                React.createElement("div", { className: "gdlr-core-pbf-background-wrap" }),
                                React.createElement("div", { className: "gdlr-core-pbf-column-content clearfix gdlr-core-js", "data-gdlr-animation-duration": "600ms", "data-gdlr-animation-offset": "0.8", style: {} },
                                    React.createElement("div", { className: "gdlr-core-pbf-element" },
                                        React.createElement("div", { className: "gdlr-core-image-item gdlr-core-item-pdb  gdlr-core-center-align", style: { paddingBottom: "0px" } },
                                            React.createElement("div", { className: "gdlr-core-image-item-wrap gdlr-core-media-image  gdlr-core-image-item-style-round2 gdlr-core-image-item-style-round", style: {
                                                    borderWidth: "0px",
                                                    maxWidth: "550px",
                                                    borderRadius: "50px 0px 50px 0px",
                                                    MozBorderRadius: "50px 0px 50px 0px",
                                                    WebkitBorderRadius: "50px 0px 50px 0px",
                                                } },
                                                React.createElement("img", { src: this.state.data.aboutUsPictures.length > 0 ? require('../' + this.state.data.aboutUsPictures[0].src) : "", alt: "", width: 1000, height: 1130, title: "resort-swim" })))))))))),
            ";"));
    };
    return HomeAboutUs;
}(React.Component));
exports.default = (0, react_redux_1.connect)()(HomeAboutUs);
//# sourceMappingURL=HomeAboutUs.js.map