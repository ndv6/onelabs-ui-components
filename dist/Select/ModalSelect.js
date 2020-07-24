var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import React from 'react';
import Input from '../Input';
import Button from '../Button';
import styles from './Select.module.css';
var SearchSvg = function () { return (React.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24" },
    React.createElement("path", { fillRule: "evenodd", d: "M19.86 18.625l-3.787-3.787c-.071-.072-.165-.109-.265-.109h-.412c.983-1.138 1.579-2.62 1.579-4.242C16.975 6.904 14.07 4 10.487 4 6.904 4 4 6.904 4 10.487c0 3.584 2.904 6.488 6.487 6.488 1.622 0 3.104-.596 4.242-1.579v.412c0 .1.04.194.11.265l3.786 3.787c.146.146.383.146.53 0l.705-.705c.146-.147.146-.384 0-.53zm-9.373-3.147c-2.757 0-4.99-2.234-4.99-4.99 0-2.758 2.233-4.99 4.99-4.99s4.99 2.232 4.99 4.99c0 2.756-2.233 4.99-4.99 4.99z" }))); };
function asyncCall(asyncOptions, setList, setLoading) {
    return __awaiter(this, void 0, void 0, function () {
        var list, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    setLoading(true);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, asyncOptions()];
                case 2:
                    list = _a.sent();
                    setList(list);
                    setLoading(false);
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    setList([]);
                    setLoading(false);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
export default function ModalSelect(props) {
    var _a = React.useState(props.options || []), list = _a[0], setList = _a[1];
    var _b = React.useState(''), keyword = _b[0], setKeyword = _b[1];
    var _c = React.useState(false), loading = _c[0], setLoading = _c[1];
    function onChange(e) {
        setKeyword(e.target.value);
    }
    React.useEffect(function () {
        if (props.asyncOptions) {
            asyncCall(props.asyncOptions, setList, setLoading);
        }
    }, [props.asyncOptions]);
    return (React.createElement("div", { style: { padding: '15px 20px 0px 20px' } },
        React.createElement("label", { style: { fontWeight: 700 } }, props.label),
        React.createElement(Input, { icon: React.createElement("span", { style: { marginLeft: 15 } },
                React.createElement(SearchSvg, null)), placeholder: "Tap to search", onChange: onChange }),
        React.createElement("div", { style: { overflow: 'auto', height: 'calc(100vh - 130px)' } },
            list
                .filter(function (d) {
                return d.label
                    .toString()
                    .toLowerCase()
                    .includes(keyword.toLowerCase());
            })
                .map(function (d, i) { return (React.createElement(Button, { key: i, onClick: function () { return props.onSelect(d); }, className: styles.option, full: true }, d.label)); }),
            list.length < 1 && !loading && (React.createElement("div", { style: { padding: 30, textAlign: 'center' } }, "Data not found")),
            loading && React.createElement("div", { style: { padding: 30, textAlign: 'center' } }, "Loading..."))));
}
//# sourceMappingURL=ModalSelect.js.map