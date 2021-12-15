function getLongestElement(arr) {
    let empty = ""
   for (let i = 0; i < arr.length; i++) {
       if (arr[i].length > empty.length) {
           empty = arr[i]
       }
   }
   return empty
}
var output = getLongestElement(['one', 'two', 'three']);
console.log(output); // --> 'three'