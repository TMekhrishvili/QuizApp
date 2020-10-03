import React, { useContext } from 'react'
import './Difficulty.css'
import { DifficultyContext } from '../../ContextAPI/DifficultyContext'

const Difficulty = () => {

  const [difficulty, setDifficulty] = useContext(DifficultyContext);

  const handleEdit = e => {
    e.preventDefault();
    console.log(e.target.name)
    setDifficulty(e.target.name);
  }

  return (
    <form>
      <select class="form-control form-control-lg">
        <option selected disabled>Any Difficulty</option>
        <option onChange={handleEdit} name="easy">Easy</option>
        <option onChange={handleEdit} name="medium">Medium</option>
        <option onChange={handleEdit} name="hard">Hard</option>
      </select>
    </form>
  )
}
export default Difficulty