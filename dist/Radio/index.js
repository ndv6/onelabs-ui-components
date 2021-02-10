import React from 'react';
import styles from './RadioButton.module.css';
var RadioBorder = function (props) { return (React.createElement("svg", { width: props.size, height: props.size, viewBox: "0 0 24 24" },
    React.createElement("defs", null,
        React.createElement("filter", { id: "uv6znpzakb", width: "116.7%", height: "116.7%", x: "-8.3%", y: "-8.3%", filterUnits: "objectBoundingBox" },
            React.createElement("feGaussianBlur", { in: "SourceAlpha", result: "shadowBlurInner1", stdDeviation: "1.5" }),
            React.createElement("feOffset", { dy: "1", in: "shadowBlurInner1", result: "shadowOffsetInner1" }),
            React.createElement("feComposite", { in: "shadowOffsetInner1", in2: "SourceAlpha", k2: "-1", k3: "1", operator: "arithmetic", result: "shadowInnerInner1" }),
            React.createElement("feColorMatrix", { in: "shadowInnerInner1", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" })),
        React.createElement("circle", { id: "e8oleaybua", cx: "12", cy: "12", r: "12" })),
    React.createElement("g", { fill: "none", fillRule: "evenodd" },
        React.createElement("g", null,
            React.createElement("g", { transform: "translate(-32 -462) translate(32 462)" },
                React.createElement("use", { fill: "#FFF", href: "#e8oleaybua" }),
                React.createElement("use", { fill: "#000", filter: "url(#uv6znpzakb)", href: "#e8oleaybua" })))))); };
var RadioFiller = function (props) { return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: props.size, height: props.size, viewBox: "0 0 12 12" },
    React.createElement("defs", null,
        React.createElement("linearGradient", { id: "g39ug4eaea", x1: "13.368%", x2: "87.636%", y1: "16.036%", y2: "81.312%" },
            React.createElement("stop", { offset: "0%", stopColor: "#F14545" }),
            React.createElement("stop", { offset: "100%", stopColor: "#C41432" }))),
    React.createElement("g", { fill: "none", fillRule: "evenodd" },
        React.createElement("g", { fill: "url(#g39ug4eaea)", transform: "translate(-38 -468)" },
            React.createElement("g", { transform: "translate(32 462)" },
                React.createElement("circle", { cx: "12", cy: "12", r: "6" })))))); };
var RadioDisabled = function (props) { return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: props.size, height: props.size, viewBox: "0 0 12 12" },
    React.createElement("defs", null,
        React.createElement("linearGradient", { id: "9r13h1ct8a", x1: "0%", x2: "100%", y1: "50%", y2: "50%" },
            React.createElement("stop", { offset: "0%", stopColor: "#E7E7E7" }),
            React.createElement("stop", { offset: "100%", stopColor: "#BDBDBD" }))),
    React.createElement("g", { fill: "none", fillRule: "evenodd" },
        React.createElement("g", { fill: "url(#9r13h1ct8a)", transform: "translate(-38 -284)" },
            React.createElement("g", { transform: "translate(32 278)" },
                React.createElement("circle", { cx: "12", cy: "12", r: "6" })))))); };
function RadioButton(props) {
    var children = props.children, disabled = props.disabled, size = props.size, checked = props.checked, onChange = props.onChange;
    var _a = React.useState(false), htmlChecked = _a[0], setHtmlChecked = _a[1];
    var sizeNumbers = {
        'small': 18,
        'default': 21,
        'large': 24,
    };
    function onChangeInput() {
        if (onChange) {
            onChange(!checked);
            return;
        }
        setHtmlChecked(function (prev) { return !prev; });
    }
    React.useEffect(function () {
        setHtmlChecked(checked || false);
    }, [checked]);
    var chosenSize = sizeNumbers['default'];
    if (size) {
        chosenSize = sizeNumbers[size];
    }
    return (React.createElement("div", { className: [
            styles.checkbox,
            disabled ? styles.disabled : '',
        ].join(' ') },
        React.createElement("input", { className: styles.input + " ga-radio", checked: htmlChecked, onChange: onChangeInput, type: "checkbox" }),
        disabled ? (React.createElement("span", { className: styles.radioChecked, style: { width: chosenSize, height: chosenSize } },
            React.createElement(RadioBorder, { size: chosenSize }),
            React.createElement(RadioDisabled, { size: htmlChecked ? Math.round(chosenSize / 2) : 0 }))) :
            React.createElement("div", null, htmlChecked ? (React.createElement("span", { className: styles.radioChecked, style: { width: chosenSize, height: chosenSize } },
                React.createElement(RadioBorder, { size: chosenSize }),
                React.createElement(RadioFiller, { size: Math.round(chosenSize / 2) }))) : React.createElement(RadioBorder, { size: chosenSize })),
        React.createElement("span", { className: styles.label }, children)));
}
export default RadioButton;
//# sourceMappingURL=index.js.map