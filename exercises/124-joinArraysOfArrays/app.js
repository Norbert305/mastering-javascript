function joinArrayOfArrays(arr) {
  var answer = [].concat.apply([],arr)
  return answer;
}
var output = joinArrayOfArrays([[1, 4], [true, false], ['x', 'y']]);
console.log(output); // --> [1, 4, true, false, 'x', 'y']
//make a variable in order to use the concat method()
//and apply the [] with the array. 