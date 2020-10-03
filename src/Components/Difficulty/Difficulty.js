import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { DifficultyContext } from '../../ContextAPI/DifficultyContext'

const Difficulty = () => {
  //const [difficulty, setDifficulty] = useContext(DifficultyContext);

  const handleEdit = e => {
    e.preventDefault();
    //setDifficulty(e.target.name);
  }

  return (
    <div>
    </div>
  )
}
export default Difficulty