var obj = {
  key: [1, 2, 3]
};
function getAllButLastElementOfProperty(obj, key) {
  let empty = []
  if (obj[key] !== undefined) {
    for (let i = 0; i < obj[key].length; i++) {
        let x = obj[key][i]
        if (x == 1 || x == 2) {
          empty.push(x)
        }
    }
  }
  return empty
}

var output = getAllButLastElementOfProperty(obj, 'key');
console.log(output); // --> [1,2]