import React from 'react';
import styles from './Checkbox.module.css';
var CheckedIcon = function () { return (React.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24" },
    React.createElement("defs", null,
        React.createElement("linearGradient", { id: "a", x1: "13.368%", x2: "87.636%", y1: "16.036%", y2: "81.312%" },
            React.createElement("stop", { offset: "0%", stopColor: "#6BAA12" }),
            React.createElement("stop", { offset: "100%", stopColor: "#009E9B" }))),
    React.createElement("g", { fill: "none", fillRule: "evenodd" },
        React.createElement("path", { fill: "url(#a)", d: "M11 0C4.923 0 0 4.923 0 11s4.923 11 11 11 11-4.923 11-11S17.077 0 11 0z", transform: "translate(1 1)" }),
        React.createElement("path", { fill: "#FFF", d: "M16.364 7.61l-6.284 6.22-2.044-2.02a.38.38 0 0 0-.535 0l-.89.883a.373.373 0 0 0 0 .53l3.202 3.17a.38.38 0 0 0 .534 0l7.442-7.369a.373.373 0 0 0 0-.53l-.89-.884a.38.38 0 0 0-.535 0z" })))); };
var DisabledCheckedIcon = function () { return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24" },
    React.createElement("g", { fill: "none", fillRule: "evenodd" },
        React.createElement("path", { fill: "#C7C7C7", d: "M11 0C4.923 0 0 4.923 0 11s4.923 11 11 11 11-4.923 11-11S17.077 0 11 0z", transform: "translate(1 1)" }),
        React.createElement("path", { fill: "#FFF", d: "M15.364 6.61L9.08 12.83l-2.044-2.02c-.148-.147-.387-.147-.535 0l-.89.883c-.148.147-.148.384 0 .53l3.202 3.17c.147.147.386.147.534 0l7.442-7.369c.148-.146.148-.384 0-.53l-.89-.884c-.148-.147-.387-.147-.535 0z", transform: "translate(1 1)" })))); };
var UnCheckedIcon = function () { return (React.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24" },
    React.createElement("g", { fill: "none", fillRule: "evenodd" },
        React.createElement("path", { fill: "#C7C7C7", d: "M12 1c6.077 0 11 4.923 11 11s-4.923 11-11 11S1 18.077 1 12 5.923 1 12 1zm0 1C6.476 2 2 6.476 2 12s4.476 10 10 10 10-4.476 10-10S17.524 2 12 2z" }),
        React.createElement("path", { fill: "#ECECEC", d: "M12 2C6.476 2 2 6.476 2 12s4.476 10 10 10 10-4.476 10-10S17.524 2 12 2z" })))); };
function Checkbox(props) {
    var children = props.children, disabled = props.disabled, size = props.size, checked = props.checked, onChange = props.onChange;
    var _a = React.useState(false), htmlChecked = _a[0], setHtmlChecked = _a[1];
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
    var iconChecked = React.createElement(CheckedIcon, null);
    var iconUnChecked = React.createElement(UnCheckedIcon, null);
    if (disabled) {
        iconChecked = React.createElement(DisabledCheckedIcon, null);
    }
    return (React.createElement("div", { className: [
            styles.checkbox,
            disabled ? styles.disabled : '',
            size === 'small' ? styles.small : '',
        ].join(' ') },
        React.createElement("input", { className: styles.input, checked: htmlChecked, onChange: onChangeInput, type: "checkbox" }),
        React.createElement("div", null, htmlChecked ? iconChecked : iconUnChecked),
        React.createElement("span", { className: styles.label }, children)));
}
export default Checkbox;
//# sourceMappingURL=index.js.map