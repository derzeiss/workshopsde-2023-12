/**
 * className util.
 * @example cx('one', 'two three   ', {'four': false, 'five': 3 > 2}) -> 'one two three five'
 * @returns className string
 */
export const cx = (
  ...args: (string | undefined | { [cls: string]: boolean })[]
) => {
  const cls = args.reduce((cls: string, arg) => {
    if (!arg) return cls;
    if (typeof arg === "string") return cls + " " + arg;
    Object.entries(arg).forEach(([c, shouldApply]) => {
      if (shouldApply) cls += " " + c;
    });
    return cls;
  }, "");
  return cls.replace(/\s{2,}/g, " ").replace(/(^\s+|\s+$)/g, "");
};
