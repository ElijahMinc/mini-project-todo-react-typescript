import React, { useState, useEffect } from 'react';
import { TodoForm } from '../components/TodoForm'
import { TodoList } from '../components/TodoList';
import { ITodo } from '../interfaces';

// interface ITodosPage = {

// }

declare var confirm: (question: string) => boolean


export const TodosPage: React.FC = () => {

   const [todos, setTodos] = useState<ITodo[]>([])

   useEffect(() => {
      const saved = JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[] // парсим как ITodo
      setTodos(saved)
   }, [])

   useEffect(() => {

      localStorage.setItem('todos', JSON.stringify(todos))

   }, [todos])

   const addHandler = (title: string) => {
      console.log('Add new Todo', title)

      const newTodo: ITodo = {
         title: title,
         id: Date.now(),
         completed: false
      }

      setTodos(prev => [newTodo, ...prev])

      // setTodos([newTodo, ...todos])
   }

   const toggleHandler = (id: number): void => {
      setTodos((prev) => prev.map(todo => {
         // if (todo.id === id) {
         //   todo.completed = !todo.completed
         // }
         // return todo
         if (todo.id === id) {
            return {
               ...todo,
               completed: !todo.completed
            }
         }
         return todo
      }))

   }
   console.log(todos)
   const removeHandler = (id: number): void => {
      // const shouldRemove = window.confirm('Вы уверены, что хотите удалить элемент')
      // Или
      const shouldRemove = confirm('Вы уверены, что хотите удалить элемент')
      if (shouldRemove) {
         setTodos(prev => prev.filter(todo => todo.id !== id))
      }
   }

   return (
      <>
         <TodoForm
            onAdd={addHandler}
         />
         <TodoList
            todos={todos}
            onToggle={toggleHandler}
            onRemove={removeHandler}
         />
      </>
   )
}