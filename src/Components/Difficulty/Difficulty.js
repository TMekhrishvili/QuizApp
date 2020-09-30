import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { DifficultyContext } from '../../ContextAPI/DifficultyContext'

const Difficulty = () => {
  const [difficulty, setDifficulty] = useContext(DifficultyContext);

  const handleEdit = e => {
    e.preventDefault();
    setDifficulty(e.target.name);
  }

  return (
    <div>
      <form>
        <button name="easy" onClick={handleEdit}><Link style={{ textDecoration: 'none' }} to="/questions/1">Easy</Link></button>
        <button name="medium" onClick={handleEdit}><Link style={{ textDecoration: 'none' }} to="/questions/1">Medium</Link></button>
        <button name="hard" onClick={handleEdit}><Link style={{ textDecoration: 'none' }} to="/questions/1">Hard</Link></button>
      </form>
    </div>
  )
}
export default Difficulty