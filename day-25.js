// https://www.codewars.com/kata/52d56d9c6b02b2fa9a0006d9/train/javascript

Function.prototype.call = function() {
  var arg = Array.prototype.slice.apply(arguments,[1]);
  return this.apply(arguments[0], arg);
}; 
