function joinThreeArrays(arr1, arr2, arr3) {
    let finalArray = arr1.concat(arr2).concat(arr3)

    return finalArray
}

var output = joinThreeArrays([1, 2], [3, 4], [5, 6]);
console.log(output); // --> [1, 2, 3, 4, 5, 6]