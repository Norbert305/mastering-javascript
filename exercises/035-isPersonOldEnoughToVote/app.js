function isPersonOldEnoughToVote(person) {
    for(let age in person) {
        if (person.age > 17) {
          return true
        }
        else {
          return false
        }
    }
}

var obj = {
  age: 19
};
var output = isPersonOldEnoughToVote(obj);
console.log(output); // --> true