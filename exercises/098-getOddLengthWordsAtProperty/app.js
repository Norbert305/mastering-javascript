// Write your function here
function getOddLengthWordsAtProperty (obj,key) {
    let empty = []
    for (let i = 0; i < obj[key].length; i++) {
            if (obj[key][i].length % 2 !== 0) {
                empty.push(obj[key][i])
            }
    }
        return empty
}

var obj = {
    key: ['It', 'has', 'some', 'words']
  };
  var output = getOddLengthWordsAtProperty(obj, 'key');
  console.log(output); // --> ['has', 'words']