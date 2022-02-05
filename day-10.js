// https://www.codewars.com/kata/5728203b7fc662a4c4000ef3/train/javascript

function alienLanguage(str) {
  return str
    .split(" ")
    .map(
      (element) =>
        element.slice(0, -1).toUpperCase() + element.slice(-1).toLowerCase()
    )
    .join(" ");
}


// https://www.codewars.com/kata/5729b103dd8bac11a900119e/train/javascript

function fiveLine(s) {
  let a = s.trim();
  for (let i = 2; i < 10; i++) {
    a += "\n" + s.trim().repeat(i);
  }
  return a;
}

// https://www.codewars.com/kata/57284d23e81185ae6200162a/train/javascript  - роблю

