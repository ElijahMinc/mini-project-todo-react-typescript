const isFetching: boolean = true
const isLoading: boolean = false


const int: number = 42
const float: number = 4.2


const str: string = 'Hello TypeScript'

const numberArray: number[] = [1, 1, 2, 3, 5, 8]
// Запись выше идентична с запиьсю ниже
const numberArray2: Array<number> = [1, 1, 2, 3, 5, 8]


const stringArray: string[] = ['Hello', 'TypeScript']

// Tuple - тип данных в TypeScript, содержащий различные типы данных в массиве
const contact: [string, number] = ['Vladilen', 1234567]

// Any - тип
// Нужно переопределить тип данных
let variable: any = 42
variable = 'New String'
variable = []

// ----------- FUNCTIONS ------------
// Void - значит, что функция ничего нам не вернет
function sayMyName(name: string): void {
   console.log(name)
}

sayMyName('Ilya')

// Never - новый тип данный в typescript, отрабатывающий в двух случаях:
// 1) Когда компилятор видит потенциальную ошибку
// 2) Когда компилятор видит бесконечное выполнение задачи
function throwError(message: string): never {
   throw new Error(message)
}


function infinite(): never {
   while (true) {

   }
}

// Type - конструкция, позволяющая создавать свои собственные типы

type Login = string

const login: Login = 'admin'
// const login2: Login = 1235 // так не получится сделать

type ID = string | number // тип АЙДИ может быть как строкой так и числом
const id1: ID = 1234
const id2: ID = '1234'
// const id3: ID = true // так уже сделать не получится


type SomeType = string | null | undefined




type Some = {
   
}