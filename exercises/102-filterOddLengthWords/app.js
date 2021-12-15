function filterOddLengthWords(words) {
  let array = []
  for (let i = 0; i < words.length; i++) {
      if(words[i].length % 2 !== 0) {
          array.push(words[i])
      }
  }
  return array
}

var output = filterOddLengthWords(['there', 'it', 'is', 'now']);
console.log(output); // --> ['there', "now']