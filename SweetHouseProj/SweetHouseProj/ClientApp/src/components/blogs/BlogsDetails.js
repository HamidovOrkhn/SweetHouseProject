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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_redux_1 = require("react-redux");
var BlogsDetails = /** @class */ (function (_super) {
    __extends(BlogsDetails, _super);
    function BlogsDetails(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            data: {
                id: 0,
                blogPicture: "",
                bodyText: "",
                createdDate: "",
                updatedDate: "",
                headText: ""
            }
        };
        return _this;
    }
    BlogsDetails.prototype.componentDidMount = function () {
        return __awaiter(this, void 0, void 0, function () {
            var slug;
            var _this = this;
            return __generator(this, function (_a) {
                slug = this.props.match.params.slug;
                fetch('/api/blog/details/' + slug).then(function (response) {
                    return response.json();
                }).then(function (data) {
                    _this.setState({ data: data });
                    console.log(_this.state);
                });
                return [2 /*return*/];
            });
        });
    };
    BlogsDetails.prototype.render = function () {
        return (React.createElement(React.Fragment, null,
            React.createElement("div", { className: "hotale-page-title-wrap  hotale-style-custom hotale-center-align", "data-aos": "fade-bottom", "data-aos-duration": "1000" },
                React.createElement("div", { className: "hotale-header-transparent-substitute", style: { height: "149.3px" } }),
                React.createElement("div", { className: "hotale-page-title-overlay" }),
                React.createElement("div", { className: "hotale-page-title-container hotale-container" },
                    React.createElement("div", { className: "hotale-page-title-content hotale-item-pdlr" },
                        React.createElement("h1", { className: "hotale-page-title" }, "Blog Haqq\u0131nda")))),
            " ",
            React.createElement("div", { className: "hotale-page-wrapper", id: "hotale-page-wrapper", "data-aos": "fade-bottom", "data-aos-duration": "1000" },
                React.createElement("div", { className: "gdlr-core-page-builder-body" },
                    React.createElement("div", { className: "gdlr-core-pbf-sidebar-wrapper  gdlr-core-sticky-sidebar gdlr-core-js ", id: "gdlr-core-sidebar-wrapper-1" },
                        React.createElement("div", { className: "gdlr-core-pbf-sidebar-container gdlr-core-line-height-0 clearfix gdlr-core-js gdlr-core-container" },
                            React.createElement("div", { className: "gdlr-core-pbf-sidebar-content gdlr-core-pbf-sidebar-padding gdlr-core-line-height", style: { padding: "60px 0px 0px 0px" } },
                                React.createElement("div", { className: "gdlr-core-pbf-sidebar-content-inner" },
                                    React.createElement("div", { className: "gdlr-core-pbf-column gdlr-core-column-60 gdlr-core-column-first" },
                                        React.createElement("div", { className: "gdlr-core-pbf-column-content-margin gdlr-core-js " },
                                            React.createElement("div", { className: "gdlr-core-pbf-column-content clearfix gdlr-core-js " },
                                                React.createElement("div", { className: "gdlr-core-pbf-element" },
                                                    React.createElement("div", { className: "gdlr-core-image-item gdlr-core-item-pdb  gdlr-core-center-align gdlr-core-item-pdlr" },
                                                        React.createElement("div", { className: "gdlr-core-image-item-wrap gdlr-core-media-image  gdlr-core-image-item-style-round", style: {
                                                                borderWidth: "0px",
                                                                borderRadius: "20px",
                                                                MozBorderRadius: "20px",
                                                                WebkitBorderRadius: "20px",
                                                            } },
                                                            React.createElement("img", { src: this.state.data.blogPicture ? require('../' + this.state.data.blogPicture) : "", alt: "", width: 1150, height: 490, title: "Blog" }))))))),
                                    React.createElement("div", { className: "gdlr-core-pbf-column gdlr-core-column-60 gdlr-core-column-first", id: "gdlr-core-column-1" },
                                        React.createElement("div", { className: "gdlr-core-pbf-column-content-margin gdlr-core-js ", style: {
                                                margin: "0px 0px 0px 0px",
                                                padding: "10px 0px 20px 0px",
                                            } },
                                            React.createElement("div", { className: "gdlr-core-pbf-background-wrap" }),
                                            React.createElement("div", { className: "gdlr-core-pbf-column-content clearfix gdlr-core-js " },
                                                React.createElement("div", { className: "gdlr-core-pbf-element" },
                                                    React.createElement("div", { className: "tourmaster-room-title-item tourmaster-item-mglr tourmaster-item-pdb clearfix", style: { paddingBottom: "35px" } },
                                                        React.createElement("h3", { className: "tourmaster-room-title-item-title" }, this.state.data.headText),
                                                        React.createElement("div", { className: "gdlr-core-blog-info-wrapper gdlr-core-skin-divider" },
                                                            React.createElement("span", { className: "gdlr-core-blog-info gdlr-core-blog-info-font gdlr-core-skin-caption gdlr-core-blog-info-date", style: { fontSize: "14px" } },
                                                                "Tarix :",
                                                                React.createElement("span", { className: "gdlr-core-head", style: { marginLeft: "10px" } },
                                                                    React.createElement("i", { className: "gdlr-icon-clock" })),
                                                                React.createElement("a", null, this.state.data.createdDate))))),
                                                React.createElement("div", { className: "gdlr-core-pbf-element" },
                                                    React.createElement("div", { className: "gdlr-core-divider-item gdlr-core-divider-item-normal gdlr-core-item-pdlr gdlr-core-center-align" },
                                                        React.createElement("div", { className: "gdlr-core-divider-line gdlr-core-skin-divider" })))))),
                                    React.createElement("div", { className: "gdlr-core-pbf-column gdlr-core-column-20" },
                                        React.createElement("div", { className: "gdlr-core-pbf-column-content-margin gdlr-core-js " },
                                            React.createElement("div", { className: "gdlr-core-pbf-column-content clearfix gdlr-core-js " }))),
                                    React.createElement("div", { className: "gdlr-core-pbf-column gdlr-core-column-60 gdlr-core-column-first", id: "gdlr-core-column-6" },
                                        React.createElement("div", { className: "gdlr-core-pbf-column-content-margin gdlr-core-js ", style: { padding: "10px 0px 0px 0px" } },
                                            React.createElement("div", { className: "gdlr-core-pbf-background-wrap" }),
                                            React.createElement("div", { className: "gdlr-core-pbf-column-content clearfix gdlr-core-js " },
                                                React.createElement("div", { className: "gdlr-core-pbf-element" },
                                                    React.createElement("div", { className: "gdlr-core-text-box-item gdlr-core-item-pdlr gdlr-core-item-pdb gdlr-core-left-align" },
                                                        React.createElement("div", { className: "gdlr-core-text-box-item-content", style: { fontSize: "18px", textTransform: "none" } },
                                                            React.createElement("p", null, this.state.data.bodyText))))))),
                                    React.createElement("div", { className: "gdlr-core-pbf-column gdlr-core-column-60 gdlr-core-column-first", id: "gdlr-core-column-7" },
                                        React.createElement("div", { className: "gdlr-core-pbf-column-content-margin gdlr-core-js ", style: {
                                                margin: "0px 0px 0px 0px",
                                                padding: "0px 0px 25px 0px",
                                            } },
                                            React.createElement("div", { className: "gdlr-core-pbf-background-wrap" }),
                                            React.createElement("div", { className: "gdlr-core-pbf-column-content clearfix gdlr-core-js " },
                                                React.createElement("div", { className: "gdlr-core-pbf-element" },
                                                    React.createElement("div", { className: "gdlr-core-divider-item gdlr-core-divider-item-normal gdlr-core-item-pdlr gdlr-core-center-align" },
                                                        React.createElement("div", { className: "gdlr-core-divider-line gdlr-core-skin-divider" }))))))))))))));
    };
    return BlogsDetails;
}(React.Component));
exports.default = (0, react_redux_1.connect)()(BlogsDetails);
//# sourceMappingURL=BlogsDetails.js.map