import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  MdRemoveCircleOutline,
  MdDelete,
  MdAddCircleOutline
} from "react-icons/md";
import * as CartActions from "../../store/modules/cart/actions";
import { Container, Total, ProductTable } from "./styles";
import { formatPrice } from "../../utils/format";

export default function Cart() {
  const total = useSelector(state =>
    formatPrice(
      state.cart.reduce((totalSum, product) => {
        return totalSum + product.price * product.amount;
      }, 0)
    )
  );

  const cart = useSelector(state =>
    state.cart.map(product => ({
      ...product,
      subtotal: formatPrice(product.price * product.amount)
    }))
  );

  const dispatch = useDispatch();

  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th> </th>
            <th>Produto</th>
            <th>Qtd</th>
            <th>SubTotal</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          {cart.map(product => (
            <tr key={product.id}>
              <td>
                <img src={product.image} alt={product.title} />
              </td>
              <td>
                <strong>{product.title}</strong>
                <span>{product.priceFormatted}</span>
              </td>
              <td>
                <div>
                  <button
                    type="button"
                    onClick={() =>
                      dispatch(
                        CartActions.updateAmountRequest(
                          product.id,
                          product.amount - 1
                        )
                      )
                    }
                  >
                    <MdRemoveCircleOutline size={20} color="#7159c1" />
                  </button>
                  <input type="number" readOnly value={product.amount} />
                  <button
                    type="button"
                    onClick={() =>
                      dispatch(
                        CartActions.updateAmountRequest(
                          product.id,
                          product.amount + 1
                        )
                      )
                    }
                  >
                    <MdAddCircleOutline size={20} color="#7159c1" />
                  </button>
                </div>
              </td>
              <td>
                <strong>{product.subtotal}</strong>
              </td>
              <td>
                <button
                  type="button"
                  onClick={() =>
                    dispatch(CartActions.removeFromCart(product.id))
                  }
                >
                  <MdDelete size={20} color="#7159c1" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </ProductTable>

      <footer>
        <button type="button">Finalizar Pedido</button>
        <Total>
          <span>Total</span>
          <strong>{total}</strong>
        </Total>
      </footer>
    </Container>
  );
}
