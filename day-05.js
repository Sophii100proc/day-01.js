// https://www.codewars.com/kata/is-this-my-tail/train/javascript

function correctTail(body, tail) {
  let getLastL = body.substr(body.length - tail.length);

  if (getLastL === tail) {
    return true;
  } else return false;
}


// https://www.codewars.com/kata/56f6ad906b88de513f000d96/train/javascript

function bonusTime(salary, bonus) {
  if (bonus === true) {
    return "£" + salary * 10;
  } else {
    return "£" + salary;
  }
}
bonusTime(1200, true);

// https://www.codewars.com/kata/5a58d889880385c2f40000aa/train/javascript

automorphic(7);

function automorphic(n) {
  const square = Math.pow(n, 2);
  const sqToStr = square.toString();
  const nToStr = n.toString();

  if (sqToStr[sqToStr.length - nToStr.length] === nToStr) {
    return "Automorphic";
  } else {
    return "Not!!";
  }
}
