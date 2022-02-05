https://www.codewars.com/kata/59859f435f5d18ede7000050/train/javascript


function wordToBin(str){

const b = str.split("");

let result = b.map((el) => {
  return("0" + el.charCodeAt().toString(2))
})
return (result);
}

// https://www.codewars.com/kata/57f75cc397d62fc93d000059/train/javascript

