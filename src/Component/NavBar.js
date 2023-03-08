import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
const NavBar = () => {
  const products = useSelector((state)=> state.cart_items)
  return (
    <>
    <div style={{display:'flex', alineItem: 'center', justifyContent: 'space-between'}}>
        <span className='logo'>Redux Store</span>
        <div>
            <Link className='navLink' to={'/'}>Home</Link>
            <Link className='navLink' to={'/cart'}>Cart: {products.length}</Link>
            <span className='cartCount'>Count Item: {products.length}</span>
        </div>
    </div>
    </>
  )
}

export default NavBar

