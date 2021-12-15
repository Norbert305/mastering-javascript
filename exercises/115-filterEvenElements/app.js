
function filterEvenElements(arr) {
    let empty = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            empty.push(arr[i])
        }
    }
    return empty;
}

var output = filterEvenElements([2, 3, 4, 5, 6]);
console.log(output); // --> [2, 4, 6]
