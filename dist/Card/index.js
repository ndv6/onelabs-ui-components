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
import { ReactComponent as ArrowRightSvg } from './arrowRight.svg';
import styles from './Card.module.css';
function Card(props) {
    var children = props.children;
    var className = [styles.card];
    if (props.onClick)
        className.push(styles.hasHover);
    if (props.selected || props.checked)
        className.push(styles.selected);
    if (props.disabled)
        className.push(styles.disabled);
    if (props.type && props.type === 'checkbox') {
        children = (React.createElement(Checkbox, { checked: props.checked, disabled: props.disabled, onChange: props.onClick }, props.children));
    }
    var content = (React.createElement(React.Fragment, null,
        React.createElement("div", null, children),
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