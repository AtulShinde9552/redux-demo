import React from 'react'
import Products from '../Component/Products'

const  Home = () => {
  return (
    <div>
        <h2 className='heading'>Wellcome To the Redux Toolkit Store</h2>

        <section>
            <h3>Products</h3>
            <Products/>
        </section>
    </div>
  )
}

export default Home