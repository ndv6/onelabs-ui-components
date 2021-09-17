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
import Text from '../Text';
import styles from './InputSlider.module.css';
function InputSlider(props) {
    var label = props.label, value = props.value, min = props.min, max = props.max, prefix = props.prefix, suffix = props.suffix, withText = props.withText, rest = __rest(props, ["label", "value", "min", "max", "prefix", "suffix", "withText"]);
    var rangeStyle = {
        backgroundSize: ((value - min) * 100) / (max - min) + '% 100%',
    };
    return (React.createElement("div", { "data-testid": "date-picker" },
        React.createElement(Text, { bold: true }, label),
        withText ||
            (withText === undefined && (React.createElement(Text, null,
                prefix,
                value,
                suffix))),
        React.createElement("div", { className: styles.slidercontainer },
            React.createElement("input", __assign({ type: "range", style: rangeStyle }, rest)))));
}
export default InputSlider;
//# sourceMappingURL=index.js.map