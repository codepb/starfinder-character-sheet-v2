const forEachKey = <T>(func: (key: keyof T) => any, obj: T): any =>
  (<(keyof T)[]>Object.keys(obj)).reduce(
    (a, b) => ({ ...a, [b]: func(b) }),
    {}
  );

const isObject = (item: any) => {
  return item && typeof item === "object" && !Array.isArray(item);
};

const mergeDeep = (target: {}, source: {}): any => {
  const output = Object.assign({}, target);
  if (isObject(target) && isObject(source)) {
    Object.keys(source).forEach(key => {
      if (isObject(source[key])) {
        if (!(key in target)) Object.assign(output, { [key]: source[key] });
        else output[key] = mergeDeep(target[key], source[key]);
      } else {
        Object.assign(output, { [key]: source[key] });
      }
    });
  }
  return output;
};

export { forEachKey, isObject, mergeDeep };
