import { useState } from "react"

const TodoNew = (props) => {

  const { addNewToDo, settodoList } = props
  // useState Hook
  const [inputValue, setinputValue] = useState("Hoainghia_hoidanit")

  const onChange = (name) => {
    setinputValue(name)
  }

  const handClick = () => {
    addNewToDo(inputValue)
    setinputValue("")
  }

  return (
    <div className='todo-new'>
      <input type="text" onChange={(event) => onChange(event.target.value)} value={inputValue} />

      <button style={{ cursor: "pointer" }} onClick={handClick}>
        Add
      </button>

      <div>
        My text input = {inputValue}
      </div>
    </div>
  )
}

export default TodoNew