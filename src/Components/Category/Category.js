import React, { useContext, useState } from 'react'
import './Category.css'
import { Link } from 'react-router-dom'
import { CategoryContext } from '../../ContextAPI/CategoryContext'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Row } from 'reactstrap'
const Item = () => (<Row>
  <DropdownItem>Foo Action</DropdownItem>
</Row>)
const Category = () => {

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(prevState => !prevState);

  const handleEdit = e => {
    e.preventDefault();
    //setCategory(e.target.id);
  }

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>
        აირჩიეთ კატეგორია
      </DropdownToggle>
      <DropdownMenu>
        <Item />
      </DropdownMenu>
    </Dropdown>
  )
}
export default Category