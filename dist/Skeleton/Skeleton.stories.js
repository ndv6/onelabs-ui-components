"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.WithRadius = exports.WithHeightWidth = exports.Default = void 0;

var _react = _interopRequireDefault(require("react"));

var _index = _interopRequireDefault(require("./index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Default = function Default() {
  return /*#__PURE__*/_react.default.createElement(_index.default, null);
};

exports.Default = Default;

var WithHeightWidth = function WithHeightWidth() {
  return /*#__PURE__*/_react.default.createElement(_index.default, {
    height: 40,
    width: 300
  });
};

exports.WithHeightWidth = WithHeightWidth;

var WithRadius = function WithRadius() {
  return /*#__PURE__*/_react.default.createElement(_index.default, {
    radius: 20,
    height: 40,
    width: 300
  });
};

exports.WithRadius = WithRadius;
var _default = {
  title: 'Elements | Skeleton',
  component: _index.default
};
exports.default = _default;