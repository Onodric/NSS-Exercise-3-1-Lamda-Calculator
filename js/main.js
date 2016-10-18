// 5. When the user performs one of the operations, output the result to another DOM element of your choice.
var addBtn = document.getElementById("add");
var subtrBtn = document.getElementById("subt");
var multBtn = document.getElementById("mult");
var divBtn = document.getElementById("divide");

var num1 = 'null';
var num2 = 'null';

var insertion = document.getElementById("injectionPoint");

document.getElementById("num1").addEventListener("keyup", function(){
  num1 = parseInt(document.getElementById("num1").value);
  console.log('num1: ', num1)
});

document.getElementById("num2").addEventListener("keyup", function(){
  num2 = parseInt(document.getElementById("num2").value);
  console.log('num2: ', num2)
});

// Create a function that multiplies two numbers passed in as arguments. Return the product.
function addition(n, m){
  console.log('running addition: ' + n + "&" + m);
  return n+m;
};

// Create a function that adds two numbers passed in as arguments. Return the sum.
function multiplication(n, m){
  console.log('running multiplication');
  return n*m;
};

// Create a function that subtracts two numbers passed in as arguments. Return the difference.
function subtraction(n, m){
  console.log('running subtraction');
  return n-m;
};

// Create a function that divides two numbers passed in as arguments. Return the quotient.
function division(n, m){
  console.log('running division');
  return n/m;
};

function checkValid(){
  console.log('Running checkValid');
  if(num1 === 'null' || num2 === 'null'){
    alert("Please enter Valid Numbers in the Supplied Fields...");
  };
}

/*
Create a function that accepts three arguments.
  1. First number
  2. Second number
  3. A function that performs an operation on them
Return the value of the operation.
*/

function calculatorRex(n, m, referencedFunction){
  return referencedFunction(n, m);
}

document.addEventListener("keydown", function(){
  if(event.keyCode === 13){
    event.preventDefault();
    alert("Please choose an operation.");
  };
});

// 3. In your JavaScript, put an event listener on each of the buttons.
addBtn.addEventListener("click", function(event){
  console.log('click on ', event.target);
  checkValid();
  insertion.innerHTML = calculatorRex(num1, num2, addition);
});

multBtn.addEventListener("click", function(event){
  console.log('click on ', event.target);
  checkValid();
  insertion.innerHTML = calculatorRex(num1, num2, multiplication);
});

subtrBtn.addEventListener("click", function(event){
  console.log('click on ', event.target);
  checkValid();
  insertion.innerHTML = calculatorRex(num1, num2, subtraction);
});

divBtn.addEventListener("click", function(event){
  console.log('click on ', event.target);
  checkValid();
  insertion.innerHTML = calculatorRex(num1, num2, division);
});

