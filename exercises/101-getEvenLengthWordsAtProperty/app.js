var obj = {
  key: ['a', 'long', 'game']
};
function getEvenLengthWordsAtProperty(obj, key) {
  let array = []
  if (obj[key] !== undefined) {
        for (let i = 0; i < obj[key].length; i++) {
          if (obj[key][i].length % 2 === 0) {
            array.push(obj[key][i])
          }
        }
       
      }
      return array
}


var output = getEvenLengthWordsAtProperty(obj, 'key');
console.log(output); // --> ['long', 'game']