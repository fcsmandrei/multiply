module.exports = function multiply(first, second) {
  const mult = BigInt(first) * BigInt(second);
  return String(mult);
}
