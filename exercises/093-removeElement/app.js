// Write your function here

function removeElement(array, two) {
        let empty = []
    for (let i = 0; i < array.length; i++) {
        if (array[i] !== two) {
            empty.push(array[i])
        }
    }
        return empty
}

var output = removeElement([1, 2, 3, 2, 1], 2); console.log(output); // --> [1, 3, 1]