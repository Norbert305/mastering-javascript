function getAverageOfElementsAtProperty(obj, key) {
        let counter = 0
    for (let i = 0; i < obj[key].length; i++) {
        counter+=obj[key][i]/obj[key].length
    }
      return counter
}

var obj = {
  key: [1, 2, 3]
};
var output = getAverageOfElementsAtProperty(obj, 'key');
console.log(output); // --> 2  

