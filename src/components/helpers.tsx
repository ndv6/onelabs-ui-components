export const createClassName = (styles: any) => (classList: any) => {
  const newClassList: string[] = [];
  Object.keys(classList).forEach(function(key) {
    if (classList[`${key}`]) newClassList.push(styles[key] || key);
  });
  return newClassList.join(' ');
};

export const metaError = (meta: string | any) => {
  if (typeof meta === 'string') {
    return meta;
  }
  if (meta && meta.error && meta.touched) {
    return meta.submitError || meta.error;
  }
  return '';
};

const newLocal = this;
export const debounce = (func: Function, wait: number, immediate?: boolean) => {
  var timeout: any;

  return function executedFunction() {
    var context: any = newLocal;
    var args: any = arguments;

    var later: any = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };

    var callNow: any = immediate && !timeout;

    clearTimeout(timeout);

    timeout = setTimeout(later, wait);

    if (callNow) func.apply(context, args);
  };
};
