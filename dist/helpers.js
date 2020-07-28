export var createClassName = function (styles) { return function (classList) {
    var newClassList = [];
    Object.keys(classList).forEach(function (key) {
        if (classList["" + key])
            newClassList.push(styles[key] || key);
    });
    return newClassList.join(' ');
}; };
export var metaError = function (meta) {
    if (typeof meta === 'string')
        return meta;
    if (!meta)
        return '';
    if ((meta.error || meta.submitError) && meta.touched)
        return meta.error || meta.submitError;
};
var newLocal = this;
export var debounce = function (func, wait, immediate) {
    var timeout;
    return function executedFunction() {
        var context = newLocal;
        var args = arguments;
        var later = function () {
            timeout = null;
            if (!immediate)
                func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow)
            func.apply(context, args);
    };
};
//# sourceMappingURL=helpers.js.map