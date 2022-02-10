// https://www.codewars.com/kata/572ab0cfa3af384df7000ff8/train/javascript

const shuffleIt = (arr, ...arr1) => {
  for ([a, b] of arr1) {
    [arr[a], arr[b]] = [arr[b], arr[a]];
  }
  return arr;
};


//https://www.codewars.com/kata/5fd8aa5743b49e0012d43e50/train/javascript
