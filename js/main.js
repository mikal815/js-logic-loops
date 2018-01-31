console.log('JS Logic Loops');

/*is statements*/
if('foo' === 'foo'){
  console.log('Of course theses strings are equal');
}

if(5 > 10){
  console.log('You will NEVER see this.');
} else {
  console.log('You will ALWAYS see this!');
}

// write a new if statement
// that checks if a number stored in a var
// is greater than 100

var num = 2000
if(num > 100){
  console.log('Greater than 100!');
} else {
  console.log(num + ' is not > 100');
}

// is a string in a variable, the same as anothers string?

var myString = 'foo';
if(myString === 'foo'){
  console.log('Hey, here you are!');
} else {
  console.log('You are in the else');
}


// The else if statement
if(5 < 4){
  console.log('You will not end up here');
} else if (5 >= 5){
  console.log('You will end up here');
} else {
  console.log('You will not end up here either');
}

// A function that returns something
function topSpeed(){
  return (75 + 5); // return th number 80
}

console.log(topSpeed()); // logs the number 80

// write a function that accepts arguments
// This now means that we are required to provide values for those arguments
// when we invoke the function
function addNumbers(num1, num2){
  return (num1 + num2);
}
console.log(addNumbers(100, 3000));
if(addNumbers(50, 50 === 100)){
  console.log('Congrats!!');
}
