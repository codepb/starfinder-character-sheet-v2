const distinct = <T>(array: T[]) => [...new Set<T>(array)];

const remove = <T>(array: T[]) => (item: T) => array.filter(i => i !== item);

export { distinct, remove };
