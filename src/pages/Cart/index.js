import React from 'react';
import { MdRemoveCircleOutline, MdAddCircleOutline, MdDelete } from 'react-icons/md';

import { Container, ProductTable, Total } from './styles';

function Cart() {
  return(
    <Container>
      <ProductTable>  
        <thead>
          <tr>
            <th />
            <th>PRODUTO</th>
            <th>QTD</th>
            <th>SUBTOTAL</th>
            <th />
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <img 
                src="https://static.netshoes.com.br/produtos/tenis-adidas-fluidstreet-masculino/72/NQQ-4629-172/NQQ-4629-172_zoom2.jpg?ims=326x" 
                lt="Tênis"
              />
            </td>
            <td>
              <strong>Tênis muito massa</strong>
              <span>R$129,90</span>
            </td>
            <td>
              <button type="button">
                <MdRemoveCircleOutline size={20} color="#7159c1"/>
              </button>
              <input type="number" readOlny value={1} ></input>
              <button type="button">
                <MdAddCircleOutline size={20} color="#7159c1"/>
              </button>
            </td>
            <td>
              <strong>R$258,80</strong>
            </td>
            <button type="button">
                <MdDelete size={20} color="#7159c1"></MdDelete>
            </button>
          </tr>
        </tbody>
      </ProductTable>
      <footer>
        <button type="button">Finalizar pedido</button>
        <Total>
          <span>TOTAL</span>
          <strong>R$1920,28</strong>
        </Total>
      </footer>
    </Container>
  );
}

export default Cart;