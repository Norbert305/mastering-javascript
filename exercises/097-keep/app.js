// Write your function here
function keep(array,two) {
    let empty = []
for (let i = 0; i < array.length; i++) {
    if (array[i] == two) {
        empty.push(array[i])
    }

}
    return empty
}
var output = keep([1, 2, 3, 2, 1], 2) 
console.log(output); //--> [2, 2]