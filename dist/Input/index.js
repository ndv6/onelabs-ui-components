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
import React, { useCallback } from 'react';
import Button from '../Button';
import { createClassName, metaError } from '../helpers';
import styles from './Input.module.css';
var EyeSvg = function () { return (React.createElement("svg", { width: 26, height: 25, viewBox: "0 0 26 25" },
    React.createElement("path", { fill: "#000000", fillRule: "nonzero", d: "M13 13.917c1.227 0 2.222-.97 2.222-2.167 0-1.197-.995-2.167-2.222-2.167-.035 0-.065.008-.099.01a1.58 1.58 0 0 1-.384 1.686 1.68 1.68 0 0 1-1.73.375c0 .033-.01.063-.01.096 0 1.197.996 2.167 2.223 2.167zm9.88-1.578C20.995 8.757 17.267 6.333 13 6.333c-4.268 0-7.997 2.426-9.88 6.006a1.07 1.07 0 0 0 0 .989c1.884 3.582 5.612 6.005 9.88 6.005 4.268 0 7.997-2.425 9.88-6.006a1.07 1.07 0 0 0 0-.988zM13 7.417c2.455 0 4.444 1.94 4.444 4.333 0 2.393-1.99 4.333-4.444 4.333-2.455 0-4.444-1.94-4.444-4.333.002-2.392 1.99-4.33 4.444-4.333zm0 10.833c-3.728 0-7.134-2.076-8.889-5.417a10.113 10.113 0 0 1 4.506-4.378c-.724.915-1.173 2.048-1.173 3.295 0 2.992 2.488 5.417 5.556 5.417s5.556-2.425 5.556-5.417c0-1.247-.449-2.38-1.173-3.295 1.94.956 3.519 2.49 4.506 4.378-1.755 3.341-5.161 5.417-8.889 5.417z" }))); };
var CheckSvg = function () { return (React.createElement("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
    React.createElement("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M17.6641 6.60983L9.37985 14.83L6.33592 11.8096C6.18834 11.6631 5.94905 11.6631 5.80144 11.8096L4.91067 12.6935C4.76309 12.8399 4.76309 13.0773 4.91067 13.2238L9.1126 17.3932C9.26018 17.5396 9.49946 17.5396 9.64708 17.3932L19.0893 8.02405C19.2369 7.87761 19.2369 7.64017 19.0893 7.4937L18.1985 6.60983C18.051 6.46339 17.8117 6.46339 17.6641 6.60983Z", fill: "#4ED07D" }))); };
var classNames = createClassName(styles);
function Input(props) {
    var _a, _b;
    var children = props.children, label = props.label, className = props.className, loading = props.loading, error = props.error, type = props.type, icon = props.icon, required = props.required, innerRef = props.innerRef, maxLength = props.maxLength, onFocus = props.onFocus, onBlur = props.onBlur, valid = props.valid, verified = props.verified, rest = __rest(props, ["children", "label", "className", "loading", "error", "type", "icon", "required", "innerRef", "maxLength", "onFocus", "onBlur", "valid", "verified"]);
    var _c = React.useState(false), isFocus = _c[0], setIsFocus = _c[1];
    var _d = React.useState(''), htmlType = _d[0], setHtmlType = _d[1];
    var classnames = classNames((_a = {},
        _a["" + className] = !!className,
        _a.error = !!metaError(error),
        _a.disabled = props.disabled,
        _a.success = valid || verified,
        _a));
    var wrapperClassnames = classNames((_b = {},
        _b["" + styles.wrapper] = true,
        _b["" + styles.wrapperFocus] = isFocus,
        _b));
    var handleKeyPressNumber = useCallback(function (e) {
        if (isNaN(e.key))
            e.preventDefault();
        if (maxLength) {
            if (e.target.value.length >= maxLength) {
                e.preventDefault();
                return;
            }
        }
    }, [maxLength]);
    var generateExtraProps = function (type) {
        switch (type) {
            case 'alphabet':
                // return {onKeyDown: (event: any) => ((event.keyCode > 64 && event.keyCode < 91) || (event.keyCode > 96 && event.keyCode < 123) || event.keyCode == 8 || event.keyCode == 32 || event.keyCode == 37 || event.keyCode == 39 || event.keyCode == 16 || event.keyCode == 20) ? false : event.preventDefault()}
                return {
                    onKeyPress: function (event) {
                        switch (event.keyCode) {
                            case 8: // Backspace
                            case 9: // Tab
                            case 13: // Enter
                            case 32: // Space
                            case 37: // Left
                            case 38: // Up
                            case 39: // Right
                            case 40: // Down
                                break;
                            default:
                                if (!/^[a-zA-Z\s]*$/.test(event.key)) {
                                    event.preventDefault();
                                }
                                break;
                        }
                    },
                };
            case 'number':
                return {
                    onKeyPress: handleKeyPressNumber,
                    onKeyDown: function (event) {
                        return event.keyCode === 69 || event.keyCode === 190 ? event.preventDefault() : false;
                    },
                };
            default:
                return {};
        }
    };
    var focusHandler = function (event) {
        setIsFocus(true);
        onFocus && onFocus(event);
    };
    var blueHandler = function (event) {
        setIsFocus(false);
        onBlur && onBlur(event);
    };
    return (React.createElement("div", { className: classnames },
        label && (React.createElement("label", { className: styles.label },
            label,
            required && React.createElement("span", { className: styles.required }, "*"))),
        React.createElement("div", { className: wrapperClassnames },
            React.createElement("input", __assign({ className: "ga-input", ref: innerRef, type: htmlType || type, maxLength: maxLength, onFocus: focusHandler, onBlur: blueHandler }, rest, generateExtraProps(type))),
            verified && (React.createElement("span", { className: styles.verifiedIcon },
                React.createElement(CheckSvg, null))),
            loading && React.createElement("div", { className: styles.loading }),
            icon,
            type === 'password' && (React.createElement(Button, { onClick: function () { return setHtmlType(function (prev) { return (prev === 'text' ? 'password' : 'text'); }); } },
                React.createElement(EyeSvg, null)))),
        !!metaError(error) && React.createElement("div", { className: styles.errorLabel }, metaError(error))));
}
export default Input;
//# sourceMappingURL=index.js.map