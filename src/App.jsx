import './component/todo/todo.css'
import TodoData from './component/todo/todoData'
import TodoNew from './component/todo/todoNew'
import imgLogo from './assets/react.svg'
import { useState } from 'react'

const App = () => {

  const [todoList, settodoList] = useState([

  ])

  const addNewToDo = (name) => {
    const newToDo = {
      id: randomIntFromInterval(1, 1000000),
      name: name
    }
    settodoList([...todoList, newToDo])
  }

  const deleteToDo = (id) => {
      const newToDo = todoList.filter(item => item.id !== id)
      settodoList(newToDo)
  } 

  const randomIntFromInterval = (min, max) => { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  return (
    <div className='todo-container'>
      <div className='todo-title'>ToDo list</div>
      <TodoNew
        addNewToDo={addNewToDo}
      />'

      {todoList.length > 0 ?
        < TodoData
          todoList={todoList}
          deleteToDo={deleteToDo}
        />
        :
        <div className='Image'>
          <img src={imgLogo} className='logo' />
        </div>
      }

    </div>
  )
}

export default App
