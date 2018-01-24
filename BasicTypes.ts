//boolean
let isDone: boolean = false;
console.log("Work is " + isDone);

//Number
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

console.log("Decimal number is: " + decimal + "\nHex Number is: " + hex + "\nBinary number is: " + binary + "\nOctal number is: " + octal);

//String
let color: string = "blue";
color = 'red';

console.log("Your shirt's color is: " + color);

let fullName: string = `Bob Bobbington`;
let age: number = 37;
let sentence: string = `Hello, my name is ${ fullName }.

I'll be ${ age + 1 } years old next month.`;

//let sentence: string = "Hello, my name is " + fullName + ".\n\n" +
//    "I'll be " + (age + 1) + " years old next month.";

//Array
let list:number[] = [1,2,3];
//or
//let list:Array<number> = [1,2,3];

console.log("Your placement is: " + list[0]);

let x: [string, number];
x = ["hella", 10];
console.log("Hmm " + x[0].substr(1));

//Enum
enum Color {Red, Blue, Black}
let c: Color = Color.Blue;



