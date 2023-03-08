import React from 'react'
import { ProductsWrapper } from '../Component/Products'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { remove } from '../store/cartSlice'

const Cart = () => {
  const dispach = useDispatch()


  const handleAdd = (id) =>{
    dispach(remove(id))
  }

  const products = useSelector((state)=> state.cart_items)
  return (
    <ProductsWrapper className='row g-3' >
            {
                products.map(product => (
                    <div className='col-md-3 '>
                        <div className='card m-auto mx-4' key={product.id} >
                        <img className='img' src={product.image} alt="" />
                        <h4>{product.title.slice(0, 20) }...</h4>
                        <h5>{product.price}</h5>
                        <button onClick={()=>handleAdd(product.id)} className='btn'>Remove</button>
                    </div>
                    </div>
                    
                ))}
        </ProductsWrapper>
  )
}

export default Cart
