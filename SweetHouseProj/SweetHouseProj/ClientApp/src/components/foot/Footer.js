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
var react_i18next_1 = require("react-i18next");
var Footer = /** @class */ (function (_super) {
    __extends(Footer, _super);
    function Footer(props) {
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
    Footer.prototype.componentDidMount = function () {
        var _this = this;
        fetch('/api/contact/contactus').then(function (response) {
            return response.json();
        }).then(function (data) {
            _this.setState({ data: data });
        });
    };
    Footer.prototype.render = function () {
        return (React.createElement(React.Fragment, null,
            React.createElement("footer", null,
                React.createElement("div", { className: "hotale-footer-wrapper " },
                    React.createElement("div", { className: "hotale-footer-container hotale-container clearfix" },
                        React.createElement("div", { className: "hotale-footer-column hotale-item-pdlr hotale-column-15" },
                            React.createElement("div", { id: "block-7", className: "widget widget_block widget_text hotale-widget" },
                                React.createElement("p", null)),
                            React.createElement("div", { id: "block-8", className: "widget widget_block hotale-widget" },
                                React.createElement("p", null,
                                    React.createElement("span", { className: "gdlr-core-space-shortcode", style: { marginTop: "-10px" } }),
                                    React.createElement("i", { className: "fa fa-facebook", style: {
                                            fontSize: "16px",
                                            color: "#ffffff",
                                            marginLeft: "3px",
                                            marginRight: "17px",
                                        } }),
                                    React.createElement("i", { className: "fa5b fa-twitter", style: {
                                            fontSize: "16px",
                                            color: "#ffffff",
                                            marginLeft: "3px",
                                            marginRight: "17px",
                                        } }),
                                    React.createElement("i", { className: "fa5b fa-pinterest-p", style: {
                                            fontSize: "16px",
                                            color: "#ffffff",
                                            marginLeft: "3px",
                                            marginRight: "17px",
                                        } }),
                                    React.createElement("i", { className: "fa5b fa5-tiktok", style: {
                                            fontSize: "16px",
                                            color: "#ffffff",
                                            marginLeft: "3px",
                                            marginRight: "17px",
                                        } })))),
                        React.createElement("div", { className: "hotale-footer-column hotale-item-pdlr hotale-column-15" },
                            React.createElement("div", { id: "block-10", className: "widget widget_block hotale-widget" },
                                React.createElement("h4", null, "\u018Flaq\u0259")),
                            React.createElement("div", { id: "block-14", className: "widget widget_block hotale-widget" },
                                React.createElement("p", null,
                                    React.createElement("span", { style: { color: "#ffffff" } }, "T"),
                                    ": ",
                                    this.state.data.phone,
                                    " ",
                                    " "),
                                React.createElement("p", null,
                                    React.createElement("span", { className: "gdlr-core-space-shortcode", style: { marginTop: "-10px" } })),
                                React.createElement("p", null,
                                    React.createElement("span", { style: { color: "#ffffff" } }, "E"),
                                    ": ",
                                    this.state.data.email,
                                    " ",
                                    " "))),
                        React.createElement("div", { className: "hotale-footer-column hotale-item-pdlr hotale-column-15" },
                            React.createElement("div", { id: "block-12", className: "widget widget_block hotale-widget" },
                                React.createElement("h4", null, "Hotel Address")),
                            React.createElement("div", { id: "block-15", className: "widget widget_block hotale-widget" },
                                React.createElement("p", null,
                                    React.createElement("span", { style: { color: "#ffffff" } }, this.state.data.location)))),
                        React.createElement("div", { className: "hotale-footer-column hotale-item-pdlr hotale-column-15" },
                            React.createElement("div", { id: "block-18", className: "widget widget_block widget_media_image hotale-widget" },
                                React.createElement("div", { className: "wp-block-image" },
                                    React.createElement("figure", { className: "aligncenter size-full" },
                                        React.createElement("img", { loading: "lazy", width: "213", height: "90", src: require("../images/footer-banner.png"), alt: "", className: "wp-image-15004" })))),
                            React.createElement("div", { id: "block-20", className: "widget widget_block widget_media_image hotale-widget" },
                                React.createElement("div", { className: "wp-block-image" },
                                    React.createElement("figure", { className: "aligncenter is-resized" },
                                        React.createElement("img", { loading: "lazy", src: require("../images/footer-cards.png"), alt: "", className: "wp-image-15005", width: "154", height: "26", srcSet: require("../images/footer-cards.png"), sizes: "(max-width: 154px) 100vw, 154px" }))))))),
                React.createElement("div", { className: "hotale-copyright-wrapper" },
                    React.createElement("div", { className: "hotale-copyright-container hotale-container clearfix" },
                        React.createElement("div", { className: "hotale-copyright-right hotale-item-pdlr" }, this.props.t("footer_foot")))))));
    };
    return Footer;
}(React.PureComponent));
;
exports.default = (0, react_i18next_1.withTranslation)()(Footer);
//# sourceMappingURL=Footer.js.map