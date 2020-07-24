"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Default = Default;
exports.Fullscreen = Fullscreen;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Button = _interopRequireDefault(require("../Button"));

var _index = _interopRequireDefault(require("./index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function Default() {
  var _React$useState = _react.default.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      state = _React$useState2[0],
      setstate = _React$useState2[1];

  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("button", {
    onClick: function onClick() {
      return setstate(true);
    }
  }, "show default modal"), state && /*#__PURE__*/_react.default.createElement(_index.default, {
    onClose: function onClose() {
      return setstate(false);
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: 300,
      padding: 10
    }
  }, /*#__PURE__*/_react.default.createElement("h1", {
    style: {
      marginBottom: 20
    }
  }, "Are you sure you want to leave?"), /*#__PURE__*/_react.default.createElement("p", {
    style: {
      marginBottom: 20
    }
  }, "Leaving verification process will make your account unverified and you will not be able to do any banking transaction."), /*#__PURE__*/_react.default.createElement(_Button.default, {
    full: true,
    onClick: function onClick() {
      return setstate(false);
    },
    variant: "primary"
  }, "Close"))));
}

function Fullscreen() {
  var _React$useState3 = _react.default.useState(false),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      state = _React$useState4[0],
      setstate = _React$useState4[1];

  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("button", {
    onClick: function onClick() {
      return setstate(true);
    }
  }, "show modal"), state && /*#__PURE__*/_react.default.createElement(_index.default, {
    title: "fullscreen modal",
    type: "fullscreen",
    onClose: function onClose() {
      return setstate(false);
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      padding: 20
    }
  }, /*#__PURE__*/_react.default.createElement("h1", null, "Modal"), /*#__PURE__*/_react.default.createElement("p", null, "content modal"))));
}

var _default = {
  title: 'Elements | Modal',
  component: _index.default
};
exports.default = _default;