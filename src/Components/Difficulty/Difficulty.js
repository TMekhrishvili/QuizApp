import React from 'react'
import './Difficulty.css'
const Difficulty = () => {


  const handleEdit = e => {
    e.preventDefault();
    //setCategory(e.target.id);
  }

  return (
    <select class="form-control form-control-lg">
      <option selected disabled>Any Difficulty</option>
      <option>Easy</option>
      <option>Medium</option>
      <option>Hard</option>
    </select>
  )
}
export default Difficulty