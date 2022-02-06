https://www.codewars.com/kata/59859f435f5d18ede7000050/train/javascript


function wordToBin(str){

const b = str.split("");

let result = b.map((el) => {
  return("0" + el.charCodeAt().toString(2))
})
return (result);
}

// https://www.codewars.com/kata/57f75cc397d62fc93d000059/train/javascript


function calc() {
  const a = "abd";
  const b = a.split("");

  let result = b.map((el) => {
    return el.charCodeAt();
  });
  let c = result.join("").split("");

  let total1 = 0;
  let total2 = 0;

  for (let i = 0; i < c.length; i++) {
    if (c[i] !== "7") {
      total1 + i;
    } else if (c[i] === 7) {
      total2 + i;
    }
  }
}
console.log(calc());
