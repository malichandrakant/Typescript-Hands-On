class Student {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  display() {
    console.log(this.name, this.age);
  }
}

let s1 = new Student("Chandrakant", 22);
s1.display();
