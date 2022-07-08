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
var BlogList = /** @class */ (function (_super) {
    __extends(BlogList, _super);
    function BlogList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    //constructor(props: any) {
    //    super(props);
    //    this.state = {
    //        data: []
    //    };
    //}
    //componentDidMount() {
    //    fetch('/api/home/rooms').then((response) => {
    //        return response.json();
    //    }).then((data) => {
    //        this.setState({ data: data });
    //        console.log(this.state.data)
    //    })
    //}
    BlogList.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement("div", { className: "gdlr-core-pbf-wrapper ", "data-aos": "fade-left", "data-aos-duration": "2000" },
                React.createElement("div", { className: "gdlr-core-pbf-background-wrap" }),
                React.createElement("div", { className: "gdlr-core-pbf-background-wrap", style: { top: "335px" } },
                    React.createElement("div", { className: "gdlr-core-pbf-background gdlr-core-parallax gdlr-core-js", style: {
                            backgroundImage: "url(".concat(require('../images/home-resort-news-bg.png')),
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "top center",
                        }, "data-parallax-speed": 0 })),
                React.createElement("div", { className: "gdlr-core-pbf-wrapper-content gdlr-core-js " },
                    React.createElement("div", { className: "gdlr-core-pbf-wrapper-container clearfix gdlr-core-container" },
                        React.createElement("div", { className: "gdlr-core-pbf-column gdlr-core-column-60 gdlr-core-column-first", id: "gdlr-core-column-28" },
                            React.createElement("div", { className: "gdlr-core-pbf-column-content-margin gdlr-core-js ", style: { padding: "0px 0px 20px 0px" } },
                                React.createElement("div", { className: "gdlr-core-pbf-background-wrap" }),
                                React.createElement("div", { className: "gdlr-core-pbf-column-content clearfix gdlr-core-js ", style: { maxWidth: "700px" } },
                                    React.createElement("div", { className: "gdlr-core-pbf-element" },
                                        React.createElement("div", { className: "gdlr-core-title-item gdlr-core-item-pdb clearfix  gdlr-core-center-align gdlr-core-title-item-caption-top gdlr-core-item-pdlr", style: { paddingBottom: "20px" }, id: "gdlr-core-title-item-6" },
                                            React.createElement("div", { className: "gdlr-core-title-item-title-wrap " },
                                                React.createElement("h3", { className: "gdlr-core-title-item-title gdlr-core-skin-title hotale-additional-font class-test", style: {
                                                        fontSize: "80px",
                                                        fontWeight: 400,
                                                        textTransform: "none",
                                                        color: "#000000",
                                                    } },
                                                    "\u018Fn Son X\u0259b\u0259rl\u0259r & Yenilikl\u0259r",
                                                    React.createElement("span", { className: "gdlr-core-title-item-title-divider gdlr-core-skin-divider" }))))),
                                    React.createElement("div", { className: "gdlr-core-pbf-element" },
                                        React.createElement("div", { className: "gdlr-core-text-box-item gdlr-core-item-pdlr gdlr-core-item-pdb gdlr-core-center-align" },
                                            React.createElement("div", { className: "gdlr-core-text-box-item-content", style: {
                                                    fontSize: "21px",
                                                    fontWeight: 400,
                                                    textTransform: "none",
                                                    color: "#898989",
                                                } },
                                                React.createElement("p", null, "Aktiv bloglar\u0131m\u0131zla \u0259n son x\u0259b\u0259rl\u0259rl\u0259 tan\u0131\u015F ola bil\u0259r \u0259n son yenilikl\u0259rd\u0259n ilk x\u0259b\u0259rdar ola bil\u0259rsiniz"))))))),
                        React.createElement("div", { className: "gdlr-core-pbf-column gdlr-core-column-60 gdlr-core-column-first", id: "gdlr-core-column-29" },
                            React.createElement("div", { className: "gdlr-core-pbf-column-content-margin gdlr-core-js " },
                                React.createElement("div", { className: "gdlr-core-pbf-background-wrap" }),
                                React.createElement("div", { className: "gdlr-core-pbf-column-content clearfix gdlr-core-js", "data-gdlr-animation-duration": "600ms", "data-gdlr-animation-offset": "0.8", style: {} },
                                    React.createElement("div", { className: "gdlr-core-pbf-element" },
                                        React.createElement("div", { className: "gdlr-core-blog-item gdlr-core-item-pdb clearfix  gdlr-core-style-blog-image gdlr-core-item-pdlr", id: "gdlr-core-blog-1" }))))),
                        React.createElement("div", { className: "gdlr-core-pbf-column gdlr-core-column-60 gdlr-core-column-first", id: "gdlr-core-column-30" },
                            React.createElement("div", { className: "gdlr-core-pbf-column-content-margin gdlr-core-js ", style: { padding: "35px 0px 85px 0px" } },
                                React.createElement("div", { className: "gdlr-core-pbf-background-wrap" }),
                                React.createElement("div", { className: "gdlr-core-pbf-column-content clearfix gdlr-core-js " },
                                    React.createElement("div", { className: "gdlr-core-pbf-element" },
                                        React.createElement("div", { className: "gdlr-core-button-item gdlr-core-item-pdlr gdlr-core-item-pdb gdlr-core-center-align", style: { paddingBottom: "0px" } },
                                            React.createElement("a", { className: "gdlr-core-button  gdlr-core-button-transparent gdlr-core-center-align gdlr-core-button-with-border", href: "blog-full-right-sidebar/index.html", id: "gdlr-core-button-id-5" },
                                                React.createElement("span", { className: "gdlr-core-content" },
                                                    "Daha \u00E7ox",
                                                    React.createElement("i", { className: "gdlr-core-pos-right icon-arrow-right", style: { fontSize: "16px", color: "#000000" } }))))))))))),
            ";"));
    };
    return BlogList;
}(React.Component));
exports.default = (0, react_redux_1.connect)()(BlogList);
//# sourceMappingURL=BlogList.js.map