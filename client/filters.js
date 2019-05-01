export function currency (val) {
  return val ? `$${val.toFixed(2)}` : "$0.00";
}
