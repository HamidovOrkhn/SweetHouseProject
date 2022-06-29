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
var Pagination = /** @class */ (function (_super) {
    __extends(Pagination, _super);
    function Pagination() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Pagination.prototype.GetPages = function (pages, currentPage) {
        console.log(this.props);
        var content = [];
        for (var i = 0; i < pages; i++) {
            content.push(React.createElement("li", { className: i === currentPage ? "page-item active" : "page-item" },
                React.createElement("a", { className: "page-link", href: "#" }, i + 1)));
        }
        return content;
    };
    Pagination.prototype.render = function () {
        return (React.createElement("div", { className: "pagination-holder" },
            React.createElement("nav", { "aria-label": "Page navigation example" },
                React.createElement("ul", { className: "pagination" },
                    React.createElement("li", { className: "page-item" },
                        React.createElement("a", { className: "page-link", href: "#", "aria-label": "Previous" },
                            React.createElement("span", { "aria-hidden": "true" }, "\u00AB"),
                            React.createElement("span", { className: "sr-only" }, "Previous"))),
                    this.GetPages(this.props.pageCount, this.props.currentPage),
                    React.createElement("li", { className: "page-item" },
                        React.createElement("a", { className: "page-link", href: "#", "aria-label": "Next" },
                            React.createElement("span", { "aria-hidden": "true" }, "\u00BB"),
                            React.createElement("span", { className: "sr-only" }, "Next")))))));
    };
    return Pagination;
}(React.Component));
exports.default = Pagination;
//# sourceMappingURL=Pagination.js.map