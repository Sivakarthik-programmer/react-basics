import { useState } from "react"
import NameInput from "./NameInput"


//  Expected behaviour:
// User types "Karthik" in ScoreBoard input
// Clicks submit
// App.jsx h2 shows "Player: Karthik"

function ScoreBoard({ onSubmit }) {
 const [playerName, setPlayerName] = useState('')

  return (
    <div>
        <NameInput name={playerName}
            onChange={(e) => setPlayerName(e.target.value)}/>
        <button onClick={() => onSubmit(playerName)}>Submit</button>
    </div>
  )
}

export default ScoreBoard