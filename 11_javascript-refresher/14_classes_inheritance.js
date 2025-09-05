// Parent class
class Person {
  constructor(name) {
    this.name = name;
  }

  sayHello() {
    console.log("Hi, I am " + this.name);
  }
}

// Subclass
class Student extends Person {
  study() {
    console.log(this.name + " is studying");
  }
}

// Test
const p1 = new Person("Maffia");
p1.sayHello();

const s1 = new Student("Kai");
s1.sayHello();
s1.study();
