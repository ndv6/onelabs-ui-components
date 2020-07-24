"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ListCheckboxWithChecked = exports.ListClickableArrow = exports.ListClickable = exports.ClickableCheckbox = exports.ClickableWithArrow = exports.Clickable = exports.List = exports.DisabledCheckbox = exports.Disabled = exports.Selected = exports.Default = void 0;

var _react = _interopRequireDefault(require("react"));

var _addonActions = require("@storybook/addon-actions");

var _index = _interopRequireDefault(require("./index"));

var _Text = _interopRequireDefault(require("../Text"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Default = function Default() {
  return /*#__PURE__*/_react.default.createElement(_index.default, null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_Text.default, {
    bold: true,
    size: 16
  }, "Kartu Debit"), /*#__PURE__*/_react.default.createElement(_Text.default, null, "Gunakan untuk pembayaran online dan tarik tunai di lebih dari 50 ribu ATM di seluruh Indonesia")));
};

exports.Default = Default;

var Selected = function Selected() {
  return /*#__PURE__*/_react.default.createElement(_index.default, {
    selected: true
  }, "i agreed terms and condition");
};

exports.Selected = Selected;

var Disabled = function Disabled() {
  return /*#__PURE__*/_react.default.createElement(_index.default, {
    disabled: true
  }, "i agreed terms and condition");
};

exports.Disabled = Disabled;

var DisabledCheckbox = function DisabledCheckbox() {
  return /*#__PURE__*/_react.default.createElement(_index.default, {
    type: "checkbox",
    checked: true,
    disabled: true
  }, "Disabled Checkbox Card");
};

exports.DisabledCheckbox = DisabledCheckbox;

var List = function List() {
  return /*#__PURE__*/_react.default.createElement(_index.default.List, {
    list: [{
      children: 'list 1'
    }, {
      children: 'list 2'
    }]
  });
};

exports.List = List;

var Clickable = function Clickable() {
  return /*#__PURE__*/_react.default.createElement(_index.default, {
    onClick: function onClick() {
      return (0, _addonActions.action)('button-click');
    }
  }, "Clickable Card");
};

exports.Clickable = Clickable;

var ClickableWithArrow = function ClickableWithArrow() {
  return /*#__PURE__*/_react.default.createElement(_index.default, {
    withArrow: true,
    onClick: function onClick() {
      return (0, _addonActions.action)('button-click');
    }
  }, "Clickable Card with arrow");
};

exports.ClickableWithArrow = ClickableWithArrow;

var ClickableCheckbox = function ClickableCheckbox() {
  var _React$useState = _react.default.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      checked = _React$useState2[0],
      setChecked = _React$useState2[1];

  return /*#__PURE__*/_react.default.createElement(_index.default, {
    style: {
      padding: 15
    },
    type: "checkbox",
    checked: checked,
    onClick: function onClick() {
      return setChecked(!checked);
    }
  }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_Text.default, {
    bold: true,
    size: 16
  }, "Kartu Debit"), /*#__PURE__*/_react.default.createElement(_Text.default, null, "Gunakan untuk pembayaran online dan tarik tunai di lebih dari 50 ribu ATM di seluruh Indonesia")));
};

exports.ClickableCheckbox = ClickableCheckbox;

var ListClickable = function ListClickable() {
  return /*#__PURE__*/_react.default.createElement(_index.default.List, {
    list: [{
      children: 'Clickable Card 1',
      onClick: function onClick() {
        return (0, _addonActions.action)('button-click');
      }
    }, {
      children: 'Clickable Card 2',
      onClick: function onClick() {
        return (0, _addonActions.action)('button-click');
      }
    }]
  });
};

exports.ListClickable = ListClickable;

var ListClickableArrow = function ListClickableArrow() {
  var defConfig = {
    onClick: function onClick() {
      return (0, _addonActions.action)('button-click');
    },
    withArrow: true
  };
  return /*#__PURE__*/_react.default.createElement(_index.default.List, {
    list: [_objectSpread({
      children: 'Clickable Card with arrow 1'
    }, defConfig), _objectSpread({
      children: 'Clickable Card with arrow 2'
    }, defConfig)]
  });
};

exports.ListClickableArrow = ListClickableArrow;

var ListCheckboxWithChecked = function ListCheckboxWithChecked() {
  var _React$useState3 = _react.default.useState('1'),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      selected = _React$useState4[0],
      setSelected = _React$useState4[1];

  var defConfig = {
    type: 'checkbox'
  };
  return /*#__PURE__*/_react.default.createElement(_index.default.List, {
    list: [_objectSpread({
      children: 'Clickable Card with arrow 1',
      checked: selected === '1',
      onClick: function onClick() {
        return setSelected('1');
      }
    }, defConfig), _objectSpread({
      children: 'Clickable Card with arrow 2',
      checked: selected === '2',
      onClick: function onClick() {
        return setSelected('2');
      }
    }, defConfig)]
  });
};

exports.ListCheckboxWithChecked = ListCheckboxWithChecked;
var _default = {
  title: 'Elements | Card',
  component: _index.default
};
exports.default = _default;