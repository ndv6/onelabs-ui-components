import React from 'react';
import { ReactComponent as CheckedIcon } from './checked.svg';
import { ReactComponent as DisabledCheckedIcon } from './disabledChecked.svg';
import { ReactComponent as UnCheckedIcon } from './unChecked.svg';
import styles from './Checkbox.module.css';
function Checkbox(props) {
    var children = props.children, disabled = props.disabled, checked = props.checked, onChange = props.onChange;
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
    var iconChecked = React.createElement(CheckedIcon, { height: 20, width: 20 });
    var iconUnChecked = React.createElement(UnCheckedIcon, { height: 20, width: 20 });
    if (disabled) {
        iconChecked = React.createElement(DisabledCheckedIcon, { height: 20, width: 20 });
    }
    return (React.createElement("div", { className: [styles.checkbox, disabled ? styles.disabled : ''].join(' ') },
        React.createElement("input", { className: styles.input, checked: htmlChecked, onChange: onChangeInput, type: "checkbox" }),
        htmlChecked ? iconChecked : iconUnChecked,
        React.createElement("span", { className: styles.label }, children)));
}
export default Checkbox;
//# sourceMappingURL=index.js.map