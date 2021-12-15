function countCharacter(str, char) {
    let counter = 0
    for (let i=0; i < str.length; i++) {
        if (str[i] == char) {
        counter++
        }
        
    }
    return counter
}

var output = countCharacter('I am a hacker', 'a');
console.log(output); // --> 3