
// Optional Parameters in TypeScript

function greet(name:string,age?:number){
    if(age){
        console.log(`Hello, ${name}. you are ${age} years old.`);
    }else{
        console.log(`Hello, ${name}.`);
    }
}


greet("sagar");
greet("Dnyaneshawar",25);
