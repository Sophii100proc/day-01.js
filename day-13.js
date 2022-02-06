// https://www.codewars.com/kata/56c22c5ae8b139416c00175d/train/javascript


function match(candidate, job) {
let income = (candidate.minSalary - (candidate.minSalary / 10))
  if (candidate.minSalary === "" && job.maxSalary === "") {
    return "Error";
  } else if (income <= job.maxSalary) {
    return true;
  } else {
    return false;
  }
}
