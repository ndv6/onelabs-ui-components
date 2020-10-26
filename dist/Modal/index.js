import React from 'react';
import ReactDOM from 'react-dom';
import Button from '../Button';
import Card from '../Card';
import { createClassName } from '../helpers';
import styles from './Modal.module.css';
var ArrowSvg = function () { return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24" },
    React.createElement("g", { fill: "none", "fill-rule": "evenodd" },
        React.createElement("g", null,
            React.createElement("g", null,
                React.createElement("g", { fill: "#939FAB", transform: "translate(-335 -110) translate(335 110)" },
                    React.createElement("circle", { cx: "12", cy: "12", r: "12" })),
                React.createElement("g", { fill: "#FFF" },
                    React.createElement("path", { d: "M11.463 1.35c.252-.186.61-.166.838.063.252.251.252.659 0 .91L7.766 6.857l4.535 4.536c.252.251.252.659 0 .91-.228.228-.586.25-.838.062l-.072-.062-4.535-4.536-4.533 4.536-.072.062c-.252.187-.61.166-.838-.062-.251-.251-.251-.659 0-.91l4.533-4.536-4.533-4.534c-.251-.251-.251-.659 0-.91.228-.229.586-.25.838-.062l.072.062 4.533 4.534 4.535-4.534z", transform: "translate(-335 -110) translate(335 110) translate(5.143 5.143)" }))))))); };
var classNames = createClassName(styles);
var body = document.getElementsByTagName('body')[0];
if (!document.getElementById('modal-portal')) {
    var el = document.createElement('div');
    el.setAttribute('id', 'modal-portal');
    body.appendChild(el);
}
function Modal(props) {
    var _a;
    var modalRoot = document.getElementById('modal-portal');
    var el = document.createElement('div');
    var type = props.type === 'fullscreen' ? 'fullscreen' : 'default';
    var classnames = classNames((_a = {
            modal: true
        },
        _a["" + props.className] = !!props.className,
        _a["" + type] = !!type,
        _a));
    React.useEffect(function () {
        modalRoot.appendChild(el);
        body.style.overflow = 'hidden';
        return function () {
            body.style.overflow = 'auto';
            modalRoot.removeChild(el);
        };
    }, [props.className, el, modalRoot]);
    if (type === 'default') {
        return ReactDOM.createPortal(React.createElement("div", { className: classnames },
            React.createElement(Card, null,
                React.createElement("div", { className: styles.content },
                    !props.hideCloseButton && (React.createElement(Button, { className: styles.close, onClick: props.onClose }, "X")),
                    React.createElement("div", null, props.children)))), el);
    }
    return ReactDOM.createPortal(React.createElement("div", { className: classnames },
        React.createElement("div", { className: styles.header },
            React.createElement("div", { className: styles.label }, props.title),
            React.createElement(Button, { style: { marginLeft: 'auto' }, onClick: props.onClose },
                React.createElement(ArrowSvg, null))),
        React.createElement("div", { className: styles.content }, props.children)), el);
}
export default Modal;
//# sourceMappingURL=index.js.map