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
var react_router_dom_1 = require("react-router-dom");
var Pagination_1 = require("../rooms/Pagination");
/*import Pagination from './Pagination';*/
var Blogs = /** @class */ (function (_super) {
    __extends(Blogs, _super);
    function Blogs(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            init: {
                page: 0,
                code: 200,
                data: []
            }
        };
        return _this;
    }
    Blogs.prototype.GetRoutePage = function () {
        var queryParams = new URLSearchParams(window.location.search);
        var term = queryParams.get("page") === null ? "" : queryParams.get("page").toString();
        return parseInt(term);
    };
    Blogs.prototype.componentDidMount = function () {
        var _this = this;
        fetch('/api/blog/blogs?page=' + this.state.init.page).then(function (response) {
            return response.json();
        }).then(function (data) {
            _this.setState({ init: data });
            console.log(_this.state.init);
        });
    };
    Blogs.prototype.render = function () {
        return (React.createElement(React.Fragment, null,
            React.createElement("div", { className: "hotale-page-title-wrap  hotale-style-custom hotale-center-align", "data-aos": "fade-bottom", "data-aos-duration": "1000" },
                React.createElement("div", { className: "hotale-header-transparent-substitute", style: { height: "149.3px" } }),
                React.createElement("div", { className: "hotale-page-title-overlay" }),
                React.createElement("div", { className: "hotale-page-title-container hotale-container" },
                    React.createElement("div", { className: "hotale-page-title-content hotale-item-pdlr" },
                        React.createElement("h1", { className: "hotale-page-title" }, this.props.t("blogs_title"))))),
            " ",
            React.createElement("div", null),
            React.createElement("div", { className: "hotale-page-wrapper", id: "hotale-page-wrapper", "data-aos": "fade-top", "data-aos-duration": "1000" },
                React.createElement("div", { className: "gdlr-core-page-builder-body" },
                    React.createElement("div", { className: "gdlr-core-pbf-wrapper ", style: { padding: "80px 0px 15px 0px" } },
                        React.createElement("div", { className: "gdlr-core-pbf-background-wrap" }),
                        React.createElement("div", { className: "gdlr-core-pbf-wrapper-content gdlr-core-js " },
                            React.createElement("div", { className: "gdlr-core-pbf-wrapper-container clearfix gdlr-core-container" },
                                React.createElement("div", { className: "gdlr-core-pbf-element" },
                                    React.createElement("div", { className: "tourmaster-room-item clearfix  tourmaster-room-item-style-grid2" },
                                        React.createElement("div", { className: "tourmaster-room-item-holder gdlr-core-js-2 clearfix", "data-layout": "fitrows" },
                                            React.createElement("div", { className: "gdlr-core-pbf-element" },
                                                React.createElement("div", { className: "gdlr-core-blog-item gdlr-core-item-pdb clearfix  gdlr-core-style-blog-image", style: { paddingBottom: "0px" } },
                                                    React.createElement("div", { className: "gdlr-core-blog-item-holder gdlr-core-js-2 clearfix", "data-layout": "fitrows" }, this.state.init.data.map(function (value, index) {
                                                        return (React.createElement("div", { key: index, className: "gdlr-core-item-list  gdlr-core-item-pdlr gdlr-core-item-mgb gdlr-core-column-20" },
                                                            React.createElement("div", { className: "gdlr-core-blog-modern  gdlr-core-with-image gdlr-core-hover-overlay-content gdlr-core-opacity-on-hover gdlr-core-zoom-on-hover gdlr-core-style-1 gdlr-core-outer-frame-element" },
                                                                React.createElement("div", { className: "gdlr-core-blog-modern-inner" },
                                                                    React.createElement("div", { className: "gdlr-core-blog-thumbnail gdlr-core-media-image" },
                                                                        React.createElement("img", { style: { width: "400px", height: "400px" }, src: require("../" + value.blogPicture), alt: "", title: "BlogImage" })),
                                                                    React.createElement("div", { className: "gdlr-core-blog-modern-content  gdlr-core-center-align", style: { paddingBottom: "40px" } },
                                                                        React.createElement("h3", { className: "gdlr-core-blog-title gdlr-core-skin-title", style: {
                                                                                fontSize: "25px",
                                                                                fontWeight: 700,
                                                                                letterSpacing: "0px",
                                                                            } },
                                                                            React.createElement(react_router_dom_1.Link, { to: "/blogs/details/" + value.id }, value.headText)),
                                                                        React.createElement("div", { className: "gdlr-core-blog-info-wrapper gdlr-core-skin-divider" },
                                                                            React.createElement("span", { className: "gdlr-core-blog-info gdlr-core-blog-info-font gdlr-core-skin-caption gdlr-core-blog-info-date" },
                                                                                React.createElement("span", { className: "gdlr-core-blog-info-sep" }, "\u2022"),
                                                                                React.createElement("span", { className: "gdlr-core-head" },
                                                                                    React.createElement("i", { className: "gdlr-icon-clock" })),
                                                                                React.createElement("a", { href: "../2021/12/17/index.html" }, value.createdDate))))))));
                                                    }))))))),
                                React.createElement(Pagination_1.default, { pageCount: this.state.init.page, currentPage: 0 }))))))));
    };
    return Blogs;
}(React.Component));
exports.default = (0, react_i18next_1.withTranslation)()(Blogs);
//# sourceMappingURL=Blogs.js.map