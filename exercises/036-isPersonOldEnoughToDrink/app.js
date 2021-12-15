function isPersonOldEnoughToDrink(person) {
      for (let age in person) {
        if (person.age < 21) {
          return false
        }
        else {
          return true
        }
      }
}

var obj = {
  age: 16
};
var output = isPersonOldEnoughToDrink(obj);
console.log(output); // --> false