function getLargestNumberAmongMixedElements(arr) {
    let counter = 0
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] > counter) {
        counter = arr[i]
      }
  }
  return counter
}

var output = getLargestNumberAmongMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 5
