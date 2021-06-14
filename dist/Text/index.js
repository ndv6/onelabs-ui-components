var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from 'react';
import styles from './Text.module.css';
function Text(props) {
    var children = props.children, size = props.size, color = props.color, className = props.className, style = props.style, bold = props.bold, rest = __rest(props, ["children", "size", "color", "className", "style", "bold"]);
    return (React.createElement("div", __assign({ style: __assign({ fontSize: size, color: color, fontWeight: bold ? 700 : undefined }, style) }, rest, { className: [styles.text, className].join(' ') }), children));
}
function Title(props) {
    return React.createElement(Text, __assign({}, props, { className: styles.title }));
}
Text.Title = Title;
export default Text;
//# sourceMappingURL=index.js.map