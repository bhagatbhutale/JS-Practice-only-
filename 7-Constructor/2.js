// 👉 Classes --> ES6 --> Privatigation
// Define : Systactiol sugar of Constructor Function
// Write give a name of Capital letters
class Details {
  constructor(name, surname, city, income) {
    this.name = name;
    this.surname = surname;
    this.city = city;
    this.income = income;
  }
  greet() {
    console.log(
      `My name is ${this.name} and My City is ${this.city} and income ${this.income}`
    );
  }
}

//🔸Inheritance 
class Iphone extends Details {
  constructor(name, surname, city, income, rollNo) {
    // it will run the parent constructor
    super(name, surname, city, income);
    this.rollNo = rollNo;
  }
  greet3() {
    console.log(
      `My name is ${this.name} and My City is ${this.city} and income ${this.income}`
    );
  }
}

let p1 = new Details("Bhagat", "Bhutale", "Raigad", 20000);
let p2 = new Iphone("Ajay", "Bhutale", "Pune", 2000, 1);
console.log(p1);
p1.greet();
console.log(p2);
p2.greet();

// p1.__proto__ === Object.prototype --> false
// p1.__proto__ === Details.prototype --> true
// p1.__proto__.__proto__ ===Object.prototype --> true
// p2.__proto__ === Iphone.prototype --> true
// p2.__proto__.__proto__ === Details.prototype --> true
// p2.__prot__.__proto__.__proto__ === Object.prototype --> true