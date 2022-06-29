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
var Posts = /** @class */ (function (_super) {
    __extends(Posts, _super);
    function Posts() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Posts.prototype.componentDidMount = function () {
        console.log(this.props.data);
    };
    Posts.prototype.render = function () {
        return (React.createElement(react_1.Swiper, { spaceBetween: 0, slidesPerView: 4 }, this.props.data.map(function (value, index) {
            return (React.createElement(react_1.SwiperSlide, { key: index },
                React.createElement("li", { style: {
                        width: "310px",
                        marginRight: "0px",
                        float: "left",
                        display: "block",
                    }, className: "flex-with-active-class flex-active-slide" },
                    React.createElement("div", { className: "gdlr-core-gallery-list gdlr-core-media-image" },
                        React.createElement("a", { className: "gdlr-core-lightgallery gdlr-core-js ", href: require('../' + value.src), "data-lightbox-group": "gdlr-core-img-group-1", "data-lg-id": "7e7ad524-83eb-402e-85a6-c3d5ed1c4154" },
                            React.createElement("img", { src: require('../' + value.src), alt: "", width: 600, height: 600, title: "shutterstock_1298236804", draggable: "false" }))))));
        })));
    };
    return Posts;
}(React.Component));
exports.default = Posts;
//# sourceMappingURL=Posts.js.map