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
import { ReactComponent as EyeSvg } from './eye.svg';
import styles from './Input.module.css';
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