import React from 'react';
import { ITodo } from './../interfaces';
type TodoListProps = {
   todos: ITodo[] // or any[]
   onToggle(id: number): void
   onRemove: (id: number) => void
}


export const TodoList: React.FC<TodoListProps> = ({ todos, onToggle, onRemove }) => {
   if (!todos.length) {
      return <h3 className="center">Пока дел нет!</h3>
   }


   const removeHandler = (event: React.MouseEvent, id: number) => {
      // event.stopPropagation();
      event.preventDefault();
      onRemove(id);
   }
   return (
      <ul>
         {todos.map(todo => {
            const classes: string[] = ['todo']
            if (todo.completed) {
               classes.push('completed')
            }
            return (
               <li className={classes.join(' ')} key={todo.id}>
                  <label>
                     <input type="checkbox" checked={todo.completed} onChange={() => onToggle(todo.id)} />
                     <span>{todo.title}</span>
                     <i
                        className="material-icons red-text"
                        onClick={(event) => removeHandler(event, todo.id)}
                     >
                        delete
                     </i>
                  </label>
               </li>
            )
         })}
      </ul>
   )
}