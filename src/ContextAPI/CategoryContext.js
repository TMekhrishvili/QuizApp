import React, {useState, createContext} from 'react'

export const CategoryContext = createContext();

export const CategoryProvider = props => {
    const [category, setCategory] = useState("easy");
    return(
        <CategoryContext.Provider value={category}>
            {props.children}
        </CategoryContext.Provider>
    );
}