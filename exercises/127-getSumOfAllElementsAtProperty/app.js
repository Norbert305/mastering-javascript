var obj = {
    key: [4, 1, 8]
};

function getSumOfAllElementsAtProperty(obj, key) {
    if(obj[key] == undefined || typeof obj[key] !== "object" || obj[key].length === 0) return 0
    let number = 0
for (let item of obj[key]) {
    number+=item
}
return number
}
var output = getSumOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 13

