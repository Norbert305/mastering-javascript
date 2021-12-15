// Write your function here

function getElementsThatEqual10AtProperty (obj, key) {
        let empty = []

        for (let i = 0; i < obj[key].length; i++) {
                if (obj[key][i] == 10) {
                    empty.push(obj[key][i])
                }
        }

        return empty
}

var obj = {
    key: [1000, 10, 50, 10]
  };
  var output = getElementsThatEqual10AtProperty(obj, 'key');
  console.log(output); // --> [10, 10]