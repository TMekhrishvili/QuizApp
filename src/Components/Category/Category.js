import React from 'react'
import './Category.css'
import {Link} from 'react-router-dom'
const Category = () => (
    <div>
      {/*<Link to="/difficulty">Category</Link>*/}
      <form>
        <button><Link style={{textDecoration: 'none'}} to="/difficulty">General</Link></button>
        <button>Books</button>
        <button>Films</button>
        <button>Music</button>
        <button>Computer</button>
        <button>Mathematics</button>
      </form>
    </div>
  )
export default Category