export const createClassName = (styles: any) => (classList: any) => {
  const newClassList: string[] = [];
  Object.keys(classList).forEach(function(key) {
    if (classList[`${key}`]) newClassList.push(styles[key] || key);
  });
  return newClassList.join(' ');
};
