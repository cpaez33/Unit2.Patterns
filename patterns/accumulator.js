/**
 * You can assume that `n` is an integer.
 * @param {number} n
 * @returns {number} the sum of all integers from 1 to n, inclusive
 * @returns `0` if n is 0 or negative
 */
export function sumToN(n) {
  if (typeof n !== "number") return NaN;

  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

/**
 * @param {number} n
 * @returns {number} the product of all integers from 1 to n, inclusive
 * @returns `NaN` if n is not a number
 * @returns `undefined` if n is negative
 * @returns `1` if n is 0
 */
export function factorial(n) {
  if (typeof n !== "number") {
    return NaN;
  }
  if (n < 0) {
    return undefined;
  }
  if (n === 0) {
    return 1;
  }
  let total = 1;
  for (let i = 1; i <= n; i++) {
    total = total * i;
  }
  return total;
  // TODO
}

/**
 * @param {number} n
 * @returns {number[]} an array of integers from 1 to n, inclusive
 * @returns `null` if n is not a number
 * @returns `[]` if n is 0 or negative
 */
export function buildNArray(n) {
  if (typeof n !== "number") {
    return null;
  }
  if (n === 0 || n < 0) {
    return [];
  }
  let numArr = [];
  for (let i = 1; i <= n; i++) {
    numArr.push(i);
  }
  return numArr;
  // TODO
}

/**
 * @param {string[]} strings
 * @returns {string} the longest string in `strings`
 */
export function getLongestString(strings) {
  const longStr = strings.reduce(
    (longestStr, currStr) =>
      // if (currStr.length > longestStr.length) {
      //   longestStr = currStr;
      // }
      // return longestStr;
      currStr.length > longestStr.length ? currStr : longestStr,
    ""
  );
  return longStr;
  // TODO
}

/**
 * @param {boolean[]} attendance - `true` means a student is present, `false` means a student is absent
 * @returns {number} the number of students present
 */
export function countPresent(attendance) {
  let count = 0;
  for (let i = 0; i < attendance.length; i++) {
    if (attendance[i] === true) {
      count += 1;
    }
  }
  return count;
  // TODO
}

/**
 * In DNA strings, the symbols `A` and `T` are complements of each other,
 * and the symbols `C` and `G` are complements of each other.
 * A complementary strand is a string formed by the complement
 * of each nucleobase in the original string.
 *
 * @param {string} dna - a string of the symbols `A`, `T`, `C`, or `G`
 * @returns {string} the complementary DNA strand
 * @returns `null` if `dna` is not a string
 */
export function complementDNA(dna) {
  if (typeof dna !== "string") {
    return null;
  }
  const dnaArr = dna.split("");
  let complementaryStr = "";
  for (let i = 0; i < dnaArr.length; i++) {
    if (dnaArr[i] === "A") {
      complementaryStr += "T";
    } else if (dnaArr[i] === "T") {
      complementaryStr += "A";
    } else if (dnaArr[i] === "C") {
      complementaryStr += "G";
    } else if (dnaArr[i] === "G") {
      complementaryStr += "C";
    }
  }
  return complementaryStr;
  // TODO
}
