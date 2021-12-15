function filterOddElements(arr) {
    let empty = []
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 !== 0) {
        empty.push(arr[i])
      }
    }
    return empty
}

var output = filterOddElements([1, 2, 3, 4, 5]);
console.log(output); // --> [1, 3, 5]