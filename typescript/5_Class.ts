class Typescript {
   version: string
   constructor(version: string) {
      this.version = version
   }

   info(name: string) {
      return `[${name}]: Typescript version is ${this.version}`
   }
}



class Car {
   readonly model: string
   readonly numbersOfWheels: number = 4

   constructor(theModel: string) {
      // readonly значение можно перезаписать только внутри конструктора
      this.model = theModel
   }
}

// Запись аналогична записи выше
// class Car {
//    readonly numbersOfWheels: number = 4
//    constructor(readonly model: string) {}
// }


// ============ Модификаторы ===============

type Voice = string

class Animal {
   // если не пишим никаких модификаторов
   // по умолчанию - public
   protected voice: Voice
   // protected - создает доступны в родительском классе
   // и так же в тех, которые от него наследуются
   // в наследуемом классе мы не можем обратиться к voice
   public color: string = 'black'
   // private - доступен только внутри родительского класса
   // в дочерних обратиться к методам\свойствам уже нельзя
   private go() {
      console.log('go')
   }
   constructor() {
      this.go()
   }
}


class Cat extends Animal {
   public setVoice(voice: string) {
      this.voice = voice
   }
}

const cat = new Cat()