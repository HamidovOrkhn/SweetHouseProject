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
var react_router_dom_1 = require("react-router-dom");
var i18n_1 = require("../../i18n");
var react_1 = require("react");
var react_i18next_1 = require("react-i18next");
var LangComponent = function () {
    (0, react_1.useEffect)(function () {
        var _a;
        changeLanguage((_a = localStorage.getItem("langId")) !== null && _a !== void 0 ? _a : "az");
    });
    var changeLanguage = function (lng) {
        localStorage.setItem("langId", lng);
        i18n_1.default.changeLanguage(lng);
    };
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "tourmaster-currency-switcher" },
            React.createElement("span", { className: "tourmaster-head" },
                React.createElement("span", null, "Dil"),
                React.createElement("i", { className: "fa fa-sort-down" })),
            React.createElement("div", { className: "tourmaster-currency-switcher-inner", style: { display: "none" } },
                React.createElement("div", { className: "tourmaster-currency-switcher-content" },
                    React.createElement("ul", null,
                        React.createElement("li", null,
                            React.createElement("a", { onClick: function () { return changeLanguage("az"); } }, "AZ")),
                        React.createElement("li", null,
                            React.createElement("a", { onClick: function () { return changeLanguage("en"); } }, "EN")),
                        React.createElement("li", null,
                            React.createElement("a", { onClick: function () { return changeLanguage("ru"); } }, "RU"))))))));
};
var Header = /** @class */ (function (_super) {
    __extends(Header, _super);
    function Header() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Header.prototype.render = function () {
        return (React.createElement(React.Fragment, null,
            React.createElement("div", { className: "hotale-header-background-transparent" },
                React.createElement("div", { className: "hotale-top-bar " },
                    React.createElement("div", { className: "hotale-top-bar-background" }),
                    React.createElement("div", { className: "hotale-top-bar-container hotale-container " },
                        React.createElement("div", { className: "hotale-top-bar-container-inner clearfix" },
                            React.createElement("div", { className: "hotale-top-bar-left hotale-item-pdlr" },
                                React.createElement("div", { className: "hotale-top-bar-left-text" },
                                    React.createElement("i", { className: "icon-phone", style: { fontSize: '15px', color: '#ffffff', marginRight: '10px' } }),
                                    "1-634-567-34",
                                    React.createElement("i", { className: "icon-envelope", style: { fontSize: '15px', color: '#ffffff', marginLeft: '25px', marginRight: '10px' } }),
                                    "Book@Hotale.co"))))),
                React.createElement("header", { className: "hotale-header-wrap hotale-header-style-plain hotale-style-center-menu hotale-sticky-navigation hotale-style-slide", "data-navigation-offset": 75, style: { display: 'block' } },
                    React.createElement("div", { className: "hotale-header-background" }),
                    React.createElement("div", { className: "hotale-header-container  hotale-container" },
                        React.createElement("div", { className: "hotale-header-container-inner clearfix" },
                            React.createElement("div", { className: "hotale-logo  hotale-item-pdlr" },
                                React.createElement("div", { className: "hotale-logo-inner" },
                                    React.createElement("a", { className: "hotale-fixed-nav-logo", href: "index.html" },
                                        React.createElement("img", { src: "../../../a6e8z9v6.stackpathcdn.com/hotale/resort/wp-content/uploads/sites/2/2022/05/logo-nx1.png", alt: "", width: 147, height: 37, title: "logo-nx1", srcSet: "https://a6e8z9v6.stackpathcdn.com/hotale/resort/wp-content/uploads/sites/2/2022/05/logo-nx1.png 1x, https://a6e8z9v6.stackpathcdn.com/hotale/resort/wp-content/uploads/sites/2/2022/05/logo-nx2-1.png 2x" })),
                                    React.createElement("a", { className: " hotale-orig-logo", href: "index.html" },
                                        React.createElement("img", { src: "../../../a6e8z9v6.stackpathcdn.com/hotale/resort/wp-content/uploads/sites/2/2022/05/logo-nx1.png", alt: "", width: 147, height: 37, title: "logo-nx1", srcSet: "https://a6e8z9v6.stackpathcdn.com/hotale/resort/wp-content/uploads/sites/2/2022/05/logo-nx1.png 1x, https://a6e8z9v6.stackpathcdn.com/hotale/resort/wp-content/uploads/sites/2/2022/05/logo-nx2-1.png 2x" })))),
                            "\t\t\t",
                            React.createElement("div", { className: "hotale-navigation hotale-item-pdlr clearfix " },
                                React.createElement("div", { className: "hotale-main-menu sf-js-enabled sf-arrows", id: "hotale-main-menu", style: { touchAction: 'pan-y' } },
                                    React.createElement("ul", { id: "menu-main-navigation-1", className: "sf-menu" },
                                        React.createElement("li", { className: "menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-14980 current_page_item current-menu-ancestor current-menu-parent current_page_parent current_page_ancestor menu-item-has-children menu-item-15531 hotale-normal-menu" },
                                            React.createElement(react_router_dom_1.Link, { className: "sf-with-ul-pre sf-with-ul", to: "/" }, this.props.t("navbar_home"))),
                                        React.createElement("li", { className: "menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-15533 hotale-normal-menu" },
                                            React.createElement(react_router_dom_1.Link, { className: "sf-with-ul-pre sf-with-ul", to: "/aboutus" }, this.props.t("navbar_aboutus"))),
                                        React.createElement("li", { className: "menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-15712 hotale-normal-menu" },
                                            React.createElement(react_router_dom_1.Link, { className: "sf-with-ul-pre sf-with-ul", to: "/rooms" }, this.props.t("navbar_rooms"))),
                                        React.createElement("li", { className: "menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-15617 hotale-normal-menu" },
                                            React.createElement(react_router_dom_1.Link, { className: "sf-with-ul-pre sf-with-ul", to: "/blogs" }, this.props.t("navbar_blogs"))),
                                        React.createElement("li", { className: "menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-15537 hotale-normal-menu" },
                                            React.createElement(react_router_dom_1.Link, { className: "sf-with-ul-pre sf-with-ul", to: "/contactus" }, this.props.t("navbar_contactus")))),
                                    React.createElement("div", { className: "hotale-navigation-slide-bar  hotale-navigation-slide-bar-style-2 hotale-left", "data-size-offset": 0, "data-width": "19px", id: "hotale-navigation-slide-bar", style: { width: '19px', left: '358.313px', display: 'block', overflow: 'hidden' } })),
                                React.createElement("div", { className: "hotale-main-menu-right-wrap clearfix  hotale-item-mglr hotale-navigation-top" },
                                    React.createElement(LangComponent, null),
                                    React.createElement("div", { className: "tourmaster-room-navigation-checkout-wrap " },
                                        React.createElement("a", { id: "tourmaster-room-navigation-checkout-button", className: "tourmaster-room-navigation-checkout-button", href: "room-search/indexae75.html?room_amount=1&room-search=", "data-checkout-label": "Check Out", "data-label": "Book Now" },
                                            this.props.t("navbar_booknow"),
                                            React.createElement("span", { className: "tourmaster-count" }, "0")),
                                        React.createElement("div", { className: "tourmaster-room-cart-item-wrap" },
                                            React.createElement("div", { className: "tourmaster-room-cart-items" },
                                                React.createElement("ul", null),
                                                React.createElement("a", { className: "tourmaster-checkout-button", href: "payment-summary/indexbaa2.html?pt=room&type=cart" }, "Check Out"))))))))))));
    };
    return Header;
}(React.Component));
exports.default = (0, react_i18next_1.withTranslation)()(Header);
//# sourceMappingURL=Header.js.map