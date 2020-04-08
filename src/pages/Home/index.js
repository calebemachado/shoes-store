import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import api from '../../services/api'
import { formatPrice } from '../../util/format'

import { MdAddShoppingCart } from 'react-icons/md'
import { ProductList } from './styles'

import * as CartActions from '../../store/modules/cart/actions'

const Home = ({ addToCart, amount }) => {
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
    addToCart(product)
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
              <MdAddShoppingCart size={16} color='#FFF' /> {amount[product.id] || 0}
            </div>

            <span>ADD TO CART</span>
          </button>
        </li>
      ))}
    </ProductList>
  )
}

const mapStateToProps = (state) => ({
  amount: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount
    return amount
  }, {}),
})

const mapDispatchToProps = (dispatch) => bindActionCreators(CartActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Home)
