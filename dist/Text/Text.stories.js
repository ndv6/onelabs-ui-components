"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Title = exports.Bold = exports.Size = exports.Color = exports.Default = void 0;

var _react = _interopRequireDefault(require("react"));

var _index = _interopRequireDefault(require("./index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Default = function Default() {
  return /*#__PURE__*/_react.default.createElement(_index.default, null, "Text");
};

exports.Default = Default;

var Color = function Color() {
  return /*#__PURE__*/_react.default.createElement(_index.default, {
    color: "red"
  }, "Text Color Red");
};

exports.Color = Color;

var Size = function Size() {
  return /*#__PURE__*/_react.default.createElement(_index.default, {
    size: 16
  }, "Text Size 16");
};

exports.Size = Size;

var Bold = function Bold() {
  return /*#__PURE__*/_react.default.createElement(_index.default, {
    bold: true,
    size: 16
  }, "Text Bold Size 16");
};

exports.Bold = Bold;

var Title = function Title() {
  return /*#__PURE__*/_react.default.createElement(_index.default.Title, null, "Title");
};

exports.Title = Title;
var _default = {
  title: 'Elements | Text',
  component: _index.default
};
exports.default = _default;