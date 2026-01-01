//  basic function to add two numbers
// function add(a:number,b:number):number{
//     return a+b;
// }
// console.log(add(4,4));
// function without return type
// function greet(name:string){
//     console.log("Hello " + name);
// }
// greet("Ajay");
// Arrow function
var multiply = function (a, b) {
    return a * b;
};
console.log(multiply(3, 5));
function fullName(first, last) {
    if (last) {
        return first + " " + last;
    }
    return first;
}
console.log(fullName("Vikram", "Singh"));
