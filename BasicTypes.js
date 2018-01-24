//boolean
var isDone = false;
console.log("Work is " + isDone);
//Number
var decimal = 6;
var hex = 0xf00d;
var binary = 10;
var octal = 484;
console.log("Decimal number is: " + decimal + "\nHex Number is: " + hex + "\nBinary number is: " + binary + "\nOctal number is: " + octal);
//String
var color = "blue";
color = 'red';
console.log("Your shirt's color is: " + color);
var fullName = "Bob Bobbington";
var age = 37;
var sentence = "Hello, my name is " + fullName + ".\n\nI'll be " + (age + 1) + " years old next month.";
//let sentence: string = "Hello, my name is " + fullName + ".\n\n" +
//    "I'll be " + (age + 1) + " years old next month.";
//Array
var list = [1, 2, 3];
//or
//let list:Array<number> = [1,2,3];
console.log("Your placement is: " + list[0]);
var x;
x = ["hella", 10];
console.log("Hmm " + x[0].substr(1));
//Enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Blue"] = 1] = "Blue";
    Color[Color["Black"] = 2] = "Black";
})(Color || (Color = {}));
var c = Color.Blue;
