var obj = {
    key: [4, 1, 8]
};

function getSumOfAllElementsAtProperty(obj, key) {
    if(obj[key].length ===0) return 0
    let number = 0
for (let item of obj[key]) {
    number+=item
}
return number
}
var output = getSumOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 13

//if(arr.length ===0) return 0
//let shortest = arr[0].length
//for (let i = 0; i < arr.length; i++) {
//if (arr[i].length < shortest) {
  // shortest=arr[i].length
//}
//}
//return shortest