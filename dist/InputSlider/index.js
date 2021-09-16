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
import React from 'react';
import Text from '../Text';
import styles from './InputSlider.module.css';
export default function InputSlider(props) {
    function thousands_separators(num) {
        var num_parts = ('' + num).split('.');
        num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.');
        return num_parts.join('.');
    }
    var rangeStyle = {
        backgroundSize: ((props.value - props.min) * 100) / (props.max - props.min) + '% 200%',
    };
    return (React.createElement("div", { "data-testid": "date-picker" },
        React.createElement(Text, { bold: true }, props.label),
        React.createElement(Text, null,
            props.prefix,
            thousands_separators(props.value),
            props.suffix),
        React.createElement("div", { className: styles.slidercontainer },
            React.createElement("input", __assign({ type: "range" }, props, { style: rangeStyle })))));
}
//# sourceMappingURL=index.js.map