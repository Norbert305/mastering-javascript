function findShortestElement(arr) {
    let empty = ""
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > empty) {
         empty=arr[i]
        }
    }
    return empty
}
var output = findShortestElement(['a', 'two', 'three']);
console.log(output); // --> 'a'