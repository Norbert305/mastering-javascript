function getLongestWordOfMixedElements(arr) {
        let empty = ""
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > empty) {
            empty = arr[i]
        }
    }
    return empty
}

var output = getLongestWordOfMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 'word'