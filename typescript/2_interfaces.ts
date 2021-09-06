// Интерфейсы создаются через заглавную букву I
interface IRect {
   readonly id: string
   //readonly - модификатор, позволяющий сделать свойство только для чтения
   color?: string
   // Знак ? - означает, что параметр не обязательный
   size: {
      width: number
      height: number
   }
}

// Теперь мы можем создавать объекты, которые будут типов React

const rect1: IRect = {
   id: '1234',
   size: {
      width: 20,
      height: 30
   },
   color: '#ccc'
}
const rect2: IRect = {
   id: '12345',
   size: {
      width: 50,
      height: 50
   }
}

rect2.color = 'black'

// У нас есть об
const rect3 = {} as IRect
const rect4 = <IRect>{}

interface IRectWithArea extends IRect {
   getArea: () => number // указываем тип данных, который должен быть возвращен
}


const rect5: IRectWithArea = {
   id: '123',
   size: {
      width: 2,
      height: 2
   },
   getArea(): number {
      return this.size.width * this.size.height
   }
}


// =====================

interface IClock {
   time: Date
   setTime(date: Date): void
}
// Если мы хотим, чтобы наш класс наследовался от интерфейса
// нужно указать ключевое слово "implements" 
class Clock implements IClock {
   time: Date = new Date()
   setTime(date: Date) {
      this.time = date
   }
}
// =====================


// Случается, что свойств много и переписывать все - затратно по времени
// поэтому мы пишем ключ, его тип и после указываем в качестве значния так же тип

interface IStyles {
   [key: string]: string
   // border: string: string
}

const css: IStyles = {
   border: '1px solid black',
   marginTop: '2px',
   borderRadius: '5px'
}