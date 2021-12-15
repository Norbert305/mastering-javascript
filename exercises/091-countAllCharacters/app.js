// Write your function here
function countAllCharacters (string) {
        let obj = {}
    for (let i = 0; i < string.length; i++) {
        let key = string[i]
    if (obj[key] === undefined) {
        obj[key] = 1
    }
    else {
        obj[key]++
    }
    }
    return obj
}

var output = countAllCharacters('banana');
console.log(output); // --> {b: 1, a: 3, n: 2}