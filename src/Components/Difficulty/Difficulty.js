import React, { useContext } from 'react'
import './Difficulty.css'
import { SettingsContext } from '../../ContextAPI/SettingsContext'

const Difficulty = () => {

  const [setDifficulty] = useContext(SettingsContext);

  const handleEdit = e => {
    e.preventDefault();
    console.log(e.target.name)
    setDifficulty(e.target.name);
  }

  return (
    <form>
      <select className="form-control form-control-lg">
        <option selected disabled>Any Difficulty</option>
        <option onChange={handleEdit} name="easy">Easy</option>
        <option onChange={handleEdit} name="medium">Medium</option>
        <option onChange={handleEdit} name="hard">Hard</option>
      </select>
    </form>
  )
}
export default Difficulty