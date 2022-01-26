// https://www.codewars.com/kata/57216d4bcdd71175d6000560/train/javascript

function padIt(str, n) {
  let paddedStr = str;
  for (let i = 0; i < n; i++) {
    if (i % 2 === 1) {
      paddedStr = paddedStr + "*";
    } else {
      paddedStr = "*" + paddedStr;
    }
  }
  return paddedStr;
}

// https://www.codewars.com/kata/5721a78c283129e416000999/train/javascript (кодворс не пропускає частину, не можу визначити проблему)

function pickIt(arr) {
  var odd = [],
    even = [];
   arr = [7, 5, 3, 8, 2];
  let i = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] % 2 != 1) {
      odd.push(arr[i]);
    } else {
      even.push(arr[i]);
    }
  }

  return [odd, even];
}
pickIt();

// https://www.codewars.com/kata/5721c189cdd71194c1000b9b/train/javascript

function grabDoll(dolls) {
  var bag = [];
  for (let i = 0; i < dolls.length; i++) {
    if (dolls[i] !== "Hello Kitty" && dolls[i] !== "Barbie doll") continue;
    bag.push(dolls[i]);
    if (bag <= 3) {
      break;
    }
  }

  return bag;
}


// https://www.codewars.com/kata/5722b3f0bd5583cf44001000/train/javascript

const obj = {
  Our: "earth",
  is: "a",
  beautyful: "world",
  apple: "sweet",
  car: "model",
};
const result = giveMeFive(obj);
console.log(result);
function giveMeFive(obj) {
  let arr = [];
  for (const key in obj) {
    if (key.length === 5) {
      arr.push(key);
    }
    if (obj[key].length === 5) {
      arr.push(obj[key]);
    }
  }
  return arr;
}
