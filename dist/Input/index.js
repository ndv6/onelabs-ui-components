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
import Button from '../Button';
import { createClassName } from '../helpers';
import styles from './Input.module.css';
var EyeSvg = function () { return (React.createElement("svg", { width: "26", height: "25", viewBox: "0 0 26 25" },
    React.createElement("path", { fill: "#000000", "fill-rule": "nonzero", d: "M13 13.917c1.227 0 2.222-.97 2.222-2.167 0-1.197-.995-2.167-2.222-2.167-.035 0-.065.008-.099.01a1.58 1.58 0 0 1-.384 1.686 1.68 1.68 0 0 1-1.73.375c0 .033-.01.063-.01.096 0 1.197.996 2.167 2.223 2.167zm9.88-1.578C20.995 8.757 17.267 6.333 13 6.333c-4.268 0-7.997 2.426-9.88 6.006a1.07 1.07 0 0 0 0 .989c1.884 3.582 5.612 6.005 9.88 6.005 4.268 0 7.997-2.425 9.88-6.006a1.07 1.07 0 0 0 0-.988zM13 7.417c2.455 0 4.444 1.94 4.444 4.333 0 2.393-1.99 4.333-4.444 4.333-2.455 0-4.444-1.94-4.444-4.333.002-2.392 1.99-4.33 4.444-4.333zm0 10.833c-3.728 0-7.134-2.076-8.889-5.417a10.113 10.113 0 0 1 4.506-4.378c-.724.915-1.173 2.048-1.173 3.295 0 2.992 2.488 5.417 5.556 5.417s5.556-2.425 5.556-5.417c0-1.247-.449-2.38-1.173-3.295 1.94.956 3.519 2.49 4.506 4.378-1.755 3.341-5.161 5.417-8.889 5.417z" }))); };
var classNames = createClassName(styles);
function Input(props) {
    var _a;
    var children = props.children, label = props.label, className = props.className, loading = props.loading, error = props.error, type = props.type, icon = props.icon, required = props.required, rest = __rest(props, ["children", "label", "className", "loading", "error", "type", "icon", "required"]);
    var _b = React.useState(''), htmlType = _b[0], setHtmlType = _b[1];
    var classnames = classNames((_a = {},
        _a["" + className] = !!className,
        _a.error = error,
        _a.disabled = props.disabled,
        _a));
    return (React.createElement("div", { className: classnames },
        label && (React.createElement("label", { className: styles.label },
            label,
            required && React.createElement("span", { className: styles.required }, "*"))),
        React.createElement("div", { className: styles.wrapper },
            React.createElement("input", __assign({ type: htmlType || type }, rest)),
            loading && React.createElement("div", { className: styles.loading }),
            icon,
            type === 'password' && (React.createElement(Button, { onClick: function () { return setHtmlType(function (prev) { return (prev === 'text' ? 'password' : 'text'); }); } },
                React.createElement(EyeSvg, null)))),
        error && React.createElement("div", { className: styles.errorLabel }, error)));
}
export default Input;
//# sourceMappingURL=index.js.map