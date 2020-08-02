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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from 'react';
import Button from '../Button';
import ModalSelect from './ModalSelect';
import Modal from '../Modal';
import { createClassName, metaError } from '../helpers';
import styles from './Select.module.css';
var ArrowDown = function () { return (React.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24" },
    React.createElement("path", { fillRule: "evenodd", d: "M18.87 8.766l-.624-.624c-.148-.148-.387-.148-.536 0L12 13.84 6.29 8.142c-.149-.148-.388-.148-.536 0l-.625.624c-.148.148-.148.388 0 .536l6.603 6.603c.148.148.388.148.536 0l6.603-6.603c.148-.148.148-.388 0-.536z" }))); };
var classNames = createClassName(styles);
function getValue(d) {
    return d.value || d.code || d.id;
}
function getLabel(d) {
    return d.label || d.name || d.title;
}
function Select(props) {
    var _a;
    var label = props.label, className = props.className, loading = props.loading, error = props.error, required = props.required, placeholder = props.placeholder, onChange = props.onChange, value = props.value, options = props.options, asyncOptions = props.asyncOptions, asyncOnSearch = props.asyncOnSearch, onFilter = props.onFilter, defaultValue = props.defaultValue, disabled = props.disabled, native = props.native, rest = __rest(props, ["label", "className", "loading", "error", "required", "placeholder", "onChange", "value", "options", "asyncOptions", "asyncOnSearch", "onFilter", "defaultValue", "disabled", "native"]);
    var _b = React.useState(defaultValue || undefined), selected = _b[0], setSelected = _b[1];
    var _c = React.useState(false), showModal = _c[0], setShowModal = _c[1];
    var classnames = classNames((_a = {},
        _a["" + className] = !!className,
        _a.error = !!metaError(error),
        _a.disabled = disabled,
        _a));
    React.useEffect(function () {
        if (value) {
            setSelected(value);
        }
    }, [value]);
    function nativeOnChange(event) {
        var selectedValue = (options || []).find(function (d) { return getValue(d) === event.target.value; });
        if (onChange) {
            onChange(selectedValue);
            return;
        }
        setSelected(selectedValue);
    }
    function onSelect(value) {
        setSelected(value);
        setShowModal(false);
        if (onChange)
            onChange(value);
    }
    return (React.createElement("div", { className: classnames },
        label && (React.createElement("label", { className: styles.label },
            label,
            required && React.createElement("span", { className: styles.required }, "*"))),
        React.createElement("div", { className: styles.wrapper },
            !selected && placeholder && React.createElement("div", { className: styles.placeholder }, placeholder),
            selected && React.createElement("div", { className: styles.selected }, getLabel(selected)),
            native && (React.createElement("select", __assign({ onChange: nativeOnChange, value: selected ? getValue(selected) : undefined, className: styles.nativeSelect }, rest), (options || []).map(function (d, index) { return (React.createElement("option", { key: index, value: getValue(d) }, getLabel(d))); }))),
            !native && React.createElement(Button, { className: styles.nativeSelect, onClick: function () { return setShowModal(true); } }),
            loading && React.createElement("div", { className: styles.loading }),
            React.createElement(ArrowDown, null)),
        !!metaError(error) && React.createElement("div", { className: styles.errorLabel }, metaError(error)),
        showModal && (React.createElement(Modal, { title: "", onClose: function () { return setShowModal(false); }, type: "fullscreen" },
            React.createElement(ModalSelect, { onSelect: onSelect, label: label, options: options || [], asyncOptions: asyncOptions, asyncOnSearch: asyncOnSearch, onFilter: onFilter })))));
}
export default Select;
//# sourceMappingURL=index.js.map