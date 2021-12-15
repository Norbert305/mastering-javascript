var obj = {
  key: [1, 2, 4]
};
function getLargestElementAtProperty(obj, key) {
  let counter = 0
    if (obj[key] !== undefined) {
      for (let i = 0; i < obj[key].length; i++) {
        if (obj[key][i] > counter) {
          counter = obj[key][i]
        }
      }
    }
    return counter
}
var output = getLargestElementAtProperty(obj, 'key');
console.log(output); // --> 4