import React from 'react';
import ReactDOM from 'react-dom';
import Button from '../Button';
import Card from '../Card';
import { createClassName } from '../helpers';
import styles from './Modal.module.css';
var ArrowSvg = function () { return (React.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24" },
    React.createElement("path", { fill: "#313131", fillRule: "evenodd", d: "M8.24 11.458l6.212-6.212c.3-.3.786-.3 1.085 0l.725.724c.3.3.3.784.001 1.084L11.34 12l4.923 4.946c.298.3.298.785-.001 1.084l-.725.725c-.3.299-.785.299-1.085 0L8.24 12.542c-.3-.3-.3-.785 0-1.084z" }))); };
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