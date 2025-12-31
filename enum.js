// // 1. Numeric Enum
// enum Direction{
//     UP,
//     DOWN,
//     LEFT,
//     RIGHT
// }
// let move: Direction=Direction.UP;
// let move2: Direction=Direction.LEFT;
// let move3: Direction=Direction.DOWN;
// let move4: Direction=Direction.RIGHT;
// console.log(move);
// console.log(move2);
// console.log(move3);
// console.log(move4);
// // Numeric Enum with custom values
// enum Status{
//     pending=1,
//     Approved=2,
//     Rejected=3
// }
// let s: Status=Status.Approved;
// console.log(s);
// enum UserRole{
//     Admin="ADMIN",
//     User="USER",
//     Guest="GUEST"
// }
// let role:UserRole=UserRole.Admin;
// console.log(role);
// enum PaymentMode{
//     Cash,
//     Card,
//     UPI
// }
// function pay(mode:PaymentMode){
//     if(mode===PaymentMode.UPI){
//         console.log("Pay using UPI")
// }
// }
// pay(PaymentMode.UPI);
// Real life Example
var OrderStatus;
(function (OrderStatus) {
    OrderStatus["Placed"] = "PLACED";
    OrderStatus["Shipped"] = "SHIPPED";
    OrderStatus["Delivered"] = "DELIVERED";
})(OrderStatus || (OrderStatus = {}));
console.log(OrderStatus.Placed);
console.log(OrderStatus.Shipped);
console.log(OrderStatus.Delivered);
