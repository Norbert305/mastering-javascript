function computeSummationToN(n) {
    let sum = 0
    for(let i = 1; i <=n; i++) {
            sum+=i
    }
    return sum;
}

var output = computeSummationToN(6);
console.log(output); // --> 21
//You are looping with a regular for loop through a number.
//If the number is 5 for example: 1+2+3+4+5=15
//Use a variable to equal = 0. The sum the variable with i.
//Return the variable inside of the function. :)