import React, { useContext, useState } from 'react'
import './Category.css'
const Category = () => {

  const handleEdit = e => {
    e.preventDefault();
    //setCategory(e.target.id);
  }

  return (
    <select class="form-control form-control-lg">
      <option selected disabled>Any Category</option>
      <option>Music</option>
      <option>Books</option>
      <option>Programming</option>
    </select>
  )
}
export default Category