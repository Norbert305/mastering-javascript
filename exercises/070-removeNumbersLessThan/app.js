var obj = {
    a: 8,
    b: 2,
    c: 'montana'
}
function removeNumbersLessThan(num, obj) {
        for (var key in obj) {
            if (obj[key] < num) {
                delete obj[key]
            }
        }
}

removeNumbersLessThan(5, obj);
console.log(obj); // --> { a: 8, c: 'montana' }
