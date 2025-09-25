import Header from './components/Header/Header';
import TodoList from './components/TodoList/TodoList';
import WeatherWidget from './components/WeatherWidget/WeatherWidget';
import NewsWidget from './components/NewsWidget/NewsWidget';
import NoteWidget from './components/NoteWidget/NoteWidget';
import './App.css'

function App() {
  return (
    <div className="app">
      <Header userName="Kindon"/>
      <main className="main-content">
        {/* Left sidebar - Todo list */}
        <TodoList />
        <div className="widgets"> 
          <WeatherWidget />
          <NewsWidget />
          <NoteWidget />
        </div>
      </main>
    </div>
  )
}

export default App
