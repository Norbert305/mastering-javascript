function isOldEnoughToDrink(age){
   
        if (age > 20) {
            return true
        }
        else {
            return false
        }

}
var output = isOldEnoughToDrink(22);
console.log(output); // --> true
