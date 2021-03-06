import React from 'react';
// import { useHistory } from 'react-router-dom';
import { createClassName } from '../helpers';
import styles from './Tag.module.css';
var classNames = createClassName(styles);
function Tag(props) {
    var _a;
    var _b = React.useState(true), visible = _b[0], setvisible = _b[1];
    function onClick() {
        if (props.onClose)
            props.onClose(!visible);
        setvisible(!visible);
    }
    React.useEffect(function () {
        if (props.visible !== undefined) {
            setvisible(props.visible);
        }
    }, [props.visible]);
    var classnames = classNames((_a = {
            tag: true
        },
        _a["" + props.color] = props.color,
        _a));
    if (!visible)
        return null;
    return (React.createElement("div", { className: [classnames, props.className || ''].join(' ') },
        props.children,
        props.closeable && (React.createElement("button", { onClick: onClick },
            React.createElement("svg", { viewBox: "64 64 896 896", focusable: "false", "data-icon": "close", width: "1em", height: "1em", fill: "currentColor", "aria-hidden": "true" },
                React.createElement("path", { d: "M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z" }))))));
}
export default Tag;
//# sourceMappingURL=index.js.map