var obj = {
  key: [1, 2, 3, 4, 5]
};

function getOddElementsAtProperty(obj, key) {
    let array = []
    if (obj[key] !== undefined) {
      for(let i = 0; i < obj[key].length; i++) {
        let x = obj[key][i]
        if (x % 2 !== 0) {
          array.push(x)
        }
      }
    }
    return array
}

var output = getOddElementsAtProperty(obj, 'key');
console.log(output); // --> [1, 3, 5]