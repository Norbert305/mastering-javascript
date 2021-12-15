// Write your function here
function findMinLengthOfThreeWords (a,b,c) {

    if (a.length < b.length && a.length < c.length) {
        return a.length;
}
else if (b.length < c.length && b.length < a.length) {
        return b.length;
}
else if (c.length < b.length && c.length < a.length) {
        return c.length;
}

}

var output = findMinLengthOfThreeWords('a', 'be', 'see');
console.log(output); // -->