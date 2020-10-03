import React, { useContext } from 'react'
import './Difficulty.css'
import { SettingsContext } from '../../ContextAPI/SettingsContext'

const Difficulty = () => {

  const [category, setCategory, difficulty, setDifficulty] = useContext(SettingsContext);

  const handleChange = e => {
    e.preventDefault();
    setDifficulty(e.target.value);
  }

  return (
    <form>
      <select  type="select" value={difficulty} onChange={handleChange} className="form-control form-control-lg">
        <option name="easy" value="easy">Easy</option>
        <option name="medium" value="medium">Medium</option>
        <option name="hard" value="hard">Hard</option>
      </select>
    </form>
  )
}
export default Difficulty