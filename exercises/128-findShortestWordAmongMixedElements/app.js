function findShortestWordAmongMixedElements(arr) {
    let empty = ""
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > empty) {
            empty = arr[i]
        }
    }
    return empty
}
var output = findShortestWordAmongMixedElements([4, 'two', 2, 'three']);
console.log(output); // --> 'two'