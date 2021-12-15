var obj = {
  key: [2, 1, 5]
};

function getSquaredElementsAtProperty(obj, key) {
    let empty = []
    if (obj[key] !== undefined) {
    for (let i = 0; i < obj[key].length; i++) {
      let x = obj[key][i]
      if (x**2) {
        empty.push(x**2)
      }
    }
  }
    return empty
}

var output = getSquaredElementsAtProperty(obj, 'key');
console.log(output); // --> [4, 1, 25]