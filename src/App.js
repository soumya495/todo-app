import BackgroundImage from './components/BackgroundImage'
import Header from './components/Header'
import TodoInput from './components/TodoInput'
import { ThemeProvider } from './context/ThemeContext'
import { TodoProvider } from './context/TodoContext'
import DisplayTodos from './components/DisplayTodos'

function App() {
  return (
    <ThemeProvider>
      <BackgroundImage />
      <div className='container'>
        <Header />
        <TodoProvider>
          <TodoInput />
          <DisplayTodos />
        </TodoProvider>
      </div>
    </ThemeProvider>
  )
}

export default App
