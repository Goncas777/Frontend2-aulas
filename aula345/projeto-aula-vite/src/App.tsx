import './App.css'
import Counter from './components/Counter'
import ToggleImage from './components/ToggleImage'
import UserProfile from './components/UserProfile'
import Hour from './components/Hour'
import CounterTime from './components/Exercicio'

function App() {
  return <div className='main-container'>
    <Counter/>
    <ToggleImage/>
    <UserProfile/>
    <Hour/>
    <div className="exercicio-container">
      <CounterTime/>
    </div>
  </div>
}

export default App