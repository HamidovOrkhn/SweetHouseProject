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
var bar_jpg_1 = require("../images/bar.jpg");
var Footer = /** @class */ (function (_super) {
    __extends(Footer, _super);
    function Footer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Footer.prototype.render = function () {
        return (React.createElement(React.Fragment, null,
            React.createElement("footer", null,
                React.createElement("div", { className: "hotale-footer-wrapper " },
                    React.createElement("div", { className: "hotale-footer-container hotale-container clearfix" },
                        React.createElement("div", { className: "hotale-footer-column hotale-item-pdlr hotale-column-15" },
                            React.createElement("div", { id: "block-21", className: "widget widget_block widget_media_image hotale-widget" },
                                React.createElement("figure", { className: "wp-block-image" },
                                    React.createElement("img", { loading: "lazy", width: "110", height: "27", src: bar_jpg_1.default, alt: bar_jpg_1.default, className: "wp-image-14995" }))),
                            React.createElement("div", { id: "block-7", className: "widget widget_block widget_text hotale-widget" },
                                React.createElement("p", null)),
                            React.createElement("div", { id: "block-8", className: "widget widget_block hotale-widget" },
                                React.createElement("p", null,
                                    React.createElement("span", { className: "gdlr-core-space-shortcode", style: { marginTop: "-10px" } }),
                                    React.createElement("i", { className: "fa fa-facebook", style: { fontSize: "16px", color: "#ffffff", marginLeft: "3px", marginRight: "17px" } }),
                                    React.createElement("i", { className: "fa5b fa-twitter", style: { fontSize: "16px", color: "#ffffff", marginLeft: "3px", marginRight: "17px" } }),
                                    React.createElement("i", { className: "fa5b fa-pinterest-p", style: { fontSize: "16px", color: "#ffffff", marginLeft: "3px", marginRight: "17px" } }),
                                    React.createElement("i", { className: "fa5b fa5-tiktok", style: { fontSize: "16px", color: "#ffffff", marginLeft: "3px", marginRight: "17px" } }))),
                            React.createElement("div", { id: "block-22", className: "widget widget_block widget_text hotale-widget" },
                                React.createElement("p", null)),
                            React.createElement("div", { id: "block-25", className: "widget widget_block hotale-widget" },
                                React.createElement("div", { className: "tourmaster-currency-switcher-shortcode clearfix" },
                                    React.createElement("div", { className: "tourmaster-currency-switcher", style: { background: "#333333" } },
                                        React.createElement("span", { className: "tourmaster-head", style: { color: "#ffffff" } },
                                            React.createElement("span", null, "USD"),
                                            React.createElement("i", { className: "fa fa-sort-down" })),
                                        React.createElement("div", { className: "tourmaster-currency-switcher-inner" },
                                            React.createElement("div", { className: "tourmaster-currency-switcher-content" },
                                                React.createElement("ul", null,
                                                    React.createElement("li", null,
                                                        React.createElement("a", { href: "index5e60.html?currency=eur" }, "EUR")),
                                                    React.createElement("li", null,
                                                        React.createElement("a", { href: "index4236.html?currency=chf" }, "CHF"))))))))),
                        React.createElement("div", { className: "hotale-footer-column hotale-item-pdlr hotale-column-15" },
                            React.createElement("div", { id: "block-10", className: "widget widget_block hotale-widget" },
                                React.createElement("h4", null, "Contact")),
                            React.createElement("div", { id: "block-14", className: "widget widget_block hotale-widget" },
                                React.createElement("p", null,
                                    React.createElement("span", { style: { color: "#ffffff" } }, "T"),
                                    ": 1-634-567-34 "),
                                React.createElement("p", null,
                                    React.createElement("span", { className: "gdlr-core-space-shortcode", style: { marginTop: "-10px" } })),
                                React.createElement("p", null,
                                    React.createElement("span", { style: { color: "#ffffff" } }, "E"),
                                    ": Book@Hotel.co "),
                                React.createElement("p", null,
                                    React.createElement("span", { className: "gdlr-core-space-shortcode", style: { marginTop: "-10px" } })),
                                React.createElement("p", null,
                                    React.createElement("span", { style: { color: "#ffffff" } }, "F"),
                                    ": 1-634-567-35"))),
                        React.createElement("div", { className: "hotale-footer-column hotale-item-pdlr hotale-column-15" },
                            React.createElement("div", { id: "block-12", className: "widget widget_block hotale-widget" },
                                React.createElement("h4", null, "Hotel Address")),
                            React.createElement("div", { id: "block-15", className: "widget widget_block hotale-widget" },
                                React.createElement("p", null,
                                    React.createElement("span", { style: { color: "#ffffff" } },
                                        "Hotale Av.",
                                        React.createElement("br", null),
                                        "del Ejercito, 2, 1900",
                                        React.createElement("br", null),
                                        "Madrid, Spain")))),
                        React.createElement("div", { className: "hotale-footer-column hotale-item-pdlr hotale-column-15" },
                            React.createElement("div", { id: "block-18", className: "widget widget_block widget_media_image hotale-widget" },
                                React.createElement("div", { className: "wp-block-image" },
                                    React.createElement("figure", { className: "aligncenter size-full" },
                                        React.createElement("img", { loading: "lazy", width: "213", height: "90", src: "../../../a6e8z9v6.stackpathcdn.com/hotale/resort/wp-content/uploads/sites/2/2021/11/footer-banner.png", alt: "", className: "wp-image-15004" })))),
                            React.createElement("div", { id: "block-20", className: "widget widget_block widget_media_image hotale-widget" },
                                React.createElement("div", { className: "wp-block-image" },
                                    React.createElement("figure", { className: "aligncenter is-resized" },
                                        React.createElement("img", { loading: "lazy", src: "../../../a6e8z9v6.stackpathcdn.com/hotale/resort/wp-content/uploads/sites/2/2021/11/footer-cards.png", alt: "", className: "wp-image-15005", width: "154", height: "26", srcSet: "https://a6e8z9v6.stackpathcdn.com/hotale/resort/wp-content/uploads/sites/2/2021/11/footer-cards.png 308w, https://a6e8z9v6.stackpathcdn.com/hotale/resort/wp-content/uploads/sites/2/2021/11/footer-cards-300x53.png 300w", sizes: "(max-width: 154px) 100vw, 154px" }))))))),
                React.createElement("div", { className: "hotale-copyright-wrapper" },
                    React.createElement("div", { className: "hotale-copyright-container hotale-container clearfix" },
                        React.createElement("div", { className: "hotale-copyright-left hotale-item-pdlr" },
                            React.createElement("div", { style: { textTransform: "uppercase", fontWeight: "500", fontSize: "13px", letterSpacing: "3px" } },
                                React.createElement("a", { href: "https://demo.goodlayers.com/hotale/", style: { marginRight: "22px" } }, "Home"),
                                React.createElement("a", { href: "about-us/index.html", style: { marginRight: "22px" } }, "About"),
                                React.createElement("a", { href: "about-us-2/index.html", style: { marginRight: "22px" } }, "Privacy Policy"),
                                React.createElement("a", { href: "contact/index.html", style: { marginRight: "22px" } }, "Contact"))),
                        React.createElement("div", { className: "hotale-copyright-right hotale-item-pdlr" }, "Copyright \u00A9 GoodLayers. All Rights Reserved."))))));
    };
    return Footer;
}(React.PureComponent));
;
exports.default = (0, react_redux_1.connect)()(Footer);
//# sourceMappingURL=Footer.js.map