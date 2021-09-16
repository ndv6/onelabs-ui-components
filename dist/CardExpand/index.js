import Flex from '../Flex';
import React, { useState } from 'react';
import styles from './CardExpand.module.css';
var SvgChevronUp = function () { return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24" },
    React.createElement("g", { fill: "none", "fill-rule": "evenodd" },
        React.createElement("g", { fill: "#EB2629" },
            React.createElement("g", null,
                React.createElement("g", null,
                    React.createElement("path", { d: "M19.921 6.771c.434-.447 1.147-.458 1.594-.024.406.394.452 1.02.131 1.466l-.107.128-8.73 9.013c-.406.419-1.055.453-1.502.104l-.116-.104-8.73-9.013c-.434-.447-.422-1.16.024-1.594.406-.394 1.033-.421 1.469-.087l.125.111L12 14.951l7.921-8.18z", transform: "translate(-319 -567) translate(0 543) translate(319 24) rotate(180 12 12.062)" }))))))); };
export default function CardExpand(props) {
    var _a = useState(props.expand || props.expand === undefined ? false : true), expand = _a[0], setExpand = _a[1];
    return (React.createElement("div", { "data-testid": "wrapper-cardExpand", className: props.active ? styles.mainCardActive : styles.mainCard },
        React.createElement("div", { "data-testid": "card", className: expand ? styles.cardExpanded : styles.card },
            React.createElement("div", null, !props.closeIcon && props.closeIcon !== undefined ? (React.createElement("div", { className: "textCollapse" }, props.children.title)) : (React.createElement(Flex, { justifyContent: "space-between", alignItems: "flex-start" },
                React.createElement("div", { className: "textCollapse" }, props.children.title),
                React.createElement("div", { className: styles.chevron, onClick: props.expand || props.expand === undefined
                        ? function () { return setExpand(!expand); }
                        : props.onClose },
                    React.createElement(SvgChevronUp, null))))),
            React.createElement("div", { className: styles.textContent }, props.children.content)),
        React.createElement("div", { className: styles.action, style: { marginTop: 24 } }, props.children.action)));
}
//# sourceMappingURL=index.js.map