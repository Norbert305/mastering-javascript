function addObjectProperty(obj1, key, obj2) {
       //obj1["manager"] = adding key property manager to person1
       // key property manager = person2 object
        obj1[key] = obj2 
        return obj1
}

var person1 = {
  name: 'Joe Blow',
  role: 'schlub'
};
var person2 = {
  name: 'Mr. Burns',
  role: 'supervisor'
};
addObjectProperty(person1, 'manager', person2);
console.log(person1.manager); // --> { name: 'Mr.Burns', role: 'supervisor' }