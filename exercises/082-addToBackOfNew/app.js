function addToBackOfNew(arr, element) {
        let emptyArray = []
        emptyArray.push(element)
      return  arr.concat(emptyArray)
}

var input = [1, 2];
var output = addToBackOfNew(input, 3);
console.log(input); // --> [1, 2]
console.log(output); // --> [1, 2, 3]