// Write your function here
function computeAverageOfNumbers (array) {
        let counter = 0
    for (let i = 0; i < array.length; i++) {
        counter+=array[i]/array.length
    }
    return counter
}

var input = [1,2,3,4,5];
var output = computeAverageOfNumbers(input);
console.log(output); // --> 3