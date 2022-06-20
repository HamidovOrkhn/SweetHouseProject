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
var bg_roomm_jpg_1 = require("../images/bg-roomm.jpg");
var play_png_1 = require("../images/play.png");
var HomeVideo = /** @class */ (function (_super) {
    __extends(HomeVideo, _super);
    function HomeVideo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HomeVideo.prototype.render = function () {
        return (React.createElement(React.Fragment, null,
            React.createElement("div", { className: "gdlr-core-pbf-wrapper ", style: {
                    margin: "-50px 0px 0px 0px",
                    padding: "258px 0px 258px 0px",
                    borderRadius: "0px 60px 0px 60px",
                    MozBorderRadius: "0px 60px 0px 60px",
                    WebkitBorderRadius: "0px 60px 0px 60px",
                }, id: "gdlr-core-wrapper-5" },
                React.createElement("div", { className: "gdlr-core-pbf-background-wrap", style: {
                        borderRadius: "0px 60px 0px 60px",
                        MozBorderRadius: "0px 60px 0px 60px",
                        WebkitBorderRadius: "0px 60px 0px 60px",
                    } },
                    React.createElement("div", { className: "gdlr-core-pbf-background gdlr-core-parallax gdlr-core-js", style: {
                            backgroundImage: "url(".concat(bg_roomm_jpg_1.default, ")"),
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }, "data-parallax-speed": 0 })),
                React.createElement("div", { className: "gdlr-core-pbf-wrapper-content gdlr-core-js " },
                    React.createElement("div", { className: "gdlr-core-pbf-wrapper-container clearfix gdlr-core-container" },
                        React.createElement("div", { className: "gdlr-core-pbf-column gdlr-core-column-60 gdlr-core-column-first" },
                            React.createElement("div", { className: "gdlr-core-pbf-column-content-margin gdlr-core-js " },
                                React.createElement("div", { className: "gdlr-core-pbf-column-content clearfix gdlr-core-js " },
                                    React.createElement("div", { className: "gdlr-core-pbf-element" },
                                        React.createElement("div", { className: "gdlr-core-image-item gdlr-core-item-pdb  gdlr-core-center-align gdlr-core-item-pdlr" },
                                            React.createElement("div", { className: "gdlr-core-image-item-wrap gdlr-core-media-image  gdlr-core-image-item-style-rectangle", style: { borderWidth: "0px", maxWidth: "90px" } },
                                                React.createElement("a", { className: "gdlr-core-lightgallery gdlr-core-js ", href: "https://www.youtube.com/watch?v=US7bGTUkBfg", "data-lg-id": "74507c6a-e061-4912-8737-8ecb4a110479" },
                                                    React.createElement("img", { src: play_png_1.default, alt: "", width: 180, height: 180, title: "play" }))))))))))),
            ";"));
    };
    return HomeVideo;
}(React.Component));
exports.default = (0, react_redux_1.connect)()(HomeVideo);
//# sourceMappingURL=HomeVideo.js.map