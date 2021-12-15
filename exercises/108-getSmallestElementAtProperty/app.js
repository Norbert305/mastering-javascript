var obj = {
  key: [2, 1, 5]
};
function getSmallestElementAtProperty(obj, key) {
      let number = 10
      for (let i = 0; i < obj[key].length; i++) {
        if (obj[key][i] < number) {
          number = obj[key][i]
        }
      }
      return number
}
var output = getSmallestElementAtProperty(obj, 'key');
console.log(output); // --> 1