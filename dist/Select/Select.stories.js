"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.AsyncOptions = exports.Native = exports.Default = void 0;

var _react = _interopRequireDefault(require("react"));

var _index = _interopRequireDefault(require("./index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var MOCK_DATA = [{
  label: 'data 1',
  value: '1'
}, {
  label: 'data 2',
  value: '2'
}, {
  label: 'data 3',
  value: '3'
}];

var Default = function Default() {
  return /*#__PURE__*/_react.default.createElement(_index.default, {
    options: MOCK_DATA,
    placeholder: "Tap to select",
    label: "Pilih Data"
  });
};

exports.Default = Default;

var Native = function Native() {
  return /*#__PURE__*/_react.default.createElement(_index.default, {
    options: MOCK_DATA,
    native: true,
    placeholder: "Tap to select",
    label: "Pilih Data"
  });
};

exports.Native = Native;

var AsyncOptions = function AsyncOptions() {
  return /*#__PURE__*/_react.default.createElement(_index.default, {
    asyncOptions: function asyncOptions() {
      return fetch('https://raw.githubusercontent.com/substack/provinces/master/provinces.json').then( /*#__PURE__*/function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(res) {
          var json;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return res.json();

                case 2:
                  json = _context.sent;
                  return _context.abrupt("return", json.map(function (d) {
                    return {
                      label: d.name,
                      value: d.name
                    };
                  }));

                case 4:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
    },
    placeholder: "Tap to select",
    label: "Pilih Data"
  });
};

exports.AsyncOptions = AsyncOptions;
var _default = {
  title: 'Elements | Select',
  component: _index.default
};
exports.default = _default;