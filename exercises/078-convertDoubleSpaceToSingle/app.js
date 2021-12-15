function convertDoubleSpaceToSingle(str) {
    let noSpace = str.split(' ').filter(words => words !== '').join(' ');
  
    return noSpace;
}
var output = convertDoubleSpaceToSingle("string  with  double  spaces");
console.log(output); // --> "string with double spaces"