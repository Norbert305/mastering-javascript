
var obj = {
  key: [1000, 11, 50, 17]
};

function getEvenElementsAtProperty(obj, key) {
   let empty = []
   if (obj[key] !== undefined) {
     for (let i = 0; i < obj[key].length; i++) {
       let x = obj[key][i]
       if (x % 2 === 0) {
         empty.push(x)
       }
     }
   }
   return empty
}
var output = getEvenElementsAtProperty(obj, 'key');
console.log(output); // --> [1000, 50]