function isEitherEvenAndLessThan9(num1, num2) {
    if (num1 % 2 === 0 && num2 % 2 === 0) {
        return true
    }
    else if (num1 < 9 && num2 < 9) {
        return false
    }
    else {
        return false
    }
}

var output = isEitherEvenAndLessThan9(2, 4);
console.log(output); // --> true

var output = isEitherEvenAndLessThan9(72, 2);
console.log(output); // --> false