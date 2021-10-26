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
import Button from '../Button';
import Checkbox from '../Checkbox';
import styles from './Card.module.css';
var ArrowRightSvg = function () { return (React.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24" },
    React.createElement("path", { fillRule: "evenodd", d: "M8.748 5.13l-.625.624c-.148.147-.148.387 0 .535L13.821 12l-5.698 5.711c-.148.148-.148.388 0 .535l.625.625c.147.147.387.147.535 0l6.603-6.603c.148-.148.148-.388 0-.536L9.283 5.13c-.148-.147-.388-.147-.535 0z" }))); };
function Card(props) {
    var children = props.children;
    var className = [styles.card];
    if (props.onClick)
        className.push(styles.hasHover);
    if (props.selected || props.checked)
        className.push(styles.selected);
    if (props.disabled)
        className.push(styles.disabled);
    if (props.className)
        className.push(props.className);
    if (props.withoutRadius)
        className.push(styles.withoutRadius);
    if (props.type && props.type === 'checkbox') {
        children = (React.createElement(Checkbox
        // radio={props.radio}
        , { 
            // radio={props.radio}
            checked: props.checked, disabled: props.disabled, onChange: props.onClick }, props.children));
    }
    if (props.type && props.type === 'check') {
        children = (React.createElement(Checkbox
        // type="check"
        , { 
            // type="check"
            checked: props.checked, disabled: props.disabled, onChange: props.onClick }, props.children));
    }
    var content = (React.createElement(React.Fragment, null,
        children,
        props.withArrow && React.createElement(ArrowRightSvg, null)));
    if (props.onClick) {
        return (React.createElement(Button, { style: props.style, full: true, onClick: props.onClick, className: className.join(' ') }, content));
    }
    return (React.createElement("div", { style: props.style, className: className.join(' ') }, content));
}
function List(props) {
    return props.list.map(function (d, i) { return React.createElement(Card, __assign({ key: i }, d)); });
}
Card.List = List;
export default Card;
//# sourceMappingURL=index.js.map