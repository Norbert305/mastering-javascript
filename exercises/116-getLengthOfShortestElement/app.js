function getLengthOfShortestElement(arr) {
    if(arr.length ===0) return 0
    let shortest = arr[0].length
   for (let i = 0; i < arr.length; i++) {
    if (arr[i].length < shortest) {
       shortest=arr[i].length
    }
   }
   return shortest
}
var output = getLengthOfShortestElement(['one', 'two', 'three']);
console.log(output); // --> 3