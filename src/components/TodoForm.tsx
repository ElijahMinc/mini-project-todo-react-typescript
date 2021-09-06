import React, {useState, useRef} from 'react';

interface TodoFormProps{
   onAdd(title: string): void
}


// export const TodoForm: React.FC<{onAdd(title: string): void}> = (props) => { // в скобочках указываем что нам приходит
// Или создаем interface props-ов
// в < > указываем что конкретно к нам приходит
export const TodoForm: React.FC<TodoFormProps> = (props) => { 
   const ref = useRef<HTMLInputElement>(null) // работаем с HTML Input Element
   // const [title, setTitle] = useState<string>('')

   // const changeHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
   //    // console.log(title)
   //    setTitle(event.target.value)
   // }

   const keyPressHandler = (event: React.KeyboardEvent): void => {
      if(event.key === 'Enter'){
         props.onAdd(ref.current!.value)
         ref.current!.value = ''
         // ref.current!.value = ''
         // изначально у нас состояние null, но мы наперед знаем, что там будет ссылка на дом элемент.
         // потому указываем восклицательный знак перед value
         // setTitle('')
      }
   }

   return (
      <div className="input-field mt-2">
         <input
            ref={ref}
            // onChange={changeHandler}
            // value={title}
            type="text"
            id="title"
            placeholder="Введите название дела"
            onKeyPress={keyPressHandler}
         />
         <label htmlFor="title" className="active">Введите название дела</label>
      </div>
   )
}