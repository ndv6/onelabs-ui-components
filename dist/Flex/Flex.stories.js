"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Layout = exports.Default = void 0;

var _react = _interopRequireDefault(require("react"));

var _index = _interopRequireDefault(require("./index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var defStyle = {
  padding: 20,
  background: 'lightblue'
};

var Default = function Default() {
  return /*#__PURE__*/_react.default.createElement(_index.default, null, "Flex Element");
};

exports.Default = Default;

var Layout = function Layout() {
  return /*#__PURE__*/_react.default.createElement(_index.default, _extends({}, defStyle, {
    justifyContent: "space-between"
  }), /*#__PURE__*/_react.default.createElement(_index.default, defStyle, "Left"), /*#__PURE__*/_react.default.createElement(_index.default, defStyle, "Right"));
};

exports.Layout = Layout;
var _default = {
  title: 'Elements | Flex',
  component: _index.default
};
exports.default = _default;