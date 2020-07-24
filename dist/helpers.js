export var createClassName = function (styles) { return function (classList) {
    var newClassList = [];
    Object.keys(classList).forEach(function (key) {
        if (classList["" + key])
            newClassList.push(styles[key] || key);
    });
    return newClassList.join(' ');
}; };
//# sourceMappingURL=helpers.js.map