function countCharacter(str, char) {
    // your code here

    let x = str.split('')
    
    let counter = 0


        for (let i = 0; i < x.length; i++) {
            if (x[i] === char) {
                counter++
            }
        }
    return counter
}

let output = countCharacter('I am a hacker', 'a');
console.log(output); // --> 3