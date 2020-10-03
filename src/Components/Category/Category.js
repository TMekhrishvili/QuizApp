import React, { useContext } from 'react'
import { SettingsContext } from '../../ContextAPI/SettingsContext'
import './Category.css'

const Category = () => {

  const [setCategory] = useContext(SettingsContext);
  const handleEdit = e => {
    e.preventDefault();
    console.log(e.target.id)
    setCategory(e.target.id);
  }

  return (
    <select className="form-control form-control-lg">
      <option selected disabled>Any Category</option>
      <option id={2} onChange={handleEdit}>Music</option>
      <option id={3} onChange={handleEdit}>Books</option>
      <option id={4} onChange={handleEdit}>Programming</option>
    </select>
  )
}
export default Category