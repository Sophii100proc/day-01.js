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

//
