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
var AboutUs = /** @class */ (function (_super) {
    __extends(AboutUs, _super);
    function AboutUs(props) {
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
    AboutUs.prototype.componentDidMount = function () {
        var _this = this;
        fetch('/api/home/aboutus').then(function (response) {
            return response.json();
        }).then(function (data) {
            _this.setState({ data: data });
        });
    };
    AboutUs.prototype.render = function () {
        return (React.createElement(React.Fragment, null,
            React.createElement("div", { className: "hotale-page-title-wrap  hotale-style-custom hotale-center-align", "data-aos": "fade-bottom", "data-aos-duration": "1000" },
                React.createElement("div", { className: "hotale-header-transparent-substitute", style: { height: "149.3px" } }),
                React.createElement("div", { className: "hotale-page-title-overlay" }),
                React.createElement("div", { className: "hotale-page-title-container hotale-container" },
                    React.createElement("div", { className: "hotale-page-title-content hotale-item-pdlr" },
                        React.createElement("h1", { className: "hotale-page-title" }, this.props.t("aboutus_title"))))),
            " ",
            React.createElement("div", { className: "hotale-page-wrapper", id: "hotale-page-wrapper" },
                React.createElement("div", { className: "gdlr-core-page-builder-body" },
                    React.createElement("div", { className: "gdlr-core-pbf-wrapper ", style: { padding: "105px 0px 55px 0px" }, id: "gdlr-core-wrapper-1" },
                        React.createElement("div", { className: "gdlr-core-pbf-background-wrap" }),
                        React.createElement("div", { className: "gdlr-core-pbf-wrapper-content gdlr-core-js " },
                            React.createElement("div", { className: "gdlr-core-pbf-wrapper-container clearfix gdlr-core-container" },
                                React.createElement("div", { className: "gdlr-core-pbf-column gdlr-core-column-60 gdlr-core-column-first" },
                                    React.createElement("div", { className: "gdlr-core-pbf-column-content-margin gdlr-core-js " },
                                        React.createElement("div", { className: "gdlr-core-pbf-column-content clearfix gdlr-core-js " },
                                            React.createElement("div", { className: "gdlr-core-pbf-element" },
                                                React.createElement("div", { className: "gdlr-core-title-item gdlr-core-item-pdb clearfix  gdlr-core-center-align gdlr-core-title-item-caption-top gdlr-core-item-pdlr", style: { paddingBottom: "20px" }, id: "gdlr-core-title-item-1" },
                                                    React.createElement("div", { className: "gdlr-core-title-item-title-wrap " },
                                                        React.createElement("h3", { className: "gdlr-core-title-item-title gdlr-core-skin-title hotale-additional-font class-test", style: {
                                                                fontSize: "80px",
                                                                fontWeight: 400,
                                                                letterSpacing: "0px",
                                                                textTransform: "none",
                                                                color: "#000000",
                                                            } },
                                                            this.props.t("aboutus_title"),
                                                            React.createElement("span", { className: "gdlr-core-title-item-title-divider gdlr-core-skin-divider" })))))))),
                                React.createElement("div", { className: "gdlr-core-pbf-column gdlr-core-column-60 gdlr-core-column-first", id: "gdlr-core-column-1" },
                                    React.createElement("div", { className: "gdlr-core-pbf-column-content-margin gdlr-core-js ", style: { padding: "0px 0px 20px 0px" } },
                                        React.createElement("div", { className: "gdlr-core-pbf-background-wrap" }),
                                        React.createElement("div", { className: "gdlr-core-pbf-column-content clearfix gdlr-core-js ", style: { maxWidth: "100% !important" } },
                                            React.createElement("div", { className: "gdlr-core-pbf-element" },
                                                React.createElement("div", { className: "gdlr-core-text-box-item gdlr-core-item-pdlr gdlr-core-item-pdb gdlr-core-center-align gdlr-core-no-p-space" },
                                                    React.createElement("div", { className: "gdlr-core-text-box-item-content", style: {
                                                            fontSize: "21px",
                                                            fontWeight: 400,
                                                            letterSpacing: "0px",
                                                            textTransform: "none",
                                                            color: "#898989",
                                                        } },
                                                        React.createElement("p", null, this.state.data.body)))),
                                            React.createElement("div", { className: "gdlr-core-pbf-element" },
                                                React.createElement("div", { className: "gdlr-core-divider-item gdlr-core-divider-item-normal gdlr-core-item-pdlr gdlr-core-center-align" },
                                                    React.createElement("div", { className: "gdlr-core-divider-container", style: { maxWidth: "40px" } },
                                                        React.createElement("div", { className: "gdlr-core-divider-line gdlr-core-skin-divider", style: { borderColor: "#0a0a0a", borderWidth: "3px" } }))))))))))))));
    };
    return AboutUs;
}(React.Component));
exports.default = (0, react_i18next_1.withTranslation)()(AboutUs);
//# sourceMappingURL=AboutUs.js.map