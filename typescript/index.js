class Person {

   constructor(name, surname) {
      this.name = name
      this.surname = surname
   }
   info() {
      return this.name + this.surname
   }
}


// class Gamer extends Person {
//    constructor(name, surname) {
//       super(name, surname)
//    }

//    set id(value) {
//       this.id = value
//    }
//    // set id(value) {
//    //    this.id = value
//    // }
// }


class Ilya {
   surname;
   #age;
   // constructor(surname, age) {
   //    this.surname = surname
   //    this.#age = age
   // }
   get nameIs() {
      return this.name
   }
   set nameIs(value) {
      this.name = value
   }
}


// class Child extends Ilya {
//    constructor() {
//       super()
//    }
//    set surname(value) {
//       this.surname = value
//    }
// }
const me = new Ilya('Protsenko', 22)

// const child = new Child()

me.nameIs = 'Ilya'

console.log(me)

// child.surname = 'Hedsadasd'

// console.log(child)