let value:number | string;
value=10;
value="Ten";

console.log(value);



function printId(id:number | string){
    console.log(id);

}

printId(101);
printId("ABC123");


let data:(number |string)[]=[1,"Two",3,"Four",5];
data.push(6);
data.push("Seven");     
console.log(data);

type Status = "success" | "error" | "loading";

let currentStatus: Status;
currentStatus = "success";  

