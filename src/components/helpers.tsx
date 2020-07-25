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
