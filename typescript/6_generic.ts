type IsStatus = 'completed' | 'error'


function setStatus(status: IsStatus): void {
   console.log(status)
}



const arrayOfNumbers: Array<number> = [1, 2, 3, 4, 5];
const arrayOfString: Array<string> = ['Hello', 'Ilya'];


function reverse<T>(array: T[]): T[] {
   return array.reverse()
}

reverse(arrayOfString)
reverse(arrayOfNumbers)