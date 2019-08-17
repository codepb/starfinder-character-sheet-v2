export default interface HasClasses<T extends string> {
  classes: Record<T, string>;
}
