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
var Cards_1 = require("./Cards");
var HotelCards = /** @class */ (function (_super) {
    __extends(HotelCards, _super);
    function HotelCards() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HotelCards.prototype.render = function () {
        return (React.createElement(React.Fragment, null,
            React.createElement("div", { className: "gdlr-core-pbf-wrapper ", style: { padding: "80px 0px 15px 0px" }, id: "gdlr-core-wrapper-3" },
                React.createElement("div", { className: "gdlr-core-pbf-background-wrap" },
                    React.createElement("div", { className: "gdlr-core-pbf-background gdlr-core-parallax gdlr-core-js", style: {
                            backgroundImage: "url(".concat(require('../images/Square.png'), ")"),
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "top center",
                        }, "data-parallax-speed": 0 })),
                React.createElement("div", { className: "gdlr-core-pbf-wrapper-content gdlr-core-js " },
                    React.createElement("div", { className: "gdlr-core-pbf-wrapper-container clearfix gdlr-core-container" },
                        React.createElement("div", { className: "gdlr-core-pbf-column gdlr-core-column-60 gdlr-core-column-first", id: "gdlr-core-column-5" },
                            React.createElement("div", { className: "gdlr-core-pbf-column-content-margin gdlr-core-js ", style: { padding: "0px 0px 90px 0px" } },
                                React.createElement("div", { className: "gdlr-core-pbf-background-wrap" }),
                                React.createElement("div", { className: "gdlr-core-pbf-column-content clearfix gdlr-core-js ", style: { maxWidth: "760px" } },
                                    React.createElement("div", { className: "gdlr-core-pbf-element" },
                                        React.createElement("div", { className: "gdlr-core-title-item gdlr-core-item-pdb clearfix  gdlr-core-center-align gdlr-core-title-item-caption-top gdlr-core-item-pdlr", id: "gdlr-core-title-item-2" },
                                            React.createElement("div", { className: "gdlr-core-title-item-title-wrap " },
                                                React.createElement("h3", { className: "gdlr-core-title-item-title gdlr-core-skin-title hotale-additional-font class-test", style: {
                                                        fontSize: "80px",
                                                        fontWeight: 400,
                                                        letterSpacing: "0px",
                                                        textTransform: "none",
                                                        color: "#000000",
                                                    } },
                                                    "Otaqlar.",
                                                    React.createElement("span", { className: "gdlr-core-title-item-title-divider gdlr-core-skin-divider" }))))),
                                    React.createElement("div", { className: "gdlr-core-pbf-element" },
                                        React.createElement("div", { className: "gdlr-core-text-box-item gdlr-core-item-pdlr gdlr-core-item-pdb gdlr-core-center-align gdlr-core-no-p-space", style: { paddingBottom: "0px" } },
                                            React.createElement("div", { className: "gdlr-core-text-box-item-content", style: {
                                                    fontSize: "21px",
                                                    fontWeight: 400,
                                                    letterSpacing: "0px",
                                                    textTransform: "none",
                                                    color: "#898989",
                                                } },
                                                React.createElement("p", null, "Siz burada \u015F\u0259h\u0259r s\u0259s-k\u00FCy\u00FCnd\u0259n uzaqda \u0259sl istirah\u0259tinizi tapacaqs\u0131n\u0131z"))))))),
                        React.createElement("div", { className: "gdlr-core-pbf-column gdlr-core-column-60 gdlr-core-column-first", id: "gdlr-core-column-6" },
                            React.createElement("div", { className: "gdlr-core-pbf-column-content-margin gdlr-core-js ", style: { padding: "0px 0px 0px 0px" } },
                                React.createElement("div", { className: "gdlr-core-pbf-background-wrap" }),
                                React.createElement("div", { className: "gdlr-core-pbf-column-content clearfix gdlr-core-js " },
                                    React.createElement("div", { className: "gdlr-core-pbf-element" },
                                        React.createElement("div", { className: "tourmaster-room-item clearfix  tourmaster-room-item-style-grid", id: "gdlr-core-room-1" },
                                            React.createElement("div", { className: "gdlr-core-flexslider flexslider gdlr-core-js-2 gdlr-core-with-outer-frame-element", "data-type": "carousel", "data-column": 3, "data-move": 1, "data-nav": "navigation-outer", "data-nav-parent": "self", "data-vcenter-nav": 1 },
                                                React.createElement("div", { className: "flex-viewport", style: { overflow: "hidden", position: "relative" } },
                                                    React.createElement(Cards_1.default, null)),
                                                React.createElement("div", { className: "gdlr-core-flexslider-custom-nav  gdlr-core-style-navigation-outer gdlr-core-center-align", style: { marginTop: "-20px" } },
                                                    React.createElement("i", { className: "icon-arrow-left flex-prev", style: {
                                                            color: "rgb(181, 181, 181)",
                                                            fontSize: "34px",
                                                            left: "-80px",
                                                            marginTop: "-314.062px",
                                                        } }),
                                                    React.createElement("i", { className: "icon-arrow-right flex-next", style: {
                                                            color: "rgb(181, 181, 181)",
                                                            fontSize: "34px",
                                                            right: "-80px",
                                                            marginTop: "-314.062px",
                                                        } })))))))),
                        React.createElement("div", { className: "gdlr-core-pbf-column gdlr-core-column-60 gdlr-core-column-first", id: "gdlr-core-column-7" },
                            React.createElement("div", { className: "gdlr-core-pbf-column-content-margin gdlr-core-js ", style: { padding: "0px 0px 90px 0px" } },
                                React.createElement("div", { className: "gdlr-core-pbf-background-wrap" }),
                                React.createElement("div", { className: "gdlr-core-pbf-column-content clearfix gdlr-core-js " },
                                    React.createElement("div", { className: "gdlr-core-pbf-element" },
                                        React.createElement("div", { className: "gdlr-core-button-item gdlr-core-item-pdlr gdlr-core-item-pdb gdlr-core-center-align" },
                                            React.createElement("a", { className: "gdlr-core-button  gdlr-core-button-transparent gdlr-core-center-align gdlr-core-button-with-border", href: "room-search/indexae75.html?room_amount=1&room-search=", style: {
                                                    fontSize: "13px",
                                                    fontStyle: "normal",
                                                    fontWeight: 600,
                                                    letterSpacing: "4px",
                                                    color: "#000000",
                                                    padding: "15px 0px 10px 0px",
                                                    textTransform: "uppercase",
                                                    borderRadius: "0px",
                                                    MozBorderRadius: "0px",
                                                    WebkitBorderRadius: "0px",
                                                    borderWidth: "0px 0px 1px 0px",
                                                    borderColor: "#dadada",
                                                } },
                                                React.createElement("span", { className: "gdlr-core-content" },
                                                    "B\u00FCt\u00FCn Otaqlar\u0131m\u0131z",
                                                    React.createElement("i", { className: "gdlr-core-pos-right icon-arrow-right", style: { fontSize: "16px", color: "#000000" } })))))))))))));
    };
    return HotelCards;
}(React.Component));
exports.default = (0, react_redux_1.connect)()(HotelCards);
//# sourceMappingURL=HotelCards.js.map