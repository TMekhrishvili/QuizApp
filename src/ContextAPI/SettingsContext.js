import React, { createContext, useState } from 'react'

export const SettingsContext = createContext();

export const SettingsProvider = props => {
    const [category, setCategory] = useState(8);
    const [difficulty, setDifficulty] = useState("easy");

    return <SettingsContext.Provider
        value={[
            category,
            setCategory,
            difficulty,
            setDifficulty
        ]}>
        {props.children}
    </SettingsContext.Provider>;
}