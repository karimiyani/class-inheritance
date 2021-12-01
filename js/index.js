// inheritance:

// person : name, age

//programmer : person + code
class Person {
    constructor (_name, _age) {
        this.name = _name ;
        this.age = _age ;
    }
    introduce() {
       console.log(`the person name is ${this.name} and  ${this.age} years old`)
    }

}
const person1 = new Person("gomnam", 100);
console.log(person1);
// Person {name: 'gomnam', age: 100}


console.log(person1.introduce());
// the person name is gomnam and  100 years old

class Programmer extends Person {
    constructor (_name, _age, _experties) {
        super (_name, _age);
        this.experties = _experties;
    }
    code (){
        console.log(`${this.name}'s experties is ${this.experties}`);
    }
}

const programmer2 = new Programmer("gomnam", 100," js");
console.log(programmer2);
// Programmer {name: 'gomnam', age: 100, experties: ' js'}
console.log(programmer2.introduce());
// the person name is gomnam and  100 years old
console.log(programmer2.code());
// gomnam's experties is  js