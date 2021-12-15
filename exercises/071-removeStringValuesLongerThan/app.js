var obj = {
    name: 'Montana',
    age: 20,
    location: 'Texas'
  };

function removeStringValuesLongerThan(num, obj) {
        for (var key in obj) {
            if (obj[key].length > num) {
                delete obj[key]
            }
        }

}

removeStringValuesLongerThan(6, obj);
console.log(obj); // { age: 20, location: 'Texas' }
