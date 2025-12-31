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
var user = {
    name: "sagar",
    address: {
        city: "pune",
        state: "MH"
    }
};
console.log(user.address.city);
console.log(user.address.state);
