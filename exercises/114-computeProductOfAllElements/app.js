function computeProductOfAllElements(arr) {
    let counter = 1
    for (let i = 0; i < arr.length; i++) {
        counter*=arr[i]
    }
    return counter
}

var output = computeProductOfAllElements([2, 5, 6]);
console.log(output); // --> 60