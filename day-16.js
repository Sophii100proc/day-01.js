//https://www.codewars.com/kata/572df796914b5ba27c000c90/train/javascript

 const result = arr.slice();
  return result.sort((a,b) => {
    let contA = arr.filter(x => x === a).length;
    let contB = arr.filter(y => y === b).length;
    return contA === contB ? b - a : contA - contB;
    })};


//https://www.codewars.com/kata/572fdeb4380bb703fc00002c/train/javascript

function isolateIt(arr) {
  return arr.map((result) => {
    const a = Math.floor(result.length / 2);
    const b = result.split("");
    b.splice(a, 0, "|");
    const res = result.split("");
    res.splice(a, 1, "|");
    return result.length % 2 ? res.join("") : b.join("");
  });
}
