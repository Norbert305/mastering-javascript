function findSmallestElement(arr) {
    if(arr.length ===0) return 0
    let number = 20
   for (let i = 0; i < arr.length; i++) {
       if (arr[i] < number) {
           number = arr[i]
       }
   }
   return number
}
var output = findSmallestElement([4, 1, 9, 10]);
console.log(output); // --> 1

