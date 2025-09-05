let aboutMe = {
    name: "Maffia",
    age: 19,
    course: "Computer Science",
    introduce: function () {
        console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
    }
};

aboutMe.introduce();
aboutMe.hobby = "Sleeping";
console.log(aboutMe);
