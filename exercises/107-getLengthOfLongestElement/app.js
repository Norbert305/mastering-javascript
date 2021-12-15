function getLengthOfLongestElement(arr) {
    let counter = 0
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].length == 5) {
                counter+=arr[i].length
            }
        }
        return counter
}

var output = getLengthOfLongestElement(['one', 'two', 'three']);
console.log(output); // --> 5