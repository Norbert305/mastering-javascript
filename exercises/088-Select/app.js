// Write your function here
function select (arr,obj) {
let empty = {}
for (let i = 0; i < arr.length; i++) {
    for(let key in obj) {
        if (arr[i] == key) {
            empty[key] = obj[key]
        }
    }
}
return empty
}

var arr = ['a', 'c', 'e'];
var obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
};
var output = select(arr, obj);
console.log(output); // --> { a: 1, c: 3 }