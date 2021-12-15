function filterEvenLengthWords(words) {
    let array = []
    for (let i = 0; i < words.length; i++) {
    if (words[i].length % 2 === 0) {
        array.push(words[i])
    }
    }
    return array
}

var output = filterEvenLengthWords(['word', 'words', 'word', 'words']);
console.log(output); // --> ['word', 'word']