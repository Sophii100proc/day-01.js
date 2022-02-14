//https://www.codewars.com/kata/572df796914b5ba27c000c90/train/javascript

 const result = arr.slice();
  return result.sort((a,b) => {
    let contA = arr.filter(x => x === a).length;
    let contB = arr.filter(y => y === b).length;
    return contA === contB ? b - a : contA - contB;
    })};

