function isPersonOldEnoughToDrive(person) {
      for (let age in person) {
        if (person.age > 15) {
          return true
        }
        else {
          return false
        }
      }
}

var obj = {
  age: 16
};
var output = isPersonOldEnoughToDrive(obj);
console.log(output); // --