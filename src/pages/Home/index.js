import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import api from '../../services/api'
import { formatPrice } from '../../util/format'

import { MdAddShoppingCart } from 'react-icons/md'
import { ProductList } from './styles'

import * as CartActions from '../../store/modules/cart/actions'

const Home = () => {
  const amount = useSelector((state) =>
    state.cart.reduce((amount, product) => {
      amount[product.id] = product.amount
      return amount
    }, {})
  )
  const [products, setProducts] = useState([])
  const dispatch = useDispatch()

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

  const handleAddProduct = (id) => {
    dispatch(CartActions.addToCartRequest(id))
  }

  return (
    <ProductList>
      {products.map((product) => (
        <li key={product.id}>
          <img src={product.image} alt={product.title} />
          <strong>{product.title}</strong>
          <span>{product.priceFormatted}</span>

          <button type='button' onClick={() => handleAddProduct(product.id)}>
            <div>
              <MdAddShoppingCart size={16} color='#FFF' /> {amount[product.id] || 0}
            </div>

            <span>ADD TO CART</span>
          </button>
        </li>
      ))}
    </ProductList>
  )
}

export default Home
