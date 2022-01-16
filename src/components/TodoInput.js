import { v4 as uuidv4 } from 'uuid'
import { useState, useContext } from 'react'
import todoContext from '../context/TodoContext'

function TodoInput() {
  const [text, setText] = useState('')
  const { addTodo } = useContext(todoContext)

  const handleChange = (e) => {
    setText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (text !== '') {
      addTodo({
        id: uuidv4(),
        completed: false,
        text,
      })
      setText('')
    }
  }

  return (
    <form className='todo-input-container' onClick={handleSubmit}>
      <input
        type='text'
        value={text}
        onChange={handleChange}
        className='todo-input'
        placeholder='Create a new todo...'
      />
      <button type='submit' className='circle'></button>
    </form>
  )
}

export default TodoInput
