//https://www.codewars.com/kata/586909e4c66d18dd1800009b/train/javascript

function multiplyAll(array){
  return function(res){
  return array.map(x=>x*res)
  }
}

