let aboutMe = {
  name: "Pia",
  age: 21,
  course: "Information Systems",
  introduce: function () {
    console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
  }
};

aboutMe.introduce();

// Add new property after creation
aboutMe.hobby = "Reading";
console.log(aboutMe);
