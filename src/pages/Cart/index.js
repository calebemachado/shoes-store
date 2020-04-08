import React from 'react'
import { MdRemoveCircleOutline, MdAddCircleOutline, MdDelete } from 'react-icons/md'

import { Container, ProductTable, Total } from './styles'

function Cart() {
  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th />
            <th>PRODUCT</th>
            <th>QTD</th>
            <th>SUBTOTAL</th>
            <th />
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <img
                src='https://static.netshoes.com.br/produtos/tenis-de-caminhada-leve-confortavel/06/E74-0492-006/E74-0492-006_zoom2.jpg?ts=1579006188&ims=326x'
                alt='Tênis'
              />
            </td>
            <td>
              <strong>Tenis</strong>
              <span>R$129,90</span>
            </td>
            <td>
              <div>
                <button type='button'>
                  <MdRemoveCircleOutline size={20} color='#7159c1' />
                </button>
                <input type='number' readOnly value={1} />
                <button type='button'>
                  <MdAddCircleOutline size={20} color='#7159c1' />
                </button>
              </div>
            </td>
            <td>
              <strong>R$258,90</strong>
            </td>
            <td>
              <button type='button'>
                <MdDelete size={20} color='#7159c1' />
              </button>
            </td>
          </tr>
        </tbody>
      </ProductTable>

      <footer>
        <button type='button'>Close out</button>

        <Total>
          <span>TOTAL</span>
          <strong>R$1920,00</strong>
        </Total>
      </footer>
    </Container>
  )
}

export default Cart