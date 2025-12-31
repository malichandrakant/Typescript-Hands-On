// // Simple Object
// let student = {
//     name: "chandrakant",
//     age: 22,
//     isActive: true
// };

// console.log(student);


// interface Student{
//     name:string;
//     greet():string;

// }

// let student:Student={
//     name:"chandrakant",
//     greet(){
//         return "Hello"+this.name;
//     }
// };
// console.log(student.greet());



let user={
    name:"sagar",
    address:{
        city:"pune",
        state:"MH"
    }
};

console.log(user.address.city);
console.log(user.address.state);



interface S{
    name:string;
    age:number;

}
let student:Student={
    {name:"sagar",age:21},
    {name:"s",age:23}

};
