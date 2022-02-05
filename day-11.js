// https://www.codewars.com/kata/playing-with-sets-equal-or-not/train/javascript

function areEqual(s1, s2){
  if(s1 == s2) { 
return "true"
} else {
return "false"
}
}

function notEqual(s1, s2){
    if(s1 !== s2) { 
return "false"
} else {
return "true"
}
}

// https://www.codewars.com/kata/5609fd5b44e602b2ff00003a/train/javascript

function process2Arrays(arr1, arr2) {
  arr1 = [3, 5, 7, 2, 1, 9];
  arr2 = [5, 8, 2, 4, 1, 6];

  const allUniqueElements = new Set([...arr1, ...arr2]);
  const difference = arr1
    .filter((x) => arr2.indexOf(x) == -1)
    .concat(arr2.filter((x) => arr1.indexOf(x) == -1));

  const commonEl = arr2.filter((x) => arr1.indexOf(x) > 0);

  return commonEl;
  return difference;
  return allUniqueElements;
}

process2Arrays();
