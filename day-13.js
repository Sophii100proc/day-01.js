// https://www.codewars.com/kata/56c22c5ae8b139416c00175d/train/javascript


function match(candidate, job) {

  if (candidate.minSalary === "" && job.maxSalary === "") {
    return "Error";
  } else if (candidate.minSalary <= job.maxSalary) {
    return true;
  } else {
    return false;
  }
}
