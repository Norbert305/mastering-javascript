// Write your function here
function getElementsLessThan100AtProperty (obj, key) {

        let empty = [] 
        for (let i = 0; i < obj[key].length; i++) {
            if (obj[key][i] < 100) {
                empty.push(obj[key][i])
            }
        }
            return empty
}

var obj = {
    key: [1000, 20, 50, 500]
  };
  var output = getElementsLessThan100AtProperty(obj, 'key');
  console.log(output); // --> [20, 50]