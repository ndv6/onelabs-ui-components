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
  if ((meta.error || meta.submitError) && meta.touched) {
    return meta.error || meta.submitError;
  }
  return '';
};
