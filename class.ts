class Student{
    name:string;
    age:number;

}
constructor(name:string,age:number){
    this.name=name;
    this.age=age;
}

display():void{
    console.log(this.name,this.age);

}
}
let student1=new Student("Alice",20);
student1.display();

