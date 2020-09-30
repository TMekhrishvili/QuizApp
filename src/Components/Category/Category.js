import React, { useContext } from 'react'
import './Category.css'
import { Link } from 'react-router-dom'
import { CategoryContext } from '../../ContextAPI/CategoryContext'

const Category = () => {

  const [category, setCategory] = useContext(CategoryContext);

  const handleEdit = e => {
    e.preventDefault();
    setCategory(e.target.id);
  }

  return (
    <div>
      {/*<Link to="/difficulty">Category</Link>*/}
      <form>
        <button id={9} type="button" onClick={handleEdit}><Link style={{ textDecoration: 'none' }} to="/difficulty">General</Link></button>
        <button id={10} type="button" onClick={handleEdit}><Link style={{ textDecoration: 'none' }} to="/difficulty">Books</Link></button>
        <button id={11} type="button" onClick={handleEdit}><Link style={{ textDecoration: 'none' }} to="/difficulty">Films</Link></button>
        <button id={12} type="button" onClick={handleEdit}><Link style={{ textDecoration: 'none' }} to="/difficulty">Music</Link></button>
        <button id={18} type="button" onClick={handleEdit}><Link style={{ textDecoration: 'none' }} to="/difficulty">Computer</Link></button>
        <button id={19} type="button" onClick={handleEdit}><Link style={{ textDecoration: 'none' }} to="/difficulty">Mathematics</Link></button>
      </form>
    </div>
  )
}
export default Category