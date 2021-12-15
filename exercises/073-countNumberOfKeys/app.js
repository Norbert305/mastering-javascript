var obj = {
    a: 1,
    b: 2,
    c: 3
  };

function countNumberOfKeys(obj) {
    let counter = 0
    for (var key in obj) {
        key = counter++
    }
    return counter
}

var output = countNumberOfKeys(obj);
console.log(output); // --> 3