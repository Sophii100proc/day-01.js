// https://www.codewars.com/kata/572ab0cfa3af384df7000ff8/train/javascript

const shuffleIt = (arr, ...arr1) => {
  for ([a, b] of arr1) {
    [arr[a], arr[b]] = [arr[b], arr[a]];
  }
  return arr;
};


//https://www.codewars.com/kata/5fd8aa5743b49e0012d43e50/train/javascript - не виходить до кінця

function loopArr(arr, direction, steps) {
  for (let i = 0; i <= steps; i++) {
    if (direction === "left") {
      arr.shift(arr[i]);
      arr.push(arr[i]);
    } else {
      arr.pop(arr[i]);
      arr.unshift(arr[i]);
    }
  }
  return arr;
}
loopArr([2, 4, 6, 7, 8, 9], "right", 2);

//
