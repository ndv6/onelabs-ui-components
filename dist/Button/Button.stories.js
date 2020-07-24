"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Loading = exports.FullWidth = exports.Size = exports.Disabled = exports.Ghost = exports.Secondary = exports.Transparent = exports.Primary = exports.Rounded = exports.Default = void 0;

var _react = _interopRequireDefault(require("react"));

var _index = _interopRequireDefault(require("./index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Default = function Default() {
  return /*#__PURE__*/_react.default.createElement(_index.default, null, "Default");
};

exports.Default = Default;

var Rounded = function Rounded() {
  return /*#__PURE__*/_react.default.createElement(_index.default, {
    variant: "primary",
    style: {
      width: 60,
      height: 60
    },
    rounded: true
  }, "R");
};

exports.Rounded = Rounded;

var Primary = function Primary() {
  return /*#__PURE__*/_react.default.createElement(_index.default, {
    variant: "primary"
  }, "Primary");
};

exports.Primary = Primary;

var Transparent = function Transparent() {
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      background: '#000',
      padding: 20
    }
  }, /*#__PURE__*/_react.default.createElement(_index.default, {
    variant: "transparent"
  }, "Transparent"));
};

exports.Transparent = Transparent;

var Secondary = function Secondary() {
  return /*#__PURE__*/_react.default.createElement(_index.default, {
    variant: "secondary"
  }, "Secondary");
};

exports.Secondary = Secondary;

var Ghost = function Ghost() {
  return /*#__PURE__*/_react.default.createElement(_index.default, {
    variant: "ghost"
  }, "Ghost");
};

exports.Ghost = Ghost;

var Disabled = function Disabled() {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "example-row"
  }, /*#__PURE__*/_react.default.createElement(_index.default, {
    variant: "primary",
    disabled: true
  }, "Primary Disabled"), /*#__PURE__*/_react.default.createElement(_index.default, {
    variant: "secondary",
    disabled: true
  }, "secondary Disabled"), /*#__PURE__*/_react.default.createElement(_index.default, {
    variant: "ghost",
    disabled: true
  }, "ghost Disabled"), "1");
};

exports.Disabled = Disabled;

var Size = function Size() {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "example-row"
  }, /*#__PURE__*/_react.default.createElement(_index.default, {
    variant: "primary",
    size: "small"
  }, "Primary small"), /*#__PURE__*/_react.default.createElement(_index.default, {
    variant: "secondary",
    size: "small"
  }, "secondary small"), /*#__PURE__*/_react.default.createElement(_index.default, {
    variant: "ghost",
    size: "small"
  }, "ghost small"));
};

exports.Size = Size;

var FullWidth = function FullWidth() {
  return /*#__PURE__*/_react.default.createElement(_index.default, {
    variant: "primary",
    full: true
  }, "Default");
};

exports.FullWidth = FullWidth;

var Loading = function Loading() {
  return /*#__PURE__*/_react.default.createElement(_index.default, {
    variant: "primary",
    loading: true
  }, "Default");
};

exports.Loading = Loading;
var _default = {
  title: 'Elements | Button',
  component: _index.default
};
exports.default = _default;