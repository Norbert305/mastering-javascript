var obj = {
    a: 2,
    b: 3,
    c: 4
  };

function removeEvenValues(obj) {
    for (var key in obj) {
        if (obj[key] % 2 == 0) {
            delete obj[key]
        }
    }
}

removeEvenValues(obj);
console.log(obj); // --> { b: 3 }