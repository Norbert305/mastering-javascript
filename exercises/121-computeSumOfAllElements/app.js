function computeSumOfAllElements(arr) {
      let counter = 0
    for (let i = 0; i < arr.length; i++) {
      counter+=arr[i]
    }
    return counter
}

var output = computeSumOfAllElements([1, 2, 3])
console.log(output); // --> 6