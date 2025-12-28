// Boolean type examples
let isActive: boolean = true;
let hasPermission = false; 
let isEligible:boolean=true;

let isLoggedIn:boolean=false;
// Output the values
console.log(isActive);
console.log(hasPermission);

console.log(isEligible);

console.log(isLoggedIn);


// Number type examples

let decimal1:number=4; 
let hexaNumber:number=0x1A;
let binaryNumber:number=0b1010;
let octalNumber:number=0o12;
let floatNumber:number=34.5;

// Output the values
console.log(decimal1);
console.log(hexaNumber);
console.log(binaryNumber);
console.log(octalNumber);
console.log(floatNumber);


// String type examples

let myName:string="chandrakant";
let passion:string="Programming";
let song:string='saiyara';
let year:number=2026;
let msg:string=`Happy New year ${year} TypeScript Learner!`;


// Output the values
console.log(myName);
console.log(passion);
console.log(song);
console.log(msg);


// BigInt type example

const big1: bigint = 1234567890123456789012345n;
const big2: bigint = BigInt("987654321098765432109876");

console.log(big1 + big2);


// Using Symbol as Object Key
let id = Symbol("id");

let user = {
  name: "Chandrakant",
  [id]: 101
};

console.log(user[id]);


// 101







