function squareElements(arr) {
    let array = []
    for (let i = 0; i < arr.length; i++) {
      let x = arr[i]
      if (x**2) {
        array.push(x**2)
      }
    }
    return array
}

var output = squareElements([1, 2, 3]);
console.log(output); // --> [1, 4, 9]