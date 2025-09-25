import Header from './components/Header/Header';
import TodoList from './components/TodoList/TodoList';
import WeatherWidget from './components/Widgets/WeatherWidget/WeatherWidget';
import NewsWidget from './components/Widgets/NewsWidget/NewsWidget';
import NoteWidget from './components/Widgets/NoteWidget/NoteWidget';
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
