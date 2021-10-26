import Flex from '../Flex';
import React, { useState } from 'react';
import styles from './CardExpand.module.css';
import { createClassName } from '../helpers';
var SvgChevronUp = function () { return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24" },
    React.createElement("g", { fill: "none", "fill-rule": "evenodd" },
        React.createElement("g", { fill: "#EB2629" },
            React.createElement("g", null,
                React.createElement("g", null,
                    React.createElement("path", { d: "M19.921 6.771c.434-.447 1.147-.458 1.594-.024.406.394.452 1.02.131 1.466l-.107.128-8.73 9.013c-.406.419-1.055.453-1.502.104l-.116-.104-8.73-9.013c-.434-.447-.422-1.16.024-1.594.406-.394 1.033-.421 1.469-.087l.125.111L12 14.951l7.921-8.18z", transform: "translate(-319 -567) translate(0 543) translate(319 24) rotate(180 12 12.062)" }))))))); };
var classNames = createClassName(styles);
function CardExpand(_a) {
    var _b;
    var active = _a.active, _c = _a.closeIcon, closeIcon = _c === void 0 ? true : _c, onClose = _a.onClose, expand = _a.expand, _d = _a.variant, variant = _d === void 0 ? 'default' : _d, children = _a.children;
    var _e = useState(expand || expand === undefined ? false : true), isExpand = _e[0], setIsExpand = _e[1];
    var classnames = classNames((_b = {},
        _b[styles.mainCard] = true,
        _b.active = active,
        _b["" + variant] = variant,
        _b));
    return (React.createElement("div", { "data-testid": "wrapper-cardExpand", className: classnames },
        React.createElement("div", { "data-testid": "card", className: isExpand ? styles.cardExpanded : styles.card },
            React.createElement("div", null, !closeIcon && closeIcon !== undefined ? (React.createElement("div", { className: "textCollapse" }, children.title)) : (React.createElement(Flex, { justifyContent: "space-between", alignItems: "flex-start" },
                React.createElement("div", { className: "textCollapse" }, children.title),
                React.createElement("div", { className: typeof closeIcon !== 'boolean' ? styles.closeIcon : styles.chevron, onClick: expand || expand === undefined ? function () { return setIsExpand(!isExpand); } : onClose }, typeof closeIcon === 'boolean' || closeIcon === undefined ? (React.createElement(SvgChevronUp, null)) : (closeIcon))))),
            children.content && React.createElement("div", { className: styles.textContent }, children.content)),
        children.action && (React.createElement("div", { className: styles.action, style: { marginTop: 24 } }, children.action))));
}
export default CardExpand;
//# sourceMappingURL=index.js.map