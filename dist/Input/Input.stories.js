"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.WithError = exports.Required = exports.Password = exports.Loading = exports.Disabled = exports.Default = void 0;

var _react = _interopRequireDefault(require("react"));

var _index = _interopRequireDefault(require("./index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Default = function Default() {
  return /*#__PURE__*/_react.default.createElement(_index.default, {
    placeholder: "Tap to type",
    label: "Username"
  });
};

exports.Default = Default;

var Disabled = function Disabled() {
  return /*#__PURE__*/_react.default.createElement(_index.default, {
    disabled: true,
    placeholder: "Tap to type",
    label: "Username"
  });
};

exports.Disabled = Disabled;

var Loading = function Loading() {
  return /*#__PURE__*/_react.default.createElement(_index.default, {
    placeholder: "Tap to type",
    label: "Username",
    loading: true
  });
};

exports.Loading = Loading;

var Password = function Password() {
  return /*#__PURE__*/_react.default.createElement(_index.default, {
    type: "password",
    placeholder: "Tap to type",
    label: "Username"
  });
};

exports.Password = Password;

var Required = function Required() {
  return /*#__PURE__*/_react.default.createElement(_index.default, {
    placeholder: "Tap to type",
    label: "Username",
    required: true
  });
};

exports.Required = Required;

var WithError = function WithError() {
  return /*#__PURE__*/_react.default.createElement(_index.default, {
    placeholder: "Tap to type",
    label: "Username",
    error: "Please input username"
  });
};

exports.WithError = WithError;
var _default = {
  title: 'Elements | Input',
  component: _index.default
};
exports.default = _default;