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

// https://www.codewars.com/kata/5729b103dd8bac11a900119e/train/javascript

function fiveLine(s) {
  let a = s.trim();
  for (let i = 2; i < 10; i++) {
    a += "\n" + s.trim().repeat(i);
  }
  return a;
}

// https://www.codewars.com/kata/57284d23e81185ae6200162a/train/javascript  - роблю
