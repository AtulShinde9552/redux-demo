import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { add } from '../store/cartSlice'


const Products = () => {
    const [product, setproduct] = useState([])
    const dispach = useDispatch()

    const fechProduct = async () => {
        const res = await fetch('https://fakestoreapi.com/products')
        const data = await res.json()
        console.log(data);
        setproduct(data)
    }

    useEffect(() => {

        fechProduct()
    }, [])


    const handleAdd = (a) =>{
        dispach(add(a))
    }

    return (
        <ProductsWrapper className='row g-3' >
            {
                product.map(product => (
                    <div className='col-md-3'>
                        <div className='card m-auto mx-4' key={product.id} >
                        <img className='img' src={product.image} alt="" />
                        <h4>{product.title.slice(0, 20) }...</h4>
                        <h5>{product.price}</h5>
                        <button onClick={()=>handleAdd(product)} className='btn'>Add To Cart</button>
                    </div>
                    </div>
                
                ))}
        </ProductsWrapper>
    )
}

export default Products

export const ProductsWrapper = styled.div`
    /* display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px; */

    .card{
    height: 300px;
    display: flex;
    background-color:#fff;
    padding: 20px;
    text-align: center;
    border-radius: 20px;
    :hover{
        .btn{
            background-color: #764abc;
            color: #fff;
            transform: scale(1.1);
            transition: .8s;
            /* width: 200px; */
            
        }
    }

    .btn{
    margin: auto;
    border: none;
    outline: none;
    /* background: #764abc; */
    background-color: #764abc80;
    padding: 5px 10px;
    color: #000;
    border-radius: 5px;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    
    /* :hover{
    
} */
    }

    .img{
    height: 100px;
    
    
}
}
`;