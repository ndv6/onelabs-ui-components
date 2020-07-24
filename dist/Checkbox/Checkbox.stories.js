"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Disabled = exports.Default = void 0;

var _react = _interopRequireDefault(require("react"));

var _index = _interopRequireDefault(require("./index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Default = function Default() {
  return /*#__PURE__*/_react.default.createElement(_index.default, null, "i agreed terms and condition");
};

exports.Default = Default;

var Disabled = function Disabled() {
  return /*#__PURE__*/_react.default.createElement(_index.default, {
    checked: true,
    disabled: true
  }, "i agreed terms and condition");
};

exports.Disabled = Disabled;
var _default = {
  title: 'Elements | Checkbox',
  component: _index.default
};
exports.default = _default;