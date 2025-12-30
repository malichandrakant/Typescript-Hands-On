// String Declarations
var str = "Hello, TypeScript!";
var str2 = 'Welcome to string operations.';
var str3 = "This is a template ".concat(str, " string in TypeScript.");
// Length of String
console.log("Length of str:" + str.length);
console.log(str);
console.log(str2);
console.log(str3);
// Accessing Characters
console.log("Character at index 0:" + str[0]);
console.log("Character at index 7:" + str.charAt(7));
// Change Case
console.log("Uppercase:" + str.toUpperCase());
console.log("Lowercase:" + str.toLowerCase());
// Trimming
var strWithSpaces = "   TypeScript String Operations   ";
console.log("Before Trim:'" + strWithSpaces + "'");
console.log("After Trim:'" + strWithSpaces.trim() + "'");
//console.log("After Trim Start:'" + strWithSpaces.trimStart() + "'");
//console.log("After Trim End:'" + strWithSpaces.trimEnd() + "'");
// Substring
console.log("Substring(0,5):" + str.substring(0, 5));
console.log("slice(0,5):" + str.slice(0, 5));
console.log("slice(-10):" + str.slice(-10)); // last 10 characters
// Replace text
console.log("Replace 'TypeScript' with 'TS':" + str.replace("TypeScript", "TS:"));
console.log("Replace all 'e' with 'E':" + str.replace(/e/g, "E"));
//Conatination
var greet = str.concat(" ", str2);
console.log("Concatenated String:" + greet);
// Check Presence
// console.log("Includes 'TypeScript':"+str.includes("TypeScript"));
// console.log("Starts with 'Hello':"+str.startsWith("Hello"));
// console.log("Ends with 'Operations.':"+str.endsWith("Operations."));    
// Find Index
console.log("Index of 'TypeScript':" + str.indexOf("TypeScript"));
console.log("Last Index of e:" + str.lastIndexOf("e"));
// Repeat String
console.log("Repeat String 3 times:" + str.repeat(3));
