// https://www.codewars.com/kata/5731861d05d14d6f50000626/train/javascript

function bigToSmall(arr) {
  let a = [].concat(...arr);
  let result = a.sort((a, b) => b - a).join(">");
  return result;
}
bigToSmall([
  [3, 5, 6, 4],
  [4, 6, 3, 5],
]);

