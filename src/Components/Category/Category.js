import React, { useContext, useState } from 'react'
import { CategoryContext } from '../../ContextAPI/CategoryContext'
import './Category.css'

const Category = () => {

  const [category, setCategory] = useContext(CategoryContext);
  const handleEdit = e => {
    e.preventDefault();
    console.log(e.target.id)
    setCategory(e.target.id);
  }

  return (
    <select class="form-control form-control-lg">
      <option selected disabled>Any Category</option>
      <option id={2} onChange={handleEdit}>Music</option>
      <option id={3} onChange={handleEdit}>Books</option>
      <option id={4} onChange={handleEdit}>Programming</option>
    </select>
  )
}
export default Category