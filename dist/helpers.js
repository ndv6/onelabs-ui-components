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
    if ((meta.error || meta.submitError) && meta.touched) {
        return meta.error || meta.submitError;
    }
    return '';
};
//# sourceMappingURL=helpers.js.map