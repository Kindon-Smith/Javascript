import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const userName = "Kindon";
  const currentTime = "3:30 PM";

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <h1>Hello, {userName}</h1>
        <div className="time">{currentTime}</div>
      </header>

      {/* Main Content Area */}
      <main className="main-content">
        {/* Left sidebar - Todo list */}
        <aside className="sidebar left-sidebar">
          <h2>Todo List</h2>
          <ul>
            <li>Todo item</li>
          </ul>
        </aside>

        {/* Center area - Widgets */}
        <section className="widgets"> 
          <div className="widget">Weather</div>
          <div className="widget">Newsfeed</div>
          <div className="widget">Notes</div>
        </section>
      </main>
    </div>
  )
}

export default App
