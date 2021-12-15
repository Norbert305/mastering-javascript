var obj1 = {
    a: 1,
    b: 2
};
var obj2 = {
    b: 4,
    c: 3
};

function extend(obj1, obj2) {
    for (var key in obj2) {
		if(obj1[key] === undefined){
			obj1[key] = obj2[key];	
			}
	    }
	    return obj1;
}

console.log(obj1); // --> {a: 1, b: 2, c: 3}
console.log(obj2); // --> {b: 4, c: 3}