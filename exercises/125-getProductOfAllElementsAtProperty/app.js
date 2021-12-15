var obj = {
  key: [1, 2, 3, 4]
};

function getProductOfAllElementsAtProperty(obj, key) {
    let number = 1
    if (obj[key] !== undefined && obj[key].length > 0) {
  for (let i = 0; i < obj[key].length; i++) {
    number*=obj[key][i]
  }
  return number
}
  return 0
}
var output = getProductOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 24