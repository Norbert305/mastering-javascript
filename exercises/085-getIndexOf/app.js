// Write your function here

function getIndexOf (a, string) {
     
    for (let i = 0; i < string.length; i++) {
            if (string[i] === a) {
           return i
            }
      }
      
        return -1
}

var output = getIndexOf('a', 'I am a hacker');
console.log(output); // --> 2