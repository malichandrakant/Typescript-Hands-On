
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
// const multiply=(a:number,b:number):number=>{
//     return a*b;
// }
// console.log(multiply(3,5));


// function fullName(first:string,last?:string):string{
//     if(last){
//         return first + " " + last;
//     }
//     return first;
// }
// console.log(fullName("Vikram","Singh"));

// function power(base:number,exp:number=2):number{
//     return base**exp;
// }
// console.log(power(3,3));

// Rest Parameters
// 


// function with Object Parameter

// function printUser(user:{name:string;age:number}){
//     console.log("Name: " + user.name + ", Age: " + user.age);
// }

// printUser({name:"Sonia",age:30});


// Never Return Type
// function errorMsg(msg:string):never{
//     throw new Error(msg);
// }
// errorMsg("This is a critical error");