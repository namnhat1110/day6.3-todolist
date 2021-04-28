import React from 'react'
import Header from './components/Header'
import TodoList from './components/TodoList'
import './App.css';


function App() {
  return (
    <div className="App">
      <nav>
        <section>
          <h1>Redux Fundamentals Example</h1>

          <div className="navContent">
            <div className="navLinks"></div>
          </div>
        </section>
      </nav>
      <section>
        <h2>Welcome to the Redux Fundamentals example app!</h2>
        <Header />
        <TodoList />
      </section>
    </div>
  )
}

export default App
