import React, {useState, createContext} from 'react'

export const DifficultyContext = createContext();

export const DifficultyProvider = props => {
    const [difficulty, setDifficulty] = useState("easy");
    return(
        <DifficultyContext.Provider value={difficulty}>
            {props.children}
        </DifficultyContext.Provider>
    );
}