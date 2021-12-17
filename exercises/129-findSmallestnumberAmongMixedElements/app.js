function findSmallestNumberAmongMixedElements(arr) {
  if(arr.length ===0 || arr.find(number=>typeof number === "number")== undefined) return 0
  let counter = 10
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < counter) {
      counter = arr[i]
    }
  }
  return counter
}

var output = findSmallestNumberAmongMixedElements([4, 'lincoln', 9, 'octopus']);
console.log(output); // --> 4