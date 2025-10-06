import { useState } from 'react';

export default function Player({ initialName, symbol, isActive}) {
    const [ playerName, setPlayerName ] = useState(initialName);
    const [ isEditing, setIsEditing ] = useState(false);

    function handleEdition() {
        setIsEditing((editing) => !editing); //we should never do this: setIsEditing(!isEditing); if we wrote this sentence twice, it would do 
        //the same as if we called it once, cause the variable isEditing has the same value in this instant. React schedules the state update.
        //On the contrary, calling the function like this will correctly leave the isEditing value the same as it is right now, as we will always 
        //be working with the latest available state value
    }

    let editablePlayerName= <span className="player-name">{playerName}</span>;

    if(isEditing) {
        // text= "Save";
        editablePlayerName= <input type="text" required value={playerName} onChange={(e) => setPlayerName(e.target.value)}></input>;
    }

    return (
        <li className={isActive ? "active" : undefined}>
            <span className="player">
              {editablePlayerName}
              <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEdition}>{isEditing ? 'Save': 'Edit'}</button>
        </li>
    )
}