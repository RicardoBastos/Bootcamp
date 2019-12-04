import React from 'react';

import {
  MdRemoveCircleOutline,
  MdDelete,
  MdAddCircleOutline,
} from 'react-icons/md';
import { Container, Total, ProductTable } from './styles';

export default function Cart() {
  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th />
            <th>Produto</th>
            <th>Qtd</th>
            <th>SubTotal</th>
            <th />
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <img
                src="https://static.netshoes.com.br/produtos/tenis-nike-court-lite-2-masculino/38/HZM-1864-038/HZM-1864-038_detalhe2.jpg?ims=326x"
                alt="Tenis"
              />
            </td>
            <td>
              <strong>Tenis legal</strong>
              <span>R$60,00</span>
            </td>
            <td>
              <button type="button">
                <MdRemoveCircleOutline size={20} color="#7159c1" />
              </button>
              <input type="number" readOnly value={1} />
              <button type="button">
                <MdAddCircleOutline size={20} color="#7159c1" />
              </button>
            </td>
            <td>
              <strong>R$30.000,00</strong>
            </td>
            <td>
              <button type="button">
                <MdDelete size={20} color="#7159c1" />
              </button>
            </td>
          </tr>
        </tbody>
      </ProductTable>

      <footer>
        <button type="button">Finalizar Pedido</button>
      </footer>

      <Total>
        <span>Total</span>
        <strong>R$4.000,00</strong>
      </Total>
    </Container>
  );
}
