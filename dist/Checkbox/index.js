import React from 'react';
import styles from './Checkbox.module.css';
var CheckedIcon = function () { return (React.createElement("span", { className: styles.checked },
    React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24" },
        React.createElement("defs", null,
            React.createElement("linearGradient", { id: "5dv7zurypa", x1: "13.368%", x2: "87.636%", y1: "16.036%", y2: "81.312%" },
                React.createElement("stop", { offset: "0%", "stop-color": "#F14545" }),
                React.createElement("stop", { offset: "100%", "stop-color": "#C41432" }))),
        React.createElement("g", { fill: "none", "fill-rule": "evenodd" },
            React.createElement("g", { fill: "url(#5dv7zurypa)", transform: "translate(-16 -638)" },
                React.createElement("g", null,
                    React.createElement("g", { transform: "translate(0 622) translate(16 16)" },
                        React.createElement("rect", { width: "24", height: "24", rx: "4" })))))),
    React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "18", height: "18", viewBox: "0 0 18 18" },
        React.createElement("g", { fill: "none", "fill-rule": "evenodd" },
            React.createElement("g", { fill: "#FFF" },
                React.createElement("g", null,
                    React.createElement("g", null,
                        React.createElement("g", null,
                            React.createElement("path", { d: "M15.75 3.494c.36-.366.954-.374 1.324-.017.337.325.374.839.106 1.205l-.09.105-9.592 9.72c-.339.343-.88.37-1.251.08l-.096-.087L1.224 9.41c-.358-.37-.344-.956.03-1.31.34-.32.86-.339 1.221-.062l.103.092 4.256 4.396 8.915-9.033z", transform: "translate(-19 -641) translate(0 622) translate(16 16) translate(3 3)" }))))))))); };
var CheckedDisabled = function () { return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24" },
    React.createElement("g", { fill: "none", "fill-rule": "evenodd" },
        React.createElement("g", { fill: "#EB2629" },
            React.createElement("g", null,
                React.createElement("path", { d: "M21 4.658c.481-.488 1.272-.498 1.766-.022.449.433.498 1.119.141 1.606l-.12.14-12.79 12.96c-.452.458-1.174.493-1.668.107l-.128-.116-6.569-6.785c-.477-.493-.46-1.274.04-1.745.453-.429 1.147-.454 1.628-.084l.138.122 5.674 5.861L21 4.658z", transform: "translate(-32 -278) translate(32 278)" })))))); };
var UnCheckedIcon = function () { return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24" },
    React.createElement("defs", null,
        React.createElement("filter", { id: "9ibllx6crb", width: "116.7%", height: "116.7%", x: "-8.3%", y: "-8.3%", filterUnits: "objectBoundingBox" },
            React.createElement("feGaussianBlur", { in: "SourceAlpha", result: "shadowBlurInner1", stdDeviation: "1.5" }),
            React.createElement("feOffset", { dy: "1", in: "shadowBlurInner1", result: "shadowOffsetInner1" }),
            React.createElement("feComposite", { in: "shadowOffsetInner1", in2: "SourceAlpha", k2: "-1", k3: "1", operator: "arithmetic", result: "shadowInnerInner1" }),
            React.createElement("feColorMatrix", { in: "shadowInnerInner1", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" })),
        React.createElement("rect", { id: "5qcuvvij1a", width: "24", height: "24", x: "0", y: "0", rx: "4" })),
    React.createElement("g", { fill: "none", "fill-rule": "evenodd" },
        React.createElement("g", null,
            React.createElement("g", null,
                React.createElement("g", { transform: "translate(-16 -638) translate(0 622) translate(16 16)" },
                    React.createElement("use", { fill: "#FFF", href: "#5qcuvvij1a" }),
                    React.createElement("use", { fill: "#000", filter: "url(#9ibllx6crb)", href: "#5qcuvvij1a" }))))))); };
var RadioBorder = function () { return (React.createElement("svg", { width: "24", height: "24", viewBox: "0 0 24 24" },
    React.createElement("defs", null,
        React.createElement("filter", { id: "uv6znpzakb", width: "116.7%", height: "116.7%", x: "-8.3%", y: "-8.3%", filterUnits: "objectBoundingBox" },
            React.createElement("feGaussianBlur", { in: "SourceAlpha", result: "shadowBlurInner1", stdDeviation: "1.5" }),
            React.createElement("feOffset", { dy: "1", in: "shadowBlurInner1", result: "shadowOffsetInner1" }),
            React.createElement("feComposite", { in: "shadowOffsetInner1", in2: "SourceAlpha", k2: "-1", k3: "1", operator: "arithmetic", result: "shadowInnerInner1" }),
            React.createElement("feColorMatrix", { in: "shadowInnerInner1", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" })),
        React.createElement("circle", { id: "e8oleaybua", cx: "12", cy: "12", r: "12" })),
    React.createElement("g", { fill: "none", "fill-rule": "evenodd" },
        React.createElement("g", null,
            React.createElement("g", { transform: "translate(-32 -462) translate(32 462)" },
                React.createElement("use", { fill: "#FFF", href: "#e8oleaybua" }),
                React.createElement("use", { fill: "#000", filter: "url(#uv6znpzakb)", href: "#e8oleaybua" })))))); };
var RadioFiller = function () { return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "12", height: "12", viewBox: "0 0 12 12" },
    React.createElement("defs", null,
        React.createElement("linearGradient", { id: "g39ug4eaea", x1: "13.368%", x2: "87.636%", y1: "16.036%", y2: "81.312%" },
            React.createElement("stop", { offset: "0%", "stop-color": "#F14545" }),
            React.createElement("stop", { offset: "100%", "stop-color": "#C41432" }))),
    React.createElement("g", { fill: "none", "fill-rule": "evenodd" },
        React.createElement("g", { fill: "url(#g39ug4eaea)", transform: "translate(-38 -468)" },
            React.createElement("g", { transform: "translate(32 462)" },
                React.createElement("circle", { cx: "12", cy: "12", r: "6" })))))); };
var RadioDisabled = function () { return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "12", height: "12", viewBox: "0 0 12 12" },
    React.createElement("defs", null,
        React.createElement("linearGradient", { id: "9r13h1ct8a", x1: "0%", x2: "100%", y1: "50%", y2: "50%" },
            React.createElement("stop", { offset: "0%", "stop-color": "#E7E7E7" }),
            React.createElement("stop", { offset: "100%", "stop-color": "#BDBDBD" }))),
    React.createElement("g", { fill: "none", "fill-rule": "evenodd" },
        React.createElement("g", { fill: "url(#9r13h1ct8a)", transform: "translate(-38 -284)" },
            React.createElement("g", { transform: "translate(32 278)" },
                React.createElement("circle", { cx: "12", cy: "12", r: "6" })))))); };
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
    if (props.radio) {
        iconChecked = (React.createElement("span", { className: styles.radioChecked },
            React.createElement(RadioBorder, null),
            React.createElement(RadioFiller, null)));
        iconUnChecked = React.createElement(RadioBorder, null);
    }
    if (disabled) {
        iconChecked = (React.createElement("span", { className: styles.disabledChecked },
            React.createElement(CheckedIcon, null)));
    }
    if (disabled && props.radio) {
        iconChecked = (React.createElement("span", { className: styles.radioChecked },
            React.createElement(RadioBorder, null),
            React.createElement(RadioDisabled, null)));
    }
    if (props.type === 'check' && disabled) {
        iconChecked = (React.createElement("span", null,
            React.createElement(CheckedDisabled, null)));
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