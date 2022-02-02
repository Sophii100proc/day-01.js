// https://www.codewars.com/kata/57274562c8dcebe77e001012/train/javascript - не можу зробити універcальною(

function cutIt(arr) {
    let strings = arr.filter( x => typeof x === "string" )
    .sort((a, b) => a.length - b.length);
    
    return strings[0];
}

cutIt([9, 'two', 5, 'three', 'onrr']);

// https://www.codewars.com/kata/57277a31e5e51450a4000010/train/javascript

function firstToLast(str,c){
  let res = str.lastIndexOf(c) - str.indexOf(c);
  if (str.indexOf(c) !== -1){
 return res;
} else {
return str.indexOf(c);
} 
}
firstToLast("hello sophia","p");

// https://www.codewars.com/kata/57280481e8118511f7000ffa/train/javascript - ще ковиряюся

