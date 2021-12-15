var obj = {
 key: ['Jamil', 'Albrey']
};
function getElementOfArrayProperty(obj, key, index) {
        if (obj[key] !== undefined) {
            return obj[key][index]
        }
}

var obj = {
    key: ['Jamil', 'Albrey']
   };
   var output = getElementOfArrayProperty(obj, 'key', 0); 
   console.log(output); // --> 'Jamil'