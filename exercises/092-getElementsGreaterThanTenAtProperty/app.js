// Write your function here
function getElementsGreaterThan10AtProperty(obj,key) {
                let empty = []
        for (let i = 0; i < obj[key].length; i++) {
                    if (obj[key][i] > 10) {
                        empty.push(obj[key][i])
                    }
        }
            return empty
}

var obj = {
    key: [1, 20, 30]
  };
  var output = getElementsGreaterThan10AtProperty(obj, 'key');
  console.log(output); // --> [20, 30]