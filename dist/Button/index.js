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
import { useHistory } from 'react-router-dom';
import { createClassName } from '../helpers';
import styles from './Button.module.css';
var classNames = createClassName(styles);
function Button(props) {
    var _a;
    var children = props.children, variant = props.variant, full = props.full, rounded = props.rounded, className = props.className, href = props.href, loading = props.loading, size = props.size, rest = __rest(props, ["children", "variant", "full", "rounded", "className", "href", "loading", "size"]);
    var history = useHistory();
    var classnames = classNames((_a = {},
        _a["" + className] = !!className,
        _a["" + variant] = variant,
        _a["" + size] = size,
        _a.fullWidth = full,
        _a.loading = loading,
        _a.rounded = rounded,
        _a));
    function onClick(e) {
        if (rest.onClick)
            rest.onClick(e);
        if (href)
            history.push(href);
        return;
    }
    return (React.createElement("button", __assign({ type: rest.type || 'button', onClick: onClick, className: classnames }, rest), children));
}
export default Button;
//# sourceMappingURL=index.js.map