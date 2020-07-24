import React from 'react';
import ReactDOM from 'react-dom';
import Button from '../Button';
import Card from '../Card';
import { ReactComponent as ArrowSvg } from './arrowLeft.svg';
import { createClassName } from '../helpers';
import styles from './Modal.module.css';
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
            React.createElement(Button, { onClick: props.onClose },
                React.createElement(ArrowSvg, null)),
            React.createElement("div", { className: styles.label }, props.title)),
        React.createElement("div", { className: styles.content }, props.children)), el);
}
export default Modal;
//# sourceMappingURL=index.js.map