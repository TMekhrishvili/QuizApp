import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'


function Questions () {

  useEffect(()=>{
    fetchItems();
  }, [])

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch("https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple");
    const item = await data.json();
    console.log(item.results);
    setItems(item.results)
  }
  return (
    <div>
      {items.map((item, i) => (
        <Link to={`/qusetion/${i+1}`}><p>{item.question}</p></Link>
      ))}
    </div>
    )
  }
  export default Questions