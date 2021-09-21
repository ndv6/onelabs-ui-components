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
function InputSlider(props) {
    var rangeStyle = {
        backgroundSize: ((props.value - props.min) * 100) / (props.max - props.min) + '% 100%',
    };
    return (React.createElement("div", { "data-testid": "date-picker" },
        React.createElement(Text, { bold: true }, props.label),
        (props.withText || props.withText === undefined) && (React.createElement(Text, { style: { paddingTop: 8, paddingBottom: 7 } },
            props.prefix,
            props.value,
            props.suffix)),
        React.createElement("div", { className: styles.slidercontainer },
            React.createElement("input", __assign({ type: "range" }, props, { style: rangeStyle })))));
}
export default InputSlider;
//# sourceMappingURL=index.js.map