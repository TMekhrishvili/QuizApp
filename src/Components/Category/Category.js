import React, { useContext } from 'react'
import { SettingsContext } from '../../ContextAPI/SettingsContext'
import './Category.css'

const Category = () => {

  const [category, setCategory, difficulty, setDifficulty] = useContext(SettingsContext);

  const handleChange = (e) => {
    e.preventDefault();
    setCategory(parseInt(e.target.value));
  }

  return (
    <form>
      <select type="select" value={category} onChange={handleChange} className="form-control form-control-lg">
        <option name="General" value={9}>General knowledge</option>
        <option name="Books" value={10}>Books</option>
        <option name="Film" value={11}>Film</option>
        <option name="Music" value={12}>Music</option>
        <option name="Musicals" value={13}>Musicals and Theatres</option>
        <option name="Musicals" value={14}>Musicals</option>
        <option name="Video" value={15}>Video Games</option>
        <option name="Board" value={16}>Board Games</option>
        <option name="Natural" value={17}>Science and Natural</option>
        <option name="Computer" value={18}>Science: Computer</option>
        <option name="Mathematics" value={19}>Science: Mathematics</option>
        <option name="Mithology" value={20}>Mithology</option>
        <option name="Sports" value={21}>Sports</option>
        <option name="Geography" value={22}>Geography</option>
        <option name="Geography" value={23}>Geography</option>
        <option name="Politics" value={24}>Politics</option>
        <option name="Arts" value={25}>Arts</option>
        <option name="Celebrities" value={26}>Celebrities</option>
        <option name="Animal" value={27}>Animal</option>
      </select>
    </form>
  )
}
export default Category