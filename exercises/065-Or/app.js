function or(expression1, expression2) {
  return expression1 !== false && expression2 !==true;
}

var output = or(true, false);
console.log(output); // --> true;