import React from 'react'
import Img from '../assets/react.svg'
export default function ProductList() {
  return (
    <div className='productList'>
        <div className='product_card'>
            <p className='card_name'>Sản Phẩm 1</p>
            <p className='card_price'>50000</p>
            <img className='card_img active' src={Img}/>
            <img className='card_img' src={Img}/>
            <img className='card_img' src={Img}/>
        </div>
    </div>
  )
}
