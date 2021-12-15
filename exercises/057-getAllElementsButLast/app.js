function getAllElementsButLast(array) {
    array.pop(array)
    return array

}

var input = [1, 2, 3, 4];
var output = getAllElementsButLast(input);
console.log(output); // --> [1, 2 , 3]