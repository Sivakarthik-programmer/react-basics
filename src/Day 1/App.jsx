import { useState } from 'react'
import Counter from './Day 1/components/Counter'
import NameInput from './Day 1/components/NameInput'
import './App.css'
import ScoreBoard from './Day 1/components/ScoreBoard'
import UserCard from './Day 1/components/UserCard'

function App() {
  // 1. Create a state called "name" with your name as default value
  const [name, setName] = useState('Sivakarthik')
  
  // 2. Create a state called "count" starting at 0
  const [count, setCount] = useState(0)

  const[playerName, setPlayerName] = useState('')
  //  Expected behaviour:
  // User types "Karthik" in ScoreBoard input
  // Clicks submit
  // App.jsx h2 shows "Player: Karthik"
  
  return (
    <>

      <h1>Hello, {name}!</h1>
      <h2>Player: {playerName}</h2>
      <NameInput name={name} onChange={(e) => setName(e.target.value)} />
      <Counter
        count={count}
        onIncrement={() => setCount(count + 1)}
        onDecrement={() => setCount(count > 0 ? count - 1 : 0)}
        onReset={() => setCount(0)}
      />
      <ScoreBoard onSubmit={(playerName) => setPlayerName(playerName)} />



      <UserCard />
    </>
  )
}

export default App
