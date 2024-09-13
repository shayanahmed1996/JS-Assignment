// CHAPTER 1
//ALERTS

//1)
// alert("Hello")

//2)
// alert("Error! Please enter a valid password.")

//3)
// alert("Welcome to JS Land... \nHappy Coding!")

//4)
// alert("Welcome to JS Land...")
// alert("Happy Coding!")

//5)
// console.log("Hello... I can run JS through my web browser console");


// CHAPTER 2
// VARIABLES FOR STRING

//1)
// var username;

//2)
// var myName = "Shayan Ahmed";

//3)
// var message;
// message = "Hello World";
// alert(message)

// 4)
// var studentName = "Jhone Doe";
// var studentAge = "15 years old";
// var studentCourse = "Certified Mobile Application Development";
// alert(studentName);
// alert(studentAge);
// alert(studentCourse);

//5)
// var pizza = " PIZZA \n PIZZ \n PIZ \n PI \n p";
// alert(pizza)

//6)
// var email = "Example@gmail.com"
// alert("My Email address is "  + email)

//7)
// var book = "A smarter way to learn JavaScript";
// alert("I am trying to learn from the Book" + " " + book);

//8)
//9)

//CHAPTER 3
// VARIABLES FOR NUMBERS
// 1)
// var age = 19;
// alert(age);

// 2)
// var visited = 14
// alert(You have visited this website ${visited} times);
// alert("You have visited this website" +visited+ "times");


// 3)
// var birthYear = 2005
// console.log(My birth year is ${birthYear});

// 4)
// var visitorName = "John Doe"
// var productTitle = "T-shirts(s)"
// var quantity = 5
// console.log(${visitorName} ordered ${quantity} ${productTitle} on XYZ Clothing Store);






// CHAPTER 4
// VARIABLE NAMES: LEGAL & ILLEGAL

//1)
// var name1 = "Shayan", name2 = "Ali", name3 = "Ahmed";

//2)
// Legal
// var name = "shayan";
// var name123 = "shayan";
// var $name = "shayan";
// var _name = "shayan";
// var name_last = "shayan";

// Illegal
// var last name = "shayan";
// var 123name = "shayan";
// var name& = "shayan";
// var first-name = "shayan";
// var 22name = "shayan";

//3)
//a)
// console.log("Rules for naming JS variables");
// //b
// console.log("Variable names can only contain alphabets, numbers, $ and _. For example $my_1stVariable");
// // c
// console.log("Variable must begin with a letter, $ or _. For example $name, _name or name");
// //d
// console.log("Variables names are case sensitive");
// //e
// console.log("Variables names should not be JS keywords");

// CHAPTER 5
// MATH EXPRESSIONS

//1)
// var num1 = 3;
// var num2 = 5;
// var sum = num1 + num2;
// console.log(sum);

//2)
// Subtraction
// var num1 = 3;
// var num2 = 5;
// var sum = num1 - num2;
// console.log(sum);

// Multiplication
// var num1 = 3;
// var num2 = 5;
// var sum = num1 * num2;
// console.log(sum);

// Division
// var num1 = 20;
// var num2 = 5;
// var sum = num1 / num2;
// console.log(sum);

// Modulus
// var num1 = 20;
// var num2 = 5;
// var sum = num1 % num2;
// console.log(sum);

//3)
//a)
// var num1;
// console.log("Value after variable declaration is :", num1);
// num1 = 5;
// console.log("Initial Value :", num1);
// ++num1;
// console.log("Value after increament is:", num1);
// num1 = num1 + 7;
// console.log("Value after addition is:", num1);
// --num1;
// console.log("Value after decrement is :", num1);
// num1 = num1 % 3;
// console.log("The remainder is :", num1);

//4)
// var movieTcket = 600
// var totalPrice = movieTcket * 5
// console.log("Total cost to buy 5 tickets to a movie is",totalPrice);

//5)
// console.log("Table of 4");
// console.log("4 x 1 =",4*1);
// console.log("4 x 2 =",4*2);
// console.log("4 x 3 =",4*3);
// console.log("4 x 4 =",4*4);
// console.log("4 x 5 =",4*5);
// console.log("4 x 6 =",4*6);
// console.log("4 x 7 =",4*7);
// console.log("4 x 8 =",4*8);
// console.log("4 x 9 =",4*9);
// console.log("4 x 10 =",4*10);

//6)
// var celsiusTemp = 25;
// var CtoF = (celsiusTemp * 9) / 5 + 32;
// console.log(`${celsiusTemp}C is ${CtoF}F`);

// var fahrenheitTemp = 70;
// var FtoC = ((fahrenheitTemp - 32) * 5) / 9;
// console.log(`${fahrenheitTemp}F is ${FtoC}C`);

// //7
// var itemOnePrice = 650;
// var itemTwoPrice = 100;
// var itemOneQuantity = 3;
// var itemTwoQuantity = 7;
// var shippingCharges = 100;
// var para = document.getElementById("para");
// para.innerHTML = `Price of Item 1 is ${itemOnePrice} <br> Quantity of Item 1 is ${itemOneQuantity} <br> Price of Item 2 is ${itemTwoPrice} <br> Quantity of Item 2 is ${itemTwoQuantity} <br> Shipping Charges is ${shippingCharges} <br> Total cost of your order is ${
//   itemOnePrice * itemOneQuantity +
//   itemTwoPrice * itemTwoQuantity +
//   shippingCharges
// } `;

//8
// var totalMarks = 980;
// var obtainedMarks = 804;
// var percentage = (obtainedMarks / totalMarks) * 100;
// console.log(percentage);


// CHAPTER 6 to 9
// MATH EXPRESSIONS

//1)
// var a = prompt("Enter A Number");
// console.log("RESULT \nThe value of a is :", a);
// ++a;
// console.log("The value of ++a is :", a);
// console.log("Now the value of a is :", a);
// console.log("The value of a++ is :", a);
// a++;
// console.log("Now the value of of a is:", a);
// --a;
// console.log("The value of --a is:", a);
// console.log("Now the value of a is :", a);
// console.log("the value of a-- is:", a);
// a--;
// console.log("Now the value of a is :", a);

//2)
// var a = 2;
// var b = 1;
// var result = --a - --b + ++b + b--;
// console.log(result);

//3)
// var greeting = prompt("Write Greeting")
// console.log(greeting);

//5)
// var num = parseInt(prompt("Enter A Number"));
// if (num) {
//   console.log("Table of", num);
//   console.log(`${num} x 1 = ${num * 1}`);
//   console.log(`${num} x 2 = ${num * 2}`);
//   console.log(`${num} x 3 = ${num * 3}`);
//   console.log(`${num} x 4 = ${num * 4}`);
//   console.log(`${num} x 5 = ${num * 5}`);
//   console.log(`${num} x 6 = ${num * 6}`);
//   console.log(`${num} x 7 = ${num * 7}`);
//   console.log(`${num} x 8 = ${num * 8}`);
//   console.log(`${num} x 9 = ${num * 9}`);
//   console.log(`${num} x 10 = ${num * 10} `);
// } else {
//   console.log("Table of 5");
//   console.log("5 x 1 =", 5 * 1);
//   console.log("5 x 2 =", 5 * 2);
//   console.log("5 x 3 =", 5 * 3);
//   console.log("5 x 5 =", 5 * 4);
//   console.log("5 x 5 =", 5 * 5);
//   console.log("5 x 6 =", 5 * 6);
//   console.log("5 x 7 =", 5 * 7);
//   console.log("5 x 8 =", 5 * 8);
//   console.log("5 x 9 =", 5 * 9);
//   console.log("5 x 10 =", 5 * 10);
// }



var a = 5;
a + 5;
alert(a);