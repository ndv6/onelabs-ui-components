export var createClassName = function (styles) { return function (classList) {
    var newClassList = [];
    Object.keys(classList).forEach(function (key) {
        if (classList["" + key])
            newClassList.push(styles[key] || key);
    });
    return newClassList.join(' ');
}; };
export var metaError = function (meta) {
    if (typeof meta === 'string') {
        return meta;
    }
    if (meta && meta.error && meta.touched) {
        return meta.submitError || meta.error;
    }
    return '';
};
//# sourceMappingURL=helpers.js.map