// Write your function here
var obj = {
    key: [1, 2, 3]
  };

function  getAverageOfElementsAtProperty (obj,key) {
        let counter = 0
    for (let item of obj[key]) {
        counter += item/obj[key].length
    }
        return counter
}

  var output = getAverageOfElementsAtProperty(obj, 'key');
  console.log(output); // --> 2