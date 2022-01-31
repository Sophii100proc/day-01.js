// https://www.codewars.com/kata/5722fd3ab7162a3a4500031f/train/javascript

function whatNumberIsIt(n) {
  if (n === Number.MIN_VALUE) {
    return "Input number is Number.MIN_VALUE";
  } else if (n === Number.MAX_VALUE) {
    return "Input number is Number.MAX_VALUE";
  } else if (isNaN(n)) {
    return "Input number is Number.NaN";
  } else if (n == Number.POSITIVE_INFINITY) {
    return "Input number is Number.POSITIVE_INFINITY";
  } else if (n == Number.NEGATIVE_INFINITY) {
    return "Input number is Number.NEGATIVE_INFINITY";
  } else if (n === 100) {
    return "Input number is 100";
  } else {
    return "Input number is xxx";
  }
}

// https://www.codewars.com/kata/57238ceaef9008adc7000603/train/javascript

function colorOf(r, g, b) {
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

// https://www.codewars.com/kata/57256064856584bc47000611/train/javascript 

function howManySmaller(arr, n) {
  arr.forEach((el) => el.toFixed(2));
  let array = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < n) {
      array.push(arr[i]);
    }
  }
  return array.length;
}
howManySmaller([1.27635, 3.235, 23.4568], 2);
