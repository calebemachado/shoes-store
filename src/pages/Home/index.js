import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import api from '../../services/api'
import { formatPrice } from '../../util/format'

import { MdAddShoppingCart } from 'react-icons/md'
import { ProductList } from './styles'

const Home = ({ dispatch }) => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    let ignore = false
    const runEffect = async () => {
      const response = await api.get('products')

      if (!ignore) {
        const data = response.data.map((product) => ({
          ...product,
          priceFormatted: formatPrice(product.price),
        }))

        setProducts(data)
      }

      return () => {
        ignore = true
      }
    }
    runEffect()
  }, [])

  const handleAddProduct = (product) => {
    dispatch({
      type: 'ADD_TO_CART',
      product,
    })
  }

  return (
    <ProductList>
      {products.map((product) => (
        <li key={product.id}>
          <img src={product.image} alt={product.title} />
          <strong>{product.title}</strong>
          <span>{product.priceFormatted}</span>

          <button type='button' onClick={() => handleAddProduct(product)}>
            <div>
              <MdAddShoppingCart size={16} color='#FFF' />
            </div>

            <span>ADD TO CART</span>
          </button>
        </li>
      ))}
    </ProductList>
  )
}

export default connect()(Home)
