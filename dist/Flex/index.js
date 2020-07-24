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
import styles from './Flex.module.css';
function Flex(props) {
    return (React.createElement("div", { className: styles.div, style: __assign({}, props) }, props.children));
}
export default Flex;
//# sourceMappingURL=index.js.map