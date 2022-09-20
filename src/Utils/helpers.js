const english_ordinal_rules = new Intl.PluralRules("en", { type: "ordinal" });
const suffixes = {
  one: "st",
  two: "nd",
  few: "rd",
  other: "th",
};
function ordinal(number /*: number */) {
  const category = english_ordinal_rules.select(number);
  const suffix = suffixes[category];
  return number + suffix;
} // -> string

export { ordinal };
