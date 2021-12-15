function getLargestElement(arr) {
      let number = 0
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > number) {
        number = arr[i]
      }
    }
    return number
}
var output = getLargestElement([5, 2, 8, 3]);
console.log(output); // --> 8;