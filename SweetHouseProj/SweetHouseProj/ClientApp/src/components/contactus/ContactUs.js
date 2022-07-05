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
var ContactUsForm_1 = require("./ContactUsForm");
var ContactUs = /** @class */ (function (_super) {
    __extends(ContactUs, _super);
    function ContactUs(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            data: {
                email: "",
                location: "",
                mapX: 0,
                mapY: 0,
                phone: ""
            }
        };
        return _this;
    }
    ContactUs.prototype.componentDidMount = function () {
        var _this = this;
        fetch('/api/contact/contactus').then(function (response) {
            return response.json();
        }).then(function (data) {
            _this.setState({ data: data });
        });
    };
    ContactUs.prototype.render = function () {
        return (React.createElement(React.Fragment, null,
            React.createElement("div", { className: "gdlr-core-pbf-wrapper ", style: { padding: "300px 0px 160px 0px" }, "data-skin": "white", id: "gdlr-core-wrapper-1" },
                React.createElement("div", { className: "gdlr-core-pbf-background-wrap", style: { backgroundColor: "#0a0a0a" } },
                    React.createElement("div", { className: "gdlr-core-pbf-background gdlr-core-parallax gdlr-core-js", style: {
                            backgroundImage: "url(".concat(require('../images/resort-title-bg.jpg'), ")"),
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }, "data-parallax-speed": 0 })),
                React.createElement("div", { className: "gdlr-core-pbf-wrapper-content gdlr-core-js", "data-gdlr-animation-duration": "600ms", "data-gdlr-animation-offset": "0.8", style: {} },
                    React.createElement("div", { className: "gdlr-core-pbf-wrapper-container clearfix gdlr-core-container" },
                        React.createElement("div", { className: "gdlr-core-pbf-element" },
                            React.createElement("div", { className: "gdlr-core-title-item gdlr-core-item-pdb clearfix  gdlr-core-center-align gdlr-core-title-item-caption-bottom gdlr-core-item-pdlr" },
                                React.createElement("div", { className: "gdlr-core-title-item-title-wrap " },
                                    React.createElement("h3", { className: "gdlr-core-title-item-title gdlr-core-skin-title  class-test", style: {
                                            fontSize: "75px",
                                            fontWeight: 600,
                                            letterSpacing: "0px",
                                            textTransform: "none",
                                            color: "#ffffff",
                                        } },
                                        "\u018Flaq\u0259",
                                        React.createElement("span", { className: "gdlr-core-title-item-title-divider gdlr-core-skin-divider" }))),
                                React.createElement("span", { className: "gdlr-core-title-item-caption gdlr-core-info-font gdlr-core-skin-caption", style: {
                                        fontSize: "25px",
                                        fontStyle: "normal",
                                        letterSpacing: "0px",
                                        color: "#e5e5e5",
                                        marginTop: "15px",
                                    } }, "Bizimil\u0259 \u0259laq\u0259 saxlamaq \u00FC\u00E7\u00FCn")))))),
            React.createElement("div", { className: "gdlr-core-pbf-wrapper ", style: { padding: "30px 0px 20px 0px" }, "data-skin": "White Text" },
                React.createElement("div", { className: "gdlr-core-pbf-background-wrap", style: { backgroundColor: "#191919" } },
                    React.createElement("div", { className: "gdlr-core-pbf-background gdlr-core-parallax gdlr-core-js", style: {
                            opacity: "0.5",
                            backgroundSize: "cover",
                            backgroundPosition: "center center",
                            height: "420.12px",
                            transform: "translate(0px, -64.3px)",
                        }, "data-parallax-speed": "0.2" })),
                React.createElement("div", { className: "gdlr-core-pbf-wrapper-content gdlr-core-js " },
                    React.createElement("div", { className: "gdlr-core-pbf-wrapper-container clearfix gdlr-core-container" },
                        React.createElement("div", { className: "gdlr-core-pbf-column gdlr-core-column-20 gdlr-core-column-first", id: "gdlr-core-column-1" },
                            React.createElement("div", { className: "gdlr-core-pbf-column-content-margin gdlr-core-js ", style: { padding: "50px 20px 0px 20px" } },
                                React.createElement("div", { className: "gdlr-core-pbf-background-wrap" }),
                                React.createElement("div", { className: "gdlr-core-pbf-column-content clearfix gdlr-core-js", "data-gdlr-animation-duration": "600ms", "data-gdlr-animation-offset": "0.8", style: {} },
                                    React.createElement("div", { className: "gdlr-core-pbf-element" },
                                        React.createElement("div", { className: "gdlr-core-icon-item gdlr-core-item-pdlr gdlr-core-item-pdb gdlr-core-left-align", style: { paddingBottom: "40px" } },
                                            React.createElement("div", { className: " gdlr-core-icon-item-wrap gdlr-core-skin-e-background gdlr-core-icon-item-type-round", style: {
                                                    backgroundColor: "#ffffff",
                                                    borderRadius: "40px",
                                                    MozBorderRadius: "40px",
                                                    WebkitBorderRadius: "40px",
                                                    padding: "20px 20px 20px 20px",
                                                } },
                                                React.createElement("i", { className: " gdlr-core-icon-item-icon fa fa-phone gdlr-core-skin-e-content", style: {
                                                        color: "#0a0a0a",
                                                        fontSize: "40px",
                                                        minWidth: "40px",
                                                        minHeight: "40px",
                                                    } })))),
                                    React.createElement("div", { className: "gdlr-core-pbf-element" },
                                        React.createElement("div", { className: "gdlr-core-title-item gdlr-core-item-pdb clearfix  gdlr-core-left-align gdlr-core-title-item-caption-top gdlr-core-item-pdlr", style: { paddingBottom: "25px" } },
                                            React.createElement("div", { className: "gdlr-core-title-item-title-wrap " },
                                                React.createElement("h3", { className: "gdlr-core-title-item-title gdlr-core-skin-title  class-test", style: {
                                                        fontSize: "26px",
                                                        letterSpacing: "0px",
                                                        textTransform: "none",
                                                        color: "#ffffff",
                                                    } },
                                                    "Phone",
                                                    React.createElement("span", { className: "gdlr-core-title-item-title-divider gdlr-core-skin-divider" }))))),
                                    React.createElement("div", { className: "gdlr-core-pbf-element" },
                                        React.createElement("div", { className: "gdlr-core-text-box-item gdlr-core-item-pdlr gdlr-core-item-pdb gdlr-core-left-align", style: { paddingBottom: "0px" } },
                                            React.createElement("div", { className: "gdlr-core-text-box-item-content", style: { textTransform: "none", color: "#ffffff" } },
                                                React.createElement("p", null, this.state.data.phone)))),
                                    React.createElement("div", { className: "gdlr-core-pbf-element" },
                                        React.createElement("div", { className: "gdlr-core-text-box-item gdlr-core-item-pdlr gdlr-core-item-pdb gdlr-core-left-align" },
                                            React.createElement("div", { className: "gdlr-core-text-box-item-content", style: { fontWeight: 700, textTransform: "none" } })))))),
                        React.createElement("div", { className: "gdlr-core-pbf-column gdlr-core-column-20", id: "gdlr-core-column-2" },
                            React.createElement("div", { className: "gdlr-core-pbf-column-content-margin gdlr-core-js ", style: { padding: "50px 20px 0px 20px" } },
                                React.createElement("div", { className: "gdlr-core-pbf-background-wrap" }),
                                React.createElement("div", { className: "gdlr-core-pbf-column-content clearfix gdlr-core-js", "data-gdlr-animation-duration": "600ms", "data-gdlr-animation-offset": "0.8", style: {} },
                                    React.createElement("div", { className: "gdlr-core-pbf-element" },
                                        React.createElement("div", { className: "gdlr-core-icon-item gdlr-core-item-pdlr gdlr-core-item-pdb gdlr-core-left-align", style: { paddingBottom: "40px" } },
                                            React.createElement("div", { className: " gdlr-core-icon-item-wrap gdlr-core-skin-e-background gdlr-core-icon-item-type-round", style: {
                                                    backgroundColor: "#ffffff",
                                                    borderRadius: "40px",
                                                    MozBorderRadius: "40px",
                                                    WebkitBorderRadius: "40px",
                                                    padding: "24px 24px 24px 24px",
                                                } },
                                                React.createElement("i", { className: " gdlr-core-icon-item-icon fa fa-envelope-o gdlr-core-skin-e-content", style: {
                                                        color: "#000000",
                                                        fontSize: "31px",
                                                        minWidth: "31px",
                                                        minHeight: "31px",
                                                    } })))),
                                    React.createElement("div", { className: "gdlr-core-pbf-element" },
                                        React.createElement("div", { className: "gdlr-core-title-item gdlr-core-item-pdb clearfix  gdlr-core-left-align gdlr-core-title-item-caption-top gdlr-core-item-pdlr", style: { paddingBottom: "25px" } },
                                            React.createElement("div", { className: "gdlr-core-title-item-title-wrap " },
                                                React.createElement("h3", { className: "gdlr-core-title-item-title gdlr-core-skin-title  class-test", style: {
                                                        fontSize: "26px",
                                                        letterSpacing: "0px",
                                                        textTransform: "none",
                                                        color: "#ffffff",
                                                    } },
                                                    "Email",
                                                    React.createElement("span", { className: "gdlr-core-title-item-title-divider gdlr-core-skin-divider" }))))),
                                    React.createElement("div", { className: "gdlr-core-pbf-element" },
                                        React.createElement("div", { className: "gdlr-core-text-box-item gdlr-core-item-pdlr gdlr-core-item-pdb gdlr-core-left-align", style: { paddingBottom: "0px" } },
                                            React.createElement("div", { className: "gdlr-core-text-box-item-content", style: { textTransform: "none", color: "#ffffff" } },
                                                React.createElement("p", null, this.state.data.email)))),
                                    React.createElement("div", { className: "gdlr-core-pbf-element" },
                                        React.createElement("div", { className: "gdlr-core-text-box-item gdlr-core-item-pdlr gdlr-core-item-pdb gdlr-core-left-align" },
                                            React.createElement("div", { className: "gdlr-core-text-box-item-content", style: { fontWeight: 700, textTransform: "none" } })))))),
                        React.createElement("div", { className: "gdlr-core-pbf-column gdlr-core-column-20", id: "gdlr-core-column-3" },
                            React.createElement("div", { className: "gdlr-core-pbf-column-content-margin gdlr-core-js ", style: { padding: "50px 20px 0px 20px" } },
                                React.createElement("div", { className: "gdlr-core-pbf-background-wrap" }),
                                React.createElement("div", { className: "gdlr-core-pbf-column-content clearfix gdlr-core-js", "data-gdlr-animation-duration": "600ms", "data-gdlr-animation-offset": "0.8", style: {} },
                                    React.createElement("div", { className: "gdlr-core-pbf-element" },
                                        React.createElement("div", { className: "gdlr-core-icon-item gdlr-core-item-pdlr gdlr-core-item-pdb gdlr-core-left-align", style: { paddingBottom: "40px" } },
                                            React.createElement("div", { className: " gdlr-core-icon-item-wrap gdlr-core-skin-e-background gdlr-core-icon-item-type-round", style: {
                                                    backgroundColor: "#ffffff",
                                                    borderRadius: "40px",
                                                    MozBorderRadius: "40px",
                                                    WebkitBorderRadius: "40px",
                                                    padding: "24px 24px 24px 24px",
                                                } },
                                                React.createElement("i", { className: " gdlr-core-icon-item-icon fa fa-location-arrow gdlr-core-skin-e-content", style: {
                                                        color: "#000000",
                                                        fontSize: "31px",
                                                        minWidth: "31px",
                                                        minHeight: "31px",
                                                    } })))),
                                    React.createElement("div", { className: "gdlr-core-pbf-element" },
                                        React.createElement("div", { className: "gdlr-core-title-item gdlr-core-item-pdb clearfix  gdlr-core-left-align gdlr-core-title-item-caption-top gdlr-core-item-pdlr", style: { paddingBottom: "25px" } },
                                            React.createElement("div", { className: "gdlr-core-title-item-title-wrap " },
                                                React.createElement("h3", { className: "gdlr-core-title-item-title gdlr-core-skin-title  class-test", style: {
                                                        fontSize: "26px",
                                                        letterSpacing: "0px",
                                                        textTransform: "none",
                                                        color: "#ffffff",
                                                    } },
                                                    "Location",
                                                    React.createElement("span", { className: "gdlr-core-title-item-title-divider gdlr-core-skin-divider" }))))),
                                    React.createElement("div", { className: "gdlr-core-pbf-element" },
                                        React.createElement("div", { className: "gdlr-core-text-box-item gdlr-core-item-pdlr gdlr-core-item-pdb gdlr-core-left-align", style: { paddingBottom: "0px" } },
                                            React.createElement("div", { className: "gdlr-core-text-box-item-content", style: { textTransform: "none", color: "#ffffff" } }))),
                                    React.createElement("div", { className: "gdlr-core-pbf-element" },
                                        React.createElement("div", { className: "gdlr-core-text-box-item gdlr-core-item-pdlr gdlr-core-item-pdb gdlr-core-left-align" },
                                            React.createElement("div", { className: "gdlr-core-text-box-item-content", style: { textTransform: "none", color: "#ffffff" } },
                                                React.createElement("p", null, this.state.data.location)))))))))),
            React.createElement("div", { className: "gdlr-core-pbf-wrapper ", style: { padding: "90px 0px 35px 0px" } },
                React.createElement("div", { className: "gdlr-core-pbf-background-wrap", style: { backgroundColor: "#ffffff" } }),
                React.createElement("div", { className: "gdlr-core-pbf-wrapper-content gdlr-core-js " },
                    React.createElement("div", { className: "gdlr-core-pbf-wrapper-container clearfix gdlr-core-container" },
                        React.createElement("div", { className: "gdlr-core-pbf-column gdlr-core-column-60 gdlr-core-column-first", "data-skin": "Contact Field", id: "gdlr-core-column-4" },
                            React.createElement("div", { className: "gdlr-core-pbf-column-content-margin gdlr-core-js " },
                                React.createElement("div", { className: "gdlr-core-pbf-background-wrap" }),
                                React.createElement("div", { className: "gdlr-core-pbf-column-content clearfix gdlr-core-js ", style: { maxWidth: "760px" } },
                                    React.createElement("div", { className: "gdlr-core-pbf-element" },
                                        React.createElement("div", { className: "gdlr-core-title-item gdlr-core-item-pdb clearfix  gdlr-core-center-align gdlr-core-title-item-caption-bottom gdlr-core-item-pdlr", style: { paddingBottom: "60px" } },
                                            React.createElement("div", { className: "gdlr-core-title-item-title-wrap " },
                                                React.createElement("h3", { className: "gdlr-core-title-item-title gdlr-core-skin-title  class-test", style: {
                                                        fontSize: "39px",
                                                        fontWeight: 600,
                                                        letterSpacing: "0px",
                                                        textTransform: "none",
                                                    } },
                                                    "M\u0259lumatlar\u0131 daxil edin",
                                                    " ",
                                                    React.createElement("span", { className: "gdlr-core-title-item-title-divider gdlr-core-skin-divider" }))),
                                            React.createElement("span", { className: "gdlr-core-title-item-caption gdlr-core-info-font gdlr-core-skin-caption", style: {
                                                    fontSize: "19px",
                                                    fontStyle: "normal",
                                                    letterSpacing: "0px",
                                                } }, "M\u00FCraci\u0259tl\u0259riniz tez bir zamanda cavabland\u0131r\u0131lacaqd\u0131r"))),
                                    React.createElement("div", { className: "gdlr-core-pbf-element" },
                                        React.createElement("div", { className: "gdlr-core-contact-form-7-item gdlr-core-item-pdlr gdlr-core-item-pdb " },
                                            React.createElement("div", { role: "form", className: "wpcf7", id: "wpcf7-f1979-p1964-o1", lang: "en-US", dir: "ltr" },
                                                React.createElement("div", { className: "screen-reader-response" },
                                                    React.createElement("p", { role: "status", "aria-live": "polite", "aria-atomic": "true" }),
                                                    " ",
                                                    React.createElement("ul", null)),
                                                React.createElement(ContactUsForm_1.default, null)))))))))),
            React.createElement("div", { className: "gdlr-core-pbf-wrapper ", style: { padding: "0px 0px 0px 0px" } },
                React.createElement("div", { className: "gdlr-core-pbf-background-wrap" }),
                React.createElement("div", { className: "gdlr-core-pbf-wrapper-content gdlr-core-js " },
                    React.createElement("div", { className: "gdlr-core-pbf-wrapper-container clearfix gdlr-core-pbf-wrapper-full-no-space" },
                        React.createElement("div", { className: "gdlr-core-pbf-element" },
                            React.createElement("div", { className: "gdlr-core-wp-google-map-plugin-item gdlr-core-item-pdlr gdlr-core-item-pdb ", style: { paddingBottom: "0px" } },
                                React.createElement("div", { className: "wpgmp_map_container wpgmp-map-1" },
                                    React.createElement("div", { className: "wpgmp_map_parent" },
                                        React.createElement("div", { className: "wpgmp_map", style: {
                                                width: "100%",
                                                height: "500px",
                                                position: "relative",
                                                overflow: "hidden",
                                            }, id: "map1" }))))))))));
    };
    return ContactUs;
}(React.Component));
exports.default = (0, react_redux_1.connect)()(ContactUs);
//# sourceMappingURL=ContactUs.js.map